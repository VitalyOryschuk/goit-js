export default function getGeoPosition() {
  const options = {
    maximumAge: 36000000,
    timeout: 5000,
  };
  return new Promise((resolve, reject) => {
    window.navigator.geolocation.getCurrentPosition(
      resolve, reject, options);
  })
};
