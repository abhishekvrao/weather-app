import { useState, useEffect } from "react";
import axios from "axios";

const useFecth = (endPoint, city) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (endPoint === null || city === "") return;
    const url = `https://api.openweathermap.org/data/2.5/${endPoint}`;
    const appId = "22cb85f52048a3fc540968d903015ed6";
    const params = {
      q: city,
      appid: appId,
    };
    const fecthWeather = async () => {
      setLoading(true);
      try {
        const response = await axios.get(url, { params });
        setData(response.data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fecthWeather();
  }, [endPoint, city]);

  return { data, loading, error };
};

export default useFecth;
