import React, { useState } from 'react';
import PropTypes, { oneOfType } from 'prop-types';
import uid from 'uid';
import Lightbox from 'react-image-lightbox';
import Axios from 'axios';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import * as S from '../presentational/Foods.styles';
import {
  addFood, closeModal, removeFood, updateCurrentCalories,
} from '../../features/home/homeSlice';

const ModelInfo = ({ modal }) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const isHome = history.location.pathname === '/';

  const {
    name, calories, images = [], id,
  } = modal;
  const [{ url: featured } = ''] = images;
  const imagesUrls = images.map(image => image.url);
  const [lightBoxOpen, setLightBoxOpen] = useState(false);
  const [index, setIndex] = useState(1);

  const openLightBox = i => {
    setIndex(i);
    setLightBoxOpen(true);
  };

  const addFoodToCurrent = () => {
    const addOrRemove = isHome ? 'deleteFromCurrent' : 'addFoodToCurrent';
    const method = isHome ? 'DELETE' : 'POST';
    Axios({
      method,
      url: `${process.env.REACT_APP_BACKEND_URL}/${addOrRemove}`,
      data: {
        food_list_item: {
          food_id: id,
        },
      },
      withCredentials: true,
    });
    const actionToDispatch = isHome ? removeFood : addFood;
    dispatch(actionToDispatch(modal));
    dispatch(closeModal());
    dispatch(updateCurrentCalories(calories * (isHome ? -1 : 1)));
    if (!isHome) setTimeout(() => history.push('/'), 300);
  };

  return (
    <S.ModelInfo>
      <div className="info">
        <img src={featured} alt="featured" />
        <S.InfoBox>
          <div>
            <h1>{name}</h1>
            <h2>
              {calories}
              {' '}
              calories
            </h2>
          </div>
          <button type="button" aria-label="Choose" onClick={addFoodToCurrent}>
            {isHome ? 'Remove' : 'Add'}
          </button>
        </S.InfoBox>
      </div>
      <h1>Gallery</h1>
      <div className="gallery">
        {images && images.map((image, i) => (
          <S.GalleryImage
            className="image"
            image={image.url}
            key={uid()}
            onClick={() => openLightBox(i)}
          />
        ))}
      </div>
      {lightBoxOpen
        && (
          <Lightbox
            mainSrc={imagesUrls[index]}
            nextSrc={imagesUrls[(index + 1) % imagesUrls.length]}
            prevSrc={imagesUrls[(index - 1) % imagesUrls.length]}
            onCloseRequest={() => setLightBoxOpen(false)}
            onMovePrevRequest={() => setIndex((index - 1) % imagesUrls.length)}
            onMoveNextRequest={() => setIndex((index + 1) % imagesUrls.length)}
          />
        )}
    </S.ModelInfo>
  );
};

ModelInfo.defaultProps = {
  modal: {},
};

ModelInfo.propTypes = {
  modal: PropTypes.objectOf(oneOfType([PropTypes.string, PropTypes.number, PropTypes.array])),
};

export default ModelInfo;
