import React, { useState } from 'react'
import { TiWeatherCloudy } from "react-icons/ti";
import Style from '../css/Weather.module.css'

export default function Weather() {

  let [city, setcity] = useState("Bangalore");
  let [WeatherInfo, setWeatherInfo] = useState(null);

  let fetchApi = async () => {
    let apiKey = "0135c0a7a5199009d87f7fcf4cd208b9";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${apiKey}&units=metric`


    try {
      let data = await fetch(apiUrl);
      let finalData = await data.json()
      if (finalData.cod == 200) {
        setWeatherInfo(finalData)
        console.log(finalData)
      }
      else {
        console.log("please enter correct city name")
      }
    }
    catch (err) {
      console.log(err)
    }
  }

  return (
    <div>
      <section className={Style.Container}>
        <div className={Style.fields}>
          <input
            type="text"
            placeholder='Enter your city name'
            onChange={(e) =>
              setcity(e.target.value)
            }
          />
          <button onClick={fetchApi}>Get Wheather</button>
        </div>
        <div className={Style.img}>
          <img src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png" alt="" />
        </div>
        <div className={Style.text}>
          {WeatherInfo && (<>
            <h2>{WeatherInfo.name}</h2>
            <h1>{WeatherInfo.main.temp}°C</h1>
            <h2>Country: {WeatherInfo.sys.country}</h2>
            <h2>Weather Description:{WeatherInfo.weather[0].description}</h2></>)

          }
          <div className={Style.icons}>

          </div>
        </div>
      </section>
    </div>
  )
}

