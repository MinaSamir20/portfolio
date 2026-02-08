import React from 'react'

const Projects = () => {
  const projects = [
    {
      title: 'EgyptMart (EdgeCome) — Full-Stack E-Commerce Platform',
      situation: 'EgyptMart (EdgeCome) needed a scalable e-commerce platform to support product browsing, cart management, order processing, and admin operations, while ensuring high performance and user retention.',
      task: 'Develop and enhance a full-stack e-commerce solution with optimized performance, responsive UI, and AI integration.',
      action: 'Refactored frontend and backend architecture, optimized SQL Server database structure and queries, integrated AI-assisted development tools (CopilotKit), built secure RESTful APIs using .NET Core, and implemented responsive UI with React + Tailwind CSS.',
      result: 'Increased user engagement and retention by 30%, reduced system response time by 20%, and improved code quality and development speed using AI tooling.',
      image: '/assets/images/egypt_mart.webp',
      tech: ['React.js', '.NET Core', 'REST APIs', 'SQL Server', 'Node.js', 'Tailwind CSS', 'CopilotKit'],
      demoUrl: 'https://egyptbigmart.com/',
      githubUrl: 'https://github.com/Miskasoft/EgyptMartAdminPortal'
    },
    {
      title: '3ayzDoctor — Healthcare Booking Platform',
      situation: 'Patients struggled to find and book appointments with doctors efficiently, while doctors lacked a streamlined way to manage their schedules and patient records.',
      task: 'Develop a comprehensive healthcare platform connecting patients with doctors, featuring appointment booking, search, and medical service management.',
      action: 'Developed core features for doctor listing, search, and appointment booking workflows. Improved API performance and reduced response time through backend optimization and query tuning. Enhanced UI responsiveness and accessibility using React + Tailwind CSS.',
      result: 'Faster booking flow and improved user experience. Reduced page load and API response times. Increased platform usability and booking completion rate.',
      image: '/assets/images/3ayz-doctor.png',
      tech: ['Angular', '.NET Core', 'REST APIs', 'SQL Server', 'Node.js', 'Tailwind CSS'],
      demoUrl: 'https://3ayzdoctor.com/site/',
      githubUrl: 'https://github.com/MinaSamir20/3ayzDoctorApp'
    },
    {
      title: 'TaxTech — Digital Tax & E-Receipt Management System',
      situation: 'TaxTech required a robust digital tax and e-receipt management system to handle high volumes of transactions and integrate seamlessly with governmental tax APIs (ETA).',
      task: 'Build a scalable solution for receipt submission, validation, and status tracking while ensuring data accuracy and system reliability.',
      action: 'Developed secure RESTful APIs using .NET Core, optimized SQL Server database with advanced stored procedures, implemented background processing for high-volume handling, and integrated with ETA APIs.',
      result: 'Enhanced system reliability and performance, ensured accurate tax data submission, and provided a stable integration with external tax authorities.',
      image: '/assets/images/TAX-TECH-04.jpg',
      tech: ['.NET Core', 'C#', 'SQL Server', 'REST APIs', 'JavaScript', 'ETA Integration'],
      demoUrl: '',
      githubUrl: 'https://github.com/shimaashaaban2/TaxTech_V5'
    },
    {
      title: 'Hasoub E-Commerce Platform',
      situation: 'Designed as a comprehensive simulation of a real-world online store to demonstrate full-stack .NET and React capabilities.',
      task: 'Develop a full-featured e-commerce platform supporting product management, cart operations, order processing, and user authentication.',
      action: 'Built core e-commerce modules, implemented ASP.NET Core Identity for authentication, designed RESTful APIs, and optimized SQL Server database schema with Entity Framework Core.',
      result: 'Delivered a production-style, scalable e-commerce system with clean architecture, demonstrating strong backend and API design skills.',
      image: '/assets/images/hasoub.jpg',
      tech: ['ASP.NET Core', 'C#', 'SQL Server', 'ADO.NET', 'REST APIs', 'JavaScript'],
      demoUrl: 'http://edgecome-001-site27.qtempurl.com/swagger/index.html',
      githubUrl: 'https://github.com/MinaSamir20/Hasoub_Ecommerce'
    }
  ]

  return (
    <section id="projects" className="projects fade-in">
      <div className="container">
        <h2 className="section-title">Featured Projects</h2>
        <div className="projects-container">
          {projects.map((project, index) => (
            <div key={index} className="project-card fade-in">
              <div className="project-image">
                <img src={project.image} alt={project.title} />
              </div>
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>

                <div className="project-story">
                  <div className="story-section">
                    <h4>The Problem</h4>
                    <p>{project.situation}</p>
                  </div>
                  <div className="story-section">
                    <h4>The Solution</h4>
                    <p>{project.action}</p>
                  </div>
                  <div className="story-section">
                    <h4>Results</h4>
                    <p>{project.result}</p>
                  </div>
                </div>

                <div className="project-tech">
                  <h4>Tech Stack</h4>
                  {project.tech.map((tech, techIndex) => (
                    <span key={techIndex} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="project-links">
                  <a href={project.demoUrl} target="_blank" rel="noopener noreferrer" className="project-link">
                    <i className="fas fa-external-link-alt"></i> Live Demo
                  </a>
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="project-link">
                    <i className="fab fa-github"></i> View Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects