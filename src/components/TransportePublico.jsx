import React, { useState } from 'react';
import './TransportePublico.css';
import { img } from 'framer-motion/client';

const TransportePublico = () => {
  // Estado para controlar qual informação está visível
  const [infoAtiva, setInfoAtiva] = useState(null);

  // Dados dos botões e suas informações correspondentes
  const botoesInfo = [
    {
      id: 'onibus',
      label: 'Ônibus',
      conteudo: (
        <div>
          <h3>Ônibus Urbanos</h3>
          <p>Principal modal de transporte público no Brasil, atendendo mais de 75% dos deslocamentos coletivos.</p>
          <ul>
            <li>Tarifa média: R$ 4,50</li>
            <li>Vantagens: Cobertura ampla</li>
            <li>Desafios: Superlotação</li>
          </ul>
        </div>
      )
    },
    {
      id: 'pase',
      label: 'Pase',
      conteudo: (
        <div>
          <h3>Metrô</h3>
          <p>Presente em grandes capitais como São Paulo, Rio e Belo Horizonte.</p>
          <ul>
            <li>Tarifa média: R$ 4,80</li>
            <li>Vantagens: Velocidade e pontualidade</li>
            <li>Desafios: Limitação de rede</li>
          </ul>
        </div>
      )
    },
    {
      id: 'bicicleta',
      label: 'Bicicletas',
      conteudo: (
        <div>
          <h3>Bicicletas Compartilhadas</h3>
          <p>Crescente em cidades como SP, RJ e Curitiba.</p>
          <ul>
            <li>Custo médio: R$ 10/dia</li>
            <li>Vantagens: Zero emissões</li>
            <li>Desafios: Infraestrutura cicloviária</li>
          </ul>
        </div>
      )
    }
  ];

  return (
    <div className="transporte-container">
      <h2>Modalidades de Transporte Público</h2>
      
      <div className="botoes">
        {botoesInfo.map((botao) => (
          <button
            key={botao.id}
            className={`info-button ${infoAtiva === botao.id ? 'ativo' : ''}`}
            onClick={() => setInfoAtiva(botao.id)}
          >
            {botao.label}
          </button>
        ))}
      </div>
      
      <div className="info-box">
        {infoAtiva ? (
          botoesInfo.find(b => b.id === infoAtiva).conteudo
        ) : (
          <p>Clique em um botão para ver informações</p>
        )}
      </div>
    </div>
  );
};

export default TransportePublico;