import React from 'react'
import '../css/App.css';
// import Grid from '@material-ui/core/Grid';
import AppTitle from './AppTitle';
import YearSlider from './YearSlider';
import WorldMap from './WorldMap';

function App() {

  return (
    <div className="App">
      <AppTitle />
      <div style={{paddingTop: "25px"}}>
        <YearSlider />
      </div>
      <div>
        <WorldMap />
      </div>
    </div>
  );
}

export default App;
