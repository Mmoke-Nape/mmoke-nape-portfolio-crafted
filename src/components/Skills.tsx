
import React from 'react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend Development',
      skills: [
        { name: 'Flutter & Dart', level: 90 },
        { name: 'Angular', level: 85 },
        { name: 'Web Development', level: 80 },
        { name: 'Mobile Development', level: 85 }
      ]
    },
    {
      title: 'Backend Development',
      skills: [
        { name: 'Java', level: 85 },
        { name: 'Python', level: 80 },
        { name: 'C++', level: 75 },
        { name: 'Microservices', level: 80 }
      ]
    },
    {
      title: 'Database & Tools',
      skills: [
        { name: 'MySQL', level: 85 },
        { name: 'Docker', level: 80 },
        { name: 'Git/GitLab', level: 90 },
        { name: 'JIRA Software', level: 85 }
      ]
    },
    {
      title: 'Testing & Quality',
      skills: [
        { name: 'JUnit', level: 80 },
        { name: 'Version Control', level: 90 },
        { name: 'Code Review', level: 85 },
        { name: 'Collaboration', level: 95 }
      ]
    }
  ];

  const competencies = [
    'Full-Stack Development',
    'Mobile Application Development',
    'Software Engineering',
    'Complex Problem-Solving',
    'Leadership and Team Collaboration',
    'Communication Skills',
    'Project Management',
    'Version Control and Collaboration',
    'Continuous Learning and Adaptability'
  ];

  return (
    <section id="skills" className="py-20">
      <div className="max-w-7xl mx-auto section-padding">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Skills & <span className="gradient-text">Technologies</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A comprehensive toolkit built through continuous learning and hands-on experience
          </p>
        </div>

        {/* Technical Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 mb-16">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={category.title}
              className="bg-card border border-border rounded-xl p-6 hover-lift animate-scale-in"
              style={{ animationDelay: `${categoryIndex * 0.1}s` }}
            >
              <h3 className="text-xl font-semibold text-primary mb-6">{category.title}</h3>
              <div className="space-y-4">
                {category.skills.map((skill) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-foreground font-medium">{skill.name}</span>
                      <span className="text-primary text-sm font-semibold">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div
                        className="bg-gradient-to-r from-primary to-cyan-400 h-2 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Key Competencies */}
        <div className="animate-fade-in">
          <h3 className="text-2xl font-bold text-center mb-8">Key Competencies</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {competencies.map((competency, index) => (
              <div
                key={competency}
                className="bg-card border border-border rounded-lg p-4 text-center hover-lift transition-all duration-300"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <span className="text-foreground font-medium">{competency}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
