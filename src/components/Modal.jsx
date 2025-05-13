import React, { useState } from 'react';
import './Modal.css'; // Criaremos este arquivo depois

function Modal() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <button className='modal-button' onClick={toggleModal}> <img className='inicio-modal' src="menu-modal.png" alt="" /></button>
      
      {isOpen && (
        <div className="modal-overlay">
          <div className="modal">
            <div className='modal-arruma'>
            <h2>GLOABL PASS</h2>
            
            <button onClick={toggleModal}>X</button>
            </div>
            <div className='modal-arrumar'>


              
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Modal;