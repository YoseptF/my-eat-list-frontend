import React from 'react';
import Axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import {
  updateUser, updateLogginStatus, selectUser, closeModal, selectModal, openModal,
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
  const logout = () => {
    Axios.delete(`${process.env.REACT_APP_BACKEND_URL}/logout`,
      { withCredentials: true })
      .then(() => {
        dispatch(updateUser({ user: {} }));
        dispatch(updateLogginStatus(false));
      })
      .catch(e => console.log(e));
  };

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
      <button type="button" onClick={logout}>logout</button>
      <FoodList list={foods} handleClick={food => dispatch(openModal(food))} />
    </S.Home>
  );
};

export default Home;
