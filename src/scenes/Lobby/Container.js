import React, { useEffect } from 'react';
import Lobby from './Lobby';
import { connect } from 'react-redux';
import { updateScene } from '../../actions';
import { MUSIC_COLLECTION } from '../../constants';

function LobbyContainer({ updateScene }) {
  useEffect(() => {
    window.addEventListener('keydown', enterGame);
    return () => {
      window.removeEventListener('keydown', enterGame);
    }
  })
  const enterGame = e => {
    if (e.which === 32) {
      updateScene(MUSIC_COLLECTION);
    }
  }
  return (
    <Lobby />
  );
}

const mapStateToProps = state => ({});
const mapDispatchToProps = dispatch => ({
  updateScene: scene => dispatch(updateScene(scene))
});

export default connect(mapStateToProps, mapDispatchToProps)(LobbyContainer);
