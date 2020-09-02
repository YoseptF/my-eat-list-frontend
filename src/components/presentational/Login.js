import React from 'react';
import PropTypes, { object, oneOfType, string } from 'prop-types';
import * as S from './App.styles';

const Login = ({
  handleSubmit, handleChange, logo, userData, setUserStatus,
}) => (
  <S.GateForm>
    <img src={logo} alt="logo" />
    <form onSubmit={handleSubmit}>
      <input name="email" type="email" placeholder="your@email.com" value={userData.email} onChange={handleChange} />
      <input name="password" type="password" placeholder="password" value={userData.password} onChange={handleChange} />
      <input type="submit" value="Login" />
    </form>
    <span>
      {'Or '}
      <button type="button" onClick={() => setUserStatus(status => !status)}>Register</button>
    </span>
  </S.GateForm>
);

Login.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
  logo: PropTypes.string.isRequired,
  userData: PropTypes.objectOf(string).isRequired,
  setUserStatus: PropTypes.func.isRequired,
};

export default Login;
