import React from "react";
import { connect } from "react-redux";
import Slider from '@material-ui/core/Slider';
import Grid from '@material-ui/core/Grid';
import constants from "../constants";
import { changeYear } from "../actions";

const yearSlider = ({year, changeYear}) => {

    const handleChangeYear = (event, year) => {
        changeYear(year)
    }

    return (
        <Grid container spacing={2} justifyContent="center">
            <Grid item>{constants.startYear}</Grid>
            <Grid item xs={3}>
                <Slider 
                    value={year}
                    onChange={handleChangeYear}
                    defaultValue={constants.startYearstartYear}
                    // getAriaValueText={valuetext}
                    aria-labelledby="discrete-slider-small-steps"
                    step={1}
                    min={constants.startYear}
                    max={constants.endYear}
                    valueLabelDisplay="auto"
                />
            </Grid>
            <Grid item>{constants.endYear}</Grid>
        </Grid>
    )
}

const mapStateToProps = (state) => {
   return {
        year: state.selectedYear
    }
}

export default connect(mapStateToProps, {changeYear})(yearSlider); 