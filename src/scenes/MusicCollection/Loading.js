import React from 'react';
import styled from 'styled-components';

export default function Loading() {
  return (
    <Wrapper>
      <p>Loading</p>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 30px;
`;
