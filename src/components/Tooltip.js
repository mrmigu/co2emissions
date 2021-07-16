import React from "react";
import ReactTooltip from 'react-tooltip';
import { connect } from "react-redux";

import owidCo2Data from '../data/owid-co2-data.json';

const Tooltip = ({content, year}) => {
    if (!content || !content.name) {
        return "";
    }
    const countryData = owidCo2Data[content.name]?.data?.find(yearlyData => yearlyData.year === year) || {};

    const {
        co2,
        cement_co2,
        coal_co2,
        flaring_co2,
        gas_co2,
        oil_co2,
        other_industry_co2,
        co2_growth_abs,
        co2_growth_prct,
        population,
        gdp,
    } = countryData;

    const chartData = [
        { source: 'Cement', tonnes: cement_co2 || 0 },
        { source: 'Coal', tonnes: coal_co2 || 0 },
        { source: 'Flaring', tonnes: flaring_co2 || 0 },
        { source: 'Gas', tonnes: gas_co2 || 0 },
        { source: 'Oil', tonnes: oil_co2 || 0 },
        { source: 'Other', tonnes: other_industry_co2 || 0 },
      ];
    const contents = (
        <div>
            <h2>{content.name}: {year}</h2>
            <div>
                <span style={{fontWeight: 'bold'}}>
                    Population:&nbsp;
                </span>
                {population?.toLocaleString() || 'N/A'}
            </div>
            <div>
                <span style={{fontWeight: 'bold'}}>
                    GDP:&nbsp;
                </span>
                {gdp?.toLocaleString() || 'N/A'}
            </div>
            <div>
                <span style={{fontWeight: 'bold'}}>
                    CO2 Emmitted(tonnes):&nbsp;
                </span>
                {co2 ? co2.toLocaleString() : "N/A"}
                {co2_growth_abs && (
                    <span style={{color: co2_growth_abs >= 0 ? "green" : "red"}}>
                        {co2_growth_abs >= 0 ? "⬆" : "⬇"}{co2_growth_abs} ({co2_growth_prct}%)
                    </span>
                )}
            </div>
            {co2 && (
                <>
                <h4>Breakdown of CO2 Emissions</h4>
                <div>
                    {chartData.map(point => {
                        return (
                            <div>
                                <span style={{fontWeight: 'bold'}}>
                                    {point.source}:&nbsp;
                                </span>
                                 {point.tonnes} ({Math.round((point.tonnes / co2) * 1000) /  10}%)
                            </div>
                        )
                    })}
                </div>
                </>
            )}
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