import { useEffect, useState } from "react";

import "./App.css";
import SearchBar from "./components/SearchBar";
import CurrentWeather from "./components/CurrentWeather";
import Footer from "./components/Footer";

import getLocationkey from "./services/GetLocationKey";
import getCurrentWeather from "./services/GetCurrentWeather";

function App() {
  const [data, setData] = useState(null);
  const [city, setCity] = useState("brampton");
  const [location, setLocation] = useState(null);
  const [unit, setUnit] = useState("metric");
  const [className, setClassName] = useState("night");

  useEffect(() => {
    const fetchWeatherData = async () => {
      const locationKey = await getLocationkey(city);
      setCity(locationKey.EnglishName);
      setLocation(locationKey);
      const weatherData = await getCurrentWeather(locationKey.Key, unit);
      setData(weatherData);
      setClassName(weatherData.IsDayTime ? "day" : "night");
    };
    fetchWeatherData();
  }, [city, unit]);

  const handleInputSearch = (city) => {
    setCity(city);
  };

  const handleUnit = () => {
    unit === "metric" ? setUnit("imperial") : setUnit("metric");
  };

  return (
    <div className={className}>
      {/* Search Bar Component */}
      <SearchBar
        handleInputSearch={handleInputSearch}
        handleUnit={handleUnit}
        unit={unit}
      />

      {/* Weather Component */}
      {data && (
        <CurrentWeather weather={data} location={location} unit={unit} />
      )}

      {/* Footer Component */}
      <Footer />
    </div>
  );
}

export default App;
