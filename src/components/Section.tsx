import React from 'react'
import { motion } from 'framer-motion'
import { container, fadeInUp } from '../utils/motion'

type Props = {
  id: string
  title: string
  subtitle?: string
  children: React.ReactNode
}

const Section: React.FC<Props> = ({ id, title, subtitle, children }) => {
  return (
    <section id={id} className="section">
      <div className="container">
        <motion.div variants={container} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }}>
          <motion.h2 className="section-title" variants={fadeInUp}>{title}</motion.h2>
          {subtitle && <motion.p className="section-sub" variants={fadeInUp}>{subtitle}</motion.p>}
          <motion.div variants={fadeInUp}>{children}</motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Section