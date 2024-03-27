import React from "react";
import axios from "axios";
import { Audio } from 'react-loader-spinner'


export default function Weather(props) {
    function handleResponse(response){
        alert(`the weather in ${response.data.name} is ${response.data.main.temp}°C`)
    }
    let apiKey = "0f8bc384a7c31b717a18cfe38a95ae06";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?${props.city}&appid=${apiKey}&units=metric`;
    
    axios.get(apiUrl).then(handleResponse);
    return (
    <Audio
    height="80"
    width="80"
    radius="9"
    color="green"
    ariaLabel="loading"
    wrapperStyle
    wrapperClass
  />);
        
    }