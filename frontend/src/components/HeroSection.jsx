import React, { useEffect, useRef } from "react";
import { MapPin, BarChart3 } from "lucide-react";

const PollutionParticles = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles = [];
    const particleCount = 80;

    class Particle {
      constructor() {
        this.reset();
        this.y = Math.random() * canvas.height;
        this.opacity = Math.random() * 0.3 + 0.1;
      }

      reset() {
        this.x = Math.random() * canvas.width;
        this.y = -10;
        this.size = Math.random() * 3 + 1;
        this.speedX = (Math.random() - 0.5) * 0.5;
        this.speedY = Math.random() * 0.8 + 0.2;
        this.opacity = Math.random() * 0.3 + 0.1;
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;

        if (this.y > canvas.height + 10) {
          this.reset();
        }
        if (this.x < -10 || this.x > canvas.width + 10) {
          this.x = Math.random() * canvas.width;
        }
      }

      draw() {
        ctx.save();
        ctx.globalAlpha = this.opacity;
        ctx.fillStyle = "#F2994A";
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
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
  const scrollToAQI = () => {
    const element = document.getElementById("aqi-snapshot");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToCTA = () => {
    const element = document.getElementById("cta");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="relative h-screen flex items-center justify-center text-center overflow-hidden bg-dark-charcoal"
    >
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1701523978320-028cb93c194c?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1ODB8MHwxfHNlYXJjaHwzfHxkZWxoaSUyMHBvbGx1dGlvbnxlbnwwfHx8fDE3NTgzMTgwNjl8MA&ixlib=rb-4.1.0&q=85')`
        }}
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-dark-charcoal via-dark-charcoal/70 to-transparent z-5" />
      
      {/* Animated Pollution Particles */}
      <PollutionParticles />

      {/* Content */}
      <div className="relative z-20 px-4 max-w-5xl mx-auto">
        <div className="animate-fade-in-up opacity-0" style={{ animationDelay: "0.2s", animationFillMode: "forwards" }}>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-pure-white leading-tight mb-6">
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
            onClick={scrollToCTA}
            className="bg-gradient-to-r from-india-green to-fresh-green text-white font-bold py-4 px-8 rounded-full text-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 w-full sm:w-auto flex items-center justify-center gap-3 hover:from-fresh-green hover:to-india-green"
          >
            <BarChart3 size={24} />
            Policy Dashboard
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;