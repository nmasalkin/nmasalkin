import React from 'react'
import Section from '../components/Section'
import SkillTag from '../components/SkillTag'
import Card from '../components/Card'
import { profile } from '../data/profile'

const Skills: React.FC = () => (
  <Section id="skills" title="Навыки" subtitle="Технологии и инструменты">
    <div className="grid skills">
      {profile.skills.map((s) => (
        <SkillTag key={s} label={s} />
      ))}
    </div>
    <div style={{height: 16}} />
    <Card>
      <strong>Языки:</strong> {profile.languages.join(' • ')}
    </Card>
  </Section>
)

export default Skills