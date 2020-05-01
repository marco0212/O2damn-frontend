import React from 'react';
import styled from 'styled-components';

export default function StatArea({
  songTitle,
  score,
  excellent,
  good,
  offBeat,
  maxCombo,
  miss
}) {
  return (
    <Wrapper>
      <StatBox>
        <h6>Score</h6>
        <p>{score}</p>
      </StatBox>
      <StatBox>
        <h6>Now playing</h6>
        <p>{songTitle}</p>
      </StatBox>
      <StatBox>
        <h6>Stats</h6>
        <ul>
          <li>
            <strong>Excellent</strong> {excellent}
          </li>
          <li>
            <strong>Good</strong> {good}
          </li>
          <li>
            <strong>Off Beat</strong> {offBeat}
          </li>
          <li>
            <strong>Miss</strong> {miss}
          </li>
        </ul>
      </StatBox>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: relative;
  grid-column: 1 / 3;
  grid-row: 2;
  padding: 15px;
  display: grid;
  grid-gap: 15px;
  grid-template-columns: repeat(3, 1fr);
  color: #ebebeb;
  background: rgb(0,78,146);
  background: linear-gradient(180deg, rgba(0,78,146,1) 19%, rgba(0,4,40,1) 100%);
  box-shadow: 0px -10px 15px rgba(0, 0, 0, 0.5);
`;
const StatBox = styled.div`
  position: relative;
  border: 1px solid #eee;
  border-radius: 5px;

  & h6 {
    font-size: 18px;
    line-height: 1;
    position: absolute;
    top: -12px;
    left: 12px;
    background-color: #004e92;
    padding: 0 10px;
  }

  & p {
    font-size: 30px;
    line-height: 58px;
    padding: 0 25px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    color: #fff;
  }

  & ul {
    display: flex;
    flex-wrap: wrap;
    padding-left: 25px;
  }

  & li {
    width: 50%;
    line-height: 29px;
    color: #fff;
    white-space: nowrap;
  }

  & strong {
    font-weight: bold;
  }
`;
