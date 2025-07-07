import React from "react";

const centerStyle = {
  position: "fixed",
  left: "50%",
  top: "50%",
  transform: "translate(-50%, -50%)",
  zIndex: 9999
};

const Modal = ({ children, isOpen, onClose, title }) => {
  if (!isOpen) return null;

  // Render only the children, but center them using inline style
  return <div style={centerStyle}>{children}</div>;
};

export default Modal;
