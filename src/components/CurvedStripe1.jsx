import React from "react";
import "./CurvedStripe1.css";

const CurvedStripe1 = () => {
  return (
    <div className="curved-container1">
      {/* Faixa preta */}
      <div className="faixa-preta1" />

      {/* Faixa azul com curva para cima */}
      <svg className="faixa-azul1" viewBox="0 0 800 40" preserveAspectRatio="none">
      <path
              d="M0,40 H300 C340,40 360,20 400,20 C440,20 460,40 500,40 H800 V0 H0 Z"
              fill="#2d3047"
            />
      </svg>

      {/* Círculo branco */}
      <div className="bola1" />
    </div>
  );
};

export default CurvedStripe1;