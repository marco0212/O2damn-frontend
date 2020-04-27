import React from 'react';
import styled from 'styled-components';
import GameControl from '../GameControl/Container';

export default function ControlArea() {
  return (
    <Wrapper>
      <GameControl />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  background-color: rgba(255, 152, 0, 0.5);
  grid-column: 1;
  grid-row: 1;
`;
