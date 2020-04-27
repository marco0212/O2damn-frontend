export default class Note {
  constructor(x, y, width, height) {
    this.x = x;
    this.y = -y;
    this.width = width;
    this.height = height;
    this.then = Date.now();
    this.delta = 0;
  }

  setDelta() {
    this.now = Date.now();
    this.delta = (this.now - this.then) / 1000;
    this.then = this.now;
  };

  update(ctx, speed) {
    this.setDelta();
    this.y += speed * this.delta;
    ctx.fillStyle = 'red';
    ctx.fillRect(this.x, this.y, this.width, this.height);
  };
}
