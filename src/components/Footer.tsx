import React from 'react'
import { profile } from '../data/profile'

const Footer: React.FC = () => (
  <footer className="footer">
    <div className="container" style={{display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: 12}}>
      <span>© {new Date().getFullYear()} {profile.name}. Все права защищены.</span>
    </div>
  </footer>
)

export default Footer