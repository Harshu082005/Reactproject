import TextFeild from '@mui/material/TextField';
import Button from "@mui/material/Button";
import "./SearchBox.css"
import { useState } from 'react';
export default function SearchBox({update}){
    let [city,setCity]=useState("");
    const API_URL="http://api.openweathermap.org/data/2.5/forecast"
    const API_KEY="dbfcf06e89ccad2e4e21da53a679cf3f"
    let getWeatherInfo=async()=>{
        let response=await fetch(`${API_URL}?q=${city}&appid=${API_KEY}`);
let jsonresponse=await response.json();
console.log(jsonresponse);
let jsonresponses = jsonresponse.list[0]; 
let result={
    city:city,
    temp:jsonresponses.main.temp,
    tempMIn:jsonresponses.main.temp_min,
    tempMax:jsonresponses.main.temp_max,
    humidity:jsonresponses.main.humidity,
    feelsLike:jsonresponses.main.feels_like,
    weather:jsonresponses.weather[0].description,
    
}
return result;

    }


let handleChange= (evt) => {
    setCity(evt.target.value);

};
let  handleSubmit= async(evt)=>{
    evt .preventDefault();
    console.log(city);
    
    let info=await getWeatherInfo();
     update(info);
     setCity("");
}

    return<div className="SearchBox">
        <h3>Search for the weather</h3>
        <form onSubmit={handleSubmit}>
<TextFeild id="outline-basic" label="CityName" variant="outlined"  required    value={city} onChange={handleChange}/>
<br></br>
<br></br>
<Button variant="contained" type="submit">Send</Button>

        </form>
    </div>
}