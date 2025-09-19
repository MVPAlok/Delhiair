import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { Eye, EyeOff, ArrowLeft, CheckCircle, AlertCircle } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';

const AuthPage = () => {
  const navigate = useNavigate();
  const { login, signup, loading } = useAuth();
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [selectedRole, setSelectedRole] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const [formData, setFormData] = useState({
    email: '',
    password: '',
    name: '',
    role: '',
    organization: '',
    region: 'delhi-ncr'
  });

  const roles = [
    {
      value: 'policymaker',
      label: 'Policy Maker',
      icon: '🏛️',
      description: 'Government officials & policy administrators',
      features: ['Policy impact tracking', 'Region-wide analytics', 'Implementation monitoring'],
      mockCredentials: 'policymaker@delhi.gov.in / password123'
    },
    {
      value: 'researcher',
      label: 'Researcher/Academic',
      icon: '🔬',
      description: 'Scientists, researchers & academic institutions',
      features: ['Detailed datasets', 'Trend analysis', 'Research publications'],
      mockCredentials: 'researcher@iit.ac.in / password123'
    },
    {
      value: 'ngo',
      label: 'NGO/Activist',
      icon: '🌱',
      description: 'Environmental organizations & activists',
      features: ['Community tracking', 'Campaign management', 'Awareness tools'],
      mockCredentials: 'activist@greenpeace.org / password123'
    },
    {
      value: 'citizen',
      label: 'Citizen',
      icon: '👤',
      description: 'General public & concerned citizens',
      features: ['Local air quality', 'Health alerts', 'Issue reporting'],
      mockCredentials: 'citizen@gmail.com / password123'
    }
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    try {
      if (isLogin) {
        await login(formData.email, formData.password);
        navigate('/dashboard');
      } else {
        await signup(formData);
        setSuccess('Account created successfully! You can now login.');
        setIsLogin(true);
        setFormData({ ...formData, password: '' });
      }
    } catch (err) {
      setError(err.message);
    }
  };

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleRoleSelect = (role) => {
    setSelectedRole(role);
    setFormData({ ...formData, role });
  };

  const goBack = () => {
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-dark-charcoal via-dark-charcoal/90 to-tech-blue/20">
      {/* Header */}
      <header className="p-6">
        <div className="flex items-center gap-4">
          <button
            onClick={goBack}
            className="flex items-center gap-2 text-light-gray hover:text-aqua-teal transition-colors duration-300"
          >
            <ArrowLeft size={20} />
            <span>Back to Home</span>
          </button>
          <div className="h-6 w-px bg-light-gray/30"></div>
          <h1 className="text-xl font-bold bg-gradient-to-r from-saffron via-pure-white to-india-green bg-clip-text text-transparent">
            DelhiAir.AI
          </h1>
        </div>
      </header>

      <div className="container mx-auto px-6 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Demo Credentials Banner */}
          <div className="bg-tech-blue/10 border border-tech-blue/20 rounded-xl p-6 mb-8">
            <h3 className="text-tech-blue font-bold mb-4 flex items-center gap-2">
              🎯 Demo Credentials (For Testing)
            </h3>
            <div className="grid md:grid-cols-2 gap-4 text-sm">
              {roles.map((role) => (
                <div key={role.value} className="bg-pure-white/90 rounded-lg p-3">
                  <div className="font-semibold text-dark-charcoal flex items-center gap-2">
                    <span>{role.icon}</span>
                    {role.label}
                  </div>
                  <div className="text-tech-blue font-mono text-xs mt-1">
                    {role.mockCredentials}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Role Selection / Info Panel */}
            <div className="bg-pure-white/95 backdrop-blur-sm rounded-2xl shadow-2xl p-8">
              <h2 className="text-3xl font-bold text-dark-charcoal mb-6">
                {isLogin ? 'Welcome Back!' : 'Choose Your Role'}
              </h2>

              {!isLogin && (
                <div className="space-y-4 mb-8">
                  {roles.map((role) => (
                    <div
                      key={role.value}
                      onClick={() => handleRoleSelect(role.value)}
                      className={`p-4 rounded-xl border-2 cursor-pointer transition-all duration-300 ${
                        selectedRole === role.value
                          ? 'border-tech-blue bg-tech-blue/10 shadow-lg'
                          : 'border-light-gray/30 hover:border-tech-blue/50 hover:bg-light-gray/20'
                      }`}
                    >
                      <div className="flex items-start gap-4">
                        <div className="text-3xl">{role.icon}</div>
                        <div className="flex-1">
                          <h3 className="font-bold text-dark-charcoal text-lg">
                            {role.label}
                          </h3>
                          <p className="text-dark-charcoal/70 text-sm mb-3">
                            {role.description}
                          </p>
                          <div className="flex flex-wrap gap-2">
                            {role.features.map((feature, index) => (
                              <span
                                key={index}
                                className="text-xs bg-tech-blue/20 text-tech-blue px-2 py-1 rounded-full"
                              >
                                {feature}
                              </span>
                            ))}
                          </div>
                        </div>
                        {selectedRole === role.value && (
                          <CheckCircle className="text-tech-blue" size={24} />
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {isLogin && (
                <div className="mb-8">
                  <h3 className="text-lg font-semibold text-dark-charcoal mb-4">
                    Access your personalized dashboard
                  </h3>
                  <div className="grid grid-cols-2 gap-4 text-center">
                    {roles.map((role) => (
                      <div key={role.value} className="p-3 bg-light-gray/30 rounded-lg">
                        <div className="text-2xl mb-2">{role.icon}</div>
                        <div className="text-sm font-medium text-dark-charcoal">
                          {role.label}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Login/Signup Form */}
            <div className="bg-pure-white/95 backdrop-blur-sm rounded-2xl shadow-2xl p-8">
              <div className="flex justify-center mb-8">
                <div className="bg-light-gray/30 rounded-full p-1 flex">
                  <button
                    onClick={() => setIsLogin(true)}
                    className={`px-6 py-2 rounded-full font-medium transition-colors duration-300 ${
                      isLogin
                        ? 'bg-tech-blue text-white'
                        : 'text-dark-charcoal hover:text-tech-blue'
                    }`}
                  >
                    Login
                  </button>
                  <button
                    onClick={() => setIsLogin(false)}
                    className={`px-6 py-2 rounded-full font-medium transition-colors duration-300 ${
                      !isLogin
                        ? 'bg-tech-blue text-white'
                        : 'text-dark-charcoal hover:text-tech-blue'
                    }`}
                  >
                    Sign Up
                  </button>
                </div>
              </div>

              {error && (
                <div className="bg-danger-red/10 border border-danger-red/20 rounded-lg p-4 mb-6 flex items-center gap-2">
                  <AlertCircle className="text-danger-red" size={20} />
                  <span className="text-danger-red text-sm">{error}</span>
                </div>
              )}

              {success && (
                <div className="bg-fresh-green/10 border border-fresh-green/20 rounded-lg p-4 mb-6 flex items-center gap-2">
                  <CheckCircle className="text-fresh-green" size={20} />
                  <span className="text-fresh-green text-sm">{success}</span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                {!isLogin && (
                  <>
                    <div>
                      <label className="block text-sm font-medium text-dark-charcoal/80 mb-2">
                        Full Name
                      </label>
                      <Input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full"
                        placeholder="Enter your full name"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-dark-charcoal/80 mb-2">
                        Role *
                      </label>
                      <select
                        name="role"
                        value={formData.role}
                        onChange={handleInputChange}
                        required
                        className="w-full p-3 border border-light-gray rounded-lg focus:ring-2 focus:ring-tech-blue focus:border-transparent"
                      >
                        <option value="">Select your role</option>
                        {roles.map((role) => (
                          <option key={role.value} value={role.value}>
                            {role.icon} {role.label}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-dark-charcoal/80 mb-2">
                        Organization/Department
                      </label>
                      <Input
                        type="text"
                        name="organization"
                        value={formData.organization}
                        onChange={handleInputChange}
                        className="w-full"
                        placeholder="Enter your organization"
                      />
                    </div>
                  </>
                )}

                <div>
                  <label className="block text-sm font-medium text-dark-charcoal/80 mb-2">
                    Email Address
                  </label>
                  <Input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full"
                    placeholder="Enter your email"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-dark-charcoal/80 mb-2">
                    Password
                  </label>
                  <div className="relative">
                    <Input
                      type={showPassword ? 'text' : 'password'}
                      name="password"
                      value={formData.password}
                      onChange={handleInputChange}
                      required
                      className="w-full pr-12"
                      placeholder="Enter your password"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-dark-charcoal/50 hover:text-tech-blue"
                    >
                      {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                    </button>
                  </div>
                </div>

                <Button
                  type="submit"
                  disabled={loading || (!isLogin && !formData.role)}
                  className="w-full bg-gradient-to-r from-tech-blue to-aqua-teal hover:from-aqua-teal hover:to-tech-blue text-white font-semibold py-3 rounded-lg transition-all duration-300 hover:shadow-xl"
                >
                  {loading ? (
                    <div className="flex items-center gap-2">
                      <div className="animate-spin w-4 h-4 border-2 border-white border-t-transparent rounded-full"></div>
                      {isLogin ? 'Signing In...' : 'Creating Account...'}
                    </div>
                  ) : (
                    isLogin ? 'Sign In' : 'Create Account'
                  )}
                </Button>
              </form>

              <div className="mt-6 text-center">
                <button
                  onClick={() => setIsLogin(!isLogin)}
                  className="text-tech-blue hover:underline text-sm"
                >
                  {isLogin
                    ? "Don't have an account? Sign up"
                    : 'Already have an account? Sign in'}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;