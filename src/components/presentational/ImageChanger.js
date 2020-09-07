import React from 'react';
import Axios from 'axios';
import PropTypes from 'prop-types';
import * as S from './Options.styles';

const ImageChanger = ({ src, setUserPhoto }) => {
  const handleSubmit = e => {
    e.preventDefault();
    const [image] = document.getElementById('newImage').files;
    if (image) {
      const data = new FormData();
      data.append('image', image);

      const config = {
        method: 'post',
        url: 'https://api.imgur.com/3/image',
        headers: {
          Authorization: `Client-ID ${process.env.REACT_APP_CLIENT_ID}`,
        },
        data,
      };

      Axios(config)
        .then(response => {
          const { data: { data: { link: url } } } = response;
          setUserPhoto(url);
          Axios.post(`${process.env.REACT_APP_BACKEND_URL}/updateCurrentImage`,
            {
              user: {
                url,
              },
            },
            { withCredentials: true });
        });
    }
  };

  return (
    <S.ImageChanger onSubmit={handleSubmit}>
      <S.Image src={src} alt="user" />
      <input type="file" id="newImage" />
      <input type="submit" value="Save" />
    </S.ImageChanger>
  );
};

ImageChanger.propTypes = {
  src: PropTypes.string.isRequired,
  setUserPhoto: PropTypes.func.isRequired,
};

export default ImageChanger;
