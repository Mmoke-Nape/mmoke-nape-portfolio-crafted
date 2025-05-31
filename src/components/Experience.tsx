
import React from 'react';

const Experience = () => {
  const experience = {
    current: {
      title: 'Software Engineer',
      company: 'Entelect Software',
      period: 'Jan 2023 - Current',
      location: 'Centurion, Gauteng, 2000',
      description: 'Contribute to the design, development, and maintenance of software applications. I assist in gathering technical requirements, writing and reviewing code, and debugging issues to ensure high-quality deliverables. My role involves participating in sprint planning, creating and analyzing user stories, and implementing best practices for software development. I also collaborate with team members and manage client interactions to understand their needs and provide timely solutions.',
      responsibilities: [
        'Design and develop software applications',
        'Gather technical requirements and write clean code',
        'Participate in sprint planning and user story creation',
        'Collaborate with teams and manage client interactions',
        'Debug issues and ensure high-quality deliverables'
      ]
    },
    projects: [
      {
        name: 'Standard Bank – CIB GM - Khayalami',
        period: 'Current',
        role: 'Front-end Developer',
        technologies: ['Angular', 'Kibana', 'Redux'],
        description: 'Working on the front-end development of banking applications with focus on user experience and data visualization.'
      },
      {
        name: 'Absa – RBB - Common Services',
        period: 'Previous',
        role: 'Full-stack Developer',
        technologies: ['Java', 'Spring Boot', 'Key Cloak', 'Angular'],
        description: 'Developed full-stack solutions for banking common services, implementing security and authentication systems.'
      }
    ]
  };

  const passions = [
    { name: 'Problem solving', icon: '🧩' },
    { name: 'All things technology', icon: '💻' },
    { name: 'Cars', icon: '🚗' },
    { name: 'Basketball', icon: '🏀' }
  ];

  return (
    <section id="experience" className="py-20 bg-card/50">
      <div className="max-w-7xl mx-auto section-padding">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Work <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Building innovative solutions in the financial and technology sectors
          </p>
        </div>

        {/* Current Position */}
        <div className="mb-16 animate-fade-in-left">
          <div className="bg-card border border-border rounded-xl p-8 hover-lift">
            <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
              <div className="mb-4 lg:mb-0">
                <h3 className="text-2xl font-bold text-primary">{experience.current.title}</h3>
                <h4 className="text-xl font-semibold text-foreground">{experience.current.company}</h4>
                <p className="text-muted-foreground">{experience.current.location}</p>
              </div>
              <div className="bg-primary/10 border border-primary/20 rounded-lg px-4 py-2">
                <span className="text-primary font-semibold">{experience.current.period}</span>
              </div>
            </div>
            
            <p className="text-muted-foreground mb-6 leading-relaxed">
              {experience.current.description}
            </p>

            <div className="grid md:grid-cols-2 gap-4">
              {experience.current.responsibilities.map((responsibility, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-foreground">{responsibility}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Projects */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-8 text-center">Key Projects</h3>
          <div className="grid lg:grid-cols-2 gap-8">
            {experience.projects.map((project, index) => (
              <div
                key={project.name}
                className="bg-card border border-border rounded-xl p-6 hover-lift animate-scale-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="mb-4">
                  <h4 className="text-xl font-semibold text-primary mb-2">{project.name}</h4>
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-foreground font-medium">{project.role}</span>
                    <span className="text-sm text-muted-foreground">{project.period}</span>
                  </div>
                </div>
                
                <p className="text-muted-foreground mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Passions */}
        <div className="animate-fade-in">
          <h3 className="text-2xl font-bold mb-8 text-center">
            Passions <span className="text-2xl">❤️</span>
          </h3>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {passions.map((passion, index) => (
              <div
                key={passion.name}
                className="bg-card border border-border rounded-xl p-6 text-center hover-lift"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-4xl mb-3">{passion.icon}</div>
                <span className="text-foreground font-medium">{passion.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
