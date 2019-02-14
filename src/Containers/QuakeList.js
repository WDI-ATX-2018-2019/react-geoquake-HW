import React, { Component } from 'react'

export default class QuakeList extends Component {

    render() {
        const quakeList = this.props.quakes.map((item, index) => {
            return (
                
                    <p key={index}>{item.properties.title} </p>
     
            )
        })
        return (
            <div id="info">

                    {quakeList}
       
            </div>
        )
    }




};