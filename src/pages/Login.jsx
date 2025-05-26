import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

function LoginClaro() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [mensagemEmail, setMensagemEmail] = useState('');
  const [mensagemSenha, setMensagemSenha] = useState('');
  const [mostrarSenha, setMostrarSenha] = useState(false);
  const [showModal, setShowModal] = useState(false);

  function handleLogin() {
    let erro = false;

    // Limpar mensagens anteriores
    setMensagemEmail('');
    setMensagemSenha('');

    if (!email) {
      setMensagemEmail('O campo de e-mail está vazio.');
      erro = true;
    }

    if (!senha) {
      setMensagemSenha('O campo de senha está vazio.');
      erro = true;
    }

    if (erro) return;

    const usuarioSalvo = JSON.parse(localStorage.getItem('userProfile'));

    if (!usuarioSalvo) {
      setMensagemEmail('Nenhum usuário cadastrado!');
      return;
    }

    if (
      email === usuarioSalvo.email &&
      senha === usuarioSalvo.senha
    ) {
      setShowModal(true); // Exibe o modal em vez do alert
    } else {
      setMensagemSenha('Dados incorretos! Verifique suas informações.');
    }
  }

  function alternarSenha() {
    setMostrarSenha(!mostrarSenha);
  }

  function fecharModal() {
    setShowModal(false);
    navigate('/telainicial'); // redireciona para a tela inicial ao fechar o modal
  }

  return (
    <div className='divAmarela-Login'>
      <div className="divAzul-Login">
        <div className="divMarron-Login"></div>
        <div className="divMarronEscuro-Login"></div>
      </div>

      <div className='divRosa-Login'></div>

      <div className="divVermelha-Login">
        <div className="divVerde-Login">
          <div className="divPerta-Login">
            <h1 className="Titulo-Login">Login</h1>
          </div>

          <div className="divRosaEscuro-Login">
            <div className="nome-Cadastro">
              <label className='nomeLabel-Login'>E-mail:</label>
              <input
                type="text"
                className='NomeIn-Login'
                placeholder='Ex: 1234'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              {mensagemEmail && <p style={{ color: 'red', marginTop: '-3%', fontSize: '1rem' }}>{mensagemEmail}</p>}
            </div>

            <div className="nome-Cadastro">
              <label className='nomeLabel-Login'>Senha:</label>
              <input
                type={mostrarSenha ? "text" : "password"}
                className='NomeIn-Login'
                placeholder='Ex: 1234'
                value={senha}
                onChange={(e) => setSenha(e.target.value)}
              />
              <img
                src={mostrarSenha ? "/SenhaVisivel.png" : "/SenhaInvisivel.png"}
                alt={mostrarSenha ? "Ocultar senha" : "Mostrar senha"}
                className='imgSenha-Login'
                onClick={alternarSenha}
                style={{ cursor: 'pointer' }}
              />
              {mensagemSenha && <p style={{ color: 'red', marginTop: '-5%' }}>{mensagemSenha}</p>}
            </div>
          </div>

          <div className="divPreta-Login">
            <div className="Button-Login">
              <button className='button-Login' onClick={handleLogin}>Logar</button>
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <div style={modalOverlayStyle}>
          <div style={modalContentStyle}>
            <h2>Login realizado com sucesso!</h2>
            <button onClick={fecharModal} style={buttonStyle}>Fechar</button>
          </div>
        </div>
      )}
    </div>
  );
}

const modalOverlayStyle = {
  position: 'fixed',
  top: 0, left: 0,
  width: '100vw',
  height: '100vh',
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
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
};

const buttonStyle = {
  marginTop: '20px',
  padding: '10px 20px',
  fontSize: '16px',
  cursor: 'pointer',
  borderRadius: '20px',
  color: '#2D405A'
};

export default LoginClaro;
