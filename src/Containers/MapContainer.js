import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
//import {greatPlaceStyle} from './Style.js';
import earth from '../pics/earthquake.png'; 
//import shouldPureComponentUpdate from 'react-pure-render';

//AIzaSyBHLett8djBo62dDXj0EjCimF8Rd6E8cxg
//https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&callback=initMap

/*
const greatPlaceStyle = {
  position: 'absolute',
  transform: 'translate(-50%, -50%)';
}
*/

//const AnyReactComponent = ({ text }) => <div>{text}</div>;
const AnyReactComponent = ({ image }) => <img alt='earthquake icon' className='mapPin' src={earth} width="30px" height="30px" ></img>;


export default class MapContainer extends Component {


	static defaultProps = {
	    center: [ 30.2682, -97.74295 ], //austin
	    zoom: 2,
	    greatPlaceCoords: {lat: 18.1358, lng:  -68.5523}
	    
	  };

	//shouldComponentUpdate = shouldPureComponentUpdate;

	render() {
		const geo = this.props.geo.map((item, index) => {
             //console.log(item)
             //console.log(...this.props.greatPlaceCoords)
            return (
                
                   
                    //<p key={index}>{item.properties.title} </p>
                <AnyReactComponent 
	            	key={index}
	            	{...item}
	            	image={earth}
	          />
     
            )
        })


		return (
	      

	      <div style={{ height: '100vh', width: '95%' }}>
	        <GoogleMapReact
	          bootstrapURLKeys={{ key: 'AIzaSyBHLett8djBo62dDXj0EjCimF8Rd6E8cxg' }}
	          defaultCenter={this.props.center}
	          defaultZoom={this.props.zoom}
	          center={this.props.center}
	          onChildMouseEnter={this.onChildMouseEnter}
	          onChildMouseLeave={this.onChildMouseLeave}
	        >
	          

	          {geo}
	           	



	        </GoogleMapReact>
	      </div>
	     
		);
	}
}

/*
<div style={greatPlaceStyle}>
          {this.props.text}
       </div>
       */


/*
       <div lat={30.2682} lng={-97.74295} style={greatPlaceStyle}>
	           		<img src={earth} alt="Earth Quake" width="30px" height="30px" />	
    	  		</div>

				<div {...this.props.greatPlaceCoords} style={greatPlaceStyle}>
      				<img src={earth} alt="Earth Quake" width="30px" height="30px" />
    	 		</div>

    	 		*/