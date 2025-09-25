import React from 'react'
import { motion } from 'framer-motion'
import { container, fadeInUp } from '../utils/motion'
import { profile } from '../data/profile'

const Hero: React.FC = () => {
  return (
    <header className="section" id="home" style={{paddingTop: 32}}>
      <div className="container">
        <motion.div className="hero" variants={container} initial="hidden" animate="show">
          <motion.div variants={fadeInUp}>
            <div className="badge" aria-label="Роль"><strong>{profile.title}</strong></div>
            <h1>{profile.name}</h1>
            <p className="lead">
              Backend-разработчик на Java. Стараюсь писать чистый и поддерживаемый код, уделяя внимание деталям
              реализации.
            </p>
            <div className="cta">
              <a className="button primary" href="/Масалкин%20Никита%20Сергеевич.pdf" download>📄 Скачать резюме (PDF)</a>
              <a className="button secondary" href="#contact">✉️ Связаться</a>
            </div>
          </motion.div>

          <motion.div className="card" variants={fadeInUp} style={{display:'grid', gap: 12}}>
            <div style={{display:'grid', gap: 8}}>
              <div><strong>Город:</strong> {profile.location}</div>
            </div>
            <div style={{display:'grid', gap: 8}}>
              <div><strong>Почта:</strong> <a href={`mailto:${profile.email}`}>{profile.email}</a></div>
              <div><strong>Телефон:</strong> <a href={`tel:${profile.phone.replace(/\s|\(|\)|-/g,'')}`}>{profile.phone}</a></div>
              <div><strong>Telegram:</strong> <a href={profile.telegram} target="_blank" rel="noreferrer">{profile.telegram.replace('https://','')}</a></div>
            </div>
            <div className="badge">Форматы: {profile.modes.join(' • ')}</div>
          </motion.div>
        </motion.div>
      </div>
    </header>
  )
}

export default Hero