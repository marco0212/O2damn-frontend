import React from 'react';
import styled from 'styled-components';
import ControlArea from '../../components/ControlArea/ControlArea';
import VisualArea from '../../components/VisualArea/VisualArea';
import StatArea from '../../components/StatArea/StatArea';
import Modal from '../../components/Modal/Container';

export default function Game ({
  song,
  score,
  maxCombo,
  excellent,
  good,
  offBeat,
  miss,
  audioRef,
  gameControlRef,
  visualizerRef,
  isPlayingMode,
  confirmLeave,
  onAudioLoad
}) {
  const { title, musicUrl } = song;
  return (
    <Wrapper>
      {
        !isPlayingMode && <Modal confirmLeave={confirmLeave} />
      }
      <audio
        src={musicUrl}
        ref={audioRef}
        onLoadedData={onAudioLoad}
        crossOrigin="anonymous"
      />
      <ControlArea
        canvasRef={gameControlRef}
      />
      <VisualArea
        canvasRef={visualizerRef}
      />
      <StatArea
        songTitle={title}
        score={score}
        excellent={excellent}
        good={good}
        offBeat={offBeat}
        maxCombo={maxCombo}
        miss={miss}
      />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  cursor: none;
  height: 100%;
  display: grid;
  grid-template-rows: 1fr 90px;
  grid-template-columns: 300px 1fr;
`;
