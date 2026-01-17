import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Download, Apple, Play } from 'lucide-react'
import { Container } from '../ui/Container'
import { fadeInUp, staggerContainer } from '../../lib/animations'

export function FinalCTA() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section className="section-padding" id="download">
      <Container size="md">
        <motion.div
          ref={ref}
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="text-center"
        >
          {/* Icon */}
          <motion.div
            variants={fadeInUp}
            className="w-20 h-20 mx-auto rounded-2xl bg-accent-blue/20 flex items-center justify-center mb-8"
          >
            <Download className="text-accent-blue" size={40} />
          </motion.div>

          {/* Headline */}
          <motion.h2
            variants={fadeInUp}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4"
          >
            Start Recording Smarter
          </motion.h2>

          {/* Subtitle */}
          <motion.p
            variants={fadeInUp}
            className="text-foreground-secondary text-lg mb-10 max-w-xl mx-auto"
          >
            Download Addit today and turn your conversations into actionable insights.
            Privacy-first, AI-powered, completely free to start.
          </motion.p>

          {/* Download buttons */}
          <motion.div
            variants={fadeInUp}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <a
              href="#"
              className="flex items-center gap-3 px-6 py-4 bg-white text-background rounded-xl font-medium hover:bg-gray-100 transition-colors w-full sm:w-auto justify-center"
            >
              <Apple size={24} />
              <div className="text-left">
                <p className="text-xs text-gray-600">Download on the</p>
                <p className="text-lg font-semibold -mt-1">App Store</p>
              </div>
            </a>

            <a
              href="#"
              className="flex items-center gap-3 px-6 py-4 bg-white text-background rounded-xl font-medium hover:bg-gray-100 transition-colors w-full sm:w-auto justify-center"
            >
              <Play size={24} fill="currentColor" />
              <div className="text-left">
                <p className="text-xs text-gray-600">Get it on</p>
                <p className="text-lg font-semibold -mt-1">Google Play</p>
              </div>
            </a>
          </motion.div>

          {/* Trust badge */}
          <motion.p
            variants={fadeInUp}
            className="text-foreground-muted text-sm mt-8"
          >
            Free to use. No credit card required. Your data stays on your device.
          </motion.p>
        </motion.div>
      </Container>
    </section>
  )
}
