import { UPDATE_GAME_SONG_ID, UPDATE_MISS, UPDATE_STATS } from "../constants";

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
        ...state,
        currentSongId: action.payload
      };

    case UPDATE_MISS:
      return {
        ...state,
        miss: state.miss + 1,
        combo: 0
      };

    case UPDATE_STATS:
      const timeGap = action.payload;
      const updateCombo = state.combo + 1;
      const nextState = Object.assign({}, state);
      const scoreTable = {
        offBeat: 30,
        good: 50,
        excellent: 60
      };

      if (timeGap > 0.2) {
        nextState.offBeat += 1;
        nextState.score += updateCombo * scoreTable.offBeat;
      } else if (timeGap > 0.1) {
        nextState.good += 1;
        nextState.score += updateCombo * scoreTable.good;
      } else {
        nextState.excellent += 1;
        nextState.score += updateCombo * scoreTable.excellent;
      }

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