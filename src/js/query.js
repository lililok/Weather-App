import { aggParse } from "./parse.js";
import { renderData } from "./render.js";

export async function getWeather(cityQuery) {
  try {
    const response = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=0058d81df506495b8f3143520240906&q=${cityQuery}&days=4`, { mode: "cors" });
    const data = await response.json();
    const parsed = await aggParse(data);
    renderData(parsed)
  } 
  catch (error) {
    console.error('Error 0_0');
    throw error;
  }
}
