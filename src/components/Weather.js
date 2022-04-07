import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { WeatherContainer, Temp, City } from './WeatherStyles';

const url =
  'https://api.openweathermap.org/data/2.5/weather?q=anaheim&units=imperial&appid=2e7f3d9666f24542d664c0432baf81b6';

const Weather = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    axios
      .get(url)
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  console.log(data);

  if (!data) return null;

  return (
    <WeatherContainer>
      <Temp>{data.main.temp.toFixed(0)}&#176;</Temp>
      <City>Anaheim, CA</City>
    </WeatherContainer>
  );
};

export default Weather;
