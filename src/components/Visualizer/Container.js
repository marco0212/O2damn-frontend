import React from 'react';
import Visualizer from './Visualizer';
import { connect } from 'react-redux';

function VisualizerContainer() {
  return <Visualizer />;
}

export default connect()(VisualizerContainer);
