import React from 'react';
import styled from 'styled-components';
import Visualizer from '../Visualizer/Container';

export default function VisualArea({ canvasRef, bg }) {
  return (
    <Wrapper style={{ backgroundImage: `url(${bg})` }}>
      <Visualizer
        canvasRef={canvasRef}
      />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: relative;
  background: #323232 no-repeat center / cover;
  grid-column: 2;
  grid-row: 1;

  &:after {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(0, 0, 0, .3);
    z-index:1;
  }
`;
