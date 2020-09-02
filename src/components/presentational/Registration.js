import React from 'react';
import PropTypes, { string } from 'prop-types';
import * as S from './App.styles';

const Registration = ({
  logo, userData, handleSubmit, handleChange, setUserStatus,
}) => (
  <S.GateForm>
    <img src={logo} alt="logo" />
    <form onSubmit={handleSubmit}>
      <input name="email" type="email" placeholder="your@email.com" value={userData.email} onChange={handleChange} />
      <input name="password" type="password" placeholder="password" value={userData.password} onChange={handleChange} />
      <input name="password_confirmation" placeholder="password confirmation" type="password" value={userData.password_confirmation} onChange={handleChange} />
      <input type="submit" value="Register" />
    </form>
    <span>
      {'Or '}
      <button type="button" onClick={() => setUserStatus(status => !status)}>Log In</button>
    </span>
  </S.GateForm>
);

Registration.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
  logo: PropTypes.string.isRequired,
  userData: PropTypes.objectOf(string).isRequired,
  setUserStatus: PropTypes.func.isRequired,
};

export default Registration;
