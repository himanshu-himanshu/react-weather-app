import { useEffect, useState } from "react";

import SearchBar from "./components/layout/SearchBar";
import CurrentWeather from "./components/CurrentWeather";
import Footer from "./components/layout/Footer";
import getLocationkey from "./services/GetLocationKey";
import getWeather from "./services/GetWeather";
import FutureWeather from "./components/FutureWeather";
import Spinner from "./components/Spinner";

function App() {
  const [data, setData] = useState(null);
  const [city, setCity] = useState("brampton");
  const [location, setLocation] = useState(null);
  const [unit, setUnit] = useState("metric");
  const [className, setClassName] = useState("night");
  const [loading, setLoading] = useState("false");

  useEffect(() => {
    setLoading(true);
    const fetchWeatherData = async () => {
      const locationKey = await getLocationkey(city);
      setCity(locationKey.EnglishName);
      setLocation(locationKey);
      const weatherData = await getWeather(locationKey.Key, unit);
      setData(weatherData);
      setClassName(weatherData.IsDayTime ? "day" : "night");
      setLoading(false);
    };
    setTimeout(() => {
      fetchWeatherData();
    }, 800);
  }, [city, unit]);

  const handleInputSearch = (city) => {
    setCity(city);
  };

  const handleUnit = () => {
    unit === "metric" ? setUnit("imperial") : setUnit("metric");
  };

  /**
   * TODO: Enable using current location
   */

  return (
    <div className={className}>
      {/* Search Bar Component */}
      <SearchBar
        handleInputSearch={handleInputSearch}
        handleUnit={handleUnit}
        unit={unit}
      />

      {loading ? (
        <Spinner />
      ) : (
        <>
          {/* Current Weather Component */}
          <CurrentWeather weather={data} location={location} unit={unit} />

          {/* Future Weather Component */}
          <FutureWeather weather={data} />

          {/* Footer Component */}
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;
