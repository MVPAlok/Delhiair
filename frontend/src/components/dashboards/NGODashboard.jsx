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
  Activity
} from 'lucide-react';

const NGODashboard = () => {
  const navigate = useNavigate();
  const { user } = useAuth();
  const [selectedTimeRange, setSelectedTimeRange] = useState("30d");
  const [selectedRegion, setSelectedRegion] = useState("all");
  const [activeReports, setActiveReports] = useState(24);
  return (
    <div className="min-h-screen bg-light-gray">
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

      <div className="container mx-auto px-6 py-6">
        <div className="grid grid-cols-12 gap-6 h-full">
          {/* Left Sidebar - Filters & Controls */}
          <div className="col-span-12 lg:col-span-3 space-y-6">
            <div className="bg-pure-white rounded-xl shadow-lg p-6 border border-light-gray/50">
              <div className="flex items-center gap-2 mb-4">
                <Filter size={20} className="text-tech-blue" />
                <h3 className="font-bold text-dark-charcoal">Filters</h3>
              </div>
              
              <div className="mb-4">
                <label className="block text-sm font-medium text-dark-charcoal/80 mb-2">
                  Time Range
                </label>
                <select 
                  value={selectedTimeRange}
                  onChange={(e) => setSelectedTimeRange(e.target.value)}
                  className="w-full p-2 border border-light-gray rounded-lg focus:ring-2 focus:ring-tech-blue focus:border-transparent"
                >
                  <option value="7d">Last 7 Days</option>
                  <option value="30d">Last 30 Days</option>
                  <option value="90d">Last 90 Days</option>
                </select>
              </div>

              <div className="space-y-3 pt-4 border-t border-light-gray/50">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-dark-charcoal/70">Active Volunteers</span>
                  <span className="font-bold text-aqua-teal">45</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-dark-charcoal/70">Report Coverage</span>
                  <span className="font-bold text-fresh-green">92.3%</span>
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
                  📝 Submit Report
                </button>
                <button className="w-full text-left px-3 py-2 rounded-lg hover:bg-light-gray/50 transition-colors duration-300 text-sm">
                  👥 Assign Volunteer
                </button>
                <button className="w-full text-left px-3 py-2 rounded-lg hover:bg-light-gray/50 transition-colors duration-300 text-sm">
                  📊 Schedule Survey
                </button>
              </div>
            </div>
          </div>

          {/* Main Content Area */}
          <div className="col-span-12 lg:col-span-9 space-y-6">
            <div className="bg-pure-white rounded-xl shadow-lg p-6 border border-light-gray/50">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-bold text-dark-charcoal flex items-center gap-2">
                  <FileText size={20} className="text-warning-orange" />
                  Recent Community Reports
                </h3>
                <div className="flex items-center gap-2 text-sm text-dark-charcoal/70">
                  <div className="w-2 h-2 bg-aqua-teal rounded-full animate-pulse"></div>
                  Live Updates
                </div>
              </div>
              <div className="space-y-4">
                {[
                  {
                    title: "Industrial Emissions in East Delhi",
                    status: "Critical",
                    submissions: 34,
                    date: "2 hours ago"
                  },
                  {
                    title: "Construction Dust Control Measures",
                    status: "Ongoing",
                    submissions: 12,
                    date: "5 hours ago"
                  },
                  {
                    title: "Waste Burning Incidents",
                    status: "Resolved",
                    submissions: 8,
                    date: "1 day ago"
                  }
                ].map((report, i) => (
                  <div key={i} className="p-4 rounded-xl hover:bg-light-gray/30 transition-all duration-300 border border-light-gray/30">
                    <div className="flex justify-between items-start">
                      <div className="space-y-2">
                        <h4 className="font-semibold text-dark-charcoal">{report.title}</h4>
                        <div className="flex items-center space-x-4 text-sm">
                          <span className={`px-3 py-1 rounded-full font-medium ${
                            report.status === 'Critical' ? 'bg-danger-red/20 text-danger-red border border-danger-red/30' :
                            report.status === 'Ongoing' ? 'bg-warning-orange/20 text-warning-orange border border-warning-orange/30' :
                            'bg-fresh-green/20 text-fresh-green border border-fresh-green/30'
                          }`}>
                            {report.status}
                          </span>
                          <span className="text-dark-charcoal/70 flex items-center gap-1">
                            <Users size={14} />
                            {report.submissions} submissions
                          </span>
                        </div>
                      </div>
                      <span className="text-xs text-dark-charcoal/50">{report.date}</span>
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