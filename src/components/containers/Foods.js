import React, { useEffect, useState, useCallback } from 'react';
import Axios from 'axios';
import uid from 'uid';
import * as S from '../presentational/Foods.styles';
import Search from '../presentational/Search';
import FoodModel from '../presentational/FoodModel';

const Foods = () => {
  const [items, setitems] = useState([]);
  const [more, setMore] = useState(false);
  const [page, setPage] = useState(1);
  const [filter, setFilter] = useState('');
  const [open, setOpen] = useState(false);
  const [model, setModel] = useState({});

  const requestFood = useCallback(
    () => {
      Axios.get(`${process.env.REACT_APP_BACKEND_URL}/foods?page=${page}&size=15`,
        { withCredentials: true })
        .then(response => {
          setitems(items => [...items, ...response.data.foods]);
          const { data: { page: pageNow, totalPages } } = response;
          setMore(totalPages > pageNow);
        })
        .catch(e => console.log(e));
    },
    [page],
  );

  useEffect(() => {
    requestFood();
  }, [requestFood]);

  const handleClick = food => {
    setOpen(true);
    setModel(food);
  };

  return (
    <S.Food>
      <FoodModel open={open} model={model} setOpen={setOpen} />
      <Search setFilter={setFilter} filter={filter} />
      {items
        .filter(item => (filter !== '' ? item.name.toLowerCase().includes(filter.toLowerCase()) : item.name))
        .map(item => {
          const { name, images: [{ url }] } = item;
          return (
            <S.FoodItem key={uid()} onClick={() => handleClick(item)}>
              <img src={url} alt={name} />
              <h1>{name}</h1>
            </S.FoodItem>
          );
        })}
      {more
        ? <S.More onClick={() => setPage(page + 1)}>Load More</S.More>
        : <div>There's no more food D:</div>}
    </S.Food>
  );
};

export default Foods;
