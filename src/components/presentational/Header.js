import React from 'react';
import * as S from './Home.styles';
import Donut from '../containers/Donut';

const Header = () => (
  <S.Header>
    <Donut title="water" />
    <Donut title="sitting" />
    <Donut title="sleep" />
  </S.Header>
);

export default Header;
