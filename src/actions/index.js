import { UPDATE_SCENE, UPDATE_SONGS_PENDING, UPDATE_SONGS_SUCCESS, UPDATE_SONGS_FAILURE } from '../constants';

export const updateScene = scene => ({
  type: UPDATE_SCENE,
  payload: scene
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
