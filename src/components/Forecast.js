import "./Forecast.css";
const Forecast = ({forecast}) => {

    return(
        <div className="forecast">
            <h2>5-days Weather ForeCast</h2>
            {forecast?.list?.map(day => (
                <div key={day.dt} className="forecast-list">
                    <p>{new Date(day.dt * 1000).toLocaleDateString()}</p>
            <p>Temp: {day.main.temp} °C</p>
            <img
              src={`http://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`}
              alt={day.weather[0].description}
            />
            <p>{day.weather[0].description}</p>
                </div>
            ))}
            
        </div>
    )
};
export default Forecast;