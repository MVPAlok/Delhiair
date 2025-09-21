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
  Shield
} from 'lucide-react';

const CitizenDashboard = () => {
  const navigate = useNavigate();
  const { user } = useAuth();
  const [selectedLocation, setSelectedLocation] = useState("current");
  const [currentAQI, setCurrentAQI] = useState(156);

  return (
    <div className="min-h-screen bg-light-gray">
      {/* Header */}
      <header className="bg-dark-charcoal text-pure-white shadow-xl border-b-2 border-aqua-teal">
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
              <h1 className="text-2xl font-bold bg-gradient-to-r from-aqua-teal via-pure-white to-fresh-green bg-clip-text text-transparent">
                🏛️ Citizen Dashboard
              </h1>
              {user && (
                <p className="text-sm text-light-gray/70 mt-1">
                  Welcome back, {user.name || 'Citizen'} {user.avatar}
                </p>
              )}
            </div>
            
            <div className="flex items-center gap-4">
              {/* User Profile */}
              <div className="flex items-center gap-3 bg-dark-gunmetal/50 rounded-lg px-3 py-2">
                <span className="text-2xl">{user?.avatar || '🏛️'}</span>
                <div className="hidden md:block">
                  <p className="text-sm font-medium text-pure-white">{user?.name || 'Citizen'}</p>
                  <p className="text-xs text-light-gray/70">{user?.role?.charAt(0).toUpperCase() + user?.role?.slice(1) || 'Citizen'}</p>
                </div>
                <button
                  onClick={() => navigate('/')}
                  className="text-light-gray hover:text-danger-red transition-colors text-sm"
                  title="Logout"
                >
                  🚪
                </button>
              </div>
              
              {/* Location Indicator */}
              <div className="flex items-center gap-2 bg-aqua-teal/20 text-aqua-teal px-3 py-2 rounded-lg">
                <MapPin size={16} />
                <span className="text-sm font-medium">Delhi, India</span>
              </div>
              
              {/* Notifications */}
              <div className="flex gap-2">
                <button className="flex items-center gap-2 bg-fresh-green hover:bg-fresh-green/80 text-white px-4 py-2 rounded-lg transition-colors duration-300">
                  <Bell size={16} />
                  <span className="hidden md:inline">Alerts</span>
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

      <div className="container mx-auto px-6 py-6">
        <div className="grid grid-cols-12 gap-6 h-full">
          {/* Current AQI Display - Full Width */}
          <div className="col-span-12">
            <div className="bg-pure-white rounded-xl shadow-lg p-6 border border-light-gray/50">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="col-span-1 md:col-span-2">
                  <h2 className="text-xl font-bold text-dark-charcoal mb-4 flex items-center gap-2">
                    <Activity size={20} className="text-aqua-teal" />
                    Current Air Quality
                  </h2>
                  <div className="flex items-center space-x-6">
                    <div className="relative">
                      <div className="w-32 h-32 rounded-full bg-gradient-to-br from-warning-orange to-danger-red flex items-center justify-center shadow-lg">
                        <div className="w-28 h-28 rounded-full bg-pure-white flex items-center justify-center">
                          <div className="text-center">
                            <div className="text-4xl font-bold text-dark-charcoal">{currentAQI}</div>
                            <div className="text-sm text-dark-charcoal/70">AQI</div>
                          </div>
                        </div>
                      </div>
                      <div className="absolute -top-2 -right-2 w-6 h-6 bg-danger-red rounded-full flex items-center justify-center">
                        <AlertTriangle size={14} className="text-white" />
                      </div>
                    </div>
                    <div>
                      <div className="text-xl font-semibold text-warning-orange mb-2">Moderate</div>
                      <p className="text-sm text-dark-charcoal/70 max-w-xs leading-relaxed">
                        Air quality is acceptable; however, some pollutants may be a concern for sensitive individuals.
                      </p>
                      <div className="mt-3 flex items-center gap-2">
                        <div className="w-2 h-2 bg-warning-orange rounded-full animate-pulse"></div>
                        <span className="text-xs text-dark-charcoal/60">Updated 2 minutes ago</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-saffron/10 to-warning-orange/10 p-4 rounded-xl border border-saffron/20">
                  <div className="flex items-center gap-2 mb-2">
                    <Wind className="text-saffron" size={20} />
                    <span className="font-semibold text-dark-charcoal">PM2.5</span>
                  </div>
                  <div className="text-2xl font-bold text-saffron">85 μg/m³</div>
                  <div className="text-sm text-dark-charcoal/70">Above threshold</div>
                </div>
                
                <div className="bg-gradient-to-br from-fresh-green/10 to-india-green/10 p-4 rounded-xl border border-fresh-green/20">
                  <div className="flex items-center gap-2 mb-2">
                    <Thermometer className="text-fresh-green" size={20} />
                    <span className="font-semibold text-dark-charcoal">Temperature</span>
                  </div>
                  <div className="text-2xl font-bold text-fresh-green">28°C</div>
                  <div className="text-sm text-dark-charcoal/70">Feels like 30°C</div>
                </div>
              </div>
            </div>
          </div>

          {/* Left Content - Trends and Stations */}
          <div className="col-span-12 lg:col-span-8 space-y-6">
            <div className="bg-pure-white rounded-xl shadow-lg p-6 border border-light-gray/50">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-bold text-dark-charcoal flex items-center gap-2">
                  <TrendingUp size={20} className="text-tech-blue" />
                  24-Hour AQI Trend
                </h3>
                <select className="text-sm border border-light-gray rounded px-2 py-1">
                  <option>Last 24 Hours</option>
                  <option>Last 7 Days</option>
                  <option>Last 30 Days</option>
                </select>
              </div>
              <div className="h-64 flex items-center justify-center border-2 border-dashed border-light-gray/50 rounded-xl bg-light-gray/20">
                <div className="text-center text-dark-charcoal/60">
                  <TrendingUp size={48} className="mx-auto mb-2 text-tech-blue/60" />
                  <p className="font-medium">AQI Trend Analysis</p>
                  <p className="text-sm">Interactive chart showing air quality changes</p>
                </div>
              </div>
            </div>

            <div className="bg-pure-white rounded-xl shadow-lg p-6 border border-light-gray/50">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-bold text-dark-charcoal flex items-center gap-2">
                  <MapPin size={20} className="text-aqua-teal" />
                  Nearby Monitoring Stations
                </h3>
                <button className="text-sm text-aqua-teal hover:underline">
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
                  <div key={i} className="flex items-center justify-between p-4 rounded-xl hover:bg-light-gray/30 transition-all duration-300 border border-light-gray/30">
                    <div className="flex items-center gap-3">
                      <div className={`w-3 h-3 rounded-full ${
                        station.trend === 'improving' ? 'bg-fresh-green animate-pulse' :
                        station.trend === 'worsening' ? 'bg-danger-red animate-pulse' :
                        'bg-warning-orange'
                      }`}></div>
                      <div>
                        <h4 className="font-medium text-dark-charcoal">{station.name}</h4>
                        <div className="text-sm text-dark-charcoal/60">{station.distance} away</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-xl font-bold text-dark-charcoal">{station.aqi}</div>
                      <div className="text-sm text-dark-charcoal/60">AQI</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Sidebar - Alerts and Health */}
          <div className="col-span-12 lg:col-span-4 space-y-6">
            <div className="bg-pure-white rounded-xl shadow-lg p-6 border border-light-gray/50">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-bold text-dark-charcoal flex items-center gap-2">
                  <Bell size={20} className="text-warning-orange" />
                  Recent Alerts
                </h3>
                <span className="text-xs bg-danger-red/20 text-danger-red px-2 py-1 rounded-full">
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
                  <div key={i} className={`p-3 rounded-xl border transition-all duration-300 hover:shadow-md ${
                    alert.type === 'warning' ? 'bg-warning-orange/10 border-warning-orange/30' :
                    'bg-aqua-teal/10 border-aqua-teal/30'
                  }`}>
                    <div className="flex items-start space-x-3">
                      <span className="text-lg">{alert.icon}</span>
                      <div className="flex-1">
                        <p className="text-dark-charcoal font-medium text-sm">{alert.message}</p>
                        <p className="text-xs text-dark-charcoal/60 mt-1">{alert.time}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-pure-white rounded-xl shadow-lg p-6 border border-light-gray/50">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-bold text-dark-charcoal flex items-center gap-2">
                  <Heart size={20} className="text-danger-red" />
                  Health Recommendations
                </h3>
                <Shield size={16} className="text-fresh-green" />
              </div>
              <div className="space-y-4">
                <div className="bg-gradient-to-r from-danger-red/10 to-warning-orange/10 p-4 rounded-xl border border-danger-red/20">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-lg">😷</span>
                    <span className="font-semibold text-dark-charcoal text-sm">Mask Usage</span>
                  </div>
                  <p className="text-xs text-dark-charcoal/70 leading-relaxed">
                    Wear N95 masks when going outdoors. Current AQI levels may affect sensitive individuals.
                  </p>
                </div>
                
                <div className="bg-gradient-to-r from-tech-blue/10 to-aqua-teal/10 p-4 rounded-xl border border-tech-blue/20">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-lg">🏠</span>
                    <span className="font-semibold text-dark-charcoal text-sm">Indoor Air</span>
                  </div>
                  <p className="text-xs text-dark-charcoal/70 leading-relaxed">
                    Keep windows closed during peak pollution hours. Use air purifiers if available.
                  </p>
                </div>
                
                <div className="bg-gradient-to-r from-fresh-green/10 to-india-green/10 p-4 rounded-xl border border-fresh-green/20">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-lg">🏃</span>
                    <span className="font-semibold text-dark-charcoal text-sm">Exercise</span>
                  </div>
                  <p className="text-xs text-dark-charcoal/70 leading-relaxed">
                    Consider indoor activities. Avoid prolonged outdoor exercise during high pollution periods.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-pure-white rounded-xl shadow-lg p-6 border border-light-gray/50">
              <h3 className="font-bold text-dark-charcoal mb-4 flex items-center gap-2">
                <Settings size={20} className="text-saffron" />
                Quick Actions
              </h3>
              <div className="space-y-3">
                <button className="w-full text-left px-3 py-2 rounded-lg hover:bg-light-gray/50 transition-colors duration-300 text-sm">
                  📧 Set Custom Alerts
                </button>
                <button className="w-full text-left px-3 py-2 rounded-lg hover:bg-light-gray/50 transition-colors duration-300 text-sm">
                  📱 Download App
                </button>
                <button className="w-full text-left px-3 py-2 rounded-lg hover:bg-light-gray/50 transition-colors duration-300 text-sm">
                  📊 Share Data
                </button>
                <button className="w-full text-left px-3 py-2 rounded-lg hover:bg-light-gray/50 transition-colors duration-300 text-sm">
                  📅 Weekly Report
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};



export default CitizenDashboard;