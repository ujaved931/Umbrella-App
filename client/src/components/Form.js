import React, { Component } from 'react';
import './Form.css'


class Form extends Component {
    state = {
        country: '',
        city: '',
    }

    render() {
        console.log("form",this.props)
        return (
            <div className="form">
                <form onSubmit={this.buttonHandler}>
                <div className='country'>
                
                <label className='font-color'>Country:</label>
                <input
                value={this.state.country}
                type="text"
                name="country"
                onChange={this.inputChangeHandler}
                placeholder={"Input Country..."}
                />
                <br />
                </div>
                <div className='city'>
                <label className='font-color'>City:</label>
                <input
                value={this.state.city}
                type="text"
                name="city"
                onChange={this.inputChangeHandler}
                placeholder={"Input City..."}
                />
                <br />
                </div>
                    <div>
                        <button type="submit" className="btn btn-light">
                                Do I need an umbrella?
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
