export default class Engine {
  constructor(width, height, speed, notes, keyPads, onMiss) {
    this.width = width;
    this.height = height;
    this.speed = speed;
    this.notes = notes;
    this.keyPads = keyPads;
    this.isPlay = false;
    this.onMiss = onMiss;
  }

  setContext = (ctx) => {
    this.ctx = ctx;
  }

  togglePlay = (activeCb, deactiveCb) => {
    if (this.isPlay) {
      this.pause();
      deactiveCb();
    } else {
      this.play();
      activeCb();
    }
  }

  pause = () => {
    this.isPlay = false;
    cancelAnimationFrame(this.animationFrame);
  }

  play = () => {
    this.isPlay = true;
    this.then = Date.now();
    this.frame();
  }

  frame = () => {
    this.setDelta();
    this.update();
    this.animationFrame = requestAnimationFrame(this.frame);
  }

  setDelta = () => {
    this.now = Date.now();
    this.delta = (this.now - this.then) / 1000;
    this.then = this.now;
  }

  keyDown(key) {
    this.keyPads.forEach(keypad => keypad.keyDown(key));
  }

  update = () => {
    this.ctx.clearRect(0, 0, this.width, this.height);

    for (let i = 0; i < this.notes.length; i++) {
      if (this.notes[i].isMiss) {
        this.notes = this.notes.slice(i + 1);
        this.onMiss();
      }
    }

    this.notes.forEach(note => note.update(this.ctx, this.speed, this.delta));
    this.keyPads.forEach(keypad => keypad.update(this.ctx, this.height));
  }
}
