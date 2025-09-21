import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import { 
  ArrowLeft, 
  Download, 
  Share2, 
  Filter, 
  AlertTriangle,
  FileText, 
  MessageSquare, 
  Users, 
  MapPin,
  Clock,
  Target,
  Settings,
  TrendingUp,
  Activity,
  Brain,
  Map,
  Camera,
  Send,
  Eye,
  BarChart3,
  Zap
} from 'lucide-react';

const NGODashboard = () => {
  const navigate = useNavigate();
  const { user } = useAuth();
  const [selectedTimeRange, setSelectedTimeRange] = useState("30d");
  const [selectedRegion, setSelectedRegion] = useState("all");
  const [activeReports, setActiveReports] = useState(24);
  const [showMapView, setShowMapView] = useState(false);
  const [selectedTrendPeriod, setSelectedTrendPeriod] = useState("weekly");

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-cyan-50">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 -right-8 w-96 h-96 bg-gradient-to-l from-green-200/20 to-blue-200/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-8 left-1/3 w-80 h-80 bg-gradient-to-t from-orange-200/20 to-red-200/20 rounded-full blur-3xl animate-pulse"></div>
      </div>

      {/* Header */}
      <header className="bg-dark-charcoal text-pure-white shadow-xl border-b-2 border-india-green">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <button
                onClick={() => navigate("/")}
                className="flex items-center gap-2 hover:text-aqua-teal transition-colors duration-300"
              >
                <ArrowLeft size={20} />
                <span className="hidden md:inline">Back to Home</span>
              </button>
              <div className="h-6 w-px bg-light-gray/30"></div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-india-green via-pure-white to-saffron bg-clip-text text-transparent">
                🌱 NGO Dashboard
              </h1>
              {user && (
                <p className="text-sm text-light-gray/70 mt-1">
                  Welcome back, {user.name || 'NGO Representative'} {user.avatar}
                </p>
              )}
            </div>
            
            <div className="flex items-center gap-4">
              {/* User Profile */}
              <div className="flex items-center gap-3 bg-dark-gunmetal/50 rounded-lg px-3 py-2">
                <span className="text-2xl">{user?.avatar || '🌱'}</span>
                <div className="hidden md:block">
                  <p className="text-sm font-medium text-pure-white">{user?.name || 'NGO Representative'}</p>
                  <p className="text-xs text-light-gray/70">{user?.role?.charAt(0).toUpperCase() + user?.role?.slice(1) || 'NGO'}</p>
                </div>
                <button
                  onClick={() => navigate('/')}
                  className="text-light-gray hover:text-danger-red transition-colors text-sm"
                  title="Logout"
                >
                  🚪
                </button>
              </div>
              
              {/* Alert Indicator */}
              <div className="flex items-center gap-2 bg-warning-orange/20 text-warning-orange px-3 py-2 rounded-lg">
                <AlertTriangle size={16} />
                <span className="text-sm font-medium">{activeReports} Active Reports</span>
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

      <div className="container mx-auto px-6 py-6 relative">
        <div className="grid grid-cols-12 gap-6 h-full">
          {/* Enhanced Left Sidebar */}
          <div className="col-span-12 lg:col-span-3 space-y-6">
            {/* Main Filters Card */}
            <div className="bg-white/40 backdrop-blur-xl rounded-2xl shadow-2xl p-6 border border-white/30 hover:shadow-3xl transition-all duration-500">
              <div className="flex items-center gap-2 mb-4">
                <Filter size={20} className="text-tech-blue" />
                <h3 className="font-bold text-slate-800">Filters</h3>
              </div>
              
              <div className="mb-4">
                <label className="block text-sm font-medium text-slate-800/80 mb-2">
                  Time Range
                </label>
                <select 
                  value={selectedTimeRange}
                  onChange={(e) => setSelectedTimeRange(e.target.value)}
                  className="w-full p-2 border border-white/30 rounded-lg focus:ring-2 focus:ring-tech-blue focus:border-transparent bg-white/50 backdrop-blur-sm"
                >
                  <option value="7d">Last 7 Days</option>
                  <option value="30d">Last 30 Days</option>
                  <option value="90d">Last 90 Days</option>
                </select>
              </div>

              <div className="mb-4">
                <label className="block text-sm font-medium text-slate-800/80 mb-2">
                  Region Filter
                </label>
                <select 
                  value={selectedRegion}
                  onChange={(e) => setSelectedRegion(e.target.value)}
                  className="w-full p-2 border border-white/30 rounded-lg focus:ring-2 focus:ring-tech-blue focus:border-transparent bg-white/50 backdrop-blur-sm"
                >
                  <option value="all">All Delhi-NCR</option>
                  <option value="east">East Delhi</option>
                  <option value="west">West Delhi</option>
                  <option value="north">North Delhi</option>
                  <option value="south">South Delhi</option>
                  <option value="central">Central Delhi</option>
                  <option value="gurgaon">Gurgaon</option>
                  <option value="noida">Noida</option>
                </select>
              </div>

              <div className="space-y-3 pt-4 border-t border-white/30">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-slate-700">Active Volunteers</span>
                  <span className="font-bold text-aqua-teal">45</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-slate-700">Report Coverage</span>
                  <span className="font-bold text-fresh-green">92.3%</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-slate-700">Live AQI</span>
                  <span className="font-bold text-warning-orange">156</span>
                </div>
              </div>
            </div>

            {/* AI Insights Card */}
            <div className="bg-white/40 backdrop-blur-xl rounded-2xl shadow-2xl p-6 border border-white/30 hover:shadow-3xl transition-all duration-500">
              <h3 className="font-bold text-slate-800 mb-4 flex items-center gap-2">
                <Brain size={20} className="text-purple-600 animate-pulse" />
                AI Insights
              </h3>
              <div className="space-y-4">
                <div className="bg-gradient-to-r from-purple-50 to-blue-50 p-4 rounded-xl border border-purple-200/50">
                  <div className="flex items-start gap-3">
                    <Zap size={16} className="text-purple-600 mt-1 animate-bounce" />
                    <div>
                      <p className="text-sm font-semibold text-slate-800 mb-1">Top Issue This Month</p>
                      <p className="text-xs text-slate-600">Industrial Emissions (45% of reports)</p>
                    </div>
                  </div>
                </div>
                <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-4 rounded-xl border border-green-200/50">
                  <div className="flex items-start gap-3">
                    <TrendingUp size={16} className="text-green-600 mt-1" />
                    <div>
                      <p className="text-sm font-semibold text-slate-800 mb-1">Positive Trend</p>
                      <p className="text-xs text-slate-600">Waste burning ↓20% after policy drive</p>
                    </div>
                  </div>
                </div>
                <div className="bg-gradient-to-r from-orange-50 to-red-50 p-4 rounded-xl border border-orange-200/50">
                  <div className="flex items-start gap-3">
                    <AlertTriangle size={16} className="text-orange-600 mt-1" />
                    <div>
                      <p className="text-sm font-semibold text-slate-800 mb-1">Alert Zone</p>
                      <p className="text-xs text-slate-600">East Delhi: Dust incidents ↑30%</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Actions Card */}
            <div className="bg-white/40 backdrop-blur-xl rounded-2xl shadow-2xl p-6 border border-white/30 hover:shadow-3xl transition-all duration-500">
              <h3 className="font-bold text-slate-800 mb-4 flex items-center gap-2">
                <Settings size={20} className="text-saffron" />
                Quick Actions
              </h3>
              <div className="space-y-3">
                <button 
                  onClick={() => setShowMapView(!showMapView)}
                  className={`w-full text-left px-3 py-2 rounded-lg transition-colors duration-300 text-sm flex items-center gap-2 ${
                    showMapView ? 'bg-tech-blue/20 text-tech-blue' : 'hover:bg-white/50 backdrop-blur-sm'
                  }`}
                >
                  <Map size={16} />
                  📍 Geo-Tagged Map View
                </button>
                <button className="w-full text-left px-3 py-2 rounded-lg hover:bg-white/50 backdrop-blur-sm transition-colors duration-300 text-sm flex items-center gap-2">
                  <Camera size={16} />
                  📸 Citizen Reports
                </button>
                <button className="w-full text-left px-3 py-2 rounded-lg hover:bg-white/50 backdrop-blur-sm transition-colors duration-300 text-sm flex items-center gap-2">
                  <Send size={16} />
                  📤 Escalate to Policy
                </button>
                <button className="w-full text-left px-3 py-2 rounded-lg hover:bg-white/50 backdrop-blur-sm transition-colors duration-300 text-sm flex items-center gap-2">
                  <Eye size={16} />
                  👁️ Validate Reports
                </button>
              </div>
            </div>
          </div>

          {/* Enhanced Main Content Area */}
          <div className="col-span-12 lg:col-span-9 space-y-6">
            {/* Geo-Tagged Map or Trend View Toggle */}
            {showMapView ? (
              <div className="bg-white/40 backdrop-blur-xl rounded-2xl shadow-2xl p-6 border border-white/30 hover:shadow-3xl transition-all duration-500">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-bold text-slate-800 flex items-center gap-2">
                    <Map size={20} className="text-tech-blue" />
                    Geo-Tagged Incident Map - Delhi NCR
                  </h3>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                    <span className="text-sm text-slate-700">Live Hotspots</span>
                  </div>
                </div>
                <div className="h-80 flex items-center justify-center border-2 border-dashed border-blue-300/50 rounded-2xl bg-gradient-to-br from-blue-50/50 to-cyan-50/50 backdrop-blur-sm relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-400/5 via-transparent to-cyan-400/5 animate-pulse"></div>
                  <div className="text-center text-slate-700 relative z-10">
                    <MapPin size={64} className="mx-auto mb-4 text-tech-blue/60 animate-bounce" />
                    <p className="font-semibold text-lg mb-2">Interactive Delhi-NCR Map</p>
                    <p className="text-sm text-slate-600 mb-4">📍 Pinned incidents • 🔥 Hotspot analysis • 📊 Data layers</p>
                    <div className="flex flex-wrap gap-2 justify-center">
                      <span className="px-3 py-1 bg-red-100 text-red-700 rounded-full text-xs">🔴 Critical: 8 incidents</span>
                      <span className="px-3 py-1 bg-yellow-100 text-yellow-700 rounded-full text-xs">🟡 Moderate: 15 incidents</span>
                      <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs">🟢 Resolved: 12 incidents</span>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="bg-white/40 backdrop-blur-xl rounded-2xl shadow-2xl p-6 border border-white/30 hover:shadow-3xl transition-all duration-500">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-bold text-slate-800 flex items-center gap-2">
                    <BarChart3 size={20} className="text-tech-blue" />
                    Pollution Trends Analysis
                  </h3>
                  <select 
                    value={selectedTrendPeriod}
                    onChange={(e) => setSelectedTrendPeriod(e.target.value)}
                    className="bg-white/50 backdrop-blur-sm border border-white/30 rounded-lg px-3 py-1 text-sm"
                  >
                    <option value="weekly">Weekly Trends</option>
                    <option value="monthly">Monthly Trends</option>
                    <option value="quarterly">Quarterly Trends</option>
                  </select>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                  <div className="bg-gradient-to-r from-red-50 to-orange-50 p-4 rounded-xl border border-red-200/50">
                    <div className="flex items-center gap-3 mb-2">
                      <TrendingUp size={20} className="text-red-600" />
                      <span className="font-semibold text-slate-800">Industrial Emissions</span>
                    </div>
                    <p className="text-2xl font-bold text-red-600">↑30%</p>
                    <p className="text-sm text-slate-600">vs last month in East Delhi</p>
                  </div>
                  <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-4 rounded-xl border border-green-200/50">
                    <div className="flex items-center gap-3 mb-2">
                      <TrendingUp size={20} className="text-green-600 rotate-180" />
                      <span className="font-semibold text-slate-800">Waste Burning</span>
                    </div>
                    <p className="text-2xl font-bold text-green-600">↓20%</p>
                    <p className="text-sm text-slate-600">After policy intervention</p>
                  </div>
                  <div className="bg-gradient-to-r from-yellow-50 to-amber-50 p-4 rounded-xl border border-yellow-200/50">
                    <div className="flex items-center gap-3 mb-2">
                      <Activity size={20} className="text-yellow-600" />
                      <span className="font-semibold text-slate-800">Construction Dust</span>
                    </div>
                    <p className="text-2xl font-bold text-yellow-600">~15%</p>
                    <p className="text-sm text-slate-600">Steady across regions</p>
                  </div>
                </div>
                <div className="h-48 flex items-center justify-center border-2 border-dashed border-blue-300/50 rounded-2xl bg-gradient-to-br from-blue-50/50 to-cyan-50/50">
                  <div className="text-center text-slate-700">
                    <BarChart3 size={48} className="mx-auto mb-2 text-tech-blue/60" />
                    <p className="font-medium">Trend Visualization Chart</p>
                    <p className="text-sm text-slate-600">Weekly/Monthly pollution pattern analysis</p>
                  </div>
                </div>
              </div>
            )}

            {/* Citizen-NGO Connect Section */}
            <div className="bg-white/40 backdrop-blur-xl rounded-2xl shadow-2xl p-6 border border-white/30 hover:shadow-3xl transition-all duration-500">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-bold text-slate-800 flex items-center gap-2">
                  <MessageSquare size={20} className="text-fresh-green" />
                  Citizen Direct Reports
                </h3>
                <div className="flex items-center gap-2">
                  <span className="bg-fresh-green text-white px-3 py-1 rounded-full text-xs font-bold animate-pulse">
                    7 New
                  </span>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  {
                    citizen: "Raj Kumar",
                    location: "Lajpat Nagar",
                    issue: "Heavy smoke from nearby factory",
                    photo: "📸",
                    time: "2 hours ago",
                    status: "pending"
                  },
                  {
                    citizen: "Priya Singh",
                    location: "Dwarka Sector 10",
                    issue: "Construction dust without barriers",
                    photo: "📸",
                    time: "4 hours ago",
                    status: "validated"
                  },
                  {
                    citizen: "Amit Sharma",
                    location: "Karol Bagh",
                    issue: "Waste burning in open area",
                    photo: "📸",
                    time: "6 hours ago",
                    status: "escalated"
                  },
                  {
                    citizen: "Sunita Devi",
                    location: "Rohini Sector 15",
                    issue: "Industrial chimney emitting black smoke",
                    photo: "📸",
                    time: "8 hours ago",
                    status: "pending"
                  }
                ].map((report, i) => (
                  <div key={i} className="p-4 rounded-xl hover:bg-white/50 backdrop-blur-sm transition-all duration-300 border border-white/30 shadow-lg hover:shadow-xl transform hover:scale-[1.02]">
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex items-center gap-3">
                        <span className="text-2xl">👤</span>
                        <div>
                          <h4 className="font-semibold text-slate-800">{report.citizen}</h4>
                          <p className="text-sm text-slate-600 flex items-center gap-1">
                            <MapPin size={12} />
                            {report.location}
                          </p>
                        </div>
                      </div>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                        report.status === 'pending' ? 'bg-yellow-100 text-yellow-700' :
                        report.status === 'validated' ? 'bg-blue-100 text-blue-700' :
                        'bg-green-100 text-green-700'
                      }`}>
                        {report.status.charAt(0).toUpperCase() + report.status.slice(1)}
                      </span>
                    </div>
                    <p className="text-sm text-slate-700 mb-3">{report.issue}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="text-lg">{report.photo}</span>
                        <span className="text-xs text-slate-600">{report.time}</span>
                      </div>
                      <div className="flex gap-1">
                        {report.status === 'pending' && (
                          <>
                            <button className="px-3 py-1 bg-blue-500 text-white rounded text-xs hover:bg-blue-600 transition-colors">
                              ✓ Validate
                            </button>
                            <button className="px-3 py-1 bg-green-500 text-white rounded text-xs hover:bg-green-600 transition-colors">
                              📤 Escalate
                            </button>
                          </>
                        )}
                        {report.status === 'validated' && (
                          <button className="px-3 py-1 bg-green-500 text-white rounded text-xs hover:bg-green-600 transition-colors">
                            📤 Escalate
                          </button>
                        )}
                        {report.status === 'escalated' && (
                          <span className="px-3 py-1 bg-gray-100 text-gray-600 rounded text-xs">
                            ✅ Sent to Policy
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Enhanced Recent Community Reports */}
            <div className="bg-white/40 backdrop-blur-xl rounded-2xl shadow-2xl p-6 border border-white/30 hover:shadow-3xl transition-all duration-500">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-bold text-slate-800 flex items-center gap-2">
                  <FileText size={20} className="text-warning-orange" />
                  Validated Community Reports
                </h3>
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2 text-sm text-slate-700">
                    <div className="w-2 h-2 bg-aqua-teal rounded-full animate-pulse"></div>
                    CPCB Integration Active
                  </div>
                  <div className="text-sm text-slate-600">
                    Live AQI: <span className="font-bold text-orange-600">156</span>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                {[
                  {
                    title: "Industrial Emissions in East Delhi",
                    status: "Critical",
                    submissions: 34,
                    date: "2 hours ago",
                    verified: true,
                    escalated: false,
                    aqiImpact: "+15 AQI"
                  },
                  {
                    title: "Construction Dust Control Measures",
                    status: "Ongoing",
                    submissions: 12,
                    date: "5 hours ago",
                    verified: true,
                    escalated: true,
                    aqiImpact: "+8 AQI"
                  },
                  {
                    title: "Waste Burning Incidents",
                    status: "Resolved",
                    submissions: 8,
                    date: "1 day ago",
                    verified: true,
                    escalated: true,
                    aqiImpact: "-5 AQI"
                  }
                ].map((report, i) => (
                  <div key={i} className="p-4 rounded-xl hover:bg-white/50 backdrop-blur-sm transition-all duration-300 border border-white/30 shadow-lg hover:shadow-xl transform hover:scale-[1.02]">
                    <div className="flex justify-between items-start">
                      <div className="space-y-2 flex-1">
                        <div className="flex items-center gap-2">
                          <h4 className="font-semibold text-slate-800">{report.title}</h4>
                          {report.verified && (
                            <span className="text-green-600" title="NGO Verified">
                              ✅
                            </span>
                          )}
                          {report.escalated && (
                            <span className="text-blue-600" title="Escalated to Policy">
                              📤
                            </span>
                          )}
                        </div>
                        <div className="flex items-center space-x-4 text-sm">
                          <span className={`px-3 py-1 rounded-full font-medium ${
                            report.status === 'Critical' ? 'bg-danger-red/20 text-danger-red border border-danger-red/30' :
                            report.status === 'Ongoing' ? 'bg-warning-orange/20 text-warning-orange border border-warning-orange/30' :
                            'bg-fresh-green/20 text-fresh-green border border-fresh-green/30'
                          }`}>
                            {report.status}
                          </span>
                          <span className="text-slate-700 flex items-center gap-1">
                            <Users size={14} />
                            {report.submissions} submissions
                          </span>
                          <span className={`text-xs px-2 py-1 rounded ${
                            report.aqiImpact.startsWith('+') ? 'bg-red-100 text-red-700' : 'bg-green-100 text-green-700'
                          }`}>
                            {report.aqiImpact}
                          </span>
                        </div>
                      </div>
                      <div className="text-right">
                        <span className="text-xs text-slate-600">{report.date}</span>
                        {!report.escalated && report.verified && (
                          <button className="block mt-2 px-3 py-1 bg-blue-500 text-white rounded text-xs hover:bg-blue-600 transition-colors">
                            📤 Escalate
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NGODashboard;