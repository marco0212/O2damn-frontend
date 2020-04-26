import React from 'react';
import styled from 'styled-components';

export default function Canvan({ refs }) {
  return <Canvas ref={refs} />;
}

const Canvas = styled.canvas`
  display: block;
  margin: auto;
  border: 1px solid #000;
`;
