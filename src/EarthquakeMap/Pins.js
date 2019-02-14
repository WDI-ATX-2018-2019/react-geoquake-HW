import React, { Component } from 'react'



const EarthquakePins = (props) => {
    console.log(props)
    const earthquakePins = props.earthquakes.map((earthquake, index) => {

	
        return <li key={index}> lat:{earthquake.geometry.coordinates[0]}</li>
    })
    return (
        
        <div id="info">
        <h4>Earthquake Coordinates</h4> 
         <ul>{earthquakePins}</ul>
         </div>
    )

}


export default EarthquakePins

