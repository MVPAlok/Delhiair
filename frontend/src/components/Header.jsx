import React, { useState } from "react";
import { Menu, X, User } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import LoginModal from "./auth/LoginModal";
import SignupModal from "./auth/SignupModal";

const Header = () => {
  const navigate = useNavigate();
  const { user, logout } = useAuth();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isSignupModalOpen, setIsSignupModalOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  const goToDashboard = () => {
    if (user) {
      switch (user.role) {
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
    }
  };

  const getDashboardText = () => {
    if (!user) return "Dashboard";
    
    switch (user.role) {
      case 'policymaker':
        return "Policy Dashboard";
      case 'researcher':
        return "Research Dashboard";
      case 'ngo':
        return "NGO Dashboard";
      case 'citizen':
        return "Citizen Dashboard";
      default:
        return "Dashboard";
    }
  };

  return (
    <header className="bg-dark-charcoal/95 backdrop-blur-sm text-light-gray fixed top-0 left-0 right-0 z-50 shadow-xl border-b border-saffron/20">
      <nav className="container mx-auto px-6 py-2 flex justify-between items-center">
        <div className="flex items-center gap-3 group">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Emblem_of_India.svg/564px-Emblem_of_India.svg.png?20250731133507"
            alt="National Emblem of India"
            className="w-7 h-9 group-hover:scale-110 transition-transform filter brightness-0 invert opacity-95"
          />
          <button
            onClick={() => scrollToSection("hero")}
            className="font-extrabold text-2xl tracking-wider bg-gradient-to-r from-saffron via-pure-white to-india-green bg-clip-text text-transparent group-hover:scale-105 transition-transform"
          >
            DelhiAir.AI
          </button>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <button
            onClick={() => scrollToSection("solutions")}
            className="hover:text-aqua-teal transition-colors duration-300 font-medium"
          >
            Solutions
          </button>
          <button
            onClick={() => scrollToSection("features")}
            className="hover:text-aqua-teal transition-colors duration-300 font-medium"
          >
            Features
          </button>
          <button
            onClick={() => scrollToSection("cta")}
            className="hover:text-aqua-teal transition-colors duration-300 font-medium"
          >
            For Policymakers
          </button>
          <button
            onClick={() => scrollToSection("footer")}
            className="hover:text-aqua-teal transition-colors duration-300 font-medium"
          >
            About
          </button>
        </div>

        {/* Auth Buttons or User Menu */}
        <div className="hidden md:flex items-center space-x-4">
          {user ? (
            <>
              <button
                onClick={goToDashboard}
                className="text-aqua-teal hover:text-pure-white transition-colors duration-300 font-medium flex items-center gap-2"
              >
                <span className="text-lg">{user.avatar || '📊'}</span>
                {getDashboardText()}
              </button>
              <div className="relative group">
                <button className="flex items-center space-x-2 bg-dark-gunmetal px-4 py-2 rounded-full hover:bg-dark-gunmetal/80 transition-colors">
                  <User size={20} />
                  <span>{user.name}</span>
                </button>
                <div className="absolute right-0 mt-2 w-48 py-2 bg-dark-gunmetal rounded-lg shadow-xl invisible group-hover:visible transition-all">
                  <div className="px-4 py-2 text-sm text-light-gray capitalize">{user.role}</div>
                  <div className="border-t border-saffron/20"></div>
                  <button
                    onClick={handleLogout}
                    className="block w-full text-left px-4 py-2 text-sm text-light-gray hover:text-pure-white hover:bg-dark-charcoal/50 transition-colors"
                  >
                    Sign Out
                  </button>
                </div>
              </div>
            </>
          ) : (
            <>
              <button
                onClick={() => setIsLoginModalOpen(true)}
                className="text-pure-white hover:text-aqua-teal transition-colors duration-300 font-medium"
              >
                Login
              </button>
              <button
                onClick={() => setIsSignupModalOpen(true)}
                className="bg-gradient-to-r from-saffron via-pure-white to-india-green p-0.5 rounded-full font-bold text-base hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                <span className="block bg-dark-charcoal text-pure-white py-2 px-5 rounded-full">
                  Sign Up
                </span>
              </button>
            </>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden text-light-gray hover:text-aqua-teal transition-colors"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-dark-charcoal/98 backdrop-blur-sm border-t border-saffron/20">
          <div className="px-6 py-4 space-y-4">
            <button
              onClick={() => scrollToSection("solutions")}
              className="block w-full text-left hover:text-aqua-teal transition-colors duration-300 font-medium"
            >
              Solutions
            </button>
            <button
              onClick={() => scrollToSection("features")}
              className="block w-full text-left hover:text-aqua-teal transition-colors duration-300 font-medium"
            >
              Features
            </button>
            <button
              onClick={() => scrollToSection("cta")}
              className="block w-full text-left hover:text-aqua-teal transition-colors duration-300 font-medium"
            >
              For Policymakers
            </button>
            <button
              onClick={() => scrollToSection("footer")}
              className="block w-full text-left hover:text-aqua-teal transition-colors duration-300 font-medium"
            >
              About
            </button>
            {user ? (
              <>
                <div className="text-sm text-light-gray px-2">
                  Signed in as <span className="font-medium">{user.name}</span>
                </div>
                <button
                  onClick={() => {
                    goToDashboard();
                    setIsMenuOpen(false);
                  }}
                  className="block w-full text-left text-aqua-teal hover:text-pure-white transition-colors duration-300 font-medium"
                >
                  {getDashboardText()}
                </button>
                <button
                  onClick={handleLogout}
                  className="block w-full text-left text-danger-red hover:text-pure-white transition-colors duration-300 font-medium"
                >
                  Sign Out
                </button>
              </>
            ) : (
              <>
                <button
                  onClick={() => {
                    setIsLoginModalOpen(true);
                    setIsMenuOpen(false);
                  }}
                  className="block w-full text-left text-aqua-teal hover:text-pure-white transition-colors duration-300 font-medium"
                >
                  Login
                </button>
                <button
                  onClick={() => {
                    setIsSignupModalOpen(true);
                    setIsMenuOpen(false);
                  }}
                  className="w-full bg-gradient-to-r from-saffron via-pure-white to-india-green p-0.5 rounded-full font-bold text-lg hover:shadow-xl transition-all duration-300"
                >
                  <span className="block bg-dark-charcoal text-pure-white py-2 px-6 rounded-full">
                    Sign Up
                  </span>
                </button>
              </>
            )}
          </div>
        </div>
      )}

      {/* Auth Modals */}
      <LoginModal
        isOpen={isLoginModalOpen}
        onClose={() => setIsLoginModalOpen(false)}
        onSwitchToSignup={() => {
          setIsLoginModalOpen(false);
          setIsSignupModalOpen(true);
        }}
      />
      <SignupModal
        isOpen={isSignupModalOpen}
        onClose={() => setIsSignupModalOpen(false)}
        onSwitchToLogin={() => {
          setIsSignupModalOpen(false);
          setIsLoginModalOpen(true);
        }}
      />
    </header>
  );
};

export default Header;