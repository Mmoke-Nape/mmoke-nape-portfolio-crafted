
import React from 'react';
import { ArrowDown } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-cyan-500/10 animate-gradient-x"></div>
      
      <div className="section-padding w-full max-w-7xl mx-auto relative z-10">
        <div className="text-center space-y-8 animate-fade-in">
          {/* Profile Image Placeholder */}
          <div className="mx-auto w-48 h-48 rounded-full bg-gradient-to-br from-primary to-cyan-400 p-1 animate-scale-in">
            <div className="w-full h-full rounded-full bg-muted flex items-center justify-center">
              <span className="text-6xl font-bold text-primary">MN</span>
            </div>
          </div>

          {/* Name and Title */}
          <div className="space-y-4">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold">
              <span className="gradient-text">Mmoke Nape</span>
            </h1>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-light text-muted-foreground">
              Software Engineer
            </h2>
          </div>

          {/* Tagline */}
          <p className="text-xl sm:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Crafting Innovative Software Solutions with{' '}
            <span className="text-primary font-semibold">Adaptability</span>,{' '}
            <span className="text-primary font-semibold">Critical Thinking</span>, and{' '}
            <span className="text-primary font-semibold">Technical Excellence</span>
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <a
              href="#contact"
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg"
            >
              Get In Touch
            </a>
            <a
              href="#about"
              className="border border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:scale-105"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="text-primary" size={24} />
      </div>
    </section>
  );
};

export default Hero;
