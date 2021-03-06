import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectUser, closeModal, selectModal, openModal,
} from '../../features/home/homeSlice';
import * as S from '../presentational/Home.styles';
import LineMeter from '../presentational/LineMeter';
import FoodList from '../presentational/FoodList';
import FoodModel from '../presentational/FoodModel';
import Header from '../presentational/Header';

const Home = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const modal = useSelector(selectModal);

  const {
    calories = 100, currentList: { foods, calories: goalCalories } = {},
  } = user;
  const CaloryPercentaje = (goalCalories * 100) / calories;

  return (
    <S.Home>
      <FoodModel open={modal.open} modal={modal.item} closeModal={() => dispatch(closeModal())} />
      <S.TopTracker>
        <span>Today&apos;s calories</span>
        <LineMeter width="80%" percentaje={CaloryPercentaje} />
        <span>
          of
          {' '}
          {calories}
        </span>
      </S.TopTracker>
      <Header />
      <FoodList list={foods} handleClick={food => dispatch(openModal(food))} />
    </S.Home>
  );
};

export default Home;
