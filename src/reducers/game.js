import { UPDATE_GAME_SONG_ID, UPDATE_MISS, UPDATE_STATS, UPDATE_PLAYING_MODE } from "../constants";
import getStatNameByTime from "../utils/judgement";

const initialState = {
  currentSongId: '',
  score: 0,
  combo: 0,
  maxCombo: 0,
  excellent: 0,
  good: 0,
  offBeat: 0,
  miss: 0,
  indicators: [],
  isPlayingMode: true
};

export default function(state = initialState, action) {
  let newIndicators;

  switch(action.type) {
    case UPDATE_GAME_SONG_ID:
      return {
        ...initialState,
        indicators: [],
        currentSongId: action.payload
      };

    case UPDATE_MISS:
      newIndicators = ['miss'];

      return {
        ...state,
        miss: state.miss + 1,
        combo: 0,
        indicators: newIndicators,
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

      newIndicators = [statName];
      nextState[statName] += 1;
      nextState.score += scoreTable[statName] * updateCombo;

      return {
        ...nextState,
        combo: updateCombo,
        maxCombo: updateCombo > state.maxCombo ? updateCombo : state.maxCombo,
        indicators: newIndicators
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
