export default function Note(x, y, width) {
  this.x = x;
  this.y = -y;
  this.width = width;
  this.then = Date.now();
  this.delta = 0;

  this.setDelta = () => {
    this.now = Date.now();
    this.delta = (this.now - this.then) / 1000;
    this.then = this.now;
  };

  this.update = (ctx, speed) => {
    this.setDelta();
    this.y += speed * this.delta
    ctx.fillStyle = 'red';
    ctx.fillRect(this.x, this.y, this.width, 30);
  };
}