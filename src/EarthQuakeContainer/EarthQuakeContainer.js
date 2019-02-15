import React, { Component } from 'react';
import EarthQuakeList from './EarthQuakeList'

export default class EarthQuakeContainer extends Component {
	state = {
		earthquakes: []
	}

	getEarthquakes = async () => {

		try {
		let earthquakes = await fetch('https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&starttime=2014-01-01&endtime=2014-01-02')
		let earthquakesJSON = await earthquakes.json()
		this.setState({
			earthquakes: earthquakesJSON.features
		})
		await this.props.getEarthquakeData(this.state.earthquakes)
	} 
	catch (error) {
      console.log(error, 'error in catch block')
      return error
    }
	}
	componentDidMount(){
		this.getEarthquakes().then(data =>{
			console.log('Component is done.')
		})
	}

	render(){
		if(this.state.earthquakes[0]===undefined){
			return (
				<h1>Loading....</h1>
		)}else {

		return(
			
				<div>
					
					<EarthQuakeList earthquakes = {this.state.earthquakes}/>
				</div>
			
			)}
	}
}
