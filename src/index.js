import React, { Component } from 'react';
import ReactDOM, { render } from 'react-dom';
import Home from './pages/home';
import CountryList from './pages/countries';
import CountryStats from './pages/country';
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
          <Route path="/country" component={CountryList} exact></Route>
          <Route path="/country/:id" component={CountryStats} exact></Route>
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



