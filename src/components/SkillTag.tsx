import React from 'react'
import { motion } from 'framer-motion'

const SkillTag: React.FC<{ label: string }> = ({ label }) => (
  <motion.span
    className="badge"
    whileHover={{ scale: 1.06, y: -2 }}
    whileTap={{ scale: .98 }}
    transition={{ type: 'spring', stiffness: 300, damping: 20 }}
    style={{ justifyContent: 'center' }}
  >
    <span style={{
      width: 8, height: 8, borderRadius: 999,
      background: 'radial-gradient(circle at 30% 30%, var(--wood-1), var(--wood-3))'
    }} />
    {label}
  </motion.span>
)

export default SkillTag