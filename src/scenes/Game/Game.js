import React from 'react';
import styled from 'styled-components';
import ControlArea from '../../components/ControlArea/ControlArea';
import VisualArea from '../../components/VisualArea/VisualArea';
import StatArea from '../../components/StatArea/StatArea';

export default function Game ({
  song,
  score,
  maxCombo,
  excellent,
  good,
  offBeat,
  miss
}) {
  const { title } = song;
  return (
    <Wrapper>
      <ControlArea />
      <VisualArea />
      <StatArea
        songTitle={title}
        score={score}
        excellent={excellent}
        good={good}
        offBeat={offBeat}
        miss={miss}
      />
    </Wrapper>
  );
}

const Wrapper = styled.div`
height: 100%;
  display: grid;
  grid-template-rows: 1fr 90px;
  grid-template-columns: 300px 1fr;
`;
