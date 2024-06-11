export function renderData(whatevergoesfromparsejs) {
  const main = document.createElement("div");
  main.className = 'main-content';

  const forecast = document.createElement("div");
  forecast.className = 'forecast-content';

  const current = document.createElement("div");
  current.className = 'current-content';

  main.appendChild(forecast);
  main.appendChild(current);
}