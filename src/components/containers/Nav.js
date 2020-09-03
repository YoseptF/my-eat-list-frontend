import React, { useEffect, useRef } from 'react';
import uid from 'uid';
import { useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import * as S from '../presentational/App.styles';
import NavItem from '../presentational/NavItem';
import { updateTitle, selectPages } from '../../features/home/homeSlice';

const Nav = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const pages = useSelector(selectPages);

  useEffect(() => {
    dispatch(updateTitle(location.pathname.slice(1) || 'Home'));
  }, [location, dispatch]);

  const scrollInto = useRef(null);
  useEffect(() => {
    scrollInto.current.scrollIntoView({ behavior: 'smooth' });
  }, [scrollInto]);

  return (
    <S.Nav ref={scrollInto}>
      <ul>
        {pages.map(page => (
          <NavItem
            icon={page.icon}
            link={page.link}
            key={uid()}
            selected={location.pathname === page.link}
          />
        ))}
      </ul>
    </S.Nav>
  );
};

export default Nav;
