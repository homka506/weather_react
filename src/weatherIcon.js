import React from "react";
import ReactAnimatedWeather from 'react-animated-weather';

export default function WeatherIcon(props) {
      const codeMapping = {
             "clear-sky-day": "CLEAR_DAY",
             "clear-sky-night": "CLEAR_NIGHT",
             "few-clouds-day": "PARTLY_CLOUDY_DAY",
             "few-clouds-night": "PARTLY_CLOUDY_NIGHT",
             "scattered-clouds-day": "PARTLY_CLOUDY_DAY",
             "scattered-clouds-night": "PARTLY_CLOUDY_NIGHT",
             "broken-clouds-day": "CLOUDY",
             "broken-clouds-night": "CLOUDY",
             "shower-rain-day": "RAIN",
             "shower-rain-night": "RAIN",
             "rain-day": "RAIN",
             "rain-night": "RAIN",
             "thunderstorm-day": "RAIN",
             "thunderstorm-night": "RAIN",
             "snow-day": "SNOW",
             "snow-night": "SNOW",
             "mist-day": "WIND",
             "mist-night": "WIND",
      };
    return (
          <div className = "col-12 col-md-6 d-flex flex-column justify-content-center align-items-center">
            <ReactAnimatedWeather 
          icon = {codeMapping[props.code]}
          color = "#292929"
          size={props.size}
          animate={true}/>
        <h5 className = "text-center fw-bolder text-capitalize">{props.description}</h5>
        </div>
        
    )
}