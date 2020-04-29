import React from 'react';
import styled from 'styled-components';

export default function Modal({ isSelectLeave }) {
  return (
    <Wrapper>
      <strong>Would you like to leave?</strong>
      <ul>
        <SeletItem active={isSelectLeave}>Yes</SeletItem>
        <SeletItem active={!isSelectLeave}>No</SeletItem>
      </ul>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: fixed;
  z-index: 10;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, .8);
  text-align: center;
  color: #fff;

  & strong {
    display: block;
    font-size: 35px;
    margin-bottom: 30px;
  }
`;
const SeletItem = styled.li`
${props => props.active && 'color: #40bad5;'}
  font-size: 32px;
`;