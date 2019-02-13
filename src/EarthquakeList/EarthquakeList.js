import React, { Component } from 'react'

const EarthquakeList = (props) => {
    console.log(props)
    const earthquakeList = props.earthquakes.map((earthquake, index) => {

        return <li key={index}>{earthquake.properties.place}</li>
    })
    return (
        <div className="list">
         
         <ul>{earthquakeList}</ul>
         </div>
    )

}


export default EarthquakeList