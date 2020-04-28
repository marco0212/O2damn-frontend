const padding = 2;
const colors = [[255, 87, 34], [0, 188, 212], [246, 215, 67]];

export default class Note {
  constructor(index, y, width, height) {
    this.index = index;
    this.x = index * width;
    this.y = -y;
    this.width = width;
    this.height = height;
    this.then = Date.now();
    this.delta = 0;

    switch(index) {
      case 0:
      case 5:
        this.color = colors[0];
        break;
      case 1:
      case 4:
        this.color = colors[1];
        break;
      default:
        this.color = colors[2];
        break;
    }
  }

  setDelta() {
    this.now = Date.now();
    this.delta = (this.now - this.then) / 1000;
    this.then = this.now;
  };

  update(ctx, speed) {
    const color = this.color.join(',');
    
    this.setDelta();
    this.y += speed * this.delta;
    ctx.fillStyle = `rgb(${color})`;
    ctx.fillRect(this.x + padding, this.y, this.width - 2 * padding, this.height);
  };
}
