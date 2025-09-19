import React from "react";

const AQIHeatMap = ({ selectedRegion }) => {
  const mockRegionData = {
    all: { avgAqi: 234, status: "Poor", color: "bg-warning-orange" },
    central: { avgAqi: 180, status: "Moderate", color: "bg-yellow-400" },
    north: { avgAqi: 280, status: "Poor", color: "bg-warning-orange" },
    south: { avgAqi: 140, status: "Moderate", color: "bg-yellow-400" },
    east: { avgAqi: 380, status: "Very Poor", color: "bg-danger-red" },
    west: { avgAqi: 200, status: "Poor", color: "bg-warning-orange" },
    gurugram: { avgAqi: 320, status: "Very Poor", color: "bg-danger-red" },
    noida: { avgAqi: 150, status: "Moderate", color: "bg-yellow-400" },
    faridabad: { avgAqi: 260, status: "Poor", color: "bg-warning-orange" }
  };

  const currentData = mockRegionData[selectedRegion] || mockRegionData.all;

  return (
    <div className="space-y-4">
      {/* Current AQI Summary */}
      <div className="grid grid-cols-3 gap-4 mb-6">
        <div className="text-center p-4 bg-light-gray/30 rounded-lg">
          <div className={`text-2xl font-bold ${
            currentData.avgAqi > 300 ? 'text-danger-red' :
            currentData.avgAqi > 200 ? 'text-warning-orange' :
            currentData.avgAqi > 100 ? 'text-yellow-600' :
            'text-fresh-green'
          }`}>
            {currentData.avgAqi}
          </div>
          <div className="text-xs text-dark-charcoal/70">Current AQI</div>
        </div>
        <div className="text-center p-4 bg-light-gray/30 rounded-lg">
          <div className="text-2xl font-bold text-tech-blue">24</div>
          <div className="text-xs text-dark-charcoal/70">Active Stations</div>
        </div>
        <div className="text-center p-4 bg-light-gray/30 rounded-lg">
          <div className="text-2xl font-bold text-aqua-teal">↑12%</div>
          <div className="text-xs text-dark-charcoal/70">vs Yesterday</div>
        </div>
      </div>

      {/* Mini Heat Map Visualization */}
      <div className="relative bg-gradient-to-br from-dark-charcoal/90 to-dark-charcoal/70 rounded-lg p-4 h-48">
        <svg viewBox="0 0 300 200" className="w-full h-full">
          {/* Delhi NCR Regions with Heat Map Colors */}
          <defs>
            <radialGradient id="severe" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#EB5757" stopOpacity="0.8"/>
              <stop offset="100%" stopColor="#EB5757" stopOpacity="0.3"/>
            </radialGradient>
            <radialGradient id="poor" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#F2994A" stopOpacity="0.7"/>
              <stop offset="100%" stopColor="#F2994A" stopOpacity="0.2"/>
            </radialGradient>
            <radialGradient id="moderate" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#F1C40F" stopOpacity="0.6"/>
              <stop offset="100%" stopColor="#F1C40F" stopOpacity="0.2"/>
            </radialGradient>
            <radialGradient id="good" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#27AE60" stopOpacity="0.6"/>
              <stop offset="100%" stopColor="#27AE60" stopOpacity="0.2"/>
            </radialGradient>
          </defs>

          {/* Heat zones */}
          <ellipse cx="180" cy="80" rx="40" ry="30" fill="url(#severe)" className="animate-pulse" />
          <ellipse cx="120" cy="120" rx="35" ry="25" fill="url(#poor)" className="animate-pulse" style={{ animationDelay: '0.5s' }} />
          <ellipse cx="220" cy="110" rx="30" ry="20" fill="url(#moderate)" className="animate-pulse" style={{ animationDelay: '1s' }} />
          <ellipse cx="150" cy="150" rx="25" ry="20" fill="url(#good)" className="animate-pulse" style={{ animationDelay: '1.5s' }} />

          {/* Delhi boundary */}
          <path 
            d="M80 60 L140 50 L200 55 L250 65 L280 100 L270 140 L230 170 L180 175 L130 165 L100 140 L85 100 Z" 
            fill="none" 
            stroke="rgba(255,255,255,0.5)" 
            strokeWidth="1"
            strokeDasharray="3,3"
          />

          {/* Major landmarks */}
          <circle cx="150" cy="110" r="2" fill="#00C9A7" />
          <text x="155" y="108" fontSize="8" fill="white" className="text-xs">CP</text>
          
          <circle cx="180" cy="80" r="2" fill="#EB5757" />
          <text x="185" y="78" fontSize="8" fill="white" className="text-xs">AV</text>
        </svg>

        {/* Legend */}
        <div className="absolute bottom-2 left-2 bg-black/50 rounded px-2 py-1">
          <div className="flex gap-3 text-xs text-white">
            <div className="flex items-center gap-1">
              <div className="w-2 h-2 bg-danger-red rounded-full"></div>
              <span>Severe</span>
            </div>
            <div className="flex items-center gap-1">
              <div className="w-2 h-2 bg-warning-orange rounded-full"></div>
              <span>Poor</span>
            </div>
            <div className="flex items-center gap-1">
              <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
              <span>Moderate</span>
            </div>
            <div className="flex items-center gap-1">
              <div className="w-2 h-2 bg-fresh-green rounded-full"></div>
              <span>Good</span>
            </div>
          </div>
        </div>
      </div>

      {/* 24-hour Trend */}
      <div className="bg-light-gray/30 rounded-lg p-4">
        <h4 className="text-sm font-semibold text-dark-charcoal mb-3">24-Hour AQI Trend</h4>
        <div className="flex items-end gap-1 h-16">
          {[220, 235, 250, 280, 290, 310, 330, 350, 340, 320, 300, 280, 260, 240, 220, 200, 190, 210, 230, 250, 270, 290, 310, 234].map((value, index) => (
            <div
              key={index}
              className={`flex-1 rounded-t ${
                value > 300 ? 'bg-danger-red' :
                value > 200 ? 'bg-warning-orange' :
                value > 100 ? 'bg-yellow-400' :
                'bg-fresh-green'
              } opacity-70 hover:opacity-100 transition-opacity cursor-pointer`}
              style={{ height: `${(value / 400) * 100}%` }}
              title={`${index}:00 - AQI ${value}`}
            />
          ))}
        </div>
        <div className="flex justify-between text-xs text-dark-charcoal/60 mt-2">
          <span>00:00</span>
          <span>12:00</span>
          <span>24:00</span>
        </div>
      </div>
    </div>
  );
};

export default AQIHeatMap;