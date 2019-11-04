class EventEmiter {
  constructor() {
    this.events = {}
  }
  subscribe(type, callback) {
    if (!this.events[type]) {
      this.events[type] = [];
    }
    this.events[type].push(callback);
  }

}
const listener = new EventEmiter();
listener.subscribe('slide:change', () => {
  console.log('slide change');
})
