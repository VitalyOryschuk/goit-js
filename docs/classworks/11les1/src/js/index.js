// // выполнится первым
// console.log('First');

// setTimeout(() => {
//   // выполнится третьим, спустя 2 секунды
//   console.log('Second');
// }, 2000);

// // выполнится вторым
// console.log('Third');
import '../css/style.css';
import {
  Timer
} from './timer';

const superTimer = new Timer({
  selector: '.super-timer',
  time: 5000
});

// superTimer.getHours();
// console.log(superTimer.getSeconds());

superTimer.renderTimer();
superTimer.init();