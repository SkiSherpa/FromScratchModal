import React, { useState } from 'react';
import './modal.css';

function Modal() {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  return (
    <>
      <button className="btn-modal" onClick={() => toggleModal()}>
        Open
      </button>
      {modal && (
        <div className="modal">
          <div className="overlay"></div>
          <div className="modal-content">
            <h2>Hello Modal</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
              amet fuga perspiciatis aliquam deleniti hic laudantium ullam sed.
              Ut corrupti repellendus quos vel laborum voluptates.
            </p>
            <button classeName="closeModal" onClick={() => toggleModal()}>
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default Modal;
