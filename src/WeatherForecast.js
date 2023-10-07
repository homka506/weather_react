import React, { useState, useEffect } from 'react';
import WeatherForecastDay from './WeatherForecastDay';
import axios from 'axios';

function WeatherForecast(props) {
  const [loaded, setLoaded] = useState(false);
  const [forecast, setForecast] = useState([]);

  useEffect(() => {
    let apiKey = "2e190051baofeb04db4bce4a3b4t041f";
    let longitude = props.coordinates.longitude;
    let latitude = props.coordinates.latitude;
    let apiUrl = `https://api.shecodes.io/weather/v1/forecast?lon=${longitude}&lat=${latitude}&key=${apiKey}`;

    axios.get(apiUrl).then(handleResponse);
  }, [props.coordinates]);

  function handleResponse(response) {
    setForecast(response.data.daily);
    setLoaded(true);
  }

  if (loaded) {
    return (
      <div className="details mt-5 rounded-5 p-3 p-md-5">
        <h2 className="mb-4 text-center text-md-left">6 Days Forecast:</h2>
        <div className="row d-flex justify-content-between align-items-center">
          {forecast.slice(0, 6).map((dailyForecast, index) => (
            <div className="col-6 col-md-2 d-flex flex-column justify-content-between align-items-center" key={index}>
              <WeatherForecastDay data={dailyForecast} />
            </div>
          ))}
        </div>
      </div>
    );
  } else {
    return null;
  }
}

export default WeatherForecast;
