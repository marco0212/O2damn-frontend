import React from 'react';
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
  return (
    <Game
      song={song}
      score={score}
      maxCombo={maxCombo}
      excellent={excellent}
      good={good}
      offBeat={offBeat}
      miss={miss}
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
