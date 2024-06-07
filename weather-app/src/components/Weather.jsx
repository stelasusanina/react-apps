import React from "react";
import Searchbar from "./Searchbar";

export default function Weather() {
  const [search, setSearch] = React.useState("");
  const [weatherData, setWeatherData] = React.useState(null);
  const [error, setError] = React.useState(null);

  async function fetchWeatherData(city) {
    try {
      setError(null);
      setWeatherData(null);

      const apiKey = "Your API key form openweathermap.org";
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`
      );

      if (!response.ok) {
        if (response.status === 404) {
          throw new Error("City not found! Please enter a valid city.");
        } else {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
      }

      const data = await response.json();
      setWeatherData(data);
      setSearch("");
      setError(null);
    } catch (e) {
      console.log(e);
      setError(e.message);
    }
  }

  function handleSearch() {
    fetchWeatherData(search);
  }

  return (
    <div>
      <Searchbar
        search={search}
        setSearch={setSearch}
        handleSearch={handleSearch}
      />
      {error && <p>{error}</p>}
      {weatherData ? (
        <div className="weather-data">
          <h3>
            {weatherData.name}, {weatherData.sys.country}
          </h3>
          <h5>
            {(() => {
              const date = new Date();
              const day = date.getDate();
              const month = date.getMonth() + 1;
              const year = date.getFullYear();
              return `${day}/${month}/${year}`;
            })()}
          </h5>
          <img
            className="weather-icon"
            src={`http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`}
            alt="weather-icon"
          />
          <div className="temp">
            <p>Temperature: {(weatherData.main.temp - 273.15).toFixed(1)} °C</p>
            <p>
              Feels like: {(weatherData.main.feels_like - 273.15).toFixed(1)} °C
            </p>
          </div>
          <p>Weather: {weatherData.weather[0].description}</p>
          <p>Wind: {weatherData.wind.speed} m/s</p>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}
