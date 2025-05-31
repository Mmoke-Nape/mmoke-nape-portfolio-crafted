
import React, { useState } from 'react';
import { Mail, Phone, Linkedin, Github } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Here you would typically send the form data to a backend service
    alert('Thank you for your message! I\'ll get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'napemmoke@gmail.com',
      href: 'mailto:napemmoke@gmail.com'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+27 62 673 3578',
      href: 'tel:+27626733578'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'Connect on LinkedIn',
      href: 'https://www.linkedin.com'
    },
    {
      icon: Github,
      label: 'GitHub',
      value: 'View my projects',
      href: 'https://github.com'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-card/50">
      <div className="max-w-7xl mx-auto section-padding">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Open to relocation and new opportunities. Let's discuss how we can work together.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="animate-fade-in-left">
            <div className="bg-card border border-border rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-6 text-primary">Send a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                    placeholder="Enter your name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                    placeholder="Enter your email"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors resize-none"
                    placeholder="Your message..."
                  />
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-3 px-6 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>

          {/* Contact Information */}
          <div className="animate-fade-in">
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold mb-6 text-primary">Contact Information</h3>
                <p className="text-muted-foreground mb-8 leading-relaxed">
                  I'm always interested in new opportunities and collaborations. 
                  Whether you have a project in mind or just want to connect, 
                  feel free to reach out through any of the channels below.
                </p>
              </div>

              <div className="space-y-6">
                {contactInfo.map((contact, index) => (
                  <a
                    key={contact.label}
                    href={contact.href}
                    target={contact.href.startsWith('http') ? '_blank' : undefined}
                    rel={contact.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="flex items-center space-x-4 p-4 bg-card border border-border rounded-lg hover-lift transition-all duration-300 group"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="bg-primary/10 p-3 rounded-lg group-hover:bg-primary/20 transition-colors">
                      <contact.icon className="text-primary" size={24} />
                    </div>
                    <div>
                      <div className="font-semibold text-foreground">{contact.label}</div>
                      <div className="text-muted-foreground group-hover:text-primary transition-colors">
                        {contact.value}
                      </div>
                    </div>
                  </a>
                ))}
              </div>

              {/* Location */}
              <div className="bg-card border border-border rounded-xl p-6 mt-8">
                <h4 className="text-lg font-semibold text-primary mb-3">Current Location</h4>
                <p className="text-foreground">Centurion, Gauteng, 2000</p>
                <p className="text-muted-foreground text-sm mt-2">Open to Relocation</p>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-16 pt-8 border-t border-border">
          <p className="text-muted-foreground">
            © 2024 Mmoke Nape. Built with React, TypeScript, and Tailwind CSS.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
