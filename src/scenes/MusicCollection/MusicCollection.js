import React from 'react';
import styled from 'styled-components';

export default function MusicCollection({ songs }) {
  return (
    <Container>
    <Header>
      <h3>Select Music</h3>
    </Header>
    <Main>
      <SongList>
        {
          songs.map(song => {
            const {
              id,
              title,
              artistName,
              artistThumbnail,
              videoUrl,
              musicUrl,
              musicThumbnail
            } = song;

            return <SongItem>
              <h4>{title}</h4>
              <strong>{artistName}</strong>
            </SongItem>;
          })
        }
      </SongList>
      <SongInfo>
        <img src="http://postfiles6.naver.net/MjAxNzA3MThfMTIw/MDAxNTAwMzYzMjcwNDQ0.6Y8jjbDeM36eQbxw8U5CHiPUsq6MMGjI9BqgYEG4tm8g.avWrcNzWghr-QX4I2pbarF84IDg-tLfRRg_7OKwh8rYg.JPEG.geopass_jp/719Tcy4GtAL._SL1064_.jpg?type=w2" alt="트와이스" />
      </SongInfo>
    </Main>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;
const Header = styled.header`
  padding: 20px 0;
  margin-bottom: 30px;
  background-color: #fff;
  box-shadow: 0 0 5px rgba(0, 0, 0, .1);

  & > h3 {
    width: 960px;
    margin:0 auto;
    font-size: 30px;
    line-height: 1;
  }
`;
const Main = styled.main`
  width: 100%;
  max-width: 960px;
  margin: 0 auto;
  height: calc(100% - 100px);
  display: flex;
  padding-bottom: 30px;
`;
const SongList = styled.ul`
  flex: 1;
  overflow: scroll;
`;
const SongItem = styled.li`
  border-radius: 5px;
  background-color: #fff;
  padding: 15px;
  margin-bottom: 21px;

  &:last-child {
    margin-bottom: 0;
  }

  & h4 {
    font-size: 18px;
    max-width: 40%;
    margin-bottom: 15px;
  }
`;
const SongInfo = styled.div`
  width: 400px;
  max-width: 50%;
  margin-left: 21px;
`;
