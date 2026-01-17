import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { FileText, Shield, Sparkles } from 'lucide-react'
import { Container } from '../ui/Container'
import { FeatureCard } from '../ui/Card'
import { fadeInUp, staggerContainer } from '../../lib/animations'

const features = [
  {
    icon: <FileText size={24} />,
    title: 'AI Transcription',
    description: 'Automatic speech-to-text powered by leading AI services. Get accurate transcriptions in seconds.',
    accentColor: 'blue' as const,
  },
  {
    icon: <Shield size={24} />,
    title: 'Privacy First',
    description: 'All data stored locally on your device. You provide your own API keys. We never see your data.',
    accentColor: 'purple' as const,
  },
  {
    icon: <Sparkles size={24} />,
    title: 'Smart Extraction',
    description: 'AI automatically extracts calendar events, reminders, and contact mentions from your conversations.',
    accentColor: 'green' as const,
  },
]

export function FeatureCards() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section className="section-padding">
      <Container>
        <motion.div
          ref={ref}
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          {/* Section header */}
          <motion.div variants={fadeInUp} className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Made for Modern Professionals
            </h2>
            <p className="text-foreground-secondary max-w-2xl mx-auto text-lg">
              Addit combines powerful recording with intelligent AI to turn your
              conversations into actionable insights.
            </p>
          </motion.div>

          {/* Cards grid */}
          <motion.div
            variants={staggerContainer}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {features.map((feature) => (
              <motion.div key={feature.title} variants={fadeInUp}>
                <FeatureCard
                  icon={feature.icon}
                  title={feature.title}
                  description={feature.description}
                  accentColor={feature.accentColor}
                />
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </Container>
    </section>
  )
}
