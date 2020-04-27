import React from 'react';
import styled from 'styled-components';

export default function GameControl({ refs }) {
  return <Wrapper ref={refs} />;
}

const Wrapper = styled.canvas`
  display: block;
`;
