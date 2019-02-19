import React, { Component } from 'react';
import EarthquakeList from './EarthquakeList/EarthquakeList'
import SimpleMap from './MapContainer/MapContainer'

class App extends Component {
  state = {
    earthquakes: [],
    zoom: 0,
    center: {
      lat: 30.2682,
      lng: -97.74295
    }
  }

  getQuakes = async () => {
    try {
          const earthquakes = await fetch('https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/significant_month.geojson');
          const earthquakesJson = await earthquakes.json()
          this.setState({
            earthquakes: earthquakesJson.features
          })
          return earthquakesJson.features
      } catch (err) {
          console.log(err, 'error in catch block')
          return err
      }
  }

  componentDidMount() {
      this.getQuakes().then((data) => console.log('Earthquake data successfully retrieved!'))
  }

  render() {
    return (
      <div className="app">
        <div className="mapContainer">
          <SimpleMap
            earthquakes={this.state.earthquakes}
            center={this.state.center}
            zoom={this.state.zoom}
          />
          <p id="attr">Icons made by <a href="https://www.freepik.com/" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a>, licensed by <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0" target="_blank" rel="noopener noreferrer">CC 3.0 BY</a></p>
        </div>
        <div className="quakeContainer">
          <h1>Significant earthquakes from the past 30 days: </h1>
          <EarthquakeList earthquakes={this.state.earthquakes} />
        </div>
      </div>
    );
  }
}

export default App;
