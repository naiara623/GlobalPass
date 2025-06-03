import React from 'react'
import './GlobalPost.css'

function GlobalPost() {
  return (
    <div className='body-globalpost'>

      <div className='navbar-globalpost'>

          <div className='logo-globalpost' ><h2 className='h2-da-logo-globalpost' >GlobalPost</h2></div>

                <div className='conteine-vazio-navbar' ></div>

                <div className='conteine-icoUser-navnar-globalpost' > <img src="icone-usuario.png" alt=""  className='icoUser-navnar-globalpos' /></div>
      </div>

  {/* é só um imput com um texto ao lado do button */}
      <div className='div-do-button-globalpost'>
            <div className='div-do-butao-postagem-globalpost' ><button className='butao-postagem-globalpost' >Faça uma nova postagem</button> </div>
            <div className='div-butao-MAIS-globalpost' ><button className='butao-MAIS-globalpost'>+</button></div>
      </div>

      <div className='div-das-postagens-globalpost'>

            <div className='conteine-de-uma-postagem-globalpost'>

                <div className='containe-do-nome-foto-globalpost' >

                      <div className='conteine-da-foto-globalpost' >
                              <img src="icone-usuario.png" alt="" className='icone-usuario-globalpost' />
                      </div>  
                         
                        <div className='conteine-do-nome-globalpost' >

                                  <h1 className='nome-teste-globalpost'>Nayaky_silva</h1>
                        </div>

                          <div className='conteine-vazia-globalpost' ></div>

                           <div className='conteine-tresPontos-globalpost' >

                                    <img src="icone-menu-trespont.png" alt="" className='icone-menu-trespont' />
                           </div>


                </div>

                <div className='conteine-DA-postagem-globalpost' ></div>

                  <div className='conteine-icones-globalpost' >

                        <div className='conteine-doicone-curtida-globalpost' > 

                                <img src="icone-curtida.png" alt="" className='icone-curtida' />

                        </div>

                        <div className='conteine-doicone-comentar-globalpost'>
                              <img  className='icone-coment' src="icone-coment.png" alt="" />
                        </div>

                           <div className='icone-conteine-vazia-globalpost' ></div>

                  </div>

            </div>
      </div>






    </div>
  )
}

export default GlobalPost