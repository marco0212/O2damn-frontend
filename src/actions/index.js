import { UPDATE_SCENE } from '../constants';

export const updateScene = scene => ({
  type: UPDATE_SCENE,
  payload: scene
});
