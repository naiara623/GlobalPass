import { useState } from "react";
import './TermosUso.css';
import Scrollbar from "../components/Scrollbar";

function TermosUso() {
  const[isOpen, setIsOpen] = useState(false);
  const[isOpen1, setIsOpen1] = useState(false);
  const[isOpen2, setIsOpen2] = useState(false);
  const[isOpen3, setIsOpen3] = useState(false);
  const[isOpen4, setIsOpen4] = useState(false);
  const[isOpen5, setIsOpen5] = useState(false);

  const toggleContent = () => {
    setIsOpen(!isOpen);
  };
  
  const toggleContent1 = () => {
    setIsOpen1(!isOpen1);
  };
  
  const toggleContent2 = () => {
    setIsOpen2(!isOpen2);
  };

  const toggleContent3 = () => {
    setIsOpen3(!isOpen3);
  };
  
  const toggleContent4 = () => {
    setIsOpen4(!isOpen4);
  };
  
  const toggleContent5 = () => {
    setIsOpen5(!isOpen5);
  };

  return (
    <div className='divAmarela-termos'>
      <div className="DivVermelha1-termos"></div>

      <div className="DivAzul-termos">
        <div className="DivRoxa-termos">
          <div className="DivMarrom-termos">
            <h1 className="Titulo-termos">Termos de Uso</h1>
          </div>
        </div>

        <div className="DivVerde-termos">
          <div className="DivRosa-termos">
             <h2 className="naiaky-termos">Bem-vindo ao GlobalPass! Ao acessar e utilizar nosso site, você concorda com os seguintes Termos de Uso. Leia atentamente antes de continuar.</h2>

            <div className="toggle-container">
              <div className="arrow-termos">
<button className={`toggle-button ${isOpen ? "open" : ""}`} onClick={toggleContent}>
<span className='arrow'> ▶ </span>
</button><p className='Aceito-termos'>Aceitação dos termos</p>
</div>
      
      {isOpen && (
        <div className="content">
            <p className='Tra'> <br /> <br /><br />  <br /><br /></p>
        </div>
      )}
 <div className="arrow-termos">

 
<button className={`toggle-button ${isOpen1 ? "open1" : ""}`} onClick={toggleContent1}>
<span className='arrow'> ▶ </span>
</button><p className='Objetivo-Termos'>Objetivo do site</p>
   </div>   
      {isOpen1 && (
        <div className="content">
            <p className='Tra'> <br /><br /><br /></p>
        </div>
      )}

<button className={`toggle-button ${isOpen3 ? "open1" : ""}`} onClick={toggleContent1}>
<span className='arrow'> ▶ </span>
</button><p className='Uso-Termos'>Uso permitido</p>
      
      {isOpen3 && (
        <div className="content">
            <p className='Tra'> <br /><br /><br /></p>
        </div>
      )}


<button className={`toggle-button ${isOpen4 ? "open1" : ""}`} onClick={toggleContent1}>
<span className='arrow'> ▶ </span>
</button><p className='Precisão-Termos'>Objetivo do site</p>
      
      {isOpen4 && (
        <div className="content">
            <p className='Tra'> <br /><br /><br /></p>
        </div>
      )}
      
      
      
         <button className={`toggle-button ${isOpen5 ? "open1" : ""}`} onClick={toggleContent1}>
<span className='arrow'> ▶ </span>
</button><p className='Lins-termos'>Links Externo</p>
      
     
      
      {isOpen5 && (
        <div className="content">
            <p className='Tra'> <br /><br /><br /></p>
        </div>
      )}

       <button className={`toggle-button ${isOpen5 ? "open1" : ""}`} onClick={toggleContent1}>
<span className='arrow'> ▶ </span>
</button><p className='limitação-termos'>Limitação de Responsabilidade</p>
      
      {isOpen5 && (
        <div className="content">
            <p className='Tra'> <br /><br /><br /></p>
        </div>
      )}     
          </div>

          <Scrollbar/>
          </div>

        </div>
      </div>

      <div className="DivVermelha2-termos"></div>
    </div>
  );
}

export default TermosUso;
