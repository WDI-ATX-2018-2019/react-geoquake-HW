import React, { Component } from 'react';
import QuakeList from './QuakeList';

export default class QuakeContainer extends Component {
	constructor(props) {
		super(props)

		this.state = {
			quakes: []
		}
	}

	getQuakes = async () => {
		try {
			let array=[];
			let obj = {};

			const options = {
	  			method: 'get',
	  			headers: {
	    			'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
	  			},	  			
	  			
			}	
			let url = 'https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/significant_month.geojson'
			let req = new Request(url,options);	
			const response = await (fetch(req));
			const data = await response.json();
			//console.log(data);
			
			this.setState({quakes: data.features});
			//console.log(data.features[0].geometry.coordinates)
			//console.log(...data.features[0].geometry.coordinates)
			//greatPlaceCoords: {lat: 31.2682, lng: -96.74295}

			data.features.map((item,index) => {
				//console.log(item.geometry.coordinates)
				obj = {
					lat: item.geometry.coordinates[1],
					lng: item.geometry.coordinates[0]
				}
				return array.push(obj)
				}
			);



			this.props.placeCoords(array)

			

		} catch(err) {
			console.log("Error found", err.name, err.message)

		}

	}

	componentDidMount(){
	  this.getQuakes()
	} 

	render() {
		return (
			<div>
				<QuakeList quakes={this.state.quakes} />
			</div>	
		)	

		
	}

}