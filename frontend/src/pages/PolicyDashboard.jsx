import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { 
  ArrowLeft, 
  Download, 
  Share2, 
  Filter, 
  AlertTriangle,
  TrendingUp,
  Activity,
  MapPin,
  Clock,
  Target,
  Users,
  FileText,
  Settings
} from "lucide-react";
import AQIHeatMap from "../components/dashboard/AQIHeatMap";
import SourceContribution from "../components/dashboard/SourceContribution";
import ForecastingPanel from "../components/dashboard/ForecastingPanel";
import PolicyEffectiveness from "../components/dashboard/PolicyEffectiveness";
import AIRecommendations from "../components/dashboard/AIRecommendations";
import StationDataTable from "../components/dashboard/StationDataTable";

const PolicyDashboard = () => {
  const navigate = useNavigate();
  const [selectedTimeRange, setSelectedTimeRange] = useState("24h");
  const [selectedRegion, setSelectedRegion] = useState("all");
  const [activeAlerts, setActiveAlerts] = useState(3);

  const goBack = () => {
    navigate("/");
  };

  const timeRanges = [
    { value: "1h", label: "Last Hour" },
    { value: "24h", label: "Last 24 Hours" },
    { value: "7d", label: "Last 7 Days" },
    { value: "30d", label: "Last 30 Days" }
  ];

  const regions = [
    { value: "all", label: "All Delhi NCR" },
    { value: "central", label: "Central Delhi" },
    { value: "north", label: "North Delhi" },
    { value: "south", label: "South Delhi" },
    { value: "east", label: "East Delhi" },
    { value: "west", label: "West Delhi" },
    { value: "gurugram", label: "Gurugram" },
    { value: "noida", label: "Noida" },
    { value: "faridabad", label: "Faridabad" }
  ];

  return (
    <div className="min-h-screen bg-light-gray">
      {/* Header */}
      <header className="bg-dark-charcoal text-pure-white shadow-xl border-b-2 border-saffron">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <button
                onClick={goBack}
                className="flex items-center gap-2 hover:text-aqua-teal transition-colors duration-300"
              >
                <ArrowLeft size={20} />
                <span className="hidden md:inline">Back to Home</span>
              </button>
              <div className="h-6 w-px bg-light-gray/30"></div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-saffron via-pure-white to-india-green bg-clip-text text-transparent">
                🏛️ Policy Dashboard
              </h1>
            </div>
            
            <div className="flex items-center gap-4">
              {/* Alert Indicator */}
              <div className="flex items-center gap-2 bg-danger-red/20 text-danger-red px-3 py-2 rounded-lg">
                <AlertTriangle size={16} />
                <span className="text-sm font-medium">{activeAlerts} Active Alerts</span>
              </div>
              
              {/* Export Options */}
              <div className="flex gap-2">
                <button className="flex items-center gap-2 bg-tech-blue hover:bg-tech-blue/80 text-white px-4 py-2 rounded-lg transition-colors duration-300">
                  <Download size={16} />
                  <span className="hidden md:inline">Export</span>
                </button>
                <button className="flex items-center gap-2 bg-india-green hover:bg-india-green/80 text-white px-4 py-2 rounded-lg transition-colors duration-300">
                  <Share2 size={16} />
                  <span className="hidden md:inline">Share</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-6 py-6">
        <div className="grid grid-cols-12 gap-6 h-full">
          {/* Left Sidebar - Filters & Controls */}
          <div className="col-span-12 lg:col-span-3 space-y-6">
            <div className="bg-pure-white rounded-xl shadow-lg p-6 border border-light-gray/50">
              <div className="flex items-center gap-2 mb-4">
                <Filter size={20} className="text-tech-blue" />
                <h3 className="font-bold text-dark-charcoal">Filters</h3>
              </div>
              
              {/* Time Range Filter */}
              <div className="mb-4">
                <label className="block text-sm font-medium text-dark-charcoal/80 mb-2">
                  Time Range
                </label>
                <select 
                  value={selectedTimeRange}
                  onChange={(e) => setSelectedTimeRange(e.target.value)}
                  className="w-full p-2 border border-light-gray rounded-lg focus:ring-2 focus:ring-tech-blue focus:border-transparent"
                >
                  {timeRanges.map((range) => (
                    <option key={range.value} value={range.value}>
                      {range.label}
                    </option>
                  ))}
                </select>
              </div>

              {/* Region Filter */}
              <div className="mb-4">
                <label className="block text-sm font-medium text-dark-charcoal/80 mb-2">
                  Region
                </label>
                <select 
                  value={selectedRegion}
                  onChange={(e) => setSelectedRegion(e.target.value)}
                  className="w-full p-2 border border-light-gray rounded-lg focus:ring-2 focus:ring-tech-blue focus:border-transparent"
                >
                  {regions.map((region) => (
                    <option key={region.value} value={region.value}>
                      {region.label}
                    </option>
                  ))}
                </select>
              </div>

              {/* Quick Stats */}
              <div className="space-y-3 pt-4 border-t border-light-gray/50">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-dark-charcoal/70">Active Stations</span>
                  <span className="font-bold text-aqua-teal">24</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-dark-charcoal/70">Data Coverage</span>
                  <span className="font-bold text-fresh-green">98.5%</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-dark-charcoal/70">Last Update</span>
                  <span className="font-bold text-tech-blue">2 min ago</span>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-pure-white rounded-xl shadow-lg p-6 border border-light-gray/50">
              <h3 className="font-bold text-dark-charcoal mb-4 flex items-center gap-2">
                <Settings size={20} className="text-saffron" />
                Quick Actions
              </h3>
              <div className="space-y-3">
                <button className="w-full text-left px-3 py-2 rounded-lg hover:bg-light-gray/50 transition-colors duration-300 text-sm">
                  📊 Generate Report
                </button>
                <button className="w-full text-left px-3 py-2 rounded-lg hover:bg-light-gray/50 transition-colors duration-300 text-sm">
                  🚨 Set Alert Threshold
                </button>
                <button className="w-full text-left px-3 py-2 rounded-lg hover:bg-light-gray/50 transition-colors duration-300 text-sm">
                  📧 Schedule Updates
                </button>
                <button className="w-full text-left px-3 py-2 rounded-lg hover:bg-light-gray/50 transition-colors duration-300 text-sm">
                  🔄 Refresh Data
                </button>
              </div>
            </div>
          </div>

          {/* Main Content Area */}
          <div className="col-span-12 lg:col-span-6 space-y-6">
            {/* Real-Time AQI Monitoring */}
            <div className="bg-pure-white rounded-xl shadow-lg p-6 border border-light-gray/50">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-bold text-dark-charcoal flex items-center gap-2">
                  <MapPin size={20} className="text-danger-red" />
                  Real-Time AQI Monitoring
                </h3>
                <div className="flex items-center gap-2 text-sm text-dark-charcoal/70">
                  <div className="w-2 h-2 bg-aqua-teal rounded-full animate-pulse"></div>
                  Live Data
                </div>
              </div>
              <AQIHeatMap selectedRegion={selectedRegion} />
            </div>

            {/* Station Data Table */}
            <div className="bg-pure-white rounded-xl shadow-lg p-6 border border-light-gray/50">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-bold text-dark-charcoal flex items-center gap-2">
                  <Activity size={20} className="text-tech-blue" />
                  Station-wise AQI Data
                </h3>
                <button className="text-sm text-tech-blue hover:underline">
                  View All Stations
                </button>
              </div>
              <StationDataTable timeRange={selectedTimeRange} />
            </div>

            {/* Source Contribution */}
            <div className="bg-pure-white rounded-xl shadow-lg p-6 border border-light-gray/50">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-bold text-dark-charcoal flex items-center gap-2">
                  <Target size={20} className="text-saffron" />
                  Source Contribution Breakdown
                </h3>
                <select className="text-sm border border-light-gray rounded px-2 py-1">
                  <option>PM2.5</option>
                  <option>PM10</option>
                  <option>NO₂</option>
                  <option>O₃</option>
                </select>
              </div>
              <SourceContribution />
            </div>

            {/* Policy Effectiveness */}
            <div className="bg-pure-white rounded-xl shadow-lg p-6 border border-light-gray/50">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-bold text-dark-charcoal flex items-center gap-2">
                  <FileText size={20} className="text-india-green" />
                  Policy Effectiveness Tracker
                </h3>
                <button className="text-sm text-india-green hover:underline">
                  View All Policies
                </button>
              </div>
              <PolicyEffectiveness />
            </div>
          </div>

          {/* Right Sidebar - AI Insights & Recommendations */}
          <div className="col-span-12 lg:col-span-3 space-y-6">
            {/* Forecasting Panel */}
            <div className="bg-pure-white rounded-xl shadow-lg p-6 border border-light-gray/50">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-bold text-dark-charcoal flex items-center gap-2">
                  <TrendingUp size={20} className="text-warning-orange" />
                  Forecasting
                </h3>
                <div className="text-xs text-dark-charcoal/60">72hr outlook</div>
              </div>
              <ForecastingPanel />
            </div>

            {/* AI Recommendations */}
            <div className="bg-pure-white rounded-xl shadow-lg p-6 border border-light-gray/50">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-bold text-dark-charcoal flex items-center gap-2">
                  🤖 AI Insights
                </h3>
                <div className="w-2 h-2 bg-fresh-green rounded-full animate-pulse"></div>
              </div>
              <AIRecommendations />
            </div>

            {/* Active Alerts */}
            <div className="bg-pure-white rounded-xl shadow-lg p-6 border border-light-gray/50">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-bold text-dark-charcoal flex items-center gap-2">
                  <AlertTriangle size={20} className="text-danger-red" />
                  Active Alerts
                </h3>
                <span className="text-xs bg-danger-red/20 text-danger-red px-2 py-1 rounded-full">
                  {activeAlerts} Critical
                </span>
              </div>
              <div className="space-y-3">
                <div className="p-3 bg-danger-red/10 border border-danger-red/30 rounded-lg">
                  <div className="flex items-start gap-2">
                    <AlertTriangle size={16} className="text-danger-red mt-0.5" />
                    <div>
                      <div className="font-semibold text-sm text-danger-red">Severe AQI Alert</div>
                      <div className="text-xs text-dark-charcoal/70 mt-1">
                        Anand Vihar crossing 450 AQI. Immediate action required.
                      </div>
                      <div className="text-xs text-dark-charcoal/50 mt-1">2 min ago</div>
                    </div>
                  </div>
                </div>
                
                <div className="p-3 bg-warning-orange/10 border border-warning-orange/30 rounded-lg">
                  <div className="flex items-start gap-2">
                    <Clock size={16} className="text-warning-orange mt-0.5" />
                    <div>
                      <div className="font-semibold text-sm text-warning-orange">Forecast Alert</div>
                      <div className="text-xs text-dark-charcoal/70 mt-1">
                        AQI expected to rise 40% in next 6 hours due to low wind speed.
                      </div>
                      <div className="text-xs text-dark-charcoal/50 mt-1">15 min ago</div>
                    </div>
                  </div>
                </div>
                
                <div className="p-3 bg-tech-blue/10 border border-tech-blue/30 rounded-lg">
                  <div className="flex items-start gap-2">
                    <Users size={16} className="text-tech-blue mt-0.5" />
                    <div>
                      <div className="font-semibold text-sm text-tech-blue">Citizen Report</div>
                      <div className="text-xs text-dark-charcoal/70 mt-1">
                        Multiple dust storm reports from Gurugram sector 14.
                      </div>
                      <div className="text-xs text-dark-charcoal/50 mt-1">1 hour ago</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PolicyDashboard;