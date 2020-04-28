import React, { useEffect, useRef } from 'react';
import GameControl from './GameControl';
import Note from '../../classes/Note';
import KeyPad from '../../classes/KeyPad';
import Engine from '../../classes/Engine';
import { connect } from 'react-redux';

const keyNotes = new Array(30).fill().map(() => (
    {
      time: Math.random() * 30,
      key: Math.floor(Math.random() * 6) 
    }
  )
);
const bindingKeys = [83, 68, 70, 74, 75, 76];

function CanvasContainer() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const speed = 300;

    canvas.width = 300;
    canvas.height = window.innerHeight - 90;

    const trackWidth = canvas.width / bindingKeys.length;
    const noteHeight = 15;
    const notes = keyNotes.map(note => {
      const { time, key } = note;

      return new Note(key, time * speed, trackWidth, noteHeight);
    });
    const keyPads = bindingKeys.map((key, index) => new KeyPad(index, trackWidth, key));
    const engine = new Engine(ctx, canvas.width, canvas.height, speed, notes, keyPads);

    function onKeydown(e) {
      const key = e.which;
      const SPACE_BAR = 32;
      const ESC = 27;

      if (bindingKeys.filter(bindingKey => bindingKey === key).length) {
        keyPads.forEach(keypad => keypad.keyDown(key));
      } else if (key === ESC) {
        engine.pause();
      } else if (key === SPACE_BAR) {
        engine.play();
      }
    }

    engine.play();
    window.addEventListener('keydown', onKeydown);
    return () => {
      window.removeEventListener('keydown', onKeydown);
    }
  }, []);

  return <GameControl refs={canvasRef} />;
}

export default connect()(CanvasContainer);
