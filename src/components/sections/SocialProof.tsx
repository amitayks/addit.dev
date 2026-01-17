import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Mic, FileText, Calendar } from 'lucide-react'
import { Container } from '../ui/Container'
import { fadeInUp, staggerContainer } from '../../lib/animations'

const stats = [
  { icon: Mic, value: '10,000+', label: 'Recordings', color: 'text-accent-blue' },
  { icon: FileText, value: '50,000+', label: 'Transcriptions', color: 'text-accent-green' },
  { icon: Calendar, value: '25,000+', label: 'Events Extracted', color: 'text-accent-yellow' },
]

export function SocialProof() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section className="py-20 border-y border-white/5">
      <Container>
        <motion.div
          ref={ref}
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="text-center"
        >
          <motion.p
            variants={fadeInUp}
            className="text-foreground-secondary mb-12 text-lg"
          >
            Trusted by professionals and developers worldwide
          </motion.p>

          <motion.div
            variants={staggerContainer}
            className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-4"
          >
            {stats.map((stat) => (
              <motion.div
                key={stat.label}
                variants={fadeInUp}
                className="flex flex-col items-center"
              >
                <div className={`w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mb-4 ${stat.color}`}>
                  <stat.icon size={24} />
                </div>
                <p className="text-3xl sm:text-4xl font-bold text-white mb-1">
                  {stat.value}
                </p>
                <p className="text-foreground-muted text-sm">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </Container>
    </section>
  )
}
