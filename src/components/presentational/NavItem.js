import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import * as S from './App.styles';

const NavItem = ({ icon, selected, link }) => (
  <S.NavItem selected={selected}>
    <Link to={link}>
      <i className={icon} />
    </Link>
  </S.NavItem>
);

NavItem.defaultProps = {
  selected: false,
};

NavItem.propTypes = {
  icon: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  selected: PropTypes.bool,
};

export default NavItem;
