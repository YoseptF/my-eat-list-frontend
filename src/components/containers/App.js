import React from 'react';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import logo from '../../logo.svg';
import Counter from '../../features/counter/counterSlice';
import './App.css';
import Loggin from '../presentational/Loggin';

const App = () => (
  <ThemeProvider theme={{
    primary: '#65b54e',
    secondary: '#75c959',
    dark: '#2f3a5a',
    light: '#f8f8f8  ',
    danger: '#fb3640',
  }}
  >
    <Router>
      <Loggin />
      <Switch>
        <Route exact path="/">
          <h2>home</h2>
        </Route>
      </Switch>
    </Router>
  </ThemeProvider>
);

export default App;
