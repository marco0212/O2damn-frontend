const initialState = {
  currentSongId: '',
  score: 0,
  maxCombo: 0,
  excellent: 0,
  good: 0,
  miss: 0
};

export default function(state = initialState, action) {
  switch(action.type) {
    default:
      return {
        ...state
      };
  }
}