
import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Skills from '../components/Skills';
import Experience from '../components/Experience';
import Education from '../components/Education';
import Contact from '../components/Contact';
import Navigation from '../components/Navigation';
import GlobalAntigravityBackground from '../components/GlobalAntigravityBackground';

const Index = () => {
  return (
    <div className="relative min-h-screen bg-background text-foreground">
      <GlobalAntigravityBackground />
      <Navigation />
      <main className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Education />
        <Contact />
      </main>
    </div>
  );
};

export default Index;
