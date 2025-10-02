import React from 'react';
import { generateSimplePDF } from '../lib/pdfUtils';

const TestPDFExport = () => {
  const handleTestPDF = () => {
    const testData = {
      'Test Parameter 1': 'Value 1',
      'Test Parameter 2': 'Value 2',
      'AQI Level': '150',
      'PM2.5': '85 μg/m³',
      'Temperature': '28°C',
      'Humidity': '65%',
      'Wind Speed': '12 km/h',
      'Pressure': '1013 hPa'
    };
    
    generateSimplePDF(
      'Test Dashboard', 
      'Test User', 
      'tester', 
      testData
    );
  };

  const handleCitizenDashboardPDF = () => {
    const citizenData = {
      'Current AQI': '156',
      'Location': 'Delhi, India',
      'Active Alerts': '3',
      'PM2.5 Level': '85 μg/m³',
      'Temperature': '28°C',
      'Status': 'Moderate',
      'Health Recommendation': 'Sensitive individuals should avoid outdoor exertion'
    };
    
    generateSimplePDF(
      'Citizen Dashboard', 
      'Rajesh Kumar', 
      'citizen', 
      citizenData
    );
  };

  const handleNGODashboardPDF = () => {
    const ngoData = {
      'Active Reports': '24',
      'Citizen Reports': '8',
      'Pending Validation': '5',
      'Selected Time Range': 'Last 30 Days',
      'Selected Region': 'All Delhi-NCR',
      'Active Volunteers': '45',
      'Report Coverage': '92.3%'
    };
    
    generateSimplePDF(
      'NGO Dashboard', 
      'Green Earth Society', 
      'ngo', 
      ngoData
    );
  };

  const handleResearchDashboardPDF = () => {
    const researchData = {
      'Active Models': '5',
      'Selected Model': 'Ensemble',
      'Forecast Range': '24h',
      'Selected Dataset': 'All',
      'Selected Time Range': 'Last 30 Days',
      'Data Points': '1.2M',
      'Active Stations': '50',
      'Model Accuracy': '94.5%'
    };
    
    generateSimplePDF(
      'Research Dashboard', 
      'Dr. Priya Sharma', 
      'researcher', 
      researchData
    );
  };

  const handlePolicyDashboardPDF = () => {
    const policyData = {
      'Selected Time Range': 'Last 24 Hours',
      'Selected Region': 'All Delhi NCR',
      'Active Alerts': '3',
      'Active Stations': '24',
      'Data Coverage': '98.5%'
    };
    
    generateSimplePDF(
      'Policy Dashboard', 
      'Shri Amitabh Kant', 
      'policymaker', 
      policyData
    );
  };

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">PDF Export Test</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
          <h3 className="text-xl font-semibold mb-4 text-gray-700">Basic Test PDF</h3>
          <button 
            onClick={handleTestPDF}
            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-lg transition-colors"
          >
            Generate Test PDF
          </button>
        </div>
        
        <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
          <h3 className="text-xl font-semibold mb-4 text-gray-700">Citizen Dashboard</h3>
          <button 
            onClick={handleCitizenDashboardPDF}
            className="w-full bg-green-500 hover:bg-green-600 text-white font-medium py-2 px-4 rounded-lg transition-colors"
          >
            Export Citizen Data
          </button>
        </div>
        
        <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
          <h3 className="text-xl font-semibold mb-4 text-gray-700">NGO Dashboard</h3>
          <button 
            onClick={handleNGODashboardPDF}
            className="w-full bg-yellow-500 hover:bg-yellow-600 text-white font-medium py-2 px-4 rounded-lg transition-colors"
          >
            Export NGO Data
          </button>
        </div>
        
        <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
          <h3 className="text-xl font-semibold mb-4 text-gray-700">Research Dashboard</h3>
          <button 
            onClick={handleResearchDashboardPDF}
            className="w-full bg-purple-500 hover:bg-purple-600 text-white font-medium py-2 px-4 rounded-lg transition-colors"
          >
            Export Research Data
          </button>
        </div>
        
        <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
          <h3 className="text-xl font-semibold mb-4 text-gray-700">Policy Dashboard</h3>
          <button 
            onClick={handlePolicyDashboardPDF}
            className="w-full bg-red-500 hover:bg-red-600 text-white font-medium py-2 px-4 rounded-lg transition-colors"
          >
            Export Policy Data
          </button>
        </div>
      </div>
      
      <div className="mt-8 p-6 bg-blue-50 rounded-lg">
        <h3 className="text-lg font-semibold mb-2 text-gray-800">Instructions</h3>
        <p className="text-gray-600">
          Click any button above to generate a PDF report. The PDF will be automatically downloaded 
          to your computer with the filename format: [DashboardName]_Report_[Date].pdf
        </p>
      </div>
    </div>
  );
};

export default TestPDFExport;