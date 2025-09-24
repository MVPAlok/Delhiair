import React, { useEffect, useRef } from "react";
import { MapPin, BarChart3 } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

const PollutionParticles = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles = [];
    const particleCount = 120;

    class Particle {
      constructor() {
        this.reset();
        this.y = Math.random() * canvas.height;
        this.opacity = Math.random() * 0.6 + 0.2;
        this.color = this.getRandomColor();
      }

      getRandomColor() {
        const colors = ['#F2994A', '#EB5757', '#FF9933', '#666666', '#999999'];
        return colors[Math.floor(Math.random() * colors.length)];
      }

      reset() {
        this.x = Math.random() * canvas.width;
        this.y = -10;
        this.size = Math.random() * 4 + 1;
        this.speedX = (Math.random() - 0.5) * 1;
        this.speedY = Math.random() * 1.2 + 0.3;
        this.opacity = Math.random() * 0.6 + 0.2;
        this.color = this.getRandomColor();
        this.drift = Math.sin(this.y * 0.01) * 0.5;
      }

      update() {
        this.x += this.speedX + this.drift;
        this.y += this.speedY;
        this.drift = Math.sin(this.y * 0.01) * 0.5;

        // Fade effect
        if (this.y > canvas.height * 0.7) {
          this.opacity *= 0.98;
        }

        if (this.y > canvas.height + 10 || this.opacity < 0.01) {
          this.reset();
        }
        if (this.x < -10 || this.x > canvas.width + 10) {
          this.x = Math.random() * canvas.width;
        }
      }

      draw() {
        ctx.save();
        ctx.globalAlpha = this.opacity;
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
        
        // Add glow effect for some particles
        if (Math.random() > 0.8) {
          ctx.shadowBlur = 10;
          ctx.shadowColor = this.color;
          ctx.fill();
        }
        
        ctx.restore();
      }
    }

    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      particles.forEach((particle) => {
        particle.update();
        particle.draw();
      });

      requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none z-10"
    />
  );
};

const HeroSection = () => {
  const navigate = useNavigate();
  const { user } = useAuth();
  
  const scrollToAQI = () => {
    const element = document.getElementById("aqi-snapshot");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const goToDashboard = () => {
    if (user) {
      // Route to appropriate dashboard based on user role
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
    } else {
      // User not logged in - scroll to login section or show login modal
      // For now, let's scroll to the header where login button is
      const headerElement = document.querySelector('header');
      if (headerElement) {
        headerElement.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const getDashboardButtonText = () => {
    if (!user) return "Login to View Dashboard";
    
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
    <section
      id="hero"
      className="relative h-screen flex items-center justify-center text-center overflow-hidden bg-dark-charcoal"
    >
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40"
        style={{
          backgroundImage: `url('https://videos.openai.com/vg-assets/assets%2Ftask_01k5vrcb2aekbvz9vq3t1m1f8s%2F1758647052_img_1.webp?st=2025-09-23T16%3A02%3A26Z&se=2025-09-29T17%3A02%3A26Z&sks=b&skt=2025-09-23T16%3A02%3A26Z&ske=2025-09-29T17%3A02%3A26Z&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skoid=8ffff87a-01f1-47c9-9090-32999d4d6380&skv=2019-02-02&sv=2018-11-09&sr=b&sp=r&spr=https%2Chttp&sig=0FuDfcSvdj1%2FdR6%2BAlAAzGEfmvp0UJ8xhH8f3ssMOE4%3D&az=oaivgprodscus')`
        }}
      />
      
      {/* Multiple Gradient Overlays for pollution effect */}
      <div className="absolute inset-0 bg-gradient-to-t from-dark-charcoal via-dark-charcoal/60 to-dark-charcoal/30 z-5" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-warning-orange/5 to-transparent z-6" />
      
      {/* Animated Pollution Particles */}
      <PollutionParticles />

      {/* Content */}
      <div className="relative z-20 px-4 max-w-5xl mx-auto">
        <div className="animate-fade-in-up opacity-0" style={{ animationDelay: "0.2s", animationFillMode: "forwards" }}>
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-pure-white leading-tight mb-6">
            AI-Driven Clarity for{" "}
            <span className="bg-gradient-to-r from-saffron via-pure-white to-india-green bg-clip-text text-transparent">
              Delhi's Air
            </span>
          </h1>
        </div>

        <div className="animate-fade-in-up opacity-0" style={{ animationDelay: "0.5s", animationFillMode: "forwards" }}>
          <p className="text-lg md:text-xl lg:text-2xl text-light-gray max-w-4xl mx-auto mb-12 leading-relaxed">
            From pinpointing pollution sources to forecasting air quality and empowering policy, 
            we provide the data for a cleaner future.
          </p>
        </div>

        <div className="animate-fade-in-up opacity-0 flex flex-col sm:flex-row justify-center items-center gap-6" style={{ animationDelay: "0.8s", animationFillMode: "forwards" }}>
          <button
            onClick={scrollToAQI}
            className="bg-gradient-to-r from-saffron to-warning-orange text-white font-bold py-4 px-8 rounded-full text-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 w-full sm:w-auto flex items-center justify-center gap-3 hover:from-warning-orange hover:to-saffron"
          >
            <MapPin size={24} />
            Check Your AQI
          </button>
          
          <button
            onClick={goToDashboard}
            className={`${user 
              ? 'bg-gradient-to-r from-india-green to-fresh-green hover:from-fresh-green hover:to-india-green' 
              : 'bg-gradient-to-r from-saffron to-warning-orange hover:from-warning-orange hover:to-saffron'
            } text-white font-bold py-4 px-8 rounded-full text-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 w-full sm:w-auto flex items-center justify-center gap-3`}
          >
            <BarChart3 size={24} />
            {getDashboardButtonText()}
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;