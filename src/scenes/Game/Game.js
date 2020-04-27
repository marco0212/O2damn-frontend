import React from 'react';
import styled from 'styled-components';
import ControlArea from '../../components/ControlArea/ControlArea';
import VisualArea from '../../components/VisualArea/VisualArea';
import StatArea from '../../components/StatArea/StatArea';

export default function Game () {
  return (
    <Wrapper>
      <ControlArea />
      <VisualArea />
      <StatArea />
    </Wrapper>
  );
}

const Wrapper = styled.div`
height: 100%;
  display: grid;
  grid-template-rows: 1fr 90px;
  grid-template-columns: 300px 1fr;
`;
