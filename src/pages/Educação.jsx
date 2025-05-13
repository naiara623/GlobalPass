import React from 'react'
import './Educação.css'
import Modal from '../components/Modal'


function Educação() {
  return (
    <div className='Amarelo-educação'>
        
       <div className='Vermelho-educação'>
         <div className='Branco-educação'> <Modal/></div>
       </div>

       <div className='Rosa-educação'>
        <div className='Azul-educação'>

            <div className='sla2-educação'>
            <h1 className='Titulo1-educação'>Educação: Do Básico ao Avançado</h1>
            </div>
             
            <div className='sla-educação'>
                  <img className='arvore-educação' src="Arvore.png" alt="Arvore dos alunos" /> 
            </div>
           
        </div>
       </div>

         <div className='AzulEscuro-educação'>
            <div className='Cinza-educação'></div>
         </div>

         <div className='Vermelha2-educação'>
            <div className='Marrom-educação'>
                <div className='Fundamental'></div>

                <div className='médio'></div>

                <div className='cursos'></div>

                <div className='Faculdade'></div>
            </div>

            <div className='Cinza2-educação'></div>
         </div>

         <div className='RoxoClaro-educação'></div>

         <div className='RosoEscuro-educação'></div>

    </div>
  )
}

export default Educação
