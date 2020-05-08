import React from 'react';
import Indicator from "./Indicator";
import { connect } from 'react-redux';

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
