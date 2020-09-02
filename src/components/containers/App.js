import React, { useEffect } from 'react';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import Axios from 'axios';
import Login from '../presentational/Login';
import { selectTheme, selectLoggedInStatus, updateUser } from '../../features/home/homeSlice';

const App = () => {
  const theme = useSelector(selectTheme);
  const loggedIn = useSelector(selectLoggedInStatus);

  const dispatch = useDispatch();

  const userUpdater = user => {
    dispatch(updateUser({ user }));
    // dispatch(updateUser({ user: { a: 1 } }));
  };

  const checkIfLoggedIn = () => {
    console.log(process.env.REACT_APP_BACKEND_URL);
    Axios.get(`${process.env.REACT_APP_BACKEND_URL}/logged_in`,
      { withCredentials: true })
      .then(response => console.log(response))
      .catch(e => console.log(e));
  };

  useEffect(() => {
    checkIfLoggedIn();
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Login loggedIn={loggedIn} updateUser={userUpdater} />
        <Switch>
          <Route exact path="/">
            <h2>home</h2>
          </Route>
        </Switch>
      </Router>
    </ThemeProvider>
  );
};

export default App;
