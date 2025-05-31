
import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-card/50">
      <div className="max-w-7xl mx-auto section-padding">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-6 animate-fade-in-left">
            <h2 className="text-4xl lg:text-5xl font-bold">
              About <span className="gradient-text">Me</span>
            </h2>
            
            <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
              <p>
                I'm a skilled software engineer with nearly <span className="text-primary font-semibold">2 years of experience</span> in 
                the financial and technological sectors. My journey in software development has been driven by an 
                unwavering passion for creating innovative solutions that make a real impact.
              </p>
              
              <p>
                What sets me apart is my <span className="text-primary font-semibold">adaptability</span> to new environments and my 
                proficiency in developing necessary skills quickly. I'm a critical thinker and decision-maker 
                who thrives on devising effective technological solutions.
              </p>
              
              <p>
                I'm highly motivated and goal-driven, with a strong work ethic and integrity that guides 
                everything I do. As an excellent communicator and team player, I bring 
                <span className="text-primary font-semibold"> strong interpersonal skills</span> to every project, 
                fostering collaboration and driving results.
              </p>
            </div>

            {/* Key Traits */}
            <div className="grid grid-cols-2 gap-4 pt-6">
              {[
                'Critical Thinker',
                'Team Player',
                'Quick Learner',
                'Problem Solver',
                'Goal-Driven',
                'Adaptable'
              ].map((trait, index) => (
                <div
                  key={trait}
                  className="bg-primary/10 border border-primary/20 rounded-lg p-3 text-center hover-lift"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <span className="text-primary font-semibold">{trait}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Visual Element */}
          <div className="relative animate-scale-in">
            <div className="bg-gradient-to-br from-primary/20 to-cyan-400/20 rounded-2xl p-8 backdrop-blur-sm border border-primary/20">
              <div className="space-y-6">
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2">2+</div>
                  <div className="text-muted-foreground">Years Experience</div>
                </div>
                
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold text-primary">10+</div>
                    <div className="text-sm text-muted-foreground">Technologies</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-primary">5+</div>
                    <div className="text-sm text-muted-foreground">Certifications</div>
                  </div>
                </div>

                <div className="text-center pt-4">
                  <div className="text-lg font-semibold text-primary">Currently at</div>
                  <div className="text-muted-foreground">Entelect Software</div>
                  <div className="text-sm text-muted-foreground">Centurion, Gauteng</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
