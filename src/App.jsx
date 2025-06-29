import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import CalculadoraPage from "./pages/CalculadoraPage";
import Headers from "./components/Headers";

function App() {
  return (
    <Router>
      <div className="App">
        <Headers></Headers>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/calculadora" element={<CalculadoraPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
