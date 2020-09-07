import React from 'react';
import PropTypes, { oneOfType } from 'prop-types';
import * as S from './Foods.styles';

const FoodItem = ({ handleClick, item }) => {
  const { name = '', images: [{ url } = ''] = '' } = item;

  return (
    <S.FoodItem onClick={() => handleClick(item)}>
      <S.Image src={url} />
      <h1>{name}</h1>
    </S.FoodItem>
  );
};

FoodItem.defaultProps = {
  item: {},
  handleClick: () => {},
};

FoodItem.propTypes = {
  item: PropTypes.objectOf(oneOfType([PropTypes.string, PropTypes.number, PropTypes.array])),
  handleClick: PropTypes.func,
};

export default FoodItem;
