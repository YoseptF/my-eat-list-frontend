import React, { useState } from 'react';
import {
  CircularInput, CircularTrack, CircularProgress, CircularThumb,
} from 'react-circular-input';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import Axios from 'axios';
import * as S from '../presentational/Home.styles';
import { selectUser } from '../../features/home/homeSlice';

const Donut = ({ title }) => {
  const [open, setOpen] = useState(false);
  const user = useSelector(selectUser);

  const daily = user && user[`daily_${title}`];
  const current = user && user.currentList && user.currentList[`current_${title}`];

  const [value, setValue] = useState(current / daily);

  const handleClick = e => {
    if (!open) { setOpen(!open); } else if (e.target.classList.contains('donutBody')) {
      setOpen(!open);
      const newAmount = +daily * value;
      const int = Math.floor(newAmount);
      const dec = (newAmount % 1).toString().slice(2);
      Axios.post(`${process.env.REACT_APP_BACKEND_URL}/updateDaily/${title}/${int}/${dec || 0}`,
        {},
        { withCredentials: true });
    }
  };

  const twoDecimals = val => Math.trunc(val * 100) / 100;

  const handleChange = e => {
    if (open) {
      setValue(e);
    }
  };

  return (
    <S.Donut onClick={handleClick} open={open} className="donutBody" thickness="100px">
      <CircularInput
        value={value}
        onChange={handleChange}
        radius={open ? 80 : 35}
      >
        <CircularTrack strokeWidth={8} />
        <CircularProgress strokeWidth={8} />
        {open && <CircularThumb r={10} />}
        {open
          ? (
            <>
              <text x={80} y={80} textAnchor="middle" dy="0.3em" fontWeight="bold" fontSize="2.5rem">{twoDecimals(+daily * value)}</text>
              <text x={80} y={200} textAnchor="middle" dy="0.3em" fontWeight="bold" fontSize="2.5rem">{title}</text>
            </>
          )
          : <text x={35} y={35} textAnchor="middle" dy="0.3em" fontWeight="bold" fontSize="0.7rem">{title}</text>}
      </CircularInput>
    </S.Donut>
  );
};

Donut.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Donut;
