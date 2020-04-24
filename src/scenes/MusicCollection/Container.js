import React, { useEffect } from 'react';
import MusicCollection from './MusicCollection';
import { connect } from 'react-redux';
import { getSongs, startGame } from '../../thunks';
import { updateCurrentSongId } from '../../actions';

function McContainer({ songs, currentSong, getSongs, activeSong, startGame }) {
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
  currentSong: state.song.songById[state.ui.currentSongId] || {}
});
const mapDispatchToProps = dispatch => ({
  getSongs: () => dispatch(getSongs()),
  activeSong: (id) => dispatch(updateCurrentSongId(id)),
  startGame: (id) => dispatch(startGame(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(McContainer);
