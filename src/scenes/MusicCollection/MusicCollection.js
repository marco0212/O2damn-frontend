import React from 'react';
import styled from 'styled-components';
import SceneHeader from '../../components/SceneHeader/SceneHeader';
import SongList from '../../components/SongList/SongList';
import SongInfo from '../../components/SongInfo/SongInfo';

export default function MusicCollection({
  songs,
  currentSong,
  onSongItemClick,
  onStartClick
}) {
  const {
    id: currentSongId,
    title: currentSongTitle,
    musicThumbnail: currentSongThumb,
    musicUrl: currentSongUrl
  } = currentSong;
  return (
    <Container>
      <audio autoPlay src={currentSongUrl} />
      <SceneHeader title='Select music' />
      <Main>
        <SongList
          songs={songs}
          currentSongId={currentSongId}
          onSongItemClick={onSongItemClick}
        />
        <SongInfo
          currentSongId={currentSongId}
          currentSongTitle={currentSongTitle}
          currentSongThumb={currentSongThumb}
          onStartClick={onStartClick}
        />
      </Main>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;
const Main = styled.main`
  width: 100%;
  max-width: 960px;
  margin: 0 auto;
  height: calc(100% - 100px);
  display: flex;
  padding-bottom: 30px;
`;
