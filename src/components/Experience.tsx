
import React from 'react';
import { MapPin, Calendar } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      company: 'Entelect Software',
      position: 'Intermediate Software Engineer',
      location: 'Johannesburg, South Africa',
      period: 'Jan 2023 – Present',
      description:
        'End-to-end delivery of bank-grade solutions: requirements, architecture, production code, code reviews, mentoring juniors, and presentations to C-level stakeholders.',
      highlights: [
        'Full-stack delivery for tier-one banking clients in global markets and retail business banking',
        'Modernisation of legacy integrations toward REST microservices with measurable latency and reliability gains',
        'Test automation and quality gates (e.g. JUnit, Cypress) to protect regressions at scale',
        'Mentorship, client demos, and ownership of sprint ceremonies alongside day-to-day engineering'
      ],
      technologies: [
        'Java / Spring Boot',
        'Java EE',
        'Angular',
        'TypeScript',
        'Flutter',
        'SQL',
        'AWS',
        'Docker',
        'GitLab',
        'CI/CD',
        'JUnit',
        'Cypress'
      ],
      color: 'from-blue-500 to-cyan-500'
    }
  ];

  const projects = [
    {
      title: 'Standard Bank – CIB Global Markets, Khayalami',
      category: 'Full-Stack',
      period: 'Jul 2023 – Present',
      description:
        'International payments platform handling high daily value with strict performance targets; observability and operational tooling for large internal user bases.',
      technologies: ['Angular', 'Java EE', 'Kibana', 'Elastic', 'TypeScript', 'JUnit', 'Cypress'],
      features: [
        'Built an Angular / Java EE application for international payments (R1M+ daily volume) with sub–2s refresh, cutting user wait times by about 70%',
        'Delivered a Kibana–Elastic dashboard for real-time payment status, adopted by 150+ staff and saving roughly 10 staff-hours per week',
        'Promoted to mid-level within 12 months; currently mentors three junior developers',
        'Refactored legacy SOAP services into REST microservices, reducing latency by about 60% and errors by about 90%',
        'Introduced automated regression testing (JUnit, Cypress) with strong coverage (around 85%)'
      ],
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'Absa – RBB Common Services',
      category: 'Full-Stack',
      period: 'Feb 2023 – Jun 2023',
      description:
        'Role and access management for administrators across retail business banking services, with a focus on reliability and incident response.',
      technologies: ['Angular', 'Java Spring Boot', 'SQL', 'Docker', 'REST'],
      features: [
        'Developed a role-management dashboard for 200 admins, cutting provisioning time from about 30 minutes to about 5 minutes',
        'Resolved 120+ P1/P2 defects, reducing mean time to repair by about 45% while maintaining roughly 99.8% availability'
      ],
      color: 'from-purple-500 to-pink-500'
    }
  ];

  return (
    <section id="experience" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto section-padding">
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-block mb-4">
            <span className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium">
              Professional Journey
            </span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Experience & <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Building innovative solutions across financial and technology sectors
          </p>
        </div>

        {/* Experience Section */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold mb-8 text-center">Professional Experience</h3>
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div
                key={exp.company}
                className="bg-card border border-border rounded-2xl p-8 hover-lift animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="grid lg:grid-cols-3 gap-8">
                  <div className="lg:col-span-1">
                    <div className={`inline-block px-4 py-2 bg-gradient-to-r ${exp.color} text-white rounded-full text-sm font-medium mb-4`}>
                      Current Position
                    </div>
                    <h3 className="text-2xl font-bold mb-2">{exp.position}</h3>
                    <h4 className="text-xl text-primary font-semibold mb-4">{exp.company}</h4>
                    <div className="space-y-2 text-muted-foreground">
                      <div className="flex items-center space-x-2">
                        <MapPin size={16} />
                        <span>{exp.location}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Calendar size={16} />
                        <span>{exp.period}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="lg:col-span-2 space-y-6">
                    <p className="text-muted-foreground text-lg">{exp.description}</p>
                    
                    <div>
                      <h5 className="font-semibold mb-3">Key Achievements:</h5>
                      <ul className="space-y-2">
                        {exp.highlights.map((highlight, idx) => (
                          <li key={idx} className="flex items-start space-x-2">
                            <span className="text-primary mt-1">•</span>
                            <span className="text-muted-foreground">{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h5 className="font-semibold mb-3">Technologies Used:</h5>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 bg-muted text-sm rounded-full font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Projects Section */}
        <div>
          <h3 className="text-2xl font-bold mb-8 text-center">Featured Projects</h3>
          <div className="grid lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div
                key={project.title}
                className="bg-card border border-border rounded-2xl p-6 hover-lift animate-scale-in group"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="space-y-6">
                  <div>
                    <div className={`inline-block px-3 py-1 bg-gradient-to-r ${project.color} text-white rounded-full text-xs font-medium mb-3`}>
                      {project.category}
                    </div>
                    <h4 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                      {project.title}
                    </h4>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                      <Calendar size={14} className="shrink-0" />
                      <span>{project.period}</span>
                    </div>
                    <p className="text-muted-foreground">{project.description}</p>
                  </div>

                  <div>
                    <h5 className="font-semibold mb-3">Highlights:</h5>
                    <ul className="space-y-1">
                      {project.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start space-x-2 text-sm">
                          <span className="text-primary mt-1">•</span>
                          <span className="text-muted-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h5 className="font-semibold mb-3">Technologies:</h5>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 bg-muted text-xs rounded-full font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
