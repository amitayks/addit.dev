import { motion } from 'framer-motion'
import { Star, Shield, Smartphone, Download, Check, Zap, Users, ExternalLink, Apple, Play } from 'lucide-react'
import { Container } from '../ui/Container'
import { SectionLabel } from '../ui/SectionLabel'
import { fadeInUp, staggerContainer } from '../../lib/animations'
import { AppMockup } from './AppMockup'

// Stats component
const stats = [
  { value: '4.9', label: 'App Store Rating', icon: Star },
  { value: '50K+', label: 'Downloads', icon: Download },
  { value: '99.9%', label: 'Uptime', icon: Zap },
]

// Features list for download section
const downloadFeatures = [
  'Record calls with one tap',
  'Instant AI transcription',
  'Auto-extract calendar events',
  'Privacy-first design',
  'Works offline',
  'No account required',
]

export function DownloadSection() {
  return (
    <section id="download" className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-accent-blue/5 to-background" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent-blue/10 rounded-full blur-[120px] pointer-events-none" />

      <Container className="relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Content */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div variants={fadeInUp}>
              <SectionLabel color="blue">Download</SectionLabel>
            </motion.div>

            <motion.h2
              variants={fadeInUp}
              className="text-4xl sm:text-5xl font-bold text-white mt-4 mb-6"
            >
              Get Addit for{' '}
              <span className="gradient-text">Free</span>
            </motion.h2>

            <motion.p
              variants={fadeInUp}
              className="text-lg text-foreground-secondary mb-8 max-w-lg"
            >
              Start recording and transcribing your calls today. Available on iOS and Android with all features included.
            </motion.p>

            {/* Closed Testing Notice */}
            <motion.div
              variants={fadeInUp}
              className="mb-8 p-4 rounded-xl bg-accent-yellow/10 border border-accent-yellow/20"
            >
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-lg bg-accent-yellow/20 flex items-center justify-center flex-shrink-0">
                  <Users size={20} className="text-accent-yellow" />
                </div>
                <div>
                  <h4 className="text-white font-medium mb-1">Closed Testing Program</h4>
                  <p className="text-sm text-foreground-secondary mb-3">
                    Addit is currently in closed testing. To get access:
                  </p>
                  <ol className="text-sm text-foreground-secondary space-y-2 list-decimal list-inside">
                    <li>
                      <a
                        href="https://groups.google.com/u/5/g/addit-dev"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-accent-blue hover:text-accent-blue/80 inline-flex items-center gap-1"
                      >
                        Join our Google Group
                        <ExternalLink size={12} />
                      </a>
                    </li>
                    <li>Click the <span className="text-white font-medium">"Become a Tester"</span> link in the first message</li>
                    <li>Download the app from Google Play</li>
                  </ol>
                </div>
              </div>
            </motion.div>

            {/* Download buttons */}
            <motion.div
              variants={fadeInUp}
              className="flex flex-col sm:flex-row gap-4 mb-10"
            >
              <a
                href="https://apps.apple.com/app/addit"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-6 py-4 bg-white text-background rounded-xl font-medium hover:bg-gray-100 transition-all hover:scale-105 w-full sm:w-auto justify-center"
              >
                <Apple size={24} />
                <div className="text-left">
                  <p className="text-xs text-gray-600">Download on the</p>
                  <p className="text-lg font-semibold -mt-1">App Store</p>
                </div>
              </a>
              <a
                href="https://play.google.com/store/apps/details?id=com.keisar.addit"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-6 py-4 bg-white text-background rounded-xl font-medium hover:bg-gray-100 transition-all hover:scale-105 w-full sm:w-auto justify-center"
              >
                <Play size={24} fill="currentColor" />
                <div className="text-left">
                  <p className="text-xs text-gray-600">Get it on</p>
                  <p className="text-lg font-semibold -mt-1">Google Play</p>
                </div>
              </a>
            </motion.div>

            {/* Features checklist */}
            <motion.div
              variants={fadeInUp}
              className="grid grid-cols-2 gap-3"
            >
              {downloadFeatures.map((feature, index) => (
                <div key={index} className="flex items-center gap-2">
                  <div className="w-5 h-5 rounded-full bg-accent-green/20 flex items-center justify-center flex-shrink-0">
                    <Check size={12} className="text-accent-green" />
                  </div>
                  <span className="text-sm text-foreground-secondary">{feature}</span>
                </div>
              ))}
            </motion.div>

            {/* Trust badges */}
            <motion.div
              variants={fadeInUp}
              className="flex items-center gap-6 mt-10 pt-8 border-t border-white/10"
            >
              <div className="flex items-center gap-2">
                <Shield size={20} className="text-accent-green" />
                <span className="text-sm text-foreground-secondary">End-to-end encrypted</span>
              </div>
              <div className="flex items-center gap-2">
                <Smartphone size={20} className="text-accent-blue" />
                <span className="text-sm text-foreground-secondary">iOS 15+ / Android 10+</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right side - App mockup */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            {/* Stats floating cards */}
            <div className="absolute -left-8 top-1/4 z-20">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="glass rounded-xl p-4 shadow-xl"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-accent-yellow/20 flex items-center justify-center">
                    <Star size={20} className="text-accent-yellow" />
                  </div>
                  <div>
                    <p className="text-xl font-bold text-white">4.9</p>
                    <p className="text-xs text-foreground-muted">App Store</p>
                  </div>
                </div>
              </motion.div>
            </div>

            <div className="absolute -right-4 bottom-1/4 z-20">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 }}
                className="glass rounded-xl p-4 shadow-xl"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-accent-green/20 flex items-center justify-center">
                    <Download size={20} className="text-accent-green" />
                  </div>
                  <div>
                    <p className="text-xl font-bold text-white">50K+</p>
                    <p className="text-xs text-foreground-muted">Downloads</p>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Phone mockup */}
            <div className="relative z-10">
              <AppMockup />
            </div>

            {/* Glow effect behind phone */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-accent-blue/20 rounded-full blur-[80px] pointer-events-none" />
          </motion.div>
        </div>

        {/* Bottom stats bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-20 pt-12 border-t border-white/5"
        >
          <div className="grid grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <stat.icon size={20} className="text-accent-blue" />
                  <span className="text-3xl font-bold text-white">{stat.value}</span>
                </div>
                <p className="text-sm text-foreground-muted">{stat.label}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </Container>
    </section>
  )
}
