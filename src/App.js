import { useEffect, useState } from "react";

import SearchBar from "./components/layout/SearchBar";
import CurrentWeather from "./components/CurrentWeather";
import Footer from "./components/layout/Footer";
import getLocationkey from "./services/GetLocationKey";
import getCurrentWeather from "./services/GetCurrentWeather";
import FutureWeather from "./components/FutureWeather";

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

      {/* Current Weather Component */}
      {data && (
        <CurrentWeather weather={data} location={location} unit={unit} />
      )}

      {/* Future Weather Component */}
      {data && <FutureWeather weather={data} />}

      {/* Footer Component */}
      <Footer />
    </div>
  );
}

export default App;
