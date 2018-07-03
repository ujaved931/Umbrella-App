import React, { Component } from 'react';


class Weather extends Component {
    render() {
        console.log('props', this.props)
        return (
            <div>
                <p>Temperature: {this.props.temperature}</p>
                <p>Location: {this.props.city}, {this.props.country}</p>
                <p>Humidity: {this.props.humidity}</p>
                <p>Description: {this.props.description}</p>
                { this.props.description === "light rain" && <h3>You need an umbrella</h3>}
                { this.props.description === "rain" && <h3>You need an umbrella</h3>}
                { this.props.description === "thunderstorm" && <h3>You need an umbrella</h3>}
                { this.props.description === "drizzle" && <h3>You need an umbrella</h3>}
                { this.props.description === "sunny" && <h3>You need an umbrella</h3>}
            </div>
        )
    }
}


export default Weather;