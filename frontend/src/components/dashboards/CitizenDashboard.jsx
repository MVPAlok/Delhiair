import React from 'react';
import { Wind, Thermometer, MapPin, Bell } from 'lucide-react';

const CitizenDashboard = () => {
  return (
    <div className="p-6 bg-white min-h-screen text-gray-600 pt-20">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-4 md:space-y-0">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Your City AQI Dashboard</h1>
            <p className="text-gray-600">Stay informed about your local air quality</p>
          </div>
          <div className="flex items-center space-x-2 bg-gray-100 px-4 py-2 rounded-lg shadow-sm">
            <MapPin size={18} />
            <span>Delhi, India</span>
          </div>
        </div>

        {/* Current AQI Panel */}
        <div className="bg-white rounded-xl p-6 shadow-md">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="col-span-1 md:col-span-2">
              <h2 className="text-xl font-semibold mb-4 text-gray-900">Current Air Quality</h2>
              <div className="flex items-center space-x-6">
                <div className="w-32 h-32 rounded-full bg-gradient-to-br from-green-500 to-yellow-500 flex items-center justify-center">
                  <div className="w-28 h-28 rounded-full bg-white flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-4xl font-bold text-gray-900">156</div>
                      <div className="text-sm text-gray-600">AQI</div>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="text-xl font-semibold text-yellow-600 mb-2">Moderate</div>
                  <p className="text-sm text-gray-600 max-w-xs">
                    Air quality is acceptable; however, some pollutants may be a concern for sensitive individuals.
                  </p>
                </div>
              </div>
            </div>

            <StatsCard
              icon={<Wind className="text-saffron" />}
              title="PM2.5"
              value="85 µg/m³"
              description="Above threshold"
            />
            <StatsCard
              icon={<Thermometer className="text-india-green" />}
              title="Temperature"
              value="28°C"
              description="Feels like 30°C"
            />
          </div>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-white rounded-xl p-6 shadow-md">
              <h2 className="text-xl font-semibold mb-4 text-gray-900">24-Hour Trend</h2>
              <div className="h-64 flex items-center justify-center border border-gray-200 rounded-lg">
                [Placeholder for AQI Trend Chart]
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-md">
              <h2 className="text-xl font-semibold mb-4 text-gray-900">Nearby Stations</h2>
              <div className="space-y-4">
                {[
                  {
                    name: "ITO Station",
                    aqi: 145,
                    distance: "1.2 km",
                    status: "Active"
                  },
                  {
                    name: "Lodhi Road",
                    aqi: 132,
                    distance: "2.5 km",
                    status: "Active"
                  },
                  {
                    name: "Anand Vihar",
                    aqi: 168,
                    distance: "4.8 km",
                    status: "Active"
                  }
                ].map((station, i) => (
                  <div key={i} className="flex items-center justify-between p-4 rounded-lg hover:bg-gray-50 transition-colors">
                    <div>
                      <h3 className="font-medium text-gray-900">{station.name}</h3>
                      <div className="text-sm text-gray-600">{station.distance} away</div>
                    </div>
                    <div className="text-right">
                      <div className="text-xl font-semibold text-gray-900">{station.aqi}</div>
                      <div className="text-sm text-gray-600">AQI</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-white rounded-xl p-6 shadow-md">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-semibold text-gray-900">Recent Alerts</h2>
                <Bell size={20} className="text-gray-600" />
              </div>
              <div className="space-y-4">
                {[
                  {
                    message: "AQI crossed 150 in your area",
                    time: "2 hours ago",
                    type: "warning"
                  },
                  {
                    message: "Air quality improving trend",
                    time: "5 hours ago",
                    type: "info"
                  },
                  {
                    message: "New station added nearby",
                    time: "1 day ago",
                    type: "info"
                  }
                ].map((alert, i) => (
                  <div key={i} className="flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors">
                    <div className={`w-2 h-2 mt-2 rounded-full ${alert.type === 'warning' ? 'bg-yellow-500' : 'bg-teal-500'
                      }`}></div>
                    <div>
                      <p className="text-gray-900">{alert.message}</p>
                      <p className="text-sm text-gray-600">{alert.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-md">
              <h2 className="text-xl font-semibold mb-4 text-gray-900">Health Recommendations</h2>
              <div className="space-y-4">
                <div className="p-3 rounded-lg hover:bg-gray-50 transition-colors">
                  <p className="text-gray-900 font-medium">Outdoor Activities</p>
                  <p className="text-sm text-gray-600 mt-1">
                    Consider reducing prolonged outdoor activities if sensitive to air pollution.
                  </p>
                </div>
                <div className="p-3 rounded-lg hover:bg-gray-50 transition-colors">
                  <p className="text-gray-900 font-medium">Ventilation</p>
                  <p className="text-sm text-gray-600 mt-1">
                    Keep windows closed during peak pollution hours.
                  </p>
                </div>
                <div className="p-3 rounded-lg hover:bg-gray-50 transition-colors">
                  <p className="text-gray-900 font-medium">Mask Usage</p>
                  <p className="text-sm text-gray-600 mt-1">
                    Wear N95 masks when going outdoors.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const StatsCard = ({ icon, title, value, description }) => (
  <div className="bg-white/50 rounded-xl p-6 hover:ring-1 hover:ring-gray-200 transition-all shadow-sm">
    <div className="flex items-center space-x-3 mb-3">
      {icon}
      <h3 className="font-medium text-gray-900">{title}</h3>
    </div>
    <div className="space-y-1">
      <div className="text-2xl font-bold text-gray-900">{value}</div>
      <div className="text-sm text-gray-600">{description}</div>
    </div>
  </div>
);

export default CitizenDashboard;