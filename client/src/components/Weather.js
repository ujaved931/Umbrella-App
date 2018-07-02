import React, { Component } from 'react';



class Weather extends Component {
    state = {
        temperature: '',
        windSpeed: '',
        humidity: '',
        rain: ''
    }
    render() {
    return (
        <h1> Umbrella App </h1>
    )
    }
}


export default Weather;