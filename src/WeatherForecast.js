import React, { useState, useEffect } from "react";
import WeatherForecastDay from "./WeatherForecastDay";
import "./WeatherForecast.css";
import axios from "axios";

export default function WeatherForecast(props) {
    let [loaded, setLoaded] = useState(false);
    let [forecast, setForecast] = useState(null);

   useEffect(() => {
    setLoaded(false);
   }, [props.coordinates]);
   


function handleResponse(response) {
          setForecast(response.data.daily);
          setLoaded(true);
      }
  if (loaded) {
    console.log(forecast);
    return (
      <div className="details mt-5 rounded-5 p-3 p-md-5">
        <h2 className="mb-4 text-center text-md-left">6 Days Forecast:</h2>
        <div className="row d-flex justify-content-between align-items-center">
          {forecast.map(function (dailyForecast, index) {
            if (index < 6) {
                return (
                    <div className="col-6 col-md-2 d-flex flex-column justify-content-between align-items-center" key={index}>
                        <WeatherForecastDay data={dailyForecast}/>
                    </div>
                );
            }
          })}
        </div>
      </div>
    );
  } else {
        let apiKey = "2e190051baofeb04db4bce4a3b4t041f";
        let longitude = props.coordinates.longitude;
        let latitude = props.coordinates.latitude;
        let apiUrl = `https://api.shecodes.io/weather/v1/forecast?lon=${longitude}&lat=${latitude}&key=${apiKey}`;

        axios.get(apiUrl).then(handleResponse);

    return null;
  }
}
