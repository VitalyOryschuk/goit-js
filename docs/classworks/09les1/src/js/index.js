import Swiper from 'swiper'
// eсли подключаем библиотеку то сифйпер без точки
// в библиотеке ищем айпиай
// const users = require('./users')  -comonJS
import '../css/style.css';

const slider = new Swiper('.slider', {
  speed: 800,
  effect: 'cube'
});