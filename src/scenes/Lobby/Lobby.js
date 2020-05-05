import React from 'react';
import styled from 'styled-components';
import lobby_bg from '../../assets/lobby_bg.png';
export default function Lobby() {
  return (
    <Wrapper style={{ backgroundImage: `url(${lobby_bg})`}}>
      <h1>O2 Damn</h1>
      <p>Press Space</p>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: relative;
  background: no-repeat center center / cover;
  cursor: none;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  color: #fff;

  h1 {
    position: relative;
    font-size: 80px;
    font-weight: bold;
    margin-bottom: 30px;
  }

  p {
    position: relative;
    font-size: 30px;
  }

  &:before {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(0, 0, 0, .5);
  }
`;
