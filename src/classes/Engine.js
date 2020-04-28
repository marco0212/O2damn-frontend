export default class Engine {
  constructor(ctx, width, height, speed, notes, keyPads) {
    this.ctx = ctx;
    this.width = width;
    this.height = height;
    this.speed = speed;
    this.notes = notes;
    this.keyPads = keyPads;
  }

  pause = () => {
    cancelAnimationFrame(this.animationFrame);
  }

  play = () => {
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

  update = () => {
    this.ctx.clearRect(0, 0, this.width, this.height);
    this.notes.forEach(note => note.update(this.ctx, this.speed, this.delta));
    this.keyPads.forEach(keypad => keypad.update(this.ctx, this.height));
  }
}
