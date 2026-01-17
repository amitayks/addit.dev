import { motion } from 'framer-motion'
import { FileText, Wand2, CheckCircle } from 'lucide-react'
import { FeatureSection } from './FeatureSection'

function TranscriptionDemo() {
  return (
    <div className="glass rounded-2xl p-6 lg:p-8">
      {/* Demo header */}
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-xl bg-accent-blue/20 flex items-center justify-center">
          <FileText className="text-accent-blue" size={20} />
        </div>
        <div>
          <p className="text-white font-medium">Live Transcription</p>
          <p className="text-xs text-foreground-muted">Processing audio...</p>
        </div>
      </div>

      {/* Transcription content */}
      <div className="space-y-4 mb-6">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-foreground-secondary"
        >
          <span className="text-foreground-muted text-sm">00:15</span>
          <p className="mt-1">
            "I think we should schedule the{' '}
            <span className="text-accent-yellow bg-accent-yellow/10 px-1 rounded">
              product review meeting
            </span>{' '}
            for next Tuesday."
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-foreground-secondary"
        >
          <span className="text-foreground-muted text-sm">00:28</span>
          <p className="mt-1">
            "Make sure to invite{' '}
            <span className="text-accent-purple bg-accent-purple/10 px-1 rounded">
              Sarah
            </span>{' '}
            and{' '}
            <span className="text-accent-purple bg-accent-purple/10 px-1 rounded">
              Mike
            </span>{' '}
            from the design team."
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="text-foreground-secondary"
        >
          <span className="text-foreground-muted text-sm">00:42</span>
          <p className="mt-1">
            "Let's set a{' '}
            <span className="text-accent-green bg-accent-green/10 px-1 rounded">
              reminder for Friday
            </span>{' '}
            to prepare the presentation materials."
          </p>
        </motion.div>
      </div>

      {/* AI detected items */}
      <div className="border-t border-white/10 pt-4">
        <p className="text-sm text-foreground-muted mb-3 flex items-center gap-2">
          <Wand2 size={14} className="text-accent-blue" />
          AI Detected
        </p>
        <div className="flex flex-wrap gap-2">
          <span className="inline-flex items-center gap-1 text-xs px-2 py-1 rounded-full bg-accent-yellow/10 text-accent-yellow">
            <CheckCircle size={12} /> Calendar Event
          </span>
          <span className="inline-flex items-center gap-1 text-xs px-2 py-1 rounded-full bg-accent-purple/10 text-accent-purple">
            <CheckCircle size={12} /> 2 Contacts
          </span>
          <span className="inline-flex items-center gap-1 text-xs px-2 py-1 rounded-full bg-accent-green/10 text-accent-green">
            <CheckCircle size={12} /> Reminder
          </span>
        </div>
      </div>
    </div>
  )
}

export function AIFeatures() {
  return (
    <FeatureSection
      label="Artificial Intelligence"
      labelColor="blue"
      headline="AI-Powered Transcription"
      description="Transform your conversations into searchable text instantly. Our AI doesn't just transcribe—it understands context, identifies speakers, and extracts actionable items automatically."
      visual={<TranscriptionDemo />}
      ctaText="Learn more"
      ctaHref="/features"
    />
  )
}
