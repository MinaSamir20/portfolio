import React, { useState, useEffect } from 'react'

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 500) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  return (
    <button
      className="back-to-top"
      onClick={scrollToTop}
      style={{
        position: 'fixed',
        bottom: '30px',
        right: '30px',
        background: 'linear-gradient(135deg, var(--accent), var(--accent-dark))',
        color: 'white',
        border: 'none',
        borderRadius: '50%',
        width: '50px',
        height: '50px',
        fontSize: '18px',
        cursor: 'pointer',
        opacity: isVisible ? '1' : '0',
        visibility: isVisible ? 'visible' : 'hidden',
        transition: 'all 0.3s ease',
        zIndex: 9999,
        boxShadow: '0 4px 6px var(--shadow)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}
      onMouseEnter={(e) => {
        e.target.style.transform = 'translateY(-3px)'
      }}
      onMouseLeave={(e) => {
        e.target.style.transform = 'translateY(0)'
      }}
    >
      <i className="fas fa-arrow-up"></i>
    </button>
  )
}

export default BackToTop