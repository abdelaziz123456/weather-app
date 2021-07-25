
import './App.css';
import { Component } from 'react';
import Form from './components/Form';
import Weather from './components/Weather';

import 'bootstrap/dist/css/bootstrap.min.css'
const API_key='9b5f062a40e1f0b4a86bdf4ef6308ca5'

class App extends Component {

  state={
    temperature:'',
    city:'',
    country:'',
    humidity:'',
    description:'',
    error:''
  }
  
  getWeather=async (e)=>{
    e.preventDefault();
    const city=e.target.elements.city.value;
    const country=e.target.elements.country.value;
    const api=await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_key}`);
    const data=await api.json();
    if(city && country){
      this.setState({
        temperature:data.main.temp,
      city:data.name,
      country:data.sys.country,
      humidity:data.main.humidity,
      description:data.weather[0].description,
      error:''
      })

    }else{
      this.setState({
        error:'please enter city and country'
      })
    }
 // to make input empty after submit it
    e.target.elements.city.value='';
    e.target.elements.country.value='';
    
  }




  render(){

  
  return (
    <div className='wrapper'>
      <div className='form-container'>
      <Form getWeather={this.getWeather}/>
      <Weather
      temperature={this.state.temperature}
      city={this.state.city}
      country={this.state.country}
      humidity={this.state.humidity}
      description={this.state.description}
      error={this.state.error}
      />
    </div>
    </div>
  );
}
}

export default App;
