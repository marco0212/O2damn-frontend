import React, { useRef, useEffect, useCallback, useState } from 'react';
import { connect } from 'react-redux';
import Game from './Game';
import Note from '../../classes/Note';
import KeyPad from '../../classes/KeyPad';
import Engine from '../../classes/Engine';
import { updatePlayingMode, updateScene, updateMiss, updateStats } from '../../actions';
import { MUSIC_COLLECTION, RESULT } from '../../constants';

const bindingKeys = [83, 68, 70, 74, 75, 76];
function GameContainer({
  song,
  stats,
  isPlayingMode,
  updatePlayingMode,
  updateScene,
  updateMiss,
  updateStats
}) {
  const { notes: keyNotes } = song;
  const [duration, setDuration] = useState(0);
  const gameControllerWidth = 300;
  const visualizerWidth = window.innerWidth - gameControllerWidth;
  const canvasHeight = window.innerHeight - 90;
  const padHeight = 80;
  const noteHeight = 15;
  const delay = 3;
  const speed = 350;
  const trackWidth = gameControllerWidth / bindingKeys.length;
  const audioRef = useRef(null);
  const gameControlRef = useRef(null);
  const visualizerRef = useRef(null);
  const notesRef = useRef(keyNotes.map(note => {
    const { time, key } = note;
    return new Note(key, time, speed, delay, trackWidth, noteHeight, bindingKeys[key]);
  }));
  const waveRef = useRef(new window.Wave());
  const wave = waveRef.current;
  const keyPadsRef = useRef(bindingKeys.map((key, index) => new KeyPad(index, trackWidth, padHeight, key)));
  const notes = notesRef.current;
  const keyPads = keyPadsRef.current;
  const showResultScene = () => {
    updateScene(RESULT);
  };
  const engineRef = useRef(new Engine(gameControllerWidth, canvasHeight, speed, delay, notes, keyPads, updateMiss, updateStats, showResultScene));
  const engine = engineRef.current;
  const playMusicTimer = useRef(null);

  const updateDuration = e => setDuration(e.target.duration);
  const playMusic = useCallback(delay => {
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
  const onKeydown = useCallback(e => {
    const pressedKey = e.which;
    const ESC = 27;
    const isBindingKeyPressed = bindingKeys
      .filter(bindingKey => bindingKey === pressedKey)
      .length;

    if (isBindingKeyPressed) {
      engine.keyDown(pressedKey, bindingKeys.indexOf(pressedKey));
    } else if (pressedKey === ESC) {
      togglePlay();
    }
  }, [engine, togglePlay]);

  useEffect(() => {
    if (duration) {
      engine.setDuration(duration);
    }
  }, [engine, duration]);

  useEffect(() => {
    const gameControl = gameControlRef.current;
    const ctx = gameControl.getContext('2d');
    const visualizer = visualizerRef.current;
    const audio = audioRef.current;
    const options = {
      stroke: 10,
      colors: ['rgba(255, 255, 255, .3)'],
      bars: true
    };

    gameControl.width = gameControllerWidth;
    gameControl.height = canvasHeight;
    visualizer.width = visualizerWidth;
    visualizer.height = canvasHeight;

    engine.setContext(ctx);
    playEngin();
    playMusic(delay * 1000);

    if (visualizerRef.current) {
      wave.fromElement(audio, 'visualizer', options);
    }

    window.addEventListener('keydown', onKeydown);
    return () => {
      pauseEngin();
      audio.onended();
      clearTimeout(playMusicTimer.current);
      window.removeEventListener('keydown', onKeydown);
    };
  }, [wave, visualizerWidth, canvasHeight, engine, pauseEngin, playEngin, onKeydown, playMusic]);

  return (
    <Game
      song={song}
      score={stats.score}
      combo={stats.combo}
      maxCombo={stats.maxCombo}
      excellent={stats.excellent}
      good={stats.good}
      offBeat={stats.offBeat}
      miss={stats.miss}
      audioRef={audioRef}
      gameControlRef={gameControlRef}
      visualizerRef={visualizerRef}
      isPlayingMode={isPlayingMode}
      confirmLeave={confirmLeave}
      onAudioLoad={updateDuration}
    />
  );
}

const mapStateToProps = state => ({
  song: state.song.songById[state.game.currentSongId],
  stats: {
    score: state.game.score,
    combo: state.game.combo,
    maxCombo: state.game.maxCombo,
    excellent: state.game.excellent,
    good: state.game.good,
    offBeat: state.game.offBeat,
    miss: state.game.miss
  },
  isPlayingMode: state.game.isPlayingMode
});
const mapDispatchToProps = dispatch => ({
  updateScene: scene => dispatch(updateScene(scene)),
  updatePlayingMode: () => dispatch(updatePlayingMode()),
  updateMiss: () => dispatch(updateMiss()),
  updateStats: timeDiff => dispatch(updateStats(timeDiff))
});

export default connect(mapStateToProps, mapDispatchToProps)(GameContainer);
