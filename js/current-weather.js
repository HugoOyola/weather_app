import weather from '../data/current-weather.js'
import { formatDate, formatTemp } from './utils/format-data.js';

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
}

export default function currentWeather() {
  // GEOLOCATION // API - weather // Config
  configCurrentWeather(weather)
  console.log(weather)
}