import React, { useState } from 'react';
import { X } from 'lucide-react';

const SignupModal = ({ isOpen, onClose, onSignup }) => {
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
    <div className="fixed inset-0 bg-black/80 backdrop-blur-md z-[100]">
      <div className="min-h-screen w-full flex items-center justify-center p-4">
        <div className="relative bg-dark-charcoal w-full max-w-md rounded-2xl shadow-2xl border border-saffron/20 overflow-hidden transform transition-all">
          {/* Header with tri-color gradient */}
          <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-saffron via-pure-white to-india-green" />
          
          <div className="p-6 pt-8">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-pure-white">Create Account</h2>
              <button
                onClick={onClose}
                className="text-light-gray hover:text-pure-white transition-colors"
              >
                <X size={24} />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-light-gray mb-2">
                Full Name
              </label>
              <input
                id="name"
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-2 bg-dark-gunmetal rounded-lg border border-saffron/20 text-pure-white focus:outline-none focus:ring-2 focus:ring-saffron/50 transition-all"
                placeholder="Enter your full name"
              />
            </div>

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
                placeholder="Create a password"
              />
            </div>

            <div>
              <label htmlFor="confirmPassword" className="block text-sm font-medium text-light-gray mb-2">
                Confirm Password
              </label>
              <input
                id="confirmPassword"
                type="password"
                required
                value={formData.confirmPassword}
                onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                className="w-full px-4 py-2 bg-dark-gunmetal rounded-lg border border-saffron/20 text-pure-white focus:outline-none focus:ring-2 focus:ring-saffron/50 transition-all"
                placeholder="Confirm your password"
              />
            </div>

            <div>
              <label htmlFor="role" className="block text-sm font-medium text-light-gray mb-2">
                Register As
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

            <div className="text-sm text-light-gray">
              <label className="flex items-center">
                <input type="checkbox" required className="mr-2" />
                I agree to the Terms of Service and Privacy Policy
              </label>
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-saffron via-pure-white to-india-green p-0.5 rounded-full font-bold text-lg hover:shadow-glow-tricolor transition-all duration-300"
            >
              <span className="block bg-dark-charcoal text-pure-white py-2 px-6 rounded-full hover:bg-dark-gunmetal transition-colors">
                Create Account
              </span>
            </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupModal;