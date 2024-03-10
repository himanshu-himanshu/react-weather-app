import { useEffect, useState } from "react";
import { toast } from "react-toastify";

import SearchBar from "./components/layout/SearchBar";
import CurrentWeather from "./components/CurrentWeather";
import Footer from "./components/layout/Footer";
import getLocationkey from "./services/GetLocationKey";
import getWeather from "./services/GetWeather";
import FutureWeather from "./components/FutureWeather";
import Spinner from "./components/Spinner/Spinner";
import ErrorPage from "./components/layout/ErrorPage";

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
      try {
        const locationKey = await getLocationkey(city);
        setCity(locationKey.EnglishName);
        setLocation(locationKey);

        const weatherData = await getWeather(locationKey.Key, unit);
        setData(weatherData);
        setClassName(weatherData.IsDayTime ? "day" : "night");
      } catch (error) {
        toast.error("Weather data not found!", error);
      } finally {
        setLoading(false);
      }
    };
    const timer = setTimeout(() => {
      fetchWeatherData();
    }, 600);

    return () => clearTimeout(timer);
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

      {loading ? (
        <Spinner />
      ) : (
        <>
          {data && (
            <>
              <CurrentWeather weather={data} location={location} unit={unit} />
              <FutureWeather weather={data} />
              <Footer />
            </>
          )}
        </>
      )}
      {!data && !loading && <ErrorPage />}
    </div>
  );
}

export default App;
