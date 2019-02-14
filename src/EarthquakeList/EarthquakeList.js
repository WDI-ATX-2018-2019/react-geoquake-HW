import React, { Component } from 'react'



const EarthquakeList = (props) => {
    console.log(props)
    const earthquakeList = props.earthquakes.map((earthquake, index) => {
	const quakeDate = new Date(earthquake.properties.time).toString()
	
        return <li key={index}> {earthquake.properties.title} // {quakeDate}</li>
    })
    return (
        
        <div id="info">
        <h4>Earthquake List</h4> 
         <ul>{earthquakeList}</ul>
         </div>
    )

}


export default EarthquakeList

