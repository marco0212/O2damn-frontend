import React from 'react';
import Result from './Result';
import { connect } from 'react-redux';

function ResultContainer({ song, stats }) {
  const {
    title,
    artistName,
    ranking
  } = song;
  const {
    score,
    maxCombo,
    excellent,
    good,
    offBeat,
    miss
  } = stats;
  return (
    <Result
      songTitle={title}
      artistName={artistName}
      songRank={ranking}
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
  stats: {
    score: state.game.score,
    maxCombo: state.game.maxCombo,
    excellent: state.game.excellent,
    good: state.game.good,
    offBeat: state.game.offBeat,
    miss: state.game.miss,
  }
});

export default connect(mapStateToProps)(ResultContainer);
