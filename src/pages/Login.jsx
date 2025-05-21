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

    const usuarioSalvo = JSON.parse(localStorage.getItem('usuarioCadastro'));

    if (!usuarioSalvo) {
      setMensagemEmail('Nenhum usuário cadastrado!');
      return;
    }

    if (
      email === usuarioSalvo.email &&
      senha === usuarioSalvo.senha
    ) {
      alert('Login realizado com sucesso!');
      navigate('/telainicial');
    } else {
      setMensagemSenha('Dados incorretos! Verifique suas informações.');
    }
  }

  function alternarSenha() {
    setMostrarSenha(!mostrarSenha);
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
              {mensagemEmail && <p style={{ color: 'red', marginTop: '5px' }}>{mensagemEmail}</p>}
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
                src="/SenhaInvisivel.png"
                alt="Mostrar senha"
                className='imgSenha-Login'
                onClick={alternarSenha}
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
    </div>
  );
}

export default LoginClaro;
