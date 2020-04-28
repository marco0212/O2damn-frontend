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
  grid-column: 1;
  grid-row: 1;
  background-color: #444b50;
`;
