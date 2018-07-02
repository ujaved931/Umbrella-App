import React, { Component } from 'react';
import cors from 'cors';
import axios from 'axios';

class Result extends Component {
    state = {
        temperature: '',
        precipitationProb: '',
        cloudCover: '',
        humidity:''

    }
    componentDidMount(){
        axios     
        .get(`https://api.darksky.net/forecast/53cba99a3fc386a3ea436ff4e8379006/37.8267,-122.4233`)
           .then(response => {
             {}
           })
           .catch(err => {
             if something goes wrong, we handle any errors here
           });
    
    
    
        axios     
    .post(`https://api.darksky.net/forecast/53cba99a3fc386a3ea436ff4e8379006/37.8267,-122.4233`, {someData: this is typically form data})
       .then(response => {
         response is the response we get back from the server
         usually on a positive response, we either re-set the state in React OR we navigate to the next page etc.
       })
       .catch(err => {
         if something goes wrong, we handle any errors here
       });
           
    }


    render() {
        return (
            <div>
               
            </div>
        )
    }
    // submitHandler = e => {
    //     alert("check the weather")
    //     e.preventDefault();
    //     console.log(this.state.country)

    // };
    // inputChangeHandler = e => {
    //     const { name, value } = e.target;

    //     this.setState({ [name]: value })
    }



export default Result; 
