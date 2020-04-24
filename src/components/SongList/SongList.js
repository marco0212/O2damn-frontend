import React from 'react';
import styled from 'styled-components';

export default function({ songs, currentSongId, onSongItemClick }) {
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
              onClick={onSongItemClick.bind(null, id)}
              isActive={isActive}
            >
              <div>
                <h4>{title}</h4>
                <strong>{artistName}</strong>
              </div>
              {
                isActive && <button>Start</button>
              }
            </SongItem>
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
const SongItem = styled.li`
  border-radius: 5px;
  background-color: #fff;
  padding: 15px;
  margin-bottom: 21px;
  display: flex;
  justify-content: space-between;
  ${props => props.isActive && 'background-color: #323232;color: #fff;'}

  &:last-child {
    margin-bottom: 0;
  }

  & > div {
    flex: 1;
  }

  & h4 {
    font-size: 18px;
    max-width: 40%;
    margin-bottom: 15px;
  }
`;
