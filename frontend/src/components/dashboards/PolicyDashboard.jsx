import React from 'react';
import { LineChart, Wallet, Users, FileText } from 'lucide-react';
import AIRecommendations from '../dashboard/AIRecommendations';
import AQIHeatMap from '../dashboard/AQIHeatMap';
import ForecastingPanel from '../dashboard/ForecastingPanel';
import PolicyEffectiveness from '../dashboard/PolicyEffectiveness';
import SourceContribution from '../dashboard/SourceContribution';
import StationDataTable from '../dashboard/StationDataTable';

const PolicyDashboard = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-pure-white to-light-gray/30">
      {/* Header with gradient bar */}
      <div className="sticky top-0 bg-pure-white/95 backdrop-blur-md border-b border-india-green/10 shadow-sm z-50">
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-saffron via-pure-white to-india-green" />
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <h1 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-saffron via-india-green to-tech-blue bg-clip-text text-transparent">
              Policy Impact Dashboard
            </h1>
          </div>
          <div className="flex items-center gap-4">
            <div className="text-sm text-dark-charcoal bg-pure-white px-4 py-2 rounded-full border border-india-green/20 shadow-sm">
              Last updated: {new Date().toLocaleDateString()}
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto p-6 space-y-6 pt-8">

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 animate-fade-in-up">
          <StatsCard
            icon={<LineChart size={24} />}
            title="AQI Improvement"
            value="-15%"
            description="Month-over-month change"
            gradient="from-saffron to-warning-orange"
          />
          <StatsCard
            icon={<Wallet size={24} />}
            title="Budget Utilized"
            value="₹2.4Cr"
            description="Of ₹5Cr allocated"
            gradient="from-india-green to-fresh-green"
          />
          <StatsCard
            icon={<Users size={24} />}
            title="Population Impact"
            value="1.2M"
            description="Citizens benefited"
            gradient="from-tech-blue to-aqua-teal"
          />
          <StatsCard
            icon={<FileText size={24} />}
            title="Active Policies"
            value="8"
            description="3 pending review"
            gradient="from-saffron via-pure-white to-india-green"
          />
        </div>

        {/* Main Content */}
        <div className="space-y-8">
          {/* First Row - Main Components */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="group relative animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
              <div className="absolute -inset-0.5 bg-gradient-to-r from-saffron to-india-green opacity-20 rounded-xl blur group-hover:opacity-30 transition-all duration-300" />
              <div className="relative bg-pure-white rounded-xl p-6 shadow-lg border border-india-green/10">
                <h2 className="text-xl font-bold bg-gradient-to-r from-saffron to-india-green bg-clip-text text-transparent mb-4">
                  Policy Effectiveness Analysis
                </h2>
                <PolicyEffectiveness />
              </div>
            </div>

            <div className="group relative animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
              <div className="absolute -inset-0.5 bg-gradient-to-r from-tech-blue to-aqua-teal opacity-20 rounded-xl blur group-hover:opacity-30 transition-all duration-300" />
              <div className="relative bg-pure-white rounded-xl p-6 shadow-lg border border-tech-blue/10">
                <h2 className="text-xl font-bold bg-gradient-to-r from-tech-blue to-aqua-teal bg-clip-text text-transparent mb-4">
                  AI Insights & Recommendations
                </h2>
                <AIRecommendations />
              </div>
            </div>
          </div>

          {/* Second Row */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="group relative animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
              <div className="absolute -inset-0.5 bg-gradient-to-r from-warning-orange to-saffron opacity-20 rounded-xl blur group-hover:opacity-30 transition-all duration-300" />
              <div className="relative bg-pure-white rounded-xl p-6 shadow-lg border border-warning-orange/10">
                <h2 className="text-xl font-bold bg-gradient-to-r from-warning-orange to-saffron bg-clip-text text-transparent mb-4">
                  Real-time AQI Heat Map
                </h2>
                <AQIHeatMap />
              </div>
            </div>

            <div className="group relative animate-fade-in-up" style={{ animationDelay: "0.5s" }}>
              <div className="absolute -inset-0.5 bg-gradient-to-r from-india-green to-fresh-green opacity-20 rounded-xl blur group-hover:opacity-30 transition-all duration-300" />
              <div className="relative bg-pure-white rounded-xl p-6 shadow-lg border border-fresh-green/10">
                <h2 className="text-xl font-bold bg-gradient-to-r from-india-green to-fresh-green bg-clip-text text-transparent mb-4">
                  Pollution Forecasting
                </h2>
                <ForecastingPanel />
              </div>
            </div>
          </div>

          {/* Third Row */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="group relative animate-fade-in-up" style={{ animationDelay: "0.6s" }}>
              <div className="absolute -inset-0.5 bg-gradient-to-r from-tech-blue to-aqua-teal opacity-20 rounded-xl blur group-hover:opacity-30 transition-all duration-300" />
              <div className="relative bg-pure-white rounded-xl p-6 shadow-lg border border-tech-blue/10">
                <h2 className="text-xl font-bold bg-gradient-to-r from-tech-blue to-aqua-teal bg-clip-text text-transparent mb-4">
                  Pollution Source Analysis
                </h2>
                <SourceContribution />
              </div>
            </div>

            <div className="group relative animate-fade-in-up" style={{ animationDelay: "0.7s" }}>
              <div className="absolute -inset-0.5 bg-gradient-to-r from-saffron via-india-green to-tech-blue opacity-20 rounded-xl blur group-hover:opacity-30 transition-all duration-300" />
              <div className="relative bg-pure-white rounded-xl p-6 shadow-lg border border-india-green/10">
                <h2 className="text-xl font-bold bg-gradient-to-r from-saffron via-india-green to-tech-blue bg-clip-text text-transparent mb-4">
                  Monitoring Station Data
                </h2>
                <div className="h-[400px] overflow-auto custom-scrollbar">
                  <StationDataTable />
                </div>
              </div>
            </div>
          </div>

          {/* Fourth Row - Alerts and Actions */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 group relative animate-fade-in-up" style={{ animationDelay: "0.8s" }}>
              <div className="absolute -inset-0.5 bg-gradient-to-r from-warning-orange to-danger-red opacity-20 rounded-xl blur group-hover:opacity-30 transition-all duration-300" />
              <div className="relative bg-pure-white rounded-xl p-6 shadow-lg border border-warning-orange/10">
                <h2 className="text-xl font-bold bg-gradient-to-r from-warning-orange to-danger-red bg-clip-text text-transparent mb-4">
                  Critical Alerts
                </h2>
                <div className="space-y-4">
                  {[
                    "AQI exceeded threshold in South Delhi",
                    "New policy draft ready for review",
                    "Monthly report generated"
                  ].map((alert, i) => (
                    <div key={i} className="flex items-center space-x-3 p-3 bg-light-gray/20 rounded-lg border border-warning-orange/10 shadow-sm">
                      <div className="w-2 h-2 rounded-full bg-gradient-to-r from-warning-orange to-danger-red" />
                      <p className="text-dark-charcoal/80">{alert}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="group relative animate-fade-in-up" style={{ animationDelay: "0.9s" }}>
              <div className="absolute -inset-0.5 bg-gradient-to-r from-india-green to-fresh-green opacity-20 rounded-xl blur group-hover:opacity-30 transition-all duration-300" />
              <div className="relative bg-pure-white rounded-xl p-6 shadow-lg border border-fresh-green/10">
                <h2 className="text-xl font-bold bg-gradient-to-r from-india-green to-fresh-green bg-clip-text text-transparent mb-4">
                  Quick Actions
                </h2>
                <div className="space-y-3">
                  {["Generate Report", "Review New Policy", "Schedule Meeting"].map((action, i) => (
                    <button
                      key={i}
                      className="w-full px-4 py-3 rounded-lg bg-light-gray/10 border border-fresh-green/10 hover:border-fresh-green/30 hover:bg-light-gray/20 transition-all duration-300 text-left text-dark-charcoal/80 hover:text-dark-charcoal flex items-center space-x-2 shadow-sm"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-india-green to-fresh-green" />
                      <span>{action}</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const StatsCard = ({ icon, title, value, description, gradient }) => (
  <div className="relative group">
    <div className="absolute -inset-0.5 bg-gradient-to-r opacity-25 blur-sm group-hover:opacity-50 transition-all duration-300 rounded-xl group-hover:blur-md"></div>
    <div className="relative bg-pure-white rounded-xl p-6 h-full shadow-lg border border-india-green/10">
      <div className={`absolute right-0 top-0 w-32 h-32 bg-gradient-to-br ${gradient} opacity-5 rounded-full blur-2xl transform -translate-y-1/2 translate-x-1/2`} />
      <div className="relative">
        <div className="flex items-center space-x-3 mb-4">
          <div className={`p-2 rounded-lg bg-gradient-to-r ${gradient} bg-opacity-5 shadow-sm`}>
            {icon}
          </div>
          <h3 className="font-medium text-dark-charcoal">{title}</h3>
        </div>
        <div className="space-y-2">
          <div className={`text-3xl font-bold bg-gradient-to-r ${gradient} bg-clip-text text-transparent`}>
            {value}
          </div>
          <div className="text-sm text-dark-charcoal/60">{description}</div>
        </div>
      </div>
    </div>
  </div>
);

export default PolicyDashboard;