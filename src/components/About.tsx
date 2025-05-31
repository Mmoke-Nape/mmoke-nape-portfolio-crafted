
import React from 'react';
import { Users, Lightbulb, Target, Award } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: Users,
      title: 'Team Collaboration',
      description: 'Strong believer in collaborative development and knowledge sharing'
    },
    {
      icon: Lightbulb,
      title: 'Critical Thinking',
      description: 'Analytical approach to problem-solving with innovative solutions'
    },
    {
      icon: Target,
      title: 'Adaptability',
      description: 'Quick to learn new technologies and adapt to changing requirements'
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'Committed to delivering high-quality solutions that exceed expectations'
    }
  ];

  return (
    <section id="about" className="py-20">
      <div className="max-w-7xl mx-auto section-padding">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Content */}
          <div className="space-y-8 animate-fade-in">
            <div>
              <div className="inline-block mb-4">
                <span className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium">
                  About Me
                </span>
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                Passionate About <span className="gradient-text">Technology</span>
              </h2>
            </div>

            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                With over <span className="text-primary font-semibold">two years of experience</span> in the financial and technological sectors, 
                I've developed a strong foundation in full-stack development and a passion for creating innovative software solutions.
              </p>
              
              <p>
                Currently working at <span className="text-primary font-semibold">Entelect Software</span>, I specialize in modern web technologies 
                and mobile development, with expertise spanning from frontend frameworks like Angular and Flutter to backend technologies 
                including Java Spring Boot and microservices architecture.
              </p>
              
              <p>
                My approach to software development is rooted in <span className="text-primary font-semibold">adaptability</span>, 
                <span className="text-primary font-semibold"> critical thinking</span>, and a commitment to continuous learning. 
                I thrive in collaborative environments where I can contribute to team success while growing my technical expertise.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <div className="bg-card border border-border rounded-xl p-4">
                <div className="text-2xl font-bold text-primary">2+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </div>
              <div className="bg-card border border-border rounded-xl p-4">
                <div className="text-2xl font-bold text-primary">5+</div>
                <div className="text-sm text-muted-foreground">Major Projects</div>
              </div>
              <div className="bg-card border border-border rounded-xl p-4">
                <div className="text-2xl font-bold text-primary">10+</div>
                <div className="text-sm text-muted-foreground">Technologies</div>
              </div>
            </div>
          </div>

          {/* Right side - Highlights */}
          <div className="space-y-6 animate-scale-in" style={{ animationDelay: '0.3s' }}>
            {highlights.map((highlight, index) => {
              const IconComponent = highlight.icon;
              return (
                <div
                  key={highlight.title}
                  className="bg-card border border-border rounded-2xl p-6 hover-lift group transition-all duration-300"
                  style={{ animationDelay: `${0.4 + index * 0.1}s` }}
                >
                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-primary/10 rounded-xl group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                      <IconComponent size={24} className="text-primary group-hover:text-primary-foreground" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold mb-2">{highlight.title}</h3>
                      <p className="text-muted-foreground">{highlight.description}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Values Section */}
        <div className="mt-20 text-center">
          <h3 className="text-3xl font-bold mb-8">My Values</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="space-y-4">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl mx-auto flex items-center justify-center">
                <span className="text-2xl text-white">🚀</span>
              </div>
              <h4 className="text-xl font-semibold">Innovation</h4>
              <p className="text-muted-foreground">Always seeking new and better ways to solve problems</p>
            </div>
            <div className="space-y-4">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl mx-auto flex items-center justify-center">
                <span className="text-2xl text-white">🤝</span>
              </div>
              <h4 className="text-xl font-semibold">Collaboration</h4>
              <p className="text-muted-foreground">Believing that great things are achieved through teamwork</p>
            </div>
            <div className="space-y-4">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl mx-auto flex items-center justify-center">
                <span className="text-2xl text-white">🎯</span>
              </div>
              <h4 className="text-xl font-semibold">Excellence</h4>
              <p className="text-muted-foreground">Committed to delivering the highest quality in everything I do</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
