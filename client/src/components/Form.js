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
                <form onSubmit={}>
                <label>Country:</label>
                <input
                type="text"
                name="country"
                onChange={this.inputChangeHandler}
                />
                <br/>
                <label>City:</label>
                <input
                type="text"
                name="city"
                onChange={this.inputChangeHandler}
                />
                <br/>
                <label>Zipcode:</label>
                <input
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
        e.preventDefault();

    };
    inputChangeHandler = e => {
        const { name, value } = event.target;

        this.setState({ [name]: value })
    }
}


export default Form; 
