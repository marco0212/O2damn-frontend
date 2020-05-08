import { UPDATE_SCENE, LOBBY, UPDATE_PLAYING_MODE } from "../constants";

const initialState = {
  currentScene: LOBBY,
  isPlayingMode: true
};

export default function(state = initialState, action) {
  switch (action.type) {
    case UPDATE_SCENE:
      return {
        ...state,
        currentScene: action.payload
      };

    case UPDATE_PLAYING_MODE:
      return {
        ...state,
        isPlayingMode: !state.isPlayingMode
      };

    default:
      return {
        ...state
      };
  }
}