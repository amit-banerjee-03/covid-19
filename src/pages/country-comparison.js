import React, { Component, PureComponent } from 'react';
import {
    LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';

const formatData = (countries) => {
    var formattedData = [];
    for (var index = 0; index < countries.length; index++) {
        if (countries[index].TotalConfirmed > 0) {
            formattedData.push(countries[index]);
        }
    }
    formattedData.sort(function (a, b) {
        return b.TotalConfirmed - a.TotalConfirmed;
    });
    return formattedData;
};

class CountryComparison extends PureComponent {
    static jsfiddleUrl = 'https://jsfiddle.net/alidingling/xqjtetw0/';
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            Countries: []
        };
    }

    componentDidMount() {
        fetch("https://api.covid19api.com/summary")
            .then(res => res.json())
            .then(
                (result) => {
                    var formattedData = formatData(result.Countries);
                    this.setState({
                        isLoaded: true,
                        Countries: formattedData
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
        const { error, isLoaded, Countries } = this.state;
        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return <div>Loading...</div>;
        } else {
            var data = [];
            Countries.map(Country => (
                data.push({ name: Country.Country, "Total Confirmed": Country.TotalConfirmed, "Total Recovered": Country.TotalRecovered, "Total Deaths": Country.TotalDeaths })
            ));
            return (
                <center>
                    <div style={{
                        fontFamily: "sans-serif",
                        color: "#ba0000"
                    }}>
                        <h1>Worldwide COVID-19 cases</h1>
                    </div>
                    <div style={{
                        width: "60%",
                        overflow: "scroll",
                        padding: "50px"
                    }}>
                        <LineChart
                            width={12000}
                            height={500}
                            data={data}
                            margin={{
                                top: 5, right: 30, left: 20, bottom: 5,
                            }}
                        >
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="name" />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            <Line type="monotone" dataKey="Total Confirmed" stroke="#8884d8" activeDot={{ r: 8 }}/>
                            <Line type="monotone" dataKey="Total Recovered" stroke="#82ca9d" />
                            <Line type="monotone" dataKey="Total Deaths" stroke="#ff0000" />
                        </LineChart>
                    </div>
                </center>
            );
        }
    }
}

export default CountryComparison;