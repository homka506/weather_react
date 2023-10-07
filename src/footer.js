import React from "react";

export default function Footer(){
    return (
        <div className="text-center mt-5">
              This project was coded by{" "}
        <a href = "https://regal-pastelito-c6e659.netlify.app/" target = "_blank" rel = "noopener noreferrer">
           Polina Kalashnikova
          </a>{" "}
          
          and is{" "}
          <a
            href="https://github.com/homka506/weather_react"
            target="_blank"
            rel="noopener noreferrer" >
            open-sourced on GitHub
          </a>{" "}
          and{" "}
          <a
            href = "https://reliable-lolly-991d6f.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            hosted on Netlify
          </a>
        </div>
    )
}