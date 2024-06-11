export function parseCurrent(object) {
    const cloud = object.cloud;
    const feelslike_c = object.feelslike_c;
    const feelslike_f = object.feelslike_f;
    const humidity = object.humidity;
    const temp_c = object.temp_c;
    const temp_f = object.temp_f;
    const wind_kph = object.wind_kph
    const uv_index = object.uv
    const condition_text = object.condition.text;
    const condition_icon = object.condition.icon;
}

export function parseLocation(object) {
    const city = object.name;
    const reqion = object.reqion;
    const country = object.country;
    const time = object.localtime;
}

export function parseForecast(object) {
    const sunrise = object.astro.sunrise
    const sunset = object.astro.sunset
    const tomorrow_date = object[1].date
    const atomorrow_date = object[2].date
    const aatomorrow_date = object[3].date
    const tomorrow_temp_c = object[1].day.avgtemp_c
    const tomorrow_temp_f = object[1].day.avgtemp_f
    const atomorrow_temp_c = object[2].day.avgtemp_c
    const atomorrow_temp_f = object[2].day.avgtemp_f
    const aatomorrow_temp_c = object[3].day.avgtemp_c
    const aatomorrow_temp_f = object[3].day.avgtemp_f
}

function aggFahrenheit(params) {
    
}

function aggCelsius(params) {
    
}



//date to weekday function

