/* eslint-disable camelcase */
import React, { useCallback, useState, useEffect } from 'react';
import Axios from 'axios';
import uid from 'uid';
import { useSelector } from 'react-redux';
import * as S from '../presentational/List.styles';
import LocalDonut from '../presentational/LocalDonut';
import { selectUser } from '../../features/home/homeSlice';

const Lists = () => {
  const [items, setItems] = useState([]);
  const user = useSelector(selectUser);
  const { daily_water, daily_sitting, daily_sleep } = user;

  const requestLists = useCallback(
    () => {
      Axios.get(`${process.env.REACT_APP_BACKEND_URL}/food_lists`,
        { withCredentials: true })
        .then(response => {
          setItems(items => [...items, ...response.data]);
        });
    },
    [],
  );

  useEffect(() => {
    requestLists();
  }, [requestLists]);
  return (
    <S.Lists>
      {items.map((item, i, arr) => {
        const {
          current_water, current_sitting, current_sleep, created_at, calories,
        } = item;
        const date = new Date(created_at);
        const caloriesIcon = () => {
          if (!arr[i + 1]) return 'fas fa-dot-circle';
          if (arr[i + 1].calories > calories) return 'fas fa-sort-down';
          if (arr[i + 1].calories < calories) return 'fas fa-sort-up';
          return 'fas fa-grip-lines';
        };
        return (
          <S.ListItem key={uid()}>
            <LocalDonut value={current_water / daily_water} title="water" />
            <LocalDonut value={current_sleep / daily_sleep} title="sleep" />
            <LocalDonut value={current_sitting / daily_sitting} title="sitting" />
            <span>{date.toDateString()}</span>
            <div className="calories">
              <div>
                <h1>CALS</h1>
                <h3>{calories}</h3>
              </div>
              <i className={caloriesIcon()} />
            </div>
          </S.ListItem>
        );
      })}
    </S.Lists>
  );
};

export default Lists;
