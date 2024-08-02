import React from "react";
import "../styles/Modal.css";

const Modal = ({ show, handleClose, children }) => {
  if (!show) return null;

  return (
    <div className="modal-backdrop">
      <div className="modal-content">
        <button className="close-button" onClick={handleClose}>
          Close
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
