import React from 'react'

export default function Hero() {
  return (
    <section className="hero-section">
      <div className="container">
        <div className="hero-card">
          <span className="hero-tag">Formula 1 Championship</span>
          <h1 className="hero-title">FORMULA 1</h1>
          <p className="hero-copy">
            The pinnacle of motorsport, where speed, strategy and precision meet on the world stage.
          </p>
          <div className="hero-actions">
            <a href="#" className="button-primary">
              Watch Live
            </a>
            <a href="#standings" className="button-secondary">
              Driver Standings
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
