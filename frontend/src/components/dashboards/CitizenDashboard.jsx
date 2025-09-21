import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import { 
  ArrowLeft, 
  Download, 
  Share2, 
  Filter, 
  AlertTriangle,
  Wind, 
  Thermometer, 
  MapPin, 
  Bell,
  Activity,
  TrendingUp,
  Settings,
  Heart,
  Shield,
  Eye,
  Droplets,
  Sun
} from 'lucide-react';

const CitizenDashboard = () => {
  const navigate = useNavigate();
  const { user } = useAuth();
  const [selectedLocation, setSelectedLocation] = useState("current");
  const [currentAQI, setCurrentAQI] = useState(156);
  const [activeAlerts, setActiveAlerts] = useState(3);

  return (
    <div className="min-h-screen bg-light-gray">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-4 -left-4 w-72 h-72 bg-gradient-to-r from-blue-200/30 to-cyan-200/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/2 -right-8 w-96 h-96 bg-gradient-to-l from-green-200/20 to-blue-200/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-8 left-1/3 w-80 h-80 bg-gradient-to-t from-orange-200/20 to-red-200/20 rounded-full blur-3xl animate-pulse"></div>
      </div>

      {/* Header */}
      <header className="bg-dark-charcoal text-pure-white shadow-xl border-b-2 border-aqua-teal">
        <div className="container mx-auto px-4 sm:px-6 py-3 sm:py-4">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-4">
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-4 w-full sm:w-auto">
              <div className="flex items-center gap-2 sm:gap-4">
                <button
                  onClick={() => navigate("/")}
                  className="flex items-center gap-2 hover:text-aqua-teal transition-colors duration-300"
                >
                  <ArrowLeft size={20} />
                  <span className="hidden sm:inline">Back to Home</span>
                </button>
                <div className="hidden sm:block h-6 w-px bg-light-gray/30"></div>
                <h1 className="text-lg sm:text-2xl font-bold bg-gradient-to-r from-aqua-teal via-pure-white to-fresh-green bg-clip-text text-transparent">
                  🏛️ Citizen Dashboard
                </h1>
              </div>
              {user && (
                <p className="text-xs sm:text-sm text-light-gray/70 sm:mt-1">
                  Welcome back, {user.name || 'Citizen'} {user.avatar}
                </p>
              )}
            </div>
            
            {/* Right section */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 sm:gap-4 w-full sm:w-auto">
              {/* User Profile */}
              <div className="flex items-center gap-3 bg-dark-gunmetal/50 rounded-lg px-3 py-2">
                <span className="text-xl sm:text-2xl">{user?.avatar || '🏛️'}</span>
                <div className="flex-1 sm:hidden md:block">
                  <p className="text-sm font-medium text-pure-white">{user?.name || 'Citizen'}</p>
                  <p className="text-xs text-light-gray/70">{user?.role?.charAt(0).toUpperCase() + user?.role?.slice(1) || 'Citizen'}</p>
                </div>
                <button
                  onClick={() => navigate('/')}
                  className="text-light-gray hover:text-danger-red transition-colors text-sm ml-auto sm:ml-0"
                  title="Logout"
                >
                  🚪
                </button>
              </div>
              
              {/* Location and Action buttons - responsive layout */}
              <div className="flex flex-wrap sm:flex-nowrap items-center gap-2 w-full sm:w-auto">
                {/* Location Indicator */}
                <div className="flex items-center gap-2 bg-aqua-teal/20 text-aqua-teal px-2 sm:px-3 py-2 rounded-lg flex-1 sm:flex-none min-w-0">
                  <MapPin size={14} className="sm:w-4 sm:h-4" />
                  <span className="text-xs sm:text-sm font-medium">Delhi, India</span>
                </div>
                
                {/* Action Buttons */}
                <div className="flex gap-1 sm:gap-2">
                  <button className="flex items-center gap-1 sm:gap-2 bg-danger-red hover:bg-danger-red/80 text-white px-2 sm:px-4 py-2 rounded-lg transition-colors duration-300 text-xs sm:text-sm">
                    <Bell size={14} className="sm:w-4 sm:h-4" />
                    <span className="hidden sm:inline">Alerts</span>
                  </button>
                  <button className="flex items-center gap-1 sm:gap-2 bg-aqua-teal hover:bg-aqua-teal/80 text-white px-2 sm:px-4 py-2 rounded-lg transition-colors duration-300 text-xs sm:text-sm">
                    <Share2 size={14} className="sm:w-4 sm:h-4" />
                    <span className="hidden sm:inline">Share</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 sm:px-6 py-6 relative">
        <div className="grid grid-cols-12 gap-4 sm:gap-6 h-full">
          {/* Current AQI Display - Enhanced with glassmorphism */}
          <div className="col-span-12">
            <div className="bg-white/40 backdrop-blur-xl rounded-2xl shadow-2xl p-8 border border-white/30 hover:shadow-3xl transition-all duration-500 relative overflow-hidden">
              {/* Animated background gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-orange-400/10 via-red-400/5 to-yellow-400/10 animate-pulse"></div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
                <div className="col-span-1 md:col-span-2">
                  <h2 className="text-2xl font-bold text-slate-800 mb-6 flex items-center gap-3">
                    <Activity size={24} className="text-cyan-600" />
                    Current Air Quality
                  </h2>
                  <div className="flex items-center space-x-8">
                    <div className="relative group">
                      <div className="w-36 h-36 rounded-full bg-gradient-to-br from-orange-400 via-red-500 to-red-600 flex items-center justify-center shadow-2xl group-hover:shadow-3xl transition-all duration-300 animate-pulse">
                        <div className="w-32 h-32 rounded-full bg-white/95 backdrop-blur-sm flex items-center justify-center shadow-inner">
                          <div className="text-center">
                            <div className="text-5xl font-bold text-slate-800 mb-1">{currentAQI}</div>
                            <div className="text-sm text-slate-600 font-medium">AQI</div>
                          </div>
                        </div>
                      </div>
                      <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-r from-red-500 to-red-600 rounded-full flex items-center justify-center shadow-lg animate-bounce">
                        <AlertTriangle size={16} className="text-white" />
                      </div>
                      {/* Pulsing rings */}
                      <div className="absolute inset-0 rounded-full border-4 border-red-500/30 animate-ping"></div>
                      <div className="absolute inset-2 rounded-full border-2 border-orange-500/20 animate-ping"></div>
                    </div>
                    <div className="space-y-3">
                      <div className="text-2xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">Moderate</div>
                      <p className="text-slate-700 max-w-xs leading-relaxed">
                        Air quality is acceptable; however, some pollutants may be a concern for sensitive individuals.
                      </p>
                      <div className="flex items-center gap-3">
                        <div className="w-3 h-3 bg-gradient-to-r from-green-400 to-green-500 rounded-full animate-pulse shadow-sm"></div>
                        <span className="text-xs text-slate-600 font-medium">Updated 2 minutes ago</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Enhanced metric cards */}
                <div className="bg-gradient-to-br from-orange-50 to-yellow-50 p-6 rounded-2xl border border-orange-200/50 shadow-lg hover:shadow-xl transition-all duration-300 group">
                  <div className="flex items-center gap-3 mb-3">
                    <Wind className="text-orange-600 group-hover:animate-spin" size={24} />
                    <span className="font-bold text-slate-800">PM2.5</span>
                  </div>
                  <div className="text-3xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">85 μg/m³</div>
                  <div className="text-sm text-slate-600 font-medium mt-1">Above threshold</div>
                  <div className="w-full bg-orange-200 rounded-full h-2 mt-3">
                    <div className="bg-gradient-to-r from-orange-500 to-red-500 h-2 rounded-full w-3/4 animate-pulse"></div>
                  </div>
                </div>
                
                <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-2xl border border-green-200/50 shadow-lg hover:shadow-xl transition-all duration-300 group">
                  <div className="flex items-center gap-3 mb-3">
                    <Thermometer className="text-green-600 group-hover:animate-bounce" size={24} />
                    <span className="font-bold text-slate-800">Temperature</span>
                  </div>
                  <div className="text-3xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">28°C</div>
                  <div className="text-sm text-slate-600 font-medium mt-1">Feels like 30°C</div>
                  <div className="flex items-center gap-2 mt-3">
                    <Sun size={16} className="text-yellow-500 animate-spin" />
                    <span className="text-xs text-slate-600">Partly sunny</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Left Content - Enhanced with better visuals */}
          <div className="col-span-12 lg:col-span-8 space-y-6">
            <div className="bg-white/40 backdrop-blur-xl rounded-2xl shadow-2xl p-6 border border-white/30 hover:shadow-3xl transition-all duration-500">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-bold text-slate-800 flex items-center gap-3">
                  <TrendingUp size={24} className="text-blue-600" />
                  24-Hour AQI Trend
                </h3>
                <select className="bg-white/50 backdrop-blur-sm border border-white/30 rounded-xl px-4 py-2 text-sm font-medium shadow-lg">
                  <option>Last 24 Hours</option>
                  <option>Last 7 Days</option>
                  <option>Last 30 Days</option>
                </select>
              </div>
              <div className="h-64 flex items-center justify-center border-2 border-dashed border-blue-300/50 rounded-2xl bg-gradient-to-br from-blue-50/50 to-cyan-50/50 backdrop-blur-sm relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400/5 via-transparent to-cyan-400/5 animate-pulse"></div>
                <div className="text-center text-slate-700 relative z-10">
                  <TrendingUp size={64} className="mx-auto mb-4 text-blue-500/60 animate-bounce" />
                  <p className="font-semibold text-lg mb-2">AQI Trend Analysis</p>
                  <p className="text-sm text-slate-600">Interactive chart showing air quality changes</p>
                </div>
              </div>
            </div>

            <div className="bg-white/40 backdrop-blur-xl rounded-2xl shadow-2xl p-6 border border-white/30 hover:shadow-3xl transition-all duration-500">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-bold text-slate-800 flex items-center gap-3">
                  <MapPin size={24} className="text-cyan-600" />
                  Nearby Monitoring Stations
                </h3>
                <button className="text-sm text-cyan-600 hover:text-cyan-700 font-semibold hover:underline transition-colors">
                  View All Stations
                </button>
              </div>
              <div className="space-y-4">
                {[
                  {
                    name: "ITO Station",
                    aqi: 145,
                    distance: "1.2 km",
                    status: "Active",
                    trend: "stable"
                  },
                  {
                    name: "Lodhi Road",
                    aqi: 132,
                    distance: "2.5 km",
                    status: "Active",
                    trend: "improving"
                  },
                  {
                    name: "Anand Vihar",
                    aqi: 168,
                    distance: "4.8 km",
                    status: "Active",
                    trend: "worsening"
                  }
                ].map((station, i) => (
                  <div key={i} className="group flex items-center justify-between p-5 rounded-2xl hover:bg-white/50 backdrop-blur-sm transition-all duration-300 border border-white/20 shadow-lg hover:shadow-xl transform hover:scale-[1.02]">
                    <div className="flex items-center gap-4">
                      <div className={`w-4 h-4 rounded-full shadow-lg ${
                        station.trend === 'improving' ? 'bg-gradient-to-r from-green-400 to-green-500 animate-pulse' :
                        station.trend === 'worsening' ? 'bg-gradient-to-r from-red-400 to-red-500 animate-pulse' :
                        'bg-gradient-to-r from-yellow-400 to-orange-400'
                      }`}></div>
                      <div>
                        <h4 className="font-semibold text-slate-800 group-hover:text-cyan-600 transition-colors">{station.name}</h4>
                        <div className="text-sm text-slate-600">{station.distance} away • {station.status}</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-slate-800">{station.aqi}</div>
                      <div className="text-sm text-slate-600 font-medium">AQI</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Sidebar - Enhanced styling */}
          <div className="col-span-12 lg:col-span-4 space-y-6">
            <div className="bg-white/40 backdrop-blur-xl rounded-2xl shadow-2xl p-6 border border-white/30 hover:shadow-3xl transition-all duration-500">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-bold text-slate-800 flex items-center gap-3">
                  <Bell size={24} className="text-red-600 animate-pulse" />
                  Recent Alerts
                </h3>
                <span className="bg-gradient-to-r from-red-500 to-red-600 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg animate-bounce">
                  2 New
                </span>
              </div>
              <div className="space-y-4">
                {[
                  {
                    message: "AQI crossed 150 in your area",
                    time: "2 hours ago",
                    type: "warning",
                    icon: "⚠️"
                  },
                  {
                    message: "Air quality improving trend detected",
                    time: "5 hours ago",
                    type: "info",
                    icon: "📈"
                  },
                  {
                    message: "New monitoring station added nearby",
                    time: "1 day ago",
                    type: "info",
                    icon: "🎯"
                  }
                ].map((alert, i) => (
                  <div key={i} className={`group p-4 rounded-2xl border transition-all duration-300 hover:shadow-lg transform hover:scale-[1.02] ${
                    alert.type === 'warning' ? 'bg-gradient-to-r from-red-50 to-orange-50 border-red-200/50' :
                    'bg-gradient-to-r from-cyan-50 to-blue-50 border-cyan-200/50'
                  }`}>
                    <div className="flex items-start space-x-3">
                      <span className="text-xl group-hover:animate-bounce">{alert.icon}</span>
                      <div className="flex-1">
                        <p className="text-slate-800 font-medium text-sm leading-relaxed">{alert.message}</p>
                        <p className="text-xs text-slate-600 mt-2 font-medium">{alert.time}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white/40 backdrop-blur-xl rounded-2xl shadow-2xl p-6 border border-white/30 hover:shadow-3xl transition-all duration-500">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-bold text-slate-800 flex items-center gap-3">
                  <Heart size={24} className="text-red-500 animate-pulse" />
                  Health Recommendations
                </h3>
                <Shield size={20} className="text-green-500" />
              </div>
              <div className="space-y-4">
                <div className="group bg-gradient-to-r from-red-50 to-orange-50 p-5 rounded-2xl border border-red-200/50 hover:shadow-lg transition-all duration-300 transform hover:scale-[1.02]">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-xl group-hover:animate-bounce">😷</span>
                    <span className="font-bold text-slate-800">Mask Usage</span>
                  </div>
                  <p className="text-sm text-slate-700 leading-relaxed">
                    Wear N95 masks when going outdoors. Current AQI levels may affect sensitive individuals.
                  </p>
                </div>
                
                <div className="group bg-gradient-to-r from-blue-50 to-cyan-50 p-5 rounded-2xl border border-blue-200/50 hover:shadow-lg transition-all duration-300 transform hover:scale-[1.02]">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-xl group-hover:animate-bounce">🏠</span>
                    <span className="font-bold text-slate-800">Indoor Air</span>
                  </div>
                  <p className="text-sm text-slate-700 leading-relaxed">
                    Keep windows closed during peak pollution hours. Use air purifiers if available.
                  </p>
                </div>
                
                <div className="group bg-gradient-to-r from-green-50 to-emerald-50 p-5 rounded-2xl border border-green-200/50 hover:shadow-lg transition-all duration-300 transform hover:scale-[1.02]">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-xl group-hover:animate-bounce">🏃</span>
                    <span className="font-bold text-slate-800">Exercise</span>
                  </div>
                  <p className="text-sm text-slate-700 leading-relaxed">
                    Consider indoor activities. Avoid prolonged outdoor exercise during high pollution periods.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white/40 backdrop-blur-xl rounded-2xl shadow-2xl p-6 border border-white/30 hover:shadow-3xl transition-all duration-500">
              <h3 className="text-xl font-bold text-slate-800 mb-6 flex items-center gap-3">
                <Settings size={24} className="text-orange-600" />
                Quick Actions
              </h3>
              <div className="space-y-3">
                {[
                  { icon: "📧", text: "Set Custom Alerts" },
                  { icon: "📱", text: "Download App" },
                  { icon: "📊", text: "Share Data" },
                  { icon: "📅", text: "Weekly Report" }
                ].map((action, i) => (
                  <button key={i} className="group w-full text-left p-4 rounded-xl hover:bg-white/50 backdrop-blur-sm transition-all duration-300 text-sm border border-white/20 hover:shadow-lg transform hover:scale-[1.02] hover:border-cyan-300/50">
                    <span className="group-hover:animate-bounce inline-block mr-3">{action.icon}</span>
                    <span className="font-medium text-slate-800 group-hover:text-cyan-600 transition-colors">{action.text}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CitizenDashboard;