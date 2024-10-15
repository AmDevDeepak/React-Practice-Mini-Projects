import { useState } from "react";
import Search from "./Search";
const WeatherApp = () => {
  const API_KEY = "be6da345a4805b31425254ed6b858bae";
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(null);

  const fetchData = async (param) => {
    try {
      setLoading(true);
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${param}&units=metric&appid=${API_KEY}`
      );
      const data = await response.json();
      setData(data);
      setSearch("");
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  const handleSearch = async () => {
    fetchData(search);
  };
  return (
    <div>
      <Search
        search={search}
        setSearch={setSearch}
        handleSearch={handleSearch}
      />
      <>
        {loading && <p>Please wait! Searching for {search}...</p>}
        {data && (
          <div>
            <h1>
              {data.name}, {data?.sys?.country}
            </h1>
            <p>Temperature: {data?.main?.temp}°C</p>
            <p>Humidity: {data?.main?.humidity}%</p>
            <p>Description: {data.weather[0].description}</p>
          </div>
        )}
      </>
    </div>
  );
};

export default WeatherApp;
