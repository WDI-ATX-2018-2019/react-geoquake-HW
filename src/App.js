import React, { Component } from 'react';
import MapContainer from './Containers/MapContainer';
import QuakeContainer from './Containers/QuakeContainer';

export default class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            coords: []
        }
        
        this.placeCoords = this.placeCoords.bind(this);
    }

    placeCoords = (coordsArray) => {
        //let newCoords = this.state.coords
        //console.log(coordsArray)
        this.setState({
            coords: coordsArray
        })
    }

  render() {
    return (
      <div className="app">
        <div className="mapContainer">
          <MapContainer geo={this.state.coords}/>
        </div>
        <div className="quakeContainer">
          <h1>Earthquakes from the past 30 Days: </h1>
            <QuakeContainer placeCoords={this.placeCoords} />
        </div>
      </div>
    );
  }
}
