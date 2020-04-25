import { UPDATE_GAME_SONG_ID } from "../constants";

const initialState = {
  currentSongId: '',
  score: 0,
  maxCombo: 0,
  excellent: 0,
  good: 0,
  miss: 0
};

export default function(state = initialState, action) {
  switch(action.type) {
    case UPDATE_GAME_SONG_ID:
      return {
        ...state,
        currentSongId: action.payload
      };

    default:
      return {
        ...state
      };
  }
}