import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ image }) => <div><img class='mapIcon' src={image}></img></div>

export default class SimpleMap extends Component {
  static defaultProps = {
    center: {
      lat: 30.267153,
      lng: -97.7430608
    },
    zoom: 11
  };

  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '70vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyBHLett8djBo62dDXj0EjCimF8Rd6E8cxg' }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
        {
          this.props.earthquakes.map((earthquake, i)=>{
            return (
            <AnyReactComponent
             key={i}
              lat={earthquake.geometry.coordinates[1]}
              lng={earthquake.geometry.coordinates[0]}
            image={'images/earthquake.png'}
          />
          )
        })
        }
        </GoogleMapReact>
      </div>
    );
  }
}
