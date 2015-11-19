export default class Speaker {
  constructor(name) {
    this.name = name;
  }
  say(message) {
    return `${this.name}: ${message}`;
  }
}
