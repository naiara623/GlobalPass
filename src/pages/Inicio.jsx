import './Inicio.css'
import React, { useState, useEffect } from 'react';
import Comentarios from '../components/Comentarios';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';




function Inicio() {

  const [activeIndex, setActiveIndex] = useState(0);
  const items = [
    { id: '1', conteudo: <div className='div-imagens-fl'><img className='imagens-fl' src="./fl-pedra.png" alt="" /></div> },
    { id: '2', conteudo: <div className='div-imagens-fl'><img className='imagens-fl' src="./fl-manha.png" alt="" /></div> },
    { id: '3', conteudo: <div className='div-imagens-fl'><img className='imagens-fl' src="./fl-noite.png" alt="" /></div> },
    { id: '4', conteudo: <div className='div-imagens-fl'><img className='imagens-fl' src="./fl-porsol.png" alt="" /></div> },
    { id: '5', conteudo: <div className='div-imagens-fl'><img className='imagens-fl' src="./fl-museu.png" alt="" /></div> },
    { id: '6', conteudo: <div className='div-imagens-fl'><img className='imagens-fl' src="./fl-praia.png" alt="" /></div> },
    { id: '7', conteudo: <div className='div-imagens-fl'><img className='imagens-fl' src="./fl-igreja.png" alt="" /></div> },
    { id: '8', conteudo: <div className='div-imagens-fl'><img className='imagens-fl' src="./fl-dia.png" alt="" /></div> },
    { id: '9', conteudo: <div className='div-imagens-fl'><img className='imagens-fl' src="./fl-parque.png" alt="" /></div> }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex(prev => (prev + 1) % items.length);
    }, 1500);

    return () => clearInterval(interval);
  }, [items.length]);

  const navigate = useNavigate()

  const telaTrans = () =>{
    navigate('/transporte');
  }

  const telaEduca = () =>{
    navigate('/educação');
  }

  const telaSal = () =>{
    navigate('/saude');
  }


  const [novoComentario, setNovoComentario] = useState("");
  const [respondendoPara, setRespondendoPara] = useState(null);
  const [comentariosExtras, setComentariosExtras] = useState([]);

  const handleResponder = (usuario) => {
    setRespondendoPara(usuario);
    setNovoComentario(`@${usuario} `);
  };

  const adicionarComentario = () => {
    if (novoComentario.trim()) {
      if (respondendoPara) {
        // Lógica para adicionar resposta (pode precisar ser ajustada)
        const novoComentarioObj = {
          usuario: "Você",
          texto: novoComentario,
          tempo: "Agora",
          respondendoA: respondendoPara
        };
        setComentariosExtras([...comentariosExtras, novoComentarioObj]);
      } else {
        // Lógica para novo comentário principal
        const novoComentarioObj = {
          usuario: "Você",
          texto: novoComentario,
          tempo: "Agora"
        };
        setComentariosExtras([...comentariosExtras, novoComentarioObj]);
      }
      
      setNovoComentario("");
      setRespondendoPara(null);
    }
  };


 


  return (
    <div className='inicio-conteiner-inicio'>
    <style>
@import url('https://fonts.googleapis.com/css2?family=Inter+Tight:ital,wght@0,100..900;1,100..900&family=Roboto:ital,wght@0,100..900;1,100..900&display=swap');
</style>

   {/* <style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100..900;1,100..900&display=swap');
</style> */}

<Navbar/>
      
      <div className='inicio-conteiner-imagens'>
      
        <div className='inicio-comentario'>
            
            <div className='quadrado-frase'>
            <p className='inicio-frases'>Descubra novos destinos, crie memórias inesquecíveis.</p>
            </div>
            
        </div>
        
        <div className='inicio-imagens'>
          
        <div className="carrossel-horizontal-container">
      <div className="carrossel-track1">
        {items.map((item, index) => {
          // Cálculo ajustado para evitar o "choque" entre o primeiro e último item
          let position = ((index - activeIndex + items.length) % items.length) - Math.floor(items.length / 2);
          
          // Normaliza a posição para um carrossel infinito suave
          if (position < -Math.floor(items.length / 2)) {
            position += items.length;
          } else if (position > Math.floor(items.length / 2)) {
            position -= items.length;
          }

          // Ajuste de escala e opacidade baseado na posição
          let scale = position === 0 ? 1.2 : 0.9;
          let opacity = position === 0 ? 1 : 0.8;
          let zIndex = items.length - Math.abs(position);

          return (
            <div
              key={item.id}
              className="carrossel-item1"
              style={{
                transform: `translateX(${position * 100}%) scale(${scale})`,
                opacity: opacity,
                zIndex: zIndex,
              }}
            >
              <span className="math-value1">{item.conteudo}</span>
            </div>
          );
        })}
      </div>
    </div>

        </div>
      
      </div>
      
      <div className='inicio-linha-bonita'>
      
   <div className='inicio-linha1'></div>
   <div className='inicio-linha2'></div>
    
      </div>
      
      <div className='inicio-os-iconis'>
      
        <div className='inicio-quadrado-icons'>

<div className='inicio-button'>

          <button className='inicio-transporte-icon' onClick={telaTrans}>
          <img className='icon-inicio' src="trannsporte.png" alt="Tela de transporte" />
          </button>

          
          <button className='inicio-estudo-icon'  onClick={telaEduca}>
          <img className='icon-inicio' src="school.png" alt="Tela de educação" />
          </button>
          
          <button className='inicio-saude-icon'  onClick={telaSal}>
          <img className='icon-inicio' src="saude.png" alt="Tela de saude" />
          </button>
</div>

<div className='inicio-frases1'>

  <div className='inicio-palavra-tran'>
  <p className='inicio-ppp'>
Transporte
</p>
  </div>

  <div className='inicio-palavra-estu'>
  <p className='inicio-ppp'>
Processo de ensino 
</p>
  </div>

  <div className='inicio-palavra-saud'>
  <p className='inicio-ppp'>
Saúde
</p>
  </div>

</div>
        
        </div>
      
      </div>
      
      <div className='inicio-linha-bonita'>
      
      <div className='inicio-linha1'></div>
      <div className='inicio-linha2'></div>
       
         </div>
      
      <div className='inicio-conteiner-video'>
      
        <div className='inicio-div-texto'>

<div className='inicio-texto-video'>
<h4 className='inicio-titulo'>Florianópolis, capital de Santa Catarina</h4>
        <p className='inicio-frases2'>È uma ilha no sul do Brasil famosa
por suas prais, natureza e qualidade
de vida.
<br /><br />
ela combina história e modernidade,
com pontos turísticos como a Lagoa 
da Conceição e a ponte Hercílìo luz
<br /><br />
sua economìa se destaca no turismo,
tecnologia e pescas
<br /><br />
enquanto a cultura açoriana influencia 
suas festas e gastronomia à base de 
frutos do mar</p>
        
</div>

        </div>
        
        <div className='inicio-div-video'>
     <video width="280px" height="500px" id="myVideo" controls>
  <source src="floripa-video.mp4" type="video/mp4"/>
</video>

<script>
  // Opcional: Forçar pausa inicial (redundante, pois já é o padrão)
  document.getElementById('myVideo').pause();
</script>
        </div>
      
      </div>
      
  
      
      <div className='inicio-conteiner-comentarios'>
      
    

        <div className='inicio-comentarios'>
        
      
<div></div>
          

<div className='inicio-bloco'>



      {/* Seção de input (mantendo suas classNames originais) */}
      <div className='inicio-arrumar1'>
        <input 
          className='inicio-input-comentar' 
          type="text"   
          value={novoComentario}
          onChange={(e) => setNovoComentario(e.target.value)}
          placeholder={respondendoPara ? `Respondendo a ${respondendoPara}...` : "Adicione um comentário..."}
        />
      </div>

      <div className='inicio-arrumar2'>
        <div className='inicio-de-emoje'>
          <button className='inicio-button-emoje'></button>
        </div>

        <div className='inicio-de-imagem'>
          <button className='inicio-button-imagem'></button>
        </div>

        <div className='inicio-de-comentar'>
          <button 
            className='inicio-button-comentar'  
            onClick={adicionarComentario}
          >
            {respondendoPara ? "Responder" : "Comentar"}
          </button>
        </div>
      </div>
    </div>


            </div>

<div className='inicio-cards-comentarios'>

{/* Seção de comentários */}
      <Comentarios 
        comentariosExtras={comentariosExtras} 
        onResponder={handleResponder}
      />
</div>





       

        </div>
     

      <div className='inicio-roda-pe'>




<div className='inicio-rodape-cima1'>
  <div></div>
<div className='inicio-icons-apps'><img src="linkedin-circled-icone.png" alt="" /></div>
<div className='inicio-icons-apps'><img src="instagram-circle-icone.png" alt="" /></div>
<div className='inicio-icons-apps'><img src="youtube-play-icone.png" alt="" /></div>
<div className='inicio-icons-apps'><img src="whatsapp_Icone.png" alt="" /></div>
<div></div>
</div>

<div className='inicio-rodape-baixo1'>
<div></div>
<div className='inicio-fale-conosco'><img className='inicio-icone-função' src="Maintenance.png" alt="" /></div>
<div className='inicio-telefone'><p className='inicio-palavras-pequenas'> (00) 0000-0000</p></div>
<div className='inicio-email'>   <p className='inicio-palavras-pequenas'>globalpass@gmail.com.br</p></div>
<div></div>
</div>



      </div>

    </div>
  )
}

export default Inicio