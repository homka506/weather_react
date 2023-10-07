import React from "react";
import WeatherIcon from "./weatherIcon";

export default function WeatherForecastDay(props){
    function maxTemperature(){
        let temperature = Math.round(props.data.temperature.maximum);
        return `${temperature}°`;
    }
        function minTemperature() {
            let temperature = Math.round(props.data.temperature.minimum);
            return `${temperature}°`;
        }
        function temperature() {
                  let temperature = Math.round(props.data.temperature.day);
                  return `${temperature}°C`;
              }
        function dayWeek (){
            let date = new Date(props.data.time * 1000);
            let dayWeek = date.getDay();
            let daysWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

            return daysWeek[dayWeek];
        }
        function month (){
            let date = new Date(props.data.time * 1000);
            let month = date.getMonth();
            let months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

            return months[month];
        }
        function  day (){
                let date = new Date(props.data.time * 1000);
                let day = date.getDate();
                 return day;

        }
    return (
                        <div className = "row d-flex justify-content-between align-items-center  pb-5 pb-md-0">
                            <div  className = "col-12 d-flex flex-column justify-content-between align-items-center" >
                                  <h4 className="text-center">
                                      <span className='details_day'>{dayWeek()}</span> 
                                      <br />
                                      <span className='details_date'>{day()}</span> 
                                     {" "}
                                      <span className='details_month'>{month()},</span>
                                  </h4>
                            </div>
                            <div className = "col-12 d-flex flex-column justify-content-between align-items-center">
                                  <WeatherIcon code = {props.data.condition.icon} size={85} />
                            </div>
                            <div className = "col-12 d-flex flex-column justify-content-between align-items-center">
                                  <span className = 'details_temp' > {temperature()}</span>
                                   <p className = "text-nowrap" >
                                    <span className = 'details_temp_min me-3' > Max: {maxTemperature()}</span>
                                    <span className = 'details_temp_max'>Min: {minTemperature()}</span>
                                  </p>
                            </div>
                            </div>

    )
}