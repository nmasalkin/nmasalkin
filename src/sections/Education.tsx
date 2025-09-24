import React from 'react'
import Section from '../components/Section'
import Card from '../components/Card'
import { profile } from '../data/profile'

const Education: React.FC = () => (
  <Section id="education" title="Образование" subtitle="Образование и профессиональная подготовка">
    <div className="grid cards">
      {profile.education.map((ed, idx) => (
        <Card key={idx}>
          <div style={{display:'flex', justifyContent: 'space-between', gap: 12, flexWrap: 'wrap'}}>
            <strong>{ed.institution}, {ed.city}</strong>
            <span className="badge">{ed.status} • {ed.gradYear}</span>
          </div>
          <div style={{marginTop: 8}}><em>{ed.faculty}</em></div>
          <p style={{marginTop: 10}}>{ed.program}</p>
        </Card>
      ))}
    </div>
  </Section>
)

export default Education