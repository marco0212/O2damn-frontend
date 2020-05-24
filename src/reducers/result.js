import { UPDATE_RANKING_PENDING, UPDATE_RANKING_SUCCESS, UPDATE_RANKING_FAILURE, UPDATE_SCENE } from '../constants';

const initialState = {
  fetchLoading: false,
  isSubmit: false
};

export default function (state = initialState, action) {
  switch (action.type) {
    case UPDATE_SCENE:
      if (action.payload === 'RESULT') {
        return {
          ...initialState
        };
      }
      return {
        ...state
      };

    case UPDATE_RANKING_PENDING:
      return {
        ...state,
        fetchLoading: true
      };

    case UPDATE_RANKING_SUCCESS:
    case UPDATE_RANKING_FAILURE:
      return {
        ...state,
        fetchLoading: false,
        isSubmit: true
      };
    default:
      return {
        ...state
      };
  }
}
