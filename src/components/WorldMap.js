import { useEffect, useMemo } from "react";
import { connect } from "react-redux";
import {
  ComposableMap,
  Geographies,
  Geography,
} from "react-simple-maps";
import { scalePow } from "d3-scale";
import { changeTooltip, initCo2Data } from "../actions";
import constants from "../constants"

const geoUrl = "https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json"

const WorldMap = ({year, co2Data, changeTooltip, initCo2Data}) => {

    useEffect(() => {
        initCo2Data()
    }, [initCo2Data])    

    const maxCo2 = useMemo(() => {
        const getMaxCo2 = (co2Data) => {
            let maxCo2 = 0;
            co2Data && co2Data.forEach(countryData => {
                if (countryData.iso_code && countryData.iso_code !== constants.WORLD_ISO) { //only use country data, exclue continent, world data
                    for (let x = constants.START_YEAR; x <= constants.END_YEAR; x++) {
                        if (countryData[x]) {
                            maxCo2 = Math.max(maxCo2 , countryData[x]);
                        }
                    }
                }
            })
            return maxCo2;
        }
        return getMaxCo2(co2Data)
    }, [co2Data])


    // use a power scale with exponent 0.4 to minimize the amount that data is obfuscated as the max value is somewhat of an outlier
    const colorScale = scalePow()
        .exponent(0.4)
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
                            fill={emmisionsData && emmisionsData[year] ? colorScale(emmisionsData[year]) : "#000000"}
                            onMouseEnter={() => {
                                changeTooltip({
                                    name: emmisionsData?.name,
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
     }
 }
 
export default connect(mapStateToProps, {changeTooltip, initCo2Data})(WorldMap); 
