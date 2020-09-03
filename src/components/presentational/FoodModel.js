import React from 'react';
import PropTypes, { oneOfType } from 'prop-types';
import * as S from './Foods.styles';
import ModelInfo from './ModelInfo';

const FoodModel = ({ open, model, setOpen }) => {
  const closeWithEsc = e => {
    if (e.key === 'Escape' || e.key === 'Enter') setOpen(false);
  };

  return (
    <S.FoodModel open={open}>
      <i
        className="fas fa-times"
        onClick={() => setOpen(false)}
        role="button"
        tabIndex="0"
        onKeyDown={closeWithEsc}
        aria-label="Close"
      />
      {open && <ModelInfo model={model} />}
    </S.FoodModel>
  );
};

FoodModel.defaultProps = {
  model: {},
  open: false,
};

FoodModel.propTypes = {
  model: PropTypes.objectOf(oneOfType([PropTypes.string, PropTypes.number, PropTypes.array])),
  open: PropTypes.bool,
  setOpen: PropTypes.func.isRequired,

};

export default FoodModel;
