import React, { useEffect, useState } from "react";
import "./Weather.css";

let apiURL = "https://api.openweathermap.org/data/2.5/weather";
const apiKey = process.env.REACT_APP_WEATHER_API_KEY
let city = "London";

function Weather() {
    const [weather, setWeather] = useState(null);
    useEffect(() => {
        let api = `${apiURL}?q=${city}&appid=${apiKey}&units=metric`;
        fetch(api).then(response => response.json()).then(data => {
          setWeather(data);
        })
    }, []);

  return (    
    <div className="box">
      <h2 className="box-title">Weather</h2>
      <div className="temp-container">
        {weather && <img className="icon" src={`http://openweathermap.org/img/w/${weather.weather[0].icon}.png` } alt="wthr img" />}
        <div className="temp">
          <span className="degree">{weather && Math.round(weather.main.temp)}</span>
          <span className="degree">degrees</span> 
        </div>
      </div>
      {weather && <span className="city">{weather.name}</span>}
    </div>
  );
}

export default Weather;