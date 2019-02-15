import React, { Component } from 'react';
import { Map, Marker, GoogleApiWrapper } from 'google-maps-react';

const mapStyles = {
  width: '40%',
  height: '90%'
};

export class EarthquakeMap extends Component {
  



  render() {
    
    const markerList = this.props.earthquakes.map((earthquake, index)=> {
      return (
        <Marker
          key={index}
          position={{lat: earthquake.geometry.coordinates[1], lng: earthquake.geometry.coordinates[0]}}
          title={earthquake.properties.title}
          />

        )
    })
          



    return (
      <div>
      <Map
        google={this.props.google}
        zoom={14}
        style={mapStyles}
        initialCenter={{
         lat: 30.2682,
         lng: -97.74295 
        }}
      >
      {markerList}
      </Map>
      </div>
    );
  }
}


export default GoogleApiWrapper({
  apiKey: 'AIzaSyAR1Q8F77pCpAWiF1A-dzVY1dmL9PlZUv0'
})(EarthquakeMap);