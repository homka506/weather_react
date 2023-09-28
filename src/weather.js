import React, { useState } from "react";
import axios from "axios";

export default function Search() {
    const [city, setCity] = useState("");
    const [temperature, setTemperature] = useState(null);
    const [description, setDescription] = useState(null);
    const [humidity, setHumidity] = useState(null);
    const [wind, setWind] = useState(null);
    const [icon, setIcon] = useState(null);
    const [alt, setAlt] = useState(null);

    function handleResponse(response) {
        const currentTemperature = response.data.temperature.current;
        setTemperature(currentTemperature);
        const currentDescription = response.data.condition.description;
        setDescription(currentDescription);
        const currentHumidity = response.data.temperature.humidity;
        setHumidity(currentHumidity);
        const currentWind = response.data.wind.speed;
        setWind(currentWind);
        const currentIcon = response.data.condition.icon_url;
        setIcon(currentIcon);
        const currentAlt = response.data.condition.icon;
        setAlt(currentAlt);
    }

    async function handleSubmit(event) {
        event.preventDefault();

        const key = `2f02e3ctafa3oa9b5849c5a89408c6d7`;
        const url = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${key}`;
        const response = await axios.get(url);
        handleResponse(response);
    }

    function updateCity(event) {
        setCity(event.target.value);
    }

    return ( <div className = "Search" >
            <h1> Weather Search Engine </h1> 
            <form onSubmit = {handleSubmit} >
            <input type = "text" onChange = {updateCity}/>
            <input type = "submit" value = "Submit"/>
            </form> {
            temperature !== null && ( <div>
                <p> Temperature: {Math.round(temperature)}°C </p>
                <p> Description: {description} </p>
                <p> Humidity: {humidity} % </p> 
                <p> Wind: {Math.round(wind)}km/h </p> 
                <img src = {icon}alt = {alt}/>
            </div>
            )} </div>
);
}