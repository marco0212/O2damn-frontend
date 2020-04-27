import React, { useEffect } from 'react';
import MusicCollection from './MusicCollection';
import { connect } from 'react-redux';
import { getSongs } from '../../thunks';
import { updateCurrentSongId } from '../../actions';

function McContainer({
  songs,
  currentSong,
  getSongs,
  updateCurrentSongId
}) {
  useEffect(() => {
    const updateCurrentSong = e => {
      const key = e.which;
      const UPKEY = 38;
      const DOWNKEY = 40;

      if (key === UPKEY) {
        console.log('Up press');
      } else if (key === DOWNKEY) {
        console.log('Down press');
      }
    };

    if (songs.length && !currentSong.id) {
      updateCurrentSongId(songs[0].id);
    }

    window.addEventListener('keydown', updateCurrentSong);
    return () => {
      window.removeEventListener('keydown', updateCurrentSong);
    }
  }, [songs, currentSong.id, updateCurrentSongId]);

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
  currentSong: state.song.songById[state.musicCollection.currentSongId] || {}
});
const mapDispatchToProps = dispatch => ({
  getSongs: () => dispatch(getSongs()),
  updateCurrentSongId: id => dispatch(updateCurrentSongId(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(McContainer);
