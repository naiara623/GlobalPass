import React, { useEffect, useState } from 'react'
import "./Saude.css"
import Modal from '../components/Modal'
import { Link } from 'react-router-dom';


function Saude() {

const imagens = [
    'bikes.jpg',
    'buss.jpg',
    'varios.jpg',
    'patinetes.jpg'
  ];

  const [indiceAtual, setIndiceAtual] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndiceAtual((prev) => (prev + 1) % imagens.length);
    }, 3000);

    return () => clearInterval(timer);
  }, [imagens.length]);

  const vaiParaSlide = (index) => {
    setIndiceAtual(index);
  };

  // Função para debug - verifique no console do navegador
  console.log('Caminhos das imagens:', 
   imagens.map(img => `/images/carrossel/${img}`));

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
            id: 'sus',
            label: 'Sus',
            conteudo: (
                <div className='info-arruma'>
                    <div className='scrollable-container'>
                    <h3>Ônibus Urbanos</h3>
                  
                    <h4>Tipos de Cartões de Transporte Público e Suas Finalidades</h4>
                    <p>O transporte público oferece diferentes tipos de cartões para atender às necessidades específicas de cada grupo de usuários. Abaixo, explicamos cada um deles:</p>
                      <ExpandableSection title="1. Cartão Turista">
                      <ul>
          <li><h4>Público-alvo:</h4> Visitantes que desejam utilizar o transporte público durante sua estadia.</li>
          <li><h4>Vantagens:</h4> Facilita o deslocamento sem a necessidade de pagar em dinheiro a cada viagem. Pode incluir passes diários ou semanais com tarifas especiais para turistas.</li>
        </ul>
      </ExpandableSection>
      
      <ExpandableSection title="2. Cartões Especiais (Gratuidade/Desconto)">
        <ul>
        <li><h4>Público-alvo:</h4> Pessoas com deficiência, idosos e outros grupos que têm direito a gratuidade ou desconto por lei.</li>
        <li><h4>Vantagens:</h4>Permite o uso gratuito ou com tarifa reduzida do transporte público, garantindo maior acessibilidade e inclusão.</li>
        </ul>
      </ExpandableSection>

      <ExpandableSection title="3. Cartão Cidadão">
        <ul>
        <li><h4>Público-alvo:</h4> Uso geral pela população.</li>
        <li><h4>Vantagens:</h4>  Oferece tarifa reduzida em comparação ao pagamento em dinheiro, além de maior praticidade no dia a dia.</li>
        </ul>
      </ExpandableSection>

      <ExpandableSection title="4. Cartão Estudante">
        <ul>
        <li><h4>Público-alvo:</h4> Estudantes regularmente matriculados em instituições de ensino.</li>
        <li><h4>Vantagens:</h4>Proporciona desconto nas tarifas, ajudando no deslocamento diário para escolas, faculdades ou cursos.</li>
        </ul>
      </ExpandableSection>

      <ExpandableSection title="5. Vale-Transporte (VT)">
        <ul>
        <li><h4>Público-alvo:</h4>  Funcionários de empresas que oferecem o benefício como parte da política de transporte.</li>
        <li><h4>Vantagens:</h4> O custo do transporte é parcial ou totalmente subsidiado pela empresa, reduzindo os gastos do trabalhador com deslocamento.</li>
        </ul>
      </ExpandableSection>

      <p>Cada cartão é desenvolvido para atender a diferentes necessidades, garantindo que todos tenham acesso ao transporte público de forma prática e acessível. Se você se encaixa em algum desses grupos, verifique os requisitos para emissão e aproveite os benefícios!</p>
      <h3>Para mais informalões acesse:</h3>
      <Link to={"https://www.consorciofenix.com.br/passe-rapido/passes?utm_source=chatgpt.com "}> <img className='icon-link' src="Consorcio.png" alt="" /></Link>
      <h3>Para saber os horarios dos Ônibus abaixe:</h3>
      <Link to={"https://play.google.com/store/apps/details?id=br.mobilibus.floripanoponto&pcampaignid=web_share"}> <img className='icon-link' src="floripaNoPonto.png" alt="" /></Link>
                    
                    </div>
                </div>
            )
        },
        {
            id: 'Vacinações',
            label: 'vacinacoes2',
            conteudo: (
                <div className='info-arruma'>
                 <div className='scrollable-container'> 
                    <ExpandableSection title="Como funciona:">
        <ul>
        <li>Sistema de bicicletas compartilhadas administrado pela Tembici.</li>
        <li>Você baixa o app "Bike Floripa" (disponível para Android/iOS), faz cadastro e desbloqueia as bikes nos estações físicas espalhadas pela cidade.</li>
        <li>Viagens adicionais: R$ 5,00 por 30 min.</li>
        </ul>
      </ExpandableSection>

      <ExpandableSection title="Valor:">
        <ul>
        <li>Plano diário: R$ 10,00 (até 4 viagens de 30 min cada).</li>
        <li>Plano mensal: R$ 30,00 (viagens ilimitadas de 30 min).</li>
        <li>Pode deixar em qualquer estação após o uso.</li>
        </ul>
      </ExpandableSection>

      <ExpandableSection title="Tempo de uso:">
        <ul>
        <li>Cada viagem pode durar até 30 minutos sem custo extra (dentro do plano).</li>
        <li>Após isso, cobrança proporcional por minuto.</li>
        </ul>
      </ExpandableSection>

      <ExpandableSection title="Onde pode andar:">
        <ul>
        <li>Cobertura: Principalmente na Região Central (Centro, Lagoa, Beira-Mar, Trindade) e algumas estações na Barra da Lagoa e Canasvieiras.</li>
        <li>Limite: Não pode sair da ilha, mas pode circular por vias urbanas e ciclovias.</li>
        </ul>
      </ExpandableSection>
                </div>
                </div>
            )
        },
  
    ];







  return (

    <div className='global-saude'>

      <div className="nav-bar-saude">
        <div className="menu-saude">
            <Modal/>
        </div>
      </div>

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

                            <div className="botoes-saude">
                                     <div className="botoes2-saude">
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
                    <div className="conteine-do-canto-direto-saude"> 
                          
                          <div className='teste-telão-saude'>
                              {infoAtiva ? (
                                                botoesInfo.find(b => b.id === infoAtiva).conteudo
                                            ) : (
                                                <p className='p-trans-saude'>Selecione uma das opções</p>
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