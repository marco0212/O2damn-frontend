import React, { useRef, useEffect, useCallback } from 'react';
import Game from './Game';
import { connect } from 'react-redux';
import Note from '../../classes/Note';
import KeyPad from '../../classes/KeyPad';
import Engine from '../../classes/Engine';
import { updatePlayingMode, updateScene } from '../../actions';
import { MUSIC_COLLECTION } from '../../constants';

const keyNotes = new Array(5).fill().map((ele, index) => (
    { time: index, key: Math.floor(Math.random() * 6) }
));
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
  const canvasWidth = 300;
  const canvasHeight = window.innerHeight - 90;
  const padHeight = 80;
  const noteHeight = 15;
  const delay = 5;
  const speed = 100;
  const trackWidth = canvasWidth / bindingKeys.length;
  const audioRef = useRef(null);
  const canvasRef = useRef(null);
  const notesRef = useRef(keyNotes.map(note => {
    const { time, key } = note;
    return new Note(key, time, speed, delay, trackWidth, noteHeight);
  }));
  const keyPadsRef = useRef(bindingKeys.map((key, index) => new KeyPad(index, trackWidth, padHeight, key)));
  const notes = notesRef.current;
  const keyPads = keyPadsRef.current;
  const engineRef = useRef(new Engine(canvasWidth, canvasHeight, speed, notes, keyPads));
  const engine = engineRef.current;
  const gameStartTimeRef = useRef(Date.now() + delay * 1000);
  const gameStartTime = gameStartTimeRef.current;
  let timer = useRef(null);

  const playMusic = useCallback((delay) => {
    if (delay) {
      timer.current = setTimeout(() => {
        audioRef.current.play();
      }, delay);
    } else {
      audioRef.current.play();
    }
  }, []);
  const pauseMusic = () => audioRef.current.pause();
  const playEngin = useCallback(() => engine.play(), [engine]);
  const pauseEngin = useCallback(() => engine.pause(), [engine]);
  const togglePlay = useCallback(() => {
    engine.togglePlay(playMusic, pauseMusic);
    updatePlayingMode();
  }, [engine, updatePlayingMode, playMusic]);
  const confirmLeave = wannaLeave => {
    if (wannaLeave) {
      updateScene(MUSIC_COLLECTION);
    } else {
      engine.togglePlay(playMusic, pauseMusic);
    }

    updatePlayingMode();
  };
  const onKeydown = useCallback((e) => {
    const pressedKey = e.which;
    const ESC = 27;
    const isBindingKeyPressed = bindingKeys
      .filter(bindingKey => bindingKey === pressedKey)
      .length;

    if (isBindingKeyPressed) {
      const key = bindingKeys.indexOf(pressedKey);
      const time = (Date.now() - gameStartTime) / 1000;

      console.log(key, time);
      engine.keyDown(pressedKey);
    } else if (pressedKey === ESC) {
      togglePlay();
    }
  }, [engine, togglePlay, gameStartTime]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    canvas.width = canvasWidth;
    canvas.height = canvasHeight;
    engine.setContext(ctx);
    playEngin();
    playMusic(delay * 1000);

    window.addEventListener('keydown', onKeydown);
    return () => {
      pauseEngin();
      clearTimeout(timer.current);
      window.removeEventListener('keydown', onKeydown);
    };
  }, [canvasHeight, engine, pauseEngin, playEngin, onKeydown, playMusic]);
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
