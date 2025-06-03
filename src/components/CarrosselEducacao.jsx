import React, { useState, useEffect } from 'react';
import './CarrosselAu.css';

const CarrosselEducacao = () => {
  // Nomes dos arquivos (certifique-se que existem na pasta public/images/carrossel)
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

  return (
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
  );
};

export default CarrosselEducacao;