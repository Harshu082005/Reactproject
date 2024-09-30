import SearchBox from "./SearchBox"
import InfoBox from "./infoBox"
import React, { useState } from 'react';

export default function WeatherInfos(){
    let [weather,setWeather]=useState({
        
            city:"kadapa",
            temp:24.48,
            tempMIn:25.05,
            tempMax:25.05,
            humidity:25.05,
            feelsLike:47,
            weather:"haze",
            
           
    })
    let updateInfo=(result)=>{
        setWeather(result);
    }
    return(
        <>
        <div >
        <h1>WeatherInfo</h1>
        <SearchBox update={updateInfo}/>
        <InfoBox  info={weather}/>
        </div>
        </>
    
    );
}