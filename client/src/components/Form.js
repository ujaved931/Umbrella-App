import React, { Component } from 'react';
import { Link } from 'react-router-dom'


class Form extends Component {
    state = {
        country: '',
        city: '',

        Weather: []
    }

    render() {
        return (
            <div>
                <form onSubmit={this.props.getWeather}>
                    <label>Country:</label>
                    <input
                        value={this.state.country}
                        type="text"
                        name="country"
                        onChange={this.inputChangeHandler}
                    />
                    <br />
                    <label>City:</label>
                    <input
                        value={this.state.city}
                        type="text"
                        name="city"
                        onChange={this.inputChangeHandler}
                    />
                    <br />
                    <label>Zipcode:</label>
                    <input
                        value={this.state.zipcode}
                        type="text"
                        name="zipcode"
                        onChange={this.inputChangeHandler}
                    />
                    <br />
                    <div>
                        <nav>
                            <Link to={'/result'}>
                                Get weather
                            </Link>
                        </nav>
                    </div>
                </form>
            </div>
        )
    }

    submitHandler = e => {
        const results = this.state.getWeather
        const newCity = {
            country: '',
            city: '',

        }
        results.push(newCity)
        this.props.getWeather(results)
        this.setState({
            country: '',
            city: '',

        })
    }

    inputChangeHandler = e => {
        const { name, value } = e.target;

        this.setState({ [name]: value })
    }
}


export default Form; 
