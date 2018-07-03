import React, { Component } from 'react';
import { Link } from 'react-router-dom'


class Form extends Component {
    state = {
        country: '',
        city: '',

        Weather: []
    }

    render() {
        console.log("form",this.props)
        return (
            <div>
                <form onSubmit={this.buttonHandler}>
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
                        <button type="submit">
                                Get weather
                        </button>
                    </div>
                </form>
            </div>
        )
    }

    buttonHandler = e => {
        e.preventDefault();
        const city = e.target.elements.city.value;
        const country = e.target.elements.country.value;
        this.props.getWeather(city, country);
        this.props.history.push('/result');
    }

    // submitHandler = e => {
    //     const results = this.state.getWeather
    //     const newCity = {
    //         country: '',
    //         city: '',

    //     }
    //     results.push(newCity)
    //     this.props.getWeather(results)
    //     this.setState({
    //         country: '',
    //         city: '',

    //     })
    // }

    inputChangeHandler = e => {
        const { name, value } = e.target;

        this.setState({ [name]: value })
    }
}


export default Form; 
