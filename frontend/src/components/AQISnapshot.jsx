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
          {/* Interactive Map Section */}
          <div className="relative rounded-xl shadow-2xl overflow-hidden group">
            <div 
              className="relative h-96 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
              style={{
                backgroundImage: `url('https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzR8MHwxfHNlYXJjaHwxfHxkYXRhJTIwdmlzdWFsaXphdGlvbnxlbnwwfHx8fDE3NTgzMTU4NTF8MA&ixlib=rb-4.1.0&q=85')`
              }}
            >
              <div className="absolute inset-0 bg-dark-charcoal/20"></div>
              
              {/* AQI Location Markers */}
              {mockAQIData.locations.map((location, index) => (
                <div
                  key={location.id}
                  className="absolute transform -translate-x-1/2 -translate-y-1/2 group/marker"
                  style={{ 
                    top: location.coordinates.top, 
                    left: location.coordinates.left 
                  }}
                >
                  <div className={`w-12 h-12 ${location.color} rounded-full flex items-center justify-center text-white font-bold text-sm border-4 border-white/70 shadow-xl cursor-pointer transition-all duration-300 hover:scale-110 animate-pulse`}
                       style={{ animationDelay: `${index * 0.2}s` }}>
                    <AnimatedCounter value={location.aqi} duration={1500} />
                  </div>
                  <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 opacity-0 group-hover/marker:opacity-100 transition-opacity duration-300">
                    <div className="bg-white/95 text-dark-charcoal text-xs font-bold px-3 py-2 rounded-md shadow-lg whitespace-nowrap">
                      <div className="font-semibold">{location.name}</div>
                      <div className="text-gray-600">{location.status}</div>
                    </div>
                  </div>
                </div>
              ))}

              {/* Map Glow Effect */}
              <div className="absolute inset-0 shadow-inner opacity-50 bg-gradient-to-r from-saffron/10 via-transparent to-india-green/10"></div>
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