/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import PropTypes, { number } from 'prop-types';
import * as S from './Options.styles';

const SelectLifestyle = ({ lifestyleValues, onChange }) => (
  <S.SelectLifeStyle>
    <label htmlFor="lifestyle">LifeStyle</label>
    <select name="lifestyle" id="lifestyle" onChange={onChange}>
      {Object.keys(lifestyleValues).map(
        key => <option key={key} value={key}>{key}</option>,
      )}
    </select>
  </S.SelectLifeStyle>
);

SelectLifestyle.propTypes = {
  lifestyleValues: PropTypes.objectOf(number).isRequired,
  onChange: PropTypes.func.isRequired,
};

export default SelectLifestyle;
