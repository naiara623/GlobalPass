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
  const [confirmaSenha, setConfirmaSenha] = useState('');
  const [termosAceitos, setTermosAceitos] = useState(false);

  function handleCadastro() {
    if (!termosAceitos) {
      alert("Você precisa aceitar os termos de uso.");
      return;
    }

    if (senha !== confirmaSenha) {
      alert("As senhas não conferem!");
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
    
    // Limpar campos
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
  }

  return (
    <div className='amarela-Cadastro'>
     <div className="azul-Cadastro">
        <div className="verde-Cadastro">
        </div>

        <div className="marrom-Cadastro"></div>

        {/* <div className="roxa-Cadastro"></div> */}
     </div>

     <div className="rosa-Cadastro">
     </div>

     <div className="vermelha-Cadastro">
        <div className="verdeClaro-Cadastro">
          <div className="azulEscuro-Cadastro">
            <h1 className='titulo-Cadastro'>Cadastro</h1>
          </div>

          <div className="rosaEscuro-Cadastro">
           <div className="Input-Cadastro1">
           
            <div className="nome-Cadastro">
              <label className='nomeLabel-Cadastro'>
                Nome completo:
              </label>
              <input type="text"
              className='NomeIn-Cadastro'
               placeholder='Ex:Maria Knupp'
               value={nome}
               onChange={(e) => setNome(e.target.value)} />
            </div>

            <div className="nome-Cadastro">
              <label className='nomeLabel-Cadastro'>
                CPF:
              </label>
              <input type="text"
               className='NomeIn-Cadastro' 
                placeholder='Ex:000.000.000-00'
                value={cpf}
                onChange={(e) => setCpf(e.target.value)}
                />
            </div>

            <div className="nome-Cadastro">
              <label className='nomeLabel-Cadastro'>
                E-mail:
              </label>
              <input type="text" 
              className='NomeIn-Cadastro' 
               placeholder='Ex:mariaKnupp@gmail.com' 
                value={email}
                onChange={(e) => setEmail(e.target.value)}/>
            </div>

            <div className="nome-Cadastro">
              <label className='nomeLabel-Cadastro'>
              Telefone:
              </label>
              <input type="text" className='NomeIn-Cadastro'  placeholder='Ex:(00) 00000-0000'  value={telefone}
                onChange={(e) => setTelefone(e.target.value)} />
            </div>

            <div className="nome-Cadastro">
              <label className='nomeLabel-Cadastro'>
              Idioma Principal:
              </label>
              <input type="text" className='NomeIn-Cadastro'  placeholder='Ex:Portugues'  value={idioma}
                onChange={(e) => setIdioma(e.target.value)}/>
            </div>
            
           </div>

           <div className="Input-Cadastro2">
            
           <div className="nome-Cadastro">
              <label className='nomeLabel-Cadastro'>
               Nacionalidade:
              </label>
              <input type="text" className='NomeIn-Cadastro'  placeholder='Ex:Brasileira' value={nacionalidade}
                onChange={(e) => setNacionalidade(e.target.value)}/>
            </div>

            <div className="nome-Cadastro">
              <label className='nomeLabel-Cadastro'>
                Destino:
              </label>
              <input type="text" className='NomeIn-Cadastro'  placeholder='Ex:Goiana'  value={destino}
                onChange={(e) => setDestino(e.target.value)}/>
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
            </div>

            <div className="nome-Cadastro">
              <label className='nomeLabel-Cadastro'>
              Senha:
              </label>
              <input type="password" className='NomeIn-Cadastro'  placeholder='Ex:1234'   value={senha}
                onChange={(e) => setSenha(e.target.value)}/>
              <img src="/SenhaInvisivel.png" alt="" className='imgSenha-Cadastro'/>
            </div>

            <div className="nome-Cadastro">
              <label className='nomeLabel-Cadastro'>
              Confirma senha:
              </label>
              <input type="password" className='NomeIn-Cadastro' placeholder='Ex:1234'  value={confirmaSenha}
                onChange={(e) => setConfirmaSenha(e.target.value)}/>
              <img src="/SenhaInvisivel.png" alt="" className='imgSenha-Cadastro' />
            </div>
         
           </div>
          </div>

          <div className="roxaClaro-Cadastro">
            <div className="divDentroDeOutra-Cadastro">
              <div className="checkbox-wrapper-46">
        <input type="checkbox" id="cbx-46" className="inp-cbx" checked={termosAceitos}
                onChange={(e) => setTermosAceitos(e.target.checked)}/>
        <label htmlFor="cbx-46" className="cbx"><span>
            <svg viewBox="0 0 12 10" height="10px" width="12px">
              <polyline points="1.5 6 4.5 9 10.5 1" /></svg></span><span>Li e concordo com os termos de uso</span>
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

export default CadastroEscuro
