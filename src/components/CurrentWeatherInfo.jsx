import React from "react";
import InfoBlock from "./InfoBlock";

function TodayWeatherInfo({
  maximum,
  minimum,
  realFeelTemperature,
  relativeHumidity,
  unit,
}) {
  return (
    <div className=" bg-black text-gray-100 opacity-80 w-full rounded-md p-2 sm:p-4 md:p-6">
      <div className="flex space-x-2 sm:space-x-8 lg:space-x-18 justify-center text-sm sm:text-lg lg:text-xl p-2">
        <InfoBlock title={"Max"} value={maximum.Value.toFixed() + "\u00b0"} />
        <InfoBlock title={"Min"} value={minimum.Value.toFixed() + "\u00b0"} />
        <InfoBlock title={"Humidity"} value={relativeHumidity + " %"} />
        <InfoBlock
          title={"Feels like"}
          value={
            unit === "metric"
              ? realFeelTemperature.Metric.Value.toFixed() + "\u00b0"
              : realFeelTemperature.Imperial.Value.toFixed() + "\u00b0"
          }
        />
      </div>
    </div>
  );
}

export default TodayWeatherInfo;
