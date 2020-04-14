import React, { Component } from 'react';
import DrawPie from '../recharts/pie-chart-with-customized-label';
import WorldwideSpread from '../maps/worldwide-spread';
import { getCode } from 'country-list';

var countrySlug = {};

const formatData = (countries) => {
    var formattedData = [];
    for (var index = 0; index < countries.length; index++) {
        if (countries[index].TotalConfirmed > 0) {
            formattedData.push(countries[index]);
        }
        countrySlug[getCode(countries[index].Country)] = countries[index].Slug;
    }
    formattedData.sort(function (a, b) {
        return b.TotalConfirmed - a.TotalConfirmed;
    });
    return formattedData;
};

const getPieData = (topCountries, total) => {
    var pieData = [];
    var totalConfirmed = 0;
    topCountries.forEach(country => {
        pieData.push({ name: country.Country, value: country.TotalConfirmed });
        totalConfirmed += country.TotalConfirmed;
    });
    pieData.push({ name: "Others", value: total - totalConfirmed });
    return pieData;
}

const getMapData = (countries) => {
    var mapData = {};
    countries.forEach(country => {
        var countryCode = getCode(country.Country);
        mapData[countryCode] = country.TotalConfirmed;
    });
    return mapData;
}

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            Countries: [],
            overview: {}
        };
        this.pieAttributes = { svgHeight: 380, svgWidth: 500, outerClassName: "border border-dark", cx: 250, cy: 180 };
    }

    componentDidMount() {
        fetch("https://api.covid19api.com/summary")
            .then(res => res.json())
            .then(
                (result) => {
                    var formattedData = formatData(result.Countries);
                    var pieData = getPieData(formattedData.slice(0, 4), result.Global.TotalConfirmed);
                    this.setState({
                        isLoaded: true,
                        Countries: formattedData,
                        overview: result.Global,
                        pieData: pieData
                    });
                },
                // Note: it's important to handle errors here
                // instead of a catch() block so that we don't swallow
                // exceptions from actual bugs in components.
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            );
        var scriptsToLoad = [
            "https://unpkg.com/react/umd/react.production.min.js",
            "https://unpkg.com/react-dom/umd/react-dom.production.min.js",
            "https://unpkg.com/prop-types/prop-types.min.js",
            "https://unpkg.com/recharts/umd/Recharts.min.js"
        ];

        for (var index in scriptsToLoad) {
            var script = document.createElement("script");
            script.src = scriptsToLoad[index];
            script.async = true;
            document.body.appendChild(script);
        }
    }

    render() {
        const { error, isLoaded, Countries, overview, pieData } = this.state;
        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return <div>Loading...</div>;
        } else {
            var data = [];
            Countries.map(Country => (
                data.push({ name: Country.Country, "Total Confirmed": Country.TotalConfirmed, "Total Recovered": Country.TotalRecovered, "Total Deaths": Country.TotalDeaths })
            ));
            const mapData = getMapData(Countries);
            return (
                <>
                    <div className="row">
                        <div className="col-lg-3 col-md-3 col-sm-12 col-sm-12"></div>
                        <div className="col-lg-6 col-md-6 col-sm-12 col-sm-12 text-center">
                            <div className="container">
                                <div className="row">
                                    <div className="col-12">
                                        <h1 className="p-3">Coronavirus Cases:</h1>
                                    </div>
                                    <div className="col-12">
                                        <h5 className="p-2">Total Confirmed: {overview.TotalConfirmed.toLocaleString('en-IN')}</h5>
                                    </div>
                                    <div className="col-12">
                                        <h5 className="p-2">Total Deaths: {overview.TotalDeaths.toLocaleString('en-IN')}</h5>
                                    </div>
                                    <div className="col-12">
                                        <h5 className="p-2">Total Recovered: {overview.TotalRecovered.toLocaleString('en-IN')}</h5>
                                    </div>
                                    <div className="col-12">
                                        <h4>Countries with most cases of COVID-19</h4>
                                    </div>
                                    <div className="col-12">
                                        <DrawPie data={pieData} COLORS={['#ff0052', '#0088FE', '#00C49F', '#FFBB28', '#FF8042']} attributes={this.pieAttributes} />
                                    </div>
                                    <div className="col-12">
                                        <WorldwideSpread mapData={mapData} countrySlug={countrySlug} />
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </>
            );
        }
    }
}

export default Home;