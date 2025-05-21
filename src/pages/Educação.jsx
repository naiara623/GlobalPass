import React, { useState } from 'react'
import './Educação.css'
import Modal from '../components/Modal'
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import GraduationCapIMG from '../assets/GraduationCapIMG.png'
import ABC from '../assets/ABC.png'
import book from '../assets/book.png'
import Books from '../assets/Books.png'


function Educação() {

  const [infoAtiva, setInfoAtiva] = useState(null);
    
    const botoesInfo = [
        {
            id: 'onibus',
            label: 'fundamental',
            imagem: ABC,
            conteudo: (
                <div className='telao-informações-educação'>
            <div className='abacaxi-educação'>
                    <div className='abacaxi2-educação'>
                         <h1 className='Titulo2-educação'>Ensino Fundamental</h1>
                         <div className='divParagrafo-educação'>
                         <h3 className='Paragrafo1-educação'>O Ensino Fundamental é uma etapa obrigatoria da educação basica no brasil, destinada a crianças de 6 a 14 anos, com duração de 9 anos</h3>
                         </div>
                    
                     
                    </div>

                    <div className='abacaxi3-educação'>
                        <div className='bobesponja-educação'>

                            <h2 className='bu-educação'>Estrutura</h2>

                            <ul className="Lista-educação">
        <li><strong>Anos Iniciais:</strong> 1º ao 5º ano</li>
        <li><strong>Anos Finais:</strong> 6º ao 9º ano</li>
      </ul>
                        </div>

                        <div className='patrik-educação'>

                         <h2 className='bu2-educação'>Disciplinas</h2>

                         <ul className="Lista-educação">
        <li>Português, Matemática</li>
        <li>Ciências, História, Geografia</li>
        <li>Artes, Inglês, Educação Física</li>
      </ul>

                        </div>
                    </div>

                    <div className='abacaxi4-educação'>
                         <h1 className='Titulo2-educação'>Objetivos</h1>

                         <div className='divParagrafo-educação'>
                         <h3 className='Paragrafo1-educação'>Promover a alfabetização, o pensamento critico, e a preparação para o ensino médio, alem do desenvolvimento da cidadania</h3>
                         </div>
                    
                     
                    </div>
                    
                </div>
                </div>
            )
        },
        {
            id: 'bike',
            label: 'Ensino Médio',
            imagem: book,
            conteudo: (
              <div className='telao-informações-educação'>
              <div className='abacaxi-educação'>
                      <div className='abacaxi2-educação'>
                           <h1 className='Titulo2-educação'>Ensino Médio</h1>
                           <div className='divParagrafo-educação'>
                           <h3 className='Paragrafo1-educação'>Última etapa da educação básica, geralmente dos 15 aos 17 anos.
                           Tem duração de 3 anos e aprofunda os conhecimentos do Ensino Fundamental.</h3>
                           </div>
                      
                       
                      </div>
  
                      <div className='abacaxi3-educação'>
                          <div className='bobesponja-educação'>
  
                              <h2 className='bu-educação'>Estrutura</h2>
  
                              <ul className="Lista-educação">
          <li><strong> Duração:</strong> 3 anos (1º, 2º e 3º anos)</li>
         
        </ul>
                          </div>
  
                          <div className='patrik-educação'>
  
                           <h2 className='bu2-educação'>Disciplinas</h2>
  
                           <ul className="Lista-educação">
          <li>Português, Matemática</li>
          <li>Biologia, História, Geografia</li>
          <li>Artes, Inglês, Educação Física</li>
          <li>Entre outras</li>
        </ul>
  
                          </div>
                      </div>
  
                      <div className='abacaxi4-educação'>
                           <h1 className='Titulo2-educação'>Objetivos</h1>
  
                           <div className='divParagrafo-educação'>
                           <h3 className='Paragrafo1-educação'>Preparar o estudante para a vida adulta, faculdade e mercado de trabalho, desenvolvendo a autonomia e aprofundando os conhecimentos adquiridos no Ensino Fundamental.</h3>
                           </div>
                      
                       
                      </div>
                      
                  </div>
                  </div>
            )
        },
        {
            id: 'patinete',
            label: 'Cursos',
            imagem: Books,
            conteudo: (
              <div className='telao-informações-educação'>
              <div className='abacaxi-educação'>
                      <div className='abacaxi2-educação'>
                           <h1 className='Titulo2-educação'>Cursos</h1>
                           <div className='divParagrafo-educação'>
                           <h3 className='Paragrafo1-educação'>Os cursos são formações específicas que complementam a educação ou preparam para o mercado de trabalho. Podem ser feitos após ou durante o Ensino Médio.</h3>
                           </div>
                      
                       
                      </div>
  
                      <div className='abacaxi3-educação'>
                          <div className='bobesponja2-educação'>
                            <div className='Titulooi-educação'>
                              <h2>Tipos de cursos</h2>
                            </div>

                            <div className='tipos-educação'>
                              
                            </div>
  
                             
                          </div>
                      </div>
  
                      <div className='abacaxi4-educação'>
                           <h1 className='Titulo2-educação'>Objetivos</h1>
  
                           <div className='divParagrafo-educação'>
                           <h3 className='Paragrafo1-educação'>Promover a alfabetização, o pensamento critico, e a preparação para o ensino médio, alem do desenvolvimento da cidadania</h3>
                           </div>
                      
                       
                      </div>
                      
                  </div>
                  </div>
            )
        },
        {
          id: 'educacao',
          label: 'Faculdade',
          imagem: GraduationCapIMG,
          conteudo: (
            <div className='telao-informações-educação'>
            <div className='abacaxi-educação'>
                    <div className='abacaxi2-educação'>
                         <h1 className='Titulo2-educação'>Faculdade</h1>
                         <div className='divParagrafo-educação'>
                         <h3 className='Paragrafo1-educação'>O Ensino Fundamental é uma etapa obrigatoria da educação basica no brasil, destinada a crianças de 6 a 14 anos, com duração de 9 anos</h3>
                         </div>
                    
                     
                    </div>

                    <div className='abacaxi3-educação'>
                        <div className='bobesponja-educação'>

                            <h2 className='bu-educação'>Estrutura</h2>

                            <ul className="Lista-educação">
        <li><strong>Anos Iniciais:</strong> 1º ao 5º ano</li>
        <li><strong>Anos Finais:</strong> 6º ao 9º ano</li>
      </ul>
                        </div>

                        <div className='patrik-educação'>

                         <h2 className='bu2-educação'>Disciplinas</h2>

                         <ul className="Lista-educação">
        <li>Português, Matemática</li>
        <li>Ciências, História, Geografia</li>
        <li>Artes, Inglês, Educação Física</li>
      </ul>

                        </div>
                    </div>

                    <div className='abacaxi4-educação'>
                         <h1 className='Titulo2-educação'>Objetivos</h1>

                         <div className='divParagrafo-educação'>
                         <h3 className='Paragrafo1-educação'>Promover a alfabetização, o pensamento critico, e a preparação para o ensino médio, alem do desenvolvimento da cidadania</h3>
                         </div>
                    
                     
                    </div>
                    
                </div>
                </div>
          )
        }
    ];
  return (
    <div className='Amarelo-educação'>
        
        <style>
@import url('https://fonts.googleapis.com/css2?family=Inter+Tight:ital,wght@0,100..900;1,100..900&family=Roboto:ital,wght@0,100..900;1,100..900&display=swap');
</style>

       <div className='Vermelho-educação'>
         <div className='Branco-educação'> <Modal/> </div>
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
            <div className='Cinza-educação'>
            <div className="carrossel-educação"> {/* altura total da tela */}
      <Splide
        options={{
          type: "loop",
          perPage: 1, // Um slide por vez
          autoplay: true,
          interval: 3000,
          pauseOnHover: true,
          arrows: true,
          pagination: true,
        }}
        aria-label="Imagens de exemplo"
        className=""
      >
        <SplideSlide>
           <img
            src="img-ganela.jpg"
            alt="Imagem janela"
            className="enem-educação"
          /> </SplideSlide>

        <SplideSlide>
          <img
            src="img-montanha.jpg"
            alt="Imagem montanha"
            className="eja-educação"
          />
         </SplideSlide>
      </Splide> 
    </div>
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
                        <span>{botao.label}</span>
                    </button>
                ))}

                </div>
               </div>
            </div>

            <div className='Cinza2-educação'>

            {infoAtiva ? (
                    botoesInfo.find(b => b.id === infoAtiva).conteudo
                ) : (
                    <p className='p-trans'>Selecione um modal de educação</p>
                )}

            </div>
         </div>

         <div className='RoxoClaro-educação'>
            <div className='tubarão-educação'></div>

            
         </div>

         <div className='RosoEscuro-educação'></div>

    </div>
  )
}

export default Educação
