import React from 'react';
import styled from 'styled-components';

export default function Result ({
  isLoading,
  isSubmit,
  songRank,
  score,
  maxCombo,
  excellent,
  good,
  offBeat,
  miss,
  onFormSubmit,
  username,
  onInputChange,
  onPlayAgainButtonClick,
  onGoToMusicCollectionButtonClick
}) {
  songRank = isSubmit ? (
    songRank.sort((b, a) => a.score - b.score)
  ) : (
    [...songRank, { username, score, me: true }]
      .sort((b, a) => a.score - b.score)
  );
  return (
    <Wrapper>
      <GridWrapper>
        <PlayResult>
          <h3>Play Result</h3>
          <ul>
            <li>
              <em>Excellent</em>
              <span>{excellent}</span>
            </li>
            <li>
              <em>Good</em>
              <span>{good}</span>
            </li>
            <li>
              <em>Off Beat</em>
              <span>{offBeat}</span>
            </li>
            <li>
              <em>Miss</em>
              <span>{miss}</span>
            </li>
            <li>
              <em>Max Combo</em>
              <span>{maxCombo}</span>
            </li>
          </ul>
          <p>Score <em>{score}</em></p>
        </PlayResult>
        <Ranking>
        <h3>Ranking</h3>
        <ul>
          {
            songRank.map((rank, index) => {
              const { username, score, me } = rank;
              return (
                <RankingItem isMe={me} key={index}>
                  <b>
                    <strong>{index + 1}. </strong>
                    <em>{username ? username : 'Type your name'}</em>
                  </b>
                  <span>{score}</span>
                </RankingItem>
              );
            })
          }
        </ul>
        </Ranking>
        <Buttons>
          <button onClick={onPlayAgainButtonClick}>Play Again</button>
          <button onClick={onGoToMusicCollectionButtonClick}>Go to  Music selection</button>
        </Buttons>
        <Username>
          <h3>Let me know who you are</h3>
          <form onSubmit={onFormSubmit}>
            <input
              type="text"
              value={username}
              onChange={onInputChange}
              readOnly={isSubmit}
              placeholder="Type your name"
              required
            />
            <UsernameButton
              isLoading={isLoading}
              isSubmit={isSubmit}
              disabled={isLoading || isSubmit}
            >
              {isLoading ? "Loading" : isSubmit ? "Done" : "Submit"}
            </UsernameButton>
          </form>
        </Username>
      </GridWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
`;
const GridWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 382px 160px;
  grid-gap: 30px;
  width: 100%;
  padding: 30px;
`;
const ResultBox = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #fff;
  padding: 20px;
  border-radius: 4px;

  & h3 {
    font-weight: bold;
    font-size: 25px;
    margin-bottom: 21px;
  }
`;
const Ranking = styled(ResultBox)`
  & ul {
    max-height: 284px;
    flex: 1;
    overflow-y: scroll;
  }
`;
const RankingItem = styled.li`
  ${props => props.isMe && 'background-color: #eee;'}
  padding: 0 15px;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #eee;
  line-height: 49px;
  font-size: 20px;
`;
const PlayResult = styled(ResultBox)`
  & ul {
    font-size: 20px;

    & li, & + p {
      display: flex;
      justify-content: space-between;
    }

    & li {
      margin-bottom: 20px;
    }

    & + p {
      margin-top: auto;
      font-size: 23px;
      font-weight: bold;
    }
  }
`;
const Username = styled(ResultBox)`
  form {
    display: flex;
    font-size: 20px;
    line-height: 40px;

    & input {
      font-size: inherit;
      margin-right: 15px;
      width: 100%;
      border-radius: 5px;
      border: 1px solid #eee;
      padding: 0 15px;
    }
  }
`;
const UsernameButton = styled.button`
  border: 0;
  padding: 0 30px;
  font-size: 18px;
  text-align: center;
  line-height: 45px;
  color: #fff;
  border-radius: 4px;
  background-color: #1f4068;
  ${props => (props.isLoading || props.isSubmit) && 'background-color: #666;'}
`;
const Buttons = styled(ResultBox)`
  margin: auto 0;
  background-color: transparent;
  padding: 0;

  & button {
    flex: 1;
    border: 0;
    font-size: 18px;
    text-align: center;
    line-height: 45px;
    color: #fff;
    border-radius: 4px;

    &:first-child {
      margin-bottom: 15px;
      background-color: #162447;
    }
    &:last-child {
      background-color: #1f4068;
    }
  }
`;
