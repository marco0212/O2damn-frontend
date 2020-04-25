import { updateSongsPending, updateSongsSuccess, updateSongsFailure } from "../actions";
import { getSongsAPI } from "../api";

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
