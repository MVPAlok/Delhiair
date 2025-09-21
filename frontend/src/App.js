import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import LandingPage from "./pages/LandingPage";
import PolicyDashboard from "./pages/PolicyDashboard";
import ResearchDashboard from "./components/dashboards/ResearchDashboard";
import NGODashboard from "./components/dashboards/NGODashboard";
import CitizenDashboard from "./components/dashboards/CitizenDashboard";
import ProtectedRoute from "./components/ProtectedRoute";
import { AuthProvider } from "./contexts/AuthContext";

function App() {
  return (
    <AuthProvider>
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route 
              path="/dashboards/policy" 
              element={
                <ProtectedRoute requiredRole="policymaker">
                  <PolicyDashboard />
                </ProtectedRoute>
              } 
            />
            <Route 
              path="/dashboards/research" 
              element={
                <ProtectedRoute requiredRole="researcher">
                  <ResearchDashboard />
                </ProtectedRoute>
              } 
            />
            <Route 
              path="/dashboards/ngo" 
              element={
                <ProtectedRoute requiredRole="ngo">
                  <NGODashboard />
                </ProtectedRoute>
              } 
            />
            <Route 
              path="/dashboards/citizen" 
              element={
                <ProtectedRoute requiredRole="citizen">
                  <CitizenDashboard />
                </ProtectedRoute>
              } 
            />
          </Routes>
        </BrowserRouter>
      </div>
    </AuthProvider>
  );
}

export default App;