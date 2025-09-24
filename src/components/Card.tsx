import React from 'react'
import { motion } from 'framer-motion'
import { scaleIn } from '../utils/motion'

type Props = React.PropsWithChildren<{ className?: string }>

const Card: React.FC<Props> = ({ children, className }) => (
  <motion.div
    className={`card ${className ?? ''}`}
    variants={scaleIn}
    whileHover={{ y: -4, scale: 1.01 }}
    whileTap={{ scale: .99 }}
  >
    {children}
  </motion.div>
)

export default Card