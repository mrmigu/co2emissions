import { connect } from "react-redux";
import {
  ComposableMap,
  Geographies,
  Geography,
  Sphere,
  Graticule
} from "react-simple-maps";
import { scaleLinear } from "d3-scale";


const geoUrl = "https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json"
// const geoUrl = "/world.json";

const WorldMap = ({year, co2Data, maxCo2}) => {
console.log("maxCo2", maxCo2)    
    const colorScale = scaleLinear()
    .domain([0, maxCo2])
    .range(["#ffedea", "#ff5233"]);


    return (
    <ComposableMap
      projectionConfig={{
        rotate: [-10, 0, 0],
        scale: 100
      }}
    >
      <Sphere stroke="#E4E5E6" strokeWidth={0.5} />
      <Graticule stroke="#E4E5E6" strokeWidth={0.5} />
      {co2Data.length > 0 && (
        <Geographies geography={geoUrl}>
          {({ geographies }) =>
            geographies.map((geo) => {
              const d = Object.values(co2Data).find((countryData) => {
                  return countryData.iso_code === geo.properties.ISO_A3
              });
              return (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  fill={d ? colorScale(d[year]) : "#F5F4F6"}
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
 
export default connect(mapStateToProps)(WorldMap); 
