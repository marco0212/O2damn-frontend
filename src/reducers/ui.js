import { UPDATE_SCENE, LOBBY, UPDATE_CURRENT_SONG_ID } from "../constants";

const initialState = {
  currentScene: LOBBY,
  currentSongId: ''
};

export default function(state = initialState, action) {
  switch (action.type) {
    case UPDATE_SCENE:
      return {
        ...state,
        currentScene: action.payload
      };

    case UPDATE_CURRENT_SONG_ID:
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