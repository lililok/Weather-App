import { getWeather } from "./query.js";
import { aggParse } from "./parse.js";
import { renderData } from "./render.js";


export function formSubmit() {
  const input = document.querySelector('input#city-query');
  const form = document.querySelector('form#city-query')
  
  form.addEventListener('submit', async (event) => {
    event.preventDefault();
    const cityQuery = input.value;
  
    input.value = '';

    getWeather(cityQuery)
  });
  
}