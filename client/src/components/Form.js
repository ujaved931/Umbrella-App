import React, { Component } from 'react';



class Form extends Component {
    state = {
        country: '',
        city: '',
        zipcode: ''
    }


    render() {
        return (
            <div>
                <form onSubmit={this.submitHandler}>
                <label>Country:</label>
                <input
                value={this.state.country}
                type="text"
                name="country"
                onChange={this.inputChangeHandler}
                />
                <br/>
                <label>City:</label>
                <input
                value={this.state.city}
                type="text"
                name="city"
                onChange={this.inputChangeHandler}
                />
                <br/>
                <label>Zipcode:</label>
                <input
                value={this.state.zipcode}
                type="text"
                name="zipcode"
                onChange={this.inputChangeHandler}
                />
                <br/>
                <button type="submit">Get weather</button>
                </form>
            </div>
        )
    }
    submitHandler = e => {
        alert("check the weather")
        e.preventDefault();
        console.log(this.state.country)

    };
    inputChangeHandler = e => {
        const { name, value } = e.target;

        this.setState({ [name]: value })
    }
}


export default Form; 
