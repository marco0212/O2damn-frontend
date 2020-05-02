import { UPDATE_GAME_SONG_ID, UPDATE_MISS, UPDATE_STATS } from "../constants";
import getStatNameByTime from "../utils/judgement";

const initialState = {
  currentSongId: '',
  score: 0,
  combo: 0,
  maxCombo: 0,
  excellent: 0,
  good: 0,
  offBeat: 0,
  miss: 0
};

export default function(state = initialState, action) {
  switch(action.type) {
    case UPDATE_GAME_SONG_ID:
      return {
        ...initialState,
        currentSongId: action.payload
      };

    case UPDATE_MISS:
      return {
        ...state,
        miss: state.miss + 1,
        combo: 0
      };

    case UPDATE_STATS:
      const timeDiff = action.payload;
      const updateCombo = state.combo + 1;
      const nextState = Object.assign({}, state);
      const statName = getStatNameByTime(timeDiff);
      const scoreTable = {
        offBeat: 30,
        good: 50,
        excellent: 60
      };

      nextState[statName] += 1;
      nextState.score += scoreTable[statName] * updateCombo;

      return {
        ...nextState,
        combo: updateCombo,
        maxCombo: updateCombo > state.maxCombo ? updateCombo : state.maxCombo
      };

    default:
      return {
        ...state
      };
  }
}