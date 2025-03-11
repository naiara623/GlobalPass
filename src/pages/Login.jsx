import './Login.css'

function Login() {
  return (
    <div className='Amarela-Login'>
        <div className="vermelha1-Login">
            <div className="azulClaro1-Login"></div>
        </div>
        <div className="azul-Login">
          <div className="roxo-Login">
            <div className="rosa-Login">
                <h1 className='titulo-login'>Login</h1>
            </div>
              <div className="amarelo-Login">
                <div className="marron-login">
                <label className='labelnome-login'>Nome Completo</label>
              <input type="text" className='inputNome-login' placeholder='Ex: Maria Knupp' />

              <label className='labelcpf-login'>CPF</label>
              <input type="text" className='inputcpf-login' placeholder='000.000.000-00' />

              <label className='labelemail-login'>Email</label>
              <input type="text" className='inputemail-login' placeholder='mariaKnupp@gmail.com' />

              <label className='labeltele-login'>Telefone</label>
             <input type="text" className='inputtele-login' placeholder='(00) 0000-0000' />

                </div>
              </div>
            <div className="rosa2-Login">
              <button className='Entrar-login'><span>Entrar</span></button>
            </div>
          </div>
        </div>

        <div className="vermelha2-Login">
        <div className="azulClaro2-Login"></div>
        </div>
    </div>
  )
}

export default Login
