import stripe from '../assets/stripe.png';
import { roundRect } from '../utils/drawings';
import { colors } from './Note';

const padBgColor = '#002f58';
const padHeight = 80;
const keyHeight = 50;
const padding = 10;

export default class KeyPad {
  constructor(index, width, keyBind) {
    this.index = index;
    this.x = index * width;
    this.width = width;
    this.keyBind = keyBind;
    this.hitOpacity = 0;
    
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

  keyDown(key) {
    if (key === this.keyBind) {
      this.hitOpacity = 1;
    }
  };

  update (ctx, canvasHeight, noteHeight) {
    const padStartY = canvasHeight - padHeight;
    const keyWidth = this.width - 2 * padding;
    const keyStartX = this.x + padding;
    const keyStartY = this.index === 1 || this.index === 4 ? (
      padStartY + padding * 2
    ) : (
      padStartY + padding
    );
    const gradient = ctx.createLinearGradient(this.x, padStartY, this.x, 0);

    if (this.hitOpacity) {
      this.hitOpacity -= 0.02;
    }

    // Hit indicator
    ctx.globalAlpha = 0.5;
    gradient.addColorStop(0, `rgba(${this.color.join(',')}, ${this.hitOpacity})`);
    gradient.addColorStop(1, 'transparent');
    ctx.fillStyle = gradient;
    ctx.fillRect(this.x, 0, this.width, padStartY);

    // Hit judgement area
    const img = new Image();

    ctx.globalAlpha = 1;
    img.src = stripe;
    ctx.drawImage(img, this.x, padStartY, this.width, -noteHeight);

    // Track Border
    if (this.index) {
      ctx.beginPath();
      ctx.moveTo(this.x, 0);
      ctx.lineTo(this.x, padStartY);
      ctx.stroke();
    }

    // Pad bg
    ctx.fillStyle = padBgColor;
    ctx.fillRect(this.x, canvasHeight, this.width, -padHeight);

    // Pad key
    ctx.fillStyle = `rgba(${this.color.join(',')}, ${this.hitOpacity})`;
    roundRect(ctx, keyStartX, keyStartY, keyWidth, keyHeight, 10, true);
    ctx.strokeStyle = '#fff';
    roundRect(ctx, keyStartX, keyStartY, keyWidth, keyHeight, 10, false, true);
  };
}
