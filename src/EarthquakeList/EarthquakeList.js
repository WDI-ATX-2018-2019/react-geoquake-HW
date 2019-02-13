import React, { Component } from 'react'

const EarthquakeList = (props) => {
    console.log(props)
    const earthquakeList = props.earthquakes.map((earthquake, i) => {
        return <li key={i}>{earthquake.properties.place}</li>
    })

    return (
        <div>
          <h4>Earthquake List</h4>
          <ul>
            {earthquakeList}
          </ul>
        </div>
    )
}

export default EarthquakeList