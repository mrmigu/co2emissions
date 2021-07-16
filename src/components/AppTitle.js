import React from "react";
import { connect } from "react-redux";

const AppTitle = (props) => {
    return (
        <h1>CO2 Emissions By Year: {props.year}</h1>
    )
}

const mapStateToProps = (state) => {
   return {
        year: state.selectedYear
    }
}

export default connect(mapStateToProps)(AppTitle); 