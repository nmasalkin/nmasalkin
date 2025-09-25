import React from 'react'
import { motion } from 'framer-motion'
import { scaleIn } from '../utils/motion'

type Props = React.PropsWithChildren<{
  className?: string
  style?: React.CSSProperties
  onClick?: React.MouseEventHandler<HTMLDivElement>
  role?: string
  tabIndex?: number
}>

const Card: React.FC<Props> = ({ children, className, style, onClick, role, tabIndex }) => (
    <motion.div
        className={`card ${className ?? ''}`}
        style={style}
        onClick={onClick}
        role={role}
        tabIndex={tabIndex}
        variants={scaleIn}
        whileHover={{ y: -4, scale: 1.01 }}
        whileTap={{ scale: .99 }}
    >
      {children}
    </motion.div>
)

export default Card