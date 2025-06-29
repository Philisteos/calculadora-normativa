import React from "react";
import ResultCard from "./ResultCard";

const ResultsDisplay = ({ results, onReset }) => {
  const resultCards = [
    {
      id: "superficie-bruta",
      title: "Superficie Bruta del Terreno",
      value: `${results.superficieBruta.toFixed(2)} m²`,
      color: "blue",
    },
    {
      id: "densidad-ocupacion",
      title: "DO (Densidad de Ocupación)",
      value: results.densidadOcupacion.toFixed(2),
      color: "green",
    },
    {
      id: "porcentaje-cesion",
      title: "% de Cesión",
      value: `${results.porcentajeCesion.toFixed(2)}%`,
      color: "yellow",
    },
    {
      id: "cesion-terreno",
      title: "Cesión de Terreno",
      value: `${results.cesionTerreno.toFixed(2)} m²`,
      color: "purple",
    },
  ];

  return (
    <div className="results-display">
      <h2 className="results-title">Resultados</h2>

      <div className="results-grid">
        {resultCards.map((card) => (
          <ResultCard key={card.id} {...card} />
        ))}
      </div>

      <button onClick={onReset} className="reset-button">
        Nuevo Cálculo
      </button>

      <style jsx>{`
        .results-display {
          background-color: white;
          border-radius: 8px;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
          padding: 24px;
          animation: fade-in 0.5s ease-out;
        }

        .results-title {
          font-size: 20px;
          font-weight: 600;
          color: #2d3748;
          margin-bottom: 24px;
        }

        .results-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 16px;
        }

        @media (min-width: 768px) {
          .results-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        .reset-button {
          width: 100%;
          margin-top: 24px;
          background-color: #4a5568;
          color: white;
          padding: 12px;
          border-radius: 8px;
          transition: background-color 0.2s;
        }

        .reset-button:hover {
          background-color: #2d3748;
        }

        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
};

export default ResultsDisplay;
