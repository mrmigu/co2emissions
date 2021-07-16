import React from "react";
import ReactTooltip from 'react-tooltip';
import { connect } from "react-redux";

const Tooltip = ({content, year}) => {
    if (!content) {
        return "";
    }
    const contents = (
        <div>
            <h3>{content.name}: {year}</h3>
            <div>Population: {content?.population?.toLocaleString()}</div>
            <div>CO2 Emmitted: {content?.co2?.toLocaleString()}</div>
        </div>
    )
console.log("tooltip", contents)

    return (
        <ReactTooltip>{contents}</ReactTooltip>
    )


}

const mapStateToProps = (state) => {
   return {
        content: state.tooltipContent,
        year: state.selectedYear,
    }
}

export default connect(mapStateToProps)(Tooltip); 