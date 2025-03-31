import { useState } from "react";
import './TermosUso.css';
import Scrollbar from "../components/Scrollbar";

function TermosUso() {
  const [isOpen, setIsOpen] = useState(false);

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


          <Scrollbar/>
          </div>

        </div>
      </div>

      <div className="DivVermelha2-termos"></div>
    </div>
  );
}

export default TermosUso;
