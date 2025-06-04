import React from 'react'
import "./Saude.css"
// import Modal from '../components/Modal'
import Navbar from '../components/Navbar'

function Saude() {
  return (

    <div className='global-saude'>

 <Navbar/>
       {/* <div className="nav-bar-saude">
        <div className="menu-saude">
            <Modal/>
        </div>
      </div>  */}

        <div className="conteine-desing-saude">
            <div className="azul-saude">
              <img src="design.png" alt="" className='design-png' />
            </div>
        </div> 

            <div className="conteine-propagandas-saude">
                <div className="marrom-propaganda-saude">
                                    <div className="carrossel-container">
                        <div className="carrossel-track" 
                            style={{ transform: `translateX(-${indiceAtual * 100}%)` }}>
                          {imagens.map((imagem, index) => (
                            <div className="slide" key={index}>
                              <img 
                                src={`/images/carrossel/${imagem}`} 
                                alt={`Slide ${index + 1}`}
                                onError={(e) => {
                                  console.error('Erro ao carregar imagem:', e.target.src);
                                  e.target.style.display = 'none';
                                }}
                              />
                            </div>
                          ))}
                        </div>
                        
                        <div className="indicadores">
                          {imagens.map((_, index) => (
                            <button
                              key={index}
                              className={`indicador ${index === indiceAtual ? 'ativo' : ''}`}
                              onClick={() => vaiParaSlide(index)}
                              aria-label={`Ir para slide ${index + 1}`}
                            />
                          ))}
                        </div>
                 </div>

                </div>
            </div>

                <div className="conteine-icones-telao">
                    <div className="conteine-do-canto-esquerdo-saude">

                            <div className="vacinas-saude">
                                    <button className='vacinas2-saude' ><img src="" alt=""/> <h3>vacinas</h3></button>
                            </div>

                            <div className="ajuda-medica-saude"></div>
                            
                            <div className="farmacia-saude"></div>

                    </div>
                </div>
                
                    <div className="mapa-saude">

                           <div className='google-maps'><iframe src="https://www.google.com/maps/d/u/1/embed?mid=17XHPIibzBTiAtwvbIYDEdnIQCO7FoB8&ehbc=2E312F&noprof=1" width="640" height="480" className='mapa' ></iframe> </div>
                    </div>

                        <div className="roda-pe-saude"></div>

    </div>
  )
}

export default Saude