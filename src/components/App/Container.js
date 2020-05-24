import React from 'react';
import { connect } from 'react-redux';
import App from './App';

function AppContainer({ status }) {
  return <App status={status} />;
}

const mapStateToProps = state => ({
  status: state.ui.currentScene
});

export default connect(mapStateToProps)(AppContainer);
