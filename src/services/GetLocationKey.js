import axios from "axios";

const API_KEY = process.env.REACT_APP_API_KEY_2;

const getLocationKey = async (city) => {
  let locationUrl = `https://dataservice.accuweather.com/locations/v1/cities/search?apikey=${API_KEY}&q=${city}`;
  let location = await axios.get(locationUrl);

  const loc = location.data;

  const {
    Key,
    Country: { ID },
    EnglishName,
  } = loc[0];

  return {
    Key,
    ID,
    EnglishName,
  };
};

export default getLocationKey;
