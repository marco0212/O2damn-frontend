export default class KeyPad {
  constructor(x, width, keyBind) {
    this.x = x;
    this.width = width;
    this.keyBind = keyBind;
    this.hitOpacity = 0;
  }

  keyDown(key) {
    if (key === this.keyBind)
      this.hitOpacity = 1;
  };
  
  update (ctx, canvasHeight) {
    if (this.hitOpacity) {
      this.hitOpacity -= 0.02;
    }

    // Pad
    ctx.fillStyle = '#323232';
    ctx.fillRect(0, canvasHeight, this.width * (this.x + 1), -70);
    ctx.fillStyle = '#666';
    ctx.fillRect(0, canvasHeight, this.width * (this.x + 1), -50);

    // Hit indicator
    ctx.fillStyle = `rgba(0, 0, 42, ${this.hitOpacity})`;
    ctx.fillRect(this.width * this.x, 0, this.width, canvasHeight);
  };
}

