import React, { useState, useEffect } from 'react'

const MoodIndicator = () => {
  const [currentMood, setCurrentMood] = useState('')
  const [moodEmoji, setMoodEmoji] = useState('')
  const [moodMessage, setMoodMessage] = useState('')

  const moods = [
    { name: 'Creative', emoji: '🎨', message: 'Building something amazing' },
    { name: 'Focused', emoji: '🎯', message: 'Deep in the zone' },
    { name: 'Learning', emoji: '📚', message: 'Expanding my knowledge' },
    { name: 'Coding', emoji: '💻', message: 'Writing clean code' },
    { name: 'Collaborating', emoji: '🤝', message: 'Working with great people' },
    { name: 'Innovating', emoji: '💡', message: 'Thinking outside the box' },
    { name: 'Debugging', emoji: '🔍', message: 'Finding and fixing issues' },
    { name: 'Designing', emoji: '✨', message: 'Creating beautiful experiences' }
  ]

  useEffect(() => {
    // Set initial mood
    const randomMood = moods[Math.floor(Math.random() * moods.length)]
    setCurrentMood(randomMood.name)
    setMoodEmoji(randomMood.emoji)
    setMoodMessage(randomMood.message)

    // Change mood every 30 seconds
    const moodInterval = setInterval(() => {
      const newMood = moods[Math.floor(Math.random() * moods.length)]
      setCurrentMood(newMood.name)
      setMoodEmoji(newMood.emoji)
      setMoodMessage(newMood.message)
    }, 30000)

    return () => clearInterval(moodInterval)
  }, [])

  return (
    <div className="mood-indicator">
      <div className="mood-content">
        <span className="mood-emoji">{moodEmoji}</span>
        <div className="mood-text">
          <span className="mood-label">Current Mood:</span>
          <span className="mood-name">{currentMood}</span>
        </div>
      </div>
      <div className="mood-message">{moodMessage}</div>
    </div>
  )
}

export default MoodIndicator