/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import PropTypes from 'prop-types';
import * as S from './Options.styles';

const FormGroup = ({
  value, onChange, name, type, readOnly, suffix,
}) => {
  const saniticedName = name.replace('_', ' ');
  return (
    <S.FormGroup>
      <label htmlFor={name}>{`${saniticedName} ${suffix && `(${suffix})`}`}</label>
      <input
        type={type}
        value={value}
        id={name}
        name={name}
        onChange={onChange}
        readOnly={readOnly}
      />
    </S.FormGroup>
  );
};

FormGroup.defaultProps = {
  readOnly: false,
  suffix: '',
};

FormGroup.propTypes = {
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  onChange: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  suffix: PropTypes.string,
  readOnly: PropTypes.bool,
};

export default FormGroup;
