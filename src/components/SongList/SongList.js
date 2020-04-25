import React from 'react';
import SongItem from '../SongItem/SongItem';
import styled from 'styled-components';

export default function({
  songs,
  currentSongId,
  onSongItemClick
}) {
  return (
    <SongList>
      {
        songs.map(song => {
          const {
            id,
            title,
            artistName,
          } = song;
          const isActive = currentSongId === id;
          return (
            <SongItem
              key={id}
              id={id}
              title={title}
              artistName={artistName}
              isActive={isActive}
              onSongItemClick={onSongItemClick}
            />
          );
        })
      }
    </SongList>
  )
}

const SongList = styled.ul`
  flex: 1;
  overflow: scroll;
`;
