import React, { useState } from 'react';
import Axios from 'axios';
import * as S from './App.styles';
import logo from '../../logo.svg';
import Login from './Login';
import Registration from './Registration';

const Gate = ({ loggedIn }) => {
  const [userData, setUserData] = useState({
    email: '',
    password: '',
    password_confirmation: '',
    errors: '',
  });

  const [alreadyUser, setUserStatus] = useState(false);

  const handleChange = e => {
    setUserData({
      ...userData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = e => {
    e.preventDefault();

    const { email, password, password_confirmation } = userData; // eslint-disable-line camelcase

    Axios.post(
      alreadyUser ? 'https://my-eat-list-backend.herokuapp.com/sessions' : 'https://my-eat-list-backend.herokuapp.com/registrations',
      {
        user: {
          email,
          password,
          ...!alreadyUser && { password_confirmation },
        },
      },
      { withCredentials: true },
    )
      .then(response => console.log(response));
  };

  if (loggedIn) return null;

  return alreadyUser ? (
    <Login
      logo={logo}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
      userData={userData}
      setUserStatus={setUserStatus}
    />
  )
    : (
      <Registration
        userData={userData}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        logo={logo}
        setUserStatus={setUserStatus}
      />
    );
};

export default Gate;
