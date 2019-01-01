import React from "react";

import "./styles.scss";

const Modal = ({ Content, hideModal }) => {
  return (
    <div className="modal">
      <div className="modal__close" onClick={hideModal}>
        <i className="fas fa-times" />
      </div>
      <div className="modal__content">
        {Content}
      </div>
    </div>
  );
};

export default Modal;