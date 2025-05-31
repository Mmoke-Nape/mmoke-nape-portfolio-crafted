
import React from 'react';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-cyan-500/5"></div>
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      
      <div className="section-padding w-full max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Text content */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-6">
              <div className="inline-block">
                <span className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium">
                  Available for opportunities
                </span>
              </div>
              
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight">
                Hi, I'm{' '}
                <span className="gradient-text block">Mmoke Nape</span>
              </h1>
              
              <h2 className="text-2xl sm:text-3xl text-muted-foreground font-light">
                Software Engineer
              </h2>
              
              <p className="text-lg text-muted-foreground leading-relaxed max-w-xl">
                I craft innovative software solutions with a focus on{' '}
                <span className="text-primary font-semibold">adaptability</span>,{' '}
                <span className="text-primary font-semibold">critical thinking</span>, and{' '}
                <span className="text-primary font-semibold">technical excellence</span>.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <a
                href="#contact"
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg"
              >
                Let's Connect
              </a>
              <a
                href="#about"
                className="border border-border hover:bg-muted px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:scale-105"
              >
                Learn More
              </a>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 pt-4">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-muted hover:bg-primary hover:text-primary-foreground rounded-xl transition-all duration-300 hover:scale-110"
              >
                <Github size={20} />
              </a>
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-muted hover:bg-primary hover:text-primary-foreground rounded-xl transition-all duration-300 hover:scale-110"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="mailto:napemmoke@gmail.com"
                className="p-3 bg-muted hover:bg-primary hover:text-primary-foreground rounded-xl transition-all duration-300 hover:scale-110"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Right side - Profile Image */}
          <div className="flex justify-center lg:justify-end animate-scale-in" style={{ animationDelay: '0.3s' }}>
            <div className="relative">
              {/* Background decorative elements */}
              <div className="absolute -top-4 -left-4 w-72 h-72 bg-gradient-to-br from-primary/20 to-cyan-400/20 rounded-3xl rotate-6"></div>
              <div className="absolute -bottom-4 -right-4 w-72 h-72 bg-gradient-to-br from-cyan-400/20 to-primary/20 rounded-3xl -rotate-6"></div>
              
              {/* Main profile container */}
              <div className="relative w-72 h-72 bg-gradient-to-br from-primary to-cyan-400 p-1 rounded-3xl">
                <div className="w-full h-full rounded-3xl bg-muted flex items-center justify-center">
                  <span className="text-6xl font-bold text-primary">MN</span>
                </div>
              </div>
              
              {/* Floating elements */}
              <div className="absolute -top-2 right-8 bg-card border border-border rounded-xl p-3 shadow-lg animate-bounce" style={{ animationDelay: '1s' }}>
                <span className="text-2xl">👋</span>
              </div>
              <div className="absolute bottom-8 -left-2 bg-card border border-border rounded-xl p-3 shadow-lg animate-bounce" style={{ animationDelay: '1.5s' }}>
                <span className="text-2xl">💻</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="flex flex-col items-center space-y-2">
          <span className="text-sm text-muted-foreground">Scroll down</span>
          <ArrowDown className="text-primary" size={20} />
        </div>
      </div>
    </section>
  );
};

export default Hero;
