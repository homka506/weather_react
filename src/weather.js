import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import FormattedDate from "./FormattedDate";
import axios from 'axios';
import "./weather.css";
import 'bootstrap-icons/font/bootstrap-icons.css';


export default function Search(props) {
    const [weatherData, setweatherData] = useState({ready:false});
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
    if (weatherData.ready){
  return ( 
    <div>
        <div className = "search mb-5">
            <div className="row">
        <div className='col-12'>
            <Form>
                <Form.Group className = "search_form d-flex rounded-5" >
                    <Button className="rounded-start-pill" variant = "primary" type = "submit" value = "Submit"> <i className="bi bi-search" style={{ color: "#292929" }}></i> </Button >
                    <Form.Control className="rounded-end-pill" type = "text" placeholder = "Enter city" autoFocus="on"/>
                </Form.Group>
            </Form>
        </div>  
            </div>
        </div>
        <div className = "main mb-5" >
            <div className = "row">
                <div className = "col-12 col-md-4 d-flex flex-column justify-content-center align-items-center rounded-5 main_main p-3 p-md-5 mb-5 mb-md-0" >
                <h1 className="city  mb-3">{weatherData.city}</h1>
                   <FormattedDate date={weatherData.date} />
                </div>
                <div className = "col-12 col-md-6 offset-md-2 d-flex flex-column justify-content-center align-items-center rounded-5  p-3 p-md-5 main_details" >
                <div className="row w-100">
                    <div className="col-12 col-md-4 d-flex flex-column justify-content-center align-items-center">
                          <h2 className='text-center text-md-left'>{Math.round(weatherData.temperature)}°C</h2>
                                <h4 className="text-center">Feels like:
                                    <br />
                                    <span>{Math.round(weatherData.tempFeelsLike)}°C</span>
                                </h4>
                    </div>
                    <div className = "col-4 col-md-4 d-flex flex-column justify-content-center align-items-center">
                                <img src={weatherData.icon} alt={weatherData.iconAlt}  style={{ width: "100%" }}/>
                                <h5 className = "fw-bolder text-capitalize">{weatherData.description}</h5>
                    </div>
                    <div className = "col-8 col-md-4 d-flex flex-column justify-content-between align-items-center" >
                        <div className = "row">
                            <div className = "col-12">
                                <div className="row">
                                    <div className = 'col-6 d-flex flex-column justify-content-start align-items-center' >
                                        <div className='text-center'>
                                            <p><i className="bi bi-water"  style={{ color: "#292929", fontSize: "2rem" }}></i></p>
                                            <p>
                                                {weatherData.humidity} %
                                            </p>
                                            <p className = "fw-bolder" >
                                                Humidity
                                            </p>
                                        </div>
                                    </div>
                                    <div className = 'col-6 d-flex flex-column justify-content-start align-items-center' >
                                        <div className = 'text-center' >
                                            <p><i className="bi bi-wind"  style={{ color: "#292929", fontSize: "2rem"  }}></i></p>
                                            <p>
                                                {weatherData.wind} km/h
                                            </p>
                                            <p className = "text-nowrap fw-bolder" >
                                               Wind speed
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className = 'col-6 d-flex flex-column justify-content-center align-items-center' >
                                        <div className = 'text-center' >
                                            <p><i className="bi bi-tornado"  style={{ color: "#292929", fontSize: "2rem"  }}></i></p>
                                            <p>
                                                {weatherData.pressure}hPa
                                            </p>
                                            <p className = 'fw-bolder' >
                                             Pressure
                                            </p>
                                        </div>
                                    </div>
                                    <div className = 'col-6 d-flex flex-column justify-content-center align-items-center' >
                                        <div className = 'text-center' >
                                            <p><i className="bi bi-moisture"  style={{ color: "#292929", fontSize: "2rem"  }}></i></p>
                                            <p>
                                                {weatherData.degree}
                                            </p>
                                            <p className = 'fw-bolder' >
                                            Degree
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                         </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
        <div  className = "details mt-5 rounded-5 p-3 p-md-5" >
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
    </div>
);
    }else{
   const apiKey = "2e190051baofeb04db4bce4a3b4t041f";
   let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${props.defaultCity}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  return "Loading...."
    }
  

}