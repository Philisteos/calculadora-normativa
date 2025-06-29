import React from "react";

const ResultCard = ({ title, value, color }) => {
  const colorStyles = {
    blue: {
      backgroundColor: "#ebf8ff",
      borderColor: "#4299e1",
      textColor: "#2b6cb0",
    },
    green: {
      backgroundColor: "#f0fff4",
      borderColor: "#48bb78",
      textColor: "#2f855a",
    },
    yellow: {
      backgroundColor: "#fefcbf",
      borderColor: "#ecc94b",
      textColor: "#b7791f",
    },
    purple: {
      backgroundColor: "#f7e8ff",
      borderColor: "#9f7aea",
      textColor: "#6b46c1",
    },
    red: {
      backgroundColor: "#fff5f5",
      borderColor: "#f56565",
      textColor: "#e53e3e",
    },
  };

  const { backgroundColor, borderColor, textColor } = colorStyles[color] || {};

  return (
    <div
      className="result-card"
      style={{
        padding: "16px",
        borderRadius: "8px",
        borderLeft: `4px solid ${borderColor}`,
        backgroundColor,
      }}
    >
      <h3
        className="result-title"
        style={{ fontWeight: "600", color: "#4a4a4a", marginBottom: "8px" }}
      >
        {title}
      </h3>
      <p
        className="result-value"
        style={{
          fontSize: "24px",
          fontWeight: "700",
          color: textColor,
        }}
      >
        {value}
      </p>
    </div>
  );
};

export default ResultCard;
