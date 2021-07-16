import { connect } from "react-redux";
import {
  ComposableMap,
  Geographies,
  Geography,
} from "react-simple-maps";
import { scaleLinear } from "d3-scale";
import { changeTooltip } from "../actions";


const geoUrl = "https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json"

const WorldMap = ({year, co2Data, maxCo2, changeTooltip}) => {
    const colorScale = scaleLinear()
    .domain([0, maxCo2])
    .range(["#ffedea", "#ff5533"]);

    return (
        <ComposableMap 
            data-tip=""
            projectionConfig={{
                scale: 150,
            }}
            width={800}
            height={400}
        >
            {co2Data && co2Data.length > 0 && (
                <Geographies 
                    geography={geoUrl}
                >
                {({ geographies }) =>
                    geographies.map((geo) => {
                    const emmisionsData = Object.values(co2Data).find((countryData) => {
                        return countryData.iso_code === geo.properties.ISO_A3
                    });
                    return (
                        <Geography
                            key={geo.rsmKey}
                            geography={geo}
                            fill={emmisionsData ?
                                emmisionsData[year] ?
                                    colorScale(emmisionsData[year]) 
                                    : "#000000" // no emmision data for the country for the selected year
                                : "#EEEEEE" //no emmision data for the country
                            }
                            onMouseEnter={() => {
                                changeTooltip({
                                    name: geo?.properties?.NAME,
                                    population: geo?.properties?.POP_EST,
                                    co2: emmisionsData && emmisionsData[year],
                                });
                            }}
                            onMouseLeave={() => {
                                changeTooltip(null);
                            }}
                            style={{
                                default: {
                                    outline: "none",
                                },
                                hover: {
                                    outline: "none"
                                },
                                pressed: {
                                    outline: "none",
                                },
                            }}
                        />
                    );
                    })
                }
                </Geographies>
            )}
        </ComposableMap>
    );
};

const mapStateToProps = (state) => {
    return {
         co2Data: state.co2Data,
         year: state.selectedYear,
         maxCo2: state.maxCo2,
     }
 }
 
export default connect(mapStateToProps, {changeTooltip})(WorldMap); 
