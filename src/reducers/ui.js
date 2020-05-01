import { UPDATE_SCENE, LOBBY, UPDATE_PLAYING_MODE, UPDATE_MISS, UPDATE_STATS } from "../constants";
import getStatNameByTime from "../utils/judgement";

const initialState = {
  currentScene: LOBBY,
  isPlayingMode: true,
  indicators: []
};

export default function(state = initialState, action) {
  let newIndicators;
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

    case UPDATE_STATS:
      const statName = getStatNameByTime(action.payload);
      newIndicators = [...state.indicators, statName];
      return {
        ...state,
        indicators: newIndicators
      };
    case UPDATE_MISS:
      newIndicators = [...state.indicators, 'miss'];
      return {
        ...state,
        indicators: newIndicators
      };

    default:
      return {
        ...state
      };
  }
}