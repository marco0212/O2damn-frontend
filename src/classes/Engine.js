export default class Engine {
  constructor(width, height, speed, delay, notes, keyPads, onMiss, onScore, onGameEnd) {
    this.width = width;
    this.height = height;
    this.speed = speed;
    this.notes = notes;
    this.keyPads = keyPads;
    this.isPlay = false;
    this.onMiss = onMiss;
    this.onScore = onScore;
    this.onGameEnd = onGameEnd;
    this.delay = delay;
    this.playingTime = -delay * 1000;
    this.timer = null;
  }

  setContext = (ctx) => {
    this.ctx = ctx;
  }

  setDuration = (time) => {
    this.duration = time;
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
    clearInterval(this.timer);
    cancelAnimationFrame(this.animationFrame);
    this.timer = null;
    this.isPlay = false;
  }

  play = () => {
    if (!this.timer) {
      this.timer = setInterval(() => {
        this.playingTime += 50;
      }, 50);
    }

    this.isPlay = true;
    this.then = Date.now();
    this.frame();
  }

  frame = () => {
    if (this.playingTime / 1000 >= this.duration) {
      this.onGameEnd();
    } else {
      this.setDelta();
      this.update();
      this.animationFrame = requestAnimationFrame(this.frame);
    }
  }

  setDelta = () => {
    this.now = Date.now();
    this.delta = (this.now - this.then) / 1000;
    this.then = this.now;
  }

  keyDown(pressedKey) {
    const detectedNote = this.notes.find(note => note.key === pressedKey);
    const noteIndex = this.notes.indexOf(detectedNote);

    if (noteIndex >= 0) {
      const timeDiff = Math.abs(detectedNote.time - this.playingTime / 1000);
      if (timeDiff < 0.3) {
        this.notes.splice(noteIndex, 1);
        this.onScore(timeDiff);
      }
    }

    this.keyPads.forEach(keypad => keypad.keyDown(pressedKey));
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
