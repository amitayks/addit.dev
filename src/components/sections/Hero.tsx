import { motion } from 'framer-motion'
import { Sparkles, Download, ArrowRight } from 'lucide-react'
import { Container } from '../ui/Container'
import { Button } from '../ui/Button'
import { fadeInUp, staggerContainer } from '../../lib/animations'
import { PhoneMockup } from '../phone-mockup'

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-20">
      {/* Background effects */}
      <div className="absolute inset-0 bg-hero-gradient" />
      <div className="hero-glow top-0 left-1/2 -translate-x-1/2 -translate-y-1/2" />

      <Container className="relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Text content */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="text-center lg:text-left"
          >
            {/* Badge */}
            <motion.div variants={fadeInUp} className="mb-6">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-foreground-secondary">
                <Sparkles size={16} className="text-accent-blue" />
                AI-Powered Recording & Transcription
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              variants={fadeInUp}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight"
            >
              Never Miss a Detail From Your{' '}
              <span className="gradient-text">Conversations</span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              variants={fadeInUp}
              className="text-lg sm:text-xl text-foreground-secondary mb-8 max-w-xl mx-auto lg:mx-0"
            >
              Record calls and voice memos, get instant transcriptions, and let AI
              automatically extract calendar events, reminders, and contacts.
            </motion.p>

            {/* CTAs */}
            <motion.div
              variants={fadeInUp}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
            >
              <Button href="#download" variant="primary" size="lg">
                <Download size={20} />
                Download App
              </Button>
              <Button to="/features" variant="secondary" size="lg">
                Learn More
                <ArrowRight size={20} />
              </Button>
            </motion.div>
          </motion.div>

          {/* Animated phone mockup */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative flex justify-center lg:justify-end"
          >
            <div className="scale-[0.65] sm:scale-75 lg:scale-[0.85] origin-top">
              <PhoneMockup />
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  )
}
