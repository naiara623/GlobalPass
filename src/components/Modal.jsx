import React, { useState } from 'react';
import './Modal.css'; // Criaremos este arquivo depois
import { useNavigate } from 'react-router-dom';

function Modal() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  const navigate = useNavigate()

  const telaInicio = () =>{
    navigate('/inicio');
  }

  return (
    <div>
      <button className='modal-button' onClick={toggleModal}> <img className='inicio-modal' src="menu-modal.png" alt="" /></button>
      
      {isOpen && (
        <div className="modal-overlay">
          <div className="modal">
            <div className='modal-arruma'>
            <h2>GLOBAL PASS</h2>
            
            <button className='button1' onClick={toggleModal}>X</button>
            </div>
            <div className='modal-arrumar'>

<button className='button2' onClick={telaInicio}> <img className='icon-img' src="Home.png" alt="" /> <h2>Inicio</h2> </button>
<button className='button2'                     > <img className='icon-img' src="" alt="" /> </button> 
<button className='button2'                     > <img className='icon-img' src="" alt="" /> </button>

            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Modal;