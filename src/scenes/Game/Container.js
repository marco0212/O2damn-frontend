import React from 'react';
import Game from './Game';
import { connect } from 'react-redux';

function GameContainer() {
  return <Game />;
}

export default connect()(GameContainer);
