import React from 'react';
import PropTypes from 'prop-types';
import * as S from './App.styles';

const LineMeter = ({
  percentaje, width, height, color,
}) => {
  const clampedPercentaje = Math.max(0, Math.min(percentaje, 100));
  return (
    <S.LineMeter
      maxed={clampedPercentaje >= 100}
      percentaje={clampedPercentaje}
      width={width}
      height={height}
      color={color}
    />
  );
};

LineMeter.defaultProps = {
  percentaje: 75,
  width: '200px',
  height: '7px',
  color: 'red',
};

LineMeter.propTypes = {
  percentaje: PropTypes.number,
  width: PropTypes.string,
  height: PropTypes.string,
  color: PropTypes.string,
};

export default LineMeter;
