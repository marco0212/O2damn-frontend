import React from 'react';
import App from './App';
import { connect } from 'react-redux';

function AppContainer({ status }) {
  return <App status={status} />;
}

const mapStateToProps = state => ({
  status: state.ui.currentScene
});

export default connect(mapStateToProps)(AppContainer);
