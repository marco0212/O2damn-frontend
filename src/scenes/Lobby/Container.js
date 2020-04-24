import React from 'react';
import Lobby from './Lobby';
import { connect } from 'react-redux';
import { updateScene } from '../../actions';

function LobbyContainer({ updateScene }) {
  const startGame = () => {
    updateScene('MusicCollection');
  };
  return (
    <Lobby
      onButtonClick={startGame}
    />
  );
}

const mapStateToProps = state => ({});
const mapDispatchToProps = dispatch => ({
  updateScene: scene => dispatch(updateScene(scene))
});

export default connect(mapStateToProps, mapDispatchToProps)(LobbyContainer);
