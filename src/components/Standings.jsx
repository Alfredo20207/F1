import React from 'react'

export default function Standings() {
  const drivers = [
    { position: 1, name: 'Max Verstappen', points: 120, team: 'Red Bull Racing' },
    { position: 2, name: 'Lando Norris', points: 110, team: 'McLaren' },
    { position: 3, name: 'Carlos Sainz', points: 95, team: 'Ferrari' },
    { position: 4, name: 'Lewis Hamilton', points: 85, team: 'Mercedes' },
    { position: 5, name: 'Charles Leclerc', points: 80, team: 'Ferrari' },
  ]

  return (
    <section id="standings" className="standings-section">
      <div className="container">
        <h2 className="section-title">
          Driver <span style={{ color: '#ef4444' }}>Standings</span>
        </h2>

        <div className="overflow-x-auto">
          <table className="standings-table">
            <thead>
              <tr>
                <th>Position</th>
                <th>Driver</th>
                <th>Team</th>
                <th className="text-right">Points</th>
              </tr>
            </thead>
            <tbody>
              {drivers.map(driver => (
                <tr key={driver.position}>
                  <td>
                    <span className="standings-position">{driver.position}</span>
                  </td>
                  <td>
                    <span className="standings-name">{driver.name}</span>
                  </td>
                  <td>
                    <span className="standings-team">{driver.team}</span>
                  </td>
                  <td className="text-right">
                    <span className="standings-position">{driver.points}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="standings-footer">
          <a href="#" className="standings-button">
            View Full Standings
          </a>
        </div>
      </div>
    </section>
  )
}
