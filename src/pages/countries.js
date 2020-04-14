import React, { Component } from 'react';
import './../styles/countries.css';

export default class CountryList extends Component {
    constructor(props) {
        super(props);
        this.state = { isLoaded: false, countries: [], error: null };
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
      onChange = (e) => {
        //alert(e.target.value);
        window.location.href =  '/country/'+e.target.value;
      }
    render() {
        const options=[];
        const countries=this.state.countries;
        if(this.state.isLoaded){
            for(let x in countries){
              let selectedValue="";
              if(typeof this.props.id!='undefined' && this.props.id==countries[x].Slug){
                selectedValue="selected";
              }
            options.push(<option value={countries[x].Slug} selected={selectedValue}>{countries[x].Country}</option>)
            }
        }
        
        const selectBox=(
          <select id="countries" onChange={this.onChange}>
          <option selected disabled>Select a country</option>
       {options}
    </select>
        );
        

        return (
            selectBox
        );
    }
}

