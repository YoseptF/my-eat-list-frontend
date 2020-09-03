import React, { useState } from 'react';
import Axios from 'axios';
import PropTypes from 'prop-types';
import * as S from './App.styles';
import logo from '../../logo.svg';

const Login = ({ updateUser }) => {
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

    const postUrl = alreadyUser ? `${process.env.REACT_APP_BACKEND_URL}/sessions` : `${process.env.REACT_APP_BACKEND_URL}/registrations`;

    Axios.post(postUrl,
      {
        user: {
          email,
          password,
          ...!alreadyUser && { password_confirmation },
        },
      },
      { withCredentials: true })
      .then(response => {
        updateUser(response.data.user);
      })
      .catch(e => console.log(e));
  };

  return (
    <S.GateForm>
      <img src={logo} alt="logo" />
      <form onSubmit={handleSubmit}>
        <input
          name="email"
          type="email"
          placeholder="your@email.com"
          value={userData.email}
          onChange={handleChange}
          autoComplete="off"
        />
        <input
          name="password"
          type="password"
          placeholder="password"
          value={userData.password}
          onChange={handleChange}
        />
        {
          !alreadyUser
          && (
            <input
              name="password_confirmation"
              placeholder="password confirmation"
              type="password"
              value={userData.password_confirmation}
              onChange={handleChange}
            />
          )
        }
        <input type="submit" value={alreadyUser ? 'Log In' : 'Register'} />
      </form>
      <span>
        {'Or '}
        <button type="button" onClick={() => setUserStatus(status => !status)}>{alreadyUser ? 'Register' : 'Log In'}</button>
      </span>
    </S.GateForm>
  );
};

Login.propTypes = {
  updateUser: PropTypes.func.isRequired,
};

export default Login;
