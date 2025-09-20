import React, { useState } from 'react';
import { X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';

const LoginModal = ({ isOpen, onClose }) => {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    role: 'citizen'
  });
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    try {
      // Pass the selected role along with email and password
      const user = await login(formData.email, formData.password, formData.role);
      onClose();
      
      // Role-based navigation to the corresponding dashboard
      switch (formData.role) {
        case 'policymaker':
          navigate('/dashboards/policy');
          break;
        case 'researcher':
          navigate('/dashboards/research');
          break;
        case 'ngo':
          navigate('/dashboards/ngo');
          break;
        case 'citizen':
          navigate('/dashboards/citizen');
          break;
        default:
          navigate('/dashboards/citizen');
      }
    } catch (err) {
      setError('An error occurred during login.');
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-md z-[100]">
      <div className="min-h-screen w-full flex items-center justify-center p-4">
        <div className="relative bg-dark-charcoal w-full max-w-md rounded-2xl shadow-2xl border border-saffron/20 overflow-hidden transform transition-all">
          {/* Header with tri-color gradient */}
          <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-saffron via-pure-white to-india-green" />
          
          <div className="p-6 pt-8">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-pure-white">Welcome Back</h2>
              <button
                onClick={onClose}
                className="text-light-gray hover:text-pure-white transition-colors"
              >
                <X size={24} />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-light-gray mb-2">
                Email Address
              </label>
              <input
                id="email"
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-2 bg-dark-gunmetal rounded-lg border border-saffron/20 text-pure-white focus:outline-none focus:ring-2 focus:ring-saffron/50 transition-all"
                placeholder="Enter your email"
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-light-gray mb-2">
                Password
              </label>
              <input
                id="password"
                type="password"
                required
                value={formData.password}
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                className="w-full px-4 py-2 bg-dark-gunmetal rounded-lg border border-saffron/20 text-pure-white focus:outline-none focus:ring-2 focus:ring-saffron/50 transition-all"
                placeholder="Enter your password"
              />
            </div>

            <div>
              <label htmlFor="role" className="block text-sm font-medium text-light-gray mb-2">
                Login As
              </label>
              <select
                id="role"
                value={formData.role}
                onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                className="w-full px-4 py-2 bg-dark-gunmetal rounded-lg border border-saffron/20 text-pure-white focus:outline-none focus:ring-2 focus:ring-saffron/50 transition-all"
              >
                <option value="citizen">Citizen</option>
                <option value="policymaker">Policy Maker</option>
                <option value="researcher">Researcher</option>
                <option value="ngo">NGO</option>
              </select>
            </div>

            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center text-light-gray">
                <input type="checkbox" className="mr-2" />
                Remember me
              </label>
              <button type="button" className="text-aqua-teal hover:text-pure-white transition-colors">
                Forgot password?
              </button>
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-saffron via-pure-white to-india-green p-0.5 rounded-full font-bold text-lg hover:shadow-glow-tricolor transition-all duration-300"
            >
              <span className="block bg-dark-charcoal text-pure-white py-2 px-6 rounded-full hover:bg-dark-gunmetal transition-colors">
                Sign In
              </span>
            </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginModal;