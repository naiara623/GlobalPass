import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './CadastroEscuro.css';

function CadastroEscuro() {
  const [nome, setNome] = useState('');
  const [cpf, setCpf] = useState('');
  const [email, setEmail] = useState('');
  const [telefone, setTelefone] = useState('');
  const [idioma, setIdioma] = useState('');
  const [nacionalidade, setNacionalidade] = useState('');
  const [destino, setDestino] = useState('');
  const [visto, setVisto] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmaSenha, setConfirmaSenha] = useState('');
  const [mensagemErro, setMensagemErro] = useState({});
  const [termosAceitos, setTermosAceitos] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [showSenha, setShowSenha] = useState(false);
  const [showConfirmaSenha, setShowConfirmaSenha] = useState(false);
  const navigate = useNavigate();

  function formatCPF(value) {
    return value
      .replace(/\D/g, '')
      .replace(/(\d{3})(\d)/, '$1.$2')
      .replace(/(\d{3})(\d)/, '$1.$2')
      .replace(/(\d{3})(\d{1,2})$/, '$1-$2');
  }

  function formatTelefone(value) {
    return value
      .replace(/\D/g, '')
      .replace(/(\d{2})(\d)/, '($1) $2')
      .replace(/(\d{5})(\d)/, '$1-$2')
      .substr(0, 15);
  }

  function handleCadastro() {
    const novosErros = {};

    if (!nome) novosErros.nome = "Campo obrigatorio.";
    if (!cpf) novosErros.cpf = "Campo obrigatorio.";
    if (!email) novosErros.email = "Campo obrigatorio.";
    if (!telefone) novosErros.telefone = "Campo obrigatorio.";
    if (!idioma) novosErros.idioma = "Campo obrigatorio.";
    if (!nacionalidade) novosErros.nacionalidade = "Campo obrigatorio.";
    if (!destino) novosErros.destino = "Campo obrigatorio.";
    if (!visto) novosErros.visto = "Campo obrigatorio.";
    if (!senha) novosErros.senha = "Campo obrigatorio.";
    if (!confirmaSenha) novosErros.confirmaSenha = "Campo obrigatorio.";
    if (senha && confirmaSenha && senha !== confirmaSenha) novosErros.confirmaSenha = "Senhas não conferem.";
    if (!termosAceitos) novosErros.termosAceitos = "Você precisa aceitar os termos.";

    if (Object.keys(novosErros).length > 0) {
      setMensagemErro(novosErros);
      return;
    }

    const usuario = { nome, cpf, email, telefone, idioma, nacionalidade, destino, visto, senha };
    localStorage.setItem('userProfile', JSON.stringify(usuario));

    setShowModal(true);
  }

  function closeModal() {
    setShowModal(false);
    navigate('/login');
    setNome('');
    setCpf('');
    setEmail('');
    setTelefone('');
    setIdioma('');
    setNacionalidade('');
    setDestino('');
    setVisto('');
    setSenha('');
    setConfirmaSenha('');
    setTermosAceitos(false);
    setMensagemErro({});
  }

  const renderErro = (campo) => mensagemErro[campo] && (
    <p style={{ color: 'red', marginTop: '-8%', fontSize: '0.85rem' }}>{mensagemErro[campo]}</p>
  );

  return (
    <div className='amarela-Cadastro'>
      <div className="azul-Cadastro">
        <div className="verde-Cadastro"></div>
        <div className="marrom-Cadastro"></div>
      </div>

      <div className="rosa-Cadastro"></div>

      <div className="vermelha-Cadastro">
        <div className="verdeClaro-Cadastro">
          <div className="azulEscuro-Cadastro">
            <h1 className='titulo-Cadastro'>Cadastro</h1>
          </div>

          <div className="rosaEscuro-Cadastro">
            <div className="Input-Cadastro1">
              <div className="nome-Cadastro">
                <label className='nomeLabel-Cadastro'>Nome completo:</label>
                <input type="text" className='NomeIn-Cadastro' placeholder='Ex:Maria Knupp' value={nome} onChange={(e) => setNome(e.target.value)} />
                {renderErro('nome')}
              </div>

              <div className="nome-Cadastro">
                <label className='nomeLabel-Cadastro'>CPF:</label>
                <input
                  type="text"
                  className='NomeIn-Cadastro'
                  placeholder='Ex:000.000.000-00'
                  value={cpf}
                  onChange={(e) => setCpf(formatCPF(e.target.value))}
                />
                {renderErro('cpf')}
              </div>

              <div className="nome-Cadastro">
                <label className='nomeLabel-Cadastro'>E-mail:</label>
                <input type="text" className='NomeIn-Cadastro' placeholder='Ex:mariaKnupp@gmail.com' value={email} onChange={(e) => setEmail(e.target.value)} />
                {renderErro('email')}
              </div>

              <div className="nome-Cadastro">
                <label className='nomeLabel-Cadastro'>Telefone:</label>
                <input
                  type="text"
                  className='NomeIn-Cadastro'
                  placeholder='Ex:(00) 00000-0000'
                  value={telefone}
                  onChange={(e) => setTelefone(formatTelefone(e.target.value))}
                />
                {renderErro('telefone')}
              </div>

              <div className="nome-Cadastro">
                <label className='nomeLabel-Cadastro'>Idioma Principal:</label>
                <input type="text" className='NomeIn-Cadastro' placeholder='Ex:Portugues' value={idioma} onChange={(e) => setIdioma(e.target.value)} />
                {renderErro('idioma')}
              </div>
            </div>

            <div className="Input-Cadastro2">
              <div className="nome-Cadastro">
                <label className='nomeLabel-Cadastro'>Nacionalidade:</label>
                <input type="text" className='NomeIn-Cadastro' placeholder='Ex:Brasileira' value={nacionalidade} onChange={(e) => setNacionalidade(e.target.value)} />
                {renderErro('nacionalidade')}
              </div>

              <div className="nome-Cadastro">
                <label className='nomeLabel-Cadastro'>Destino:</label>
                <input type="text" className='NomeIn-Cadastro' placeholder='Ex:Goiana' value={destino} onChange={(e) => setDestino(e.target.value)} />
                {renderErro('destino')}
              </div>

              <div className="nome-Cadastro">
                <label className='nomeLabel-Cadastro'>Tipo de visto:</label>
                <select className='vistoIn-Cadastro' value={visto} onChange={(e) => setVisto(e.target.value)}>
                  <option value="">Selecione</option>
                  <option value="Turismo">Turismo</option>
                  <option value="Estudante">Estudante</option>
                  <option value="Trabalho">Trabalho</option>
                  <option value="Residência">Residência</option>
                </select>
                <div className="erros">{renderErro('visto')}</div>
              </div>

              <div className="nome-Cadastro">
                <label className='nomeLabel-Cadastro'>Senha:</label>
                <input
                  type={showSenha ? "text" : "password"}
                  className='NomeIn-Cadastro'
                  placeholder='Ex:1234'
                  value={senha}
                  onChange={(e) => setSenha(e.target.value)}
                />
                <img
                  src={showSenha ? "/SenhaVisivel.png" : "/SenhaInvisivel.png"}
                  alt="Toggle senha"
                  className='imgSenha-Cadastro'
                  onClick={() => setShowSenha(!showSenha)}
                  style={{ cursor: 'pointer' }}
                />
                <div className="Erros">{renderErro('senha')}</div>
              </div>

              <div className="nome-Cadastro">
                <label className='nomeLabel-Cadastro'>Confirma senha:</label>
                <input
                  type={showConfirmaSenha ? "text" : "password"}
                  className='NomeIn-Cadastro'
                  placeholder='Ex:1234'
                  value={confirmaSenha}
                  onChange={(e) => setConfirmaSenha(e.target.value)}
                />
                <img
                  src={showConfirmaSenha ? "/SenhaVisivel.png" : "/SenhaInvisivel.png"}
                  alt="Toggle confirma senha"
                  className='imgSenha-Cadastro'
                  onClick={() => setShowConfirmaSenha(!showConfirmaSenha)}
                  style={{ cursor: 'pointer' }}
                />
                <div className="Erros">{renderErro('confirmaSenha')}</div>
              </div>
            </div>
          </div>

          <div className="roxaClaro-Cadastro">
            <div className="divDentroDeOutra-Cadastro">
              <div className="checkbox-wrapper-46">
                <input type="checkbox" id="cbx-46" className="inp-cbx" checked={termosAceitos} onChange={() => setTermosAceitos(!termosAceitos)} />
                <label htmlFor="cbx-46" className="cbx">
                  <span>
                    <svg viewBox="0 0 12 10" height="10px" width="12px">
                      <polyline points="1.5 6 4.5 9 10.5 1" />
                    </svg>
                  </span>
                  <span>Li e concordo com os termos de uso</span>
                </label>
                {renderErro('termosAceitos')}
              </div>
            </div>

            <div className="DivDoOutroLado-Cadastro">
              <div className="Button-Cadastro">
                <button className='ButtonCa-Cadastrar' onClick={handleCadastro}>Cadastrar</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {showModal && (
        <div style={modalOverlayStyle}>
          <div style={modalContentStyle}>
            <h2>Cadastro realizado com sucesso!</h2>
            <button onClick={closeModal} style={buttonStyle}>Fechar</button>
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

export default CadastroEscuro;
