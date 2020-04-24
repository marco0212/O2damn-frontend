import { updateSongsPending, updateSongsSuccess, updateSongsFailure, updateScene, fetchSongPending, fetchSongSuccess, fetchSongFailure } from "../actions";
import { getSongsAPI, getSongByIdAPI } from "../api";
import { GAME } from "../constants";

export const getSongs = () => async dispatch => {
  try {
    dispatch(updateSongsPending());

    const response = await getSongsAPI();
    const { items } = await response.json();

    dispatch(updateSongsSuccess(items));
  } catch (error) {
    dispatch(updateSongsFailure(error.message));
  }
}

export const startGame = (id) => async dispatch => {
  try {
    dispatch(fetchSongPending());

    const response = await getSongByIdAPI(id);
    const { song } = await response.json();

    dispatch(fetchSongSuccess(song));
    dispatch(updateScene(GAME));
  } catch (error) {
    dispatch(fetchSongFailure(error));
  }
};
