import React from 'react';
import PropTypes from 'prop-types';
import uid from 'uid';
import * as S from './Foods.styles';
import FoodItem from './FoodItem';

const FoodList = ({ list, handleClick }) => (
  <S.FoodList>
    {list.map(food => <FoodItem key={uid()} item={food} handleClick={handleClick} />)}
  </S.FoodList>
);

FoodList.defaultProps = {
  list: [],
};

FoodList.propTypes = {
  list: PropTypes.arrayOf(PropTypes.object),
  handleClick: PropTypes.func.isRequired,
};

export default FoodList;
