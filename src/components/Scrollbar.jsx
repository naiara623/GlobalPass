import React, { useRef, useEffect } from "react";
import './Scrollbar.css'

function Scrollbar() {
    const scrollRef = useRef(null);

    useEffect(() => {
      const handleScroll = () => {
        console.log(`Posição do scroll: ${scrollRef.current.scrollTop}`);
      };
  
      const div = scrollRef.current;
      div.addEventListener("scroll", handleScroll);
  
      return () => div.removeEventListener("scroll", handleScroll);
    }, []);
  
    return (
      <div ref={scrollRef} className="scroll-container">
        <p>Conteúdo longo...</p>
        <p>Mais texto para testar...</p>
        <p>Aqui vai mais conteúdo...</p>
      </div>
    );
  };

export default Scrollbar
