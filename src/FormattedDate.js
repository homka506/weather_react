import React from "react";

export default function FormattedDate(props) {
    let daysWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    let months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    let currentDate = props.date.getDate();
    let month = months[props.date.getMonth()];
    let day = daysWeek[props.date.getDay()];
    let hours = props.date.getHours();
      if (hours < 10) {
          hours = `0${hours}`;
      }
    let minutes = props.date.getMinutes();
    if (minutes < 10) {
        minutes = `0${minutes}`;
    }

    return (
         <div>
            <h2 className="text-center"> {hours}: {minutes} </h2>
            <h3 className="text-center"> {day},</h3>
            <h3 className="text-center"> {currentDate} {month}</h3>
        </div>
    )
}