import React, { useEffect, useState, useCallback } from 'react';
import Axios from 'axios';
import uid from 'uid';
import { useSelector, useDispatch } from 'react-redux';
import * as S from '../presentational/Foods.styles';
import Search from '../presentational/Search';
import FoodModel from '../presentational/FoodModel';
import FoodItem from '../presentational/FoodItem';
import { selectModal, closeModal, openModal } from '../../features/home/homeSlice';

const Foods = () => {
  const dispatch = useDispatch();

  const [items, setitems] = useState([]);
  const [more, setMore] = useState(false);
  const [page, setPage] = useState(1);
  const [filter, setFilter] = useState('');

  const modal = useSelector(selectModal);

  const requestFood = useCallback(
    () => {
      Axios.get(`${process.env.REACT_APP_BACKEND_URL}/foods?page=${page}&size=15`,
        { withCredentials: true })
        .then(response => {
          setitems(items => [...items, ...response.data.foods]);
          const { data: { page: pageNow, totalPages } } = response;
          setMore(totalPages > pageNow);
        });
    },
    [page],
  );

  useEffect(() => {
    requestFood();
  }, [requestFood]);

  return (
    <S.Food>
      <FoodModel open={modal.open} modal={modal.item} closeModal={() => dispatch(closeModal())} />
      <Search setFilter={setFilter} filter={filter} />
      {items
        .filter(item => (filter !== '' ? item.name.toLowerCase().includes(filter.toLowerCase()) : item.name))
        .map(item => (
          <FoodItem key={uid()} item={item} handleClick={food => dispatch(openModal(food))} />
        ))}
      {more
        ? <S.More onClick={() => setPage(page + 1)}>Load More</S.More>
        : <div>There&apos;s no more food D:</div>}
    </S.Food>
  );
};

export default Foods;
