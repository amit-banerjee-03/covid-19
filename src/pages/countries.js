import React, { Component } from 'react';
import './../styles/countries.css';
import SelectSearch from 'react-select-search';
import CountryStats from "./country-details.js";
import callApi from "../utils/apiUtils"
import { Link } from 'react-router-dom';
import covid from '../images/covid.gif'

var exclude = ["VI", "TV", "MF", "NC", "BL", "IM", "NU", "PF", "JE", "SH", "GS", "HK", "MS", "KY", "GL"];
export default class CountryDropdown extends Component {
  constructor(props) {
    super(props);
    let id = '';
    if (typeof this.props.match.params.id != 'undefined') {
      id = this.props.match.params.id;
    }
    this.state = { isLoaded: false, countries: [], error: null, country: id, status: "" };
  }
  populateList = (result) => {
    this.setState({ countries: result.Countries, global: result.Global, isLoaded: true })
  };
  componentDidMount() {
    const url = "https://api.covid19api.com/summary";
    callApi(url, this, this.populateList);
  }
  disable = () => {
    this.setState({
      disabled: !this.state.disabled,
    });
  };
  clear = () => {
    this.setState({
      country: ''
    });
  };
  updateCountry = (value) => {
    this.setState({ country: value });
    window.location.href = '/country/' + value;
  };
  render() {
    const options = [];
    const countryList = [];
    const countries = this.state.countries;
    if (this.state.isLoaded) {
      for (let x in countries) {
        let selectedValue = "";
        if (countries[x].TotalConfirmed > 0 && !exclude.includes(countries[x].CountryCode)) {
          if (typeof this.props.id != 'undefined' && this.props.id == countries[x].CountryCode) {
            selectedValue = "selected";
          }
          options.push({ name: countries[x].Country, value: countries[x].CountryCode })
        }
      }
      let selectCountry = '';
      if (typeof this.props.match.params.id == 'undefined') {
        selectCountry = <><center><img src={covid} height="200px" width="200px" /><br />Please select a country to view statistics</center></>;
      } else {
        selectCountry = <CountryStats id={this.props.match.params.id} />
      }
      const selectBox = (
          <div style={{ width: "98%",overflow:"hide",paddingLeft:"10px" }}>
            <div className="row">
              <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12" style={{ backgroundColor: "#343a40",height:"88vh",overflowY:"scroll" }}>
                <div className="mt-3">
                  <SelectSearch
                    key="countries"
                    value={this.state.country}
                    options={options}
                    onChange={this.updateCountry}
                    placeholder="Choose country"
                    search
                  />
                </div>
                <div><h1 style={{ color: "rgba(255,255,255,.77)" }}>GLOBAL</h1>
                  <div className='statName'>Total Confirmed:</div>
                  <div className='statName'>New Confirmed:</div>
                  <div className='statValue'>{this.state.global.TotalConfirmed}</div>
                  <div className='statValue'>{this.state.global.NewConfirmed}</div>
                  <div className='statName'>Total Deaths:</div>
                  <div className='statName'>New Deaths:</div>
                  <div className='statValue'>{this.state.global.TotalDeaths}</div>
                  <div className='statValue'>{this.state.global.NewDeaths}</div>
                  <div className='statName'>Total Recovered:</div>
                  <div className='statName'>New Recovered:</div>
                  <div className='statValue'>{this.state.global.TotalRecovered}</div>
                  <div className='statValue'>{this.state.global.NewRecovered}</div>
                </div>
                <CountryListStats countries={this.state.countries} />
              </div>
              <div className="col-lg-9 col-md-9 col-sm-12 col-xs-12" style={{ color: "#d21c1cc4", fontWeight: "bold", fontSize: "35px", maxHeight: "88vh", overflowY: "scroll" }}>{selectCountry}</div>
            </div>
          </div>

      );
      return (
        selectBox
      );
    } else {
      return "";
    }
  }
}


//Statlist of coutries

class CountryListStats extends Component {
  constructor(props) {
    super(props);
  }
  navigate = (e, slug) => {
    e.preventDefault();
    window.location.href = slug;
  }
  render() {
    let list = [];
    let countries = this.props.countries;
    for (let index in countries) {
      if (countries[index].TotalConfirmed > 0 && !exclude.includes(countries[index].CountryCode)) {
        const slug = "/country/" + countries[index].CountryCode;
        const country = (<Link key={index} style={{ textDecoration: "none", color: "black" }} onClick={(e) => { this.navigate(e, slug) }} to="#"><div className="countryDiv">
          <h5 className='countryName'>{countries[index].Country}
          </h5>
          <div className='cases'>{countries[index].TotalConfirmed} cases</div>
          <div className='cases'>{countries[index].TotalDeaths} deaths</div>
        </div>
        </Link>
        );
        list.push(country);
      }
    }
    return (<div style={{ marginTop: "10px", height: "305px", overflowY: "scroll", overflow: "auto" }}>
      {list}
    </div>);
  }
} 