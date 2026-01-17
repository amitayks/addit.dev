import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Mic, FileText, Calendar, User, CheckCircle } from 'lucide-react'

export function AppMockup() {
  // Start at 2:34 (154 seconds) and count up
  const [seconds, setSeconds] = useState(154)

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((prev) => prev + 1)
    }, 1000)
    return () => clearInterval(interval)
  }, [])

  // Format seconds as MM:SS
  const formatTime = (totalSeconds: number) => {
    const mins = Math.floor(totalSeconds / 60)
    const secs = totalSeconds % 60
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`
  }

  return (
    <div className="perspective-container">
      <motion.div
        className="relative"
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
      >
        {/* Main phone mockup */}
        <div className="mockup-3d mx-auto max-w-[320px]">
          <div className="glass rounded-[2.5rem] p-2 shadow-2xl shadow-black/50">
            <div className="bg-background-secondary rounded-[2rem] overflow-hidden">
              {/* Status bar */}
              <div className="flex items-center justify-between px-6 py-3 text-xs text-foreground-secondary">
                <span>9:41</span>
                <div className="flex items-center gap-1">
                  <div className="w-4 h-2 border border-foreground-secondary rounded-sm">
                    <div className="w-3/4 h-full bg-accent-green rounded-sm" />
                  </div>
                </div>
              </div>

              {/* App header */}
              <div className="px-6 py-4 border-b border-white/5">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-accent-blue/20 flex items-center justify-center">
                    <Mic className="text-accent-blue" size={20} />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold">Addit</h3>
                    <p className="text-xs text-foreground-muted">AI Recording</p>
                  </div>
                </div>
              </div>

              {/* Recording indicator */}
              <div className="px-6 py-6">
                <div className="text-center mb-6">
                  <motion.div
                    className="w-20 h-20 mx-auto rounded-full bg-red-500/20 flex items-center justify-center mb-4"
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <div className="w-12 h-12 rounded-full bg-red-500 flex items-center justify-center">
                      <Mic className="text-white" size={24} />
                    </div>
                  </motion.div>
                  <p className="text-white font-mono text-2xl">{formatTime(seconds)}</p>
                  <p className="text-foreground-muted text-sm mt-1">Recording...</p>
                </div>

                {/* Waveform */}
                <div className="flex items-center justify-center gap-1 h-12 mb-6">
                  {[...Array(20)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="w-1 bg-accent-blue rounded-full"
                      animate={{
                        height: [8, Math.random() * 32 + 8, 8],
                      }}
                      transition={{
                        duration: 0.5,
                        repeat: Infinity,
                        delay: i * 0.05,
                      }}
                    />
                  ))}
                </div>
              </div>

              {/* Transcription preview */}
              <div className="px-6 py-4 border-t border-white/5 bg-background/50">
                <div className="flex items-start gap-3 mb-3">
                  <FileText size={16} className="text-accent-blue mt-1 flex-shrink-0" />
                  <p className="text-sm text-foreground-secondary">
                    "Let's schedule a meeting for{' '}
                    <span className="text-accent-yellow">tomorrow at 3pm</span> with{' '}
                    <span className="text-accent-purple">John</span>..."
                  </p>
                </div>

                {/* Extracted items */}
                <div className="space-y-2 mt-4">
                  <div className="flex items-center gap-2 text-xs">
                    <div className="w-5 h-5 rounded bg-accent-green/20 flex items-center justify-center">
                      <Calendar size={12} className="text-accent-green" />
                    </div>
                    <span className="text-foreground-secondary">Calendar event detected</span>
                    <CheckCircle size={12} className="text-accent-green ml-auto" />
                  </div>
                  <div className="flex items-center gap-2 text-xs">
                    <div className="w-5 h-5 rounded bg-accent-purple/20 flex items-center justify-center">
                      <User size={12} className="text-accent-purple" />
                    </div>
                    <span className="text-foreground-secondary">Contact mentioned</span>
                    <CheckCircle size={12} className="text-accent-green ml-auto" />
                  </div>
                </div>
              </div>

              {/* Bottom padding */}
              <div className="h-6" />
            </div>
          </div>
        </div>

        {/* Floating elements */}
        <motion.div
          className="absolute -right-4 top-1/4 glass rounded-xl p-3 shadow-xl"
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        >
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-accent-green/20 flex items-center justify-center">
              <CheckCircle size={16} className="text-accent-green" />
            </div>
            <div>
              <p className="text-xs font-medium text-white">Transcribed</p>
              <p className="text-xs text-foreground-muted">2,847 words</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="absolute -left-4 bottom-1/4 glass rounded-xl p-3 shadow-xl"
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
        >
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-accent-yellow/20 flex items-center justify-center">
              <Calendar size={16} className="text-accent-yellow" />
            </div>
            <div>
              <p className="text-xs font-medium text-white">Event Created</p>
              <p className="text-xs text-foreground-muted">Tomorrow, 3:00 PM</p>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  )
}
