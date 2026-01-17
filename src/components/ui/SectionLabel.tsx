import { ChevronRight } from 'lucide-react'

interface SectionLabelProps {
  children: string
  color?: 'blue' | 'green' | 'yellow' | 'purple'
  href?: string
}

const dotColors = {
  blue: 'bg-accent-blue',
  green: 'bg-accent-green',
  yellow: 'bg-accent-yellow',
  purple: 'bg-accent-purple',
}

export function SectionLabel({ children, color = 'blue', href }: SectionLabelProps) {
  const content = (
    <>
      <span className={`w-2 h-2 rounded-full ${dotColors[color]}`} />
      <span className="text-foreground-secondary text-sm font-medium">{children}</span>
      {href && <ChevronRight size={14} className="text-foreground-muted" />}
    </>
  )

  if (href) {
    return (
      <a
        href={href}
        className="inline-flex items-center gap-2 hover:text-white transition-colors"
      >
        {content}
      </a>
    )
  }

  return (
    <div className="inline-flex items-center gap-2">
      {content}
    </div>
  )
}
