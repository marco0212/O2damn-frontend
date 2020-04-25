import React from 'react';
import styled from 'styled-components';

export default function({ currentSongId, currentSongTitle, currentSongThumb, onStartClick }) {
  const buttonClickHandler = () => {
    onStartClick(currentSongId);
  }
  return (
    <SongInfo>
      {
        currentSongTitle ? (
          <img src={currentSongThumb} alt={currentSongTitle} />
        ) : (
          <div>no selected</div>
        )
      }
      <button onClick={buttonClickHandler}>Start</button>
    </SongInfo>
  );
}

const SongInfo = styled.div`
  width: 400px;
  max-width: 50%;
  margin-left: 21px;
  background-color: #fff;
  border-radius: 4px;
  overflow: hidden;
`;
