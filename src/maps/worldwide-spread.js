import React from "react";
import { VectorMap } from "react-jvectormap";
import { Legend } from "recharts";
var slugs;

const handleClick = (e, countryCode) => {
    e.preventDefault();
    if (slugs[countryCode] !== undefined) {
        window.location.href = "country/" + slugs[countryCode];
    } else {
        alert("Oops! We don't have data about this country yet!!");
    }
};
class WorldwideSpread extends React.Component {
    render() {
        const { mapData, countrySlug } = this.props;
        slugs = countrySlug;
        return (
            <div className="row">
                <div className="col-12">
                    <div>
                        <VectorMap
                            map={"world_mill"}
                            backgroundColor="transparent" //change it to ocean blue: #0077be
                            zoomOnScroll={false}
                            containerStyle={{
                                width: "100%",
                                height: "520px"
                            }}
                            onRegionClick={handleClick} //gets the country code
                            containerClassName="map"
                            regionStyle={{
                                initial: {
                                    fill: "#e4e4e4",
                                    "fill-opacity": 0.9,
                                    stroke: "none",
                                    "stroke-width": 0,
                                    "stroke-opacity": 0
                                },
                                hover: {
                                    "fill-opacity": 0.8,
                                    cursor: "pointer"
                                },
                                selected: {
                                    fill: "#2938bc" //color for the clicked country
                                },
                                selectedHover: {}
                            }}
                            regionsSelectable={true}
                            series={{
                                regions: [
                                    {
                                        values: mapData, //this is your data
                                        scale: ["#146804", "#ff0000"], //your color game's here
                                        normalizeFunction: "polynomial"
                                    }
                                ]
                            }}
                        />
                    </div>
                    <div>
                        <Legend
                            payload={[
                                { value: 'Low', type: 'circle', id: '1', color: "#146804" },
                                { value: 'Medium', type: 'circle', id: '1', color: "#75561c" },
                                { value: 'High', type: 'circle', id: '1', color: "#ff0000" },
                                { value: 'N/A', type: 'circle', id: '1', color: "#e7e7e7" }
                            ]}
                        />
                    </div>
                </div>
            </div>
        );
    }

};
export default WorldwideSpread;