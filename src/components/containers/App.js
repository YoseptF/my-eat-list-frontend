import React, { useEffect, useCallback } from 'react';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import Axios from 'axios';
import Login from '../presentational/Login';
import {
  selectTheme, selectLoggedInStatus, updateUser, selectTitle,
} from '../../features/home/homeSlice';
import Nav from './Nav';
import * as S from '../presentational/App.styles';
import Home from './Home';
import Foods from './Foods';
import 'react-image-lightbox/style.css';

const App = () => {
  const theme = useSelector(selectTheme);
  const loggedIn = useSelector(selectLoggedInStatus);
  const dispatch = useDispatch();
  const title = useSelector(selectTitle);

  const checkIfLoggedIn = useCallback(
    () => {
      Axios.get(`${process.env.REACT_APP_BACKEND_URL}/logged_in`,
        { withCredentials: true })
        .then(response => {
          if (response.data.logged_in) {
            const { data: { user } } = response;
            dispatch(updateUser({ user }));
          }
        })
        .catch(e => console.log(e));
    },
    [dispatch],
  );

  useEffect(() => {
    checkIfLoggedIn();
  }, [checkIfLoggedIn]);

  return (
    <ThemeProvider theme={theme}>
      <Router>
        {loggedIn ? (
          <S.Main>
            <div id="navTitle">{title}</div>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/foods" component={Foods} />
            </Switch>
            <Nav />
          </S.Main>
        )
          : <Login updateUser={user => dispatch(updateUser({ user }))} />}
      </Router>
    </ThemeProvider>
  );
};

export default App;
