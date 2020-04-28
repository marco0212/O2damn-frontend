import React, { useEffect, useRef } from 'react';
import GameControl from './GameControl';
import Note from '../../classes/Note';
import KeyPad from '../../classes/KeyPad';

const keyNotes = new Array(30).fill().map(() => (
    {
      time: Math.random() * 30,
      key: Math.floor(Math.random() * 6) 
    }
  )
);
const Bindingkeys = [83, 68, 70, 74, 75, 76];

function CanvasContainer() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const speed = 300;

    canvas.width = 300;
    canvas.height = window.innerHeight - 90;

    const trackWidth = canvas.width / Bindingkeys.length;
    const noteHeight = 15;
    const notes = keyNotes.map(note => {
      const { time, key } = note;

      return new Note(key, time * speed, trackWidth, noteHeight);
    });
    const keyPads = Bindingkeys.map((key, index) => new KeyPad(index, trackWidth, key));

    function animation() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      notes.forEach(note => note.update(ctx, speed));
      keyPads.forEach(keypad => keypad.update(ctx, canvas.height, noteHeight));
      
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

  return <GameControl refs={canvasRef} />;
}

export default CanvasContainer;
