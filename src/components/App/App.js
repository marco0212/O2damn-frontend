import React from 'react';
import MusicCollection from '../../scenes/MusicCollection/Container';
import Game from '../../scenes/Game/Container';
import Result from '../../scenes/Result/Result';
import Lobby from '../../scenes/Lobby/Container';
import { MUSIC_COLLECTION, GAME, RESULT } from '../../constants';

export default function App ({ status }) {
  switch (status) {
    case MUSIC_COLLECTION:
      return <MusicCollection />;

    case GAME:
      return <Game />;

    case RESULT:
      return <Result />;

    default:
      return <Lobby />;
  }
}
