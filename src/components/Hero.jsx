import React, { useEffect, useState } from 'react'

const Hero = () => {
  const [text, setText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)
  const [loopNum, setLoopNum] = useState(0)
  const [typingSpeed, setTypingSpeed] = useState(150)

  const toRotate = ['Mina Samir', 'Full Stack Developer (.Net & React)']
  const period = 2000

  useEffect(() => {
    let ticker = setInterval(() => {
      tick()
    }, typingSpeed)

    return () => clearInterval(ticker)
  }, [text, isDeleting])

  const tick = () => {
    let i = loopNum % toRotate.length
    let fullText = toRotate[i]
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1)

    setText(updatedText)

    if (isDeleting) {
      setTypingSpeed(prev => prev / 2)
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true)
      setTypingSpeed(period)
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false)
      setLoopNum(loopNum + 1)
      setTypingSpeed(150)
    } else {
      // Restore normal speed after deleting or when typing
      if (isDeleting && text === fullText) return; // Special case handled above
      if (!isDeleting && typingSpeed !== 150) setTypingSpeed(150);
    }
  }

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  useEffect(() => {
    // Smooth fade out effect on scroll
    const handleScroll = () => {
      const scrolled = window.pageYOffset
      const hero = document.querySelector('.hero')
      const heroContent = document.querySelector('.hero-content')
      const heroImage = document.querySelector('.hero-image')

      if (hero && heroContent && heroImage) {
        // Calculate fade based on scroll position
        const fadePoint = 300 // Start fading at 300px
        const fadeComplete = 800 // Fully faded at 800px

        if (scrolled >= fadePoint) {
          const fadeProgress = Math.min((scrolled - fadePoint) / (fadeComplete - fadePoint), 1)

          // Fade out hero content with blur
          heroContent.style.opacity = 1 - fadeProgress
          heroContent.style.transform = `translateY(-${scrolled * 0.3}px) scale(${1 - fadeProgress * 0.1})`
          heroContent.style.filter = `blur(${fadeProgress * 2}px)`

          // Fade out hero image with blur
          heroImage.style.opacity = 1 - fadeProgress
          heroImage.style.transform = `translateY(-${scrolled * 0.2}px) scale(${1 - fadeProgress * 0.05})`
          heroImage.style.filter = `blur(${fadeProgress * 3}px)`

          // Scale down hero section
          hero.style.transform = `translateY(-${scrolled * 0.1}px) scale(${1 - fadeProgress * 0.02})`
          hero.style.filter = `blur(${fadeProgress * 0.5}px)`
        } else {
          // Reset before fade point
          heroContent.style.opacity = 1
          heroContent.style.transform = 'translateY(0) scale(1)'
          heroContent.style.filter = 'blur(0px)'
          heroImage.style.opacity = 1
          heroImage.style.transform = 'translateY(0) scale(1)'
          heroImage.style.filter = 'blur(0px)'
          hero.style.transform = 'translateY(0) scale(1)'
          hero.style.filter = 'blur(0px)'
        }
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <section id="home" className="hero abstract-bg">
      <div className="hero-container">
        <div className="hero-content hero-animate-left">
          <div className="hero-code-snippet hero-animate-up">
            <span className="code-line">
              <span className="code-keyword">const</span> <span className="code-def">developer</span> <span className="code-brace">=</span> <span className="code-brace">{'{'}</span>
            </span>
            <span className="code-line code-indent">
              name: <span className="code-string">'Mina'</span>,
            </span>
            <span className="code-line code-indent">
              stack: [<span className="code-string">'.NET'</span>, <span className="code-string">'React'</span>]
            </span>
            <span className="code-line">
              <span className="code-brace">{'}'}</span>;
            </span>
          </div>
          <h2 className="hero-title animate-blur-in">
            Hi, I'm <span className="hero-name">{text}</span>
          </h2>
          <p className="hero-description hero-animate-up hero-animate-delay-2" style={{ paddingLeft: '1rem' }}>
            Building scalable enterprise solutions and seamless user experiences.
            Passionate about clean architecture, performance optimization, and modern web technologies.
          </p>
          <div className="hero-buttons hero-animate-up hero-animate-delay-3">
            <button
              className="btn btn-primary btn-animate"
              onClick={() => scrollToSection('projects')}
            >
              <span>View Projects</span>
              <i className="fas fa-arrow-right" style={{ marginLeft: '0.5rem' }}></i>
            </button>
            <a
              href="https://drive.google.com/file/d/1anbD8uVfG_E-5CYWymCqIEpxnlFw9uyE/view?usp=drive_link"
              className="btn btn-outline btn-animate"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fas fa-download" style={{ marginRight: '0.5rem' }}></i>
              <span>Download Resume</span>
            </a>
          </div>
          <div className="hero-social hero-animate-up hero-animate-delay-4">
            <a href="https://github.com/MinaSamir20" target="_blank" rel="noopener noreferrer" className="social-link social-animate" aria-label="GitHub">
              <i className="fab fa-github"></i>
            </a>
            <a href="https://www.linkedin.com/in/mina-samir-9908a820b/" target="_blank" rel="noopener noreferrer" className="social-link social-animate social-animate-delay-1" aria-label="LinkedIn">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="https://www.facebook.com/mina.samir15" target="_blank" rel="noopener noreferrer" className="social-link social-animate social-animate-delay-2" aria-label="Twitter">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="https://wa.me/+201200197005" target="_blank" rel="noopener noreferrer" className="social-link social-animate social-animate-delay-3" aria-label="WhatsApp">
              <i className="fab fa-whatsapp"></i>
            </a>
          </div>
        </div>
        <div className="hero-image hero-animate-right">
          <div className="hero-avatar avatar-animate">
            {/* <div className="avatar-glow"></div> */}
            <img
              src="/assets/images/unnamed.png"
              alt="Mina Samir"
            />
            <div className="avatar-ring"></div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero