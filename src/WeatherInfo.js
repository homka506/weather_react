import React from "react";
import FormattedDate from "./FormattedDate";
export default function Weatherinfo (props){
return (
            <div className = "main mb-5" >
            <div className = "row">
                <div className = "col-12 col-md-4 d-flex flex-column justify-content-center align-items-center rounded-5 main_main p-3 p-md-5 mb-5 mb-md-0" >
                <h1 className="city  mb-3">{props.data.city}</h1>
                   <FormattedDate date={props.data.date} />
                </div>
                <div className = "col-12 col-md-6 offset-md-2 d-flex flex-column justify-content-center align-items-center rounded-5  p-3 p-md-5 main_details" >
                <div className="row w-100">
                    <div className="col-12 col-md-4 d-flex flex-column justify-content-center align-items-center">
                          <h2 className='text-center text-md-left'>{Math.round(props.data.temperature)}°C</h2>
                                <h4 className="text-center">Feels like:
                                    <br />
                                    <span>{Math.round(props.data.tempFeelsLike)}°C</span>
                                </h4>
                    </div>
                    <div className = "col-4 col-md-4 d-flex flex-column justify-content-center align-items-center">
                                <img src={props.data.icon} alt={props.data.iconAlt}  style={{ width: "100%" }}/>
                                <h5 className = "text-center fw-bolder text-capitalize">{props.data.description}</h5>
                    </div>
                    <div className = "col-8 col-md-4 d-flex flex-column justify-content-between align-items-center" >
                        <div className = "row">
                            <div className = "col-12">
                                <div className="row">
                                    <div className = 'col-6 d-flex flex-column justify-content-start align-items-center' >
                                        <div className='text-center'>
                                            <p><i className="bi bi-water"  style={{ color: "#292929", fontSize: "2rem" }}></i></p>
                                            <p>
                                                {props.data.humidity} %
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
                                                {props.data.wind} km/h
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
                                                {props.data.pressure}hPa
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
                </div>
            </div>
        </div>
        </div>
)
};