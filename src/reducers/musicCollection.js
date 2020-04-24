import { UPDATE_CURRENT_SONG_ID } from "../constants";

const initialState = {
  currentSongId: ''
};

export default function(state = initialState, action) {
  switch(action.type) {
    case UPDATE_CURRENT_SONG_ID:
      return {
        ...state,
        currentSongId: action.payload
      };

    default:
      return {
        ...state
      }
  }
}