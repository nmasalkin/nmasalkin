import React from 'react'
import Section from '../components/Section'
import Card from '../components/Card'

type Project = {
  title: string
  description: string
  stack: string[]
  link?: string
  source?: string
}

const projects: Project[] = [
  {
    title: 'Pocket Health — мобильное приложение',
    description: 'Разработал интерфейс и дизайн командного проекта: архитектура фронтенда, маршрутизация, интеграция с backend и адаптивный UI.',
    stack: ['Flutter', 'Dart', 'REST API', 'UI/UX'],
    source: 'https://github.com/Pocket-Health/frontend_development'
  },
  {
    title: 'StudyTrack — Telegram-бот для студентов',
    description: 'Бот для просмотра оценок через систему БРС и получения уведомлений о новых результатах прямо в Telegram.',
    stack: ['Java', 'Spring Boot', 'Telegram Bot API', 'Docker', 'PostgreSQL'],
    source: 'https://github.com/nmasalkin/StudyTrack'
  }
]

const Projects: React.FC = () => (
  <Section id="projects" title="Проекты" subtitle="Мои проекты и реализованные решения">
    <div className="grid cards">
      {projects.map((p, idx) => (
        <Card key={idx}>
          <div style={{display:'flex', justifyContent:'space-between', gap: 12, flexWrap:'wrap'}}>
            <strong>{p.title}</strong>
            <div className="badge">{p.stack.join(' • ')}</div>
          </div>
          <p style={{marginTop: 10, color: 'var(--muted)'}}>{p.description}</p>
          <div style={{marginTop: 12, display:'flex', gap: 10, flexWrap:'wrap'}}>
            {p.link && <a className="button secondary" href={p.link} target="_blank" rel="noreferrer">Демо</a>}
            {p.source && <a className="button secondary" href={p.source} target="_blank" rel="noreferrer">GitHub</a>}
          </div>
        </Card>
      ))}
    </div>
  </Section>
)

export default Projects