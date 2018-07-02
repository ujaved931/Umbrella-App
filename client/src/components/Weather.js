import React, { Component } from 'react';




class Weather extends Component {
    render() {
        return (
            <div>
                <p>Temperature: {this.props.temperature}</p>
                <p>City: {this.props.city}</p>
                <p>Country: {this.props.country}</p>
                <p>Humidity: {this.props.humidity}</p>
                <p>Description: {this.props.description}</p>
            </div>
        )
    }
}


export default Weather;