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
                <div className="marrom-propaganda-saude"></div>
            </div>

                <div className="conteine-icones-telao">
                    <div className="conteine-do-canto-esquerdo-saude">

                            <div className="vacinas-saude">
                                    <button className='vacinas2-saude' ><img src="" alt=""/> <h3>vacinas</h3></button>
                            </div>

                            <div className="ajuda-medica-saude"></div>
                            
                            <div className="farmacia-saude"></div>

                    </div>
                    <div className="conteine-do-canto-direto-saude"></div>
                </div>
                
                    <div className="mapa-saude">

                           <div className='google-maps'><iframe src="https://www.google.com/maps/d/embed?mid=100ud0eYC4ydxCMohkZD6EYFJe5i7JEE&ehbc=2E312F" width="640" height="480" className='mapa'  ></iframe> </div>
                    </div>

                        <div className="roda-pe-saude"></div>

    </div>
  )
}

export default Saude