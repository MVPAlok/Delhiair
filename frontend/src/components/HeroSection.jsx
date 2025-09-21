import React, { useEffect, useRef } from "react";
import { MapPin, BarChart3 } from "lucide-react";
import { useNavigate } from "react-router-dom";

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
  
  const scrollToAQI = () => {
    const element = document.getElementById("aqi-snapshot");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const goToPolicyDashboard = () => {
    navigate("/dashboards/policy");
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
          backgroundImage: `url('https://images.unsplash.com/photo-1644674649847-0690247ae9ee?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1ODB8MHwxfHNlYXJjaHwxfHxkZWxoaSUyMHBvbGx1dGlvbnxlbnwwfHx8fDE3NTgzMTgwNjl8MA&ixlib=rb-4.1.0&q=85')`
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
            onClick={goToPolicyDashboard}
            className="bg-gradient-to-r from-india-green to-fresh-green text-white font-bold py-4 px-8 rounded-full text-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 w-full sm:w-auto flex items-center justify-center gap-3 hover:from-fresh-green hover:to-india-green"
          >
            <BarChart3 size={24} />
            Show Dashboard
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;