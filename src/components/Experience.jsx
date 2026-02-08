import React from 'react'

const Experience = () => {
  const timeline = [
    {
      title: 'Full Stack (.NET & React) Developer',
      company: 'EdgeCome',
      period: 'Jan 2025 – Present',
      achievements: [
        'Built scalable full-stack web applications using React, .NET Core, SQL Server, Node.js, Tailwind CSS.',
        'Improved user retention by 30% through UX and performance enhancements.',
        'Optimized backend and database performance, achieving 20% faster system response.',
        'Developed and maintained secure RESTful APIs and integrated third-party services.',
        'Reduced deployment issues by 25% through CI/CD and code quality improvements.',
        'Worked in Agile teams, mentored junior developers, and used AI tools (CopilotKit) to boost productivity and code quality.'
      ]
    },
    {
      title: 'Full Stack Developer',
      company: 'ItSpark',
      period: 'Aug 2023 – Jan 2025',
      achievements: [
        'Developed full-stack features for Google Play Link Platform and collaborated in an Agile environment.',
        'Wrote unit tests and performed peer code reviews to maintain high code quality.',
        'Built responsive UI components and improved cross-device usability.',
        'Increased user satisfaction by 30% via A/B testing and iterative UI improvements.',
        'Contributed to performance optimization and feature scalability.'
      ]
    },
    {
      title: 'Full Stack Developer',
      company: 'EMIRALD Company',
      period: 'Sep 2022 – Aug 2023',
      achievements: [
        'Designed and developed scalable web applications across frontend and backend for internal web systems.',
        'Implemented performance-focused architecture and reusable components.',
        'Worked with modern web technologies (Angular / .NET stack).',
        'Collaborated with cross-functional teams to deliver production features.'
      ]
    },
    {
      title: 'Web Developer',
      company: 'Marina Platforms Company',
      period: 'Sep 2021 – Sep 2022',
      achievements: [
        'Built and maintained business web applications using Flutter (frontend) and Laravel (backend).',
        'Integrated third-party services such as payment gateways and reporting tools.',
        'Optimized application workflows and improved system reliability.',
        'Delivered solutions under tight deadlines while supporting business operations.'
      ]
    }
  ]

  return (
    <section id="experience" className="experience fade-in">
      <div className="container">
        <h2 className="section-title">Work Experience</h2>
        <div className="experience-timeline">
          {timeline.map((item, index) => (
            <div key={index} className="timeline-item fade-in">

              <div className="timeline-content">
                <h3>{item.title}</h3>
                <h4>{item.company}</h4>
                <span className="timeline-date">{item.period}</span>
                <ul className="timeline-description">
                  {item.achievements.map((achievement, achIndex) => (
                    <li key={achIndex}>{achievement}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience