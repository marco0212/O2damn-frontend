import React from 'react';
import styled from 'styled-components';
import Visualizer from '../Visualizer/Container';

export default function VisualArea({ canvasRef }) {
  return (
    <Wrapper>
      <Visualizer
        canvasRef={canvasRef}
      />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  background-color: #323232;
  grid-column: 2;
  grid-row: 1;
`;
