import React from 'react';
import styled from 'styled-components';

export default function({ currentSongTitle, currentSongThumb }) {
  return (
    <SongInfo>
      {
        currentSongTitle ? (
          <img src={currentSongThumb} alt={currentSongTitle} />
        ) : (
          <div>no selected</div>
        )
      }
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
