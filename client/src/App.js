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
  constructor(props) {
    super(props);
      this.state = {
        getWeather: [],
        temperature: undefined,
        city: undefined,
        country: undefined,
        humidity: undefined,
        description: undefined
    }
  }
  componentDidMount() {
  console.log(this.state)
  }
  
    
  getWeather = async (e) => {
    console.log(this.state);    
    e.preventDefault();
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    const api_call = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`);
    const data = await api_call.json();
    console.log(data);
    this.setState({
      temperature: data.main.temp,
      city: data.name,
      country: data.sys.country,
      humidity: data.main.humidity,
      description: data.weather[0].description,
    })
    console.log(this.state);        
  }

  render() {
    return (
      <div className="App">
      <Route exact path ='/' component={Header}/>
      <Route exact path ='/' component = {(props) => <Form {...props} getWeather = {this.getWeather} />}/>
      <Route exact path ='/result' component = {(props) => <Weather {...props} 
      temperature={this.state.temperature} 
      city={this.state.city} 
      country={this.state.country} 
      humidity={this.state.humidity} 
      description={this.state.description}  
      />}/>
      </div>
    );
  }
}

export default App;
