import React from "react";
import { Calculator, FileText } from "lucide-react";
import Headers from "../components/Headers";
import CalculationButton from "../components/CalculationButton";
import { useNavigate } from "react-router-dom";
import "../styles/HomePage.css"; // Importa el archivo CSS

const HomePage = () => {
  const navigate = useNavigate();
  const calculationButtons = [
    {
      id: "calculo-255bis",
      title: "2.5.5. bis",
      description: "Cálculo aporte espacio público",
      icon: Calculator,
      color: "blue",
      onClick: () => navigate("calculadora"),
    },
    {
      id: "ddu-288",
      title: "DDU 288",
      description: "Próximamente...",
      icon: FileText,
      color: "green",
      disabled: true,
    },
  ];

  return (
    <div className="home-page">
      <div className="content-container">
        <Headers
          title="NORMAT.CL"
          subtitle="Calculadora de Normativa para Ingenieros y Arquitectos"
        />
        <div className="intro-text">Hola amigos</div>

        <div className="button-grid">
          {calculationButtons.map((button) => (
            <CalculationButton key={button.id} {...button} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
