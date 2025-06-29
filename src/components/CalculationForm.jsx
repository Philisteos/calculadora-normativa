import React, { useState } from "react";
import FormInput from "./FormInput";
import "../styles/CalculationForm.css"; // Importando el archivo CSS

const CalculationForm = ({ onCalculate, onReset }) => {
  const [formData, setFormData] = useState({
    cargaOcupacion: "",
    superficieTerreno: "",
    superficieEspacioPublico: "",
  });

  const handleInputChange = (name, value) => {
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    onCalculate(formData);
  };

  const handleReset = () => {
    setFormData({
      cargaOcupacion: "",
      superficieTerreno: "",
      superficieEspacioPublico: "",
    });
    onReset();
  };

  const formFields = [
    {
      name: "cargaOcupacion",
      label: "Carga de Ocupación",
      placeholder: "Ingrese la carga de ocupación",
      value: formData.cargaOcupacion,
    },
    {
      name: "superficieTerreno",
      label: "Superficie del Terreno (m²)",
      placeholder: "Ingrese la superficie del terreno",
      value: formData.superficieTerreno,
    },
    {
      name: "superficieEspacioPublico",
      label: "Superficie del Espacio Público Adyacente (m²)",
      placeholder: "Ingrese la superficie del espacio público",
      value: formData.superficieEspacioPublico,
    },
  ];

  return (
    <div className="calculation-form">
      <h2>Ingrese los datos</h2>

      <div className="form-fields">
        {formFields.map((field) => (
          <FormInput key={field.name} {...field} onChange={handleInputChange} />
        ))}
      </div>

      <div className="buttons">
        <button onClick={handleSubmit} className="calculate-btn">
          CALCULAR
        </button>
        <button onClick={handleReset} className="reset-btn">
          LIMPIAR
        </button>
      </div>
    </div>
  );
};

export default CalculationForm;
