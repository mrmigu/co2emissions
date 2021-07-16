import React from 'react'
import { connect } from 'react-redux';
import AppTitle from './AppTitle';
import YearSlider from './YearSlider';
import WorldMap from './WorldMap';
import Tooltip from './Tooltip';
import '../css/App.css';

function App() {

  return (
    <div className="App">
      <AppTitle />
      <div style={{padding: "10px 0px"}}>
        <YearSlider />
      </div>
      <div>
        <WorldMap />
        <Tooltip />
      </div>
    </div>
  );
}


const mapStateToProps = (state) => {
  return {
       co2Data: state.co2Data,
       year: state.selectedYear,
       maxCo2: state.maxCo2,

   }
}

export default connect(mapStateToProps)(App);
