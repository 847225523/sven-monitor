class Tracker {
  constructor() {
    this.url = "";
    this.xhr = new XMLHttpRequest();
  }
  send(log) {
    this.xhr.open("POST", this.url, true);
    this.xhr.setRequestHeader("Content-Type", "application/json");
    this.xhr.send(JSON.stringify(log));
  }
}
const tracker = new Tracker();

export default tracker;
