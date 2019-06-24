export default class speechInterface {
  constructor(lang) {
    this.recognition = null;
    this.lang = lang;
    this.isStart = false;
  }

  init() {
    if (!("webkitSpeechRecognition" in window)) return;
    else {
      this.recognition = new window.webkitSpeechRecognition();
      this.recognition.continuous = true;
      this.recognition.interimResults = true;
      this.recognition.lang = this.lang;
      this.recognition.maxAlternatives = 1;
    }
  }

  registerCallback(onstart, onend, onresult, onerror) {
    this.init();
    this.recognition.onstart = () => onstart(this.recognition);
    this.recognition.onend = () => onend(this.recognition);
    this.recognition.onresult = e => onresult(e, this.recognition);
    this.recognition.onerror = e => onerror(e, this.recognition);
  }

  start() {
    if (this.isStart) return;
    this.recognition.start();
    this.isStart = true;
  }

  stop() {
    if (!this.isStart) return;
    this.recognition.stop();
    this.recognition = null;
    this.isStart = false;
  }
}
