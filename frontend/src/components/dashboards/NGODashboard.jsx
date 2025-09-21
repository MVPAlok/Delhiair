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
  CheckCircle,
  XCircle,
  Send,
  Eye,
  BarChart3,
  PieChart,
  Satellite,
  Shield,
  Bell,
  Globe,
  Database,
  Zap
} from 'lucide-react';

const NGODashboard = () => {
  const navigate = useNavigate();
  const { user } = useAuth();
  const [selectedTimeRange, setSelectedTimeRange] = useState("30d");
  const [selectedRegion, setSelectedRegion] = useState("all");
  const [activeReports, setActiveReports] = useState(24);
  const [mapView, setMapView] = useState(false);
  const [citizenReports, setCitizenReports] = useState(8);
  const [pendingValidation, setPendingValidation] = useState(5);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-cyan-50">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 -right-8 w-96 h-96 bg-gradient-to-l from-green-200/20 to-blue-200/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-8 left-1/3 w-80 h-80 bg-gradient-to-t from-orange-200/20 to-red-200/20 rounded-full blur-3xl animate-pulse"></div>
      </div>

      {/* Header */}
      <header className="bg-dark-charcoal text-pure-white shadow-xl border-b-2 border-fresh-green">
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
              <h1 className="text-2xl font-bold bg-gradient-to-r from-fresh-green via-pure-white to-saffron bg-clip-text text-transparent">
                🌱 NGO Dashboard
              </h1>
              {user && (
                <p className="text-sm text-light-gray/70 mt-1">
                  Welcome back, {user.name || 'NGO Representative'} {user.avatar || '🌱'}
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
              <div className="flex items-center gap-2 bg-saffron/20 text-saffron px-3 py-2 rounded-lg">
                <AlertTriangle size={16} />
                <span className="text-sm font-medium">{activeReports} Active Reports</span>
              </div>
              
              {/* Export Options */}
              <div className="flex gap-2">
                <button className="flex items-center gap-2 bg-fresh-green hover:bg-fresh-green/80 text-white px-4 py-2 rounded-lg transition-colors duration-300">
                  <Download size={16} />
                  <span className="hidden md:inline">Export</span>
                </button>
                <button className="flex items-center gap-2 bg-aqua-teal hover:bg-aqua-teal/80 text-white px-4 py-2 rounded-lg transition-colors duration-300">
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
            {/* NGO Filters Card */}
            <div className="bg-white/40 backdrop-blur-xl rounded-2xl shadow-2xl p-6 border border-white/30 hover:shadow-3xl transition-all duration-500">
              <div className="flex items-center gap-2 mb-4">
                <Filter size={20} className="text-fresh-green" />
                <h3 className="font-bold text-slate-800">NGO Filters</h3>
              </div>
              
              <div className="mb-4">
                <label className="block text-sm font-medium text-slate-800/80 mb-2">
                  Time Range
                </label>
                <select 
                  value={selectedTimeRange}
                  onChange={(e) => setSelectedTimeRange(e.target.value)}
                  className="w-full p-2 border border-white/30 rounded-lg focus:ring-2 focus:ring-fresh-green focus:border-transparent bg-white/50 backdrop-blur-sm"
                >
                  <option value="7d">Last 7 Days</option>
                  <option value="30d">Last 30 Days</option>
                  <option value="90d">Last 90 Days</option>
                  <option value="1y">Last Year</option>
                </select>
              </div>

              <div className="mb-4">
                <label className="block text-sm font-medium text-slate-800/80 mb-2">
                  Region Focus
                </label>
                <select 
                  value={selectedRegion}
                  onChange={(e) => setSelectedRegion(e.target.value)}
                  className="w-full p-2 border border-white/30 rounded-lg focus:ring-2 focus:ring-fresh-green focus:border-transparent bg-white/50 backdrop-blur-sm"
                >
                  <option value="all">All Delhi-NCR</option>
                  <option value="central">Central Delhi</option>
                  <option value="east">East Delhi</option>
                  <option value="west">West Delhi</option>
                  <option value="south">South Delhi</option>
                  <option value="north">North Delhi</option>
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
                  <span className="text-sm text-slate-700">Pending Reviews</span>
                  <span className="font-bold text-saffron">{pendingValidation}</span>
                </div>
              </div>
            </div>

            {/* AI Insights Card */}
            <div className="bg-white/40 backdrop-blur-xl rounded-2xl shadow-2xl p-6 border border-white/30 hover:shadow-3xl transition-all duration-500">
              <div className="flex items-center gap-2 mb-4">
                <div className="relative">
                  <Brain size={20} className="text-purple-600" />
                  <div className="absolute -top-1 -right-1 w-3 h-3 bg-purple-500 rounded-full animate-pulse"></div>
                </div>
                <h3 className="font-bold text-slate-800">AI Insights</h3>
              </div>
              
              <div className="space-y-4">
                <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-4 rounded-xl border border-purple-200/50">
                  <div className="flex items-center gap-2 mb-2">
                    <PieChart size={16} className="text-purple-600" />
                    <span className="text-sm font-semibold text-slate-800">Top Issue This Month</span>
                  </div>
                  <p className="text-lg font-bold text-purple-600">Industrial Emissions</p>
                  <p className="text-sm text-slate-600">45% of all reports</p>
                </div>
                
                <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-4 rounded-xl border border-green-200/50">
                  <div className="flex items-center gap-2 mb-2">
                    <TrendingUp size={16} className="text-green-600" />
                    <span className="text-sm font-semibold text-slate-800">Progress Update</span>
                  </div>
                  <p className="text-sm text-slate-700 leading-relaxed">
                    "Waste burning decreased by 20% after last policy drive."
                  </p>
                </div>
                
                <div className="bg-gradient-to-r from-yellow-50 to-orange-50 p-4 rounded-xl border border-yellow-200/50">
                  <div className="flex items-center gap-2 mb-2">
                    <BarChart3 size={16} className="text-orange-600" />
                    <span className="text-sm font-semibold text-slate-800">Regional Alert</span>
                  </div>
                  <p className="text-sm text-slate-700 leading-relaxed">
                    "Dust incidents increased by 30% in East Delhi compared to last month."
                  </p>
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
                <button className="w-full text-left px-3 py-2 rounded-lg hover:bg-white/50 backdrop-blur-sm transition-colors duration-300 text-sm flex items-center gap-2">
                  <FileText size={16} />
                  📝 Submit Report
                </button>
                <button className="w-full text-left px-3 py-2 rounded-lg hover:bg-white/50 backdrop-blur-sm transition-colors duration-300 text-sm flex items-center gap-2">
                  <Users size={16} />
                  👥 Assign Volunteer
                </button>
                <button className="w-full text-left px-3 py-2 rounded-lg hover:bg-white/50 backdrop-blur-sm transition-colors duration-300 text-sm flex items-center gap-2">
                  <BarChart3 size={16} />
                  📊 Schedule Survey
                </button>
                <button 
                  onClick={() => setMapView(!mapView)}
                  className={`w-full text-left px-3 py-2 rounded-lg hover:bg-white/50 backdrop-blur-sm transition-colors duration-300 text-sm flex items-center gap-2 ${
                    mapView ? 'bg-fresh-green/20 text-fresh-green border border-fresh-green/30' : ''
                  }`}
                >
                  <Map size={16} />
                  🗺️ {mapView ? 'Hide' : 'Show'} Geo Map
                </button>
              </div>
            </div>
          </div>

          {/* Enhanced Main Content Area */}
          <div className="col-span-12 lg:col-span-9 space-y-6">
            
            {/* Geo-Tagged Map View */}
            {mapView && (
              <div className="bg-white/40 backdrop-blur-xl rounded-2xl shadow-2xl p-6 border border-white/30 hover:shadow-3xl transition-all duration-500">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="font-bold text-slate-800 flex items-center gap-2">
                    <MapPin size={20} className="text-red-600" />
                    Geo-Tagged Incident Map - Delhi NCR
                  </h3>
                  <div className="flex items-center gap-4">
                    <span className="text-sm text-slate-600">Region: {selectedRegion === 'all' ? 'All Delhi-NCR' : selectedRegion.charAt(0).toUpperCase() + selectedRegion.slice(1)}</span>
                    <button 
                      onClick={() => setMapView(false)}
                      className="text-sm text-red-600 hover:underline"
                    >
                      ✕ Close Map
                    </button>
                  </div>
                </div>
                <div className="h-96 flex items-center justify-center border-2 border-dashed border-red-300/50 rounded-2xl bg-gradient-to-br from-red-50/50 to-orange-50/50 backdrop-blur-sm relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-red-400/5 via-transparent to-orange-400/5 animate-pulse"></div>
                  <div className="text-center text-slate-700 relative z-10">
                    <Map size={64} className="mx-auto mb-4 text-red-600/60 animate-bounce" />
                    <p className="font-semibold text-lg mb-2">Interactive Delhi-NCR Pollution Map</p>
                    <p className="text-sm text-slate-600 mb-4">Visualize incident hotspots and share with authorities</p>
                    <div className="flex justify-center gap-4 text-sm">
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                        <span>Critical (12 pins)</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                        <span>Moderate (8 pins)</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                        <span>Resolved (15 pins)</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Trend View for NGOs */}
            <div className="bg-white/40 backdrop-blur-xl rounded-2xl shadow-2xl p-6 border border-white/30 hover:shadow-3xl transition-all duration-500">
              <div className="flex items-center justify-between mb-6">
                <h3 className="font-bold text-slate-800 flex items-center gap-2">
                  <TrendingUp size={20} className="text-cyan-600" />
                  Pollution Trends Analysis
                </h3>
                <div className="flex items-center gap-2 text-sm text-slate-600">
                  <Clock size={16} />
                  Updated hourly
                </div>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="space-y-4">
                  {[
                    { issue: 'Dust Incidents', change: '+30%', region: 'East Delhi', trend: 'up', color: 'text-red-600', bgColor: 'bg-red-50' },
                    { issue: 'Industrial Emissions', change: '+15%', region: 'Gurgaon', trend: 'up', color: 'text-orange-600', bgColor: 'bg-orange-50' },
                    { issue: 'Waste Burning', change: '-20%', region: 'All NCR', trend: 'down', color: 'text-green-600', bgColor: 'bg-green-50' },
                    { issue: 'Vehicle Pollution', change: '-5%', region: 'Central Delhi', trend: 'down', color: 'text-blue-600', bgColor: 'bg-blue-50' }
                  ].map((trend, i) => (
                    <div key={i} className={`p-4 rounded-xl border ${trend.bgColor} border-opacity-30`}>
                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className="font-semibold text-slate-800">{trend.issue}</h4>
                          <p className="text-sm text-slate-600">{trend.region}</p>
                        </div>
                        <div className="text-right">
                          <span className={`text-lg font-bold ${trend.color}`}>
                            {trend.change}
                          </span>
                          <p className="text-xs text-slate-500">vs last month</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="h-64 flex items-center justify-center border-2 border-dashed border-cyan-300/50 rounded-2xl bg-gradient-to-br from-cyan-50/50 to-blue-50/50">
                  <div className="text-center text-slate-700">
                    <BarChart3 size={64} className="mx-auto mb-4 text-cyan-600/60" />
                    <p className="font-semibold text-lg mb-2">Trend Visualization</p>
                    <p className="text-sm text-slate-600">Monthly comparison charts</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Citizen-NGO Connect */}
            <div className="bg-white/40 backdrop-blur-xl rounded-2xl shadow-2xl p-6 border border-white/30 hover:shadow-3xl transition-all duration-500">
              <div className="flex items-center justify-between mb-6">
                <h3 className="font-bold text-slate-800 flex items-center gap-2">
                  <MessageSquare size={20} className="text-blue-600" />
                  Citizen Direct Reports
                </h3>
                <div className="flex items-center gap-2">
                  <span className="text-sm text-slate-600">{citizenReports} new reports</span>
                  <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                </div>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="space-y-4">
                  {[
                    {
                      citizen: 'Rajesh Kumar',
                      issue: 'Illegal waste burning near school',
                      location: 'Lajpat Nagar',
                      time: '2 hours ago',
                      photos: 3,
                      status: 'pending'
                    },
                    {
                      citizen: 'Priya Sharma',
                      issue: 'Construction dust without covering',
                      location: 'Dwarka Sector 10',
                      time: '4 hours ago',
                      photos: 2,
                      status: 'validated'
                    },
                    {
                      citizen: 'Anonymous User',
                      issue: 'Industrial smoke after midnight',
                      location: 'Mayapuri',
                      time: '1 day ago',
                      photos: 1,
                      status: 'escalated'
                    }
                  ].map((report, i) => (
                    <div key={i} className="p-4 rounded-xl hover:bg-white/50 backdrop-blur-sm transition-all duration-300 border border-white/30 shadow-lg">
                      <div className="flex justify-between items-start mb-3">
                        <div>
                          <h4 className="font-semibold text-slate-800 text-sm">{report.citizen}</h4>
                          <p className="text-xs text-slate-600">{report.location} • {report.time}</p>
                        </div>
                        <span className={`text-xs px-2 py-1 rounded ${
                          report.status === 'pending' ? 'bg-yellow-100 text-yellow-700' :
                          report.status === 'validated' ? 'bg-green-100 text-green-700' :
                          'bg-blue-100 text-blue-700'
                        }`}>
                          {report.status}
                        </span>
                      </div>
                      <p className="text-sm text-slate-700 mb-3">{report.issue}</p>
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-slate-600 flex items-center gap-1">
                          <Camera size={12} />
                          {report.photos} photos attached
                        </span>
                        <div className="flex gap-2">
                          {report.status === 'pending' && (
                            <>
                              <button className="text-xs px-2 py-1 bg-green-500 text-white rounded hover:bg-green-600 transition-colors flex items-center gap-1">
                                <CheckCircle size={12} /> Validate
                              </button>
                              <button className="text-xs px-2 py-1 bg-red-500 text-white rounded hover:bg-red-600 transition-colors flex items-center gap-1">
                                <XCircle size={12} /> Reject
                              </button>
                            </>
                          )}
                          {report.status === 'validated' && (
                            <button className="text-xs px-2 py-1 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors flex items-center gap-1">
                              <Send size={12} /> Escalate
                            </button>
                          )}
                          <button className="text-xs px-2 py-1 bg-gray-500 text-white rounded hover:bg-gray-600 transition-colors flex items-center gap-1">
                            <Eye size={12} /> View
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="space-y-4">
                  <div className="bg-gradient-to-r from-blue-50 to-cyan-50 p-4 rounded-xl border border-blue-200/50">
                    <h4 className="font-semibold text-slate-800 mb-2 flex items-center gap-2">
                      <Users size={16} className="text-blue-600" />
                      Validation Workflow
                    </h4>
                    <div className="space-y-2 text-sm text-slate-700">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                        <span>Pending Review: {pendingValidation} reports</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        <span>Validated: 15 reports this week</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                        <span>Escalated to Policy: 8 reports</span>
                      </div>
                    </div>
                  </div>
                  <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-4 rounded-xl border border-purple-200/50">
                    <h4 className="font-semibold text-slate-800 mb-2 flex items-center gap-2">
                      <Bell size={16} className="text-purple-600" />
                      Quick Actions
                    </h4>
                    <div className="space-y-2">
                      <button className="w-full text-left px-3 py-2 rounded-lg hover:bg-white/50 text-sm flex items-center gap-2">
                        <Shield size={14} />
                        Bulk Validate Reports
                      </button>
                      <button className="w-full text-left px-3 py-2 rounded-lg hover:bg-white/50 text-sm flex items-center gap-2">
                        <Send size={14} />
                        Send to Policymakers
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* CPCB Integration */}
            <div className="bg-white/40 backdrop-blur-xl rounded-2xl shadow-2xl p-6 border border-white/30 hover:shadow-3xl transition-all duration-500">
              <div className="flex items-center justify-between mb-6">
                <h3 className="font-bold text-slate-800 flex items-center gap-2">
                  <Database size={20} className="text-emerald-600" />
                  CPCB Live Data Integration
                </h3>
                <div className="flex items-center gap-2 text-sm text-slate-600">
                  <Satellite size={16} />
                  Real-time verification layer
                </div>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {[
                  { station: 'Anand Vihar', aqi: 342, status: 'Severe', trend: 'up', color: 'text-red-600' },
                  { station: 'RK Puram', aqi: 198, status: 'Poor', trend: 'stable', color: 'text-orange-600' },
                  { station: 'Dwarka', aqi: 156, status: 'Moderate', trend: 'down', color: 'text-yellow-600' }
                ].map((station, i) => (
                  <div key={i} className="bg-gradient-to-r from-emerald-50 to-green-50 p-4 rounded-xl border border-emerald-200/50">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-semibold text-slate-800">{station.station}</h4>
                      <span className="text-xs bg-emerald-100 text-emerald-700 px-2 py-1 rounded">CPCB</span>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-slate-600">AQI Level</span>
                        <span className={`text-lg font-bold ${station.color}`}>{station.aqi}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-slate-600">Status</span>
                        <span className={`text-sm font-medium ${station.color}`}>{station.status}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-slate-600">Trend</span>
                        <span className="text-sm">
                          {station.trend === 'up' ? '📈' : station.trend === 'down' ? '📉' : '➡️'} {station.trend}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-6 p-4 bg-gradient-to-r from-cyan-50 to-blue-50 rounded-xl border border-cyan-200/50">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-semibold text-slate-800 mb-1">Data Verification Status</h4>
                    <p className="text-sm text-slate-600">Cross-reference your reports with official CPCB readings</p>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="text-center">
                      <span className="text-lg font-bold text-green-600">92%</span>
                      <p className="text-xs text-slate-600">Accuracy Match</p>
                    </div>
                    <button className="px-4 py-2 bg-cyan-500 text-white rounded-lg hover:bg-cyan-600 transition-colors flex items-center gap-2">
                      <Zap size={16} />
                      Sync Reports
                    </button>
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

export default NGODashboard;