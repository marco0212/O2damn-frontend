const canvasWidth = 600;
const canvasHeight = window.innerHeight - 100;

export default function KeyPad(x, width, keyBind) {
  this.x = x;
  this.width = width;
  this.keyBind = keyBind;
  this.hitOpacity = 0;

  this.keyDown = (key) => {
    if (key === keyBind) this.hitOpacity = 1;
  };

  this.update = (ctx) => {
    if (this.hitOpacity) {
      this.hitOpacity -= 0.02;
    }

    // Pad
    ctx.fillStyle = 'red';
    ctx.fillRect(0, canvasHeight - 100, canvasWidth, 30);

    // Hit indicator
    ctx.fillStyle = `rgba(0, 0, 42, ${this.hitOpacity})`;
    ctx.fillRect(100 * x, 0, this.width, canvasHeight);
  };
}
