import React, { Component } from 'react'
import GoogleMapReact from 'google-map-react'
import APIKEY from './API'

const AnyReactComponent = ({ text }) => <div>{text}</div>;

class SimpleMap extends Component {
  constructor(props) {
    super(props)

    this.state = {

    }
  }

  render() {
    return (
      // Important! Always set the container height explicitly
      <div className="map" style={{ height: '100vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: APIKEY }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >

{/*        {const Marker = (props) => {
          console.log(props)

          const markerList = props.earthquakes.map((earthquake, i) => {
              let lat = earthquake.geometry.coordinates[0]
              let lng = earthquake.geometry.coordinates[1]
              let markerName = earthquake.features.title

              return  <Marker
                        key={i}
                        name={markerName}
                        position={{lat: {lat}, lng: {lng}}}
                      />
          })

          return (
              <div>
                <ul>
                  {markerList}
                </ul>
              </div>
          )
        }}*/}

        </GoogleMapReact>
      </div>
    );
  }
}

export default SimpleMap;
