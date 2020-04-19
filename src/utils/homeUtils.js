import { getCode } from 'country-list';

var countrySlug = {};

export const sortCountries = (countries, type, callback) => {
    if (type === "Confirmed") {
        var confirmedSort = JSON.parse(JSON.stringify(countries));
        return callback(confirmedSort.sort(function (a, b) {
            return b.TotalConfirmed - a.TotalConfirmed;
        }));
    } else if (type == "Deaths") {
        var deathSort = JSON.parse(JSON.stringify(countries));
        return callback(deathSort.sort(function (a, b) {
            return b.TotalDeaths - a.TotalDeaths;
        }));
    } else {
        var recoveredSort = JSON.parse(JSON.stringify(countries));
        return callback(recoveredSort.sort(function (a, b) {
            return b.TotalRecovered - a.TotalRecovered;
        }));
    }
}

export const formatData = (countries) => {
    var formattedData = [];
    var exclude = ['MV', 'MT', 'MU', 'SC', 'LI', 'GD', 'ST', 'BB', 'AG', 'BH', 'CV', 'DM', 'LC', 'MC', 'KN', 'SM', 'VC', 'VA', 'AD', 'BM', 'HM', 'PR', 'TO', 'MQ', 'NR', 'PW', 'AW', 'KM', 'IO', 'WF', 'PN', 'MH', 'KY', 'IM', 'NC', 'MF', 'VG', 'VI', 'CC', 'FO', 'RE', 'KI', 'JE', 'SJ', 'AS', 'CX', 'BL', 'FM', 'NF', 'FK', 'GP', 'NU', 'AQ', 'GI', 'GL', 'GU', 'VU', 'MO', 'TJ', 'TM', 'PM', 'AX', 'SB', 'TK', 'AI', 'CK', 'PF', 'KP', 'GF', 'MS', 'UM', 'TC', 'HK', 'TV', 'GS', 'MP', 'SH', 'AN', 'WS', 'TF', 'GG', 'LS', 'YT', 'BV'];
    for (var index = 0; index < countries.length; index++) {
        if (countries[index].TotalConfirmed > 0) {
            formattedData.push(countries[index]);
        }
        if (exclude.indexOf(countries[index].CountryCode) === -1) {
            countrySlug[getCode(countries[index].Country)] = countries[index].CountryCode;
        }
    }
    return { formatted_data: formattedData, country_slug: countrySlug };
};

export const getPieData = (topCountries, total, type) => {
    var pieData = [];
    var topTotal = 0;
    topCountries.forEach(country => {
        if (type === "Confirmed") {
            pieData.push({ name: country.Country, value: country.TotalConfirmed });
            topTotal += country.TotalConfirmed;
        } else if (type == "Deaths") {
            pieData.push({ name: country.Country, value: country.TotalDeaths });
            topTotal += country.TotalDeaths;
        } else {
            pieData.push({ name: country.Country, value: country.TotalRecovered });
            topTotal += country.TotalRecovered;
        }
    });
    pieData.push({ name: "Others", value: total - topTotal });
    return pieData;
}

export const getMapData = (countries) => {
    var mapData = {};
    countries.forEach(country => {
        var countryCode = getCode(country.Country);
        mapData[countryCode] = country.TotalConfirmed;
    });
    return mapData;
}