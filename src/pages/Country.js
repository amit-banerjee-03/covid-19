import React, { Component } from 'react';
import CountryList from "./countries.js";
import $ from "jquery";
import callApi from "../utils/apiUtils"
import {
     Line, XAxis, YAxis, CartesianGrid, Bar,  ComposedChart, Tooltip, Legend
  } from 'recharts';
export default class CountryStats extends Component{
    constructor(props) {
        super(props);
        this.state = {id:this.props.match.params.id, 
                      url_head:'https://api.covid19api.com/dayone/country/',
                      isConfirmedLoaded: false, 
                      confirmed: [], 
                      error: null,
                      isRecoveredLoaded:false,
                      isDeathLoaded:false,
                      status:''
                    };
      }
      confirm=(result, param)=>{
        console.log(result);
        this.setState({isConfirmedLoaded:true});
        $("#myDiv").append(" "+param['case']+" cases loaded");
      }
      recover=(result, param)=>{
        this.setState({isRecoveredLoaded:true});
        $("#myDiv").append(" recovered cases loaded");
        console.log(this.state.error+" "+this.state.status);
      }
      componentDidUpdate() {
        const id=this.state.id;
        const recovered_url_tail='/status/confirmed/live';
        const deaths_url_tail='/status/confirmed/live';
        if(this.state.status=='SUCCESS' && !this.state.isRecoveredLoaded){
          callApi(this.state.url_head+id+recovered_url_tail, this, this.recover);
        }
      }
      componentDidMount() {
        const id=this.state.id;
        const confirmed_url_tail='/status/confirmed/live';
        callApi(this.state.url_head+id+confirmed_url_tail, this, this.confirm, {case:'confirmed'});
      }
    render() {
        const graph=(
        // <div>
        // <CountryList id={this.state.id}/>
        // <ComposedChart width={730} height={250} data={this.state.data}>
        //     <XAxis dataKey="date" />
        //     <YAxis />
        //     <Tooltip />
        //     <Legend />
        //     <CartesianGrid stroke="#f5f5f5" />
        //     <Line type="monotone" dataKey="recovered"  stroke="#8884d8" />
        //     <Bar dataKey="confirmed" barSize={20} fill="#413ea0" />
        //     <Line type="monotone" dataKey="deaths" stroke="#ff7300" />
        //   </ComposedChart>
        //   </div>
        <div id="myDiv"></div>
          );
        return(
          graph
        )
      }
    }

