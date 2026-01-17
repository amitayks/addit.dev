import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import {
  Mic,
  FileText,
  Calendar,
  User,
  CheckCircle,
  Bell,
  Sparkles,
  Clock,
  Volume2,
  Pause,
} from 'lucide-react'

type MockupVariant = 'recording' | 'transcription' | 'extraction'

interface FeaturePhoneMockupProps {
  variant: MockupVariant
}

// Recording Screen - Shows active call recording with waveform
function RecordingScreen() {
  // Start at 5:42 (342 seconds) and count up
  const [seconds, setSeconds] = useState(342)

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
    <>
      {/* App header */}
      <div className="px-5 py-3 border-b border-white/5">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-accent-blue/20 flex items-center justify-center">
            <Mic className="text-accent-blue" size={18} />
          </div>
          <div>
            <h3 className="text-white font-semibold text-sm">Recording</h3>
            <p className="text-xs text-foreground-muted">Phone Call</p>
          </div>
          <div className="ml-auto flex items-center gap-1">
            <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
            <span className="text-xs text-red-400">LIVE</span>
          </div>
        </div>
      </div>

      {/* Caller info */}
      <div className="px-5 py-4 border-b border-white/5">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-accent-purple to-accent-blue flex items-center justify-center">
            <span className="text-white font-semibold">JD</span>
          </div>
          <div>
            <p className="text-white font-medium">John Davis</p>
            <p className="text-xs text-foreground-muted">+1 (555) 123-4567</p>
          </div>
        </div>
      </div>

      {/* Recording indicator */}
      <div className="px-5 py-6">
        <div className="text-center mb-4">
          <motion.div
            className="w-16 h-16 mx-auto rounded-full bg-red-500/20 flex items-center justify-center mb-3"
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <div className="w-10 h-10 rounded-full bg-red-500 flex items-center justify-center">
              <Mic className="text-white" size={20} />
            </div>
          </motion.div>
          <p className="text-white font-mono text-3xl">{formatTime(seconds)}</p>
          <p className="text-foreground-muted text-xs mt-1">Recording in progress</p>
        </div>

        {/* Waveform */}
        <div className="flex items-center justify-center gap-0.5 h-10 mb-4">
          {[...Array(24)].map((_, i) => (
            <motion.div
              key={i}
              className="w-1 bg-red-500 rounded-full"
              animate={{
                height: [6, Math.random() * 28 + 6, 6],
              }}
              transition={{
                duration: 0.4,
                repeat: Infinity,
                delay: i * 0.04,
              }}
            />
          ))}
        </div>

        {/* Controls */}
        <div className="flex items-center justify-center gap-6 mt-4">
          <button className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
            <Volume2 size={18} className="text-white" />
          </button>
          <button className="w-12 h-12 rounded-full bg-red-500 flex items-center justify-center">
            <Pause size={20} className="text-white" />
          </button>
          <button className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
            <Mic size={18} className="text-white" />
          </button>
        </div>
      </div>

      {/* Quality indicator */}
      <div className="px-5 py-3 border-t border-white/5 bg-background/50">
        <div className="flex items-center justify-between text-xs">
          <span className="text-foreground-muted">Quality</span>
          <div className="flex items-center gap-1">
            <div className="flex gap-0.5">
              {[1,2,3,4,5].map(i => (
                <div key={i} className={`w-1 h-3 rounded-full ${i <= 4 ? 'bg-accent-green' : 'bg-white/20'}`} />
              ))}
            </div>
            <span className="text-accent-green ml-1">Excellent</span>
          </div>
        </div>
      </div>
    </>
  )
}

