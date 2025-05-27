import React, { useState } from 'react';
import './Modal.css'; // Criaremos este arquivo depois
import { useNavigate } from 'react-router-dom';

function Modal() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  const irparainicio = () => {
    navigate('/telainicial')
  };

  const irparaperfil = () => {
    navigate('/perfildeusuario')
  };

  const irparasaude = () => {
    navigate('/saude')
  };

  const irparaeducacao = () => {
    navigate('/educação')
  };

  const irparatransporte = () => {
    navigate('/transporte')
  };

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

           <div className='inicio'><button className='butonmodal1' onClick={irparainicio}><img className='img-modal' src="home-page.png" alt="Tela inicial" /> <h3 className='lulamolusco1-modal'>Tela Inicial</h3></button></div>

           <div className='Perfil'><button className='butonmodal2' onClick={irparaperfil}><img className='img-modal' src="user.png" alt="Perfil de usuario" /> <h3 className='lulamolusco-modal'>Perfil de Usuario</h3></button></div>

           <div className='saude'><button className='butonmodal3' onClick={irparasaude}><img className='img-modal' src="hospital.png" alt="Tela de Saude" /> <h3 className='lulamolusco2-modal'>Saude</h3></button></div>

           <div className='educação'><button className='butonmodal4' onClick={irparaeducacao}><img className='img-modal' src="school.png" alt="tela de educação" /> <h3 className='lulamolusco3-modal'>Educação</h3></button></div>

           <div className='transporte'><button className='butonmodal5' onClick={irparatransporte}><img className='img-modal' src="bus-stop.png" alt="tela de transportes" /> <h3 className='lulamolusco4-modal'>Transportes</h3></button></div>
              
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Modal;