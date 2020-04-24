import { combineReducers } from 'redux';
import ui from './ui';
import song from './song';

export default combineReducers({
  ui,
  song
});
