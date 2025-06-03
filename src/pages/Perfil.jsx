import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Perfil.css';

function Perfil() {
  const navigate = useNavigate();

  const [dados, setDados] = useState({
    nome: '',
    telefone: '',
    email: '',
    nacionalidade: '',
    idioma: ''
  });

  const [editando, setEditando] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [acao, setAcao] = useState(''); // 'sair' ou 'excluir'
  const [showSuccessModal, setShowSuccessModal] = useState(false); // Modal de sucesso

  useEffect(() => {
    const storedData = localStorage.getItem('userProfile');
    if (storedData) {
      setDados(JSON.parse(storedData));
    }
  }, []);

  const saveToLocalStorage = (updatedData) => {
    localStorage.setItem('userProfile', JSON.stringify(updatedData));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    const updatedDados = { ...dados, [name]: value };
    setDados(updatedDados);
  };

  const handleEditarClick = () => {
    if (editando) {
      // Se estiver editando, ao clicar no botão, salvar as alterações
      saveToLocalStorage(dados);
      setShowSuccessModal(true);
      setTimeout(() => {
        setShowSuccessModal(false);
      }, 5000); // Fecha o modal automaticamente após 5 segundos
    }
    setEditando(!editando);
  };

  const handleSairClick = () => {
    setAcao('sair');
    setShowModal(true);
  };

  const handleExcluirClick = () => {
    setAcao('excluir');
    setShowModal(true);
  };

  const confirmarAcao = () => {
    if (acao === 'sair') {
      navigate('/');
    } else if (acao === 'excluir') {
      localStorage.removeItem('userProfile');
      navigate('/');
    }
    setShowModal(false);
    setAcao('');
  };

  const cancelarAcao = () => {
    setShowModal(false);
    setAcao('');
  };

  return (
    <div className='divAmarela-Perfil'>
      <div className="divMarrom-perfil">
        <div className="divQualquer2-perfil"></div>
        <div className="divRosa-Perfil">
          <div className="divRoxa-perfil">
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', height: '90%', widows: '90%'}}>
              <div className="avatar">
                
                <img className='foto-perfil' src="Test Account.png" alt="Perfil de usuário" />
              </div>
            </div>
            <div className="NomePessoa-Perfil">
              {editando ? (
                <input
                  type="text"
                  className='NomeIno-perfil'
                  placeholder='Digite seu nome'
                  value={dados.nome}
                  name="nome"
                  onChange={handleChange}
                  style={{
                    fontSize: '31px',
                    fontWeight: 'bold',
                    textAlign: 'center',
                    background: 'transparent',
                    border: 'none',
                    outline: 'none',
                    color: 'white'
                  }}
                />
              ) : (
                <h1 className='titulo2-perfil'>{dados.nome || 'Nome da Pessoa'}</h1>
              )}
            </div>
          </div>
        </div>
        <div className="qualquer3-perfil"></div>
        <div className="divazul-perfil">
          <button className='Excluir-perfil' onClick={handleExcluirClick}>Excluir</button>
          <button className='Sair-perfil' onClick={handleSairClick}>Sair</button>
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
                <label className='nomeLabel-perfil'>Telefone:</label>
                <input
                  type="text"
                  className='NomeIn-perfil'
                  placeholder='Ex: (00) 00000-0000'
                  value={dados.telefone}
                  name="telefone"
                  onChange={handleChange}
                  disabled={!editando}
                />
              </div>

              <div className="nome-perfil">
                <label className='nomeLabel-perfil'>Email:</label>
                <input
                  type="text"
                  className='NomeIn-perfil'
                  placeholder='Ex: maria@gmail.com'
                  value={dados.email}
                  name="email"
                  onChange={handleChange}
                  disabled={!editando}
                />
              </div>

              <div className="nome-perfil">
                <label className='nomeLabel-perfil'>Nacionalidade:</label>
                <input
                  type="text"
                  className='NomeIn-perfil'
                  placeholder='Ex: Brasileira'
                  value={dados.nacionalidade}
                  name="nacionalidade"
                  onChange={handleChange}
                  disabled={!editando}
                />
              </div>

              <div className="nome-perfil">
                <label className='nomeLabel-perfil'>Idioma:</label>
                <input
                  type="text"
                  className='NomeIn-perfil'
                  placeholder='Ex: Português'
                  value={dados.idioma}
                  name="idioma"
                  onChange={handleChange}
                  disabled={!editando}
                />
              </div>

              <div className='button2-perfil'>
                <div className='oimundo-perfil'></div>
                <div className='divButon-perfil'>
                  <button className='editar-perfil' onClick={handleEditarClick}>
                    {editando ? 'Salvar' : 'Editar'}
                  </button>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>

      {/* Modal de confirmação */}
      {showModal && (
        <div style={modalOverlayStyle}>
          <div style={modalContentStyle}>
            <h3>Tem certeza que deseja {acao === 'sair' ? 'sair da conta' : 'excluir sua conta'}?</h3>
            <div style={{ marginTop: '20px' }}>
              <button onClick={confirmarAcao} style={buttonStyle}>Sim</button>
              <button onClick={cancelarAcao} style={buttonStyle}>Não</button>
            </div>
          </div>
        </div>
      )}

      {/* Modal de sucesso */}
      {showSuccessModal && (
        <div style={modalOverlayStyle}>
          <div style={modalContentStyle}>
            <h3>Salvo com sucesso!</h3>
            <div style={{ marginTop: '20px' }}>
              <button onClick={() => setShowSuccessModal(false)} style={buttonStyle}>OK</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

// Estilos do modal
const modalOverlayStyle = {
  position: 'fixed',
  top: 0, left: 0,
  width: '100vw', height: '100vh',
  backgroundColor: 'rgba(0,0,0,0.5)',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  zIndex: 9999,
};

const modalContentStyle = {
  backgroundColor: '#3B444F',
  padding: '30px',
  borderRadius: '8px',
  boxShadow: '0 2px 10px rgba(0,0,0,0.3)',
  textAlign: 'center',
  maxWidth: '400px',
  width: '90%',
  color: '#fff'
};

const buttonStyle = {
  margin: '10px',
  padding: '10px 20px',
  fontSize: '16px',
  cursor: 'pointer',
  borderRadius: '20px',
};

export default Perfil;
