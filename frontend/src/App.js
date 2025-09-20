import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import LandingPage from "./pages/LandingPage";
import PolicyDashboard from "./components/dashboards/PolicyDashboard";
import ResearchDashboard from "./components/dashboards/ResearchDashboard";
import NGODashboard from "./components/dashboards/NGODashboard";
import CitizenDashboard from "./components/dashboards/CitizenDashboard";
import { AuthProvider } from "./contexts/AuthContext";

function App() {
  return (
    <AuthProvider>
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/dashboards/policy" element={<PolicyDashboard />} />
            <Route path="/dashboards/research" element={<ResearchDashboard />} />
            <Route path="/dashboards/ngo" element={<NGODashboard />} />
            <Route path="/dashboards/citizen" element={<CitizenDashboard />} />
          </Routes>
        </BrowserRouter>
      </div>
    </AuthProvider>
  );
}

export default App;