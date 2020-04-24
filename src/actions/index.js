import { UPDATE_SCENE, UPDATE_SONGS_PENDING, UPDATE_SONGS_SUCCESS, UPDATE_SONGS_FAILURE, UPDATE_CURRENT_SONG_ID, FETCH_SONG_PENDING, FETCH_SONG_SUCCESS, FETCH_SONG_FAILURE } from '../constants';

export const updateScene = scene => ({
  type: UPDATE_SCENE,
  payload: scene
});
export const updateCurrentSongId = id => ({
  type: UPDATE_CURRENT_SONG_ID,
  payload: id
});

export const fetchSongPending = () => ({
  type: FETCH_SONG_PENDING
});
export const fetchSongSuccess = (song) => ({
  type: FETCH_SONG_SUCCESS,
  payload: song
});
export const fetchSongFailure = (error) => ({
  type: FETCH_SONG_FAILURE,
  payload: error
});

export const updateSongsPending = () => ({
  type: UPDATE_SONGS_PENDING
});
export const updateSongsSuccess = (items) => ({
  type: UPDATE_SONGS_SUCCESS,
  payload: items
});
export const updateSongsFailure = (error) => ({
  type: UPDATE_SONGS_FAILURE,
  payload: error
});
