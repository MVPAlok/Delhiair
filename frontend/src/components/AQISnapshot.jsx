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
          {/* Interactive Delhi NCR Heat Map Section */}
          <div className="relative rounded-xl shadow-2xl overflow-hidden group bg-gradient-to-br from-dark-charcoal/20 to-dark-charcoal/40">
            <div className="relative h-96 bg-gradient-to-br from-dark-charcoal/90 to-dark-charcoal/70">
              {/* Delhi NCR Heat Map */}
              <svg 
                viewBox="0 0 500 400" 
                className="w-full h-full"
                style={{ filter: 'drop-shadow(0 0 15px rgba(255,153,51,0.4))' }}
              >
                {/* Heat Map Background Zones */}
                {/* Severe Pollution Zone (Anand Vihar area) */}
                <ellipse cx="280" cy="140" rx="60" ry="45" fill="rgba(235, 87, 87, 0.3)" className="animate-pulse" style={{ animationDuration: '3s' }} />
                
                {/* Very Poor Zone (Gurugram area) */}
                <ellipse cx="200" cy="220" rx="70" ry="50" fill="rgba(242, 153, 74, 0.25)" className="animate-pulse" style={{ animationDuration: '4s', animationDelay: '0.5s' }} />
                
                {/* Poor Zone (Central Delhi) */}
                <ellipse cx="250" cy="180" rx="80" ry="60" fill="rgba(241, 196, 15, 0.2)" className="animate-pulse" style={{ animationDuration: '5s', animationDelay: '1s' }} />
                
                {/* Moderate Zone (Noida) */}
                <ellipse cx="320" cy="160" rx="50" ry="40" fill="rgba(230, 126, 34, 0.15)" className="animate-pulse" style={{ animationDuration: '3.5s', animationDelay: '1.5s' }} />
                
                {/* Good Zone (South Delhi - Lodhi Road) */}
                <ellipse cx="240" cy="250" rx="45" ry="35" fill="rgba(39, 174, 96, 0.2)" className="animate-pulse" style={{ animationDuration: '4.5s', animationDelay: '2s' }} />

                {/* Delhi NCR Administrative Boundaries */}
                <defs>
                  <linearGradient id="borderGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#FF9933" stopOpacity="0.8"/>
                    <stop offset="50%" stopColor="#FFFFFF" stopOpacity="0.6"/>
                    <stop offset="100%" stopColor="#138808" stopOpacity="0.8"/>
                  </linearGradient>
                </defs>
                
                {/* Main Delhi boundary */}
                <path 
                  d="M180 120 L280 110 L340 130 L380 160 L370 220 L350 270 L300 290 L240 285 L180 270 L160 220 L170 160 Z" 
                  fill="rgba(28,28,28,0.6)" 
                  stroke="url(#borderGradient)" 
                  strokeWidth="2"
                  className="transition-all duration-500 hover:fill-dark-charcoal/80"
                />
                
                {/* Gurugram boundary */}
                <path 
                  d="M150 200 L200 190 L240 210 L230 260 L180 270 L140 250 Z" 
                  fill="rgba(28,28,28,0.5)" 
                  stroke="url(#borderGradient)" 
                  strokeWidth="1.5"
                  opacity="0.8"
                />
                
                {/* Noida boundary */}
                <path 
                  d="M340 130 L390 140 L400 180 L380 210 L350 200 L340 160 Z" 
                  fill="rgba(28,28,28,0.5)" 
                  stroke="url(#borderGradient)" 
                  strokeWidth="1.5"
                  opacity="0.8"
                />
                
                {/* Faridabad boundary */}
                <path 
                  d="M280 290 L320 285 L340 310 L320 340 L280 335 L260 315 Z" 
                  fill="rgba(28,28,28,0.4)" 
                  stroke="url(#borderGradient)" 
                  strokeWidth="1"
                  opacity="0.7"
                />

                {/* Yamuna River with flowing animation */}
                <defs>
                  <linearGradient id="riverGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#00C9A7" stopOpacity="0.8"/>
                    <stop offset="50%" stopColor="#2F80ED" stopOpacity="0.6"/>
                    <stop offset="100%" stopColor="#00C9A7" stopOpacity="0.8"/>
                  </linearGradient>
                </defs>
                <path 
                  d="M280 110 Q290 150 285 190 Q280 230 275 270 Q270 310 280 340" 
                  fill="none" 
                  stroke="url(#riverGradient)" 
                  strokeWidth="4"
                  className="animate-pulse"
                  style={{ animationDuration: '2s' }}
                />
                
                {/* Major Roads/Highways */}
                <line x1="150" y1="180" x2="400" y2="160" stroke="rgba(242,242,242,0.4)" strokeWidth="2" strokeDasharray="5,5" className="animate-pulse" style={{ animationDuration: '6s' }}/>
                <line x1="200" y1="120" x2="300" y2="290" stroke="rgba(242,242,242,0.3)" strokeWidth="1.5" strokeDasharray="3,3"/>
                <circle cx="250" cy="180" r="3" fill="rgba(255,153,51,0.6)" className="animate-ping"/>
                
                {/* Metro Lines */}
                <path d="M200 160 L300 170 L320 190" stroke="rgba(231, 76, 60, 0.5)" strokeWidth="2" strokeDasharray="4,2"/>
                <path d="M220 140 L260 200 L290 240" stroke="rgba(52, 152, 219, 0.5)" strokeWidth="2" strokeDasharray="4,2"/>
              </svg>
              
              {/* Enhanced AQI Location Markers with realistic positions */}
              {[
                { id: 1, name: "Anand Vihar", aqi: 450, status: "Severe", coordinates: { top: "35%", left: "56%" }, color: "bg-danger-red", description: "Major transport hub" },
                { id: 2, name: "Gurugram", aqi: 320, status: "Very Poor", coordinates: { top: "55%", left: "40%" }, color: "bg-warning-orange", description: "IT & Financial district" },
                { id: 3, name: "Lodhi Road", aqi: 85, status: "Satisfactory", coordinates: { top: "62%", left: "48%" }, color: "bg-fresh-green", description: "Green belt area" },
                { id: 4, name: "Noida Sector 62", aqi: 150, status: "Moderate", coordinates: { top: "40%", left: "68%" }, color: "bg-yellow-400", description: "IT corridor" },
                { id: 5, name: "Dwarka", aqi: 180, status: "Moderate", coordinates: { top: "45%", left: "32%" }, color: "bg-yellow-500", description: "Residential area" },
                { id: 6, name: "Rohini", aqi: 220, status: "Poor", coordinates: { top: "25%", left: "45%" }, color: "bg-orange-500", description: "Dense residential" }
              ].map((location, index) => (
                <div
                  key={location.id}
                  className="absolute transform -translate-x-1/2 -translate-y-1/2 group/marker z-20"
                  style={{ 
                    top: location.coordinates.top, 
                    left: location.coordinates.left 
                  }}
                >
                  {/* Pulsing Ring Effects */}
                  <div className={`absolute inset-0 w-16 h-16 ${location.color} rounded-full opacity-20 animate-ping`}
                       style={{ animationDelay: `${index * 0.4}s`, animationDuration: '3s' }}></div>
                  <div className={`absolute inset-0 w-12 h-12 ${location.color} rounded-full opacity-30 animate-ping`}
                       style={{ animationDelay: `${index * 0.4 + 0.5}s`, animationDuration: '2s' }}></div>
                  
                  {/* Main Marker with enhanced styling */}
                  <div className={`relative w-14 h-14 ${location.color} rounded-full flex items-center justify-center text-white font-bold text-sm border-4 border-white/90 shadow-2xl cursor-pointer transition-all duration-500 hover:scale-125 hover:z-30 group-hover/marker:shadow-xl`}
                       style={{ 
                         boxShadow: `0 0 25px ${location.color.includes('red') ? '#EB575740' : location.color.includes('orange') ? '#F2994A40' : location.color.includes('green') ? '#27AE6040' : location.color.includes('yellow') ? '#F1C40F40' : '#E67E2240'}`,
                         animation: `pulse 4s ease-in-out infinite ${index * 0.3}s`
                       }}>
                    <AnimatedCounter value={location.aqi} duration={2500 + index * 200} />
                    
                    {/* Data quality indicator */}
                    <div className="absolute -top-1 -right-1 w-4 h-4 bg-aqua-teal rounded-full border-2 border-white animate-pulse" 
                         title="Live Data"></div>
                  </div>
                  
                  {/* Enhanced Info Tooltip */}
                  <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-4 opacity-0 group-hover/marker:opacity-100 transition-all duration-500 z-30 pointer-events-none">
                    <div className="bg-white/95 backdrop-blur-sm text-dark-charcoal text-sm font-medium px-5 py-4 rounded-xl shadow-2xl whitespace-nowrap border border-light-gray/30 min-w-max">
                      <div className="font-bold text-base mb-1">{location.name}</div>
                      <div className={`font-semibold text-sm mb-2 ${
                        location.status === 'Severe' ? 'text-danger-red' :
                        location.status === 'Very Poor' ? 'text-warning-orange' :
                        location.status === 'Poor' ? 'text-orange-600' :
                        location.status === 'Moderate' ? 'text-yellow-600' :
                        'text-fresh-green'
                      }`}>
                        AQI: {location.aqi} - {location.status}
                      </div>
                      <div className="text-gray-600 text-xs mb-2">{location.description}</div>
                      <div className="text-xs text-gray-500 flex items-center gap-1">
                        <div className="w-2 h-2 bg-aqua-teal rounded-full animate-pulse"></div>
                        Updated 2 min ago
                      </div>
                      {/* Tooltip Arrow */}
                      <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-white rotate-45 border-t border-l border-light-gray/30"></div>
                    </div>
                  </div>
                </div>
              ))}

              {/* Animated Wind Direction Indicators */}
              <div className="absolute inset-0 pointer-events-none">
                {[...Array(8)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute"
                    style={{
                      left: `${25 + i * 8}%`,
                      top: `${20 + (i % 3) * 15}%`,
                    }}
                  >
                    <div className="w-8 h-1 bg-light-gray/30 rounded-full transform rotate-45 animate-pulse"
                         style={{ animationDelay: `${i * 0.3}s`, animationDuration: '3s' }}></div>
                  </div>
                ))}
              </div>

              {/* Heat Map Legend */}
              <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg p-3 text-xs">
                <div className="font-semibold mb-2 text-dark-charcoal">Heat Map Legend</div>
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-danger-red rounded-full"></div>
                    <span className="text-dark-charcoal">Severe (400+)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-warning-orange rounded-full"></div>
                    <span className="text-dark-charcoal">V.Poor (300+)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <span className="text-dark-charcoal">Poor (200+)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                    <span className="text-dark-charcoal">Moderate (100+)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-fresh-green rounded-full"></div>
                    <span className="text-dark-charcoal">Good (0-100)</span>
                  </div>
                </div>
              </div>

              {/* Real-time Data Indicator */}
              <div className="absolute top-4 right-4 bg-aqua-teal/20 backdrop-blur-sm rounded-lg px-3 py-2 flex items-center gap-2">
                <div className="w-2 h-2 bg-aqua-teal rounded-full animate-pulse"></div>
                <span className="text-xs font-medium text-pure-white">Live Data</span>
              </div>
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