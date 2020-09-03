import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import { useDispatch } from 'react-redux';
import uid from 'uid';
import * as S from '../presentational/Foods.styles';

const Foods = () => {
  const [items, setitems] = useState([]);

  useEffect(() => {
    Axios.get(`${process.env.REACT_APP_BACKEND_URL}/foods?size=15`,
      { withCredentials: true })
      .then(response => {
        setitems(items => [...items, ...response.data.foods]);
      })
      .catch(e => console.log(e));
  }, []);

  return (
    <S.Food>
      {items.map(item => {
        const { name, images: [{ url }] } = item;
        return (
          <S.FoodItem key={uid()}>
            <img src={url} alt={name} />
            <h1>{name}</h1>
          </S.FoodItem>
        );
      })}
    </S.Food>
  );
};

export default Foods;
