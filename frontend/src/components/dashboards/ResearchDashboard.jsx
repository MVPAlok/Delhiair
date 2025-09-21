import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import { 
  ArrowLeft, 
  Download, 
  Share2, 
  Filter, 
  AlertTriangle,
  Book, 
  Database, 
  Activity,
  TrendingUp,
  Settings,
  BarChart3,
  FileText,
  Brain
} from 'lucide-react';

const ResearchDashboard = () => {
  const navigate = useNavigate();
  const { user } = useAuth();
  const [selectedTimeRange, setSelectedTimeRange] = useState("30d");
  const [activeModels, setActiveModels] = useState(5);

  return (
    <div className="min-h-screen bg-light-gray">
      {/* Header */}
      <header className="bg-dark-charcoal text-pure-white shadow-xl border-b-2 border-tech-blue">
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
              <h1 className="text-2xl font-bold bg-gradient-to-r from-tech-blue via-pure-white to-aqua-teal bg-clip-text text-transparent">
                🔬 Research Dashboard
              </h1>
              {user && (
                <p className="text-sm text-light-gray/70 mt-1">
                  Welcome back, {user.name || 'Researcher'} {user.avatar}
                </p>
              )}
            </div>
            
            <div className="flex items-center gap-4">
              {/* User Profile */}
              <div className="flex items-center gap-3 bg-dark-gunmetal/50 rounded-lg px-3 py-2">
                <span className="text-2xl">{user?.avatar || '🔬'}</span>
                <div className="hidden md:block">
                  <p className="text-sm font-medium text-pure-white">{user?.name || 'Researcher'}</p>
                  <p className="text-xs text-light-gray/70">{user?.role?.charAt(0).toUpperCase() + user?.role?.slice(1) || 'Researcher'}</p>
                </div>
                <button
                  onClick={() => navigate('/')}
                  className="text-light-gray hover:text-danger-red transition-colors text-sm"
                  title="Logout"
                >
                  🚪
                </button>
              </div>
              
              {/* Model Status */}
              <div className="flex items-center gap-2 bg-tech-blue/20 text-tech-blue px-3 py-2 rounded-lg">
                <Brain size={16} />
                <span className="text-sm font-medium">{activeModels} Active Models</span>
              </div>
              
              {/* Export Options */}
              <div className="flex gap-2">
                <button className="flex items-center gap-2 bg-tech-blue hover:bg-tech-blue/80 text-white px-4 py-2 rounded-lg transition-colors duration-300">
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

      <div className="container mx-auto px-6 py-6">
        <div className="grid grid-cols-12 gap-6 h-full">
          {/* Left Sidebar - Filters & Controls */}
          <div className="col-span-12 lg:col-span-3 space-y-6">
            <div className="bg-pure-white rounded-xl shadow-lg p-6 border border-light-gray/50">
              <div className="flex items-center gap-2 mb-4">
                <Filter size={20} className="text-tech-blue" />
                <h3 className="font-bold text-dark-charcoal">Research Filters</h3>
              </div>
              
              <div className="mb-4">
                <label className="block text-sm font-medium text-dark-charcoal/80 mb-2">
                  Data Period
                </label>
                <select 
                  value={selectedTimeRange}
                  onChange={(e) => setSelectedTimeRange(e.target.value)}
                  className="w-full p-2 border border-light-gray rounded-lg focus:ring-2 focus:ring-tech-blue focus:border-transparent"
                >
                  <option value="7d">Last 7 Days</option>
                  <option value="30d">Last 30 Days</option>
                  <option value="90d">Last 90 Days</option>
                  <option value="1y">Last Year</option>
                </select>
              </div>

              <div className="space-y-3 pt-4 border-t border-light-gray/50">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-dark-charcoal/70">Data Points</span>
                  <span className="font-bold text-aqua-teal">1.2M</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-dark-charcoal/70">Active Stations</span>
                  <span className="font-bold text-fresh-green">50</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-dark-charcoal/70">Model Accuracy</span>
                  <span className="font-bold text-tech-blue">94.5%</span>
                </div>
              </div>
            </div>

            <div className="bg-pure-white rounded-xl shadow-lg p-6 border border-light-gray/50">
              <h3 className="font-bold text-dark-charcoal mb-4 flex items-center gap-2">
                <Settings size={20} className="text-saffron" />
                Research Tools
              </h3>
              <div className="space-y-3">
                <button className="w-full text-left px-3 py-2 rounded-lg hover:bg-light-gray/50 transition-colors duration-300 text-sm">
                  📋 Export Dataset
                </button>
                <button className="w-full text-left px-3 py-2 rounded-lg hover:bg-light-gray/50 transition-colors duration-300 text-sm">
                  🧮 Run Analysis
                </button>
                <button className="w-full text-left px-3 py-2 rounded-lg hover:bg-light-gray/50 transition-colors duration-300 text-sm">
                  📈 Generate Report
                </button>
                <button className="w-full text-left px-3 py-2 rounded-lg hover:bg-light-gray/50 transition-colors duration-300 text-sm">
                  🤖 Train Model
                </button>
              </div>
            </div>
          </div>

          {/* Main Content Area */}
          <div className="col-span-12 lg:col-span-9 space-y-6">
            <div className="bg-pure-white rounded-xl shadow-lg p-6 border border-light-gray/50">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-bold text-dark-charcoal flex items-center gap-2">
                  <BarChart3 size={20} className="text-tech-blue" />
                  Research Data Visualization
                </h3>
                <div className="flex items-center gap-2 text-sm text-dark-charcoal/70">
                  <div className="w-2 h-2 bg-aqua-teal rounded-full animate-pulse"></div>
                  Real-time Analysis
                </div>
              </div>
              <div className="h-64 flex items-center justify-center border-2 border-dashed border-light-gray/50 rounded-xl bg-light-gray/20">
                <div className="text-center text-dark-charcoal/60">
                  <BarChart3 size={48} className="mx-auto mb-2 text-tech-blue/60" />
                  <p className="font-medium">Advanced Data Visualization</p>
                  <p className="text-sm">Multi-dimensional analysis charts and graphs</p>
                </div>
              </div>
            </div>

            <div className="bg-pure-white rounded-xl shadow-lg p-6 border border-light-gray/50">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-bold text-dark-charcoal flex items-center gap-2">
                  <FileText size={20} className="text-warning-orange" />
                  Recent Research Findings
                </h3>
                <button className="text-sm text-warning-orange hover:underline">
                  View All Publications
                </button>
              </div>
              <div className="space-y-4">
                {[
                  {
                    title: "Correlation Analysis",
                    description: "Strong correlation found between traffic density and PM2.5 levels during peak hours",
                    date: "2 days ago",
                    impact: "High"
                  },
                  {
                    title: "Pattern Discovery",
                    description: "Seasonal variations in pollution sources identified using machine learning algorithms",
                    date: "5 days ago",
                    impact: "Medium"
                  },
                  {
                    title: "Model Performance",
                    description: "Prediction accuracy improved by 15% with new ensemble learning approach",
                    date: "1 week ago",
                    impact: "High"
                  }
                ].map((finding, i) => (
                  <div key={i} className="p-4 rounded-xl hover:bg-light-gray/30 transition-all duration-300 border border-light-gray/30">
                    <div className="flex justify-between items-start">
                      <div className="space-y-2">
                        <h4 className="font-semibold text-dark-charcoal">{finding.title}</h4>
                        <p className="text-sm text-dark-charcoal/80 leading-relaxed">{finding.description}</p>
                        <div className="flex items-center space-x-4 text-sm">
                          <span className={`px-3 py-1 rounded-full font-medium ${
                            finding.impact === 'High' ? 'bg-fresh-green/20 text-fresh-green border border-fresh-green/30' :
                            'bg-tech-blue/20 text-tech-blue border border-tech-blue/30'
                          }`}>
                            {finding.impact} Impact
                          </span>
                        </div>
                      </div>
                      <span className="text-xs text-dark-charcoal/50">{finding.date}</span>
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



export default ResearchDashboard;