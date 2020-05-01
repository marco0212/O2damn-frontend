import React from 'react';
import styled, { keyframes } from 'styled-components';

export default function Indicator({ stat, combo }) {
  return (
    <Wrapper>
      {
        stat === 'miss' ? (
          <p>{stat}</p>
        ) : (
          <p>{combo} {stat}</p>
        )
      }
    </Wrapper>
  );
}

const bouncedIn = keyframes`
  0% {
    transform: translateY(-20px);
  }

  20% {
    transform: translateY(0px);
  }

  60% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`;
const Wrapper = styled.div`
  display: none;
  position: absolute;
  top: 45%;
  left: 0;
  right: 0;
  color: #fff;
  text-align: center;
  font-size: 40px;
  font-weight: bold;
  animation: ${bouncedIn} 1s ease-out forwards;

  &:last-of-type {
    display: block;
  }
`;
