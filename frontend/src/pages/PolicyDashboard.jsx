import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
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
import AQIHeatMap from "../components/dashboards/PolicyDashboard/AQIHeatMap";
import SourceContribution from "../components/dashboards/PolicyDashboard/SourceContribution";
import ForecastingPanel from "../components/dashboards/PolicyDashboard/ForecastingPanel";
import PolicyEffectiveness from "../components/dashboards/PolicyDashboard/PolicyEffectiveness";
import AIRecommendations from "../components/dashboards/PolicyDashboard/AIRecommendations";
import StationDataTable from "../components/dashboards/PolicyDashboard/StationDataTable";

const PolicyDashboard = () => {
  const navigate = useNavigate();
  const { user } = useAuth();
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
        <div className="container mx-auto px-4 sm:px-6 py-3 sm:py-4">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-4">
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-4 w-full sm:w-auto">
              <div className="flex items-center gap-2 sm:gap-4">
                <button
                  onClick={goBack}
                  className="flex items-center gap-2 hover:text-aqua-teal transition-colors duration-300"
                >
                  <ArrowLeft size={20} />
                  <span className="hidden sm:inline">Back to Home</span>
                </button>
                <div className="hidden sm:block h-6 w-px bg-light-gray/30"></div>
                <h1 className="text-lg sm:text-2xl font-bold bg-gradient-to-r from-saffron via-pure-white to-india-green bg-clip-text text-transparent">
                  🏛️ Policy Dashboard
                </h1>
              </div>
              {user && (
                <p className="text-xs sm:text-sm text-light-gray/70 sm:mt-1">
                  Welcome back, {user.name || 'Policy Maker'} {user.avatar}
                </p>
              )}
            </div>
            
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 sm:gap-4 w-full sm:w-auto">
              {/* User Profile */}
              <div className="flex items-center gap-3 bg-dark-gunmetal/50 rounded-lg px-3 py-2">
                <span className="text-xl sm:text-2xl">{user?.avatar || '🏛️'}</span>
                <div className="flex-1 sm:hidden md:block">
                  <p className="text-sm font-medium text-pure-white">{user?.name || 'Policy Maker'}</p>
                  <p className="text-xs text-light-gray/70">{user?.role?.charAt(0).toUpperCase() + user?.role?.slice(1) || 'Policy Maker'}</p>
                </div>
                <button
                  onClick={() => navigate('/')}
                  className="text-light-gray hover:text-danger-red transition-colors text-sm ml-auto sm:ml-0"
                  title="Logout"
                >
                  🚪
                </button>
              </div>
              
              {/* Alert Indicator and Export Options - responsive layout */}
              <div className="flex flex-wrap sm:flex-nowrap items-center gap-2 w-full sm:w-auto">
                {/* Alert Indicator */}
                <div className="flex items-center gap-2 bg-danger-red/20 text-danger-red px-3 py-2 rounded-lg flex-1 sm:flex-none">
                  <AlertTriangle size={16} />
                  <span className="text-sm font-medium">{activeAlerts} Active Alerts</span>
                </div>
                
                {/* Export Options */}
                <div className="flex gap-2">
                  <button className="flex items-center gap-2 bg-tech-blue hover:bg-tech-blue/80 text-white px-3 sm:px-4 py-2 rounded-lg transition-colors duration-300">
                    <Download size={16} />
                    <span className="hidden md:inline">Export</span>
                  </button>
                  <button className="flex items-center gap-2 bg-india-green hover:bg-india-green/80 text-white px-3 sm:px-4 py-2 rounded-lg transition-colors duration-300">
                    <Share2 size={16} />
                    <span className="hidden md:inline">Share</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 sm:px-6 py-6">
        {/* Dashboard Control Panel */}
        <div className="bg-gradient-to-r from-pure-white to-light-gray/30 rounded-2xl shadow-lg border border-light-gray/50 p-6 mb-8">
          <div className="flex flex-col lg:flex-row gap-6">
            {/* Filters Section */}
            <div className="lg:w-1/3">
              <div className="flex items-center gap-2 mb-4">
                <Filter size={20} className="text-tech-blue" />
                <h3 className="font-bold text-dark-charcoal">Control Panel</h3>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
                {/* Time Range Filter */}
                <div>
                  <label className="block text-sm font-medium text-dark-charcoal/80 mb-2">
                    📅 Time Range
                  </label>
                  <select 
                    value={selectedTimeRange}
                    onChange={(e) => setSelectedTimeRange(e.target.value)}
                    className="w-full p-3 border border-light-gray rounded-lg focus:ring-2 focus:ring-tech-blue focus:border-transparent bg-pure-white shadow-sm"
                  >
                    {timeRanges.map((range) => (
                      <option key={range.value} value={range.value}>
                        {range.label}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Region Filter */}
                <div>
                  <label className="block text-sm font-medium text-dark-charcoal/80 mb-2">
                    🗺️ Region
                  </label>
                  <select 
                    value={selectedRegion}
                    onChange={(e) => setSelectedRegion(e.target.value)}
                    className="w-full p-3 border border-light-gray rounded-lg focus:ring-2 focus:ring-tech-blue focus:border-transparent bg-pure-white shadow-sm"
                  >
                    {regions.map((region) => (
                      <option key={region.value} value={region.value}>
                        {region.label}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            {/* Quick Stats Section */}
            <div className="lg:w-1/3">
              <h4 className="font-semibold text-dark-charcoal mb-4 flex items-center gap-2">
                📊 System Status
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-3">
                <div className="bg-pure-white rounded-lg p-4 border border-light-gray/30 shadow-sm">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-dark-charcoal/70">Active Stations</span>
                    <span className="font-bold text-aqua-teal text-lg">24</span>
                  </div>
                </div>
                <div className="bg-pure-white rounded-lg p-4 border border-light-gray/30 shadow-sm">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-dark-charcoal/70">Data Coverage</span>
                    <span className="font-bold text-fresh-green text-lg">98.5%</span>
                  </div>
                </div>
                <div className="bg-pure-white rounded-lg p-4 border border-light-gray/30 shadow-sm">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-dark-charcoal/70">Last Update</span>
                    <span className="font-bold text-tech-blue text-sm">2 min ago</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Actions Section */}
            <div className="lg:w-1/3">
              <h4 className="font-semibold text-dark-charcoal mb-4 flex items-center gap-2">
                <Settings size={18} className="text-saffron" />
                Quick Actions
              </h4>
              <div className="grid grid-cols-2 lg:grid-cols-1 gap-2">
                <button className="w-full text-left px-3 py-2 rounded-lg hover:bg-tech-blue/10 hover:text-tech-blue transition-all duration-300 text-sm bg-pure-white border border-light-gray/30 shadow-sm">
                  📊 Generate Report
                </button>
                <button className="w-full text-left px-3 py-2 rounded-lg hover:bg-danger-red/10 hover:text-danger-red transition-all duration-300 text-sm bg-pure-white border border-light-gray/30 shadow-sm">
                  🚨 Set Alert Threshold
                </button>
                <button className="w-full text-left px-3 py-2 rounded-lg hover:bg-india-green/10 hover:text-india-green transition-all duration-300 text-sm bg-pure-white border border-light-gray/30 shadow-sm">
                  📧 Schedule Updates
                </button>
                <button className="w-full text-left px-3 py-2 rounded-lg hover:bg-aqua-teal/10 hover:text-aqua-teal transition-all duration-300 text-sm bg-pure-white border border-light-gray/30 shadow-sm">
                  🔄 Refresh Data
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Main Dashboard Grid */}
        <div className="space-y-8">
          {/* Top Row - Real-time Monitoring */}
          <section>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-1 h-8 bg-gradient-to-b from-danger-red to-warning-orange rounded-full"></div>
              <h2 className="text-2xl font-bold text-dark-charcoal">🔴 Real-Time Monitoring</h2>
              <div className="flex items-center gap-2 text-sm text-dark-charcoal/70 ml-auto">
                <div className="w-2 h-2 bg-aqua-teal rounded-full animate-pulse"></div>
                <span>Live Data Stream</span>
              </div>
            </div>
            
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
              {/* AQI Heat Map */}
              <div className="bg-pure-white rounded-2xl shadow-lg border border-light-gray/50 overflow-hidden">
                <div className="bg-gradient-to-r from-danger-red/10 to-warning-orange/10 p-6 border-b border-light-gray/30">
                  <div className="flex items-center justify-between">
                    <h3 className="font-bold text-dark-charcoal flex items-center gap-2">
                      <MapPin size={20} className="text-danger-red" />
                      AQI Heat Map
                    </h3>
                    <div className="text-xs bg-danger-red/20 text-danger-red px-3 py-1 rounded-full font-medium">
                      Critical Zones: 3
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <AQIHeatMap selectedRegion={selectedRegion} />
                </div>
              </div>

              {/* Station Data Overview */}
              <div className="bg-pure-white rounded-2xl shadow-lg border border-light-gray/50 overflow-hidden">
                <div className="bg-gradient-to-r from-tech-blue/10 to-aqua-teal/10 p-6 border-b border-light-gray/30">
                  <div className="flex items-center justify-between">
                    <h3 className="font-bold text-dark-charcoal flex items-center gap-2">
                      <Activity size={20} className="text-tech-blue" />
                      Station Overview
                    </h3>
                    <button className="text-sm text-tech-blue hover:underline font-medium">
                      View All Stations →
                    </button>
                  </div>
                </div>
                <div className="p-6">
                  <StationDataTable timeRange={selectedTimeRange} />
                </div>
              </div>
            </div>
          </section>

          {/* Middle Row - Analysis & Insights */}
          <section>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-1 h-8 bg-gradient-to-b from-tech-blue to-aqua-teal rounded-full"></div>
              <h2 className="text-2xl font-bold text-dark-charcoal">📊 Analysis & Insights</h2>
            </div>
            
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
              {/* Source Contribution */}
              <div className="bg-pure-white rounded-2xl shadow-lg border border-light-gray/50 overflow-hidden">
                <div className="bg-gradient-to-r from-saffron/10 to-warning-orange/10 p-6 border-b border-light-gray/30">
                  <div className="flex items-center justify-between">
                    <h3 className="font-bold text-dark-charcoal flex items-center gap-2">
                      <Target size={20} className="text-saffron" />
                      Pollution Sources
                    </h3>
                    <select className="text-sm border border-light-gray rounded-lg px-3 py-1 bg-pure-white">
                      <option>PM2.5</option>
                      <option>PM10</option>
                      <option>NO₂</option>
                      <option>O₃</option>
                    </select>
                  </div>
                </div>
                <div className="p-6">
                  <SourceContribution />
                </div>
              </div>

              {/* Forecasting Panel */}
              <div className="bg-pure-white rounded-2xl shadow-lg border border-light-gray/50 overflow-hidden">
                <div className="bg-gradient-to-r from-warning-orange/10 to-danger-red/10 p-6 border-b border-light-gray/30">
                  <div className="flex items-center justify-between">
                    <h3 className="font-bold text-dark-charcoal flex items-center gap-2">
                      <TrendingUp size={20} className="text-warning-orange" />
                      AQI Forecasting
                    </h3>
                    <div className="text-xs text-dark-charcoal/60 bg-warning-orange/20 px-3 py-1 rounded-full">
                      72hr outlook
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <ForecastingPanel />
                </div>
              </div>
            </div>
          </section>

          {/* Bottom Row - Policy Management & AI */}
          <section>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-1 h-8 bg-gradient-to-b from-india-green to-fresh-green rounded-full"></div>
              <h2 className="text-2xl font-bold text-dark-charcoal">🏛️ Policy Management & AI Assistance</h2>
            </div>
            
            <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
              {/* Policy Effectiveness */}
              <div className="xl:col-span-2 bg-pure-white rounded-2xl shadow-lg border border-light-gray/50 overflow-hidden">
                <div className="bg-gradient-to-r from-india-green/10 to-fresh-green/10 p-6 border-b border-light-gray/30">
                  <div className="flex items-center justify-between">
                    <h3 className="font-bold text-dark-charcoal flex items-center gap-2">
                      <FileText size={20} className="text-india-green" />
                      Policy Effectiveness Tracker
                    </h3>
                    <button className="text-sm text-india-green hover:underline font-medium">
                      View All Policies →
                    </button>
                  </div>
                </div>
                <div className="p-6">
                  <PolicyEffectiveness />
                </div>
              </div>

              {/* AI Recommendations & Alerts */}
              <div className="space-y-6">
                {/* AI Recommendations */}
                <div className="bg-pure-white rounded-2xl shadow-lg border border-light-gray/50 overflow-hidden">
                  <div className="bg-gradient-to-r from-aqua-teal/10 to-tech-blue/10 p-4 border-b border-light-gray/30">
                    <div className="flex items-center justify-between">
                      <h3 className="font-bold text-dark-charcoal flex items-center gap-2 text-sm">
                        🤖 AI Assistant
                      </h3>
                      <div className="w-2 h-2 bg-fresh-green rounded-full animate-pulse"></div>
                    </div>
                  </div>
                  <div className="p-4">
                    <AIRecommendations />
                  </div>
                </div>

                {/* Active Alerts - Compact */}
                <div className="bg-pure-white rounded-2xl shadow-lg border border-light-gray/50 overflow-hidden">
                  <div className="bg-gradient-to-r from-danger-red/10 to-warning-orange/10 p-4 border-b border-light-gray/30">
                    <div className="flex items-center justify-between">
                      <h3 className="font-bold text-dark-charcoal flex items-center gap-2 text-sm">
                        <AlertTriangle size={16} className="text-danger-red" />
                        Critical Alerts
                      </h3>
                      <span className="text-xs bg-danger-red/20 text-danger-red px-2 py-1 rounded-full font-medium">
                        {activeAlerts} Active
                      </span>
                    </div>
                  </div>
                  <div className="p-4 space-y-3 max-h-64 overflow-y-auto">
                    <div className="p-3 bg-danger-red/10 border border-danger-red/30 rounded-lg">
                      <div className="flex items-start gap-2">
                        <AlertTriangle size={14} className="text-danger-red mt-0.5" />
                        <div>
                          <div className="font-semibold text-xs text-danger-red">Severe AQI Alert</div>
                          <div className="text-xs text-dark-charcoal/70 mt-1">
                            Anand Vihar: 450 AQI
                          </div>
                          <div className="text-xs text-dark-charcoal/50 mt-1">2 min ago</div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="p-3 bg-warning-orange/10 border border-warning-orange/30 rounded-lg">
                      <div className="flex items-start gap-2">
                        <Clock size={14} className="text-warning-orange mt-0.5" />
                        <div>
                          <div className="font-semibold text-xs text-warning-orange">Forecast Alert</div>
                          <div className="text-xs text-dark-charcoal/70 mt-1">
                            AQI +40% in 6hrs
                          </div>
                          <div className="text-xs text-dark-charcoal/50 mt-1">15 min ago</div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="p-3 bg-tech-blue/10 border border-tech-blue/30 rounded-lg">
                      <div className="flex items-start gap-2">
                        <Users size={14} className="text-tech-blue mt-0.5" />
                        <div>
                          <div className="font-semibold text-xs text-tech-blue">Citizen Reports</div>
                          <div className="text-xs text-dark-charcoal/70 mt-1">
                            Dust storms: Gurugram
                          </div>
                          <div className="text-xs text-dark-charcoal/50 mt-1">1 hour ago</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PolicyDashboard;