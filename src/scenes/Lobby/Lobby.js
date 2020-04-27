import React from 'react';
import styled from 'styled-components';

export default function Lobby() {
  return (
    <Wrapper>
      <h1>O2 Damn</h1>
      <p>Press Space</p>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;

  h1 {
    font-size: 80px;
    font-weight: bold;
    margin-bottom: 30px;
  }
  p {
    font-size: 30px;
  }
`;
