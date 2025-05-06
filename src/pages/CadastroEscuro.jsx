import { useState } from 'react';
import './CadastroEscuro.css'

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
  const [mensagemErro, setMensagemErro] = useState({});
  const [confirmaSenha, setConfirmaSenha] = useState('');
  const [termosAceitos, setTermosAceitos] = useState(false);
  const [erroTermos, setErroTermos] = useState(false);

  function handleCadastro() {
    const novosErros = {};

    if (!nome) novosErros.nome = "O nome é obrigatório.";
    if (!cpf) novosErros.cpf = "O CPF é obrigatório.";
    if (!email) novosErros.email = "O e-mail é obrigatório.";
    if (!telefone) novosErros.telefone = "O telefone é obrigatório.";
    if (!idioma) novosErros.idioma = "O idioma é obrigatório.";
    if (!nacionalidade) novosErros.nacionalidade = "A nacionalidade é obrigatória.";
    if (!destino) novosErros.destino = "O destino é obrigatório.";
    if (!visto) novosErros.visto = "O tipo de visto é obrigatório.";
    if (!senha) novosErros.senha = "A senha é obrigatória.";
    if (!confirmaSenha) novosErros.confirmaSenha = "A confirmação é obrigatória.";
    if (senha && confirmaSenha && senha !== confirmaSenha) novosErros.confirmaSenha = "As senhas não conferem.";

    if (!termosAceitos) {
      setErroTermos(true);
      return;
    } else {
      setErroTermos(false);
    }

    if (Object.keys(novosErros).length > 0) {
      setMensagemErro(novosErros);
      return;
    }

    const usuario = {
      nome,
      cpf,
      email,
      telefone,
      idioma,
      nacionalidade,
      destino,
      visto,
      senha
    };

    localStorage.setItem('usuarioCadastro', JSON.stringify(usuario));
    alert("Cadastro realizado com sucesso!");

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
    setErroTermos(false);

    window.location.href = "/login";
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
                <input type="text" className='NomeIn-Cadastro' placeholder='Ex:000.000.000-00' value={cpf} onChange={(e) => setCpf(e.target.value)} />
                {renderErro('cpf')}
              </div>

              <div className="nome-Cadastro">
                <label className='nomeLabel-Cadastro'>E-mail:</label>
                <input type="text" className='NomeIn-Cadastro' placeholder='Ex:mariaKnupp@gmail.com' value={email} onChange={(e) => setEmail(e.target.value)} />
                {renderErro('email')}
              </div>

              <div className="nome-Cadastro">
                <label className='nomeLabel-Cadastro'>Telefone:</label>
                <input type="text" className='NomeIn-Cadastro' placeholder='Ex:(00) 00000-0000' value={telefone} onChange={(e) => setTelefone(e.target.value)} />
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
                <label className='nomeLabel-Cadastro'>
                  Nacionalidade:
                </label>
                <input type="text" className='NomeIn-Cadastro' placeholder='Ex:Brasileira' value={nacionalidade}
                  onChange={(e) => setNacionalidade(e.target.value)} />
                {renderErro('nacionalidade')}
              </div>

              <div className="nome-Cadastro">
                <label className='nomeLabel-Cadastro'>
                  Destino:
                </label>
                <input type="text" className='NomeIn-Cadastro' placeholder='Ex:Goiana' value={destino}
                  onChange={(e) => setDestino(e.target.value)} />
                {renderErro('destino')}
              </div>

              <div className="nome-Cadastro">
                <label className='nomeLabel-Cadastro'>
                  Tipo de visto:
                </label>
                <select className='vistoIn-Cadastro'
                  value={visto}
                  onChange={(e) => setVisto(e.target.value)}>
                  <option value="">Selecione</option>
                  <option value="select-Login">Turismo</option>
                  <option value="select-Login">Estudante</option>
                  <option value="select-Login">Trabalho</option>
                  <option value="select-Login">Residência</option>
                </select>
                <div className="erros">{renderErro('visto')}</div>
              </div>

              <div className="nome-Cadastro">
                <label className='nomeLabel-Cadastro'>
                  Senha:
                </label>
                <input type="password" className='NomeIn-Cadastro' placeholder='Ex:1234' value={senha}
                  onChange={(e) => setSenha(e.target.value)} />
                <img src="/SenhaInvisivel.png" alt="" className='imgSenha-Cadastro' />
                <div className="Erros">{renderErro('senha')}</div>
              </div>

              <div className="nome-Cadastro">
  <label className='nomeLabel-Cadastro'>Confirma senha:</label>
  <input
    type="password"
    className='NomeIn-Cadastro'
    placeholder='Ex:1234'
    value={confirmaSenha}
    onChange={(e) => setConfirmaSenha(e.target.value)}
  />
  <img src="/SenhaInvisivel.png" alt="" className='imgSenha-Cadastro' />
  <div className="Erros">{renderErro('confirmaSenha')}</div>
</div>

            </div>
          </div>

          <div className="roxaClaro-Cadastro">
          <div className="divDentroDeOutra-Cadastro">
  <div className="checkbox-wrapper-46">
    <input type="checkbox" id="cbx-46" className="inp-cbx" checked={termosAceitos}
      onChange={(e) => setTermosAceitos(e.target.checked)} />
    <label htmlFor="cbx-46" className="cbx"><span>
      <svg viewBox="0 0 12 10" height="10px" width="12px">
        <polyline points="1.5 6 4.5 9 10.5 1" />
      </svg></span><span>Li e concordo com os termos de uso</span>
    </label>
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
    </div>
  )
}

export default CadastroEscuro;