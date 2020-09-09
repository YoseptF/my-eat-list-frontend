import React from 'react';
import PropTypes from 'prop-types';
import * as S from './Foods.styles';

const Search = ({ filter, setFilter }) => (
  <S.Search>
    <input type="text" placeholder="Search..." value={filter} onChange={e => setFilter(e.target.value)} />
  </S.Search>
);

Search.propTypes = {
  filter: PropTypes.string.isRequired,
  setFilter: PropTypes.func.isRequired,
};

export default Search;
