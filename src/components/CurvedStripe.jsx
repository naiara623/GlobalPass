import React from "react";
import "./CurvedStripe.css";

const CurvedStripe = () => {
  return (
    <div className="curved-container">
      {/* Faixa preta */}
      <div className="faixa-preta" />

      {/* Faixa azul com curva para cima */}
      <svg className="faixa-azul" viewBox="0 0 800 40" preserveAspectRatio="none">
        <path
          d="M0,0 H300 C340,0 360,20 400,20 C440,20 460,0 500,0 H800 V40 H0 Z"
          fill="#2d3047"
        />
      </svg>

      {/* Círculo branco */}
      <div className="bola" />
    </div>
  );
};

export default CurvedStripe;