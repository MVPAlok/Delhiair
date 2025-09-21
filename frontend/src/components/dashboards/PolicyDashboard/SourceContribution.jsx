import React, { useState } from "react";

const SourceContribution = () => {
  const [selectedPollutant, setSelectedPollutant] = useState("PM2.5");
  
  const sourceData = {
    "PM2.5": [
      { name: "Stubble Burning", value: 45, color: "#EB5757" },
      { name: "Vehicular Emissions", value: 25, color: "#F2994A" },
      { name: "Industrial", value: 20, color: "#F1C40F" },
      { name: "Construction Dust", value: 10, color: "#95A5A6" }
    ],
    "PM10": [
      { name: "Construction Dust", value: 35, color: "#95A5A6" },
      { name: "Road Dust", value: 30, color: "#BDC3C7" },
      { name: "Vehicular Emissions", value: 20, color: "#F2994A" },
      { name: "Industrial", value: 15, color: "#F1C40F" }
    ],
    "NO₂": [
      { name: "Vehicular Emissions", value: 60, color: "#F2994A" },
      { name: "Industrial", value: 25, color: "#F1C40F" },
      { name: "Power Plants", value: 15, color: "#E74C3C" }
    ],
    "O₃": [
      { name: "Photochemical", value: 70, color: "#3498DB" },
      { name: "Industrial", value: 20, color: "#F1C40F" },
      { name: "Vehicular", value: 10, color: "#F2994A" }
    ]
  };

  const currentData = sourceData[selectedPollutant];
  const total = currentData.reduce((sum, item) => sum + item.value, 0);

  return (
    <div className="space-y-4">
      {/* Pollutant Selector */}
      <div className="flex gap-2 mb-4">
        {Object.keys(sourceData).map((pollutant) => (
          <button
            key={pollutant}
            onClick={() => setSelectedPollutant(pollutant)}
            className={`px-3 py-1 rounded-full text-sm font-medium transition-colors duration-300 ${
              selectedPollutant === pollutant
                ? 'bg-tech-blue text-white'
                : 'bg-light-gray text-dark-charcoal hover:bg-tech-blue/20'
            }`}
          >
            {pollutant}
          </button>
        ))}
      </div>

      {/* Pie Chart Visualization */}
      <div className="flex flex-col lg:flex-row gap-6">
        {/* Visual Pie Chart */}
        <div className="flex-1 flex items-center justify-center">
          <div className="relative w-40 h-40">
            <svg viewBox="0 0 160 160" className="w-full h-full transform -rotate-90">
              {currentData.reduce((acc, item, index) => {
                const percentage = (item.value / total) * 100;
                const circumference = 2 * Math.PI * 70;
                const strokeDasharray = `${(percentage / 100) * circumference} ${circumference}`;
                const strokeDashoffset = -acc.offset * circumference / 100;
                
                acc.elements.push(
                  <circle
                    key={index}
                    cx="80"
                    cy="80"
                    r="70"
                    fill="none"
                    stroke={item.color}
                    strokeWidth="12"
                    strokeDasharray={strokeDasharray}
                    strokeDashoffset={strokeDashoffset}
                    className="transition-all duration-500 hover:stroke-width-14"
                    style={{ animationDelay: `${index * 0.2}s` }}
                  />
                );
                
                acc.offset += percentage;
                return acc;
              }, { elements: [], offset: 0 }).elements}
            </svg>
            
            {/* Center text */}
            <div className="absolute inset-0 flex items-center justify-center flex-col">
              <div className="text-2xl font-bold text-dark-charcoal">{selectedPollutant}</div>
              <div className="text-xs text-dark-charcoal/60">Contribution</div>
            </div>
          </div>
        </div>

        {/* Legend and Data */}
        <div className="flex-1 space-y-3">
          {currentData.map((item, index) => (
            <div key={index} className="flex items-center justify-between p-3 bg-light-gray/30 rounded-lg hover:bg-light-gray/50 transition-colors duration-300">
              <div className="flex items-center gap-3">
                <div 
                  className="w-4 h-4 rounded-full" 
                  style={{ backgroundColor: item.color }}
                ></div>
                <span className="text-sm font-medium text-dark-charcoal">{item.name}</span>
              </div>
              <div className="text-right">
                <div className="text-lg font-bold text-dark-charcoal">{item.value}%</div>
                <div className="text-xs text-dark-charcoal/60">
                  ~{Math.round((item.value / 100) * 234)} AQI
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* AI Insights */}
      <div className="bg-tech-blue/10 border border-tech-blue/30 rounded-lg p-4 mt-4">
        <div className="flex items-start gap-2">
          <div className="text-tech-blue font-bold text-sm">🤖 AI Analysis:</div>
          <div className="text-sm text-dark-charcoal">
            {selectedPollutant === "PM2.5" && "Stubble burning is the primary contributor. Recommend immediate intervention in agricultural areas within 200km radius."}
            {selectedPollutant === "PM10" && "Construction dust dominates. Consider stricter enforcement of construction site regulations and dust suppression measures."}
            {selectedPollutant === "NO₂" && "Vehicular emissions are the major source. Traffic management and promotion of public transport could significantly reduce levels."}
            {selectedPollutant === "O₃" && "Photochemical formation is primary. Focus on reducing precursor emissions (NOx, VOCs) during peak sunlight hours."}
          </div>
        </div>
      </div>

      {/* Trend Comparison */}
      <div className="bg-light-gray/30 rounded-lg p-4">
        <h4 className="text-sm font-semibold text-dark-charcoal mb-3">Source Trend (Last 7 Days)</h4>
        <div className="space-y-2">
          {currentData.map((item, index) => (
            <div key={index} className="flex items-center gap-3">
              <div 
                className="w-3 h-3 rounded-full" 
                style={{ backgroundColor: item.color }}
              ></div>
              <span className="text-xs text-dark-charcoal/70 flex-1">{item.name}</span>
              <div className="flex items-center gap-2">
                <div className="w-16 h-2 bg-light-gray rounded">
                  <div 
                    className="h-full rounded transition-all duration-500"
                    style={{ 
                      width: `${item.value}%`, 
                      backgroundColor: item.color,
                      animation: `expand 1s ease-out ${index * 0.1}s`
                    }}
                  ></div>
                </div>
                <span className="text-xs font-medium w-8 text-right">{item.value}%</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SourceContribution;