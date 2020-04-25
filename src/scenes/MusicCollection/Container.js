import React, { useEffect } from 'react';
import MusicCollection from './MusicCollection';
import { connect } from 'react-redux';
import { getSongs } from '../../thunks';
import { updateCurrentSongId, updateScene, updateGameSongId } from '../../actions';
import { GAME } from '../../constants';

function McContainer({ songs, currentSong, getSongs, activeSong, updateScene, updateGameSongId }) {
  const startGame = (id) => {
    updateGameSongId(id);
    updateScene(GAME);
  };

  useEffect(() => {
    getSongs();
  }, [getSongs]);
  return (
    <MusicCollection
      songs={songs}
      currentSong={currentSong}
      onSongItemClick={activeSong}
      onStartClick={startGame}
    />
  );
}

const mapStateToProps = state => ({
  songs: state.song.allSongIds.map(id => state.song.songById[id]),
  currentSong: state.song.songById[state.musicCollection.currentSongId] || {}
});
const mapDispatchToProps = dispatch => ({
  getSongs: () => dispatch(getSongs()),
  activeSong: id => dispatch(updateCurrentSongId(id)),
  updateScene: scene => dispatch(updateScene(scene)),
  updateGameSongId: id => dispatch(updateGameSongId(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(McContainer);
