import React from "react";
import moment from "moment-timezone";
import FutureForecasts from "./FutureForecasts";

const CurrentWeather = ({ weather, unit, location }) => {
  const {
    WeatherIcon,
    WeatherText,
    RealFeelTemperature,
    RelativeHumidity,
    Maximum,
    Minimum,
    DailyForecasts,
    Temperature,
  } = weather;

  return (
    <div className="container max-w-2xl mx-auto flex flex-col space-y-6 p-2 items-center justify-center">
      <div className="bg-gray-400 text-gray-900 opacity-80 w-full rounded-md p-2 md:p-4 flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 shadow-2xl">
        <div>
          <h1 className="text-3xl md:text-4xl">
            {location.EnglishName}, {location.ID}
          </h1>
          <span className="text-sm mt-4">
            {moment.parseZone(DailyForecasts[0].Date).format("MMMM Do YYYY")}
          </span>
        </div>
        <div className="flex items-center space-x-6 p-2">
          <div className="flex flex-col items-center">
            <img
              src={require(`../assests/${WeatherIcon}.png`)}
              alt="icon"
              className="w-24 md:w-32"
            />
            <span className="capitalize">{WeatherText}</span>
          </div>
          <div>
            <h1 className="text-7xl md:text-8xl">
              {unit === "metric"
                ? Temperature.Metric.Value.toFixed()
                : Temperature.Imperial.Value.toFixed()}
              &#176;
              <span className="text-2xl">{unit === "metric" ? "C" : "F"}</span>
            </h1>
          </div>
        </div>
      </div>

      <div className=" bg-black text-gray-100 opacity-80 w-full rounded-md p-2 sm:p-4 md:p-6">
        <div className="flex space-x-2 sm:space-x-8 lg:space-x-18 justify-center text-sm sm:text-lg lg:text-xl p-2">
          <span className="detail-span">
            <p className="text-sm">Max &uarr;</p>
            <p className="text-lg sm:text-2xl">
              {Maximum.Value.toFixed()}&#176;
            </p>
          </span>
          <span className="detail-span">
            <p className="text-sm">Min &darr;</p>
            <p className="text-lg sm:text-2xl">
              {Minimum.Value.toFixed()}&#176;
            </p>
          </span>
          <span className="detail-span">
            <p className="text-sm">Humidity </p>
            <p className="text-lg sm:text-2xl">{RelativeHumidity} %</p>
          </span>
          <span className="detail-span">
            <p className="text-sm">Feels like </p>
            <p className="text-lg sm:text-2xl">
              {unit === "metric"
                ? RealFeelTemperature.Metric.Value.toFixed()
                : RealFeelTemperature.Imperial.Value.toFixed()}
              &#176;
            </p>
          </span>
        </div>
      </div>

      <div className="bg-black text-gray-100 opacity-70 w-full rounded-md p-4 md:p-6">
        <div className="flex space-x-4 md:space-x-12 lg:space-x-16 justify-around text-lg sm:text-xl py-2">
          {DailyForecasts.slice(1).map((forecast) => (
            <FutureForecasts weather={forecast} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CurrentWeather;
