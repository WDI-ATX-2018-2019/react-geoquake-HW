import React from 'react'

const EarthquakeList = (props) => {
    console.log(props)

    const earthquakeList = props.earthquakes.map((earthquake, i) => {
    	let quakeDate = new Date(earthquake.properties.time)
    	let currentDate = Date.now()
    	let daysDifference = Math.floor((currentDate - quakeDate) / 86400000)

        return <li key={i}>{earthquake.properties.title} -- {daysDifference} days ago</li>
    })

    return (
        <div id='info'>
          <ul>
            {earthquakeList}
          </ul>
        </div>
    )
}

export default EarthquakeList