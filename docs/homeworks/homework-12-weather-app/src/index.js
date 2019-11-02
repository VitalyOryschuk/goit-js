import './styles.css';
import getGeoPosition from './js/getGeoPosition';
import fetchWeather from './js/fetchWeather';


getGeoPosition().then(location => {
  return {
    latitude: location.coords.latitude,
    longitude: location.coords.longitude,
  }
}).then((coords) => {
  fetchWeather(coords.latitude, coords.longitude);
}).catch(error => {
  console.log(error);
});
