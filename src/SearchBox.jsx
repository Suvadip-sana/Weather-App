import * as React from 'react';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import Error from './Error';
import "./SearchBox.css";
import { useState } from "react";


export default function SearchBox({ updateInfo }) {

    let [city, setCity] = useState("");
    let [err, setErr] = useState(false);

    let handleChange = (event) => {
        setCity(event.target.value)
    }

    let handelSubmit = async (event) => {
        try {
            setErr(false);
            event.preventDefault();
            // console.log(city);
            setCity("");
            let info = await getData();
            updateInfo(info);
        }
        catch (error) {
            setErr(true);
            updateInfo({})
        }

    }

    const API_KEY = "61efc05ba330715acf081c9329ac3ca4";
    const URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;

    let getData = async () => {
        try {
            setErr(false);
            let response = await fetch(URL).then(response => response.json());
            // console.log(response);
            let iconCode = response.weather[0].icon
            const icon = `http://openweathermap.org/img/wn/${iconCode}@2x.png`;
            let result = {
                name: response.name,
                temp: Math.round(response.main.temp),
                humidity: response.main.humidity,
                feelsLike: Math.round(response.main.feels_like),
                visibility: Math.round((response.visibility)/ 1000),
                maxTemp: Math.round(response.main.temp_max),
                minTemp: Math.round(response.main.temp_min),
                wind: Math.round(response.wind.speed),
                description: response.weather[0].main,
                countryCode: response.sys.country,
                icon: icon,                
            }
            // console.log(result);
            return result;
        }
        catch (error) {
            throw error;
        }

    }



    return (
        <>
            <div className='SearchBox'>
                <Paper component="form" onSubmit={handelSubmit} autoComplete="off" sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400 }}>
                    
                    <InputBase id="input-field" aria-describedby="component-error-text" sx={{ ml: 1, flex: 1 }} placeholder="Search City Name..." value={city} onChange={handleChange} required />
                    
                    <IconButton type="submit" sx={{ p: '10px' }}>
                        <SearchIcon />
                    </IconButton>

                </Paper>
                {err && <Error></Error>}
            </div>
        </>
    )
}