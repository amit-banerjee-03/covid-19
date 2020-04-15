import React, { Component } from 'react';
import './../styles/countries.css';
import SelectSearch from 'react-select-search';

export default class CountryList extends Component {
    constructor(props) {
        super(props);
        let id='';
        if(typeof this.props.id!='undefined'){
          id=this.props.id;
        }
        this.state = { isLoaded: false, countries: [], error: null, country:id};
      }
      componentDidMount() {
        fetch('https://api.covid19api.com/countries')
        .then(res => res.json())
        .then((result) => {
          this.setState({countries: result, isLoaded: true })
        },
          (error) => {
            this.setState({ error: error, isLoaded: true })
          })

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
      window.location.href =  '/country/'+value;
    };
    render() {
        const options=[];
        const countries=this.state.countries;
        if(this.state.isLoaded){
            for(let x in countries){
              let selectedValue="";
              if(typeof this.props.id!='undefined' && this.props.id==countries[x].Slug){
                selectedValue="selected";
              }
            options.push({name:countries[x].Country, value:countries[x].Slug})
            }
        }
        let selectCountry='';
        if(typeof this.props.id=='undefined'){
          selectCountry='Please select a country to continue';
        }
        const selectBox=(
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
      <div style={{color:"red", fontWeight:"bold", fontSize:"20px"}}>{selectCountry}</div>
      </div>
        );
        

        return (
            selectBox
        );
    }
}

