import React, { useState } from "react";
import { TrendingDown, TrendingUp, CheckCircle, XCircle, Clock } from "lucide-react";

const PolicyEffectiveness = () => {
  const [selectedPolicy, setSelectedPolicy] = useState("odd-even");
  
  const policyData = {
    "odd-even": {
      name: "Odd-Even Vehicle Policy",
      status: "Active",
      implementation: "Nov 4-15, 2024",
      effectiveness: 85,
      impact: {
        before: 340,
        after: 280,
        reduction: 18,
        trend: "down"
      },
      metrics: [
        { label: "Traffic Reduction", value: "35%", positive: true },
        { label: "Public Transport Usage", value: "+45%", positive: true },
        { label: "Compliance Rate", value: "78%", positive: true },
        { label: "Economic Impact", value: "₹2.3Cr loss", positive: false }
      ]
    },
    "firecracker-ban": {
      name: "Firecracker Ban (Diwali)",
      status: "Completed",
      implementation: "Oct 20 - Nov 10, 2024",
      effectiveness: 92,
      impact: {
        before: 380,
        after: 220,
        reduction: 42,
        trend: "down"
      },
      metrics: [
        { label: "PM2.5 Reduction", value: "48%", positive: true },
        { label: "Noise Level Drop", value: "35dB", positive: true },
        { label: "Compliance Rate", value: "89%", positive: true },
        { label: "Public Support", value: "67%", positive: true }
      ]
    },
    "construction-halt": {
      name: "Construction Activity Halt",
      status: "Under Review",
      implementation: "Emergency Protocol",
      effectiveness: 65,
      impact: {
        before: 420,
        after: 350,
        reduction: 17,
        trend: "down"
      },
      metrics: [
        { label: "PM10 Reduction", value: "25%", positive: true },
        { label: "Dust Emissions", value: "-40%", positive: true },
        { label: "Economic Loss", value: "₹15Cr/day", positive: false },
        { label: "Employment Impact", value: "50k workers", positive: false }
      ]
    },
    "industrial-closure": {
      name: "Industrial Unit Closures",
      status: "Partial",
      implementation: "High Pollution Days",
      effectiveness: 78,
      impact: {
        before: 390,
        after: 310,
        reduction: 21,
        trend: "down"
      },
      metrics: [
        { label: "SO2 Reduction", value: "35%", positive: true },
        { label: "NOx Reduction", value: "28%", positive: true },
        { label: "Production Loss", value: "₹8Cr/day", positive: false },
        { label: "Worker Displacement", value: "12k temp", positive: false }
      ]
    }
  };

  const currentPolicy = policyData[selectedPolicy];
  
  const getStatusColor = (status) => {
    switch(status) {
      case "Active": return "bg-fresh-green/20 text-fresh-green";
      case "Completed": return "bg-tech-blue/20 text-tech-blue";
      case "Under Review": return "bg-warning-orange/20 text-warning-orange";
      case "Partial": return "bg-yellow-400/20 text-yellow-600";
      default: return "bg-light-gray/20 text-dark-charcoal";
    }
  };

  const getEffectivenessColor = (effectiveness) => {
    if (effectiveness >= 80) return "text-fresh-green";
    if (effectiveness >= 60) return "text-warning-orange";
    return "text-danger-red";
  };

  return (
    <div className="space-y-4">
      {/* Policy Selector */}
      <div className="grid grid-cols-2 gap-2">
        {Object.entries(policyData).map(([key, policy]) => (
          <button
            key={key}
            onClick={() => setSelectedPolicy(key)}
            className={`p-2 rounded-lg text-xs font-medium text-left transition-colors duration-300 ${
              selectedPolicy === key
                ? 'bg-india-green/20 text-india-green border border-india-green/30'
                : 'bg-light-gray/30 text-dark-charcoal hover:bg-india-green/10'
            }`}
          >
            <div className="font-semibold">{policy.name}</div>
            <div className={`text-xs px-2 py-1 rounded mt-1 inline-block ${getStatusColor(policy.status)}`}>
              {policy.status}
            </div>
          </button>
        ))}
      </div>

      {/* Policy Details */}
      <div className="bg-light-gray/30 rounded-lg p-4">
        <div className="flex items-start justify-between mb-3">
          <div>
            <h4 className="font-semibold text-dark-charcoal">{currentPolicy.name}</h4>
            <div className="text-xs text-dark-charcoal/60 mt-1">
              📅 {currentPolicy.implementation}
            </div>
          </div>
          <div className={`px-2 py-1 rounded text-xs font-medium ${getStatusColor(currentPolicy.status)}`}>
            {currentPolicy.status}
          </div>
        </div>

        {/* Effectiveness Score */}
        <div className="mb-4">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium text-dark-charcoal">Effectiveness Score</span>
            <span className={`text-lg font-bold ${getEffectivenessColor(currentPolicy.effectiveness)}`}>
              {currentPolicy.effectiveness}%
            </span>
          </div>
          <div className="w-full bg-light-gray rounded-full h-2">
            <div 
              className={`h-2 rounded-full transition-all duration-500 ${
                currentPolicy.effectiveness >= 80 ? 'bg-fresh-green' :
                currentPolicy.effectiveness >= 60 ? 'bg-warning-orange' :
                'bg-danger-red'
              }`}
              style={{ width: `${currentPolicy.effectiveness}%` }}
            ></div>
          </div>
        </div>

        {/* Before/After Comparison */}
        <div className="bg-pure-white rounded-lg p-3 mb-4">
          <h5 className="text-sm font-semibold text-dark-charcoal mb-3">AQI Impact Analysis</h5>
          <div className="grid grid-cols-3 gap-4 text-center">
            <div>
              <div className="text-lg font-bold text-danger-red">{currentPolicy.impact.before}</div>
              <div className="text-xs text-dark-charcoal/60">Before</div>
            </div>
            <div className="flex items-center justify-center">
              <div className="flex items-center gap-1 bg-fresh-green/20 text-fresh-green px-2 py-1 rounded">
                <TrendingDown size={14} />
                <span className="text-sm font-bold">-{currentPolicy.impact.reduction}%</span>
              </div>
            </div>
            <div>
              <div className="text-lg font-bold text-warning-orange">{currentPolicy.impact.after}</div>
              <div className="text-xs text-dark-charcoal/60">After</div>
            </div>
          </div>
        </div>

        {/* Key Metrics */}
        <div className="space-y-2">
          <h5 className="text-sm font-semibold text-dark-charcoal">Key Metrics</h5>
          {currentPolicy.metrics.map((metric, index) => (
            <div key={index} className="flex items-center justify-between p-2 bg-pure-white rounded">
              <div className="flex items-center gap-2">
                {metric.positive ? (
                  <CheckCircle size={14} className="text-fresh-green" />
                ) : (
                  <XCircle size={14} className="text-danger-red" />
                )}
                <span className="text-sm text-dark-charcoal">{metric.label}</span>
              </div>
              <span className={`text-sm font-medium ${
                metric.positive ? 'text-fresh-green' : 'text-danger-red'
              }`}>
                {metric.value}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* AI Recommendation */}
      <div className="bg-tech-blue/10 border border-tech-blue/20 rounded-lg p-3">
        <div className="flex items-start gap-2">
          <div className="text-tech-blue font-bold text-sm">🤖 AI Recommendation:</div>
          <div className="text-sm text-dark-charcoal">
            {selectedPolicy === "odd-even" && "Extend policy duration but improve public transport capacity. Consider exemptions for electric vehicles."}
            {selectedPolicy === "firecracker-ban" && "Highly effective! Implement year-round restrictions on high-emission firecrackers with public awareness campaigns."}
            {selectedPolicy === "construction-halt" && "Implement selective halt based on AQI thresholds. Focus on dust suppression rather than complete shutdown."}
            {selectedPolicy === "industrial-closure" && "Target specific high-emission industries. Provide incentives for cleaner technology adoption."}
          </div>
        </div>
      </div>

      {/* Implementation Timeline */}
      <div className="bg-light-gray/20 rounded-lg p-3">
        <h5 className="text-sm font-semibold text-dark-charcoal mb-2 flex items-center gap-2">
          <Clock size={14} />
          Implementation Progress
        </h5>
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-fresh-green rounded-full"></div>
            <span className="text-xs text-dark-charcoal">Policy Announced</span>
            <span className="text-xs text-dark-charcoal/60 ml-auto">✓ Complete</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-fresh-green rounded-full"></div>
            <span className="text-xs text-dark-charcoal">Enforcement Started</span>
            <span className="text-xs text-dark-charcoal/60 ml-auto">✓ Complete</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-warning-orange rounded-full animate-pulse"></div>
            <span className="text-xs text-dark-charcoal">Impact Assessment</span>
            <span className="text-xs text-dark-charcoal/60 ml-auto">🔄 Ongoing</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-light-gray rounded-full"></div>
            <span className="text-xs text-dark-charcoal">Policy Review</span>
            <span className="text-xs text-dark-charcoal/60 ml-auto">⏳ Pending</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PolicyEffectiveness;