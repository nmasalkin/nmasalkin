import React from 'react'
import Section from '../components/Section'
import Card from '../components/Card'
import { profile } from '../data/profile'

const Experience: React.FC = () => (
  <Section id="experience" title="Опыт" subtitle="Трудовой и проектный опыт">
    <div className="grid cards">
      {profile.experience.map((e, idx) => (
        <Card key={idx}>
          <div style={{display:'flex', justifyContent: 'space-between', gap: 12, flexWrap: 'wrap'}}>
            <strong>{e.company}</strong>
            <span className="badge">{e.period}</span>
          </div>
          <div style={{marginTop: 8}}><em>{e.role}</em></div>
          <p style={{marginTop: 10, color: 'var(--muted)'}}>{e.description}</p>
        </Card>
      ))}
    </div>
  </Section>
)

export default Experience