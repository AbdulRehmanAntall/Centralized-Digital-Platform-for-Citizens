import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Dashboard() {
    const [latitude, setLatitude] = useState('');
    const [longitude, setLongitude] = useState('');
    const [cityname, setCityname] = useState('');
    const [temperature, setTemperature] = useState('');
    const [windSpeed, setWindSpeed] = useState('');
    const [humidity, setHumidity] = useState('');

    const navigate = useNavigate();

    useEffect(() => {
        const fetchData = async () => {
            if ('geolocation' in navigator) {
                navigator.geolocation.getCurrentPosition(success, error);
                console.log('Geolocation is available');
            } else {
                alert('Geolocation is not available');
            } 
        };

        const success = async (position) => {
            const lat = position.coords.latitude;
            const lon = position.coords.longitude;
            setLatitude(lat);
            setLongitude(lon);

            console.log(`Your latitude is ${lat} and your longitude is ${lon}`);

            // Get city name from Nominatim
            const cityUrl = `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lon}`;
            try {
                const cityResponse = await axios.get(cityUrl, {
                    headers: { 'User-Agent': 'YourAppName/1.0' }
                });

                const address = cityResponse.data.address;
                const city = address.city || address.town || address.village || address.hamlet || 'City not found';
                setCityname(city);
                console.log('City:', city);

                // Get weather data from Open-Meteo (current weather + hourly humidity)
                const weatherUrl = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true&hourly=relativehumidity_2m`;
                const weatherResponse = await axios.get(weatherUrl);

                // Current weather
                const currentWeather = weatherResponse.data.current_weather;
                setTemperature(`${currentWeather.temperature} °C`);
                setWindSpeed(`${currentWeather.windspeed} km/h`);

                // Hourly humidity data
                const hourly = weatherResponse.data.hourly;
                const timeIndex = hourly.time.indexOf(currentWeather.time);
                if (timeIndex !== -1) {
                    setHumidity(`${hourly.relativehumidity_2m[timeIndex]} %`);
                } else {
                    setHumidity('N/A');
                }

                console.log('Temperature:', currentWeather.temperature);
                console.log('Wind Speed:', currentWeather.windspeed);
                console.log('Humidity:', hourly.relativehumidity_2m[timeIndex]);

            } catch (err) {
                console.error('Error fetching data:', err);
                setCityname('Unable to fetch city');
                setTemperature('N/A');
                setWindSpeed('N/A');
                setHumidity('N/A');
            }
        };

        const error = () => {
            alert('Cannot detect your location');
        };

        fetchData();
    }, []);

    return (
        <div>
            <h1>React + NodeJS + MySQL Fullstack Project</h1>
            <p>Your Latitude: {latitude}</p>
            <p>Your Longitude: {longitude}</p>
            <p>Your City: {cityname}</p>
            <p>Temperature: {temperature}</p>
            <p>Wind Speed: {windSpeed}</p>
            <p>Humidity: {humidity}</p>
        </div>
    );
}

export default Dashboard;
