import game, { initialState } from './game';
import { UPDATE_GAME_SONG_ID, UPDATE_MISS } from '../constants';

describe('game reducer', () => {
  it('should handle initial state', () => {
    expect(game(undefined, {})).toEqual(initialState);
  });

  it('should initialize state when game id is updated', () => {
    expect(game(initialState, {
      type: UPDATE_GAME_SONG_ID,
      payload: 'Song id'
    })).toEqual({ ...initialState, currentSongId: 'Song id' });
  });

  it('should increase miss count when be given Update Miss type action', () => {
    const state = initialState;

    expect(game(initialState, {
      type: UPDATE_MISS
    })).toEqual({
      ...initialState,
      miss: initialState.miss + 1,
      combo: 0,
      indicators: ['miss']
    });
  });
});
