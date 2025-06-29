import React, { useState } from "react";

export default function CalculadoraAporte() {
  const [formData, setFormData] = useState({
    cargaOcupacion: "",
    superficieTerreno: "",
    superficieEspacioPublico: "",
  });

  const [resultados, setResultados] = useState(null);
  const [mostrarResultados, setMostrarResultados] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const calcular = () => {
    const carga = parseFloat(formData.cargaOcupacion);
    const supTerreno = parseFloat(formData.superficieTerreno);
    const supEspacioPublico = parseFloat(formData.superficieEspacioPublico);

    if (isNaN(carga) || isNaN(supTerreno) || isNaN(supEspacioPublico)) {
      alert("Por favor, ingresa valores numéricos válidos en todos los campos");
      return;
    }

    const superficieBruta = supTerreno + supEspacioPublico;
    const densidadOcupacion = (carga * 10000) / superficieBruta;
    const porcentajeCesion = (densidadOcupacion * 11) / 2000;
    const cesionTerreno = supTerreno * (porcentajeCesion / 100);

    setResultados({
      superficieBruta: superficieBruta.toFixed(2),
      densidadOcupacion: densidadOcupacion.toFixed(2),
      porcentajeCesion: porcentajeCesion.toFixed(4),
      cesionTerreno: cesionTerreno.toFixed(2),
    });

    setMostrarResultados(true);
  };

  const limpiar = () => {
    setFormData({
      cargaOcupacion: "",
      superficieTerreno: "",
      superficieEspacioPublico: "",
    });
    setResultados(null);
    setMostrarResultados(false);
  };

  return (
    <div className="container">
      <style>
        {`
          .container {
            min-height: 100vh;
            background: linear-gradient(to bottom right, #ebf4ff, #d6d6f0);
            padding: 40px;
          }

          .content {
            max-width: 1000px;
            margin: 0 auto;
          }

          .header {
            text-align: center;
            margin-bottom: 40px;
          }

          .title {
            font-size: 32px;
            font-weight: bold;
            color: #4a4a4a;
          }

          .subtitle {
            font-size: 24px;
            font-weight: 600;
            color: #5a67d8;
          }

          .description {
            font-size: 16px;
            color: #6b7280;
          }

          .form-container {
            background-color: white;
            border-radius: 12px;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
            padding: 32px;
            margin-bottom: 32px;
          }

          .form-title {
            font-size: 20px;
            font-weight: 600;
            color: #4a4a4a;
            margin-bottom: 24px;
          }

          .form-fields {
            display: grid;
            gap: 24px;
          }

          .input-field {
            margin-bottom: 16px;
          }

          .input-label {
            font-size: 14px;
            font-weight: 500;
            color: #4a4a4a;
            margin-bottom: 8px;
          }

          .input {
            width: 100%;
            padding: 12px;
            border: 1px solid #d1d5db;
            border-radius: 8px;
            font-size: 16px;
            color: #4a4a4a;
          }

          .buttons {
            display: flex;
            gap: 16px;
            margin-top: 32px;
          }

          .calculate-btn {
            flex: 1;
            background-color: #e53e3e;
            color: white;
            font-weight: bold;
            padding: 12px 24px;
            border-radius: 8px;
            transition: background-color 0.3s;
            cursor: pointer;
          }

          .calculate-btn:hover {
            background-color: #c53030;
          }

          .clear-btn {
            background-color: #f3f4f6;
            color: #4a4a4a;
            font-weight: bold;
            padding: 12px 24px;
            border-radius: 8px;
            transition: background-color 0.3s;
            cursor: pointer;
          }

          .clear-btn:hover {
            background-color: #e2e8f0;
          }

          .result-container {
            background-color: white;
            border-radius: 12px;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
            padding: 32px;
            margin-top: 32px;
          }

          .result-title {
            font-size: 24px;
            font-weight: bold;
            color: #4a4a4a;
            margin-bottom: 24px;
            text-align: center;
          }

          .result-fields {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 32px;
          }

          .result-card {
            background: linear-gradient(to right, #4299e1, #3182ce);
            border-radius: 8px;
            color: white;
            padding: 24px;
          }

          .result-card-title {
            font-size: 18px;
            font-weight: 600;
            margin-bottom: 8px;
          }

          .result-card-value {
            font-size: 32px;
            font-weight: bold;
            margin-bottom: 8px;
          }

          .result-card-description {
            font-size: 14px;
            opacity: 0.8;
          }

          .summary {
            margin-top: 32px;
            padding: 16px;
            background-color: #f9fafb;
            border-radius: 8px;
          }

          .summary-title {
            font-weight: 600;
            color: #4a4a4a;
            margin-bottom: 8px;
          }

          .summary-details {
            font-size: 14px;
            color: #4a4a4a;
          }

          .footer {
            text-align: center;
            margin-top: 40px;
          }

          .footer-text {
            font-size: 14px;
            color: #6b7280;
          }
        `}
      </style>

      <div className="content">
        {/* Header */}
        <div className="header">
          <h1 className="title">NORMAT.CL</h1>
          <h2 className="subtitle">2.5.5. bis</h2>
          <p className="description">Cálculo Aporte Espacio Público</p>
        </div>

        {/* Formulario */}
        <div className="form-container">
          <h3 className="form-title">Ingresa los datos del proyecto</h3>

          <div className="form-fields">
            <div className="input-field">
              <label className="input-label">Carga de Ocupación</label>
              <input
                type="number"
                name="cargaOcupacion"
                value={formData.cargaOcupacion}
                onChange={handleInputChange}
                className="input"
                placeholder="Ingresa la carga de ocupación"
              />
            </div>

            <div className="input-field">
              <label className="input-label">Superficie del Terreno (m²)</label>
              <input
                type="number"
                name="superficieTerreno"
                value={formData.superficieTerreno}
                onChange={handleInputChange}
                className="input"
                placeholder="Ingresa la superficie del terreno en m²"
              />
            </div>

            <div className="input-field">
              <label className="input-label">
                Superficie del Espacio Público Adyacente (m²)
              </label>
              <input
                type="number"
                name="superficieEspacioPublico"
                value={formData.superficieEspacioPublico}
                onChange={handleInputChange}
                className="input"
                placeholder="Ingresa la superficie del espacio público adyacente en m²"
              />
            </div>
          </div>

          <div className="buttons">
            <button onClick={calcular} className="calculate-btn">
              CALCULAR
            </button>
            <button onClick={limpiar} className="clear-btn">
              Limpiar
            </button>
          </div>
        </div>

        {/* Resultados */}
        {mostrarResultados && resultados && (
          <div className="result-container">
            <h3 className="result-title">Resultados del Cálculo</h3>

            <div className="result-fields">
              <div className="result-card">
                <h4 className="result-card-title">
                  Superficie Bruta del Terreno
                </h4>
                <p className="result-card-value">
                  {resultados.superficieBruta} m²
                </p>
                <p className="result-card-description">
                  Superficie terreno + Superficie espacio público
                </p>
              </div>

              <div className="result-card">
                <h4 className="result-card-title">
                  DO (Densidad de Ocupación)
                </h4>
                <p className="result-card-value">
                  {resultados.densidadOcupacion}
                </p>
                <p className="result-card-description">
                  Carga ocupación × 10,000 ÷ Superficie bruta
                </p>
              </div>

              <div className="result-card">
                <h4 className="result-card-title">% de Cesión</h4>
                <p className="result-card-value">
                  {resultados.porcentajeCesion}%
                </p>
                <p className="result-card-description">(DO × 11) ÷ 2,000</p>
              </div>

              <div className="result-card">
                <h4 className="result-card-title">Cesión de Terreno</h4>
                <p className="result-card-value">
                  {resultados.cesionTerreno} m²
                </p>
                <p className="result-card-description">
                  Superficie terreno × % Cesión
                </p>
              </div>
            </div>

            <div className="summary">
              <h5 className="summary-title">Resumen del Cálculo:</h5>
              <div className="summary-details">
                <p>
                  • Superficie Bruta: {formData.superficieTerreno} m² +{" "}
                  {formData.superficieEspacioPublico} m² ={" "}
                  {resultados.superficieBruta} m²
                </p>
                <p>
                  • Densidad de Ocupación: ({formData.cargaOcupacion} × 10,000)
                  ÷ {resultados.superficieBruta} ={" "}
                  {resultados.densidadOcupacion}
                </p>
                <p>
                  • % de Cesión: ({resultados.densidadOcupacion} × 11) ÷ 2,000 ={" "}
                  {resultados.porcentajeCesion}%
                </p>
                <p>
                  • Cesión de Terreno: {formData.superficieTerreno} m² ×{" "}
                  {resultados.porcentajeCesion}% = {resultados.cesionTerreno} m²
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Footer */}
        <div className="footer">
          <p className="footer-text">
            NORMAT.CL - Calculadora de Normativa para Ingenieros y Arquitectos
          </p>
        </div>
      </div>
    </div>
  );
}
