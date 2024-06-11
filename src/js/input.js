import { getWeather } from "./query.js";
import { aggParse } from "./parse.js";
import { renderData } from "./render.js";

export function formSubmit() {
  const input = document.querySelector('input#city-query');
  const form = document.querySelector('form#city-query')
  
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const cityQuery = input.value;
  
    input.value = '';

    getWeather(cityQuery)
  });
}

export function buttonListener(parsedCelsius, parsedFahrenheit) {
  const buttonCelsius = document.querySelector('.celsius');
  const buttonFahrenheit = document.querySelector('.fahrenheit');

  function handleCelsiusClick() {
    renderData(parsedCelsius);
    console.log(parsedCelsius)
  }

  function handleFahrenheitClick() {
    renderData(parsedFahrenheit);
    console.log(parsedFahrenheit)
  }

  buttonCelsius.removeEventListener("click", handleCelsiusClick);
  buttonFahrenheit.removeEventListener("click", handleFahrenheitClick);

  buttonCelsius.addEventListener("click", handleCelsiusClick);
  buttonFahrenheit.addEventListener("click", handleFahrenheitClick);
}
