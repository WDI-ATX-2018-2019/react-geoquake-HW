import React, { Component } from 'react';
import EarthQuakeContainer from './EarthQuakeContainer/EarthQuakeContainer'
import MapApiContainer from './MapApiContainer/MapApiContainer'

export default class App extends Component {
  state={
    earthquakes: []
  }
  getEarthquakeData = (earthquakeData) =>{
    this.setState({
      earthquakes: earthquakeData
    })
  }

  render() {
    return (
      <div className="app">
        <div className="mapContainer">
          <MapApiContainer earthquakes={this.state.earthquakes} />
        </div>
        <div className="quakeContainer">
          <h1>Earthquakes from the past week: </h1>
            <EarthQuakeContainer getEarthquakeData={this.getEarthquakeData} />
        </div>
      </div>
    );
  }
}
