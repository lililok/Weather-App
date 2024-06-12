import './styles.css';
import { formSubmit } from "./js/input.js";
import { getWeather } from "./js//query.js";

document.addEventListener('DOMContentLoaded', () => {
    formSubmit()
    getWeather('California')
});


