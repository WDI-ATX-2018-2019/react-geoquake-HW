import React from 'react'
import { Responsive, List, Container } from 'semantic-ui-react'

const EarthquakeList = (props) => {
    console.log(props)

    const earthquakeList = props.earthquakes.map((earthquake, i) => {
    	let quakeDate = new Date(earthquake.properties.time)
    	let currentDate = Date.now()
    	let daysDifference = Math.floor((currentDate - quakeDate) / 86400000)

        return  <List.Item key={i}>
                    <List.Header>{earthquake.properties.title}</List.Header>
                    {daysDifference} days ago
                </List.Item>
    })

    return (
        <Container fluid id='info'>
          <List ordered>
            {earthquakeList}
          </List>
        </Container>
    )
}

export default EarthquakeList