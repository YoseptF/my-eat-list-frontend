import React, { useState } from 'react';
import PropTypes, { oneOfType } from 'prop-types';
import uid from 'uid';
import Lightbox from 'react-image-lightbox';
import * as S from './Foods.styles';

const ModelInfo = ({ model }) => {
  const { name, calories, images } = model;
  const [{ url: featured }] = images || [{ url: '' }];
  const imagesUrls = images.map(image => image.url);
  const [lightBoxOpen, setLightBoxOpen] = useState(false);
  const [index, setIndex] = useState(1);

  const openLightBox = i => {
    setIndex(i);
    setLightBoxOpen(true);
  };

  return (
    <S.ModelInfo>
      <div className="info">
        <img src={featured} alt="featured" />
        <h1>{name}</h1>
        <h2>
          {calories}
          {' '}
          calories
        </h2>
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
  model: {},
};

ModelInfo.propTypes = {
  model: PropTypes.objectOf(oneOfType([PropTypes.string, PropTypes.number, PropTypes.array])),
};

export default ModelInfo;
