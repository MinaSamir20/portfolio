import React, { useEffect, useRef } from 'react'

const Skills = () => {
  const skillsRef = useRef(null)

  const backendSkills = [
    { name: '.NET Core', icon: 'fab fa-microsoft' },
    { name: 'C#', icon: 'fas fa-code' },
    { name: 'Web API', icon: 'fas fa-server' },
    { name: 'Microservices', icon: 'fas fa-network-wired' },
    { name: 'Entity Framework', icon: 'fas fa-database' }
  ]

  const frontendSkills = [
    { name: 'React', icon: 'fab fa-react' },
    { name: 'JavaScript (ES6+)', icon: 'fab fa-js' },
    { name: 'HTML5/CSS3', icon: 'fab fa-html5' },
    { name: 'TypeScript', icon: 'fab fa-js-square' },
    { name: 'SignalR', icon: 'fas fa-satellite-dish' }
  ]

  const databaseSkills = [
    { name: 'SQL Server', icon: 'fas fa-database' },
    { name: 'Stored Procedures', icon: 'fas fa-file-code' },
    { name: 'Optimization', icon: 'fas fa-tachometer-alt' },
    { name: 'EF Core', icon: 'fas fa-table' },
    { name: 'Dapper', icon: 'fas fa-bolt' }
  ]

  const toolsSkills = [
    { name: 'Azure DevOps', icon: 'fab fa-microsoft' },
    { name: 'Git', icon: 'fab fa-git-alt' },
    { name: 'Docker', icon: 'fab fa-docker' },
    { name: 'Azure Functions', icon: 'fas fa-cloud' },
    { name: 'Agile/Scrum', icon: 'fas fa-users-cog' }
  ]

  const SkillCard = ({ title, icon, skills }) => (
    <div className="tech-category-card">
      <div className="category-header">
        <div className="category-icon">
          <i className={icon}></i>
        </div>
        <h3>{title}</h3>
      </div>
      <div className="skills-grid-inner">
        {skills.map((skill, index) => (
          <div key={index} className="skill-pill">
            <i className={skill.icon}></i>
            <span>{skill.name}</span>
          </div>
        ))}
      </div>
    </div>
  )

  return (
    <section id="skills" className="skills fade-in" ref={skillsRef}>
      <div className="container">
        <h2 className="section-title">Technical Expertise</h2>
        <div className="skills-grid-container">
          <SkillCard
            title="Backend Development"
            icon="fas fa-server"
            skills={backendSkills}
          />
          <SkillCard
            title="Frontend Development"
            icon="fas fa-laptop-code"
            skills={frontendSkills}
          />
          <SkillCard
            title="Database Architecture"
            icon="fas fa-database"
            skills={databaseSkills}
          />
          <SkillCard
            title="DevOps & Tools"
            icon="fas fa-tools"
            skills={toolsSkills}
          />
        </div>
      </div>
    </section>
  )
}

export default Skills