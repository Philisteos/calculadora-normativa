import React, { useState } from "react";
import { Home } from "lucide-react";
import CalculationForm from "../components/CalculationForm";
import ResultsDisplay from "../components/ResultsDisplay";
import Headers from "../components/Headers";
import { useNavigate } from "react-router-dom";
import "../styles/CalculadoraPage.css"; // Importa el archivo CSS

const CalculadoraPage = () => {
  const [results, setResults] = useState(null);
  const navigate = useNavigate();

  const handleCalculate = (formData) => {
    const carga = parseFloat(formData.cargaOcupacion) || 0;
    const superficie = parseFloat(formData.superficieTerreno) || 0;
    const espacioPublico = parseFloat(formData.superficieEspacioPublico) || 0;

    // Cálculos según especificación
    const superficieBruta = superficie + espacioPublico;
    const densidadOcupacion = (carga * 10000) / superficieBruta;
    const porcentajeCesion = (densidadOcupacion * 11) / 2000;
    const cesionTerreno = superficie * (porcentajeCesion / 100);

    setResults({
      superficieBruta,
      densidadOcupacion,
      porcentajeCesion,
      cesionTerreno,
    });
  };

  const handleReset = () => {
    setResults(null);
  };

  const handleGoHome = () => {
    setResults(null);
    navigate("/", { replace: true });
  };

  return (
    <div className="calculo-page">
      <div className="content-container">
        <button onClick={handleGoHome} className="back-button">
          <Home className="icon" />
          Volver al inicio
        </button>
        <Headers title="2.5.5. bis" subtitle="Cálculo aporte espacio público" />

        <div className="form-container">
          <CalculationForm
            onCalculate={handleCalculate}
            onReset={handleReset}
          />
          {results && (
            <ResultsDisplay results={results} onReset={handleReset} />
          )}
        </div>
      </div>
    </div>
  );
};

export default CalculadoraPage;
