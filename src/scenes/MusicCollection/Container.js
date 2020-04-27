import React, { useEffect } from 'react';
import MusicCollection from './MusicCollection';
import { connect } from 'react-redux';
import { getSongs } from '../../thunks';
import {
  increaseCurrentSongIndex,
  decreaseCurrentSongIndex
} from '../../actions';

function McContainer({
  songs,
  currentSong,
  getSongs,
  increaseSongIndex,
  decreaseSongIndex
}) {
  useEffect(() => {
    const updateCurrentSong = e => {
      const key = e.which;
      const UPKEY = 38;
      const DOWNKEY = 40;

      if (key === DOWNKEY) {
        increaseSongIndex();
      } else if (key === UPKEY) {
        decreaseSongIndex();
      }
    };

    window.addEventListener('keydown', updateCurrentSong);
    return () => {
      window.removeEventListener('keydown', updateCurrentSong);
    }
  }, [songs, currentSong.id, increaseSongIndex, decreaseSongIndex]);

  useEffect(() => {
    getSongs();
  }, [getSongs]);
  return (
    <MusicCollection
      songs={songs}
      currentSong={currentSong}
    />
  );
}

const mapStateToProps = state => ({
  songs: state.song.allSongIds.map(id => state.song.songById[id]),
  currentSong: state.song.songById[state.song.allSongIds[state.musicCollection.currentSongIndex]] || {}
});
const mapDispatchToProps = dispatch => ({
  getSongs: () => dispatch(getSongs()),
  increaseSongIndex: () => dispatch(increaseCurrentSongIndex()),
  decreaseSongIndex: () => dispatch(decreaseCurrentSongIndex())
});

export default connect(mapStateToProps, mapDispatchToProps)(McContainer);
