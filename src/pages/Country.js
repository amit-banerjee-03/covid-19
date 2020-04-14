import React, { Component } from 'react';
import {
    useParams
  } from "react-router-dom";

  export default function CountryStats(){
    let { id } = useParams();
    let isLoaded=false;
    var countries=[];
    let errorOccured=null;
    fetch('https://api.covid19api.com/countries')
        .then(res => res.json())
        .then((result) => {
          countries=result;
          isLoaded=true;
        },
          (error) => {
            isLoaded=true;
            errorOccured=error;
          })
      console.log(countries);
  return (
    <div>
      <h3>ID: {id}</h3>
    </div>
  );
}
