
import React from 'react';
import { GraduationCap, Award, Calendar, BookOpen } from 'lucide-react';

const Education = () => {
  const education = {
    degree: 'BSc Information Technology',
    specialization: 'Software Engineering',
    institution: 'Eduvos (Pearson)',
    period: '2018 - 2021',
    description: 'Comprehensive program focusing on software development, computer science fundamentals, and practical application of technology solutions.',
    coursework: [
      'Object-Oriented Programming',
      'Database Management Systems',
      'Software Engineering Principles',
      'Web Development Technologies',
      'Mobile Application Development',
      'System Analysis and Design'
    ]
  };

  const certifications = [
    {
      title: 'Certificate of Excellence',
      institution: 'Eduvos (Pearson)',
      year: '2022',
      description: 'Awarded for outstanding academic performance and dedication to software engineering studies.',
      icon: Award,
      color: 'from-yellow-500 to-orange-500'
    },
    {
      title: 'Certified Flutter Developer',
      institution: 'Professional Certification',
      year: '2020',
      description: 'Comprehensive certification covering Flutter framework, Dart programming, and mobile app development.',
      icon: BookOpen,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Web Development Training',
      institution: 'Professional Development',
      year: '2021',
      description: 'Advanced training in modern web development technologies, frameworks, and best practices.',
      icon: BookOpen,
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'Java Programming Masterclass',
      institution: 'Professional Development',
      year: '2021',
      description: 'Comprehensive Java programming course covering advanced concepts and enterprise development.',
      icon: BookOpen,
      color: 'from-red-500 to-pink-500'
    },
    {
      title: 'Python Programming Masterclass',
      institution: 'Professional Development', 
      year: '2021',
      description: 'In-depth Python programming training including web development and data manipulation.',
      icon: BookOpen,
      color: 'from-purple-500 to-indigo-500'
    }
  ];

  return (
    <section id="education" className="py-20">
      <div className="max-w-7xl mx-auto section-padding">
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-block mb-4">
            <span className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium">
              Academic Journey
            </span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Education & <span className="gradient-text">Certifications</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Building expertise through formal education and continuous professional development
          </p>
        </div>

        {/* Education Section */}
        <div className="mb-16">
          <div className="bg-card border border-border rounded-2xl p-8 hover-lift animate-scale-in">
            <div className="grid lg:grid-cols-3 gap-8">
              <div className="lg:col-span-1">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="p-3 bg-gradient-to-br from-primary to-cyan-400 rounded-xl text-white">
                    <GraduationCap size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">Formal Education</h3>
                    <p className="text-muted-foreground">University Degree</p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="text-2xl font-bold text-primary mb-1">{education.degree}</h4>
                    <p className="text-lg font-semibold text-muted-foreground mb-2">{education.specialization}</p>
                    <p className="text-lg font-medium">{education.institution}</p>
                  </div>
                  
                  <div className="flex items-center space-x-2 text-muted-foreground">
                    <Calendar size={16} />
                    <span>{education.period}</span>
                  </div>
                </div>
              </div>
              
              <div className="lg:col-span-2 space-y-6">
                <p className="text-muted-foreground text-lg">{education.description}</p>
                
                <div>
                  <h5 className="font-semibold mb-4">Key Coursework:</h5>
                  <div className="grid md:grid-cols-2 gap-3">
                    {education.coursework.map((course, index) => (
                      <div
                        key={course}
                        className="flex items-center space-x-2 p-3 bg-muted rounded-lg"
                      >
                        <span className="text-primary">•</span>
                        <span className="text-sm font-medium">{course}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Certifications Section */}
        <div>
          <h3 className="text-2xl font-bold mb-8 text-center">Professional Certifications</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => {
              const IconComponent = cert.icon;
              return (
                <div
                  key={cert.title}
                  className="bg-card border border-border rounded-2xl p-6 hover-lift animate-scale-in group"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className={`p-3 bg-gradient-to-br ${cert.color} rounded-xl text-white group-hover:scale-110 transition-transform duration-300`}>
                        <IconComponent size={20} />
                      </div>
                      <span className="text-primary font-bold text-lg">{cert.year}</span>
                    </div>
                    
                    <div>
                      <h4 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors">
                        {cert.title}
                      </h4>
                      <p className="text-sm text-primary font-medium mb-3">{cert.institution}</p>
                      <p className="text-sm text-muted-foreground">{cert.description}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Achievement Summary */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-primary/10 to-cyan-500/10 rounded-2xl p-8 border border-primary/20">
            <h3 className="text-2xl font-bold mb-6">Academic Achievements</h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">BSc</div>
                <div className="text-muted-foreground">Information Technology</div>
                <div className="text-sm text-muted-foreground">Software Engineering</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">5+</div>
                <div className="text-muted-foreground">Certifications</div>
                <div className="text-sm text-muted-foreground">Professional Development</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">2022</div>
                <div className="text-muted-foreground">Excellence Award</div>
                <div className="text-sm text-muted-foreground">Outstanding Performance</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
