const CurrentWeather = ({weather}) => {
    const iconUrl = `http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`;
    return(
        <div>
            <h2>Current Weather</h2>
            <h2>{weather.name}</h2>
            <p>Weather: {weather.weather[0].main}</p>
            <p>Description: {weather.weather[0].description}</p>
            <img src={iconUrl} alt={weather.weather[0].description} />
            <p>Temperature: {weather.main.temp} °C</p>
            <p>Feels Like: {weather.main.feels_like} °C</p>
            <p>Wind Speed: {weather.wind.speed} m/s</p>
        </div>
    )
};

export default CurrentWeather;