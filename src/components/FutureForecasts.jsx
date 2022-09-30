import React from "react";
import moment from "moment-timezone";

function FutureForecasts({ weather }) {
  return (
    <div className="flex flex-col justify-center items-center space-y-2">
      <p className="text-sm">
        {moment.parseZone(weather.Date).format("D MMMM")}
      </p>
      <div className="flex flex-col w-full justify-center items-center text-lg">
        <img
          src={require(`../assests/${weather.Day.Icon}.png`)}
          alt="icon"
          className="w-12 md:w-12"
        />
        <div className="flex space-x-2">
          <p>{weather.Temperature.Minimum.Value.toFixed()}&#176;</p>
          <p>{weather.Temperature.Maximum.Value.toFixed()}&#176;</p>
        </div>
      </div>
    </div>
  );
}

export default FutureForecasts;
