(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{L1EO:function(e,t,n){},QfWi:function(e,t,n){"use strict";n.r(t);n("L1EO"),n("JBxO"),n("FdtR");n("D/wG");var o,i="http://api.weatherstack.com/current",c="9a99e705f4a76202bd804cc156dbd555",r={location:document.querySelector('span[data-field="location"]'),temp:document.querySelector('span[data-field="temp"]'),humidity:document.querySelector('span[data-field="humidity"]'),wind:document.querySelector('span[data-field="wind"]'),conditions:document.querySelector('span[data-field="conditions"]'),submit:document.querySelector(".search-form"),icon:document.querySelector(".icon"),weather:document.querySelector("#weather")};function u(e,t){fetch(i+"?access_key="+c+"&query="+e+","+t).then(function(e){return e.json()}).then(function(e){console.log(e),r.location.textContent=e.location.name,r.temp.textContent=e.current.temperature,r.humidity.textContent=e.current.humidity,r.wind.textContent=e.current.wind_speed,r.conditions.textContent=e.current.weather_descriptions,r.icon.src=e.current.weather_icons,r.icon.alt=e.current.weather_descriptions})}r.submit.addEventListener("submit",function(e){e.preventDefault();var t=e.currentTarget.elements.city.value;r.weather.classList.remove("is-hidden"),u(t),e.currentTarget.elements.city.value=""}),(o={maximumAge:36e6,timeout:5e3},new Promise(function(e,t){navigator.geolocation.getCurrentPosition(e,t,o)})).then(function(e){return{latitude:e.coords.latitude,longitude:e.coords.longitude}}).then(function(e){u(e.latitude,e.longitude)}).catch(function(e){console.log(e)})}},[["QfWi",1,2]]]);
//# sourceMappingURL=main.c2f01df82fdc31cb9258.js.map