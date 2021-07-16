import React from "react";
import { connect } from "react-redux";
import Slider from '@material-ui/core/Slider';
import Grid from '@material-ui/core/Grid';
import { createTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import constants from "../constants";
import { changeYear } from "../actions";

const yearSlider = ({year, changeYear}) => {

    const muiTheme = createTheme({
        overrides:{
            MuiSlider: {
                thumb:{
                    color: "#ff5533",
                },
                track: {
                    color: "#ff5533"
                },
                rail: {
                    color: "#ff5533"
                }
          }
      }
      });

    return (
        <Grid container spacing={2} justifyContent="center">
            <Grid item>{constants.START_YEAR}</Grid>
            <Grid item xs={3}>
                <ThemeProvider theme={muiTheme}>
                    <Slider 
                        value={year}
                        onChange={(event, year) => {changeYear(year)}}
                        defaultValue={constants.START_YEAR}
                        aria-labelledby="discrete-slider-small-steps"
                        step={1}
                        min={constants.START_YEAR}
                        max={constants.END_YEAR}
                        valueLabelDisplay="auto"
                    />
                </ThemeProvider>
            </Grid>
            <Grid item>{constants.END_YEAR}</Grid>
        </Grid>
    )
}

const mapStateToProps = (state) => {
   return {
        year: state.selectedYear
    }
}

export default connect(mapStateToProps, {changeYear})(yearSlider); 