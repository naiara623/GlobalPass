import React, { useState, useEffect  } from 'react'
import "./Saude.css"
// import Modal from '../components/Modal'
import Navbar from '../components/Navbar'
import hospital from '../assets/hospital.png'
import vacinas from '../assets/vacinas.png'


function Saude() {

  const [indiceAtual, setIndiceAtual] = useState(0);

  const imagens = [
   
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setIndiceAtual((prev) => (prev + 1) % imagens.length);
    }, 3000);

    return () => clearInterval(timer);
  }, [imagens.length]);

  const vaiParaSlide = (index) => {
    setIndiceAtual(index);
  };

  const ExpandableSection = ({ title, children }) => {
          const [isExpanded, setIsExpanded] = useState(false);
        
  // Função para debug - verifique no console do navegador
  console.log('Caminhos das imagens:', 
    imagens.map(img => `/images/carrossel/${img}`));


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
              label: 'Sus',
              imagem: hospital,
              conteudo: (
                <div className='info-arruma'>
                  <div className='scrollable-container'>
                    <h3 className='tituloFundamental-educação'>Ensino Fundamental</h3>
  
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
              label: 'Vacinas',
              imagem: vacinas,
              conteudo: (
                 <div className='info-arruma'>
                  <div className='scrollable-container'>
                    <h3 className='tituloFundamental-educação'>Ensino Médio</h3>
  
                    <p className='pInformativo-educação'>Última etapa da educação básica, geralmente dos 15 aos 17 anos.
                             Tem duração de 3 anos e aprofunda os conhecimentos do Ensino Fundamental.</p>
                        <ExpandableSection title="1. Duração">
                          <ul>
                            <li>3 anos (1º, 2º e 3º anos)</li>
                          </ul>
                        </ExpandableSection>
  
                        <ExpandableSection title="2. Materias">
                          <ul>
                            <li> Portugues, Matemática, Biologia, Histórias, Geografia, Artes, Educação Física, Ingles, Espanhol, Filosofia, Sociologia e Quimica </li>
                          </ul>
                        </ExpandableSection>
  
                        <h3>Objetivos</h3>
                        <p>Preparar o estudante para a vida adulta, faculdade e mercado de trabalho, desenvolvendo a autonomia e aprofundando os conhecimentos adquiridos no Ensino Fundamental.</p>
                  </div>
                  </div>
              )
          },
         
          
  
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

                            <div className="ajuda-medica-saude"></div>
                            
                            <div className="farmacia-saude"></div>

                    </div>

                    <div className='Cinza2-educação'>
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

                           <div className='google-maps'><iframe src="https://www.google.com/maps/d/u/1/embed?mid=17XHPIibzBTiAtwvbIYDEdnIQCO7FoB8&ehbc=2E312F&noprof=1" width="640" height="480" className='mapa' ></iframe> </div>
                    </div>

                        <div className="roda-pe-saude"></div>

    </div>
  )
}

export default Saude
