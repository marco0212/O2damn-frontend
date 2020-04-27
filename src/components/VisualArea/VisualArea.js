import React from 'react';
import styled from 'styled-components';

export default function VisualArea() {
  return (
    <Wrapper>VisualArea</Wrapper>
  );
}

const Wrapper = styled.div`
  background-color: rgba(139, 195, 74, 0.5);
  grid-column: 2;
  grid-row: 1;
`;
