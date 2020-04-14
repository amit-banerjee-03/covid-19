import React, { Component } from 'react';
import CountryList from "./countries.js";
import {
     Line, XAxis, YAxis, CartesianGrid, Bar,  ComposedChart, Tooltip, Legend
  } from 'recharts';
export default class CountryStats extends Component{
    constructor(props) {
        super(props);
        this.state = {id:this.props.match.params.id, isLoaded: false, confirmed: [], error: null };
      }
      componentDidMount() {
        const id=this.props.match.params.id;
        fetch('https://api.covid19api.com/dayone/country/'+id+'/status/confirmed/live')
        .then(res => res.json())
        .then((result) => {
            const confirmed=result;
            fetch('https://api.covid19api.com/dayone/country/'+id+'/status/recovered/live')
            .then(res => res.json())
            .then((result) => {
                const recovered=result;
                fetch('https://api.covid19api.com/dayone/country/'+id+'/status/deaths/live')
                .then(res => res.json())
                .then((result) => {
                const deaths=result;
                var data=[];
                for(let index in confirmed){
                    const date=confirmed[index].Date
                    data.push({
                            date:date.substring(0,date.length-10),
                            confirmed:confirmed[index].Cases,
                            deaths:deaths[index].Cases,
                            recovred:recovered[index].Cases,
                    });
                }
              this.setState({data:data, isLoaded: true })
            },
              (error) => {
                this.setState({ error: error, isLoaded: true })
              })
            },
              (error) => {
                this.setState({ error: error, isLoaded: true })
              })
        },
          (error) => {
            this.setState({ error: error, isLoaded: true })
          })
      }
    render() {
        const graph=(<div>
        <ComposedChart width={730} height={250} data={this.state.data}>
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip />
            <Legend />
            <CartesianGrid stroke="#f5f5f5" />
            <Line type="monotone" dataKey="recovered"  stroke="#8884d8" />
            <Bar dataKey="confirmed" barSize={20} fill="#413ea0" />
            <Line type="monotone" dataKey="deaths" stroke="#ff7300" />
          </ComposedChart>
          <CountryList id={this.state.id}/>
          </div>
          );
        return(
          graph
        )
      }
    }

