import { parseCurrent, parseLocation, parseForecast } from "./parse.js";

export async function getWeather(cityQuery) {
    fetch(`http://api.weatherapi.com/v1/forecast.json?key=0058d81df506495b8f3143520240906&q=${cityQuery}&days=4`, { mode: "cors" })
    .then(function(response) {
      return response.json();
    })
    .then(function(response) {
      parseCurrent(response.current);
      parseLocation(response.location);
      parseForecast(response.forecast.forecastday);
    });
  }
