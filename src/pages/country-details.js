import React, { Component } from 'react';
import Loading from '../includes/loading';
import './../styles/countries.css';
import callApi from "../utils/apiUtils"
import {
  XAxis, YAxis, CartesianGrid, Bar, BarChart, Tooltip, Legend, RadialBarChart, RadialBar
} from 'recharts';
export default class CountryStats extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.id,
      url: 'https://api.thevirustracker.com/free-api?countryTimeline=',
      isLoaded: false,
      confirmed: [],
      recovered: [],
      deaths: [],
      newCase: 0,
      newDeath: 0,
      countryName: "",
      currentTotalCase: "",
      currentTotalRecovery: "",
      currentTotalDeath: "",
      error: null,
      status: ''
    };
  }
  formattedDate = (value) => {
    const months = { "1": "Jan", "2": "Feb", "3": "Mar", "4": "Apr", "5": "May", "6": "Jun", "7": "Jul", "8": "Aug", "9": "Sep", "10": "Oct", "11": "Nov", "12": "Dec" };
    let parts = value.split("/");
    return months[parts[0]] + " " + parts[1];
  }
  populate = (data) => {
    console.log(data);
    let result = data.timelineitems[0];
    let confirmed = [], deaths = [], recovered = [];
    let newCase = 0, newDeath = 0, currentTotal = 0, currentDeath = 0, currentRecovered = 0;
    for (var x in result) {
      let date = this.formattedDate(x);
      if (result[x].total_cases > 0) {
        currentTotal = result[x].total_cases;
        confirmed.push({ date: date, case: result[x].total_cases });
      }
      if (result[x].total_recoveries > 0) {
        currentRecovered = result[x].total_recoveries;
        recovered.push({ date: date, recovered: result[x].total_recoveries });
      }
      if (result[x].total_deaths > 0) {
        currentDeath = result[x].total_deaths;
        deaths.push({ date: date, death: result[x].total_deaths });
      }
      if (result[x].new_daily_cases > 0) {
        newCase = result[x].new_daily_cases;
      }
      if (result[x].new_daily_deaths > 0) {
        newDeath = result[x].new_daily_deaths;
      }
    }
    this.setState({
      isLoaded: true,
      countryName: data.countrytimelinedata[0].info.title,
      confirmed: confirmed,
      deaths: deaths,
      recovered: recovered,
      newCase: newCase,
      newDeath: newDeath,
      currentTotalCase: currentTotal,
      currentTotalRecovery: currentRecovered,
      currentTotalDeath: currentDeath
    });
  }
  componentDidMount() {
    const id = this.state.id;
    callApi(this.state.url + id, this, this.populate);
  }

  render() {
    if (this.state.isLoaded) {
      const countryStat = (
        <>
          <div className="row">
            <div className="col-12">
              <CountryData data={this.state} />
            </div>
            <div className="col-12" style={{ overflowX: "auto" }}>
              <ConfirmedGraph data={this.state.confirmed} isLoaded={this.state.isLoaded} />
            </div>
            {/* <div className="col-12" style={{ overflowX: "auto" }}>
              <RecoveredGraph data={this.state.recovered} isLoaded={this.state.isLoaded} />
            </div> */}
            <div className="col-12 mb-3" style={{ overflowX: "auto" }}>
              <DeathGraph data={this.state.deaths} isLoaded={this.state.isLoaded} />
            </div>
          </div>
        </>
      );
      return (
        countryStat
      );
    } else {
      return (
        <div>
          <Loading />
        </div>);
    }
  }
}

class CountryData extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    if (this.props.data.isLoaded) {
      return (
        <div className="countryStat-div">
          <h1 style={{ color: "#1e1280", fontFamily: "Arial Black" }}>{this.props.data.countryName}</h1>
          <div>
            <div style={{ display: "inline-block", width: "50%" }}>
              <h5 className="countryStatHeader">Total Cases</h5>
              <h4 className="countryStatData">{this.props.data.currentTotalCase}</h4>
            </div>
            <div style={{ display: "inline-block", width: "50%" }}>
              <h5 className="countryStatHeader">New Cases Today</h5>
              <h4 className="countryStatData">{this.props.data.newCase}</h4>
            </div>
          </div>
          <div>
            <div style={{ display: "inline-block", width: "50%" }}>
              <h5 className="countryStatHeader">Total Death</h5>
              <h4 className="countryStatData">{this.props.data.currentTotalDeath}</h4>
            </div>
            <div style={{ display: "inline-block", width: "50%" }}>
              <h5 className="countryStatHeader">New Death Today</h5>
              <h4 className="countryStatData">{this.props.data.newDeath}</h4>
            </div>
          </div>
          <div>
            {/* <div style={{ display: "inline-block", width: "50%" }}>
              <h5 className="countryStatHeader">Total Recovered</h5>
              <h4 className="countryStatData">{this.props.data.currentTotalRecovery}</h4>
            </div>
            <div style={{ display: "inline-block", width: "50%" }}>
              <h5 className="countryStatHeader">Death Percentage</h5>
              <h4 className="countryStatData">{Math.round(parseInt(this.props.data.currentTotalDeath) / parseInt(this.props.data.currentTotalCase) * 100)}%</h4>
            </div> */}
          </div>
        </div>
      );
    } else {
      return "";
    }
  }
}
class ConfirmedGraph extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    if (this.props.isLoaded) {
      const countryStat = (
        <div>
          <h4 className="graphHeader" style={{ color: "#363292" }}>Confirmed Cases</h4>
          <Chart data={this.props.data} x="date" y="case" fillColor="#8884d8" />
        </div>
      );
      return (
        countryStat
      );
    } else {
      return "";
    }
  }
}
class RecoveredGraph extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    if (this.props.isLoaded) {
      const countryStat = (
        <div>
          <h4 className="graphHeader" style={{ color: "#0c7745" }}>Recovered</h4>
          <Chart data={this.props.data} x="date" y="recovered" fillColor="#359c6c" />
        </div>
      );
      return (
        countryStat
      );
    } else {
      return "";
    }
  }
}
class DeathGraph extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    if (this.props.isLoaded) {
      const countryStat = (
        <div>
          <h4 className="graphHeader" style={{ color: "#c14642" }}>Death</h4>
          <Chart data={this.props.data} x="date" y="death" fillColor="#d88784" />
        </div>
      );
      return (
        countryStat
      );
    } else {
      return "";
    }
  }
}
class Chart extends Component {
  render() {
    return (
      <>
        <center>
          <BarChart width={900} height={250} data={this.props.data}>
            <CartesianGrid strokeOpacity="0.3" />
            <XAxis dataKey={this.props.x} tick={{ fontSize: 15 }} />
            <YAxis tick={{ fontSize: 15 }} />
            <Tooltip wrapperStyle={{ fontSize: 15 }} />
            <Bar dataKey={this.props.y} fill={this.props.fillColor} />
          </BarChart>
        </center>
      </>
    );
  }
}