// Modal.js
import React from 'react';

const Modal = ({ show,children, style }) => {
  if (!show) return null;

  return (
    <div style={modalStyles}>
      <div style={{ ...modalContentStyles, ...style }}>
        {children}
      </div>
    </div>
  );
};

const modalStyles = {
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
};

const modalContentStyles = {
  backgroundColor: '#fff',
};

export default Modal;
