import React from 'react';
import styled from 'styled-components';

export default function Game () {
  return <Canvas />;
}

const Canvas = styled.canvas`
  display: block;
  margin: auto;
  width: 500px;
  height: 100%;
  border: 1px solid #000;
`;
