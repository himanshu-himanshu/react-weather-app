import React from "react";
import moment from "moment-timezone";

function TodayWeather({ location, forecast, icon, text, unit, temperature }) {
  return (
    <div className="bg-gray-400 text-gray-900 opacity-80 w-full rounded-md p-2 md:p-4 flex-center flex-col sm:flex-row space-y-4 sm:space-y-0 shadow-2xl">
      <div>
        <h1 className="text-3xl md:text-4xl">
          {location.EnglishName}, {location.ID}
        </h1>
        <span className="text-sm mt-4">
          {moment.parseZone(forecast[0].Date).format("MMMM Do YYYY")}
        </span>
      </div>
      <div className="flex items-center space-x-6 p-2">
        <div className="flex flex-col items-center">
          <img
            src={require(`../assests/icons/${icon}.png`)}
            alt="icon"
            className="w-24 md:w-32"
          />
          <span className="capitalize">{text}</span>
        </div>
        <div>
          <h1 className="text-7xl md:text-8xl">
            {unit === "metric"
              ? temperature.Metric.Value.toFixed()
              : temperature.Imperial.Value.toFixed()}
            &#176;
            <span className="text-2xl">{unit === "metric" ? "C" : "F"}</span>
          </h1>
        </div>
      </div>
    </div>
  );
}

export default TodayWeather;
