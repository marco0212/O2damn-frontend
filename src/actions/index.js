import {
  UPDATE_SCENE,
  UPDATE_SONGS_PENDING,
  UPDATE_SONGS_SUCCESS,
  UPDATE_SONGS_FAILURE,
  UPDATE_GAME_SONG_ID,
  INCREASE_CURRENT_SONG_INDEX,
  DECREASE_CURRENT_SONG_INDEX
} from '../constants';

export const updateScene = scene => ({
  type: UPDATE_SCENE,
  payload: scene
});

export const updateGameSongId = id => ({
  type: UPDATE_GAME_SONG_ID,
  payload: id
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

export const increaseCurrentSongIndex = () => ({
  type: INCREASE_CURRENT_SONG_INDEX
});
export const decreaseCurrentSongIndex = () => ({
  type: DECREASE_CURRENT_SONG_INDEX
});
