import React, { useState } from "react";
import { TrendingUp, TrendingDown, Minus, AlertTriangle, Cloud, Wind } from "lucide-react";

const ForecastingPanel = () => {
  const [forecastPeriod, setForecastPeriod] = useState("24h");
  
  const forecastData = {
    "24h": [
      { time: "Now", aqi: 234, trend: "stable", weather: "calm" },
      { time: "6h", aqi: 280, trend: "up", weather: "low-wind", alert: true },
      { time: "12h", aqi: 320, trend: "up", weather: "humid", alert: true },
      { time: "18h", aqi: 290, trend: "down", weather: "windy" },
      { time: "24h", aqi: 240, trend: "down", weather: "clear" }
    ],
    "48h": [
      { time: "Now", aqi: 234, trend: "stable", weather: "calm" },
      { time: "12h", aqi: 320, trend: "up", weather: "humid", alert: true },
      { time: "24h", aqi: 240, trend: "down", weather: "clear" },
      { time: "36h", aqi: 200, trend: "down", weather: "windy" },
      { time: "48h", aqi: 180, trend: "down", weather: "rainy" }
    ],
    "72h": [
      { time: "Now", aqi: 234, trend: "stable", weather: "calm" },
      { time: "24h", aqi: 240, trend: "down", weather: "clear" },
      { time: "48h", aqi: 180, trend: "down", weather: "rainy" },
      { time: "72h", aqi: 150, trend: "down", weather: "clear" }
    ]
  };

  const currentForecast = forecastData[forecastPeriod];
  
  const getTrendIcon = (trend) => {
    switch(trend) {
      case "up": return <TrendingUp size={16} className="text-danger-red" />;
      case "down": return <TrendingDown size={16} className="text-fresh-green" />;
      default: return <Minus size={16} className="text-yellow-500" />;
    }
  };

  const getWeatherIcon = (weather) => {
    switch(weather) {
      case "rainy": return "🌧️";
      case "windy": return "💨";
      case "humid": return "🌫️";
      case "clear": return "☀️";
      case "low-wind": return "🌪️";
      default: return "⛅";
    }
  };

  const getAQIColor = (aqi) => {
    if (aqi > 300) return "text-danger-red bg-danger-red/10";
    if (aqi > 200) return "text-warning-orange bg-warning-orange/10";
    if (aqi > 100) return "text-yellow-600 bg-yellow-100";
    return "text-fresh-green bg-fresh-green/10";
  };

  return (
    <div className="space-y-4">
      {/* Period Selector */}
      <div className="flex gap-1 bg-light-gray/50 rounded-lg p-1">
        {Object.keys(forecastData).map((period) => (
          <button
            key={period}
            onClick={() => setForecastPeriod(period)}
            className={`flex-1 px-3 py-1 rounded text-xs font-medium transition-colors duration-300 ${
              forecastPeriod === period
                ? 'bg-warning-orange text-white'
                : 'text-dark-charcoal hover:bg-warning-orange/20'
            }`}
          >
            {period}
          </button>
        ))}
      </div>

      {/* Forecast Timeline */}
      <div className="space-y-3">
        {currentForecast.map((forecast, index) => (
          <div key={index} className={`p-3 rounded-lg border transition-all duration-300 hover:shadow-md ${
            forecast.alert 
              ? 'bg-danger-red/5 border-danger-red/20 shadow-sm' 
              : 'bg-light-gray/20 border-light-gray/30'
          }`}>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="text-sm font-medium text-dark-charcoal min-w-0">
                  {forecast.time}
                </div>
                <div className={`px-2 py-1 rounded text-xs font-bold ${getAQIColor(forecast.aqi)}`}>
                  {forecast.aqi}
                </div>
                {getTrendIcon(forecast.trend)}
              </div>
              
              <div className="flex items-center gap-2">
                <span className="text-lg">{getWeatherIcon(forecast.weather)}</span>
                {forecast.alert && <AlertTriangle size={16} className="text-danger-red" />}
              </div>
            </div>
            
            {forecast.alert && (
              <div className="mt-2 text-xs text-danger-red font-medium">
                ⚠️ Expected to cross severe threshold
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Weather Factors */}
      <div className="bg-tech-blue/10 border border-tech-blue/20 rounded-lg p-3">
        <h4 className="text-sm font-semibold text-tech-blue mb-2 flex items-center gap-2">
          <Cloud size={16} />
          Weather Impact
        </h4>
        <div className="space-y-2 text-xs">
          <div className="flex items-center justify-between">
            <span className="text-dark-charcoal/70">Wind Speed</span>
            <span className="font-medium text-dark-charcoal">8 km/h ↓</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-dark-charcoal/70">Humidity</span>
            <span className="font-medium text-dark-charcoal">65% ↑</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-dark-charcoal/70">Temperature</span>
            <span className="font-medium text-dark-charcoal">28°C</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-dark-charcoal/70">Pressure</span>
            <span className="font-medium text-dark-charcoal">1015 mb</span>
          </div>
        </div>
      </div>

      {/* Seasonal Context */}
      <div className="bg-saffron/10 border border-saffron/20 rounded-lg p-3">
        <h4 className="text-sm font-semibold text-saffron mb-2">🍂 Seasonal Outlook</h4>
        <div className="text-xs text-dark-charcoal space-y-1">
          <div>• Peak stubble burning season (Oct-Nov)</div>
          <div>• Expected 40% increase in PM2.5</div>
          <div>• Low wind conditions likely</div>
          <div>• Monitor firecracker activities</div>
        </div>
      </div>

      {/* Confidence Indicator */}
      <div className="flex items-center justify-between text-xs text-dark-charcoal/60">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 bg-fresh-green rounded-full"></div>
          <span>High Confidence</span>
        </div>
        <div>Model accuracy: 92%</div>
      </div>
    </div>
  );
};

export default ForecastingPanel;