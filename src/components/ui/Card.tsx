import { ReactNode } from 'react'
import { motion } from 'framer-motion'

interface CardProps {
  children: ReactNode
  className?: string
  hover?: boolean
  onClick?: () => void
}

export function Card({ children, className = '', hover = true, onClick }: CardProps) {
  return (
    <motion.div
      className={`
        glass rounded-2xl p-6
        ${hover ? 'glass-hover card-lift cursor-pointer' : ''}
        ${className}
      `}
      onClick={onClick}
      whileHover={hover ? { y: -8 } : {}}
      transition={{ duration: 0.3, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  )
}

interface FeatureCardProps {
  icon: ReactNode
  title: string
  description: string
  accentColor?: 'blue' | 'green' | 'purple' | 'yellow'
}

export function FeatureCard({ icon, title, description, accentColor = 'blue' }: FeatureCardProps) {
  const accentClasses = {
    blue: 'bg-accent-blue/20 text-accent-blue group-hover:bg-accent-blue/30',
    green: 'bg-accent-green/20 text-accent-green group-hover:bg-accent-green/30',
    purple: 'bg-accent-purple/20 text-accent-purple group-hover:bg-accent-purple/30',
    yellow: 'bg-accent-yellow/20 text-accent-yellow group-hover:bg-accent-yellow/30',
  }

  return (
    <Card className="group">
      <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-colors ${accentClasses[accentColor]}`}>
        {icon}
      </div>
      <h3 className="text-lg font-semibold text-white mb-2">{title}</h3>
      <p className="text-foreground-secondary">{description}</p>
    </Card>
  )
}
