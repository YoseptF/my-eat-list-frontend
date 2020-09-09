import React from 'react';
import { CircularTrack, CircularProgress, CircularInput } from 'react-circular-input';
import PropTypes from 'prop-types';
import * as S from './Home.styles';

const LocalDonut = ({ value, title }) => (
  <S.Donut className="donutBody" thickness="40px">
    <CircularInput
      value={value}
      radius={20}
    >
      <CircularTrack strokeWidth={6} />
      <CircularProgress strokeWidth={6} />
      <text x={20} y={20} textAnchor="middle" dy="0.3em" fontWeight="bold" fontSize="0.7rem">{title}</text>
    </CircularInput>
  </S.Donut>
);

LocalDonut.propTypes = {
  value: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
};

export default LocalDonut;
