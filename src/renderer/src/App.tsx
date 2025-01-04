import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import ResponsivePage from "./pages/ResponsivePage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ResponsivePage />} />
        <Route path="/responsive" element={<div>Responsive</div>} />
      </Routes>
    </Router>
  );
}

export default App;
