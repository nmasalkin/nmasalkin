import React from 'react'
import ThemeToggle from './ThemeToggle'
import { motion, AnimatePresence } from 'framer-motion'
import { container, fadeInUp } from '../utils/motion'

const links = [
  { href: '#about', label: 'Обо мне' },
  { href: '#skills', label: 'Навыки' },
  { href: '#experience', label: 'Опыт' },
  { href: '#education', label: 'Образование' },
  { href: '#projects', label: 'Проекты' },
  { href: '#contact', label: 'Контакты' },
]

const Nav: React.FC = () => {
  const [open, setOpen] = React.useState(false)
  const menuRef = React.useRef<HTMLDivElement | null>(null)
  const buttonRef = React.useRef<HTMLButtonElement | null>(null)

  const onLinkClick = () => setOpen(false)

  // закрытие по клику вне (игнорируем саму кнопку)
  React.useEffect(() => {
    const onDocClick = (e: MouseEvent) => {
      if (!open) return
      const target = e.target as Node
      if (buttonRef.current?.contains(target)) return // клик по кресту/бургеру — не трогаем
      if (menuRef.current && !menuRef.current.contains(target)) {
        setOpen(false)
      }
    }
    document.addEventListener('mousedown', onDocClick)
    return () => document.removeEventListener('mousedown', onDocClick)
  }, [open])

  // закрытие по Esc
  React.useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  return (
      <nav className="nav">
        <motion.div className="nav-inner" variants={container} initial="hidden" animate="show">
          {/* Бренд */}
          <motion.div className="brand badge" variants={fadeInUp}>
            <span>NMASALKIN</span>
          </motion.div>

          {/* Десктоп-меню */}
          <motion.div className="nav-links-desktop" variants={fadeInUp} aria-label="Основная навигация">
            {links.map((l) => (
                <a key={l.href} href={l.href} className="pill">{l.label}</a>
            ))}
          </motion.div>

          {/* Контролы */}
          <motion.div className="nav-controls" variants={fadeInUp}>
            <button
                ref={buttonRef}
                type="button"
                className={`menu-button ${open ? 'open' : ''}`}
                aria-label={open ? 'Закрыть меню' : 'Открыть меню'}
                aria-haspopup="menu"
                aria-expanded={open}
                aria-controls="mobile-menu"
                onClick={() => setOpen(v => !v)}
            >
              <span className="menu-bars" />
            </button>
            <ThemeToggle />
          </motion.div>
        </motion.div>

        {/* Мобильное выпадающее меню */}
        <AnimatePresence>
          {open && (
              <motion.div
                  ref={menuRef}
                  id="mobile-menu"
                  className="mobile-menu"
                  initial={{ opacity: 0, y: -8, scale: .98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -8, scale: .98 }}
                  transition={{ duration: .18, ease: 'easeOut' }}
              >
                {links.map((l) => (
                    <a key={l.href} href={l.href} className="mobile-item" onClick={onLinkClick}>
                      {l.label}
                    </a>
                ))}
              </motion.div>
          )}
        </AnimatePresence>
      </nav>
  )
}

export default Nav