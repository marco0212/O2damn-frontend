const initialState = {
  allSongIds: [],
  songById: {}
};

export default function (state = initialState, action) {
  switch (action.type) {
    default:
      return {
        ...state
      };
  }
}
