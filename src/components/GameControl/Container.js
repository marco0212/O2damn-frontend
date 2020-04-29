import React from 'react';
import GameControl from './GameControl';

function CanvasContainer({ canvasRef }) {
  return <GameControl refs={canvasRef} />;
}

export default CanvasContainer;
