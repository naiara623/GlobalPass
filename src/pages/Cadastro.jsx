import React, { useState } from 'react';
import './Cadastro.css';

function Cadastro() {
  const [selectedOption, setSelectedOption] = useState("");
  const [nome, setNome] = useState("");
  const [cpf, setCpf] = useState('')
  const [email, setEmail] = useState('')
  const [telefone, setTelefone] = useState ('')
  // let telefone;
  // let idioma;
  // let nacionalidade;
  // let destino;
  // let tipoVisto;
  // let senha;
  // let confirmaSenha;

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };



  return (
    <div className='divAmarelo-cadastro'>
      <div className="divVermelha1-cadastro">
        <div className="divimg1-cadastro"></div>
      </div>

      <div className="divAzul-cadastro">
        <div className="divRoxa-cadastro">
          <div className="divVerde1-cadastro">
            <h1 className='titulo-cadastro'>Cadastro</h1>
          </div>

          <div className="divVerdeEscuro-cadastro">
            <div className="divLaranja1-cadastro">
              <label className='labelnome-cadastro'>Nome Completo</label>
              <input type="text" className='inputNome-cadastro' placeholder='Ex: Maria Knupp' />

              <label className='labelcpf-cadastro'>CPF</label>
              <input type="text" className='inputcpf-cadastro' placeholder='000.000.000-00' />

              <label className='labelemail-cadastro'>E-mail</label>
              <input type="text" className='inputemail-cadastro' placeholder='mariaKnupp@gmail.com' />

              <label className='labeltele-cadastro'>Telefone</label>
             <input type="text" className='inputtele-cadastro' placeholder='(00) 0000-0000' />

              <label className='labelidioma-cadastro'>Idioma Principal</label>
              <input type="text" className='inputidioma-cadastro' placeholder='Português' />
            </div>

            <div className="divPreta-cadastro"></div>

            <div className="divLaranja2-cadastro">
              <label className='labelnacio-cadastro'>Nacionalidade</label>
              <input type="text" className='inputNacio-cadastro' placeholder='Brasileiro/a' />

              <label className='labeldestino-cadastro'>Destino</label>
              <input type="text" className='inputdestino-cadastro' placeholder='São Paulo' />

              <label className='labeltipo-cadastro'>Tipo de visto</label>
              <select className='inputtipo-cadastro'>
                <option value="">Selecione...</option>
                <option value="estudante">Estudante</option>
                <option value="trabalho">Trabalho</option>
                <option value="turismo">Turismo</option>
              </select>

              <label className='labelsenha-cadastro'>Senha</label>
              <input type="password" className='inputsenha-cadastro' placeholder='1234' />

              <label className='labelconfirma-cadastro'>Confirma senha</label>
              <input type="password" className='inputconfirma-cadastro' placeholder='1234' />
            </div>
          </div>

          <div className="divVerde2-cadastro">
            <br />
            <label className="material-checkbox">
              <input type="checkbox" />
              <span className="checkmark" />
              <p className='Termos-cadastro'>Li e aceito os termos de uso</p>
            </label>

            <button className='button-cadastro'><span>Cadastrar</span></button>
          </div>
        </div>
      </div>

      <div className="divVermelha2-cadastro">
        <div className="divimg2-cadastro"></div>
      </div>
    </div>
  );
}

export default Cadastro;
