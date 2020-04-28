import { roundRect } from "../utils/drawings";

export const colors = [[255, 87, 34], [0, 188, 212], [246, 215, 67]];

const padding = 3;

export default class Note {
  constructor(index, y, trackWidth, noteHeight) {
    this.index = index;
    this.x = index * trackWidth;
    this.y = -y;
    this.width = trackWidth;
    this.noteHeight = noteHeight;

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

  update(ctx, speed, delta) {
    const color = this.color.join(',');
    const noteStartX = this.x + padding;
    const noteWidth = this.width - 2 * padding;

    this.y += speed * delta;
    ctx.fillStyle = `rgb(${color})`;
    roundRect(ctx, noteStartX, this.y, noteWidth, this.noteHeight, 5, true);
  };
}
