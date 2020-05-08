import React, { useEffect, useRef } from 'react';
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
import Loading from './Loading';

function McContainer({
  isLoading,
  songs,
  songIds,
  currentSongIndex,
  currentSong,
  getSongs,
  increaseSongIndex,
  decreaseSongIndex,
  updateGameSongId,
  updateScene
}) {
  const listRef = useRef(null);

  useEffect(() => {
    const list = listRef.current;
    const startGame = id => {
      updateGameSongId(id);
      updateScene(GAME);
    };
    const onKeydownHandler = e => {
      const key = e.which;
      const UPKEY = 38;
      const DOWNKEY = 40;
      const SPACE_BAR = 32;

      if (key === DOWNKEY || key === UPKEY) {
        let id;
        if (key === DOWNKEY) {
          if (currentSongIndex < songs.length - 1) {
            id = songIds[currentSongIndex + 1];
            increaseSongIndex();
          }
        } else if (key === UPKEY) {
          if (currentSongIndex > 0) {
            id = songIds[currentSongIndex - 1];
            decreaseSongIndex();
          }
        }

        if (id) {
          const target = list.querySelector(`li[data-id="${id}"]`);
          target.scrollIntoView({ behavior: "smooth" });
        }
      } else if (key === SPACE_BAR) {
        startGame(currentSong.id);
      }
    };

    window.addEventListener('keydown', onKeydownHandler);
    return () => {
      window.removeEventListener('keydown', onKeydownHandler);
    }
  }, [songs, songIds, currentSongIndex, currentSong.id, increaseSongIndex, decreaseSongIndex, updateGameSongId, updateScene]);

  useEffect(() => {
    getSongs();
  }, [getSongs]);

  return isLoading ? (
    <Loading />
  ) : (
    <MusicCollection
      listRef={listRef}
      songs={songs}
      currentSong={currentSong}
    />
  );
}

const mapStateToProps = state => ({
  isLoading: state.musicCollection.fetchLoading,
  songs: state.song.allSongIds.map(id => state.song.songById[id]),
  songIds: state.song.allSongIds,
  currentSongIndex: state.musicCollection.currentSongIndex,
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
