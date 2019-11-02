const BASE_URL = 'http://api.weatherstack.com/current';
const ACCESS_KEY = '9a99e705f4a76202bd804cc156dbd555';

const Refs = {
  location: document.querySelector('span[data-field="location"]'),
  temp: document.querySelector('span[data-field="temp"]'),
  humidity: document.querySelector('span[data-field="humidity"]'),
  wind: document.querySelector('span[data-field="wind"]'),
  conditions: document.querySelector('span[data-field="conditions"]'),
  submit: document.querySelector('.search-form'),
  icon: document.querySelector('.icon'),
  weather: document.querySelector('#weather'),
};

export default function fetchWeather(latitude, longitude) {
  fetch(`${BASE_URL}?access_key=${ACCESS_KEY}&query=${latitude},${longitude}`)
    .then(response => response.json())
    .then(data => {
      console.log(data);
      Refs.location.textContent = data.location.name;
      Refs.temp.textContent = data.current.temperature;
      Refs.humidity.textContent = data.current.humidity;
      Refs.wind.textContent = data.current.wind_speed;
      Refs.conditions.textContent = data.current.weather_descriptions;
      Refs.icon.src = data.current.weather_icons;
      Refs.icon.alt = data.current.weather_descriptions;
    });
}
Refs.submit.addEventListener('submit', searchFormSubmitHandler);

function searchFormSubmitHandler(e) {
  e.preventDefault();
  const searchCity = e.currentTarget.elements.city.value;
  Refs.weather.classList.remove('is-hidden');
  fetchWeather(searchCity);
  e.currentTarget.elements.city.value = '';
}
