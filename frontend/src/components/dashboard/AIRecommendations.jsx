import React, { useState, useEffect } from "react";
import { Brain, AlertCircle, TrendingUp, MapPin, Clock, CheckCircle } from "lucide-react";

const AIRecommendations = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [selectedCategory, setSelectedCategory] = useState("urgent");

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 60000);
    return () => clearInterval(timer);
  }, []);

  const recommendations = {
    urgent: [
      {
        id: 1,
        priority: "Critical",
        title: "Deploy Traffic Restrictions in Noida",
        description: "AQI predicted to rise +30% in next 6 hours due to low wind conditions.",
        location: "Noida Sectors 14-18",
        timeframe: "Next 6 hours",
        confidence: 94,
        impact: "High",
        icon: "🚦",
        color: "border-danger-red bg-danger-red/5"
      },
      {
        id: 2,
        priority: "High",
        title: "Activate Construction Dust Suppression",
        description: "15 construction sites detected with inadequate dust control measures.",
        location: "Gurugram, Dwarka",
        timeframe: "Immediate",
        confidence: 89,
        impact: "Medium",
        icon: "🏗️",
        color: "border-warning-orange bg-warning-orange/5"
      },
      {
        id: 3,
        priority: "High",
        title: "Stubble Burning Hotspots Alert",
        description: "12 new fire incidents detected near Karnal. Wind direction toward Delhi.",
        location: "Punjab, Haryana borders",
        timeframe: "Next 12 hours",
        confidence: 96,
        impact: "Very High",
        icon: "🔥",
        color: "border-danger-red bg-danger-red/5"
      }
    ],
    proactive: [
      {
        id: 4,
        priority: "Medium",
        title: "Increase Metro Frequency",
        description: "Odd-Even policy starting tomorrow. Public transport demand expected +40%.",
        location: "All Metro Lines",
        timeframe: "Tomorrow 6 AM",
        confidence: 87,
        impact: "Medium",
        icon: "🚇",
        color: "border-tech-blue bg-tech-blue/5"
      },
      {
        id: 5,
        priority: "Medium",
        title: "Industrial Emission Monitoring",
        description: "3 industrial zones showing elevated SO2 levels. Weather unfavorable for dispersion.",
        location: "Mayapuri, Okhla, Narela",
        timeframe: "Next 24 hours",
        confidence: 82,
        impact: "Medium",
        icon: "🏭",
        color: "border-warning-orange bg-warning-orange/5"
      }
    ],
    insights: [
      {
        id: 6,
        priority: "Info",
        title: "Citizen Report Validation",
        description: "85% of citizen dust reports correlate with sensor data. High community engagement.",
        location: "City-wide",
        timeframe: "Continuous",
        confidence: 91,
        impact: "Low",
        icon: "👥",
        color: "border-aqua-teal bg-aqua-teal/5"
      },
      {
        id: 7,
        priority: "Info",
        title: "Weather Pattern Analysis",
        description: "Wind speed increasing tomorrow afternoon. Natural air quality improvement expected.",
        location: "Delhi NCR",
        timeframe: "Tomorrow 2 PM",
        confidence: 78,
        impact: "Positive",
        icon: "🌪️",
        color: "border-fresh-green bg-fresh-green/5"
      }
    ]
  };

  const categories = [
    { key: "urgent", label: "Urgent Actions", count: recommendations.urgent.length },
    { key: "proactive", label: "Proactive", count: recommendations.proactive.length },
    { key: "insights", label: "Insights", count: recommendations.insights.length }
  ];

  const getPriorityIcon = (priority) => {
    switch(priority) {
      case "Critical": return <AlertCircle size={16} className="text-danger-red" />;
      case "High": return <TrendingUp size={16} className="text-warning-orange" />;
      case "Medium": return <Clock size={16} className="text-tech-blue" />;
      default: return <CheckCircle size={16} className="text-aqua-teal" />;
    }
  };

  const getConfidenceColor = (confidence) => {
    if (confidence >= 90) return "text-fresh-green";
    if (confidence >= 80) return "text-warning-orange";
    return "text-danger-red";
  };

  return (
    <div className="space-y-4">
      {/* AI Status */}
      <div className="bg-gradient-to-r from-tech-blue/10 to-aqua-teal/10 border border-tech-blue/20 rounded-lg p-3">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-2">
            <Brain size={16} className="text-tech-blue" />
            <span className="text-sm font-semibold text-tech-blue">AI Analysis Engine</span>
          </div>
          <div className="flex items-center gap-1">
            <div className="w-2 h-2 bg-fresh-green rounded-full animate-pulse"></div>
            <span className="text-xs text-dark-charcoal/60">Active</span>
          </div>
        </div>
        <div className="text-xs text-dark-charcoal/70">
          Last analysis: {currentTime.toLocaleTimeString()} • Processing 247 data sources
        </div>
      </div>

      {/* Category Tabs */}
      <div className="flex gap-1 bg-light-gray/50 rounded-lg p-1">
        {categories.map((category) => (
          <button
            key={category.key}
            onClick={() => setSelectedCategory(category.key)}
            className={`flex-1 px-2 py-1 rounded text-xs font-medium transition-colors duration-300 ${
              selectedCategory === category.key
                ? 'bg-tech-blue text-white'
                : 'text-dark-charcoal hover:bg-tech-blue/20'
            }`}
          >
            <div>{category.label}</div>
            <div className="text-xs opacity-75">({category.count})</div>
          </button>
        ))}
      </div>

      {/* Recommendations List */}
      <div className="space-y-3 max-h-96 overflow-y-auto">
        {recommendations[selectedCategory].map((rec) => (
          <div key={rec.id} className={`border rounded-lg p-3 transition-all duration-300 hover:shadow-md ${rec.color}`}>
            <div className="flex items-start gap-2 mb-2">
              <span className="text-lg">{rec.icon}</span>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  {getPriorityIcon(rec.priority)}
                  <h4 className="text-sm font-semibold text-dark-charcoal truncate">
                    {rec.title}
                  </h4>
                </div>
                <p className="text-xs text-dark-charcoal/80 leading-relaxed">
                  {rec.description}
                </p>
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex items-center gap-4 text-xs">
                <div className="flex items-center gap-1">
                  <MapPin size={12} className="text-dark-charcoal/50" />
                  <span className="text-dark-charcoal/70">{rec.location}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Clock size={12} className="text-dark-charcoal/50" />
                  <span className="text-dark-charcoal/70">{rec.timeframe}</span>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="text-xs">
                    <span className="text-dark-charcoal/60">Confidence: </span>
                    <span className={`font-semibold ${getConfidenceColor(rec.confidence)}`}>
                      {rec.confidence}%
                    </span>
                  </div>
                  <div className="text-xs">
                    <span className="text-dark-charcoal/60">Impact: </span>
                    <span className={`font-semibold ${
                      rec.impact === 'Very High' ? 'text-danger-red' :
                      rec.impact === 'High' ? 'text-warning-orange' :
                      rec.impact === 'Medium' ? 'text-tech-blue' :
                      rec.impact === 'Positive' ? 'text-fresh-green' :
                      'text-dark-charcoal'
                    }`}>
                      {rec.impact}
                    </span>
                  </div>
                </div>
                
                <div className="flex gap-1">
                  <button className="px-2 py-1 bg-tech-blue text-white text-xs rounded hover:bg-tech-blue/80 transition-colors">
                    Act
                  </button>
                  <button className="px-2 py-1 bg-light-gray text-dark-charcoal text-xs rounded hover:bg-light-gray/80 transition-colors">
                    Later
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* AI Model Stats */}
      <div className="bg-light-gray/20 rounded-lg p-3 text-xs">
        <div className="flex items-center justify-between mb-2">
          <span className="font-semibold text-dark-charcoal">Model Performance</span>
          <span className="text-fresh-green font-bold">92.4% Accuracy</span>
        </div>
        <div className="grid grid-cols-2 gap-2">
          <div className="text-center">
            <div className="font-bold text-tech-blue">1,247</div>
            <div className="text-dark-charcoal/60">Predictions/hr</div>
          </div>
          <div className="text-center">
            <div className="font-bold text-aqua-teal">15ms</div>
            <div className="text-dark-charcoal/60">Avg Response</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIRecommendations;