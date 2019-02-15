import React from 'react'
import { List, Container } from 'semantic-ui-react'

const EarthquakeList = (props) => {
    console.log(props)

    const earthquakeList = props.earthquakes.map((earthquake, i) => {
    	let quakeDate = new Date(earthquake.properties.time)
    	let currentDate = Date.now()
    	let daysDifference = Math.floor((currentDate - quakeDate) / 86400000)

        return  <List.Item key={i}>
                    <List.Header>{i+1} {earthquake.properties.title}</List.Header>
                    {daysDifference} days ago
                </List.Item>
    })

    return (
        <Container id='info'>
          <List>
            {earthquakeList}
          </List>
        </Container>
    )
}

export default EarthquakeList