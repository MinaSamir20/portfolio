import React, { useState } from 'react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const [notification, setNotification] = useState({ show: false, message: '', type: 'info' })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const showNotification = (message, type = 'info') => {
    setNotification({ show: true, message, type })
    setTimeout(() => {
      setNotification({ show: false, message: '', type: 'info' })
    }, 4000)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      showNotification('Please fill in all required fields', 'error')
      return
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(formData.email)) {
      showNotification('Please enter a valid email address', 'error')
      return
    }

    try {
      showNotification('Sending...', 'info')

      const response = await fetch("https://formsubmit.co/ajax/minasamir9749@gmail.com", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          _subject: formData.subject || `New message from ${formData.name}`,
          message: formData.message,
          _template: 'table' // Optional: Makes the email look nicer
        })
      });

      const result = await response.json();

      if (response.ok) {
        showNotification('Thank you for your message! I\'ll get back to you soon.', 'success')
        setFormData({ name: '', email: '', subject: '', message: '' })
      } else {
        showNotification('Something went wrong. Please try again.', 'error')
        console.error('Form submission error:', result)
      }
    } catch (error) {
      showNotification('Failed to send message. Please try again later.', 'error')
      console.error('Network error:', error)
    }
  }

  const contactInfo = [
    {
      icon: 'fa-envelope',
      label: 'minasamir9749@gmail.com',
      href: 'mailto:minasamir9749@gmail.com'
    },
    {
      icon: 'fab fa-whatsapp',
      label: '+201200197005',
      href: 'https://wa.me/+201200197005'
    }
  ]

  const socialLinks = [
    { name: 'GitHub', icon: 'fab fa-github', url: 'https://github.com/MinaSamir20' },
    { name: 'LinkedIn', icon: 'fab fa-linkedin', url: 'https://www.linkedin.com/in/mina-samir-9908a820b/' },
    { name: 'Facebook', icon: 'fab fa-facebook', url: 'https://www.facebook.com/mina.samir15' }
  ]

  return (
    <section id="contact" className="contact fade-in">
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>
        <div className="contact-container">
          <div className="contact-info">
            <h3>Let's Connect</h3>
            <p>
              I'm always interested in hearing about new projects and opportunities.
              Whether you have a question or just want to say hi, feel free to reach out!
            </p>
            <div className="contact-details">
              {contactInfo.map((item, index) => (
                <div key={index} className="contact-item">
                  <i className={`fas ${item.icon}`}></i>
                  {item.href ? (
                    <a href={item.href}>{item.label}</a>
                  ) : (
                    <span>{item.label}</span>
                  )}
                </div>
              ))}
            </div>
            <div className="contact-social">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  className="social-icon"
                  aria-label={social.name}
                >
                  <i className={social.icon}></i>
                </a>
              ))}
            </div>
          </div>
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                required
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email"
                required
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Subject"
              />
            </div>
            <div className="form-group">
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="5"
                placeholder="Your Message"
                required
              />
            </div>
            <div className="form-buttons">
              <button type="submit" className="btn btn-primary">Send Message</button>
              <a
                href="https://drive.google.com/file/d/1anbD8uVfG_E-5CYWymCqIEpxnlFw9uyE/view?usp=drive_link"
                className="btn btn-outline"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fas fa-download"></i> Download Resume
              </a>
            </div>
          </form>
        </div>
      </div>

      {/* Notification Component */}
      {notification.show && (
        <div
          className={`notification notification-${notification.type}`}
          style={{
            position: 'fixed',
            top: '100px',
            right: '20px',
            background: notification.type === 'error' ? '#ef4444' :
              notification.type === 'success' ? '#22c55e' : 'var(--accent)',
            color: 'white',
            padding: '1rem 1rem',
            borderRadius: '8px',
            boxShadow: '0 4px 12px var(--shadow)',
            zIndex: 10000,
            transform: 'translateX(0)',
            transition: 'transform 0.3s ease',
            maxWidth: '300px'
          }}
        >
          {notification.message}
        </div>
      )}
    </section>
  )
}

export default Contact