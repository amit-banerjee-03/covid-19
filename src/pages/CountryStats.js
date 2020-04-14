import React, { Component } from 'react';
import $ from "jquery";
import ReactDOM from "react-dom";
import './../styles/CountryStats.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useParams
} from "react-router-dom";

class CountryStats extends Component {
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
          <Route path="/country/:id" children={<Child />} />
        </Switch>
    </Router>
        );
        

        return (
            selectBox
        );
    }
}
export function Child() {
  // We can use the `useParams` hook here to access
  // the dynamic pieces of the URL.
  let { id } = useParams();

  return (
    <div>
      <h3>ID: {id}</h3>
    </div>
  );
}


export default CountryStats;