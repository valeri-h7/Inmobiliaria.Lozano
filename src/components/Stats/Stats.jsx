import { stats } from '../../data/properties.js'
import './Stats.css'

function Stats() {
  return (
    <section className="stats">
      <div className="container stats__grid">
        {stats.map((stat) => (
          <div key={stat.id} className="stats__item">
            <span className="stats__value">
              {stat.value}{stat.suffix}
            </span>
            <span className="stats__label">{stat.label}</span>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Stats
