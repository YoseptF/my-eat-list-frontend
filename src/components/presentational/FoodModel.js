import React from 'react';
import PropTypes, { string } from 'prop-types';
import uid from 'uid';
import * as S from './Foods.styles';

const FoodModel = ({ open, model, setOpen }) => {
  const { name, calories, images } = model;
  const [{ url: featured }] = images || [{ url: '' }];

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
      {open
        && (
          <S.ModelInfo>
            <img src={featured} alt="featured" />
            <h1>{name}</h1>
            <h2>{calories}</h2>
            <div>
              <h1>Gallery</h1>
              {images.map(image => <img src={image.url} alt="gallery" key={uid()} />)}
            </div>
          </S.ModelInfo>
        )}
    </S.FoodModel>
  );
};

FoodModel.defaultProps = {
  model: {},
};

FoodModel.propTypes = {
  model: PropTypes.objectOf(string),
};

export default FoodModel;
