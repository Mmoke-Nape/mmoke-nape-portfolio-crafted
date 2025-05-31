
import React from 'react';

const Education = () => {
  const education = {
    degree: 'Undergraduate BSc Information Technology',
    specialization: 'specialising in Software Engineering',
    institution: 'Eduvos (Pearson)',
    grade: '84.6%',
    subjects: [
      'Management and Application of Information Technology',
      'Information Systems Development Project',
      'Corporate Finance & Investment Management',
      'Insurance & Risk Management'
    ]
  };

  const certifications = [
    {
      title: 'Certificate of Excellence',
      year: '2022',
      description: 'Achieving an average above 75% with no modules below 70%. Actual average is 86.2%',
      highlight: true
    },
    {
      title: 'Web Development Training',
      year: '2021',
      description: 'Comprehensive training in modern web development technologies and practices'
    },
    {
      title: 'Java Programming Masterclass',
      year: '2021',
      description: 'Advanced Java programming concepts and application development'
    },
    {
      title: 'Python Programming Masterclass',
      year: '2021',
      description: 'Complete Python programming from basics to advanced concepts'
    },
    {
      title: 'Certified Flutter Developer',
      year: '2020',
      description: 'Accreditation by Academind by Maximilian and Udemy',
      provider: 'Academind & Udemy'
    }
  ];

  return (
    <section id="education" className="py-20">
      <div className="max-w-7xl mx-auto section-padding">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Education & <span className="gradient-text">Certifications</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Continuous learning and academic excellence in technology and software engineering
          </p>
        </div>

        {/* Education */}
        <div className="mb-16 animate-fade-in-left">
          <div className="bg-card border border-border rounded-xl p-8 hover-lift">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
              <div>
                <h3 className="text-2xl font-bold text-primary mb-2">{education.degree}</h3>
                <p className="text-xl text-foreground mb-2">{education.specialization}</p>
                <p className="text-lg text-muted-foreground">{education.institution}</p>
              </div>
              <div className="mt-4 lg:mt-0">
                <div className="bg-primary/10 border border-primary/20 rounded-lg px-6 py-4 text-center">
                  <div className="text-3xl font-bold text-primary mb-1">Grade: {education.grade}</div>
                  <div className="text-sm text-muted-foreground">Overall Average</div>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h4 className="text-lg font-semibold text-foreground mb-3">Key Subjects:</h4>
                {education.subjects.map((subject, index) => (
                  <div key={index} className="flex items-start space-x-3 mb-2">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-muted-foreground">{subject}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Certifications */}
        <div className="animate-fade-in">
          <h3 className="text-2xl font-bold mb-8 text-center">Professional Certifications</h3>
          <div className="grid lg:grid-cols-2 gap-6">
            {certifications.map((cert, index) => (
              <div
                key={cert.title}
                className={`border rounded-xl p-6 hover-lift transition-all duration-300 ${
                  cert.highlight 
                    ? 'bg-gradient-to-br from-primary/10 to-cyan-400/10 border-primary/30' 
                    : 'bg-card border-border'
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex justify-between items-start mb-3">
                  <h4 className={`text-lg font-semibold ${cert.highlight ? 'text-primary' : 'text-foreground'}`}>
                    {cert.title}
                  </h4>
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                    cert.highlight 
                      ? 'bg-primary/20 text-primary' 
                      : 'bg-muted text-muted-foreground'
                  }`}>
                    {cert.year}
                  </span>
                </div>
                
                <p className="text-muted-foreground mb-3">{cert.description}</p>
                
                {cert.provider && (
                  <p className="text-sm text-primary font-medium">By {cert.provider}</p>
                )}
                
                {cert.highlight && (
                  <div className="mt-4 flex items-center space-x-2">
                    <div className="w-3 h-3 bg-primary rounded-full animate-pulse"></div>
                    <span className="text-primary font-semibold text-sm">Excellence Award</span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
