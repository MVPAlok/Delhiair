import React from 'react';
import { Book, Database, Filter, Share2 } from 'lucide-react';

const ResearchDashboard = () => {
  return (
    <div className="p-6 bg-white min-h-screen text-gray-600 pt-20">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Header */}
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold text-gray-900">Research Data & Trends</h1>
          <div className="text-sm text-gray-600">Last sync: {new Date().toLocaleTimeString()}</div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <StatsCard
            icon={<Database className="text-yellow-600" />}
            title="Data Points"
            value="1.2M"
            description="From 50 stations"
          />
          <StatsCard
            icon={<Filter className="text-green-600" />}
            title="Analysis Models"
            value="5"
            description="2 in training"
          />
          <StatsCard
            icon={<Book className="text-teal-600" />}
            title="Publications"
            value="12"
            description="3 under review"
          />
          <StatsCard
            icon={<Share2 className="text-gray-900" />}
            title="Collaborations"
            value="8"
            description="4 active projects"
          />
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-white rounded-xl p-6 shadow-md">
              <h2 className="text-xl font-semibold mb-4 text-gray-900">Current Research Focus</h2>
              <div className="h-64 flex items-center justify-center border border-gray-200 rounded-lg">
                [Placeholder for Research Data Visualization]
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-md">
              <h2 className="text-xl font-semibold mb-4 text-gray-900">Recent Findings</h2>
              <div className="space-y-4">
                {[
                  {
                    title: "Correlation Analysis",
                    description: "Strong correlation found between traffic density and PM2.5 levels",
                    date: "2 days ago"
                  },
                  {
                    title: "Pattern Discovery",
                    description: "Seasonal variations in pollution sources identified",
                    date: "5 days ago"
                  },
                  {
                    title: "Model Performance",
                    description: "Prediction accuracy improved by 15%",
                    date: "1 week ago"
                  }
                ].map((finding, i) => (
                  <div key={i} className="p-4 rounded-lg hover:bg-gray-50 transition-colors">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-medium text-gray-900">{finding.title}</h3>
                        <p className="text-sm mt-1 text-gray-600">{finding.description}</p>
                      </div>
                      <span className="text-xs text-gray-500">{finding.date}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-white rounded-xl p-6 shadow-md">
              <h2 className="text-xl font-semibold mb-4 text-gray-900">Data Sources</h2>
              <div className="space-y-3">
                {[
                  { name: "Air Quality Stations", status: "Live", count: 50 },
                  { name: "Weather Stations", status: "Live", count: 25 },
                  { name: "Traffic Sensors", status: "Delayed", count: 100 },
                  { name: "Satellite Data", status: "Processing", count: 5 }
                ].map((source, i) => (
                  <div key={i} className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 transition-colors">
                    <div className="flex items-center space-x-3">
                      <div className={`w-2 h-2 rounded-full ${source.status === 'Live' ? 'bg-green-500' :
                          source.status === 'Delayed' ? 'bg-yellow-500' :
                            'bg-teal-500'
                        }`}></div>
                      <span className="text-gray-900">{source.name}</span>
                    </div>
                    <div className="text-sm">
                      <span className="text-gray-900">{source.count}</span>
                      <span className="text-gray-600 ml-1">sources</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-md">
              <h2 className="text-xl font-semibold mb-4 text-gray-900">Quick Tools</h2>
              <div className="space-y-3">
                <button className="w-full text-left px-4 py-2 rounded-lg hover:bg-gray-50 transition-colors text-gray-900">
                  Export Dataset
                </button>
                <button className="w-full text-left px-4 py-2 rounded-lg hover:bg-gray-50 transition-colors text-gray-900">
                  Run Analysis
                </button>
                <button className="w-full text-left px-4 py-2 rounded-lg hover:bg-gray-50 transition-colors text-gray-900">
                  Generate Report
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const StatsCard = ({ icon, title, value, description }) => (
  <div className="bg-white rounded-xl p-6 hover:ring-1 hover:ring-gray-200 transition-all shadow-sm">
    <div className="flex items-center space-x-3 mb-3">
      {icon}
      <h3 className="font-medium text-gray-900">{title}</h3>
    </div>
    <div className="space-y-1">
      <div className="text-2xl font-bold text-gray-900">{value}</div>
      <div className="text-sm text-gray-600">{description}</div>
    </div>
  </div>
);

export default ResearchDashboard;