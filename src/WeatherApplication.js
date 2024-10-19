import { useState } from "react";
import SearchWeather from "./components/SearchWeather";
import useFecth from "./helpers/useFetch";
import "./App.css";
import CurrentWeather from "./components/CurrentWeather";
import Forecast from "./components/Forecast";

const WeatherApplication = () => {
  const [query, setQuey] = useState("");
  const [city, setCity] = useState("");

  const weatherEndpoint = city ? "weather" : null;
  const forcastEnpoint = city ? "forecast" : null;

  const {
    data: weather,
    loading: weatherLoading,
    error: weatherError,
  } = useFecth(weatherEndpoint, city);
  const {
    data: forecast,
    loading: forcastLoading,
    error: forecastError,
  } = useFecth(forcastEnpoint, city);

  const handleSearchWeather = () => {
    setCity(query);
  };

  return (
    <div className="App">
      <SearchWeather
        setQuey={setQuey}
        handleSearchWeather={handleSearchWeather}
      />

      {weatherLoading || forcastLoading ? (
        <p>Loading</p>
      ) : (
        <>
          {weather && <CurrentWeather weather={weather} />}
          {forecast && <Forecast forecast={forecast} />}
        </>
      )}
    </div>
  );
};

export default WeatherApplication;
