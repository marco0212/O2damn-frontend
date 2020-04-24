import React from 'react';
import Lobby from '../../scenes/Lobby/Lobby';

export default function App ({ status }) {
  switch (status) {
    default:
      return <Lobby />;
  }
}
