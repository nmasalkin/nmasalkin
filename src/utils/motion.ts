import { Variants } from 'framer-motion'

export const container: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: .06 }
  }
}

export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: .6, ease: 'easeOut' } }
}

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: .96 },
  show: { opacity: 1, scale: 1, transition: { duration: .5, ease: 'easeOut' } }
}