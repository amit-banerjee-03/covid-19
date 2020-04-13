import React, { Component } from 'react';
import ReactDOM, { render } from 'react-dom';
import Home from './pages/home';
import About from './pages/about';
import NavBar from './includes/header';
import 'bootstrap/dist/css/bootstrap.min.css';

import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';



export default class Covid19 extends Component {

  render() {
    return (
      <Router>
        <NavBar />
        <Route path="/" component={Home} exact></Route>
        <Route path="/about" component={About} exact></Route>
      </Router>
    );
  }
}

render(
  <Covid19 />,
  document.getElementById('root')
);



