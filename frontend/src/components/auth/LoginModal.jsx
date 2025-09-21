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
    <div className="fixed inset-0 bg-black/90 backdrop-blur-xl z-[100]">
      <div className="min-h-screen w-full flex items-center justify-center p-4">
        <div className="relative bg-gradient-to-br from-dark-charcoal via-dark-charcoal to-dark-gunmetal w-full max-w-md rounded-3xl shadow-2xl border border-saffron/30 overflow-hidden transform transition-all hover:scale-[1.02] duration-300">
          {/* Animated tri-color gradient border */}
          <div className="absolute inset-0 rounded-3xl p-[2px] bg-gradient-to-r from-saffron via-pure-white to-india-green animate-pulse">
            <div className="h-full w-full rounded-3xl bg-gradient-to-br from-dark-charcoal via-dark-charcoal to-dark-gunmetal" />
          </div>
          
          {/* Header with tri-color gradient */}
          <div className="absolute top-0 left-0 right-0 h-3 bg-gradient-to-r from-saffron via-pure-white to-india-green rounded-t-3xl" />
          
          {/* Indian flag inspired decoration */}
          <div className="absolute top-6 left-6 right-6 h-1 bg-gradient-to-r from-saffron/20 via-pure-white/20 to-india-green/20 rounded-full" />
          
          <div className="relative z-10 p-8 pt-12">
            <div className="flex justify-between items-center mb-8">
              <div className="text-center flex-1">
                <h2 className="text-3xl font-bold bg-gradient-to-r from-saffron via-pure-white to-india-green bg-clip-text text-transparent mb-2">Welcome Back</h2>
                <p className="text-light-gray/80 text-sm">Sign in to your DelhiAir.AI account</p>
              </div>
              <button
                onClick={onClose}
                className="absolute top-4 right-4 text-light-gray hover:text-pure-white transition-colors bg-dark-gunmetal/50 hover:bg-dark-gunmetal rounded-full p-2"
              >
                <X size={20} />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
            <div className="group">
              <label htmlFor="email" className="block text-sm font-semibold text-light-gray mb-3 group-focus-within:text-saffron transition-colors">
                Email Address
              </label>
              <input
                id="email"
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-5 py-3 bg-dark-gunmetal/50 backdrop-blur-sm rounded-xl border border-saffron/30 text-pure-white focus:outline-none focus:ring-2 focus:ring-saffron/70 focus:border-saffron transition-all duration-300 placeholder:text-light-gray/50 hover:border-saffron/50"
                placeholder="Enter your email address"
              />
            </div>

            <div className="group">
              <label htmlFor="password" className="block text-sm font-semibold text-light-gray mb-3 group-focus-within:text-india-green transition-colors">
                Password
              </label>
              <input
                id="password"
                type="password"
                required
                value={formData.password}
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                className="w-full px-5 py-3 bg-dark-gunmetal/50 backdrop-blur-sm rounded-xl border border-india-green/30 text-pure-white focus:outline-none focus:ring-2 focus:ring-india-green/70 focus:border-india-green transition-all duration-300 placeholder:text-light-gray/50 hover:border-india-green/50"
                placeholder="Enter your password"
              />
            </div>

            <div className="group">
              <label htmlFor="role" className="block text-sm font-semibold text-light-gray mb-3 group-focus-within:text-pure-white transition-colors">
                Login As
              </label>
              <select
                id="role"
                value={formData.role}
                onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                className="w-full px-5 py-3 bg-dark-gunmetal/50 backdrop-blur-sm rounded-xl border border-pure-white/30 text-pure-white focus:outline-none focus:ring-2 focus:ring-pure-white/70 focus:border-pure-white transition-all duration-300 hover:border-pure-white/50"
              >
                <option value="citizen" className="bg-dark-gunmetal">🏛️ Citizen</option>
                <option value="policymaker" className="bg-dark-gunmetal">📋 Policy Maker</option>
                <option value="researcher" className="bg-dark-gunmetal">🔬 Researcher</option>
                <option value="ngo" className="bg-dark-gunmetal">🤝 NGO</option>
              </select>
            </div>

            <div className="flex items-center justify-between text-sm py-2">
              <label className="flex items-center text-light-gray hover:text-pure-white transition-colors cursor-pointer">
                <input type="checkbox" className="mr-3 w-4 h-4 rounded border border-saffron/50 bg-dark-gunmetal/50 text-saffron focus:ring-saffron/30" />
                Remember me
              </label>
              <button type="button" className="text-aqua-teal hover:text-saffron transition-colors duration-300 font-medium">
                Forgot password?
              </button>
            </div>

            {error && (
              <div className="bg-danger-red/20 border border-danger-red/30 text-danger-red px-4 py-3 rounded-xl text-sm">
                {error}
              </div>
            )}

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-saffron via-pure-white to-india-green p-[2px] rounded-2xl font-bold text-lg transition-all duration-300 transform hover:scale-[1.02] hover:shadow-2xl hover:shadow-saffron/20 group"
            >
              <span className="flex items-center justify-center bg-gradient-to-r from-dark-charcoal via-dark-gunmetal to-dark-charcoal text-pure-white py-4 px-8 rounded-2xl group-hover:from-dark-gunmetal group-hover:via-dark-charcoal group-hover:to-dark-gunmetal transition-all duration-300">
                <span className="bg-gradient-to-r from-saffron via-pure-white to-india-green bg-clip-text text-transparent font-bold text-lg">
                  Sign In to DelhiAir.AI
                </span>
              </span>
            </button>
            
            {/* Decorative tri-color line */}
            <div className="flex items-center justify-center pt-4">
              <div className="h-0.5 w-16 bg-gradient-to-r from-saffron via-pure-white to-india-green rounded-full opacity-60" />
            </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginModal;