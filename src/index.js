import React, { Component } from 'react';
import ReactDOM, { render } from 'react-dom';
import Home from './pages/home';
import CountryDropdown from './pages/countries';
import NewsUpdates from './pages/news-updates';
import NotFound from './pages/not-found';
import NavBar from './includes/header';
import Guidelines from './pages/guidelines';
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
          <Route path="/country" component={CountryDropdown} exact></Route>
          <Route path="/country/:id" component={CountryDropdown} exact></Route>
          <Route path="/news" component={NewsUpdates} exact></Route>
          <Route path="/guidelines" component={Guidelines} exact></Route>
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



