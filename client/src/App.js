import React, { Component } from 'react';
// import axios from 'axios'
import { Route } from 'react-router'
import Form from './components/Form';
import Header from './components/Header';
import Weather from './components/Weather';

// import Result from './components/Result';
import './App.css';

const API_KEY = "14e1a6731b0a11f74764c3459d833e9b";


class App extends Component {
  constructor() {
    super();
      this.state = {
        getWeather: []
    }
  }
  // componentDidMount() {
  //   axios.get(`https://api.openweathermap.org/data/2.5/weather?q=Manchester,uk&appid=${API_KEY}&units=metric`)
  //     .then(response => {
  //       console.log(response)
  //       return response.json();
  //   })
  //     .then(data => {
  //       this.setState({ getWeather: data.results }) 
  //     })
  //     .catch(err => {
        
  //     })
  // } 
  // }
  getWeather = async (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    const api_call = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`);
    const data = await api_call.json();
    console.log(data);
  }

  render() {
    return (
      <div className="App">
      <Route exact path ='/' component={Header}/>
      <Route exact path ='/' component = {(props) => <Form {...props} getWeather = {this.getWeather} />}/>
      <Route exact path ='/result' component={Weather} />
      </div>
    );
  }
}

export default App;
