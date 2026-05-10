
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
                I am a results-driven engineer with almost{" "}
                <span className="text-primary font-semibold">four years of experience</span> delivering high-performance, cloud-native, low-latency systems in{" "}
                <span className="text-primary font-semibold">FinTech and banking</span>, optimizing microservices, transaction flows, and risk systems.
              </p>
              
              <p>
                At <span className="text-primary font-semibold">Entelect Software</span>, I work across{" "}
                <span className="text-primary font-semibold">Java Spring Boot and Java EE</span>,{" "}
                <span className="text-primary font-semibold">Angular</span>, and <span className="text-primary font-semibold">Flutter</span>, backed by{" "}
                <span className="text-primary font-semibold">SQL</span> and <span className="text-primary font-semibold">AWS</span>. I am fluent in{" "}
                <span className="text-primary font-semibold">Agile and Scrum</span>, <span className="text-primary font-semibold">CI/CD</span>,{" "}
                <span className="text-primary font-semibold">Docker</span>, and <span className="text-primary font-semibold">GitLab</span>.
              </p>
              
              <p>
                Beyond shipping code, I lead <span className="text-primary font-semibold">client-facing demos</span>, mentor junior developers, and own{" "}
                <span className="text-primary font-semibold">sprint ceremonies</span> — combining technical depth with clear communication and steady delivery.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <div className="bg-card border border-border rounded-xl p-4">
                <div className="text-2xl font-bold text-primary">4</div>
                <div className="text-sm text-muted-foreground">Years Experience (approx.)</div>
              </div>
              <div className="bg-card border border-border rounded-xl p-4">
                <div className="text-2xl font-bold text-primary">2+</div>
                <div className="text-sm text-muted-foreground">Enterprise Engagements</div>
              </div>
              <div className="bg-card border border-border rounded-xl p-4">
                <div className="text-2xl font-bold text-primary">12+</div>
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
