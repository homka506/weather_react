import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import WeatherInfo from './WeatherInfo'
import axios from 'axios';
import "./weather.css";
import Footer from './footer';

export default function Weather(props) {
    const [weatherData, setweatherData] = useState({ready:false});
    const defaultCity = "Lviv";  
    const [city, setCity] = useState(defaultCity);
    
    function handleResponse(response){
        console.log(response.data);
        setweatherData({
            ready:true,
            date: new Date (response.data.time * 1000),
            temperature: response.data.temperature.current,
            tempFeelsLike: response.data.temperature.feels_like,
            city: response.data.city, 
            description: response.data.condition.description,
            humidity: response.data.temperature.humidity,
            wind: response.data.wind.speed,
            pressure: response.data.temperature.pressure,
            degree: response.data.wind.degree,
            icon: response.data.condition.icon_url,
            iconAlt: response.data.condition.icon

        });
    }
 
    function handleSubmit (event){
        event.preventDefault();
        //search for a city
        search();
      
    }
    function handleCityChange (event){
        setCity(event.target.value);
    }
    function search() {
        const apiKey = "2e190051baofeb04db4bce4a3b4t041f";
        let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
        axios.get(apiUrl).then(handleResponse);
    }
    if (weatherData.ready){
  return ( 
    <div>
        <div className = "search mb-5">
            <div className="row">
        <div className='col-12'>
            <Form className = "search_form d-flex rounded-5" onSubmit = {handleSubmit}>
                    <Button className="rounded-start-pill" variant = "primary"  type="submit" value = "Submit"> <i className="bi bi-search" style={{ color: "#292929" }}></i> </Button >
                    <Form.Control className="rounded-end-pill form-control" type = "search" placeholder = "Enter city" autoFocus="on" onChange={handleCityChange}/>
            </Form>
        </div>  
            </div>
        </div>
        <WeatherInfo  data={weatherData}/>
        <Footer />
      {/*<div  className = "details mt-5 rounded-5 p-3 p-md-5" >
            <h2 className="mb-4 text-center text-md-left">5 Days Forecast:</h2>
            <div  className = "row d-flex justify-content-between align-items-center" >
                <div  className = "col-6 col-md-2 d-flex flex-column justify-content-between align-items-center" >
                    <h4>
                        <span className='details_day'>Friday,</span> 
                        <span className='details_date'>1</span> 
                        <span className='details_month'>Sep</span>
                    </h4>
                    <span className = 'details_icon'>icon</span>
                    <br />
                    <span className = 'details_temp'>27°C</span>
                </div>
                <div className = "col-6 col-md-2 d-flex flex-column justify-content-between align-items-center" >
                    <h4>
                        <span className='details_day'>Friday,</span> 
                        <span className='details_date'>1</span> 
                        <span className='details_month'>Sep</span>
                    </h4>
                    <span className = 'details_icon'>icon</span>
                    <br />
                    <span className = 'details_temp'>27°C</span>
                </div>
                <div className = "col-6 col-md-2 d-flex flex-column justify-content-between align-items-center" >
                    <h4>
                        <span className='details_day'>Friday,</span> 
                        <span className='details_date'>1</span> 
                        <span className='details_month'>Sep</span>
                    </h4>
                    <span className = 'details_icon'>icon</span>
                    <br />
                    <span className = 'details_temp'>27°C</span>
                </div>
                <div className = "col-6 col-md-2 d-flex flex-column justify-content-between align-items-center" >
                    <h4>
                        <span className='details_day'>Friday,</span> 
                        <span className='details_date'>1</span> 
                        <span className='details_month'>Sep</span>
                    </h4>
                    <span className = 'details_icon'>icon</span>
                    <br />
                    <span className = 'details_temp'>27°C</span>
                </div>
                <div className = "col-12 col-md-2 d-flex flex-column justify-content-between align-items-center" >
                    <h4>
                        <span className='details_day'>Friday,</span> 
                        <span className='details_date'>1</span> 
                        <span className='details_month'>Sep</span>
                    </h4>
                    <span className = 'details_icon'>icon</span>
                    <br />
                    <span className = 'details_temp'>27°C</span>
                </div>

            </div>
       </div>
       */}
    </div>
);
    }else{
        search();
        return "Loading...."
    }
  

}