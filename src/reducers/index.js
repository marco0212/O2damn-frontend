import { combineReducers } from 'redux';
import ui from './ui';
import song from './song';
import game from './game';

export default combineReducers({
  ui,
  song,
  game
});
