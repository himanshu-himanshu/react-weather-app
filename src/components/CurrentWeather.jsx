import React from "react";
import CurrentWeatherCity from "./CurrentWeatherCity";
import CurrentWeatherInfo from "./CurrentWeatherInfo";

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
    <div className="outer-div">
      {/** Today Weather Component */}
      <CurrentWeatherCity
        location={location}
        forecast={DailyForecasts}
        icon={WeatherIcon}
        text={WeatherText}
        unit={unit}
        temperature={Temperature}
      />

      {/** Today Weather Information */}
      <CurrentWeatherInfo
        maximum={Maximum}
        minimum={Minimum}
        relativeHumidity={RelativeHumidity}
        realFeelTemperature={RealFeelTemperature}
        unit={unit}
      />
    </div>
  );
};

export default CurrentWeather;
