import React from "react";
import moment from "moment-timezone";

function FutureForecasts({ weather }) {
  const { Maximum, Minimum } = weather.Temperature;
  return (
    <div className="flex flex-row justify-between items-center w-full px-2 sm:px-4 py-6 border border-gray-600 text-gray-100 rounded">
      <div className="w-1/3 md:w-1/2">
        <p className="text-sm sm:text-md md:text-lg">
          {moment.parseZone(weather.Date).format("MMMM, D")}
        </p>
      </div>
      <div className="flex flex-row justify-around w-2/3 md:w-1/2 text-sm sm:text-md md:text-lg items-center">
        <img
          src={require(`../assests/icons/${weather.Day.Icon}.png`)}
          alt="icon"
          className="w-12 md:w-12"
        />
        <p> &uarr; {Maximum.Value.toFixed()}&#176;</p>
        <p> &darr; {Minimum.Value.toFixed()}&#176;</p>
      </div>
    </div>
  );
}

export default FutureForecasts;
