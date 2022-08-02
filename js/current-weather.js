import weather from '../data/current-weather.js'
import { formatDate, formatTemp } from './utils/format-data.js';
// weather.main.temp

function setCurrentCity($el, city) {
  $el.textContent = city
}

function setCurrentDate($el) {
  const date = new Date()
  const formattedDate = formatDate(date)
  $el.textContent = formattedDate
}

function setCurrentTemp($el, temp) {
  $el.textContent = formatTemp(temp)
}

function solarStatus(sunsetTime, sunriseTime) {
  const currentHours = new Date().getHours()
  const sunsetHours = sunsetTime.getHours()
  const sunriseHours = sunriseTime.getHours()

  if (currentHours > sunsetHours || currentHours < sunriseHours) {
    return 'night'
  }
  return 'morning'
}

function setBackground($el, solarStatus) {
  $el.style.backgroundImage = `url(./images/${solarStatus}-drizzle.jpg)`
}

function configCurrentWeather(weather) {
  // Loader
  // Date
  const $currentWeatherDate = document.querySelector('#current-weather-date')
  setCurrentDate($currentWeatherDate)
  // City
  const $currentWeatherCity = document.querySelector('#current-weather-city')
  const city = weather.name
  setCurrentCity($currentWeatherCity, city)
  // Temperature
  const $currentWeatherTemp = document.querySelector('#current-weather-temp')
  const temp = weather.main.temp
  setCurrentTemp($currentWeatherTemp, temp)
  // Background
  const sunriseTime = new Date(weather.sys.sunrise * 1000)
  const sunsetTime = new Date(weather.sys.sunset * 1000)

  const $app = document.querySelector('#app')
  setBackground($app, solarStatus(sunriseTime, sunsetTime))
}

export default function currentWeather() {
  // GEOLOCATION // API - weather // Config
  configCurrentWeather(weather)
  console.log(weather)
}