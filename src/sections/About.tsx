import React from 'react'
import Section from '../components/Section'
import { profile } from '../data/profile'
import Card from '../components/Card'

const About: React.FC = () => (
  <Section id="about" title="Обо мне" subtitle="Коротко и по делу">
    <Card>
      <p style={{marginBottom: 12}}>{profile.about}</p>
      <p style={{color: 'var(--muted)'}}>Роли: {profile.roles.join(' • ')}</p>
    </Card>
  </Section>
)

export default About