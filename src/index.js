async function getWeather(cityQuery) {
  fetch(`http://api.weatherapi.com/v1/current.json?key=0058d81df506495b8f3143520240906&q=${cityQuery}`, { mode: "cors" })
  .then(function(response) {
    return response.json();
  })
  .then(function(response) {
    console.log(response.current);
    console.log(response.location);
  });
}

const input = document.querySelector('input#city-query');
const form = document.querySelector('form#city-query')

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const cityQuery = input.value;

  input.value = '';
  getWeather(cityQuery)
});

