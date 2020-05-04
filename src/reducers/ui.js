import { UPDATE_SCENE, LOBBY, UPDATE_PLAYING_MODE, UPDATE_MISS, UPDATE_STATS, UPDATE_GAME_SONG_ID } from "../constants";
import getStatNameByTime from "../utils/judgement";

const initialState = {
  currentScene: LOBBY,
  isPlayingMode: true,
  indicators: []
};

export default function(state = initialState, action) {
  let newIndicators;
  switch (action.type) {
    case UPDATE_GAME_SONG_ID:
      return {
        ...state,
        indicators: []
      };

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
      newIndicators = [statName];
      return {
        ...state,
        indicators: newIndicators
      };
    case UPDATE_MISS:
      newIndicators = ['miss'];
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