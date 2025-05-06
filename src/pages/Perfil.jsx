import React, { useState, useEffect } from 'react';
import './Perfil.css';

function Perfil() {

  const [dados, setDados] = useState({
    nome: '',
    email: '',
    nacionalidade: '',
    idioma: ''
  });

  // Carregar os dados do localStorage quando o componente for montado
  useEffect(() => {
    const storedData = localStorage.getItem('userProfile');
    if (storedData) {
      setDados(JSON.parse(storedData));
    }
  }, []);

  // Função para salvar os dados no localStorage
  const saveToLocalStorage = (updatedData) => {
    localStorage.setItem('userProfile', JSON.stringify(updatedData));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    const updatedDados = { ...dados, [name]: value };
    setDados(updatedDados);
    saveToLocalStorage(updatedDados);  // Salvar os dados no localStorage
  };

  return (
    <div className='divAmarela-Perfil'>
      <div className="divMarrom-perfil">
        <div className="divQualquer2-perfil"></div>
        <div className="divRosa-Perfil">
          <div className="divRoxa-perfil">
            <div className="profile-container">
              <div className="avatar">
                {/* Imagem de perfil aqui (opcional) */}
              </div>
              <button className="add-button">+</button>
            </div>

            <div className="NomePessoa-Perfil">
              <h1 className='titulo2-perfil'>{dados.nome || 'Nome da Pessoa'}</h1>
            </div>
          </div>
        </div>
        <div className="qualquer3-perfil"></div>
        <div className="divazul-perfil">
          <h1 className='Titulo-Perfil'>Global Pass</h1>
        </div>
      </div>

      <div className="divVermelha-perfil">
        <div className="divverde-perfil"></div>

        <div className="divazulcaro">
          <div className="divroxaescuro-perfil"></div>

          <div className="divlaranja-perfil">
            <div className="nada-perfil"></div>
            <div className="divverdeescuro-perfil">
              <div className="nome-perfil">
                <label className='nomeLabel-perfil'>
                  Email:
                </label>
                <input
                  type="text"
                  className='NomeIn-perfil'
                  placeholder='Ex:1234'
                  value={dados.email}
                  name="email"
                  onChange={handleChange}
                />
              </div>

              <div className="nome-perfil">
                <label className='nomeLabel-perfil'>
                  Nacionalidade:
                </label>
                <input
                  type="text"
                  className='NomeIn-perfil'
                  placeholder='Ex:1234'
                  value={dados.nacionalidade}
                  name="nacionalidade"
                  onChange={handleChange}
                />
              </div>

              <div className="nome-perfil">
                <label className='nomeLabel-perfil'>
                  Idioma:
                </label>
                <input
                  type="text"
                  className='NomeIn-perfil'
                  placeholder='Ex:1234'
                  value={dados.idioma}
                  name="idioma"
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Perfil;
