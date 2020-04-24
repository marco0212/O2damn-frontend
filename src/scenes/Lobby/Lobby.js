import React from 'react';

export default function Lobby({ onButtonClick }) {
  return (
    <>
      <h1>O2 Damn</h1>
      <p>online, web-based rhythm game</p>
      <button onClick={onButtonClick}>Enter Game</button>
    </>
  );
}
