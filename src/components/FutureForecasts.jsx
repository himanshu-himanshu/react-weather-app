import React from "react";
import moment from "moment-timezone";

function FutureForecasts({ weather }) {
  return (
    <div className="flex flex-row justify-between w-full px-4 py-2">
      <div className="w-1/2">
        <p className="text-md">
          {moment.parseZone(weather.Date).format("MMMM, D")}
        </p>
      </div>
      <div className="flex flex-row justify-around w-1/2">
        <img
          src={require(`../assests/icons/${weather.Day.Icon}.png`)}
          alt="icon"
          className="w-12 md:w-12"
        />
        <p> &darr; {weather.Temperature.Minimum.Value.toFixed()}&#176;</p>
        <p> &uarr; {weather.Temperature.Maximum.Value.toFixed()}&#176;</p>
      </div>
    </div>
  );
}

export default FutureForecasts;
