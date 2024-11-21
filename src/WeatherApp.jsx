import SearchBox from "./SearchBox";
import InfoBox from "./infoBox";
import { useState } from 'react';

export default function WeatherApp() {
    let [weatherInfo, setWeatherInfo] = useState({});

    let updateInfo = (result) => {
        setWeatherInfo(result)
    }

    return (
        <>
            <SearchBox updateInfo={updateInfo}></SearchBox>
            {weatherInfo.name && <InfoBox info={weatherInfo}></InfoBox>}
        </>
    )
}