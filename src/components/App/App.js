import React from 'react';
import MusicCollection from '../../scenes/MusicCollection/MusicCollection';
import Game from '../../scenes/Game/Game';
import Result from '../../scenes/Result/Result';
import Lobby from '../../scenes/Lobby/Container';

export default function App ({ status }) {
  switch (status) {
    case 'MusicCollection':
      return <MusicCollection />;

    case 'Game':
      return <Game />;

    case 'Result':
      return <Result />;

    default:
      return <Lobby />;
  }
}
