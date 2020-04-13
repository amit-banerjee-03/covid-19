import React, { Component } from 'react';
import $ from "jquery";
class CountryStats extends Component {
    constructor(props) {
        super(props);
        this.state = { isLoaded: false, countries: [], error: null };
      }
    render() {
        //$('.mdb-select').materialSelect();
        const selectBox=(<select class="mdb-select md-form colorful-select dropdown-primary">
             <option value="1">Option 1</option>
             <option value="2">Option 2</option>
             <option value="3">Option 3</option>
             <option value="4">Option 4</option>
             <option value="5">Option 5</option>
         </select>
         //<label class="mdb-main-label">Blue select</label>
         );
        return (
            selectBox
        );
    }
}

export default CountryStats;