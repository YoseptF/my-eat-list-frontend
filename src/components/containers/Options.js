import React, { useState, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Axios from 'axios';
import { updateUser, updateLogginStatus, selectUser } from '../../features/home/homeSlice';
import * as S from '../presentational/Options.styles';
import FormGroup from '../presentational/FormGroup';
import SelectLifestyle from '../presentational/SelectLifestyle';
import ImageChanger from '../presentational/ImageChanger';

const Options = () => {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  const [formData, setFormData] = useState(user);

  const lifestyleValues = {
    sedentary: 1.2,
    lightly_active: 1.375,
    moderately_active: 1.55,
    very_active: 1.725,
    extra_active: 1.9,
  };

  const {
    avatar: { url } = {}, username,
  } = user;

  const [userPhoto, setUserPhoto] = useState(url);

  const calories = useMemo(() => Math.floor(
    ((13.397 * +formData.weight) + (4.799 * +formData.height) - (5.677 * +formData.age) + 88.362)
       * lifestyleValues[formData.lifestyle],
  ), [formData, lifestyleValues]);

  const logout = () => {
    Axios.delete(`${process.env.REACT_APP_BACKEND_URL}/logout`,
      { withCredentials: true })
      .then(() => {
        dispatch(updateUser({ user: {} }));
        dispatch(updateLogginStatus(false));
      });
  };

  const handleChange = e => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    Axios.post(`${process.env.REACT_APP_BACKEND_URL}/updateCurrent`,
      {
        user: formData,
      },
      {
        withCredentials: true,
      });
    window.location.pathname = '/';
  };

  return (
    <S.Options>
      <S.Header>
        <S.Image src={userPhoto} alt="user" />
        <h1>{username}</h1>
        <button type="button" onClick={logout} aria-label="logout"><i className="fas fa-power-off" /></button>
      </S.Header>
      <S.Header>
        <ImageChanger src={userPhoto} setUserPhoto={setUserPhoto} />
      </S.Header>
      <S.Header>
        <form onSubmit={handleSubmit}>
          <FormGroup name="username" value={formData.username} onChange={handleChange} type="text" />
          <FormGroup name="email" value={formData.email} onChange={handleChange} type="email" />
          <FormGroup name="calories" value={calories} onChange={handleChange} type="number" readOnly />
          <FormGroup name="age" value={formData.age} onChange={handleChange} type="number" />
          <FormGroup name="height" suffix="cm" value={formData.height} onChange={handleChange} type="number" />
          <FormGroup name="weight" suffix="km" value={formData.weight} onChange={handleChange} type="number" />
          <SelectLifestyle lifestyleValues={lifestyleValues} onChange={handleChange} />
          <FormGroup name="daily_water" value={formData.daily_water} onChange={handleChange} type="number" />
          <FormGroup name="daily_sitting" value={formData.daily_sitting} onChange={handleChange} type="number" />
          <FormGroup name="daily_sleep" value={formData.daily_sleep} onChange={handleChange} type="number" />
          <input type="submit" value="Save" />
        </form>
      </S.Header>
    </S.Options>
  );
};

export default Options;
