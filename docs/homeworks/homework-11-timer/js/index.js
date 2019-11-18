'use strict';
const Refs = {
  currentDay: document.querySelector('span[data-value="days"]'),
  currentHours: document.querySelector('span[data-value="hours"]'),
  currentMins: document.querySelector('span[data-value="mins"]'),
  currentSecs: document.querySelector('span[data-value="secs"]'),
};

class CountdownTimer {
  constructor({ selector, targetDate }) {
    this.targetDate = targetDate;
    this.selector = selector;
  }
  start() {
    setInterval(() => {
      const currentDate = Date.now();
      this.time = this.targetDate - currentDate;
      updateClockFace(this.time);
    }, 1000);
  }
}

function updateClockFace(time) {
  const days = Math.floor(time / (1000 * 60 * 60 * 24));
  const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
  const secs = Math.floor((time % (1000 * 60)) / 1000);
  Refs.currentDay.textContent = days;
  Refs.currentHours.textContent = pad(hours);
  Refs.currentMins.textContent = pad(mins);
  Refs.currentSecs.textContent = pad(secs);
  // console.dir(secs);
}

function pad(value) {
  return String(value).padStart(2, '0');
}

const timer = new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date(2020, 9, 29),
});
timer.start();
/*
 * Оставшиеся дни: делим значение UTC на 1000 * 60 * 60 * 24, количество
 * миллисекунд в одном дне (миллисекунды * секунды * минуты * часы)
 */

/*
 * Оставшиеся часы: получаем остаток от предыдущего расчета с помощью оператора
 * остатка % и делим его на количество миллисекунд в одном часе
 * (1000 * 60 * 60 = миллисекунды * минуты * секунды)
 */

/*
 * Оставшиеся минуты: получаем оставшиеся минуты и делим их на количество
 * миллисекунд в одной минуте (1000 * 60 = миллисекунды * секунды)
 */

/*
 * Оставшиеся секунды: получаем оставшиеся секунды и делим их на количество
 * миллисекунд в одной секунде (1000)
 */
