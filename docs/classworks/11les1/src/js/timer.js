const HOURS_IN_MILISECONDS = 60 * 60 * 1000;
const MINUTES_IN_MILISECONDS = 60 * 1000;

export class Timer {
  constructor({
    selector,
    time
  }) {
    this.container = document.querySelector(selector);
    this.time = time;

  }

  getHours() {
    const hours = this.time / HOURS_IN_MILISECONDS;

    return hours >= 1 ? Math.floor(hours) : 0;
  }

  getMinutes() {
    const minutes = this.time % HOURS_IN_MILISECONDS / MINUTES_IN_MILISECONDS;

    return minutes >= 1 ? Math.floor(minutes) : 0;
  }
  getSeconds() {
    return this.time % HOURS_IN_MILISECONDS % MINUTES_IN_MILISECONDS / 1000;
  }
  transormToTwoDigits(value) {
    return value >= 10 ? value : `0${value}`
  }
  startTimer() {
    const timer = setInterval(() => {
      this.time = this.time - 1000;
      if (this.time < 0) {
        clearInterval(timer);
        return
      };
      this.renderTimer();

    }, 1000);
  }

  renderTimer() {
    const template = `
    <div class="timer">
        <span class="timer__hours">
        ${this.transormToTwoDigits(this.getHours())}:</span>
        <span class="timer__minutes">
        ${this.transormToTwoDigits(this.getMinutes())}:</span>
        <span class="timer__seconds">
        ${this.transormToTwoDigits(this.getSeconds())}</span>
        </div>
        `;
    this.container.innerHTML = template;
  }
  init() {
    this.renderTimer();
    this.startTimer();
  }
}