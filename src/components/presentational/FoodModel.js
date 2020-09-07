import React from 'react';
import PropTypes, { oneOfType } from 'prop-types';
import * as S from './Foods.styles';
import ModelInfo from '../containers/ModelInfo';

const FoodModel = ({ open, modal, closeModal }) => {
  const closeWithEsc = e => {
    if (e.key === 'Escape' || e.key === 'Enter') closeModal();
  };

  return (
    <S.FoodModel open={open}>
      <i
        className="fas fa-times"
        onClick={() => {
          closeModal();
        }}
        role="button"
        tabIndex="0"
        onKeyDown={closeWithEsc}
        aria-label="Close"
      />
      {open && <ModelInfo modal={modal} />}
    </S.FoodModel>
  );
};

FoodModel.defaultProps = {
  modal: {},
  open: false,
};

FoodModel.propTypes = {
  modal: PropTypes.objectOf(oneOfType([PropTypes.string, PropTypes.number, PropTypes.array])),
  open: PropTypes.bool,
  closeModal: PropTypes.func.isRequired,

};

export default FoodModel;
