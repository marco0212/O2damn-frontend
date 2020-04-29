import { UPDATE_SCENE, LOBBY, TOGGLE_UPDATE_PLAYING_MODE } from "../constants";

const initialState = {
  currentScene: LOBBY,
  game: {
    isPlayingMode: true
  }
};

export default function(state = initialState, action) {
  switch (action.type) {
    case UPDATE_SCENE:
      return {
        ...state,
        currentScene: action.payload
      };

    case TOGGLE_UPDATE_PLAYING_MODE:
      return {
        ...state,
        game: {
          ...state.game,
          isPlayingMode: !state.game.isPlayingMode
        }
      };
    default:
      return {
        ...state
      };
  }
}