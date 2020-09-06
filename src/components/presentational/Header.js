import React from 'react';
import * as S from './Home.styles';
import Donut from './Donut';

const Header = () => (
  <S.Header>
    <Donut title="Water" />
    <Donut title="Sitting" />
    <Donut title="Sleep" />
  </S.Header>
);

export default Header;
