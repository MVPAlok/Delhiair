import React, { useState } from "react";
import { Send, CheckCircle } from "lucide-react";
import { Button } from "./ui/button";

const CTASection = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    
    // Reset after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setEmail("");
    }, 3000);
  };

  return (
    <section id="cta" className="bg-dark-charcoal text-pure-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div 
          className="w-full h-full bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1460925895917-afdab827c52f?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzR8MHwxfHNlYXJjaHwzfHxkYXRhJTIwdmlzdWFsaXphdGlvbnxlbnwwfHx8fDE3NTgzMTU4NTF8MA&ixlib=rb-4.1.0&q=85')`
          }}
        />
      </div>
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-dark-charcoal via-dark-charcoal/90 to-dark-charcoal"></div>

      <div className="container mx-auto px-6 py-20 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 relative inline-block pb-4">
            Ready to Build a Healthier Delhi?
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1/2 h-1 bg-gradient-to-r from-saffron via-pure-white to-india-green rounded-full"></div>
          </h2>
          
          <p className="text-lg md:text-xl text-light-gray max-w-3xl mx-auto mt-8 mb-12 leading-relaxed">
            Whether you are a concerned citizen or a dedicated policymaker, DelhiAir.AI provides 
            the tools you need. Join us in the fight for cleaner air.
          </p>

          {/* Demo Request Form */}
          <div className="bg-pure-white/10 backdrop-blur-sm rounded-2xl p-8 mb-8 max-w-2xl mx-auto border border-pure-white/20">
            <h3 className="text-xl font-semibold mb-6 text-aqua-teal">
              Request Early Access
            </h3>
            
            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="flex flex-col sm:flex-row gap-4">
                  <input
                    type="email"
                    placeholder="Enter your email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="flex-1 px-4 py-3 rounded-lg bg-pure-white/20 border border-pure-white/30 text-pure-white placeholder-light-gray/70 focus:outline-none focus:ring-2 focus:ring-aqua-teal focus:border-transparent transition-all duration-300"
                  />
                  <Button
                    type="submit"
                    className="bg-gradient-to-r from-saffron to-india-green hover:from-india-green hover:to-saffron text-white font-semibold px-8 py-3 rounded-lg transition-all duration-300 hover:shadow-xl flex items-center gap-2 justify-center"
                  >
                    <Send size={18} />
                    Request Demo
                  </Button>
                </div>
                <p className="text-sm text-light-gray/60">
                  Get notified when we launch the full platform for your area.
                </p>
              </form>
            ) : (
              <div className="text-center py-4">
                <CheckCircle className="w-12 h-12 text-fresh-green mx-auto mb-4 animate-pulse" />
                <h4 className="text-xl font-semibold text-fresh-green mb-2">Thank You!</h4>
                <p className="text-light-gray/80">
                  We'll be in touch soon with your demo access.
                </p>
              </div>
            )}
          </div>

          {/* Main CTA Button */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button className="bg-gradient-to-r from-saffron via-pure-white to-india-green p-1 rounded-full hover:shadow-2xl transition-all duration-300 hover:scale-105 group">
              <span className="block bg-dark-charcoal text-pure-white font-bold py-4 px-8 rounded-full group-hover:bg-dark-charcoal/90 transition-colors duration-300">
                View Live Dashboard
              </span>
            </button>
            
            <button className="border-2 border-pure-white/30 text-pure-white font-semibold py-4 px-8 rounded-full hover:bg-pure-white/10 hover:border-aqua-teal transition-all duration-300 hover:scale-105">
              Download Mobile App
            </button>
          </div>

          {/* Trust Indicators */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="space-y-2">
              <div className="text-2xl font-bold text-aqua-teal">24/7</div>
              <div className="text-light-gray/70">Real-time Monitoring</div>
            </div>
            <div className="space-y-2">
              <div className="text-2xl font-bold text-aqua-teal">ISO 27001</div>
              <div className="text-light-gray/70">Data Security Certified</div>
            </div>
            <div className="space-y-2">
              <div className="text-2xl font-bold text-aqua-teal">GDPR</div>
              <div className="text-light-gray/70">Privacy Compliant</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;