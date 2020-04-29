import React, { useRef } from 'react';
import Game from './Game';
import { connect } from 'react-redux';

function GameContainer({
  song,
  score,
  maxCombo,
  excellent,
  good,
  offBeat,
  miss
}) {
  const audioRef = useRef(null);
  const playMusic = () => audioRef.current.play();
  const pauseMusic = () => audioRef.current.pause();
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
      playMusic={playMusic}
      pauseMusic={pauseMusic}
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
  miss: state.game.miss
});

export default connect(mapStateToProps)(GameContainer);
