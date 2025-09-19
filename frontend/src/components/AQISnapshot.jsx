import React, { useState, useEffect } from "react";
import { Search, MapPin } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { mockAQIData, mockAQICategories } from "../mock/mockData";

const AnimatedCounter = ({ value, duration = 2000 }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime;
    const animateCount = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor(progress * value));

      if (progress < 1) {
        requestAnimationFrame(animateCount);
      }
    };
    requestAnimationFrame(animateCount);
  }, [value, duration]);

  return <span>{count}</span>;
};

const AQISnapshot = () => {
  const [searchLocation, setSearchLocation] = useState("");
  const [isSearching, setIsSearching] = useState(false);

  const handleSearch = () => {
    setIsSearching(true);
    // Mock search delay
    setTimeout(() => {
      setIsSearching(false);
      // Mock search result - could show toast or update map
    }, 1500);
  };

  return (
    <section id="aqi-snapshot" className="py-20 bg-light-gray">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-dark-charcoal relative inline-block pb-4">
            Real-Time AQI Snapshot
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1/2 h-1 bg-gradient-to-r from-saffron via-pure-white to-india-green rounded-full"></div>
          </h2>
          <p className="text-lg text-dark-charcoal/80 mt-6 max-w-2xl mx-auto">
            A live look at air quality across the Delhi-NCR region with real-time monitoring and alerts.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Interactive Delhi Map Section */}
          <div className="relative rounded-xl shadow-2xl overflow-hidden group bg-gradient-to-br from-dark-charcoal/20 to-dark-charcoal/40">
            <div className="relative h-96 bg-gradient-to-br from-light-gray/20 to-light-gray/40">
              {/* Delhi Map Background */}
              <svg 
                viewBox="0 0 400 300" 
                className="w-full h-full opacity-80"
                style={{ filter: 'drop-shadow(0 0 10px rgba(255,153,51,0.3))' }}
              >
                {/* Delhi NCR Outline */}
                <path 
                  d="M50 80 L120 60 L180 70 L250 65 L320 75 L350 120 L340 180 L300 220 L250 240 L180 235 L120 225 L80 200 L60 150 Z" 
                  fill="rgba(28,28,28,0.8)" 
                  stroke="rgba(255,153,51,0.6)" 
                  strokeWidth="2"
                  className="transition-all duration-500 hover:fill-dark-charcoal"
                />
                {/* Yamuna River */}
                <path 
                  d="M180 70 Q200 120 190 180 Q185 220 180 235" 
                  fill="none" 
                  stroke="rgba(0,201,167,0.7)" 
                  strokeWidth="3"
                  className="animate-pulse"
                />
                {/* Roads */}
                <line x1="50" y1="150" x2="350" y2="120" stroke="rgba(242,242,242,0.3)" strokeWidth="1"/>
                <line x1="120" y1="60" x2="250" y2="240" stroke="rgba(242,242,242,0.3)" strokeWidth="1"/>
              </svg>
              
              {/* AQI Location Markers with enhanced animation */}
              {mockAQIData.locations.map((location, index) => (
                <div
                  key={location.id}
                  className="absolute transform -translate-x-1/2 -translate-y-1/2 group/marker"
                  style={{ 
                    top: location.coordinates.top, 
                    left: location.coordinates.left 
                  }}
                >
                  {/* Pulsing Ring */}
                  <div className={`absolute inset-0 w-12 h-12 ${location.color} rounded-full opacity-30 animate-ping`}
                       style={{ animationDelay: `${index * 0.5}s`, animationDuration: '2s' }}></div>
                  
                  {/* Main Marker */}
                  <div className={`relative w-12 h-12 ${location.color} rounded-full flex items-center justify-center text-white font-bold text-sm border-4 border-white/90 shadow-2xl cursor-pointer transition-all duration-300 hover:scale-125 hover:z-10`}
                       style={{ 
                         boxShadow: `0 0 20px ${location.color.includes('red') ? '#EB5757' : location.color.includes('orange') ? '#F2994A' : location.color.includes('green') ? '#27AE60' : '#F1C40F'}40`,
                         animation: `pulse 3s ease-in-out infinite ${index * 0.3}s`
                       }}>
                    <AnimatedCounter value={location.aqi} duration={2000 + index * 200} />
                  </div>
                  
                  {/* Info Tooltip */}
                  <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-3 opacity-0 group-hover/marker:opacity-100 transition-all duration-300 z-20">
                    <div className="bg-white/95 backdrop-blur text-dark-charcoal text-xs font-bold px-4 py-3 rounded-lg shadow-xl whitespace-nowrap border border-light-gray/50">
                      <div className="font-semibold text-sm">{location.name}</div>
                      <div className="text-gray-600 text-xs">{location.status}</div>
                      <div className="text-gray-500 text-xs mt-1">{location.description}</div>
                      {/* Arrow */}
                      <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-white rotate-45 border-t border-l border-light-gray/50"></div>
                    </div>
                  </div>
                </div>
              ))}

              {/* Animated Wind Patterns */}
              <div className="absolute inset-0 pointer-events-none">
                {[...Array(5)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute w-1 h-1 bg-light-gray/40 rounded-full"
                    style={{
                      left: `${20 + i * 15}%`,
                      top: `${30 + i * 10}%`,
                      animation: `float 4s ease-in-out infinite ${i * 0.8}s`,
                    }}
                  />
                ))}
              </div>

              {/* Map Glow Effect */}
              <div className="absolute inset-0 shadow-inner opacity-60 bg-gradient-to-r from-saffron/10 via-transparent to-india-green/10"></div>
            </div>
          </div>

          {/* Controls and Info Section */}
          <div className="space-y-6">
            {/* Location Search */}
            <div className="bg-pure-white p-6 rounded-xl shadow-lg border border-gradient-to-r from-saffron via-pure-white to-india-green">
              <label className="block text-sm font-semibold text-dark-charcoal/80 mb-3">
                Check AQI in your location
              </label>
              <div className="flex gap-2">
                <div className="relative flex-1">
                  <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-dark-charcoal/50" size={20} />
                  <Input
                    type="text"
                    placeholder="e.g., Connaught Place, New Delhi"
                    value={searchLocation}
                    onChange={(e) => setSearchLocation(e.target.value)}
                    className="pl-10 bg-light-gray/50 border-0 focus:ring-2 focus:ring-tech-blue rounded-lg"
                  />
                </div>
                <Button
                  onClick={handleSearch}
                  disabled={isSearching}
                  className="bg-gradient-to-r from-saffron to-india-green hover:from-india-green hover:to-saffron text-white px-6 rounded-lg transition-all duration-300 hover:shadow-lg"
                >
                  {isSearching ? (
                    <div className="animate-spin w-4 h-4 border-2 border-white border-t-transparent rounded-full"></div>
                  ) : (
                    <Search size={18} />
                  )}
                </Button>
              </div>
            </div>

            {/* AQI Categories */}
            <div className="bg-pure-white p-6 rounded-xl shadow-lg border border-gradient-to-r from-saffron via-pure-white to-india-green">
              <h4 className="text-lg font-bold text-center text-dark-charcoal mb-4">
                AQI Color Zones
              </h4>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {mockAQICategories.map((category, index) => (
                  <div
                    key={index}
                    className={`p-3 rounded-lg text-center text-sm transition-transform duration-300 hover:scale-105 cursor-pointer ${category.color}`}
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="font-bold">{category.range}</div>
                    <div className="text-xs mt-1">{category.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Live Stats */}
            <div className="bg-pure-white p-6 rounded-xl shadow-lg border border-gradient-to-r from-saffron via-pure-white to-india-green">
              <h4 className="text-lg font-bold text-center text-dark-charcoal mb-4">
                Live Statistics
              </h4>
              <div className="grid grid-cols-2 gap-4 text-center">
                <div className="p-3 bg-light-gray/30 rounded-lg">
                  <div className="text-2xl font-bold text-dark-charcoal">
                    <AnimatedCounter value={mockAQIData.averageAQI} />
                  </div>
                  <div className="text-sm text-dark-charcoal/70">Average AQI</div>
                </div>
                <div className="p-3 bg-light-gray/30 rounded-lg">
                  <div className="text-2xl font-bold text-dark-charcoal">
                    <AnimatedCounter value={12} />
                  </div>
                  <div className="text-sm text-dark-charcoal/70">Monitoring Stations</div>
                </div>
              </div>
              <div className="text-xs text-center text-dark-charcoal/60 mt-3">
                Last updated: {mockAQIData.lastUpdated}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AQISnapshot;