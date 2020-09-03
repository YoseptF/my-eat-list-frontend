import React from 'react';
import Axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { updateUser, updateLogginStatus, selectUser } from '../../features/home/homeSlice';
import * as S from '../presentational/Home.styles';
import LineMeter from '../presentational/LineMeter';

const Home = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  const logout = () => {
    Axios.delete(`${process.env.REACT_APP_BACKEND_URL}/logout`,
      { withCredentials: true })
      .then(() => {
        dispatch(updateUser({ user: null }));
        dispatch(updateLogginStatus(false));
      })
      .catch(e => console.log(e));
  };
  return (
    <S.Home>
      <S.TopTracker>
        <span>Today's calories</span>
        <LineMeter width="80%" percentaje={98} />
      </S.TopTracker>
      <S.Header>
        <img src={user && user.avatar.url} alt="user profile" />
        <h1>{`Hello ${user && user.username}!`}</h1>
      </S.Header>
      <button type="button" onClick={logout}>logout</button>
    </S.Home>
  );
};

export default Home;
