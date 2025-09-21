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
  Brain,
  PieChart,
  Clock,
  GitCompare,
  Users,
  Eye,
  Target,
  Calendar,
  Zap,
  Star,
  Globe,
  Satellite,
  Wifi,
  Network,
  Archive,
  Upload
} from 'lucide-react';

const ResearchDashboard = () => {
  const navigate = useNavigate();
  const { user } = useAuth();
  const [selectedTimeRange, setSelectedTimeRange] = useState("30d");
  const [activeModels, setActiveModels] = useState(5);
  const [selectedModel, setSelectedModel] = useState('ensemble');
  const [forecastRange, setForecastRange] = useState('24h');
  const [selectedDataset, setSelectedDataset] = useState('all');
  
  // Mock data for new features
  const sourceAttribution = {
    stubble: 40,
    vehicles: 30,
    industry: 20,
    construction: 10
  };
  
  const forecastData = {
    '24h': [155, 168, 172, 165, 158, 162, 170, 175, 180, 185, 178, 172, 168, 165, 162, 158, 155, 152, 148, 145, 142, 140, 138, 135],
    '48h': [155, 168, 172, 165, 158, 162, 170, 175, 180, 185, 178, 172, 168, 165, 162, 158, 155, 152, 148, 145, 142, 140, 138, 135, 132, 130, 128, 125, 122, 120, 118, 115, 112, 110, 108, 105, 102, 100, 98, 95, 92, 90, 88, 85, 82, 80, 78, 75],
    '72h': Array.from({length: 72}, (_, i) => 155 + Math.sin(i/6) * 20 + Math.random() * 10)
  };
  
  const modelBenchmarks = [
    { name: 'ARIMA', accuracy: 78.5, rmse: 12.3, mae: 8.7, r2: 0.82 },
    { name: 'XGBoost', accuracy: 89.2, rmse: 8.1, mae: 5.9, r2: 0.91 },
    { name: 'LSTM', accuracy: 92.7, rmse: 6.8, mae: 4.2, r2: 0.94 },
    { name: 'Ensemble', accuracy: 94.5, rmse: 5.2, mae: 3.8, r2: 0.96 }
  ];
  
  const dataSources = [
    { name: 'CPCB Sensors', count: 37, status: 'active', coverage: '85%', quality: 'high' },
    { name: 'MODIS Satellite', count: 1, status: 'active', coverage: '100%', quality: 'medium' },
    { name: 'VIIRS Satellite', count: 1, status: 'active', coverage: '100%', quality: 'medium' },
    { name: 'IoT Devices', count: 150, status: 'active', coverage: '70%', quality: 'high' }
  ];
  
  const collaborationTools = [
    { type: 'dataset', title: 'Delhi AQI Comprehensive Dataset', shared: 45, downloads: 1250, rating: 4.8 },
    { type: 'publication', title: 'ML Models for Air Quality Prediction', shared: 23, downloads: 890, rating: 4.6 },
    { type: 'model', title: 'LSTM-based Forecasting Model', shared: 12, downloads: 567, rating: 4.9 }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-cyan-50">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 -right-8 w-96 h-96 bg-gradient-to-l from-green-200/20 to-blue-200/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-8 left-1/3 w-80 h-80 bg-gradient-to-t from-orange-200/20 to-red-200/20 rounded-full blur-3xl animate-pulse"></div>
      </div>
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

      <div className="container mx-auto px-6 py-6 relative">
        <div className="grid grid-cols-12 gap-6 h-full">
          {/* Left Sidebar - Filters & Controls */}
          <div className="col-span-12 lg:col-span-3 space-y-6">
            <div className="bg-white/40 backdrop-blur-xl rounded-2xl shadow-2xl p-6 border border-white/30 hover:shadow-3xl transition-all duration-500">
              <div className="flex items-center gap-2 mb-4">
                <Filter size={20} className="text-tech-blue" />
                <h3 className="font-bold text-slate-800">Research Filters</h3>
              </div>
              
              <div className="mb-4">
                <label className="block text-sm font-medium text-slate-800/80 mb-2">
                  Data Period
                </label>
                <select 
                  value={selectedTimeRange}
                  onChange={(e) => setSelectedTimeRange(e.target.value)}
                  className="w-full p-2 border border-white/30 rounded-lg focus:ring-2 focus:ring-tech-blue focus:border-transparent bg-white/50 backdrop-blur-sm"
                >
                  <option value="7d">Last 7 Days</option>
                  <option value="30d">Last 30 Days</option>
                  <option value="90d">Last 90 Days</option>
                  <option value="1y">Last Year</option>
                </select>
              </div>

              <div className="space-y-3 pt-4 border-t border-white/30">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-slate-700">Data Points</span>
                  <span className="font-bold text-aqua-teal">1.2M</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-slate-700">Active Stations</span>
                  <span className="font-bold text-fresh-green">50</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-slate-700">Model Accuracy</span>
                  <span className="font-bold text-tech-blue">94.5%</span>
                </div>
              </div>
            </div>

            <div className="bg-white/40 backdrop-blur-xl rounded-2xl shadow-2xl p-6 border border-white/30 hover:shadow-3xl transition-all duration-500">
              <h3 className="font-bold text-slate-800 mb-4 flex items-center gap-2">
                <Settings size={20} className="text-saffron" />
                Research Tools
              </h3>
              <div className="space-y-3">
                <button className="w-full text-left px-3 py-2 rounded-lg hover:bg-white/50 backdrop-blur-sm transition-colors duration-300 text-sm">
                  📋 Export Dataset
                </button>
                <button className="w-full text-left px-3 py-2 rounded-lg hover:bg-white/50 backdrop-blur-sm transition-colors duration-300 text-sm">
                  🧮 Run Analysis
                </button>
                <button className="w-full text-left px-3 py-2 rounded-lg hover:bg-white/50 backdrop-blur-sm transition-colors duration-300 text-sm">
                  📈 Generate Report
                </button>
                <button className="w-full text-left px-3 py-2 rounded-lg hover:bg-white/50 backdrop-blur-sm transition-colors duration-300 text-sm">
                  🤖 Train Model
                </button>
              </div>
            </div>
          </div>

          {/* Main Content Area */}
          <div className="col-span-12 lg:col-span-9 space-y-6">
            {/* Source Attribution Module */}
            <div className="bg-white/40 backdrop-blur-xl rounded-2xl shadow-2xl p-6 border border-white/30 hover:shadow-3xl transition-all duration-500">
              <div className="flex items-center justify-between mb-6">
                <h3 className="font-bold text-slate-800 flex items-center gap-2">
                  <Target size={20} className="text-saffron" />
                  Source Attribution Analysis
                </h3>
                <div className="flex items-center gap-2 text-sm text-slate-700">
                  <div className="w-2 h-2 bg-saffron rounded-full animate-pulse"></div>
                  AI-Estimated Contributions
                </div>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Pie Chart */}
                <div className="relative">
                  <div className="text-center mb-4">
                    <h4 className="font-semibold text-slate-800 mb-2">Pollution Source Breakdown</h4>
                    <p className="text-sm text-slate-600">Current period analysis</p>
                  </div>
                  <div className="relative h-48 flex items-center justify-center">
                    <div className="w-40 h-40 rounded-full relative overflow-hidden">
                      {/* Pie chart segments */}
                      <div 
                        className="absolute inset-0 rounded-full" 
                        style={{
                          background: `conic-gradient(
                            from 0deg,
                            #f59e0b 0deg ${sourceAttribution.stubble * 3.6}deg,
                            #3b82f6 ${sourceAttribution.stubble * 3.6}deg ${(sourceAttribution.stubble + sourceAttribution.vehicles) * 3.6}deg,
                            #10b981 ${(sourceAttribution.stubble + sourceAttribution.vehicles) * 3.6}deg ${(sourceAttribution.stubble + sourceAttribution.vehicles + sourceAttribution.industry) * 3.6}deg,
                            #f97316 ${(sourceAttribution.stubble + sourceAttribution.vehicles + sourceAttribution.industry) * 3.6}deg 360deg
                          )`
                        }}
                      ></div>
                      <div className="absolute inset-4 bg-white rounded-full flex items-center justify-center">
                        <div className="text-center">
                          <PieChart size={24} className="text-slate-600 mx-auto mb-1" />
                          <span className="text-xs font-medium text-slate-600">Total</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Legend and Details */}
                <div className="space-y-4">
                  {[
                    { name: 'Stubble Burning', value: sourceAttribution.stubble, color: 'bg-yellow-500', trend: '+5%' },
                    { name: 'Vehicle Emissions', value: sourceAttribution.vehicles, color: 'bg-blue-500', trend: '-2%' },
                    { name: 'Industrial Sources', value: sourceAttribution.industry, color: 'bg-green-500', trend: '+1%' },
                    { name: 'Construction Dust', value: sourceAttribution.construction, color: 'bg-orange-500', trend: '-3%' }
                  ].map((source, i) => (
                    <div key={i} className="flex items-center justify-between p-3 rounded-lg bg-white/50 backdrop-blur-sm border border-white/30">
                      <div className="flex items-center gap-3">
                        <div className={`w-4 h-4 ${source.color} rounded-full`}></div>
                        <span className="font-medium text-slate-800">{source.name}</span>
                      </div>
                      <div className="text-right">
                        <div className="font-bold text-slate-800">{source.value}%</div>
                        <div className={`text-xs ${
                          source.trend.startsWith('+') ? 'text-red-600' : 'text-green-600'
                        }`}>{source.trend}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Forecasting Panel */}
            <div className="bg-white/40 backdrop-blur-xl rounded-2xl shadow-2xl p-6 border border-white/30 hover:shadow-3xl transition-all duration-500">
              <div className="flex items-center justify-between mb-6">
                <h3 className="font-bold text-slate-800 flex items-center gap-2">
                  <TrendingUp size={20} className="text-tech-blue" />
                  AI Forecasting Panel
                </h3>
                <div className="flex items-center gap-4">
                  <select 
                    value={forecastRange}
                    onChange={(e) => setForecastRange(e.target.value)}
                    className="px-3 py-1 rounded-lg bg-white/50 backdrop-blur-sm border border-white/30 text-sm"
                  >
                    <option value="24h">Next 24 Hours</option>
                    <option value="48h">Next 48 Hours</option>
                    <option value="72h">Next 72 Hours</option>
                  </select>
                  <div className="flex items-center gap-2 text-sm text-slate-700">
                    <Clock size={16} className="text-tech-blue" />
                    Live Predictions
                  </div>
                </div>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Forecast Chart */}
                <div className="lg:col-span-2">
                  <div className="h-48 border-2 border-dashed border-blue-300/50 rounded-xl bg-gradient-to-br from-blue-50/50 to-cyan-50/50 backdrop-blur-sm relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-400/5 via-transparent to-cyan-400/5"></div>
                    <div className="relative z-10 p-4">
                      <div className="flex justify-between items-center mb-4">
                        <h4 className="font-semibold text-slate-800">AQI Forecast Trend</h4>
                        <span className="text-sm text-slate-600">Model: {selectedModel.toUpperCase()}</span>
                      </div>
                      <div className="h-32 flex items-end justify-between px-2">
                        {forecastData[forecastRange].slice(0, 12).map((value, i) => (
                          <div key={i} className="flex flex-col items-center">
                            <div 
                              className="w-3 bg-gradient-to-t from-blue-500 to-cyan-400 rounded-t transition-all duration-500 hover:from-blue-600 hover:to-cyan-500"
                              style={{ height: `${(value / 200) * 100}px` }}
                            ></div>
                            <span className="text-xs text-slate-600 mt-1">{i * (forecastRange === '24h' ? 2 : forecastRange === '48h' ? 4 : 6)}h</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Seasonal Forecasting & Alerts */}
                <div className="space-y-4">
                  <div className="p-4 rounded-xl bg-gradient-to-br from-orange-100/50 to-red-100/50 border border-orange-200/50">
                    <div className="flex items-center gap-2 mb-2">
                      <Calendar size={16} className="text-orange-600" />
                      <span className="font-semibold text-orange-800">Seasonal Alert</span>
                    </div>
                    <p className="text-sm text-orange-700 mb-2">Diwali Week Prediction</p>
                    <p className="text-xs text-orange-600">Expected AQI spike: 400-500 (Oct 24-Nov 2)</p>
                  </div>
                  
                  <div className="p-4 rounded-xl bg-gradient-to-br from-purple-100/50 to-blue-100/50 border border-purple-200/50">
                    <div className="flex items-center gap-2 mb-2">
                      <Zap size={16} className="text-purple-600" />
                      <span className="font-semibold text-purple-800">Real-time ML</span>
                    </div>
                    <p className="text-sm text-purple-700 mb-2">Model Confidence</p>
                    <div className="w-full bg-purple-200 rounded-full h-2">
                      <div className="bg-purple-600 h-2 rounded-full" style={{ width: '94%' }}></div>
                    </div>
                    <p className="text-xs text-purple-600 mt-1">94% accuracy</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Model Benchmarking */}
            <div className="bg-white/40 backdrop-blur-xl rounded-2xl shadow-2xl p-6 border border-white/30 hover:shadow-3xl transition-all duration-500">
              <div className="flex items-center justify-between mb-6">
                <h3 className="font-bold text-slate-800 flex items-center gap-2">
                  <GitCompare size={20} className="text-fresh-green" />
                  Model Performance Benchmarking
                </h3>
                <div className="flex items-center gap-2">
                  <select 
                    value={selectedModel}
                    onChange={(e) => setSelectedModel(e.target.value)}
                    className="px-3 py-1 rounded-lg bg-white/50 backdrop-blur-sm border border-white/30 text-sm"
                  >
                    <option value="arima">ARIMA</option>
                    <option value="xgboost">XGBoost</option>
                    <option value="lstm">LSTM</option>
                    <option value="ensemble">Ensemble</option>
                  </select>
                </div>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Performance Comparison Table */}
                <div className="overflow-hidden rounded-xl border border-white/30">
                  <table className="w-full">
                    <thead className="bg-gradient-to-r from-slate-100/50 to-blue-100/50">
                      <tr>
                        <th className="px-4 py-3 text-left text-sm font-semibold text-slate-800">Model</th>
                        <th className="px-4 py-3 text-center text-sm font-semibold text-slate-800">Accuracy</th>
                        <th className="px-4 py-3 text-center text-sm font-semibold text-slate-800">RMSE</th>
                        <th className="px-4 py-3 text-center text-sm font-semibold text-slate-800">R²</th>
                      </tr>
                    </thead>
                    <tbody className="bg-white/50">
                      {modelBenchmarks.map((model, i) => (
                        <tr key={i} className={`border-t border-white/30 ${
                          model.name.toLowerCase() === selectedModel ? 'bg-blue-50/50' : 'hover:bg-white/70'
                        } transition-colors`}>
                          <td className="px-4 py-3">
                            <div className="flex items-center gap-2">
                              {model.name === 'Ensemble' && <Star size={16} className="text-yellow-500" />}
                              <span className="font-medium text-slate-800">{model.name}</span>
                            </div>
                          </td>
                          <td className="px-4 py-3 text-center">
                            <span className={`font-bold ${
                              model.accuracy > 90 ? 'text-green-600' : 
                              model.accuracy > 80 ? 'text-blue-600' : 'text-orange-600'
                            }`}>{model.accuracy}%</span>
                          </td>
                          <td className="px-4 py-3 text-center text-slate-700">{model.rmse}</td>
                          <td className="px-4 py-3 text-center text-slate-700">{model.r2}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                
                {/* Performance Metrics */}
                <div className="space-y-4">
                  <div className="p-4 rounded-xl bg-gradient-to-br from-green-100/50 to-emerald-100/50 border border-green-200/50">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-semibold text-green-800">Best Performer</span>
                      <Star size={16} className="text-yellow-500" />
                    </div>
                    <p className="text-sm text-green-700 mb-1">Ensemble Model</p>
                    <p className="text-xs text-green-600">Combines LSTM, XGBoost, and ARIMA predictions</p>
                  </div>
                  
                  <div className="p-4 rounded-xl bg-gradient-to-br from-blue-100/50 to-cyan-100/50 border border-blue-200/50">
                    <div className="flex items-center gap-2 mb-2">
                      <Brain size={16} className="text-blue-600" />
                      <span className="font-semibold text-blue-800">Algorithm Insights</span>
                    </div>
                    <p className="text-sm text-blue-700 mb-1">LSTM excels in capturing temporal patterns</p>
                    <p className="text-xs text-blue-600">XGBoost handles non-linear relationships well</p>
                  </div>
                  
                  <button className="w-full px-4 py-2 bg-gradient-to-r from-fresh-green to-emerald-500 text-white rounded-lg font-medium hover:from-fresh-green/90 hover:to-emerald-500/90 transition-all duration-300">
                    Deploy Best Model
                  </button>
                </div>
              </div>
            </div>

            {/* Dataset Transparency */}
            <div className="bg-white/40 backdrop-blur-xl rounded-2xl shadow-2xl p-6 border border-white/30 hover:shadow-3xl transition-all duration-500">
              <div className="flex items-center justify-between mb-6">
                <h3 className="font-bold text-slate-800 flex items-center gap-2">
                  <Eye size={20} className="text-aqua-teal" />
                  Dataset Transparency & Sources
                </h3>
                <div className="flex items-center gap-2 text-sm text-slate-700">
                  <Database size={16} className="text-aqua-teal" />
                  Live Data Feeds
                </div>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Data Sources */}
                <div>
                  <h4 className="font-semibold text-slate-800 mb-4">Active Data Sources</h4>
                  <div className="space-y-3">
                    {dataSources.map((source, i) => (
                      <div key={i} className="p-4 rounded-xl bg-white/50 backdrop-blur-sm border border-white/30 hover:bg-white/70 transition-all duration-300">
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center gap-2">
                            {source.name.includes('Satellite') ? <Satellite size={16} className="text-purple-600" /> :
                             source.name.includes('CPCB') ? <Globe size={16} className="text-blue-600" /> :
                             <Wifi size={16} className="text-green-600" />}
                            <span className="font-medium text-slate-800">{source.name}</span>
                          </div>
                          <div className={`px-2 py-1 rounded-full text-xs font-medium ${
                            source.status === 'active' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
                          }`}>
                            {source.status}
                          </div>
                        </div>
                        <div className="grid grid-cols-3 gap-2 text-sm">
                          <div>
                            <span className="text-slate-600">Count:</span>
                            <span className="font-medium text-slate-800 ml-1">{source.count}</span>
                          </div>
                          <div>
                            <span className="text-slate-600">Coverage:</span>
                            <span className="font-medium text-slate-800 ml-1">{source.coverage}</span>
                          </div>
                          <div>
                            <span className="text-slate-600">Quality:</span>
                            <span className={`font-medium ml-1 ${
                              source.quality === 'high' ? 'text-green-600' : 
                              source.quality === 'medium' ? 'text-yellow-600' : 'text-red-600'
                            }`}>{source.quality}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Data Quality Metrics */}
                <div>
                  <h4 className="font-semibold text-slate-800 mb-4">Data Quality Metrics</h4>
                  <div className="space-y-4">
                    <div className="p-4 rounded-xl bg-gradient-to-br from-blue-100/50 to-cyan-100/50 border border-blue-200/50">
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-medium text-blue-800">Completeness</span>
                        <span className="text-blue-600 font-bold">96.8%</span>
                      </div>
                      <div className="w-full bg-blue-200 rounded-full h-2">
                        <div className="bg-blue-600 h-2 rounded-full" style={{ width: '96.8%' }}></div>
                      </div>
                    </div>
                    
                    <div className="p-4 rounded-xl bg-gradient-to-br from-green-100/50 to-emerald-100/50 border border-green-200/50">
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-medium text-green-800">Accuracy</span>
                        <span className="text-green-600 font-bold">94.2%</span>
                      </div>
                      <div className="w-full bg-green-200 rounded-full h-2">
                        <div className="bg-green-600 h-2 rounded-full" style={{ width: '94.2%' }}></div>
                      </div>
                    </div>
                    
                    <div className="p-4 rounded-xl bg-gradient-to-br from-purple-100/50 to-violet-100/50 border border-purple-200/50">
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-medium text-purple-800">Consistency</span>
                        <span className="text-purple-600 font-bold">91.5%</span>
                      </div>
                      <div className="w-full bg-purple-200 rounded-full h-2">
                        <div className="bg-purple-600 h-2 rounded-full" style={{ width: '91.5%' }}></div>
                      </div>
                    </div>
                    
                    <div className="mt-4 p-3 rounded-lg bg-yellow-50 border border-yellow-200">
                      <p className="text-sm text-yellow-800">
                        <strong>Reproducibility Note:</strong> All datasets include metadata, 
                        collection timestamps, and processing methods for full transparency.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Collaboration Tools */}
            <div className="bg-white/40 backdrop-blur-xl rounded-2xl shadow-2xl p-6 border border-white/30 hover:shadow-3xl transition-all duration-500">
              <div className="flex items-center justify-between mb-6">
                <h3 className="font-bold text-slate-800 flex items-center gap-2">
                  <Users size={20} className="text-warning-orange" />
                  Research Collaboration Hub
                </h3>
                <div className="flex items-center gap-2">
                  <button className="flex items-center gap-2 bg-warning-orange hover:bg-warning-orange/80 text-white px-4 py-2 rounded-lg transition-colors duration-300">
                    <Upload size={16} />
                    Upload Research
                  </button>
                </div>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Shared Resources */}
                <div>
                  <h4 className="font-semibold text-slate-800 mb-4 flex items-center gap-2">
                    <Network size={16} className="text-blue-600" />
                    Shared Resources
                  </h4>
                  <div className="space-y-3">
                    {collaborationTools.map((item, i) => (
                      <div key={i} className="p-4 rounded-xl bg-white/50 backdrop-blur-sm border border-white/30 hover:bg-white/70 transition-all duration-300">
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-1">
                              {item.type === 'dataset' ? <Database size={16} className="text-blue-600" /> :
                               item.type === 'publication' ? <FileText size={16} className="text-green-600" /> :
                               <Brain size={16} className="text-purple-600" />}
                              <span className="font-medium text-slate-800">{item.title}</span>
                            </div>
                            <div className="flex items-center gap-4 text-sm text-slate-600">
                              <span>{item.shared} collaborators</span>
                              <span>{item.downloads} downloads</span>
                              <div className="flex items-center gap-1">
                                <Star size={12} className="text-yellow-500 fill-current" />
                                <span className="font-medium">{item.rating}</span>
                              </div>
                            </div>
                          </div>
                          <div className="flex gap-2">
                            <button className="text-blue-600 hover:text-blue-800 transition-colors">
                              <Download size={16} />
                            </button>
                            <button className="text-green-600 hover:text-green-800 transition-colors">
                              <Share2 size={16} />
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Publications Archive */}
                <div>
                  <h4 className="font-semibold text-slate-800 mb-4 flex items-center gap-2">
                    <Archive size={16} className="text-purple-600" />
                    Mini-Publications Archive
                  </h4>
                  <div className="space-y-3">
                    {[
                      {
                        title: "Impact of Crop Burning on Delhi's Air Quality",
                        author: "Dr. Priya Sharma",
                        date: "2024-01-15",
                        citations: 45,
                        type: "Research Paper"
                      },
                      {
                        title: "Machine Learning Approaches for AQI Prediction",
                        author: "Research Team Delhi",
                        date: "2024-01-10",
                        citations: 28,
                        type: "Technical Report"
                      },
                      {
                        title: "Seasonal Pollution Patterns Analysis",
                        author: "Dr. Rajesh Kumar",
                        date: "2024-01-05",
                        citations: 32,
                        type: "Data Analysis"
                      }
                    ].map((pub, i) => (
                      <div key={i} className="p-4 rounded-xl bg-white/50 backdrop-blur-sm border border-white/30 hover:bg-white/70 transition-all duration-300">
                        <div className="flex items-start justify-between mb-2">
                          <div className="flex-1">
                            <h5 className="font-medium text-slate-800 text-sm leading-tight">{pub.title}</h5>
                            <p className="text-xs text-slate-600 mt-1">{pub.author} • {pub.date}</p>
                          </div>
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                            pub.type === 'Research Paper' ? 'bg-blue-100 text-blue-700' :
                            pub.type === 'Technical Report' ? 'bg-green-100 text-green-700' :
                            'bg-purple-100 text-purple-700'
                          }`}>
                            {pub.type}
                          </span>
                        </div>
                        <div className="flex items-center justify-between text-xs text-slate-600">
                          <span>{pub.citations} citations</span>
                          <div className="flex gap-2">
                            <button className="text-blue-600 hover:text-blue-800 transition-colors">View</button>
                            <button className="text-green-600 hover:text-green-800 transition-colors">Cite</button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <div className="mt-4 p-3 rounded-lg bg-gradient-to-r from-purple-100/50 to-blue-100/50 border border-purple-200/50">
                    <p className="text-sm text-purple-800 text-center">
                      🎓 <strong>Contribute to Science:</strong> Publish your findings and help the research community
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white/40 backdrop-blur-xl rounded-2xl shadow-2xl p-6 border border-white/30 hover:shadow-3xl transition-all duration-500">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-bold text-slate-800 flex items-center gap-2">
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
                  <div key={i} className="p-4 rounded-xl hover:bg-white/50 backdrop-blur-sm transition-all duration-300 border border-white/30 shadow-lg hover:shadow-xl transform hover:scale-[1.02]">
                    <div className="flex justify-between items-start">
                      <div className="space-y-2">
                        <h4 className="font-semibold text-slate-800">{finding.title}</h4>
                        <p className="text-sm text-slate-700 leading-relaxed">{finding.description}</p>
                        <div className="flex items-center space-x-4 text-sm">
                          <span className={`px-3 py-1 rounded-full font-medium ${
                            finding.impact === 'High' ? 'bg-fresh-green/20 text-fresh-green border border-fresh-green/30' :
                            'bg-tech-blue/20 text-tech-blue border border-tech-blue/30'
                          }`}>
                            {finding.impact} Impact
                          </span>
                        </div>
                      </div>
                      <span className="text-xs text-slate-600">{finding.date}</span>
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