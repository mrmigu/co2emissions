import React from "react";
import ReactTooltip from 'react-tooltip';
import { connect } from "react-redux";

const Tooltip = ({content, year}) => {
    if (!content) {
        return "";
    }
    const contents = (
        <div>
            <h2>{content.name}: {year}</h2>
            <div>CO2 Emmitted(tonnes): {content?.co2 ? Math.round(content?.co2).toLocaleString() : "N/A"}</div>
        </div>
    )

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