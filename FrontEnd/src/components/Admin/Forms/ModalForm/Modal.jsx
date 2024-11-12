import React from 'react';
import './Modal.css';

const Modal = ({ show, children, style, onClose }) => {
  if (!show) return null;

  return (
      <div className="modal-overlay" onClick={onClose}>
        <div className="modal-content" style={style} onClick={(e) => e.stopPropagation()}>
          <button className="modal-close-btn" onClick={onClose}>
            &times;
          </button>
          {children}
        </div>
      </div>
  );
};

export default Modal;
