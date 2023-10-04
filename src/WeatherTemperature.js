import React, { useState } from "react";

export default function WeatherTemperature(props){
    const [unit, setUnit] = useState('celsius');
    function showToFahrenheit(event){
        event.preventDefault();
        setUnit("fahrenheit");
    }
     function showToCelsius(event) {
        event.preventDefault();
        setUnit("celsius");
     }
    if (unit === "celsius"){
         return(
        <div className="col-12 col-md-6 d-flex flex-column justify-content-center align-items-center">
            <h2 className='text-center text-md-left'>{Math.round(props.celsius)}
            <br />
              <span>°C</span> |<a href="/" onClick={showToFahrenheit} className="text-decoration-none">°F</a> 
            </h2>
            <h4 className="text-center">Feels like:
            {Math.round(props.tempFeelsLike)}°C
            </h4>
        </div>
    );
    }else{
        let fahrenheit = (props.celsius * 9/5) + 32;
        let tempFeelsLikeFahrenheit = (props.tempFeelsLike * 9 / 5) + 32;
        return (
        <div className="col-12 col-md-6 d-flex flex-column justify-content-center align-items-center">
            <h2 className = 'text-center text-md-left' > { Math.round(fahrenheit)}
            <br />
                <a href="/" onClick={showToCelsius} className="text-decoration-none">°C</a> |  <span>°F</span>
            </h2>
            <h4 className="text-center">Feels like:
            {Math.round(tempFeelsLikeFahrenheit)}°F
            </h4>
        </div>
        )
    }
   
}