import React, { useState } from 'react'
import './LoginClaro.css'

function LoginClaro() {
     // Estados para os campos
  const [nome, setNome] = useState('');
  const [cpf, setCpf] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [mostrarSenha, setMostrarSenha] = useState(false); // novo estado para mostrar/esconder senha

  function handleLogin() {
    const usuarioSalvo = JSON.parse(localStorage.getItem('usuarioCadastro'));

    if (!usuarioSalvo) {
      alert('Nenhum usuário cadastrado!');
      return;
    }

    if (
      nome === usuarioSalvo.nome &&
      cpf === usuarioSalvo.cpf &&
      email === usuarioSalvo.email &&
      senha === usuarioSalvo.senha
    ) {
      alert('Login realizado com sucesso!');
      // Aqui você poderia redirecionar para uma página, se quiser
    } else {
      alert('Dados incorretos! Verifique suas informações.');
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
                
              <div className="nome-Login">
              <label className='nomeLabel-Login'>
                Nome completo:
              </label>
              <input type="text" className='NomeIn-Login' placeholder='Ex:1234'  value={nome}
                onChange={(e) => setNome(e.target.value)}/>
            </div>

            <div className="nome-Cadastro">
              <label className='nomeLabel-Login'>
                CPF:
              </label>
              <input type="text" className='NomeIn-Login' placeholder='Ex:1234' value={cpf}
                onChange={(e) => setCpf(e.target.value)}/>
            </div>

            <div className="nome-Cadastro">
              <label className='nomeLabel-Login'>
                E-mail:
              </label>
              <input type="text" className='NomeIn-Login' placeholder='Ex:1234' value={email}
                onChange={(e) => setEmail(e.target.value)}/>
            </div>

            <div className="nome-Cadastro">
              <label className='nomeLabel-Login'>
              Senha:
              </label>
              <input type="password" className='NomeIn-Login'placeholder='Ex:1234' value={senha}
                onChange={(e) => setSenha(e.target.value)}/>
              <img src="/SenhaInvisivel.png" alt="Mostrar senha" 
              className='imgSenha-Login'
              onClick={alternarSenha}

              />
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
  )
}

export default LoginClaro
