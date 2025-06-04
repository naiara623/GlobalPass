import React, { useState, useEffect } from 'react';
import './Educação.css'
import GraduationCapIMG from '../assets/GraduationCapIMG.png'
import ABC from '../assets/ABC.png'
import ensino from '../assets/ensino.png'
import Books from '../assets/Books.png'
import Navbar from '../components/Navbar';
import CarrosselEducacao from '../components/CarrosselEducacao';


function Educação() {

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
            label: 'ensino fundamental',
            imagem: ABC,
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
            label: 'Ensino Médio',
            imagem: ensino,
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
        {
            id: 'patinete',
            label: 'Cursos',
            imagem: Books,
            conteudo: (
              <div className='info-arruma'>
                <div className='scrollable-container'>
                  <h3 className='tituloFundamental-educação'>Cursos</h3>

                  <p className='pInformativo-educação'>Os cursos são formações específicas que complementam a educação ou preparam para o mercado de trabalho. Podem ser feitos após ou durante o Ensino Médio.</p>
                      <ExpandableSection title="1. Duração">
                        <ul>
                          <li>Meses a 2 anos</li>
                        </ul>
                      </ExpandableSection>

                      <ExpandableSection title="2.Tipos de cursos">
                        <ul>
                          <li><h4>Técnico:</h4>Focado em formação prática para atuar em áreas específicas, geralmente de curta duração (de meses a 2 anos).</li>
                          <li><h4>Livre:</h4> Cursos sem regulamentação formal, voltados para aprendizado rápido em temas variados.</li>
                          <li><h4>Graduação:</h4>Ensino superior que confere diploma de bacharelado, licenciatura ou tecnólogo, com duração média de 2 a 6 anos</li>
                          <li><h4>Pós-Graduação:</h4>Formação após a graduação, subdividida em lato sensu (especialização, MBA) e stricto sensu (mestrado e doutorado).</li>
                          <li><h4>Online (EAD):</h4>Qualquer curso oferecido pela internet, pode ser técnico, graduação ou livre, com flexibilidade de horários..</li>
                          <li><h4> Extensão:</h4> Cursos rápidos e focados em atualização ou aprofundamento em temas específicos, voltados para profissionais ou estudantes.</li>

                        </ul>
                      </ExpandableSection>

                      <h3>Objetivos</h3>
                      <p>O objetivo dos cursos é capacitar e formar indivíduos, desenvolvendo habilidades e conhecimentos específicos para atuação profissional, aperfeiçoamento pessoal ou continuidade dos estudos. Eles visam preparar o estudante para o mercado de trabalho, promover o desenvolvimento social e estimular a inovação e o pensamento crítico.</p>
                </div>
                </div>
            )
        },
        {
          id: 'educacao',
          label: 'Faculdade',
          imagem: GraduationCapIMG,
          conteudo: (
            <div className='info-arruma'>
                <div className='scrollable-container'>
                  <h3 className='tituloFundamental-educação'>Faculdade</h3>

                  <p className='pInformativo-educação'>Faculdade é uma instituição de ensino superior que oferece cursos voltados à formação profissional e acadêmica, conferindo diplomas de graduação, como bacharelado, licenciatura ou tecnólogo.</p>
                      <ExpandableSection title="1. Duração">
                        <ul>
                          <li><h4>Tecnólogo:</h4>2 a 3 anos.</li>
                          <li><h4>Bacharelado:</h4>4 a 6 anos.</li>
                           <li><h4>Licenciatura:</h4>3 a 4 anos.</li>
                        </ul>
                      </ExpandableSection>

                      <ExpandableSection title="2. Tipos de faculdades">
                        <ul>
                          <li><h4>Bacharelado:</h4>formação generalista e ampla, prepara para diversas áreas de atuação.</li>
                          <li><h4>Licenciatura:</h4>prepara para ser professor na educação básica.</li>
                           <li><h4>Tecnólogo:</h4>formação mais rápida e prática, focada em necessidades específicas do mercado.</li>
                            <li><h4>Sequencial:</h4>cursos rápidos, de complementação ou atualização profissional.</li>
                        </ul>
                      </ExpandableSection>

                      <h3>Objetivos</h3>
                      <p>A faculdade tem como objetivo principal formar profissionais qualificados para atuar no mercado de trabalho, desenvolvendo habilidades técnicas e teóricas específicas de cada área. Além disso, busca estimular a pesquisa e a inovação, contribuindo para o avanço do conhecimento. Também promove o pensamento crítico e a cidadania, preparando os estudantes para participarem ativamente da sociedade.</p>
                </div>
                </div>
          )
        }

    ];

  //   const imagens = [
  //   'enem.png',
  //   'eja.png',
  //   'enceja.png',
  // ];
    
      // const [indiceAtual, setIndiceAtual] = useState(0);
    
      // useEffect(() => {
      //   const timer = setInterval(() => {
      //     setIndiceAtual((prev) => (prev + 1) % imagens.length);
      //   }, 3000);
    
      //   return () => clearInterval(timer);
      // }, [imagens.length]);
    
      // const vaiParaSlide = (index) => {
      //   setIndiceAtual(index);
      // };
    
      // // Função para debug - verifique no console do navegador
      // console.log('Caminhos das imagens:', 
      //   imagens.map(img => `/images/carrossel/${img}`));
  return (
    <div className='Amarelo-educação'>
        
        <style>
@import url('https://fonts.googleapis.com/css2?family=Inter+Tight:ital,wght@0,100..900;1,100..900&family=Roboto:ital,wght@0,100..900;1,100..900&display=swap');
</style>
                <Navbar/>
       

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
            <div className='Cinza-educação'>
<CarrosselEducacao  />
            </div>
         </div>

         <div className='Vermelha2-educação'>
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

         <div className='RoxoClaro-educação'>
            <div className='tubarão-educação'>

               <div><iframe src="https://www.google.com/maps/d/u/0/embed?mid=1cG76n36kAR8emNl415kZpH6B-QXa6aQ&ehbc=2E312F&noprof=1" width="640" height="480" className='mapa-educacao'></iframe></div>
            </div>

            
         </div>

         <div className='RosoEscuro-educação'></div>

    </div>
  )
}

export default Educação
