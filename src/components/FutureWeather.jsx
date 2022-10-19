import React from "react";
import FutureWeatherInfo from "./FutureWeatherInfo";

function FutureWeather({ weather }) {
  const { DailyForecasts } = weather;

  return (
    <div className="outer-div font-Raleway">
      <h1 className="bg-gray-100/70 p-4 text-2xl md:text-4xl text-gray-700">
        Future Forecasts
      </h1>
      <div className="bg-black text-gray-100 opacity-80 w-full rounded-md sm:p-2 lg:p-4">
        <div className="flex flex-col space-y-4 text-lg sm:text-xl py-2">
          {DailyForecasts.slice(1).map((forecast) => (
            <FutureWeatherInfo weather={forecast} key={forecast.Date} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default FutureWeather;
