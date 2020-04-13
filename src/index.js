import React, { Component } from 'react';
import ReactDOM, { render } from 'react-dom';
import Home from './pages/home';
import NavBar from './includes/header';
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
      </Router>
    );
  }
}

render(
  <Covid19 />,
  document.getElementById('root')
);



