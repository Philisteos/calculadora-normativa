import React from "react";
import "../styles//Headers.css"; // Importando el archivo CSS

const Headers = ({ title, subtitle }) => {
  return (
    <div className="headers">
      <h1 className="title">{title}</h1>
      {subtitle && <p className="subtitle">{subtitle}</p>}
    </div>
  );
};

export default Headers;
