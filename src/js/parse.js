export function aggParse(object) {
    const parsedCurrent = parseCurrent(object.current)
    const parsedLocation = parseLocation(object.location)
    const parsedForecast = parseForecast(object.forecast.forecastday)

    const data = {
        current: {
            temp: parsedCurrent.temp_c+'ºC',
            conditionText: parsedCurrent.condition_text,
            conditionIcon: parsedCurrent.condition_icon,
            feels: parsedCurrent.feelslike_c+'ºC',
            uvIndex: parsedCurrent.uv_index,
            wind: parsedCurrent.wind_kph+'KPH',
            cloud: parsedCurrent.cloud+'%',
            humidity: parsedCurrent.humidity+'%',
            sunrise: parsedForecast.sunrise,
            sunset: parsedForecast.sunset,
        },
        location: {
            name: parsedLocation.city,
            region: parsedLocation.region,
            country: parsedLocation.country,
            time: parsedLocation.time
        },
        forecast: {
            firstWeekday: dateToWeekday(parsedForecast.tomorrow_date),
            firstTemp: parsedForecast.tomorrow_temp_c+'ºC',
            secondWeekday: dateToWeekday(parsedForecast.atomorrow_date),
            secondTemp: parsedForecast.atomorrow_temp_c+'ºC',
            thirdWeekday: dateToWeekday(parsedForecast.aatomorrow_date),
            thirdTemp: parsedForecast.aatomorrow_temp_c+'ºC',
        }
    }
    return data;
}

function parseCurrent(object) {
    const cloud = object.cloud;
    const feelslike_c = object.feelslike_c;
    const humidity = object.humidity;
    const temp_c = object.temp_c;
    const wind_kph = object.wind_kph
    const uv_index = object.uv
    const condition_text = object.condition.text;
    const condition_icon = object.condition.icon;

    const parsedCurrent = {cloud, feelslike_c, humidity, temp_c, wind_kph, uv_index, condition_text, condition_icon}
    return parsedCurrent;
}

function parseLocation(object) {
    const city = object.name;
    const region = object.region;
    const country = object.country;
    const time = object.localtime;

    const parsedLocation = {city, region, country, time}
    return parsedLocation;
}

 function parseForecast(object) {
    const sunrise = object[0].astro.sunrise
    const sunset = object[0].astro.sunset
    const tomorrow_date = object[1].date
    const atomorrow_date = object[2].date
    const aatomorrow_date = object[3].date
    const tomorrow_temp_c = object[1].day.avgtemp_c
    const atomorrow_temp_c = object[2].day.avgtemp_c
    const aatomorrow_temp_c = object[3].day.avgtemp_c

    const parsedForecast = {sunrise, sunset, tomorrow_date, atomorrow_date, aatomorrow_date, tomorrow_temp_c, atomorrow_temp_c, aatomorrow_temp_c}
    return parsedForecast;
}

function dateToWeekday(date) {
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const day = new Date(date).getDay();
    return days[day];
}
