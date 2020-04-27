import React, { useEffect } from 'react';
import MusicCollection from './MusicCollection';
import { connect } from 'react-redux';
import { getSongs } from '../../thunks';
import {
  increaseCurrentSongIndex,
  decreaseCurrentSongIndex,
  updateGameSongId,
  updateScene
} from '../../actions';
import { GAME } from '../../constants';

function McContainer({
  songs,
  currentSong,
  getSongs,
  increaseSongIndex,
  decreaseSongIndex,
  updateGameSongId,
  updateScene
}) {
  useEffect(() => {
    const startGame = id => {
      updateGameSongId(id);
      updateScene(GAME);
    };
    const onKeydownHandler = e => {
      const key = e.which;
      const UPKEY = 38;
      const DOWNKEY = 40;
      const SPACE_BAR = 32;

      if (key === DOWNKEY) {
        increaseSongIndex();
      } else if (key === UPKEY) {
        decreaseSongIndex();
      } else if (key === SPACE_BAR) {
        startGame(currentSong.id);
      }
    };

    window.addEventListener('keydown', onKeydownHandler);
    return () => {
      window.removeEventListener('keydown', onKeydownHandler);
    }
  }, [songs, currentSong.id, increaseSongIndex, decreaseSongIndex, updateGameSongId, updateScene]);

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
  decreaseSongIndex: () => dispatch(decreaseCurrentSongIndex()),
  updateGameSongId: (id) => dispatch(updateGameSongId(id)),
  updateScene: (scene) => dispatch(updateScene(scene))
});

export default connect(mapStateToProps, mapDispatchToProps)(McContainer);
