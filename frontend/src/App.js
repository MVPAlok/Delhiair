import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import LandingPage from "./pages/LandingPage";
import PolicyDashboard from "./pages/PolicyDashboard";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/policy-dashboard" element={<PolicyDashboard />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;