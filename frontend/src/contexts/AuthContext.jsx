import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [notifications, setNotifications] = useState([]);

  // Mock user data for different roles
  const mockUsers = {
    'policymaker@delhi.gov.in': {
      id: 1,
      email: 'policymaker@delhi.gov.in',
      name: 'Dr. Rajesh Kumar',
      role: 'policymaker',
      department: 'Delhi Pollution Control Committee',
      region: 'Delhi NCR',
      avatar: '🏛️',
      preferences: {
        savedDashboards: ['pollution-trends', 'policy-effectiveness'],
        watchedPolicies: ['odd-even', 'firecracker-ban'],
        alertThresholds: { aqi: 300, pm25: 150 },
        regions: ['central-delhi', 'south-delhi', 'east-delhi'],
        notificationTypes: ['policy-impact', 'critical-alerts', 'weekly-reports']
      }
    },
    'researcher@iit.ac.in': {
      id: 2,
      email: 'researcher@iit.ac.in',
      name: 'Prof. Priya Sharma',
      role: 'researcher',
      institution: 'IIT Delhi - Environmental Sciences',
      region: 'Delhi NCR',
      avatar: '🔬',
      preferences: {
        savedDashboards: ['detailed-analytics', 'trend-analysis', 'comparative-study'],
        datasets: ['pm25-hourly', 'meteorological-data', 'source-analysis'],
        alertThresholds: { aqi: 200, dataAvailability: 90 },
        regions: ['delhi-ncr', 'mumbai', 'bangalore'],
        notificationTypes: ['new-datasets', 'research-alerts', 'data-quality']
      }
    },
    'activist@greenpeace.org': {
      id: 3,
      email: 'activist@greenpeace.org',
      name: 'Sunita Narain',
      role: 'ngo',
      organization: 'Centre for Science and Environment',
      region: 'Delhi NCR',
      avatar: '🌱',
      preferences: {
        savedDashboards: ['community-reports', 'awareness-campaigns', 'success-stories'],
        campaigns: ['clean-air-delhi', 'stubble-burning-awareness'],
        alertThresholds: { aqi: 250, communityReports: 10 },
        regions: ['delhi-ncr', 'punjab', 'haryana'],
        notificationTypes: ['community-alerts', 'campaign-updates', 'success-metrics']
      }
    },
    'citizen@gmail.com': {
      id: 4,
      email: 'citizen@gmail.com',
      name: 'Amit Singh',
      role: 'citizen',
      location: 'Noida, Sector 62',
      region: 'Delhi NCR',
      avatar: '👤',
      preferences: {
        savedDashboards: ['my-area-aqi', 'health-alerts'],
        locations: ['noida-sector-62', 'connaught-place'],
        alertThresholds: { aqi: 150, pm25: 75 },
        regions: ['noida', 'delhi'],
        notificationTypes: ['health-alerts', 'daily-aqi', 'pollution-tips']
      }
    }
  };

  useEffect(() => {
    // Check for existing session
    const savedUser = localStorage.getItem('delhiair_user');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
      loadNotifications(JSON.parse(savedUser));
    }
    setLoading(false);
  }, []);

  const loadNotifications = (userData) => {
    // Mock notifications based on user role
    const roleNotifications = {
      policymaker: [
        {
          id: 1,
          type: 'critical',
          title: 'Policy Impact Alert',
          message: 'Odd-Even policy showing 18% AQI reduction. Consider extending implementation.',
          timestamp: new Date(Date.now() - 2 * 60 * 1000),
          read: false,
          actionable: true
        },
        {
          id: 2,
          type: 'info',
          title: 'Weekly Report Ready',
          message: 'Delhi NCR air quality report for this week is now available.',
          timestamp: new Date(Date.now() - 30 * 60 * 1000),
          read: false,
          actionable: false
        }
      ],
      researcher: [
        {
          id: 3,
          type: 'info',
          title: 'New Dataset Available',
          message: 'PM2.5 source apportionment data for October 2024 is now accessible.',
          timestamp: new Date(Date.now() - 10 * 60 * 1000),
          read: false,
          actionable: true
        },
        {
          id: 4,
          type: 'warning',
          title: 'Data Quality Alert',
          message: 'Sensor at Anand Vihar showing 15% data gaps in last 24 hours.',
          timestamp: new Date(Date.now() - 45 * 60 * 1000),
          read: true,
          actionable: false
        }
      ],
      ngo: [
        {
          id: 5,
          type: 'warning',
          title: 'Community Reports Spike',
          message: '23 new pollution complaints filed in East Delhi this week.',
          timestamp: new Date(Date.now() - 15 * 60 * 1000),
          read: false,
          actionable: true
        },
        {
          id: 6,
          type: 'success',
          title: 'Campaign Success',
          message: 'Clean Air Delhi campaign reached 50K people this month!',
          timestamp: new Date(Date.now() - 60 * 60 * 1000),
          read: false,
          actionable: false
        }
      ],
      citizen: [
        {
          id: 7,
          type: 'critical',
          title: 'High Pollution Alert',
          message: '⚠️ AQI crossed 250 in your area. Avoid outdoor activities.',
          timestamp: new Date(Date.now() - 5 * 60 * 1000),
          read: false,
          actionable: false
        },
        {
          id: 8,
          type: 'info',
          title: 'Health Tip',
          message: 'Use N95 masks when stepping out today. Air quality is poor.',
          timestamp: new Date(Date.now() - 20 * 60 * 1000),
          read: true,
          actionable: false
        }
      ]
    };

    setNotifications(roleNotifications[userData.role] || []);
  };

  const login = async (email, password) => {
    setLoading(true);
    
    // Mock authentication - in real app, this would be an API call
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const userData = mockUsers[email];
        if (userData && password === 'password123') {
          setUser(userData);
          localStorage.setItem('delhiair_user', JSON.stringify(userData));
          loadNotifications(userData);
          setLoading(false);
          resolve(userData);
        } else {
          setLoading(false);
          reject(new Error('Invalid credentials'));
        }
      }, 1000);
    });
  };

  const signup = async (userData) => {
    setLoading(true);
    
    // Mock signup - in real app, this would be an API call
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const newUser = {
          id: Date.now(),
          ...userData,
          avatar: getRoleAvatar(userData.role),
          preferences: getDefaultPreferences(userData.role)
        };
        
        setUser(newUser);
        localStorage.setItem('delhiair_user', JSON.stringify(newUser));
        loadNotifications(newUser);
        setLoading(false);
        resolve(newUser);
      }, 1000);
    });
  };

  const logout = () => {
    setUser(null);
    setNotifications([]);
    localStorage.removeItem('delhiair_user');
  };

  const updateUserPreferences = (newPreferences) => {
    const updatedUser = {
      ...user,
      preferences: { ...user.preferences, ...newPreferences }
    };
    setUser(updatedUser);
    localStorage.setItem('delhiair_user', JSON.stringify(updatedUser));
  };

  const markNotificationAsRead = (notificationId) => {
    setNotifications(prev => 
      prev.map(notif => 
        notif.id === notificationId ? { ...notif, read: true } : notif
      )
    );
  };

  const getRoleAvatar = (role) => {
    const avatars = {
      policymaker: '🏛️',
      researcher: '🔬',
      ngo: '🌱',
      citizen: '👤'
    };
    return avatars[role] || '👤';
  };

  const getDefaultPreferences = (role) => {
    const defaults = {
      policymaker: {
        savedDashboards: ['policy-effectiveness'],
        watchedPolicies: [],
        alertThresholds: { aqi: 300, pm25: 150 },
        regions: ['delhi-ncr'],
        notificationTypes: ['policy-impact', 'critical-alerts']
      },
      researcher: {
        savedDashboards: ['detailed-analytics'],
        datasets: [],
        alertThresholds: { aqi: 200, dataAvailability: 90 },
        regions: ['delhi-ncr'],
        notificationTypes: ['new-datasets', 'research-alerts']
      },
      ngo: {
        savedDashboards: ['community-reports'],
        campaigns: [],
        alertThresholds: { aqi: 250, communityReports: 5 },
        regions: ['delhi-ncr'],
        notificationTypes: ['community-alerts', 'campaign-updates']
      },
      citizen: {
        savedDashboards: ['my-area-aqi'],
        locations: [],
        alertThresholds: { aqi: 150, pm25: 75 },
        regions: ['delhi-ncr'],
        notificationTypes: ['health-alerts', 'daily-aqi']
      }
    };
    return defaults[role] || defaults.citizen;
  };

  const value = {
    user,
    loading,
    notifications,
    login,
    signup,
    logout,
    updateUserPreferences,
    markNotificationAsRead,
    unreadNotifications: notifications.filter(n => !n.read).length
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};