import React from "react";

const FormInput = ({ name, label, placeholder, value, onChange }) => {
  const handleChange = (e) => {
    onChange(name, e.target.value);
  };

  return (
    <div className="form-input">
      <label className="form-label">{label}</label>
      <input
        type="number"
        name={name}
        value={value}
        onChange={handleChange}
        className="form-input-field"
        placeholder={placeholder}
      />
      <style>
        {`
          .form-input {
            margin-bottom: 16px;
          }

          .form-label {
            font-size: 14px;
            font-weight: 500;
            color: #4a5568;
            margin-bottom: 8px;
            display: block;
          }

          .form-input-field {
            width: 100%;
            padding: 12px;
            border: 1px solid #d1d5db;
            border-radius: 8px;
            font-size: 16px;
            color: #4a4a4a;
            outline: none;
            transition: border 0.3s ease, box-shadow 0.3s ease;
          }

          .form-input-field:focus {
            border-color: #3182ce;
            box-shadow: 0 0 0 2px rgba(66, 153, 225, 0.5);
          }
        `}
      </style>
    </div>
  );
};

export default FormInput;
