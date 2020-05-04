import React, { useState } from 'react';
import Result from './Result';
import { connect } from 'react-redux';
import { updateRanking } from '../../thunks';
import { updateScene, updateGameSongId } from '../../actions';
import { GAME, MUSIC_COLLECTION } from '../../constants';

function ResultContainer({
  song,
  stats,
  updateRankings,
  isLoading,
  isSubmit,
  updateScene,
  updateGameSongId
}) {
  const [username, setUsername] = useState('');
  const updateUsernameHandler = (e) => setUsername(e.target.value);

  const {
    id,
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
  const updateRanks = (e) => {
    e.preventDefault();
    if (username.trim() && !isSubmit && !isLoading) {
      const newRanking = [...ranking, { username, score }].sort((b, a) => a - b);
      updateRankings(id, newRanking); 
    }
  };
  const playAgain = () => {
    updateGameSongId(id);
    updateScene(GAME);
  };
  const goMusicCollection = () => updateScene(MUSIC_COLLECTION);
  return (
    <Result
      isLoading={isLoading}
      isSubmit={isSubmit}
      songTitle={title}
      artistName={artistName}
      songRank={ranking}
      score={score}
      maxCombo={maxCombo}
      excellent={excellent}
      good={good}
      offBeat={offBeat}
      miss={miss}
      onFormSubmit={updateRanks}
      username={username}
      onInputChange={updateUsernameHandler}
      onPlayAgainButtonClick={playAgain}
      onGoToMusicCollectionButtonClick={goMusicCollection}
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
  },
  isLoading: state.result.fetchLoading,
  isSubmit: state.result.isSubmit
});
const mapDispatchToProps = dispatch => ({
  updateRankings: (id, ranking) => dispatch(updateRanking(id, ranking)),
  updateGameSongId: id => dispatch(updateGameSongId(id)),
  updateScene: scene => dispatch(updateScene(scene))
});

export default connect(mapStateToProps, mapDispatchToProps)(ResultContainer);
