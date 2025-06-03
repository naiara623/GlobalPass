import React, { useState } from 'react'
import "./Saude.css"
// import Modal from '../components/Modal'
import Navbar from '../components/Navbar'
import hospital from '../assets/hospital.png'
import vacinas from '../assets/vacinas.png'

function Saude() {
     const ExpandableSection = ({ title, children }) => {
          const [isExpanded, setIsExpanded] = useState(false);
        
          return (
            <div className="expandable-section">
              <div 
                className="section-header" 
                onClick={() => setIsExpanded(!isExpanded)}
                style={{ cursor: 'pointer', display: 'flex', alignItems: 'center' }}
              >
                <span className="arrow" style={{ 
                  marginRight: '8px',
                  transform: isExpanded ? 'rotate(90deg)' : 'rotate(0)',
                  transition: 'transform 0.2s ease'
                }}>
                  ➤
                </span>
                <h3>{title}</h3>
              </div>
              
              {isExpanded && (
                <div className="section-content">
                  {children}
                </div>
              )}
            </div>
          );
        };
  

        const [infoAtiva, setInfoAtiva] = useState(null);

   const botoesInfo = [
          {
              id: 'onibus',
              label: 'Vacinas',
              imagem: vacinas,
              conteudo: (
                <div className='info-arruma'>
                  <div className='scrollable-container'>
                    <h3 className='tituloFundamental-educação'>Vacinas</h3>
  
                    <p className='pInformativo-educação'>O Ensino Fundamental é uma etapa obrigatoria da educação basica no brasil, destinada a crianças de 6 a 14 anos, com duração de 9 anos</p>
                        <ExpandableSection title="1. Duração">
                          <ul>
                            <li><h4>Anos Inicias</h4> 1º ao 5º ano</li>
                            <li><h4>Anos Final</h4> 6º ao 9º ano</li>
                          </ul>
                        </ExpandableSection>
  
                        <ExpandableSection title="2. Materias">
                          <ul>
                            <li><h4>Anos Inicias</h4> Portugues, Matemática, Ciências, Histórias, Geografia, Artes, Educação Física e Ingles (em algumas escolas)</li>
                            <li><h4>Anos Final</h4> Portugues, Matemática, Ciências, Histórias, Geografia, Artes, Educação Física, Ingles e Ensino Religioso (em algumas escolas)</li>
                          </ul>
                        </ExpandableSection>
  
                        <h3>Objetivos</h3>
                        <p>Promover a alfabetização, o pensamento critico, e a preparação para o ensino médio, alem do desenvolvimento da cidadania</p>
                  </div>
                  </div>
              )
          },
          {
              id: 'bike',
              label: 'Sus',
              imagem: hospital,
              conteudo: (
                 <div className='info-arruma'>
                  <div className='scrollable-container'>
                    <h3 className='tituloFundamental-educação'>Sus (Sistema Único de Saúde)</h3>
  
                    <p className='pInformativo-educação'>O SUS é a rede pública de saúde do Brasil, garantida pela Constituição Federal de 1988. Ele oferece atendimento médico gratuito para toda a população..</p>
                        <ExpandableSection title="1. Serviços Oferecidos">
                          <ul>
                            <li>Atendimento primário (postos de saúde, UBS) </li>
                            <li>Emergências (SAMU 192, UPAs, hospitais)</li>
                            <li>Vacinação (Programa Nacional de Imunizações)</li>
                            <li>Tratamento de doenças crônicas (HIV, diabetes, hipertensão)</li>
                            <li>Transplantes e cirurgias</li>
                            <li>Saúde mental (CAPS – Centros de Atenção Psicossocial)</li>
                            <li>Medicamentos gratuitos (Farmácia Popular, programas específicos)</li>
                            <li>Pré-natal e saúde da mulher</li>     
                          </ul>
                        </ExpandableSection>
  
                        <ExpandableSection title="2. Locais de Atendimento">
                          <ul>
                            <li>Postos de saúde por bairro</li>
                            <li>Hospitais públicos e UPAs</li>
                            <li>Farmácias públicas (Farmácia Escola, Farmácia Cidadã)</li>
                            <li>Centros de Atendimento à Mulher, Saúde da Família, Saúde Mental etc</li>
                            <li>Veja os locais informados acima, no mapa abaixo!</li>
                          </ul>
                        </ExpandableSection>
  
                        <h3>Objetivos</h3>
                        <p>O SUS (Sistema Único de Saúde) existe para garantir que todos que precisam, sem exceção, tenha acesso a serviços de saúde gratuitos e de qualidade. Ele nasceu da ideia de que a saúde é um direito básico, não um privilégio de quem pode pagar.</p>
                  </div>
                  </div>
              )
          }
          
        ];
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
                   <div className='Marrom-educação'>
                                  <div className='arrumar-butao'>
                                   <div className='alguma-coisa-educaçõa'>
                                     {botoesInfo.map((botao) => (
                                       <button
                                           key={botao.id}
                                           className={`info-button ${infoAtiva === botao.id ? 'ativo' : ''}`}
                                           onClick={() => setInfoAtiva(botao.id)}
                                       >
                                           <img src={botao.imagem} alt={botao.label} className="botao-imagem" />
                                           <span className='span-oi'>{botao.label}</span>
                                       </button>
                                   ))}
                   
                                   </div>
                                  </div>
                               </div>
                    <div className="conteine-do-canto-direto-saude">
                       <div className='info-box'>
                                      {infoAtiva ? (
                                          botoesInfo.find(b => b.id === infoAtiva).conteudo
                                      ) : (
                                          <p className='p-trans'>Selecione um modal de educação</p>
                                      )}
                                    </div>
                    </div>
                </div>
                
                    <div className="mapa-saude">

                           <div className='google-maps'><iframe src="https://www.google.com/maps/d/embed?mid=100ud0eYC4ydxCMohkZD6EYFJe5i7JEE&ehbc=2E312F" width="640" height="480" className='mapa'  ></iframe> </div>
                    </div>

                        <div className="roda-pe-saude"></div>

    </div>
  )
}

export default Saude