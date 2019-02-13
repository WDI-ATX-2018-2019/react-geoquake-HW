import React, { Component } from 'react';
import EarthquakeList from './EarthquakeList/EarthquakeList'

class App extends Component {

  state = {
    earthquakes: []
  }

 getQuakes = async () => {

    try {
      const earthquakes = await fetch('https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/significant_month.geojson');
      const earthquakesJson = await earthquakes.json();
      this.setState({earthquakes: earthquakesJson.features});
      return earthquakesJson.features
    } catch (err) {
      console.log(err, 'error in catch block')
      return err
  }

}

componentDidMount(){
    this.getQuakes().then((data) => console.log(data,'EARTHQUAKEEE'));
  } 


  render() {
    return (
      <div className="app">
        <div className="mapContainer">
          ...put Map Component here...
        </div>
        <div className="quakeContainer">
          <h1>Earthquakes from the past week: </h1>
          <EarthquakeList earthquakes={this.state.earthquakes} />
        </div>
      </div>
    );
  }
}

export default App;
