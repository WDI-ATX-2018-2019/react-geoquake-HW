import React from 'react';

const EarthQuakeList = (props) => {
	const earthquakeList = props.earthquakes.map((earthquake, index) => {
		return (
			<li key={index}>
				<p>Magnitude: {earthquake.properties.mag}</p>
				<p>Date: {new Date (earthquake.properties.time).toString()}</p>
				<p>Longitude: {earthquake.geometry.coordinates} </p>
				<p>Latitude: {earthquake.geometry.coordinates} </p>
				<p>Altitude: {earthquake.geometry.coordinates} </p>
			</li>
			)
	})
	return (
	<div>
		<ul>
			{earthquakeList}
		</ul>
	</div>
	)
}

export default EarthQuakeList