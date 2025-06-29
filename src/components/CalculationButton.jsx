import React from "react";
import "../styles//CalculationButton.css"; // Importando el archivo CSS

const CalculationButton = ({
  title,
  description,
  icon: Icon,
  color,
  onClick,
  disabled = false,
}) => {
  const colorClasses = {
    blue: "border-blue-500 text-blue-500",
    green: "border-green-500 text-green-500",
    red: "border-red-500 text-red-500",
    purple: "border-purple-500 text-purple-500",
  };

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`calculation-btn ${colorClasses[color]} ${
        disabled ? "disabled" : ""
      }`}
    >
      <div className="icon-title">
        <Icon className={`icon ${colorClasses[color].split(" ")[1]}`} />
        <h3 className="title">{title}</h3>
      </div>
      <p className="description">{description}</p>
    </button>
  );
};

export default CalculationButton;
