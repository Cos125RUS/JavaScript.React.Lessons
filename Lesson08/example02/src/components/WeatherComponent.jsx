import {useEffect, useState} from "react";
import axios from "axios";

const TOKEN = '848aec971d7dab534b5421fb149091b2';
const WeatherComponent = () => {
    const defaultCity = 'Vladivostok';
    const [weatherData, setWeatherData] = useState(null);
    const [city, setCity] = useState(defaultCity);
    const [error, setError] = useState(null);

    const handleCityChange = (event) => {
        setCity(event.target.value);
    };

    const getWeather = () => {
        if (!city) return;

        const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${TOKEN}`;

        axios.get(apiUrl)
            .then(response => {
                setWeatherData(response.data);
                setError(null);
            })
            .catch(error => {
                setError("Not found");
                setWeatherData(null);
            });
    };

    useEffect(() => {
        getWeather();
    }, []);

    return (
        <div className='weather-container'>
            <input type="text" placeholder='enter city' onChange={handleCityChange} value={city}/>
            <button onClick={getWeather}>Find</button>

            {error && <div className='error'>{error}</div> }
            {weatherData && (
                <div className='weather-info'>
                    <h3>{weatherData.name}</h3>
                    <p>Temperature: {Math.round(weatherData.main.temp - 273.15)} C</p>
                    <p>Humidity: {weatherData.main.humidity} %</p>
                    <p>Pressure: {weatherData.main.pressure} hPa</p>
                    <p>Wind Speed: {weatherData.wind.speed} m/s</p>
                    <p>Description: {weatherData.weather[0].description}</p>
                </div>
            )}
        </div>
    );
};

export default WeatherComponent;