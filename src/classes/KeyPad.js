import stripe from '../assets/stripe.png';

const trackBorderWidth = 1;
const padHeight = 70;
const padding = 10;
const colors = [[255, 87, 34], [0, 188, 212], [246, 215, 67]];

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
    if (key === this.keyBind)
      this.hitOpacity = 1;
  };
  
  update (ctx, canvasHeight, noteHeight) {
    if (this.hitOpacity) {
      this.hitOpacity -= 0.02;
    }

    // Hit indicator
    const gradient = ctx.createLinearGradient(this.x, canvasHeight - padHeight, this.x, 0);

    gradient.addColorStop(0, `rgba(${this.color.join(',')}, ${this.hitOpacity})`);
    gradient.addColorStop(1, 'transparent');

    ctx.globalAlpha = 0.3;
    ctx.fillStyle = gradient;
    ctx.fillRect(this.x + trackBorderWidth, 0, this.width - 2 * trackBorderWidth, canvasHeight - padHeight);

    // Hit judgement area
    const img = new Image();
    img.src = stripe;
    ctx.drawImage(img, this.x, canvasHeight - padHeight, this.width, -noteHeight);

    // Pad bg
    ctx.globalAlpha = 1;
    ctx.fillStyle = '#666';
    ctx.fillRect(this.x, canvasHeight, this.width, -padHeight);

    // Track
    if (this.index) {
      ctx.beginPath();
      ctx.moveTo(this.x, 0);
      ctx.lineTo(this.x, canvasHeight);
      ctx.stroke();
    }

    // Pad key
    ctx.fillStyle = `rgba(${this.color.join(',')}, ${this.hitOpacity})`;
    ctx.fillRect(this.x + padding, canvasHeight - padHeight + padding, this.width - 2 * padding, padHeight - 2 * padding);
    ctx.strokeStyle = '#fff';
    ctx.strokeRect(this.x + padding, canvasHeight - padHeight + padding, this.width - 2 * padding, padHeight - 2 * padding);
  };
}
