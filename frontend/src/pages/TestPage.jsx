import React from 'react';
import TestPDFExport from '../components/TestPDFExport';

const TestPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-12">
      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-md overflow-hidden">
        <div className="p-8">
          <div className="flex items-center justify-between">
            <h1 className="text-3xl font-bold text-gray-900">PDF Export Test</h1>
          </div>
          <div className="mt-8">
            <TestPDFExport />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestPage;