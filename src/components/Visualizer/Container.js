import React from 'react';
import Visualizer from './Visualizer';
import { connect } from 'react-redux';

function VisualizerContainer({ canvasRef }) {
  return (
    <Visualizer
      canvasRef={canvasRef}
    />
  );
}

export default connect()(VisualizerContainer);
