import React, { useEffect, useRef } from 'react';
import GameControl from './GameControl';
import Note from '../../classes/Note';
import KeyPad from '../../classes/KeyPad';
import Engine from '../../classes/Engine';
import { connect } from 'react-redux';
import { togglePlayingMode } from '../../actions';

const keyNotes = new Array(30).fill().map(() => (
    {
      time: Math.random() * 30,
      key: Math.floor(Math.random() * 6) 
    }
  )
);
const bindingKeys = [83, 68, 70, 74, 75, 76];

function CanvasContainer({
  playMusic,
  pauseMusic,
  togglePlayingMode
}) {
  const canvasRef = useRef(null);
  const canvasWidth = 300;
  const canvasHeight = window.innerHeight - 90;
  const speed = 300;
  const trackWidth = canvasWidth / bindingKeys.length;
  const noteHeight = 15;
  const notes = keyNotes.map(note => {
    const { time, key } = note;
    return new Note(key, time * speed, trackWidth, noteHeight);
  });
  const keyPads = bindingKeys.map((key, index) => new KeyPad(index, trackWidth, key));
  const engine = new Engine(canvasWidth, canvasHeight, speed, notes, keyPads);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    canvas.width = canvasWidth;
    canvas.height = canvasHeight;
    engine.setContext(ctx);

    const playGame = () => {
      playMusic();
      engine.play();
    };
    const onKeydown = (e) => {
      const key = e.which;
      const ESC = 27;
      const isBindingKeyPressed = bindingKeys
        .filter(bindingKey => bindingKey === key)
        .length;

      if (isBindingKeyPressed) {
        keyPads.forEach(keypad => keypad.keyDown(key));
      } else if (key === ESC) {
        engine.togglePlay(playMusic, pauseMusic);
        togglePlayingMode();
      }
    }

    playGame();
    window.addEventListener('keydown', onKeydown);
    return () => {
      engine.pause();
      window.removeEventListener('keydown', onKeydown);
    };
  }, [canvasHeight, notes, keyPads, playMusic, pauseMusic, togglePlayingMode, engine]);

  return <GameControl refs={canvasRef} />;
}

const mapDispatchToProps = dispatch => ({
  togglePlayingMode: () => dispatch(togglePlayingMode())
});

export default connect(null, mapDispatchToProps)(CanvasContainer);
