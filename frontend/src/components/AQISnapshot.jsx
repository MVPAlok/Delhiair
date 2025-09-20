import React, { useState, useEffect } from "react";
import { Search, MapPin, Wind, Thermometer, Droplet, Eye, Activity, AlertTriangle } from "lucide-react";

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
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const handleSearch = () => {
    setIsSearching(true);
    setTimeout(() => {
      setIsSearching(false);
    }, 1500);
  };

  return (
    <section id="aqi-snapshot" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 relative inline-block pb-4">
            Real-Time AQI Snapshot
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1/2 h-1 bg-gradient-to-r from-orange-400 via-white to-green-500 rounded-full"></div>
          </h2>
          <p className="text-lg text-gray-600 mt-6 max-w-2xl mx-auto">
            A live look at air quality across the Delhi-NCR region with real-time monitoring and alerts.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-start">
          {/* Enhanced Left Side - Live Data & Delhi Map */}
          <div className="space-y-6">
            {/* Hero AQI Display */}
            <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 p-8 rounded-2xl text-white shadow-2xl relative overflow-hidden">
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0" style={{
                  backgroundImage: `radial-gradient(circle at 25% 25%, #ffffff 2px, transparent 2px),
                                   radial-gradient(circle at 75% 75%, #ffffff 1px, transparent 1px)`,
                  backgroundSize: '50px 50px, 30px 30px'
                }}></div>
              </div>
              
              {/* Live Indicator & Time */}
              <div className="flex items-center justify-between mb-6 relative z-10">
                <div className="flex items-center gap-3">
                  <div className="relative">
                    <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                    <div className="absolute inset-0 w-3 h-3 bg-green-400 rounded-full animate-ping"></div>
                  </div>
                  <span className="text-lg font-bold tracking-wider">LIVE</span>
                </div>
                <div className="text-sm font-mono opacity-80">
                  {currentTime.toLocaleTimeString()}
                </div>
              </div>
              
              {/* Main AQI Display */}
              <div className="text-center mb-8 relative z-10">
                <div className="text-8xl font-black mb-3 tracking-tight">
                  <span className="bg-gradient-to-r from-red-400 via-orange-400 to-red-500 bg-clip-text text-transparent drop-shadow-lg">
                    <AnimatedCounter value={285} duration={3000} />
                  </span>
                </div>
                <div className="text-2xl font-bold text-red-400 mb-2 tracking-wide">VERY POOR</div>
                <div className="text-gray-300 font-medium">Delhi NCR Region</div>
              </div>

              {/* Quick Stats Row */}
              <div className="grid grid-cols-4 gap-4 mb-6 relative z-10">
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-400">
                    <AnimatedCounter value={12} />
                  </div>
                  <div className="text-xs text-gray-400">Wind km/h</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-orange-400">
                    <AnimatedCounter value={28} />°
                  </div>
                  <div className="text-xs text-gray-400">Temperature</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-cyan-400">
                    <AnimatedCounter value={68} />%
                  </div>
                  <div className="text-xs text-gray-400">Humidity</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-400">
                    <AnimatedCounter value={2} />.<AnimatedCounter value={1} />
                  </div>
                  <div className="text-xs text-gray-400">Visibility</div>
                </div>
              </div>

              {/* Health Advisory */}
              <div className="bg-red-500/20 border border-red-400/30 rounded-xl p-4 backdrop-blur-sm relative z-10">
                <div className="flex items-start gap-3">
                  <AlertTriangle className="text-red-400 mt-0.5 flex-shrink-0" size={20} />
                  <div>
                    <div className="font-semibold text-red-300 mb-1">Health Advisory</div>
                    <div className="text-sm text-gray-200">Sensitive groups should avoid outdoor activities. Everyone should limit prolonged exposure.</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Delhi Map with Key Locations */}
            <div className="relative rounded-2xl shadow-2xl overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
              {/* Map Header */}
              <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-gray-900/90 to-gray-800/90 backdrop-blur-sm p-4 z-30">
                <div className="flex items-center justify-between">
                  <h3 className="text-white font-bold text-lg">Delhi NCR Air Quality Map</h3>
                  <div className="flex items-center gap-2 text-sm text-green-400">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                    <span>12 Stations Active</span>
                  </div>
                </div>
              </div>

              <div className="relative h-96 mt-16">
                {/* Subtle Background Grid */}
                <div className="absolute inset-0 opacity-5" style={{
                  backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                                   linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
                  backgroundSize: '30px 30px'
                }}></div>

                {/* Delhi NCR SVG Map */}
                <svg viewBox="0 0 500 400" className="w-full h-full">
                  <defs>
                    {/* Glowing Effects */}
                    <filter id="glow">
                      <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                      <feMerge> 
                        <feMergeNode in="coloredBlur"/>
                        <feMergeNode in="SourceGraphic"/>
                      </feMerge>
                    </filter>
                    
                    {/* Border Gradient */}
                    <linearGradient id="borderGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#FF9933" stopOpacity="0.8"/>
                      <stop offset="50%" stopColor="#FFFFFF" stopOpacity="0.6"/>
                      <stop offset="100%" stopColor="#138808" stopOpacity="0.8"/>
                    </linearGradient>

                    {/* AQI Heat Gradients */}
                    <radialGradient id="severeGradient" cx="50%" cy="50%">
                      <stop offset="0%" stopColor="rgba(239, 68, 68, 0.6)"/>
                      <stop offset="100%" stopColor="rgba(239, 68, 68, 0.1)"/>
                    </radialGradient>
                    
                    <radialGradient id="poorGradient" cx="50%" cy="50%">
                      <stop offset="0%" stopColor="rgba(245, 158, 11, 0.5)"/>
                      <stop offset="100%" stopColor="rgba(245, 158, 11, 0.1)"/>
                    </radialGradient>
                    
                    <radialGradient id="moderateGradient" cx="50%" cy="50%">
                      <stop offset="0%" stopColor="rgba(234, 179, 8, 0.4)"/>
                      <stop offset="100%" stopColor="rgba(234, 179, 8, 0.1)"/>
                    </radialGradient>
                    
                    <radialGradient id="goodGradient" cx="50%" cy="50%">
                      <stop offset="0%" stopColor="rgba(34, 197, 94, 0.4)"/>
                      <stop offset="100%" stopColor="rgba(34, 197, 94, 0.1)"/>
                    </radialGradient>
                  </defs>

                  {/* Heat Map Zones with Enhanced Visuals */}
                  <circle cx="280" cy="140" r="55" fill="url(#severeGradient)" className="animate-pulse" style={{ animationDuration: '4s' }} />
                  <circle cx="200" cy="220" r="65" fill="url(#poorGradient)" className="animate-pulse" style={{ animationDuration: '5s', animationDelay: '0.5s' }} />
                  <circle cx="320" cy="160" r="45" fill="url(#moderateGradient)" className="animate-pulse" style={{ animationDuration: '4.5s', animationDelay: '1s' }} />
                  <circle cx="240" cy="250" r="40" fill="url(#goodGradient)" className="animate-pulse" style={{ animationDuration: '3.5s', animationDelay: '1.5s' }} />

                  {/* Delhi Administrative Boundary */}
                  <path 
                    d="M180 120 L280 110 L340 130 L380 160 L370 220 L350 270 L300 290 L240 285 L180 270 L160 220 L170 160 Z" 
                    fill="rgba(55, 65, 81, 0.7)" 
                    stroke="url(#borderGradient)" 
                    strokeWidth="3"
                    filter="url(#glow)"
                    className="transition-all duration-500 hover:fill-gray-600"
                  />
                  
                  {/* NCR Regions */}
                  <path d="M150 200 L200 190 L240 210 L230 260 L180 270 L140 250 Z" 
                        fill="rgba(55, 65, 81, 0.5)" stroke="url(#borderGradient)" strokeWidth="2" opacity="0.8"/>
                  <path d="M340 130 L390 140 L400 180 L380 210 L350 200 L340 160 Z" 
                        fill="rgba(55, 65, 81, 0.5)" stroke="url(#borderGradient)" strokeWidth="2" opacity="0.8"/>
                  <path d="M280 290 L320 285 L340 310 L320 340 L280 335 L260 315 Z" 
                        fill="rgba(55, 65, 81, 0.4)" stroke="url(#borderGradient)" strokeWidth="2" opacity="0.7"/>

                  {/* Yamuna River with Enhanced Animation */}
                  <path d="M280 110 Q290 150 285 190 Q280 230 275 270 Q270 310 280 340" 
                        fill="none" stroke="#06B6D4" strokeWidth="5" filter="url(#glow)"
                        className="animate-pulse" style={{ animationDuration: '3s' }}/>

                  {/* Metro Lines */}
                  <path d="M200 160 L300 170 L320 190" stroke="rgba(239, 68, 68, 0.6)" strokeWidth="3" strokeDasharray="8,4" filter="url(#glow)"/>
                  <path d="M220 140 L260 200 L290 240" stroke="rgba(59, 130, 246, 0.6)" strokeWidth="3" strokeDasharray="8,4" filter="url(#glow)"/>
                  <path d="M180 180 L350 190" stroke="rgba(16, 185, 129, 0.6)" strokeWidth="3" strokeDasharray="8,4" filter="url(#glow)"/>
                </svg>

                {/* Key Location Markers - Simplified and Prominent */}
                {[
                  { name: "Anand Vihar", aqi: 450, coords: { top: "35%", left: "56%" }, color: "bg-red-500", textColor: "text-red-300" },
                  { name: "Gurugram", aqi: 320, coords: { top: "55%", left: "40%" }, color: "bg-orange-500", textColor: "text-orange-300" },
                  { name: "Lodhi Road", aqi: 85, coords: { top: "62%", left: "48%" }, color: "bg-green-500", textColor: "text-green-300" },
                  { name: "Noida", aqi: 150, coords: { top: "40%", left: "68%" }, color: "bg-yellow-500", textColor: "text-yellow-300" },
                  { name: "Dwarka", aqi: 180, coords: { top: "45%", left: "32%" }, color: "bg-yellow-600", textColor: "text-yellow-300" },
                ].map((location, index) => (
                  <div
                    key={index}
                    className="absolute transform -translate-x-1/2 -translate-y-1/2 group/marker cursor-pointer z-20"
                    style={{ top: location.coords.top, left: location.coords.left }}
                  >
                    {/* Outer Glow Ring */}
                    <div className={`absolute inset-0 w-24 h-24 ${location.color} rounded-full opacity-10 animate-pulse`}
                         style={{ animationDelay: `${index * 0.8}s`, animationDuration: '4s' }}></div>
                    
                    {/* Main Marker Circle */}
                    <div className={`relative w-20 h-20 ${location.color} rounded-full flex flex-col items-center justify-center text-white font-bold shadow-2xl border-4 border-white/20 transition-all duration-500 hover:scale-110 group-hover/marker:shadow-3xl`}
                         style={{ 
                           boxShadow: `0 0 40px ${location.color.includes('red') ? '#EF444440' : location.color.includes('orange') ? '#F59E0B40' : location.color.includes('green') ? '#10B98140' : '#EAB30840'}`,
                         }}>
                      {/* AQI Number */}
                      <div className="text-xl font-black leading-none">
                        <AnimatedCounter value={location.aqi} duration={2500 + index * 300} />
                      </div>
                      {/* Location Name */}
                      <div className="text-xs font-medium opacity-90 leading-tight text-center">{location.name}</div>
                    </div>
                    
                    {/* Hover Info Card */}
                    <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-4 opacity-0 group-hover/marker:opacity-100 transition-all duration-500 z-40 pointer-events-none">
                      <div className="bg-gray-900/95 backdrop-blur-sm text-white px-4 py-3 rounded-xl shadow-2xl border border-gray-700 whitespace-nowrap">
                        <div className="font-bold text-sm mb-1">{location.name}</div>
                        <div className={`font-bold text-lg ${location.textColor}`}>AQI {location.aqi}</div>
                        <div className="text-xs text-gray-300 mt-1">Updated 2 min ago</div>
                        <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gray-900 rotate-45 border-l border-t border-gray-700"></div>
                      </div>
                    </div>
                  </div>
                ))}

                {/* Simplified Background Elements */}
                <div className="absolute inset-0 pointer-events-none opacity-20">
                  {/* Wind direction arrows */}
                  {[...Array(6)].map((_, i) => (
                    <div
                      key={i}
                      className="absolute w-6 h-1 bg-cyan-300 rounded-full animate-pulse"
                      style={{
                        left: `${20 + i * 12}%`,
                        top: `${15 + (i % 3) * 25}%`,
                        transform: `rotate(45deg)`,
                        animationDelay: `${i * 0.5}s`,
                        animationDuration: '3s'
                      }}
                    />
                  ))}
                </div>

                {/* Legend */}
                <div className="absolute bottom-4 left-4 bg-gray-900/90 backdrop-blur-sm rounded-lg p-3 text-xs text-white z-30">
                  <div className="font-semibold mb-2">AQI Scale</div>
                  <div className="grid grid-cols-3 gap-2 text-xs">
                    <div className="flex items-center gap-1">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span>0-100</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                      <span>101-200</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                      <span>201-300</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                      <span>301-400</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <div className="w-2 h-2 bg-red-700 rounded-full"></div>
                      <span>400+</span>
                    </div>
                  </div>
                </div>

                {/* Update Time */}
                <div className="absolute bottom-4 right-4 bg-gray-900/90 backdrop-blur-sm rounded-lg px-3 py-2 text-xs text-white z-30">
                  <div className="font-medium">Last Update</div>
                  <div className="text-green-400">2 min ago</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Streamlined Controls and Info */}
          <div className="space-y-6">
            {/* Priority: Location Search */}
            <div className="bg-white p-6 rounded-2xl shadow-xl border border-gray-100">
              <h3 className="text-xl font-bold text-gray-800 mb-4 text-center">Check Your Area</h3>
              <div className="space-y-4">
                <div className="relative">
                  <MapPin className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                  <input
                    type="text"
                    placeholder="Enter location (e.g., Connaught Place)"
                    value={searchLocation}
                    onChange={(e) => setSearchLocation(e.target.value)}
                    className="w-full pl-12 pr-4 py-4 bg-gray-50 border-2 border-transparent focus:border-blue-500 focus:bg-white rounded-xl text-gray-700 placeholder-gray-400 transition-all duration-300"
                  />
                </div>
                <button
                  onClick={handleSearch}
                  disabled={isSearching}
                  className="w-full bg-gradient-to-r from-orange-500 to-green-500 hover:from-green-500 hover:to-orange-500 text-white py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:shadow-lg disabled:opacity-50 flex items-center justify-center gap-2"
                >
                  {isSearching ? (
                    <>
                      <div className="animate-spin w-5 h-5 border-2 border-white border-t-transparent rounded-full"></div>
                      <span>Searching...</span>
                    </>
                  ) : (
                    <>
                      <Search size={20} />
                      <span>Get AQI</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Priority: AQI Overview Stats */}
            <div className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-2xl shadow-xl border border-gray-100">
              <h3 className="text-xl font-bold text-center text-gray-800 mb-6">Delhi NCR Overview</h3>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-6 bg-gradient-to-br from-red-50 to-orange-50 rounded-xl border-2 border-red-100">
                  <div className="text-4xl font-black text-red-600 mb-2">
                    <AnimatedCounter value={285} />
                  </div>
                  <div className="text-sm font-semibold text-gray-700">Average AQI</div>
                  <div className="text-xs text-red-600 font-bold mt-1">VERY POOR</div>
                </div>
                <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl border-2 border-blue-100">
                  <div className="text-4xl font-black text-blue-600 mb-2">
                    <AnimatedCounter value={12} />
                  </div>
                  <div className="text-sm font-semibold text-gray-700">Monitoring Stations</div>
                  <div className="text-xs text-green-600 font-bold mt-1 flex items-center justify-center gap-1">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    ALL ACTIVE
                  </div>
                </div>
              </div>
              <div className="text-center text-xs text-gray-500 mt-4 font-medium">
                Data from CPCB & DPCC Network
              </div>
            </div>

            {/* Compact AQI Scale */}
            <div className="bg-white p-6 rounded-2xl shadow-xl border border-gray-100">
              <h3 className="text-lg font-bold text-center text-gray-800 mb-4">AQI Health Scale</h3>
              <div className="space-y-2">
                {[
                  { range: "0-50", label: "Good", color: "bg-green-500", desc: "Minimal impact" },
                  // { range: "51-100", label: "Satisfactory", color: "bg-green-400", desc: "Minor breathing discomfort" },
                  { range: "101-200", label: "Moderate", color: "bg-yellow-500", desc: "Sensitive may experience symptoms" },
                  { range: "201-300", label: "Poor", color: "bg-orange-500", desc: "Everyone may experience effects" },
                  { range: "301-400", label: "Very Poor", color: "bg-red-500", desc: "Health warnings" },
                  { range: "400+", label: "Severe", color: "bg-red-700", desc: "Emergency conditions" }
                ].map((category, index) => (
                  <div key={index} className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors duration-200">
                    <div className={`w-4 h-4 ${category.color} rounded-full flex-shrink-0`}></div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-sm text-gray-800">{category.range}</span>
                        <span className="font-medium text-sm text-gray-600">{category.label}</span>
                      </div>
                      <div className="text-xs text-gray-500">{category.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AQISnapshot;