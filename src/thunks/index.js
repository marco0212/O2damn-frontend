import {
  updateSongsPending,
  updateSongsSuccess,
  updateSongsFailure,
  updateRankingPending,
  updateRankingSuccess,
  updateRankingFailure
} from "../actions";
import { getSongsAPI, updateRankingAPI } from "../api";

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

export const updateRanking = (id, ranks) => async dispatch => {
  try {
    dispatch(updateRankingPending());

    const response = await updateRankingAPI(id, ranks);
    const { song: { ranking } } = await response.json();

    dispatch(updateRankingSuccess(id, ranking));
  } catch (error) {
    dispatch(updateRankingFailure(error));
  }
};
