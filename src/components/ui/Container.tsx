import { ReactNode } from 'react'

interface ContainerProps {
  children: ReactNode
  className?: string
  size?: 'sm' | 'md' | 'lg' | 'xl'
}

const sizes = {
  sm: 'max-w-3xl',
  md: 'max-w-5xl',
  lg: 'max-w-6xl',
  xl: 'max-w-7xl',
}

export function Container({ children, className = '', size = 'lg' }: ContainerProps) {
  return (
    <div className={`${sizes[size]} mx-auto px-4 sm:px-6 ${className}`}>
      {children}
    </div>
  )
}
