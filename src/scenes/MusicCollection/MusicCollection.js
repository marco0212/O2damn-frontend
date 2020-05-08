import React from 'react';
import styled from 'styled-components';

export default function MusicCollection({
  songs,
  currentSong,
  listRef
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
        <ul ref={listRef}>
          {
            songs.map(song => {
              const {
                id,
                title,
                artistName,
                artistThumbnail
              } = song;
              return (
                <SongItm key={id} data-id={id} isSelected={currentSongId === id}>
                  <div>
                    <img src={artistThumbnail} alt={artistName}/>
                  </div>
                  <div>
                    <h3>{title}</h3>
                    <p>{artistName}</p>
                  </div>
                </SongItm>
              );
            })
          }
        </ul>
      </SongArea>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  height: 100%;
  position: relative;
  display: flex;
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
  padding: 30px 0;
  width: 70%;
  margin: auto;
`;
const SongItm = styled.li`
  display: flex;
  align-items: center;
  padding: 15px 20px;
  position: relative;
  background-color: rgba(255, 255, 255, .8);
  color: #666;
  margin-bottom: 15px;
  transition: box-shadow 0.5s, transform 0.5s;

  & div:first-child {
    width: 70px;
    height: 70px;
    border-radius: 50%;
    margin-right: 15px;
    overflow: hidden;

    & img {
      width: 100%;
      height: 100%;
    }
  }

  & div:last-child {
    flex: 1;

    & h3 {
      font-weight: bold;
      font-size: 20px;
      line-height: 25px;
      max-height: 50px;
      overflow: hidden;
    }
  }

  ${props => props.isSelected && (
      'z-index: 10;' +
      'background-color: #fff;' +
      'color: #fff;' +
      'transform: scale(1.05);' +
      'box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.3);' +
      'background: rgb(0,78,146);' +
      'background: linear-gradient(270deg, rgba(0,78,146,1) 19%, rgba(0,4,40,1) 100%);'
    )
  }
`;
