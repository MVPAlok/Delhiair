import React, { useState } from 'react';
import { Bell, Settings, X } from 'lucide-react';

const NotificationBell = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [notificationCount, setNotificationCount] = useState(3);
  const [notifications] = useState([
    {
      id: 1,
      type: 'warning',
      message: 'AQI crossed 250 in your area',
      time: '2 minutes ago'
    },
    {
      id: 2,
      type: 'info',
      message: 'New air quality report available',
      time: '1 hour ago'
    },
    {
      id: 3,
      type: 'success',
      message: 'Air quality improving in your region',
      time: '3 hours ago'
    }
  ]);

  const [settings, setSettings] = useState({
    aqi_alerts: true,
    daily_summary: true,
    policy_updates: false,
    research_findings: true
  });

  const toggleSetting = (key) => {
    setSettings(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  return (
    <div className="relative">
      {/* Bell Icon */}
      <button
        onClick={() => {
          setIsDropdownOpen(!isDropdownOpen);
          setIsSettingsOpen(false);
        }}
        className="relative p-2 text-light-gray hover:text-pure-white transition-colors"
      >
        <Bell size={24} />
        {notificationCount > 0 && (
          <div className="absolute top-1 right-1 w-4 h-4 bg-saffron text-dark-charcoal text-xs rounded-full flex items-center justify-center">
            {notificationCount}
          </div>
        )}
      </button>

      {/* Notifications Dropdown */}
      {isDropdownOpen && (
        <div className="absolute right-0 mt-2 w-80 bg-dark-gunmetal rounded-xl shadow-xl border border-saffron/20 z-50">
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b border-saffron/20">
            <h3 className="font-semibold text-pure-white">Notifications</h3>
            <div className="flex items-center space-x-2">
              <button
                onClick={() => {
                  setIsSettingsOpen(!isSettingsOpen);
                  setIsDropdownOpen(false);
                }}
                className="p-1 text-light-gray hover:text-pure-white transition-colors"
              >
                <Settings size={18} />
              </button>
              <button
                onClick={() => setIsDropdownOpen(false)}
                className="p-1 text-light-gray hover:text-pure-white transition-colors"
              >
                <X size={18} />
              </button>
            </div>
          </div>

          {/* Notification List */}
          <div className="max-h-96 overflow-y-auto">
            {notifications.map((notification) => (
              <div
                key={notification.id}
                className="p-4 border-b border-saffron/20 hover:bg-dark-charcoal/50 transition-colors"
              >
                <div className="flex items-start space-x-3">
                  <div className={`w-2 h-2 mt-2 rounded-full ${
                    notification.type === 'warning' ? 'bg-saffron' :
                    notification.type === 'info' ? 'bg-aqua-teal' :
                    'bg-india-green'
                  }`} />
                  <div className="flex-1">
                    <p className="text-pure-white">{notification.message}</p>
                    <p className="text-sm text-light-gray mt-1">{notification.time}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Footer */}
          <div className="p-4 text-center border-t border-saffron/20">
            <button className="text-sm text-aqua-teal hover:text-pure-white transition-colors">
              Mark all as read
            </button>
          </div>
        </div>
      )}

      {/* Settings Modal */}
      {isSettingsOpen && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center">
          <div className="bg-dark-charcoal w-full max-w-md mx-4 rounded-2xl shadow-2xl border border-saffron/20 overflow-hidden">
            {/* Header with tri-color gradient */}
            <div className="relative h-2 bg-gradient-to-r from-saffron via-pure-white to-india-green" />
            
            <div className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-pure-white">Alert Settings</h2>
                <button
                  onClick={() => setIsSettingsOpen(false)}
                  className="text-light-gray hover:text-pure-white transition-colors"
                >
                  <X size={24} />
                </button>
              </div>

              <div className="space-y-6">
                {Object.entries(settings).map(([key, value]) => (
                  <div key={key} className="flex items-center justify-between">
                    <div>
                      <h3 className="font-medium text-pure-white capitalize">
                        {key.split('_').join(' ')}
                      </h3>
                      <p className="text-sm text-light-gray">
                        Receive notifications about {key.split('_').join(' ').toLowerCase()}
                      </p>
                    </div>
                    <button
                      onClick={() => toggleSetting(key)}
                      className={`relative w-12 h-6 rounded-full transition-colors ${
                        value ? 'bg-india-green' : 'bg-dark-gunmetal'
                      }`}
                    >
                      <div className={`absolute top-1 left-1 w-4 h-4 rounded-full bg-pure-white transition-transform ${
                        value ? 'translate-x-6' : 'translate-x-0'
                      }`} />
                    </button>
                  </div>
                ))}

                <div className="pt-6 border-t border-saffron/20">
                  <button
                    onClick={() => setIsSettingsOpen(false)}
                    className="w-full bg-gradient-to-r from-saffron via-pure-white to-india-green p-0.5 rounded-full font-bold text-lg hover:shadow-glow-tricolor transition-all duration-300"
                  >
                    <span className="block bg-dark-charcoal text-pure-white py-2 px-6 rounded-full hover:bg-dark-gunmetal transition-colors">
                      Save Settings
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default NotificationBell;