export function renderData(data) {
  const container = document.querySelector('.container');
  container.innerHTML = "";

  const main = document.createElement("div");
  main.className = 'main-content';

  const forecast = document.createElement("div");
  forecast.className = 'forecast-content';

  forecast.innerHTML = `
    <div class="forecast" id="one">
        <p class="weekday">${data.forecast.firstWeekday}</p>
        <p class="temperature">${data.forecast.firstTemp}</p>
    </div>
    <div class="forecast" id="two">
        <p class="weekday">${data.forecast.secondWeekday}</p>
        <p class="temperature">${data.forecast.secondTemp}</p>
    </div>
    <div class="forecast" id="three">
        <p class="weekday">${data.forecast.thirdWeekday}</p>
        <p class="temperature">${data.forecast.thirdTemp}</p>
    </div>
  `

  const current = document.createElement("div");
  current.className = 'current-content';

  current.innerHTML = `
    <div class="current" id="location">
        <div id="city">${data.location.name}, ${data.location.region}, ${data.location.country}</div>
        <div id="time">${data.location.time}</div>
    </div>
    <div class="current" id="stats">
        <div id="stats-left">
            <p id="temperature">${data.current.temp}</p>
            <p id="condition">${data.current.conditionText}</p>
            <img src=${data.current.conditionIcon} alt="condition-icon" id="condition">
            <p id="feels">Feels like ${data.current.feels}</p>
            <p id="sunrise">${data.current.sunrise}</p>
        </div>
        <div id="stats-right">
            <p id="wind">${data.current.wind}</p>
            <p id="cloud">${data.current.cloud}</p>
            <p id="humidity">${data.current.humidity}</p>
            <p id="uv-index">${data.current.uvIndex}</p>
            <p id="sunset">${data.current.sunset}</p>
        </div>
    </div>
  `

  main.appendChild(forecast);
  main.appendChild(current);
  container.appendChild(main);
}