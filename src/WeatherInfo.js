import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./weatherIcon";
import WeatherTemperature from "./WeatherTemperature"

export default function Weatherinfo (props){
return (
            <div className = "main mb-5" >
            <div className = "row  p-3" >
                <div className = "col-12 col-md-4 d-flex flex-column justify-content-center align-items-center rounded-5 main_main p-3 p-md-5 mb-5 mb-md-0" >
                <h1 className="city  mb-3 text-center">{props.data.city}</h1>
                   <FormattedDate date={props.data.date} />
                </div>
                <div className = "col-12 col-md-6 offset-md-2 d-flex flex-column justify-content-center align-items-center rounded-5  p-3 p-md-5 main_details" >
                <div className="row w-100">
                     <WeatherTemperature celsius = {props.data.temperature} tempFeelsLike ={props.data.tempFeelsLike} />
                    <WeatherIcon code={props.data.iconAlt} description={props.data.description}  size={150}/>
                </div>
                <div className="row w-100">
                                    <div className = 'col-6 col-md-3 d-flex flex-column justify-content-center align-items-center' >
                                        <div className='text-center'>
                                            <p><i className="bi bi-water"  style={{ color: "#292929", fontSize: "2rem" }}></i></p>
                                            <p>
                                                {props.data.humidity} %
                                            </p>
                                            <p className ="fw-bolder">
                                                Humidity
                                            </p>
                                        </div>
                                    </div>
                                    <div  className = 'col-6 col-md-3 d-flex flex-column justify-content-center align-items-center' >
                                        <div className = 'text-center' >
                                            <p><i className="bi bi-wind"  style={{ color: "#292929", fontSize: "2rem"  }}></i></p>
                                            <p>
                                                {props.data.wind} km/h
                                            </p>
                                            <p className = "text-nowrap fw-bolder" >
                                               Wind speed
                                            </p>
                                        </div>
                                    </div>
                                    <div className = 'col-6 col-md-3 d-flex flex-column justify-content-center align-items-center' >
                                        <div className = 'text-center' >
                                            <p><i className="bi bi-tornado"  style={{ color: "#292929", fontSize: "2rem"  }}></i></p>
                                            <p>
                                                {props.data.pressure}hPa
                                            </p>
                                            <p className = 'fw-bolder' >
                                             Pressure
                                            </p>
                                        </div>
                                    </div>
                                    <div className = 'col-6 col-md-3 d-flex flex-column justify-content-center align-items-center' >
                                        <div className = 'text-center' >
                                            <p><i className="bi bi-moisture"  style={{ color: "#292929", fontSize: "2rem"  }}></i></p>
                                            <p>
                                                {props.data.degree}
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
)
};