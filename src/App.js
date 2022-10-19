import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
      getLocationkey(city)
        .then((res) => {
          setLoading(true);
          setCity(res.EnglishName);
          setLocation(res);
        })
        .then(
          getWeather(location.Key, unit)
            .then((res) => {
              setData(res);
              setClassName(res.IsDayTime ? "day" : "night");
              setLoading(false);
            })
            .catch((err) => {
              notifyErrors("Not founded!");
              setLoading(false);
            })
        )
        .catch((err) => {
          notifyErrors("Not founded!");
          setLoading(false);
        });
    };
    setTimeout(() => {
      fetchWeatherData();
    }, 600);
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

  const notifyErrors = (msg) => toast.error(msg, { icon: "💣" });

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
      {!data && <ErrorPage />}
      <ToastContainer
        hideProgressBar={true}
        theme="colored"
        position="top-center"
        autoClose={1500}
        limit={1}
      />
    </div>
  );
}

export default App;
