import React, { useEffect, useRef } from 'react';
import Canvas from './Canvas';
import Note from '../../objects/Note';
import KeyPad from '../../objects/KeyPad';

const keyNotes = new Array(30).fill().map(() => ({ time: Math.floor(Math.random() * 30), key: Math.floor(Math.random() * 6) }));
const Bindingkeys = [83, 68, 70, 74, 75, 76];

function CanvasContainer() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const speed = 300;

    canvas.width = 600;
    canvas.height = window.innerHeight;

    const notes = keyNotes.map(note => {
      const { time, key } = note;
      const width = 100;

      return new Note(width * key, time * speed, width);
    });
    const keyPads = Bindingkeys.map((key, index) => new KeyPad(index, 100, key));

    function animation() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      notes.forEach(note => note.update(ctx, speed));
      keyPads.forEach(keypad => keypad.update(ctx));
      window.requestAnimationFrame(animation);
    }

    function onKeydown(e) {
      const key = e.which;
      keyPads.forEach(keypad => keypad.keyDown(key));
    }

    window.addEventListener('keydown', onKeydown);
    animation();

    return () => {
      window.removeEventListener('keydown', onKeydown);
    }
  }, []);

  return <Canvas refs={canvasRef} />;
}

export default CanvasContainer;
