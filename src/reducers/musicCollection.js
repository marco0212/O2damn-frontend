import {
  INCREASE_CURRENT_SONG_INDEX,
  DECREASE_CURRENT_SONG_INDEX
} from "../constants";

const initialState = {
  currentSongIndex: 0
};

export default function(state = initialState, action) {
  switch(action.type) {
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