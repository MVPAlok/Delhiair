import { useState, useEffect } from 'react';

const useSavedDashboards = () => {
  // Initialize state with dashboards from localStorage if available
  const [savedDashboards, setSavedDashboards] = useState(() => {
    const saved = localStorage.getItem('savedDashboards');
    return saved ? JSON.parse(saved) : [];
  });

  // Update localStorage whenever savedDashboards changes
  useEffect(() => {
    localStorage.setItem('savedDashboards', JSON.stringify(savedDashboards));
  }, [savedDashboards]);

  const saveDashboard = (dashboard) => {
    setSavedDashboards((prev) => {
      // Check if dashboard already exists
      const exists = prev.some((d) => d.id === dashboard.id);
      if (exists) return prev;

      // Add new dashboard with timestamp
      return [...prev, {
        ...dashboard,
        savedAt: new Date().toLocaleDateString(),
      }];
    });
  };

  const removeDashboard = (dashboardId) => {
    setSavedDashboards((prev) => 
      prev.filter((dashboard) => dashboard.id !== dashboardId)
    );
  };

  return {
    savedDashboards,
    saveDashboard,
    removeDashboard,
  };
};

export default useSavedDashboards;