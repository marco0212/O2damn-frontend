import React from 'react';
import styled from 'styled-components';

export default function Visualizer({ canvasRef }) {
  return (
    <Canvas
      ref={canvasRef}
    />
  );
}

const Canvas = styled.canvas``;
