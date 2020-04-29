import React, { useRef, useEffect, useCallback } from 'react';
import Game from './Game';
import { connect } from 'react-redux';
import Note from '../../classes/Note';
import KeyPad from '../../classes/KeyPad';
import Engine from '../../classes/Engine';
import { updatePlayingMode, updateScene } from '../../actions';
import { MUSIC_COLLECTION } from '../../constants';

const keyNotes = new Array(30).fill().map(() => (
  {
    time: Math.random() * 30,
    key: Math.floor(Math.random() * 6) 
  }
)
);
const bindingKeys = [83, 68, 70, 74, 75, 76];

function GameContainer({
  song,
  score,
  maxCombo,
  excellent,
  good,
  offBeat,
  miss,
  isPlayingMode,
  updatePlayingMode,
  updateScene
}) {
  const audioRef = useRef(null);
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
  const engineRef = useRef(new Engine(canvasWidth, canvasHeight, speed, notes, keyPads));
  const engine = engineRef.current;

  const playMusic = () => audioRef.current.play();
  const pauseMusic = () => audioRef.current.pause();
  const playEngin = useCallback(() => engine.play(), [engine]);
  const pauseEngin = useCallback(() => engine.pause(), [engine]);
  const togglePlay = () => {
    engine.togglePlay(playMusic, pauseMusic);
    updatePlayingMode();
  }
  const confirmLeave = wannaLeave => {
    if (wannaLeave) {
      updateScene(MUSIC_COLLECTION);
      updatePlayingMode();
    } else {
      togglePlay();
    }
  }
  const onKeydown = useCallback((e) => {
    const key = e.which;
    const ESC = 27;
    const isBindingKeyPressed = bindingKeys
      .filter(bindingKey => bindingKey === key)
      .length;

    if (isBindingKeyPressed) {
      keyPads.forEach(keypad => keypad.keyDown(key));
    } else if (key === ESC) {
      togglePlay();
    }
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    canvas.width = canvasWidth;
    canvas.height = canvasHeight;
    engine.setContext(ctx);
    playEngin();
    playMusic();

    window.addEventListener('keydown', onKeydown);
    return () => {
      pauseEngin();
      window.removeEventListener('keydown', onKeydown);
    };
  }, [onKeydown]);
  return (
    <Game
      song={song}
      score={score}
      maxCombo={maxCombo}
      excellent={excellent}
      good={good}
      offBeat={offBeat}
      miss={miss}
      audioRef={audioRef}
      canvasRef={canvasRef}
      isPlayingMode={isPlayingMode}
      confirmLeave={confirmLeave}
    />
  );
}

const mapStateToProps = state => ({
  song: state.song.songById[state.game.currentSongId],
  score: state.game.score,
  maxCombo: state.game.maxCombo,
  excellent: state.game.excellent,
  good: state.game.good,
  offBeat: state.game.offBeat,
  miss: state.game.miss,
  isPlayingMode: state.ui.isPlayingMode
});
const mapDispatchToProps = dispatch => ({
  updateScene: scene => dispatch(updateScene(scene)),
  updatePlayingMode: () => dispatch(updatePlayingMode())
})

export default connect(mapStateToProps, mapDispatchToProps)(GameContainer);
