import { getWeather } from "./query.js";
import { aggParse } from "./parse.js";
import { renderData } from "./render.js";


export async function formSubmit() {
  const input = document.querySelector('input#city-query');
  const form = document.querySelector('form#city-query')

  const data = await getWeather('Miami')
  const parsed = aggParse(data);
  const parsedCelsius = parsed[0]
  const parsedFahrenheit = parsed[1]

  renderData(parsedCelsius, parsedFahrenheit)
  
  /*form.addEventListener('submit', async (event) => {
    event.preventDefault();
    const cityQuery = input.value;
  
    input.value = '';

    const data = await getWeather(cityQuery)
    const parsed = aggParse(data);
    const parsedCelsius = parsed[0]
    const parsedFahrenheit = parsed[1]

    renderData(parsedCelsius, parsedFahrenheit)
  });
  */
}

//  decomment later :P