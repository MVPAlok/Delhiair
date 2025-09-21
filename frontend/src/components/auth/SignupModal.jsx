import React, { useState } from 'react';
import { X } from 'lucide-react';

const SignupModal = ({ isOpen, onClose, onSignup, onSwitchToLogin }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    role: 'citizen'
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert('Passwords do not match!');
      return;
    }
    // Mock signup - in a real app, this would call an API
    onSignup(formData);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100]">
      {/* Enhanced Background Blur Layer */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-dark-charcoal/80 to-black/60 backdrop-blur-3xl backdrop-saturate-150 animate-backdrop-fade-in" />
      
      {/* Animated Particle Effect */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 right-1/4 w-2 h-2 bg-india-green/40 rounded-full animate-particle-float" />
        <div className="absolute top-1/3 left-1/3 w-1 h-1 bg-saffron/40 rounded-full animate-particle-float animation-delay-300" />
        <div className="absolute bottom-1/4 right-1/3 w-1.5 h-1.5 bg-pure-white/40 rounded-full animate-particle-float animation-delay-600" />
        <div className="absolute top-2/3 left-1/4 w-1 h-1 bg-india-green/40 rounded-full animate-particle-float animation-delay-900" />
        <div className="absolute top-1/2 right-1/2 w-1 h-1 bg-saffron/30 rounded-full animate-particle-float animation-delay-1200" />
      </div>
      <div className="relative min-h-screen w-full flex items-center justify-center p-4">
        <div className="relative bg-gradient-to-br from-dark-charcoal via-dark-charcoal to-dark-gunmetal w-full max-w-md rounded-3xl shadow-2xl border border-india-green/30 overflow-hidden animate-modal-slide-in hover:scale-[1.02] transition-transform duration-300 hover:shadow-3xl hover:shadow-india-green/20">
          {/* Animated tri-color gradient border */}
          <div className="absolute inset-0 rounded-3xl p-[2px] bg-gradient-to-r from-india-green via-pure-white to-saffron animate-pulse">
            <div className="h-full w-full rounded-3xl bg-gradient-to-br from-dark-charcoal via-dark-charcoal to-dark-gunmetal" />
          </div>
          
          {/* Header with tri-color gradient */}
          <div className="absolute top-0 left-0 right-0 h-3 bg-gradient-to-r from-india-green via-pure-white to-saffron rounded-t-3xl" />
          
          {/* Indian flag inspired decoration */}
          <div className="absolute top-6 left-6 right-6 h-1 bg-gradient-to-r from-india-green/20 via-pure-white/20 to-saffron/20 rounded-full" />
          
          <div className="relative z-10 p-8 pt-12">
            <div className="flex justify-between items-center mb-8">
              <div className="text-center flex-1">
                <h2 className="text-3xl font-bold bg-gradient-to-r from-india-green via-pure-white to-saffron bg-clip-text text-transparent mb-2">Create Account</h2>
                <p className="text-light-gray/80 text-sm">Join the DelhiAir.AI community</p>
              </div>
              <button
                onClick={onClose}
                className="absolute top-4 right-4 text-light-gray hover:text-pure-white transition-colors bg-dark-gunmetal/50 hover:bg-dark-gunmetal rounded-full p-2"
              >
                <X size={20} />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
            <div className="group">
              <label htmlFor="name" className="block text-sm font-semibold text-light-gray mb-3 group-focus-within:text-saffron transition-colors">
                Full Name
              </label>
              <input
                id="name"
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-5 py-3 bg-dark-gunmetal/50 backdrop-blur-sm rounded-xl border border-saffron/30 text-pure-white focus:outline-none focus:ring-2 focus:ring-saffron/70 focus:border-saffron transition-all duration-300 placeholder:text-light-gray/50 hover:border-saffron/50"
                placeholder="Enter your full name"
              />
            </div>

            <div className="group">
              <label htmlFor="email" className="block text-sm font-semibold text-light-gray mb-3 group-focus-within:text-pure-white transition-colors">
                Email Address
              </label>
              <input
                id="email"
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-5 py-3 bg-dark-gunmetal/50 backdrop-blur-sm rounded-xl border border-pure-white/30 text-pure-white focus:outline-none focus:ring-2 focus:ring-pure-white/70 focus:border-pure-white transition-all duration-300 placeholder:text-light-gray/50 hover:border-pure-white/50"
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
                placeholder="Create a strong password"
              />
            </div>

            <div className="group">
              <label htmlFor="confirmPassword" className="block text-sm font-semibold text-light-gray mb-3 group-focus-within:text-india-green transition-colors">
                Confirm Password
              </label>
              <input
                id="confirmPassword"
                type="password"
                required
                value={formData.confirmPassword}
                onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                className="w-full px-5 py-3 bg-dark-gunmetal/50 backdrop-blur-sm rounded-xl border border-india-green/30 text-pure-white focus:outline-none focus:ring-2 focus:ring-india-green/70 focus:border-india-green transition-all duration-300 placeholder:text-light-gray/50 hover:border-india-green/50"
                placeholder="Confirm your password"
              />
            </div>

            <div className="group">
              <label htmlFor="role" className="block text-sm font-semibold text-light-gray mb-3 group-focus-within:text-saffron transition-colors">
                Register As
              </label>
              <select
                id="role"
                value={formData.role}
                onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                className="w-full px-5 py-3 bg-dark-gunmetal/50 backdrop-blur-sm rounded-xl border border-saffron/30 text-pure-white focus:outline-none focus:ring-2 focus:ring-saffron/70 focus:border-saffron transition-all duration-300 hover:border-saffron/50"
              >
                <option value="citizen" className="bg-dark-gunmetal">🏛️ Citizen</option>
                <option value="policymaker" className="bg-dark-gunmetal">📋 Policy Maker</option>
                <option value="researcher" className="bg-dark-gunmetal">🔬 Researcher</option>
                <option value="ngo" className="bg-dark-gunmetal">🤝 NGO</option>
              </select>
            </div>

            <div className="bg-dark-gunmetal/30 rounded-xl p-4 border border-pure-white/20">
              <label className="flex items-start text-sm text-light-gray hover:text-pure-white transition-colors cursor-pointer">
                <input 
                  type="checkbox" 
                  required 
                  className="mr-3 w-4 h-4 mt-0.5 rounded border border-india-green/50 bg-dark-gunmetal/50 text-india-green focus:ring-india-green/30" 
                />
                <span>I agree to the <span className="text-saffron hover:text-pure-white transition-colors">Terms of Service</span> and <span className="text-india-green hover:text-pure-white transition-colors">Privacy Policy</span></span>
              </label>
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-india-green via-pure-white to-saffron p-[2px] rounded-2xl font-bold text-lg transition-all duration-300 transform hover:scale-[1.02] hover:shadow-2xl hover:shadow-india-green/20 group"
            >
              <span className="flex items-center justify-center bg-gradient-to-r from-dark-charcoal via-dark-gunmetal to-dark-charcoal text-pure-white py-4 px-8 rounded-2xl group-hover:from-dark-gunmetal group-hover:via-dark-charcoal group-hover:to-dark-gunmetal transition-all duration-300">
                <span className="bg-gradient-to-r from-india-green via-pure-white to-saffron bg-clip-text text-transparent font-bold text-lg">
                  Create Your Account
                </span>
              </span>
            </button>
            
            {/* Decorative tri-color line */}
            <div className="flex items-center justify-center pt-4">
              <div className="h-0.5 w-16 bg-gradient-to-r from-india-green via-pure-white to-saffron rounded-full opacity-60" />
            </div>
            
            {/* Login option */}
            <div className="text-center pt-4">
              <p className="text-light-gray/70 text-sm">
                Already have an account?{' '}
                <button
                  type="button"
                  onClick={onSwitchToLogin}
                  className="text-aqua-teal hover:text-india-green transition-colors duration-300 font-semibold underline"
                >
                  Sign in here
                </button>
              </p>
            </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupModal;