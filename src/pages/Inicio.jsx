import './Inicio.css'
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Comentarios from '../components/Comentarios';
// import Modal from '../components/Modal';
import Navbar from '../components/Navbar';


function Inicio() {

  const [comentariosExtra, setComentariosExtra] = useState([]);

  const [novoComentario, setNovoComentario] = useState("");

  const adicionarComentario = () => {
    if (novoComentario.trim() !== "") {
      setComentariosExtra((prev) => [
        ...prev,
        { usuario: "Novo Usuario", texto: novoComentario, tempo: "agora" }
      ]);
      setNovoComentario(""); // limpar input
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

      {/* <div className='inicio-navebar'>
  
      </div> */}
      
      <div className='inicio-conteiner-imagens'>
      
        <div className='inicio-comentario'>
            
            <div className='quadrado-frase'>
            <p className='inicio-frases'>Descubra novos destinos, crie memórias inesquecíveis.</p>
            </div>
            
        </div>
        
        <div className='inicio-imagens'>

        <div className="card-3d">

  <div className='imagem'><img className='imagens' src="CENTRO-FL.jpg" alt="" /></div>
  <div className='imagem'><img className='imagens' src="CENTRO-SOL-FL.jpg" alt="" /></div>
  <div className='imagem'><img className='imagens' src="CENTROIGREJA-FL.jpg" alt="" /></div>
  <div className='imagem'><img className='imagens' src="IGREJA-FL.jpg" alt="" /></div>
  <div className='imagem'><img className='imagens' src="MERCADO-FL.jpg" alt="" /></div>
  <div className='imagem'><img className='imagens' src="MUSEL-FL.jpg" alt="" /></div>
  <div className='imagem'><img className='imagens' src="PRAIA-FL.jpg" alt="" /></div>
  <div className='imagem'><img className='imagens' src="PREDA-FL.jpg" alt="" /></div>
  <div className='imagem'><img className='imagens' src="PLACA-FL.jpg" alt="" /></div>
  <div className='imagem'><img className='imagens' src="PLACAMAR-FL.jpg" alt="" /></div>

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
          <button className='inicio-transporte-icon'>
          <img className='icon-inicio' src="trannsporte.png" alt="" />
          </button>
          
          <button className='inicio-estudo-icon'>
          <img className='icon-inicio' src="book.png" alt="" />
          </button>
          
          <button className='inicio-saude-icon'>
          <img className='icon-inicio' src="saude.png" alt="" />
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
<h4 className='inicio-titulo'>Floriaópolis, capital de Santa Catarina</h4>
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
       <iframe width="280px" height="500px" src="floripa-video.mp4" frameborder="0" allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share' allowFullScreen />
        </div>
      
      </div>
      
  
      
      <div className='inicio-conteiner-comentarios'>
      
    

        <div className='inicio-comentarios'>
        
      
<div></div>
          

<div className='inicio-bloco'>

<div className='inicio-arrumar1'>
                <input className='inicio-input-comentar' type="text"   value={novoComentario}
          onChange={(e) => setNovoComentario(e.target.value)}/>
</div>

<div className='inicio-arrumar2'>

<div className='inicio-de-emoje'>
                <button className='inicio-button-emoje'></button>
</div>

<div className='inicio-de-imagem'>
                <button className='inicio-button-imagem'></button>
</div>

<div className='inicio-de-comentar'>
                <button className='inicio-button-comentar'  onClick={adicionarComentario}></button>
</div>
</div>






            </div>

      
            
        




<div className='inicio-cards-comentarios'>
<Comentarios comentariosExtras={comentariosExtra}/>
</div>





       

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