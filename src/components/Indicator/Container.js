import React from 'react';
import { connect } from 'react-redux';
import Indicator from './Indicator';

function IndicatorContainer({ indicators, combo }) {
  return indicators.map(stat => (
    <Indicator
      key={Math.random()}
      stat={stat}
      combo={combo}
    />
  ));
}

const mapStateToProps = state => ({
  indicators: state.game.indicators,
  combo: state.game.combo
});

export default connect(mapStateToProps)(IndicatorContainer);
