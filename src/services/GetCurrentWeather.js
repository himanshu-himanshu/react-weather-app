import axios from "axios";

const API_KEY = process.env.REACT_APP_API_KEY;

const BASE_URL = "http://dataservice.accuweather.com/";

const getCurrentWeather = async (locationKey, unit) => {
  const URL = `${BASE_URL}currentconditions/v1/${locationKey}?apikey=${API_KEY}&details=true`;

  const TODAY_URL = `${BASE_URL}forecasts/v1/daily/5day/${locationKey}?apikey=${API_KEY}&metric=${
    unit === "metric" ? true : false
  }`;

  let res = await axios.get(URL);

  const data = res.data;

  const {
    WeatherText,
    WeatherIcon,
    IsDayTime,
    Temperature,
    RealFeelTemperature,
    RelativeHumidity,
  } = data[0];

  let daily = await axios.get(TODAY_URL);

  const dailyData = daily.data;

  const { DailyForecasts } = dailyData;

  const {
    Temperature: { Minimum, Maximum },
    Day,
    Night,
    Date,
  } = DailyForecasts[0];

  return {
    DailyForecasts,
    WeatherIcon,
    WeatherText,
    IsDayTime,
    Temperature,
    RealFeelTemperature,
    RelativeHumidity,
    Maximum,
    Minimum,
    Day,
    Night,
    Date,
  };
};

export default getCurrentWeather;
