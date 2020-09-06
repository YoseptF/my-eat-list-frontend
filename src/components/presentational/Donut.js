import React, { useState } from 'react';
import {
  CircularInput, CircularTrack, CircularProgress, CircularThumb,
} from 'react-circular-input';
import * as S from './Home.styles';

const Donut = ({ title }) => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(0.5);

  return (
    <S.Donut onClick={() => setOpen(!open)} open={open}>
      <CircularInput
        value={value}
        onChange={open && setValue}
        radius={open ? 80 : 35}
      >
        <CircularTrack strokeWidth={8} />
        <CircularProgress strokeWidth={8} />
        {open && <CircularThumb r={10} />}
        {open
          ? <text x={80} y={80} textAnchor="middle" dy="0.3em" fontWeight="bold" fontSize="2.5rem">{title}</text>
          : <text x={35} y={35} textAnchor="middle" dy="0.3em" fontWeight="bold" fontSize="0.7rem">{title}</text>}
      </CircularInput>
    </S.Donut>
  );
};

export default Donut;
