
import React from "react";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative bg-gradient-to-br from-background via-background to-background/50">
      <div className="max-w-7xl mx-auto section-padding w-full">
        <div className="text-center space-y-8 pt-20 md:pt-0">
          {/* Available for opportunities - positioned properly for mobile */}
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium border border-primary/20">
            <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
            Available for opportunities
          </div>

          {/* Main heading */}
          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight">
              Hi, I'm{" "}
              <span className="gradient-text block md:inline">
                Mmoke Nape
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              A passionate <span className="text-primary font-semibold">Software Engineer</span> crafting innovative digital solutions with{" "}
              <span className="text-primary font-semibold">2+ years</span> of experience in financial and tech sectors
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="#contact"
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover-lift"
            >
              Let's work together
            </a>
            <a
              href="#about"
              className="border border-border hover:bg-card text-foreground px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover-lift"
            >
              Learn more about me
            </a>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6">
            <a
              href="https://github.com/Mmoke-Nape"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors duration-300 hover-lift"
            >
              <Github size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/mmokenape/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors duration-300 hover-lift"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="mailto:napemmoke@gmail.com"
              className="text-muted-foreground hover:text-primary transition-colors duration-300 hover-lift"
            >
              <Mail size={24} />
            </a>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <a href="#about" className="text-muted-foreground hover:text-primary transition-colors">
            <ArrowDown size={24} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
