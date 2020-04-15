import React, { Component } from 'react';
import './../styles/countries.css';
import SelectSearch from 'react-select-search';
import callApi from "../utils/apiUtils"
import { Link } from 'react-router-dom';

export default class CountryDropdown extends Component {
  constructor(props) {
    super(props);
    let id = '';
    if (typeof this.props.id != 'undefined') {
      id = this.props.id;
    }
    this.state = { isLoaded: false, countries: [], error: null, country: id, status:"" };
  }
  populateList=(result)=>{
    this.setState({ countries: result.Countries, global: result.Global, isLoaded: true })
  };
  componentDidMount() {
    const url="https://api.covid19api.com/summary";
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
    const countryList=[];
    const countries = this.state.countries;
    if (this.state.isLoaded) {
      for (let x in countries) {
        let selectedValue = "";
        if(countries[x].TotalConfirmed>0){
        if (typeof this.props.id != 'undefined' && this.props.id == countries[x].Slug) {
          selectedValue = "selected";
        }
        options.push({ name: countries[x].Country, value: countries[x].Slug })
      }
    }
    let selectCountry = '';
    if (typeof this.props.id == 'undefined') {
      selectCountry = 'Please select a country to continue';
    }
    const selectBox = (
      <div>
        <div>
          <SelectSearch
            key="countries"
            value={this.state.country}
            options={options}
            onChange={this.updateCountry}
            placeholder="Choose country"
            search
          />
        </div>
          <div><h1 style={{color:"rgba(255,255,255,.77)"}}>GLOBAL</h1>
        <div class='statName'>Total Confirmed:</div>
        <div class='statName'>New Confirmed:</div>
        <div class='statValue'>{this.state.global.TotalConfirmed}</div>
        <div class='statValue'>{this.state.global.NewConfirmed}</div>
        <div class='statName'>Total Deaths:</div>
        <div class='statName'>New Deaths:</div>
        <div class='statValue'>{this.state.global.TotalDeaths}</div>
        <div class='statValue'>{this.state.global.NewDeaths}</div>
        <div class='statName'>Total Recovered:</div>
        <div class='statName'>New Recovered:</div>
        <div class='statValue'>{this.state.global.TotalRecovered}</div>
        <div class='statValue'>{this.state.global.NewRecovered}</div>
      </div>
          <CountryListStats countries={this.state.countries}/>
        <div style={{ color: "red", fontWeight: "bold", fontSize: "20px", float:"right"}}>{selectCountry}</div>
      </div>
    );
    return (
      selectBox
    );
    }else{
      return "";
    }
  }
}


//Statlist of coutries


class CountryListStats extends Component{
  constructor(props) {
    super(props);
  }
  // navigate = (slug) => {
  //   console.log('/country/' + slug);
  //   //window.location.href='/country/' + slug;
  // };
  render() {
    let list=[];
    let countries=this.props.countries;
    for(let index in countries){
    if(countries[index].TotalConfirmed>0){
      const slug="/country/"+countries[index].Slug;
      const country=(<Link to={slug} style={{textDecoration:"none", color:"black"}}><div class="countryDiv">
        <h5 class='countryName'>{countries[index].Country}
        </h5>
        <div class='cases'>{countries[index].TotalConfirmed} cases</div>
        <div class='cases'>{countries[index].TotalDeaths} deaths</div>
        </div>
        </Link>);
      list.push(country);
    }
    }
    return(<div style={{marginTop:"10px"}}>
      {list}
    </div>);
  }
} 