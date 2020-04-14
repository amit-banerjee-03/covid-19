import React, { Component } from 'react';
import ReactDOM, { render } from 'react-dom';
import Home from './pages/home';
import CountryStats, {Child} from './pages/CountryStats';
import NotFound from './pages/not-found';
import NavBar from './includes/header';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';



export default class Covid19 extends Component {

  render() {
    return (
      <Router>
        <NavBar />
        <Switch>
          <Route path="/" component={Home} exact></Route>
          <Route path="/country" component={CountryStats} exact></Route>
          <Route path="/country/:id" children={Child} exact></Route>
          <Route component={NotFound}></Route>
        </Switch>
      </Router>
    );
  }
}

render(
  <Covid19 />,
  document.getElementById('root')
);



