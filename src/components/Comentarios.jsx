
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./Comentarios.css";

const comentariosFixos = [
  { usuario: "Usuario1", texto: "Isso é muito interessante!", tempo: "5 min" },
  { usuario: "Usuario2", texto: "Adorei essa funcionalidade!", tempo: "15 min" },
  { usuario: "Usuario3", texto: "Alguém mais notou isso?", tempo: "30 min" },
  { usuario: "Usuario5", texto: "bla bla bla bla bla bla bla bla", tempo: "45 min" }
];

const Comentarios = ({ comentariosExtras = [], onResponder }) => {
  const todosComentarios = [...comentariosExtras, ...comentariosFixos];
  const [index, setIndex] = useState(0);
  const [respostas, setRespostas] = useState({});

  const proximoComentario = () => {
    setIndex((prevIndex) => (prevIndex + 1) % todosComentarios.length);
  };

  const comentarioAnterior = () => {
    setIndex((prevIndex) => (prevIndex - 1 + todosComentarios.length) % todosComentarios.length);
  };

  const handleResponder = (usuario) => {
    if (onResponder) {
      onResponder(usuario);
    }
  };

  const adicionarResposta = (usuario, resposta) => {
    const novaResposta = {
      usuario: "Você",
      texto: resposta,
      tempo: "Agora"
    };

    setRespostas(prev => ({
      ...prev,
      [usuario]: [...(prev[usuario] || []), novaResposta]
    }));
  };

  useEffect(() => {
    const container = document.querySelector(".comentarios-container");
    const handleScroll = (event) => {
      if (event.deltaY > 0) proximoComentario();
      else comentarioAnterior();
    };

    if (container) {
      container.addEventListener("wheel", handleScroll);
      return () => {
        container.removeEventListener("wheel", handleScroll);
      };
    }
  }, [todosComentarios.length]);

  return (
    <div className="comentarios-container">
      {/* Camadas da pilha de comentários */}
      <div className="comentario-stack"></div>
      <div className="comentario-stack"></div>
      <div className="comentario-stack"></div>

      {/* Comentário principal animado */}
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
          className="comentario-card"
        >
          <div className="comentarios-arruma-pelo-amor-de-deus">
            <div className="flex items-center">
              <div className="comentario-avatar" />
              <div className="comentario-arrumar">
                <span className="font-bold">{todosComentarios[index].usuario}</span>
                <span className="ml-2 comentario-texto">{todosComentarios[index].texto}</span>
              </div>
            </div>
            
            <div className="comentario-footer">
              {todosComentarios[index].tempo} • 
              <span 
                onClick={() => handleResponder(todosComentarios[index].usuario)} 
                style={{cursor: 'pointer'}}
              >
                Responder
              </span>
            </div>

            {/* Exibir respostas */}
            {respostas[todosComentarios[index].usuario]?.map((resposta, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="resposta-card"
              >
                <div className="flex items-center">
                  <div className="comentario-avatar resposta-avatar" />
                  <div className="comentario-arrumar">
                    <span className="font-bold">{resposta.usuario}</span>
                    <span className="ml-2 comentario-texto">{resposta.texto}</span>
                  </div>
                </div>
                <div className="comentario-footer resposta-footer">
                  {resposta.tempo}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default Comentarios;