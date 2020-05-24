import { UPDATE_SCENE, LOBBY } from '../constants';

const initialState = {
  currentScene: LOBBY
};

export default function (state = initialState, action) {
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
