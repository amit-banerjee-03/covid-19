import React, { Component } from 'react';
import CountryList from "./countries.js";
import Loading from '../includes/loading';
import $ from "jquery";
import callApi from "../utils/apiUtils"
import {
  Line, XAxis, YAxis, CartesianGrid, Bar, LineChart, Tooltip, Legend
} from 'recharts';
export default class CountryStats extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.match.params.id,
      url_head: 'https://api.covid19api.com/country/',
      isConfirmedLoaded: false,
      confirmed: [],
      error: null,
      isRecoveredLoaded: false,
      isDeathLoaded: false,
      startDate:'2020-04-08T00:00:00Z',
      endDate:'2020-04-15T00:00:00Z',
      status: ''
    };
  }
  confirm = (result, param) => {
    console.log(result);
    this.setState({ isConfirmedLoaded: true, data: result });
  }
  recover = (result) => {
    this.setState({ isRecoveredLoaded: true });
    console.log(this.state.error + " " + this.state.status);
  }
  death = (result) => {
    this.setState({ isDeathLoaded: true });
    console.log(this.state.error + " " + this.state.status);
  }
  componentDidUpdate() {
    const id = this.state.id;
    const recovered_url_tail = '/status/recovered?from='+this.state.startDate+"&to="+this.state.endDate;
    const deaths_url_tail = '/status/deaths?from='+this.state.startDate+"&to="+this.state.endDate;
    if (this.state.status == 'SUCCESS' && !this.state.isRecoveredLoaded) {
      callApi(this.state.url_head + id + recovered_url_tail, this, this.recover);
    }else if(this.state.status == 'SUCCESS' && !this.state.isDeathLoaded){
      callApi(this.state.url_head + id + deaths_url_tail, this, this.death);
    }
  }
  componentDidMount() {
    const id = this.state.id;
    const confirmed_url_tail = '/status/confirmed?from='+this.state.startDate+"&to="+this.state.endDate;
    callApi(this.state.url_head + id + confirmed_url_tail, this, this.confirm, { case: 'confirmed' });
  }

  render() {
    const countryStat = (
      <div>
        <CountryList id={this.state.id} />
        <ConfirmedGraph data={this.state.data} isConfirmedLoaded={this.state.isConfirmedLoaded} />
        <RecoveredGraph data={this.state.data} isRecoveredLoaded={this.state.isRecoveredLoaded} />
        <DeathGraph data={this.state.data} isDeathLoaded={this.state.isDeathLoaded} />
      </div>
    );
    return (
      countryStat
    );
  }
}

class ConfirmedGraph extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    if (this.props.isConfirmedLoaded) {
      const countryStat = (
        <div>
         <LineChart width={730} height={250} data={this.props.data}
  margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
  <CartesianGrid strokeDasharray="3 3" />
  <XAxis dataKey="Date" />
  <YAxis />
  <Tooltip />
  <Legend />
  <Line type="monotone" dataKey="Cases" stroke="#8884d8" />
</LineChart>
        </div>
      );
      return (
        countryStat
      );
    } else {
      const countryStat = (
        <div>
          <Loading />
        </div>
      );
      return (
        countryStat
      );
    }
  }
}
class RecoveredGraph extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    if (this.props.isRecoveredLoaded) {
      const countryStat = (
        <div>
         <LineChart width={730} height={250} data={this.props.data}
  margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
  <CartesianGrid strokeDasharray="3 3" />
  <XAxis dataKey="Date" />
  <YAxis />
  <Tooltip />
  <Legend />
  <Line type="monotone" dataKey="Cases" stroke="#8884d8" />
</LineChart>
        </div>
      );
      return (
        countryStat
      );
    } else {
      const countryStat = (
        <div>
          <Loading />
        </div>
      );
      return (
        countryStat
      );
    }
  }
}
class DeathGraph extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    if (this.props.isDeathLoaded) {
      const countryStat = (
        <div>
         <LineChart width={730} height={250} data={this.props.data}
  margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
  <CartesianGrid strokeDasharray="3 3" />
  <XAxis dataKey="Date" />
  <YAxis />
  <Tooltip />
  <Legend />
  <Line type="monotone" dataKey="Cases" stroke="#8884d8" />
</LineChart>
        </div>
      );
      return (
        countryStat
      );
    } else {
      const countryStat = (
        <div>
          <Loading />
        </div>
      );
      return (
        countryStat
      );
    }
  }
}