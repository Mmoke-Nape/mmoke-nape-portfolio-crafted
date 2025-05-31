
import React from 'react';
import { MapPin, Calendar, ExternalLink } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      company: 'Entelect Software',
      position: 'Software Engineer',
      location: 'South Africa',
      period: '2022 - Present',
      description: 'Leading full-stack development projects with a focus on modern web technologies and financial sector solutions.',
      highlights: [
        'Developed enterprise-level applications using Angular and Java Spring Boot',
        'Implemented microservices architecture for scalable solutions',
        'Collaborated with cross-functional teams to deliver high-quality software',
        'Mentored junior developers and contributed to code review processes'
      ],
      technologies: ['Angular', 'Java Spring Boot', 'TypeScript', 'Microservices', 'Git'],
      color: 'from-blue-500 to-cyan-500'
    }
  ];

  const projects = [
    {
      title: 'Standard Bank – CIB GM - Khayalami',
      category: 'Frontend Development',
      description: 'Advanced frontend application using cutting-edge technologies for financial data visualization and management.',
      technologies: ['Angular', 'Kibana', 'Redux', 'TypeScript', 'RxJS'],
      features: [
        'Real-time data visualization dashboards',
        'Complex state management with Redux',
        'Interactive financial reporting tools',
        'Responsive design for multiple devices'
      ],
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'Absa – RBB - Common Services',
      category: 'Full-Stack Development',
      description: 'Comprehensive full-stack solution providing common services across multiple banking applications.',
      technologies: ['Java Spring Boot', 'Key Cloak', 'Angular', 'PostgreSQL', 'Docker'],
      features: [
        'Authentication and authorization services',
        'RESTful API development',
        'Database design and optimization',
        'Containerized deployment with Docker'
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
                    <h4 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                      {project.title}
                    </h4>
                    <p className="text-muted-foreground">{project.description}</p>
                  </div>

                  <div>
                    <h5 className="font-semibold mb-3">Key Features:</h5>
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
