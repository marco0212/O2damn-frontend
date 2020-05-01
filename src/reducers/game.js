import { UPDATE_GAME_SONG_ID, UPDATE_MISS } from "../constants";

const initialState = {
  currentSongId: '',
  score: 0,
  combo: 0,
  excellent: 0,
  good: 0,
  offBeat: 0,
  miss: 0
};

export default function(state = initialState, action) {
  switch(action.type) {
    case UPDATE_GAME_SONG_ID:
      return {
        ...state,
        currentSongId: action.payload
      };

    case UPDATE_MISS:
      return {
        ...state,
        miss: state.miss + 1,
        combo: 0
      };
    default:
      return {
        ...state
      };
  }
}