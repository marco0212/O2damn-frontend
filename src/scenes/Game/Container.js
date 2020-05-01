import React, { useRef, useEffect, useCallback } from 'react';
import Game from './Game';
import { connect } from 'react-redux';
import Note from '../../classes/Note';
import KeyPad from '../../classes/KeyPad';
import Engine from '../../classes/Engine';
import { updatePlayingMode, updateScene, updateMiss } from '../../actions';
import { MUSIC_COLLECTION } from '../../constants';

const keyNotes = new Array(5).fill().map((ele, index) => (
    { time: index, key: Math.floor(Math.random() * 6) }
));
const bindingKeys = [83, 68, 70, 74, 75, 76];

function GameContainer({
  song,
  score,
  combo,
  excellent,
  good,
  offBeat,
  miss,
  isPlayingMode,
  updatePlayingMode,
  updateScene,
  updateMiss
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
  const engineRef = useRef(new Engine(canvasWidth, canvasHeight, speed, notes, keyPads, updateMiss));
  const engine = engineRef.current;
  const playMusicTimer = useRef(null);

  const playMusic = useCallback((delay) => {
    if (delay) {
      playMusicTimer.current = setTimeout(() => {
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
      engine.keyDown(pressedKey);
    } else if (pressedKey === ESC) {
      togglePlay();
    }
  }, [engine, togglePlay]);

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
      clearTimeout(playMusicTimer.current);
      window.removeEventListener('keydown', onKeydown);
    };
  }, [canvasHeight, engine, pauseEngin, playEngin, onKeydown, playMusic]);
  return (
    <Game
      song={song}
      score={score}
      combo={combo}
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
  combo: state.game.combo,
  excellent: state.game.excellent,
  good: state.game.good,
  offBeat: state.game.offBeat,
  miss: state.game.miss,
  isPlayingMode: state.ui.isPlayingMode
});
const mapDispatchToProps = dispatch => ({
  updateScene: scene => dispatch(updateScene(scene)),
  updatePlayingMode: () => dispatch(updatePlayingMode()),
  updateMiss: () => dispatch(updateMiss())
})

export default connect(mapStateToProps, mapDispatchToProps)(GameContainer);
