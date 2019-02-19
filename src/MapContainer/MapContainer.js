import React, { Component } from 'react'
import GoogleMapReact from 'google-map-react'
import APIKEY from './API'

const Marker = ({ image }) => <div><img className="quakeImage" alt="earthquake icon" src={image}/></div>;


class SimpleMap extends Component {
 

  render() {

          const markerList = this.props.earthquakes.map((earthquake, i) => {
              return  (
                <Marker
                  key={i}
                  lat={earthquake.geometry.coordinates[1]}
                  lng={earthquake.geometry.coordinates[0]}
                  image={"../images/earthquake.png"}
                />
              )
          })

    return (
      // Important! Always set the container height explicitly
      <div className="map" style={{ height: '100vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: APIKEY }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
        {markerList}
        </GoogleMapReact>
      </div>
    );
  }
}

export default SimpleMap;
