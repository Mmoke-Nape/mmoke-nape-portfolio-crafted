
import React from 'react';
import { Code, Database, Globe, Smartphone, Server, GitBranch, TestTube, Users } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend Development',
      icon: Globe,
      description: 'Bank-grade web interfaces and rich client experiences',
      skills: ['Angular', 'TypeScript', 'NgRx', 'React', 'Redux', 'HTML/CSS'],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Backend Development', 
      icon: Server,
      description: 'Services, integrations, and scalable architectures',
      skills: ['Java / Spring Boot', 'Java EE', 'Python', 'Kotlin', 'Microservices', 'REST APIs', 'Authentication'],
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'Mobile Development',
      icon: Smartphone,
      description: 'Cross-platform apps with polished mobile UI/UX',
      skills: ['Flutter', 'Dart', 'Mobile UI/UX'],
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Data, Cloud & DevOps',
      icon: Database,
      description: 'Data platforms, containers, and delivery pipelines',
      skills: ['SQL', 'AWS', 'Docker', 'CI/CD', 'Git / GitLab', 'Kibana / Elastic'],
      color: 'from-orange-500 to-red-500'
    },
    {
      title: 'Testing & Quality',
      icon: TestTube,
      description: 'Automated checks and high standards in production',
      skills: ['JUnit', 'Cypress', 'Regression testing', 'Code review', 'Quality focus'],
      color: 'from-teal-500 to-cyan-500'
    },
    {
      title: 'Delivery & Collaboration',
      icon: Users,
      description: 'Agile delivery, stakeholder alignment, and tooling',
      skills: ['Agile / Scrum', 'JIRA', 'Mentoring', 'Demos', 'Sprint ceremonies'],
      color: 'from-indigo-500 to-purple-500'
    }
  ];

  const coreCompetencies = [
    { name: 'Full-Stack Delivery', icon: Code },
    { name: 'Front-End Engineering', icon: Globe },
    { name: 'Back-End & Services', icon: Server },
    { name: 'Mobile UI / UX', icon: Smartphone },
    { name: 'Git / GitLab', icon: GitBranch },
    { name: 'Complex Problem Solving', icon: TestTube },
  ];

  return (
    <section id="skills" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto section-padding">
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-block mb-4">
            <span className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium">
              Technical Expertise
            </span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Skills & <span className="gradient-text">Technologies</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A comprehensive toolkit built through continuous learning and hands-on experience across multiple domains
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <div
                key={category.title}
                className="group bg-card border border-border rounded-2xl p-6 hover-lift animate-scale-in hover:border-primary/50 transition-all duration-300"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className={`p-3 rounded-xl bg-gradient-to-br ${category.color} text-white group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent size={24} />
                    </div>
                    <h3 className="text-xl font-semibold">{category.title}</h3>
                  </div>
                  
                  <p className="text-muted-foreground text-sm">
                    {category.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 bg-muted text-sm rounded-full font-medium hover:bg-primary hover:text-primary-foreground transition-colors duration-200"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Core Competencies */}
        <div className="animate-fade-in">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-4">Core Competencies</h3>
            <p className="text-muted-foreground">Key areas where I excel and deliver exceptional results</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {coreCompetencies.map((competency, index) => {
              const IconComponent = competency.icon;
              return (
                <div
                  key={competency.name}
                  className="bg-card border border-border rounded-xl p-4 text-center hover-lift transition-all duration-300 hover:border-primary/50 group"
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  <div className="mb-3 flex justify-center">
                    <IconComponent className="text-primary group-hover:scale-110 transition-transform duration-300" size={24} />
                  </div>
                  <span className="text-sm font-medium text-foreground">{competency.name}</span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Fun fact section */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-primary/10 to-cyan-500/10 rounded-2xl p-8 border border-primary/20">
            <h3 className="text-2xl font-bold mb-4">Always Learning</h3>
            <p className="text-muted-foreground mb-4">
              I believe in continuous improvement and staying up-to-date with the latest technologies and best practices.
            </p>
            <div className="flex justify-center space-x-8 text-sm font-medium">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">~4</div>
                <div className="text-muted-foreground">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">12+</div>
                <div className="text-muted-foreground">Technologies</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">5</div>
                <div className="text-muted-foreground">Certifications</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
