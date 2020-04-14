import React, { Component } from 'react';
import CountryStats from "./country";
import './../styles/countries.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useParams
} from "react-router-dom";

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
        this.props.history.push('/country/'+e.target.value);
      }
    render() {
        const options=[];
        const countries=this.state.countries;
        if(this.state.isLoaded){
            for(let x in countries){
            options.push(<option value={countries[x].Slug}>{countries[x].Country}</option>)
            }
        }
        
        const selectBox=(<Router>
          <select id="countries" onChange={this.onChange}>
          <option selected disabled>Select a country</option>
       {options}
    </select>
    <Switch>
          <Route path="/country/:id" component={CountryStats} />
        </Switch>
    </Router>
        );
        

        return (
            selectBox
        );
    }
}

