import React, { useEffect, useState } from 'react';
import Modal from './Modal';
import { connect } from 'react-redux';

function ModalContainer({ confirmLeave }) {
  const [isSelectLeave, setIsSelectLeave] = useState(true);
  
  useEffect(() => {
    const onKeydown = e => {
      const key = e.which;
      const SPACE_BAR = 32;
      const ENTER = 13;
  
      if (key > 36 && key < 41) {
        setIsSelectLeave(!isSelectLeave);
      } else if (key === SPACE_BAR || key === ENTER ) {
        confirmLeave(isSelectLeave);
      }
    };

    window.addEventListener('keydown', onKeydown);
    return () => {
      window.removeEventListener('keydown', onKeydown);
    };
  }, [isSelectLeave]);

  return (
    <Modal
      isSelectLeave={isSelectLeave}
    />
  );
}

const mapStateToProps = state => ({
  isPlayingMode: state.ui.isPlayingMode
});

export default connect(mapStateToProps)(ModalContainer);
