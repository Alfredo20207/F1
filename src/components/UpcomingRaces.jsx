import React from 'react'

export default function UpcomingRaces() {
  const races = [
    {
      id: 1,
      name: 'Bahrain Grand Prix',
      circuit: 'Sakhir',
      date: 'Mar 16',
      flag: '🇧🇭'
    },
    {
      id: 2,
      name: 'Saudi Arabia Grand Prix',
      circuit: 'Jeddah',
      date: 'Mar 23',
      flag: '🇸🇦'
    },
    {
      id: 3,
      name: 'Australian Grand Prix',
      circuit: 'Melbourne',
      date: 'Mar 30',
      flag: '🇦🇺'
    },
    {
      id: 4,
      name: 'Japanese Grand Prix',
      circuit: 'Suzuka',
      date: 'Apr 13',
      flag: '🇯🇵'
    }
  ]

  return (
    <section id="races" className="races-section">
      <div className="container">
        <h2 className="section-title">
          Upcoming <span style={{ color: '#ef4444' }}>Races</span>
        </h2>

        <div className="race-grid">
          {races.map(race => (
            <article key={race.id} className="race-card">
              <div className="race-card-header">
                <div>
                  <h3 className="race-card-title">{race.name}</h3>
                  <p className="race-card-subtitle">{race.circuit}</p>
                </div>
                <span style={{ fontSize: '2.5rem', lineHeight: 1 }}>{race.flag}</span>
              </div>

              <div className="race-card-footer">
                <div>
                  <p className="race-date-label">Race Date</p>
                  <p className="race-date-value">{race.date}</p>
                </div>
                <a href="#" className="race-button">
                  Learn More
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
