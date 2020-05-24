import React from 'react';
import { connect } from 'react-redux';
import Visualizer from './Visualizer';

function VisualizerContainer({ canvasRef }) {
  return (
    <Visualizer
      canvasRef={canvasRef}
    />
  );
}

export default connect()(VisualizerContainer);
