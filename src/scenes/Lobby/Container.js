import React, { useEffect } from 'react';
import Lobby from './Lobby';
import { connect } from 'react-redux';
import { updateScene } from '../../actions';
import { MUSIC_COLLECTION } from '../../constants';

function LobbyContainer({ updateScene }) {
  const enterGame = e => {
    const key = e.which;
    const SPACE_BAR = 32;

    if (key === SPACE_BAR) {
      updateScene(MUSIC_COLLECTION);
    }
  }

  useEffect(() => {
    window.addEventListener('keydown', enterGame);
    return () => {
      window.removeEventListener('keydown', enterGame);
    }
  });
  return (
    <Lobby />
  );
}

const mapDispatchToProps = dispatch => ({
  updateScene: scene => dispatch(updateScene(scene))
});

export default connect(null, mapDispatchToProps)(LobbyContainer);
