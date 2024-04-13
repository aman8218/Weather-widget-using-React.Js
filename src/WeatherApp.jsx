import SearchBox from './SearchBox';
import InfoBox from "./InfoBox.jsx"
import { useState } from 'react';

export default function WeatherApp()
{
    const [weatherInfo, setWeatherInfo]=useState(
        {
        city:"Moradabad",
        feelslike: 33,
        humidity:10,
        temp:35.75,
        tempMax:35.75,
        tempMin:35.75,
        weather:"broken clouds"
        }
    )

    let updateInfo=(newInfo)=>{
        setWeatherInfo(newInfo);
    }
    return(
        <div>
            <h2>Weather App Created by Aman</h2>
            <SearchBox updateInfo={updateInfo} />
            <InfoBox info={weatherInfo}/>
        </div>
    )
}