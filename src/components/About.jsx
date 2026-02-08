import React from 'react'

const About = () => {
  const professionalSummary = {
    title: "Full-Stack Developer",
    experience: "4+ Years",
    location: "Alexandria, Egypt",
    status: "Available for Opportunities"
  }

  const expertise = [
    {
      icon: 'fa-server',
      category: 'Backend Development',
      skills: ['C#', 'ASP.NET Core', 'Web API', 'Entity Framework', 'SQL Server'],
      level: 95
    },
    {
      icon: 'fa-laptop-code',
      category: 'Frontend Development',
      skills: ['JavaScript', 'Next.js', 'React', 'HTML5/CSS3', 'Tailwind CSS', 'Bootstrap', 'Material UI'],
      level: 90
    },
    {
      icon: 'fa-cloud',
      category: 'Cloud & DevOps',
      skills: ['Azure', 'Docker', 'CI/CD', 'Git', 'Agile/Scrum'],
      level: 85
    },
    {
      icon: 'fa-tools',
      category: 'Tools & Technologies',
      skills: ['Visual Studio', 'VS Code', 'Postman', 'Vite'],
      level: 88
    }
  ]

  const achievements = [
    {
      icon: 'fa-trophy',
      title: 'TaxTech Innovation',
      description: 'Led development of E-receipt automation system processing 10K+ receipts/minute'
    },
    {
      icon: 'fa-chart-line',
      title: 'Performance Optimization',
      description: 'Reduced API response times by 60% through caching and query optimization'
    },
    {
      icon: 'fa-users',
      title: 'Team Leadership',
      description: 'Mentored 3 junior developers and led cross-functional teams of 5+ members'
    }
  ]

  return (
    <section id="about" className="about fade-in">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        
        {/* Professional Summary Card */}
        <div className="about-summary-card">
          <div className="summary-header">
            <div className="summary-avatar">
              <img src="/assets/images/unnamed.png" alt="Mina Samir" />
            </div>
            <div className="summary-info">
              <h3>Mina Samir</h3>
              <p className="summary-title">{professionalSummary.title}</p>
              <div className="summary-meta">
                <span><i className="fas fa-briefcase"></i> {professionalSummary.experience}</span>
                <span><i className="fas fa-map-marker-alt"></i> {professionalSummary.location}</span>
                <span><i className="fas fa-circle text-success"></i> {professionalSummary.status}</span>
              </div>
            </div>
          </div>
          
          <div className="summary-description">
            <p>
              Passionate full-stack developer with expertise in building scalable enterprise applications 
              using .NET and React. I specialize in transforming complex business requirements into 
              elegant technical solutions that drive measurable business value.
            </p>
            <p>
              My experience spans from developing high-performance E-receipt automation systems to 
              architecting microservices-based inventory management platforms. I'm committed to writing 
              clean, maintainable code and implementing best practices in software architecture.
            </p>
          </div>
        </div>

        {/* Achievements Section */}
        <div className="about-achievements">
          <h3 className="achievements-title">Key Achievements</h3>
          <div className="achievements-grid">
            {achievements.map((achievement, index) => (
              <div key={index} className="achievement-card fade-in">
                <div className="achievement-icon">
                  <i className={`fas ${achievement.icon}`}></i>
                </div>
                <div className="achievement-content">
                  <h4>{achievement.title}</h4>
                  <p>{achievement.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="about-cta">
          <h3>Let's Build Something Amazing Together</h3>
          <p>I'm always interested in hearing about new opportunities and challenging projects.</p>
          <div className="cta-buttons">
            <a href="#contact" className="btn btn-primary">Get In Touch</a>
            <a href="https://drive.google.com/file/d/1anbD8uVfG_E-5CYWymCqIEpxnlFw9uyE/view?usp=drive_link" className="btn btn-outline" target="_blank" rel="noopener noreferrer">
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About