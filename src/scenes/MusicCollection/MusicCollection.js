import React from 'react';
import styled from 'styled-components';

export default function MusicCollection({
  songs,
  currentSong
}) {
  const {
    id: currentSongId,
    musicThumbnail: currentSongThumb,
    musicUrl: currentSongUrl
  } = currentSong;
  return (
    <Wrapper>
      <audio src={currentSongUrl} autoPlay />
      <BgOverlay style={{backgroundImage: `url(${currentSongThumb})`}}/>
      <SongArea>
        <SongList>
          {
            songs.map(song => {
              const { id, title, artistName } = song;
              return (
                <SongItm key={id} isSelected={currentSongId === id}>
                    <h3>{title}</h3>
                    <p>{artistName}</p>
                </SongItm>
              );
            })
          }
        </SongList>
      </SongArea>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  height: 100%;
  position: relative;
`;
const BgOverlay = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: no-repeat center center / cover;
  z-index: -1;

  &:after {
    content: '';
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(0, 0, 0, .3);
  }
`;
const SongArea = styled.div`
  float: right;
  padding: 30px;
`;
const SongList = styled.ul`
  width: 600px;
`;
const SongItm = styled.li`
  border-radius: 10px;
  background-color: #333;
  color: #fff;
  padding: 10px 20px;
  margin-bottom: 20px;

  ${props => props.isSelected && (
      'background-color: #fff;' +
      'color: #323232;'
    )
  }

  &:last-child {
    margin-bottom: 0;
  }

  & h3 {
    font-size: 25px;
    margin-bottom: 15px;
  }

  & p {
    font-size: 20px;
  }
`;
