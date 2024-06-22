import SearchBox from './SearchBox'
import InfoBox from './InfoBox'
import { useState } from 'react'


export default function WeatherApp()
{ 

    const [weatherInfo,setWeatherInfo]=useState({
        city:"Pune",
    feelsLike: 24.54,
     humidity: 58,
     temp:24.52,
     tempMax:24.52,
     tempMin:24.52,
     weather:"broken clouds",
    });

    let updateInfo=(result)=>
    {
        setWeatherInfo(result);
    }
    return(
        <div>
        <h2>
            Weather Forecast
            </h2>

            <SearchBox updateInfo={updateInfo}></SearchBox>
            <InfoBox info={weatherInfo}></InfoBox>
        </div>
    )
}