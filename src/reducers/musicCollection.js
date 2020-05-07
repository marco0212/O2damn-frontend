import {
  INCREASE_CURRENT_SONG_INDEX,
  DECREASE_CURRENT_SONG_INDEX,
  UPDATE_SONGS_PENDING,
  UPDATE_SONGS_SUCCESS
} from "../constants";

const initialState = {
  fetchLoading: false,
  currentSongIndex: 0
};

export default function(state = initialState, action) {
  switch(action.type) {
    case UPDATE_SONGS_PENDING:
      return {
        ...state,
        fetchLoading: true
      };

    case UPDATE_SONGS_SUCCESS:
      return {
        ...state,
        fetchLoading: false
      };

    case INCREASE_CURRENT_SONG_INDEX:
      return {
        ...state,
        currentSongIndex : state.currentSongIndex + 1
      };

    case DECREASE_CURRENT_SONG_INDEX:
      return {
        ...state,
        currentSongIndex : state.currentSongIndex - 1
      };

    default:
      return {
        ...state
      }
  }
}