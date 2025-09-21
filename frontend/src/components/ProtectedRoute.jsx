import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

const ProtectedRoute = ({ children, requiredRole = null, redirectTo = '/' }) => {
  const { user, loading } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!loading) {
      // If no user is authenticated, redirect
      if (!user) {
        navigate(redirectTo);
        return;
      }

      // If a specific role is required and user doesn't have it, redirect
      if (requiredRole && user.role !== requiredRole) {
        navigate(redirectTo);
        return;
      }
    }
  }, [user, loading, navigate, requiredRole, redirectTo]);

  // Show loading while checking authentication
  if (loading) {
    return (
      <div className="min-h-screen bg-light-gray flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-saffron border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-dark-charcoal font-medium">Loading...</p>
        </div>
      </div>
    );
  }

  // Don't render if user is not authenticated or doesn't have required role
  if (!user || (requiredRole && user.role !== requiredRole)) {
    return null;
  }

  return children;
};

export default ProtectedRoute;