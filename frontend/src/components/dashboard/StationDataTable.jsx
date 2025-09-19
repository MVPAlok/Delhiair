import React, { useState } from "react";
import { ChevronUp, ChevronDown, MapPin, Activity, AlertTriangle } from "lucide-react";

const StationDataTable = ({ timeRange }) => {
  const [sortField, setSortField] = useState("aqi");
  const [sortDirection, setSortDirection] = useState("desc");
  const [showAll, setShowAll] = useState(false);

  const stationData = [
    {
      id: 1,
      name: "Anand Vihar",
      location: "East Delhi",
      aqi: 450,
      pm25: 285,
      pm10: 420,
      no2: 68,
      o3: 45,
      status: "Severe",
      lastUpdate: "2 min ago",
      trend: "up",
      agency: "CPCB"
    },
    {
      id: 2,
      name: "RK Puram",
      location: "South Delhi",
      aqi: 320,
      pm25: 195,
      pm10: 310,
      no2: 55,
      o3: 52,
      status: "Very Poor",
      lastUpdate: "3 min ago",
      trend: "stable",
      agency: "DPCC"
    },
    {
      id: 3,
      name: "Lodhi Road",
      location: "Central Delhi",
      aqi: 85,
      pm25: 45,
      pm10: 78,
      no2: 32,
      o3: 89,
      status: "Satisfactory",
      lastUpdate: "1 min ago",
      trend: "down",
      agency: "CPCB"
    },
    {
      id: 4,
      name: "Sector 62, Noida",
      location: "Noida",
      aqi: 150,
      pm25: 89,
      pm10: 140,
      no2: 45,
      o3: 67,
      status: "Moderate",
      lastUpdate: "4 min ago",
      trend: "up",
      agency: "UPPCB"
    },
    {
      id: 5,
      name: "Aya Nagar",
      location: "South Delhi",
      aqi: 280,
      pm25: 165,
      pm10: 270,
      no2: 48,
      o3: 58,
      status: "Poor",
      lastUpdate: "2 min ago",
      trend: "stable",
      agency: "CPCB"
    },
    {
      id: 6,
      name: "Dwarka Sector 8",
      location: "West Delhi",
      aqi: 180,
      pm25: 98,
      pm10: 165,
      no2: 42,
      o3: 73,
      status: "Moderate",
      lastUpdate: "5 min ago",
      trend: "down",
      agency: "DPCC"
    },
    {
      id: 7,
      name: "IHBAS, Dilshad Garden",
      location: "East Delhi",
      aqi: 380,
      pm25: 245,
      pm10: 360,
      no2: 62,
      o3: 41,
      status: "Very Poor",
      lastUpdate: "3 min ago",
      trend: "up",
      agency: "CPCB"
    },
    {
      id: 8,
      name: "Okhla Phase 2",
      location: "South Delhi",
      aqi: 250,
      pm25: 145,
      pm10: 235,
      no2: 56,
      o3: 49,
      status: "Poor",
      lastUpdate: "1 min ago",
      trend: "stable",
      agency: "DPCC"
    }
  ];

  const displayData = showAll ? stationData : stationData.slice(0, 5);

  const handleSort = (field) => {
    if (sortField === field) {
      setSortDirection(sortDirection === "asc" ? "desc" : "asc");
    } else {
      setSortField(field);
      setSortDirection("desc");
    }
  };

  const sortedData = [...displayData].sort((a, b) => {
    let aVal = a[sortField];
    let bVal = b[sortField];
    
    if (typeof aVal === "string") {
      aVal = aVal.toLowerCase();
      bVal = bVal.toLowerCase();
    }
    
    if (sortDirection === "asc") {
      return aVal > bVal ? 1 : -1;
    } else {
      return aVal < bVal ? 1 : -1;
    }
  });

  const getAQIColor = (aqi) => {
    if (aqi > 400) return "text-red-700 bg-red-50";
    if (aqi > 300) return "text-danger-red bg-danger-red/10";
    if (aqi > 200) return "text-warning-orange bg-warning-orange/10";
    if (aqi > 100) return "text-yellow-600 bg-yellow-50";
    return "text-fresh-green bg-fresh-green/10";
  };

  const getStatusColor = (status) => {
    switch(status) {
      case "Severe": return "text-red-700 bg-red-100";
      case "Very Poor": return "text-danger-red bg-danger-red/20";
      case "Poor": return "text-warning-orange bg-warning-orange/20";
      case "Moderate": return "text-yellow-600 bg-yellow-100";
      case "Satisfactory": return "text-fresh-green bg-fresh-green/20";
      default: return "text-dark-charcoal bg-light-gray";
    }
  };

  const getTrendIcon = (trend) => {
    switch(trend) {
      case "up": return <ChevronUp size={14} className="text-danger-red" />;
      case "down": return <ChevronDown size={14} className="text-fresh-green" />;
      default: return <div className="w-3 h-0.5 bg-yellow-400"></div>;
    }
  };

  const SortButton = ({ field, children }) => (
    <button
      onClick={() => handleSort(field)}
      className="flex items-center gap-1 hover:text-tech-blue transition-colors"
    >
      {children}
      {sortField === field && (
        sortDirection === "asc" ? 
        <ChevronUp size={12} className="text-tech-blue" /> : 
        <ChevronDown size={12} className="text-tech-blue" />
      )}
    </button>
  );

  return (
    <div className="space-y-4">
      {/* Table Header Summary */}
      <div className="flex items-center justify-between text-sm">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <Activity size={16} className="text-aqua-teal" />
            <span className="text-dark-charcoal/70">
              Showing {displayData.length} of {stationData.length} stations
            </span>
          </div>
        </div>
        <div className="flex items-center gap-2 text-xs">
          <div className="w-2 h-2 bg-aqua-teal rounded-full animate-pulse"></div>
          <span className="text-dark-charcoal/60">Real-time data</span>
        </div>
      </div>

      {/* Responsive Table */}
      <div className="overflow-x-auto bg-pure-white rounded-lg border border-light-gray/30">
        <table className="w-full text-sm">
          <thead className="bg-light-gray/30 border-b border-light-gray/50">
            <tr>
              <th className="text-left p-3 font-semibold text-dark-charcoal">
                <SortButton field="name">Station</SortButton>
              </th>
              <th className="text-center p-3 font-semibold text-dark-charcoal">
                <SortButton field="aqi">AQI</SortButton>
              </th>
              <th className="text-center p-3 font-semibold text-dark-charcoal">
                <SortButton field="pm25">PM2.5</SortButton>
              </th>
              <th className="text-center p-3 font-semibold text-dark-charcoal">
                <SortButton field="pm10">PM10</SortButton>
              </th>
              <th className="text-center p-3 font-semibold text-dark-charcoal">
                <SortButton field="no2">NO₂</SortButton>
              </th>
              <th className="text-center p-3 font-semibold text-dark-charcoal">
                <SortButton field="o3">O₃</SortButton>
              </th>
              <th className="text-center p-3 font-semibold text-dark-charcoal">Status</th>
              <th className="text-center p-3 font-semibold text-dark-charcoal">Trend</th>
            </tr>
          </thead>
          <tbody>
            {sortedData.map((station, index) => (
              <tr 
                key={station.id} 
                className={`border-b border-light-gray/30 hover:bg-light-gray/20 transition-colors ${
                  station.aqi > 400 ? 'bg-red-50/50' : 
                  station.aqi > 300 ? 'bg-danger-red/5' : ''
                }`}
              >
                <td className="p-3">
                  <div className="flex items-start gap-2">
                    <MapPin size={14} className="text-dark-charcoal/50 mt-0.5" />
                    <div>
                      <div className="font-medium text-dark-charcoal">{station.name}</div>
                      <div className="text-xs text-dark-charcoal/60">{station.location}</div>
                      <div className="text-xs text-dark-charcoal/50">{station.agency} • {station.lastUpdate}</div>
                    </div>
                  </div>
                </td>
                <td className="text-center p-3">
                  <div className={`inline-flex items-center px-2 py-1 rounded font-bold ${getAQIColor(station.aqi)}`}>
                    {station.aqi}
                    {station.aqi > 400 && <AlertTriangle size={12} className="ml-1" />}
                  </div>
                </td>
                <td className="text-center p-3 font-medium text-dark-charcoal">{station.pm25}</td>
                <td className="text-center p-3 font-medium text-dark-charcoal">{station.pm10}</td>
                <td className="text-center p-3 font-medium text-dark-charcoal">{station.no2}</td>
                <td className="text-center p-3 font-medium text-dark-charcoal">{station.o3}</td>
                <td className="text-center p-3">
                  <span className={`px-2 py-1 rounded text-xs font-medium ${getStatusColor(station.status)}`}>
                    {station.status}
                  </span>
                </td>
                <td className="text-center p-3">
                  <div className="flex justify-center">
                    {getTrendIcon(station.trend)}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Show More/Less Button */}
      <div className="text-center">
        <button
          onClick={() => setShowAll(!showAll)}
          className="px-4 py-2 bg-tech-blue text-white rounded-lg hover:bg-tech-blue/80 transition-colors duration-300 text-sm"
        >
          {showAll ? "Show Less" : `Show All ${stationData.length} Stations`}
        </button>
      </div>

      {/* Data Quality Indicator */}
      <div className="flex items-center justify-between text-xs text-dark-charcoal/60 bg-light-gray/20 rounded p-2">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 bg-fresh-green rounded-full"></div>
          <span>Data Quality: Excellent (98.5% uptime)</span>
        </div>
        <div>Last system update: {timeRange}</div>
      </div>
    </div>
  );
};

export default StationDataTable;