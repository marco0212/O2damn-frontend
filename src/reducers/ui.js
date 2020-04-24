import { UPDATE_SCENE } from "../constants";

const initialState = {
  currentScene: 'Lobby'
};

export default function(state = initialState, action) {
  switch (action.type) {
    case UPDATE_SCENE:
      return {
        ...state,
        currentScene: action.payload
      };

    default:
      return {
        ...state
      };
  }
}