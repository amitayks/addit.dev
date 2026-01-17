import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Mic, FileText, Sparkles, ArrowRight } from 'lucide-react'
import { Container } from '../ui/Container'
import { fadeInUp, staggerContainer } from '../../lib/animations'

const steps = [
  {
    number: '01',
    title: 'Record',
    description: 'Tap to record calls or voice memos with crystal-clear quality.',
    icon: Mic,
    color: 'blue',
  },
  {
    number: '02',
    title: 'Transcribe',
    description: 'AI automatically converts speech to searchable, editable text.',
    icon: FileText,
    color: 'green',
  },
  {
    number: '03',
    title: 'Extract',
    description: 'Smart AI pulls out calendar events, reminders, and contacts.',
    icon: Sparkles,
    color: 'yellow',
  },
]

const colorClasses = {
  blue: {
    bg: 'bg-accent-blue/20',
    text: 'text-accent-blue',
    number: 'text-accent-blue/30',
  },
  green: {
    bg: 'bg-accent-green/20',
    text: 'text-accent-green',
    number: 'text-accent-green/30',
  },
  yellow: {
    bg: 'bg-accent-yellow/20',
    text: 'text-accent-yellow',
    number: 'text-accent-yellow/30',
  },
}

export function HowItWorks() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section className="section-padding bg-gradient-to-b from-transparent via-accent-blue/5 to-transparent">
      <Container>
        <motion.div
          ref={ref}
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          {/* Header */}
          <motion.div variants={fadeInUp} className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              How It Works
            </h2>
            <p className="text-foreground-secondary max-w-2xl mx-auto text-lg">
              Three simple steps to transform your conversations into organized,
              actionable information.
            </p>
          </motion.div>

          {/* Steps */}
          <motion.div
            variants={staggerContainer}
            className="grid md:grid-cols-3 gap-8"
          >
            {steps.map((step, index) => {
              const colors = colorClasses[step.color as keyof typeof colorClasses]
              return (
                <motion.div key={step.number} variants={fadeInUp} className="relative">
                  {/* Connector line */}
                  {index < steps.length - 1 && (
                    <div className="hidden md:flex absolute top-1/2 left-full w-full items-center justify-center z-0 -translate-y-1/2">
                      <ArrowRight className="text-white/20" size={24} />
                    </div>
                  )}

                  {/* Card */}
                  <div className="glass rounded-2xl p-8 text-center relative z-10 h-full">
                    <div className={`text-5xl font-bold mb-4 ${colors.number}`}>
                      {step.number}
                    </div>
                    <div className={`w-16 h-16 rounded-2xl ${colors.bg} flex items-center justify-center mx-auto mb-4`}>
                      <step.icon className={colors.text} size={32} />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-2">
                      {step.title}
                    </h3>
                    <p className="text-foreground-secondary">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              )
            })}
          </motion.div>
        </motion.div>
      </Container>
    </section>
  )
}
