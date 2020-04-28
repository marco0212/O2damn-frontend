import React, { useRef, useEffect } from 'react';
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
  
  useEffect(() => {
    const audio = audioRef.current;

    setTimeout(() => {
      audio.play();
    }, 3000);
  }, []);
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
