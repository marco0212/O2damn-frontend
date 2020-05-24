import {
  UPDATE_SCENE,
  UPDATE_SONGS_PENDING,
  UPDATE_SONGS_SUCCESS,
  UPDATE_SONGS_FAILURE,
  UPDATE_GAME_SONG_ID,
  INCREASE_CURRENT_SONG_INDEX,
  DECREASE_CURRENT_SONG_INDEX,
  UPDATE_PLAYING_MODE,
  UPDATE_MISS,
  UPDATE_STATS,
  UPDATE_RANKING_PENDING,
  UPDATE_RANKING_SUCCESS,
  UPDATE_RANKING_FAILURE
} from '../constants';

export const updateScene = scene => ({
  type: UPDATE_SCENE,
  payload: scene
});
export const updatePlayingMode = () => ({
  type: UPDATE_PLAYING_MODE
});

export const updateSongsPending = () => ({
  type: UPDATE_SONGS_PENDING
});
export const updateSongsSuccess = items => ({
  type: UPDATE_SONGS_SUCCESS,
  payload: items
});
export const updateSongsFailure = error => ({
  type: UPDATE_SONGS_FAILURE,
  payload: error
});

export const increaseCurrentSongIndex = () => ({
  type: INCREASE_CURRENT_SONG_INDEX
});
export const decreaseCurrentSongIndex = () => ({
  type: DECREASE_CURRENT_SONG_INDEX
});

export const updateGameSongId = id => ({
  type: UPDATE_GAME_SONG_ID,
  payload: id
});

export const updateMiss = () => ({
  type: UPDATE_MISS
});
export const updateStats = diffTime => ({
  type: UPDATE_STATS,
  payload: diffTime
});

export const updateRankingPending = () => ({
  type: UPDATE_RANKING_PENDING
});
export const updateRankingSuccess = (id, ranking) => ({
  type: UPDATE_RANKING_SUCCESS,
  payload: { id, ranking }
});
export const updateRankingFailure = () => ({
  type: UPDATE_RANKING_FAILURE
});
