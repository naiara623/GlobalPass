import React, { useState } from 'react';
import './Transporte.css';
import busIMG from '../assets/bus.png';
import bikeIMG from '../assets/bike.png';
import patineteIMG from '../assets/patinete.png';
import CarrosselAutomatico from '../components/CarrosselAutomatico';
import Navbar from '../components/Navbar';
import { Link } from 'react-router-dom';


function Transporte() {
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



    const imagens = [];

    const [infoAtiva, setInfoAtiva] = useState(null);
    
    const botoesInfo = [
        {
            id: 'onibus',
            label: 'Ônibus',
            imagem: busIMG,
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
            id: 'bike',
            label: 'Bicicleta',
            imagem: bikeIMG,
            conteudo: (
                <div className='info-arruma'>
                 <div className='scrollable-container'> 
                    <h3> Bicicletas Públicas (Bike Floripa)</h3>
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
      <h4>Bicicleta </h4> <p>é melhor para trajetos mais longos (ex.: Centro → Lagoa).</p>
      <h4>Verifique no app </h4> <p>a disponibilidade e áreas de estacionamento para evitar multas.</p>

      <Link to={"https://www.tembici.com.br/pt/"}><img className='icon-app' src="tembici.png" alt="" />  </Link>
      <Link to={"https://www.biketogofloripa.com.br/"}><img className='icon-app' src="biketogo.png" alt="" />  </Link>
      <Link to={"https://pedale.net.br/"}><img className='icon-app' src="Pedale.png" alt="" />  </Link>
      <Link to={"https://jetshr.com/br/"}><img className='icon-app' src="jet.png" alt="" />   </Link>
                </div>
                </div>
            )
        },
        {
            id: 'patinete',
            label: 'Patinete',
            imagem: patineteIMG,
            conteudo: (
                <div className='info-arruma'>

<div className='scrollable-container'> 

                    <h3> Patinetes Elétricos (Lime, Bird, etc.)</h3>
                  
                    <ExpandableSection title="Como funciona:">
        <ul>
        <li>Empresas como Lime e Bird operam patinetes elétricos espalhados pela cidade.</li>
        <li>Baixe o app da operadora, escaneie o QR code do patinete e comece a rodar.</li>
        <li>Estacionamento: Deve ser em locais permitidos (não pode bloquear calçadas).</li>
        </ul>
      </ExpandableSection>

      <ExpandableSection title="Valor:">
        <ul>
        <li>Desbloqueio: R$ 5,00 a R$ 5,00 a R$ 7,00 (varia por empresa).</li>
        <li>Por minuto: R$0,50, a R$1,00</li>
        <li>Exemplo: 15 min = ~R$ 10,00 a R$ 10,00aR 15,00.</li>
        </ul>
      </ExpandableSection>

      <ExpandableSection title="Tempo de uso:">
        <ul>
        <li>Cobrado por minuto, sem limites pré-definidos (mas a bateria acaba após ~20-30 km).</li>
        </ul>
      </ExpandableSection>

      <ExpandableSection title="Onde pode andar:">
        <ul>
        <li>Cobertura: Áreas turísticas e planas como Beira-Mar, Lagoa, Jurerê, Centro.</li>
        <li>Limite: Alguns apps travam se você tentar ir para regiões afastadas (ex.: Santo Antônio de Lisboa ou Costa Norte).</li>
        <li>Proibido: Calçadas, avenidas de alta velocidade (como a SC-401) e fora da área de operação.</li>
        </ul>
      </ExpandableSection>
      <h4>Patinete  </h4> <p>é mais prático para curtas distâncias (ex.: Beira-Mar → Ponte Hercílio Luz).</p>
      <h4>Verifique no app </h4> <p>a disponibilidade e áreas de estacionamento para evitar multas.</p>
      <Link to={"https://jetshr.com/br/"}><img className='icon-app' src="jet.png" alt="" />   </Link>
      <Link to={"https://whoosh.bike/br"}><img className='icon-app' src="whoosh.png" alt="" />   </Link>
                </div>
                </div>
            )
        }
    ];



  return (
    <div className='Trans-conteiner'>

 <Navbar/>

<div className='transporte-texto-img'>
<div className='transporte-texto'> 
<img className='img' src="BusBus2.png" alt="" />
</div>
</div>

<div className='transporte-quadrado1'>

<div className='quadrado-vermelho-arrumado'>
<CarrosselAutomatico imagens={imagens} intervalo={5000} />
</div>
</div>

<div className='transporte-asunto'>

<div className='asunto-buttos'>
  <div className='butt-asun'>
  <div className="botoes">
  {botoesInfo.map((botao) => (
                    <button
                        key={botao.id}
                        className={`info-button1 ${infoAtiva === botao.id ? 'ativo' : ''}`}
                        onClick={() => setInfoAtiva(botao.id)}
                    >
                        <img src={botao.imagem} alt={botao.label} className="botao-imagem" />
                        <span>{botao.label}</span>
                    </button>
                ))}
      </div>
  </div>
</div>
<div className='asunto-contes'>
<div className="info-box">
{infoAtiva ? (
                    botoesInfo.find(b => b.id === infoAtiva).conteudo
                ) : (
                    <p className='p-trans'>Selecione uma das opções</p>
                )}
      </div>
</div>

</div>

<div className='transporte-map'>
  <div className='map'></div>
</div>

<div className='transporte-roda-pe'>

<div className='lado-esquerdo'> <img className='loggo' src="logooo.png" alt="" /> </div>
<div className='lado-direito '>  </div>

</div>
    </div>
  )
}

export default Transporte