// Transcription Screen - Shows live transcription with speaker labels
function TranscriptionScreen() {
  return (
    <>
      {/* App header */}
      <div className="px-5 py-3 border-b border-white/5">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-accent-green/20 flex items-center justify-center">
            <FileText className="text-accent-green" size={18} />
          </div>
          <div>
            <h3 className="text-white font-semibold text-sm">Transcription</h3>
            <p className="text-xs text-foreground-muted">Live Processing</p>
          </div>
          <div className="ml-auto">
            <motion.div
              className="flex items-center gap-1 px-2 py-1 rounded-full bg-accent-green/20"
              animate={{ opacity: [1, 0.5, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <Sparkles size={10} className="text-accent-green" />
              <span className="text-xs text-accent-green">AI Active</span>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Transcription content */}
      <div className="px-5 py-4 flex-1 overflow-hidden">
        <div className="space-y-4">
          {/* Speaker 1 */}
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 rounded-full bg-accent-blue flex items-center justify-center">
                <span className="text-white text-xs font-medium">Y</span>
              </div>
              <span className="text-xs text-accent-blue font-medium">You</span>
              <span className="text-xs text-foreground-muted">00:15</span>
            </div>
            <p className="text-sm text-foreground-secondary pl-7">
              We need to finalize the project timeline before Friday.
            </p>
          </div>

          {/* Speaker 2 */}
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 rounded-full bg-accent-purple flex items-center justify-center">
                <span className="text-white text-xs font-medium">J</span>
              </div>
              <span className="text-xs text-accent-purple font-medium">John</span>
              <span className="text-xs text-foreground-muted">00:28</span>
            </div>
            <p className="text-sm text-foreground-secondary pl-7">
              Agreed. I'll send the{' '}
              <span className="text-accent-yellow bg-accent-yellow/10 px-1 rounded">updated schedule</span>{' '}
              by tomorrow morning.
            </p>
          </div>

          {/* Speaker 1 typing indicator */}
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 rounded-full bg-accent-blue flex items-center justify-center">
                <span className="text-white text-xs font-medium">Y</span>
              </div>
              <span className="text-xs text-accent-blue font-medium">You</span>
              <span className="text-xs text-foreground-muted">00:42</span>
            </div>
            <div className="pl-7 flex items-center gap-1">
              <motion.span
                className="text-sm text-white"
                animate={{ opacity: [1, 0.5, 1] }}
                transition={{ duration: 0.8, repeat: Infinity }}
              >
                Perfect, let's also schedule a
              </motion.span>
              <motion.div
                className="w-1 h-4 bg-accent-blue"
                animate={{ opacity: [1, 0, 1] }}
                transition={{ duration: 0.5, repeat: Infinity }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Stats bar */}
      <div className="px-5 py-3 border-t border-white/5 bg-background/50">
        <div className="flex items-center justify-between text-xs">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1">
              <Clock size={12} className="text-foreground-muted" />
              <span className="text-foreground-secondary">2:34</span>
            </div>
            <div className="flex items-center gap-1">
              <FileText size={12} className="text-foreground-muted" />
              <span className="text-foreground-secondary">847 words</span>
            </div>
          </div>
          <div className="flex items-center gap-1">
            <CheckCircle size={12} className="text-accent-green" />
            <span className="text-accent-green">98% accurate</span>
          </div>
        </div>
      </div>
    </>
  )
}

// Extraction Screen - Shows AI-extracted items
function ExtractionScreen() {
  return (
    <>
      {/* App header */}
      <div className="px-5 py-3 border-b border-white/5">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-accent-yellow/20 flex items-center justify-center">
            <Sparkles className="text-accent-yellow" size={18} />
          </div>
          <div>
            <h3 className="text-white font-semibold text-sm">Smart Extraction</h3>
            <p className="text-xs text-foreground-muted">AI Insights</p>
          </div>
        </div>
      </div>

      {/* Extraction summary */}
      <div className="px-5 py-3 border-b border-white/5 bg-accent-yellow/5">
        <div className="flex items-center gap-2">
          <Sparkles size={14} className="text-accent-yellow" />
          <span className="text-xs text-foreground-secondary">
            Found <span className="text-white font-medium">5 items</span> in your conversation
          </span>
        </div>
      </div>

      {/* Extracted items */}
      <div className="px-5 py-4 space-y-3 flex-1">
        {/* Calendar Event */}
        <motion.div
          className="glass rounded-xl p-3"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.1 }}
        >
          <div className="flex items-start gap-3">
            <div className="w-8 h-8 rounded-lg bg-accent-yellow/20 flex items-center justify-center flex-shrink-0">
              <Calendar size={16} className="text-accent-yellow" />
            </div>
            <div className="flex-1">
              <div className="flex items-center justify-between">
                <span className="text-xs text-accent-yellow font-medium">CALENDAR EVENT</span>
                <CheckCircle size={14} className="text-accent-green" />
              </div>
              <p className="text-sm text-white mt-1">Project Review Meeting</p>
              <p className="text-xs text-foreground-muted mt-0.5">Friday, 3:00 PM</p>
            </div>
          </div>
        </motion.div>

        {/* Reminder */}
        <motion.div
          className="glass rounded-xl p-3"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
        >
          <div className="flex items-start gap-3">
            <div className="w-8 h-8 rounded-lg bg-accent-blue/20 flex items-center justify-center flex-shrink-0">
              <Bell size={16} className="text-accent-blue" />
            </div>
            <div className="flex-1">
              <div className="flex items-center justify-between">
                <span className="text-xs text-accent-blue font-medium">REMINDER</span>
                <CheckCircle size={14} className="text-accent-green" />
              </div>
              <p className="text-sm text-white mt-1">Send updated schedule</p>
              <p className="text-xs text-foreground-muted mt-0.5">Tomorrow morning</p>
            </div>
          </div>
        </motion.div>

        {/* Contact */}
        <motion.div
          className="glass rounded-xl p-3"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
        >
          <div className="flex items-start gap-3">
            <div className="w-8 h-8 rounded-lg bg-accent-purple/20 flex items-center justify-center flex-shrink-0">
              <User size={16} className="text-accent-purple" />
            </div>
            <div className="flex-1">
              <div className="flex items-center justify-between">
                <span className="text-xs text-accent-purple font-medium">CONTACT MENTIONED</span>
                <CheckCircle size={14} className="text-accent-green" />
              </div>
              <p className="text-sm text-white mt-1">John Davis</p>
              <p className="text-xs text-foreground-muted mt-0.5">From your contacts</p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Action bar */}
      <div className="px-5 py-3 border-t border-white/5 bg-background/50">
        <div className="flex gap-2">
          <button className="flex-1 py-2 rounded-lg bg-accent-yellow text-black text-xs font-medium">
            Add All to Calendar
          </button>
          <button className="flex-1 py-2 rounded-lg bg-white/10 text-white text-xs font-medium">
            Review Items
          </button>
        </div>
      </div>
    </>
  )
}

export function FeaturePhoneMockup({ variant }: FeaturePhoneMockupProps) {
  const renderScreen = () => {
    switch (variant) {
      case 'recording':
        return <RecordingScreen />
      case 'transcription':
        return <TranscriptionScreen />
      case 'extraction':
        return <ExtractionScreen />
    }
  }

  return (
    <div className="perspective-container">
      <motion.div
        className="relative"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        {/* Main phone mockup */}
        <div className="mockup-3d mx-auto max-w-[280px]">
          <div className="glass rounded-[2rem] p-1.5 shadow-2xl shadow-black/50">
            <div className="bg-background-secondary rounded-[1.75rem] overflow-hidden flex flex-col" style={{ minHeight: '480px' }}>
              {/* Status bar */}
              <div className="flex items-center justify-between px-5 py-2 text-xs text-foreground-secondary">
                <span>9:41</span>
                <div className="flex items-center gap-1">
                  <div className="w-4 h-2 border border-foreground-secondary rounded-sm">
                    <div className="w-3/4 h-full bg-accent-green rounded-sm" />
                  </div>
                </div>
              </div>

              {/* Screen content */}
              {renderScreen()}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}
