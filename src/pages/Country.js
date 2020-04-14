import React, { Component } from 'react';
import {
    useParams
  } from "react-router-dom";

  export default function CountryStats(){
    let { id } = useParams();
  return (
    <div>
      <h3>ID: {id}</h3>
    </div>
  );
}
