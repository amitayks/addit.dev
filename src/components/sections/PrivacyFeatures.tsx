import { Shield, Lock, Key, CloudOff, CheckCircle } from 'lucide-react'
import { FeatureSection } from './FeatureSection'

function PrivacyDemo() {
  return (
    <div className="glass rounded-2xl p-6 lg:p-8">
      {/* Device illustration */}
      <div className="relative">
        <div className="mx-auto w-48 h-48 rounded-3xl bg-background-secondary border border-white/10 flex items-center justify-center mb-6">
          <div className="text-center">
            <div className="w-16 h-16 mx-auto rounded-2xl bg-accent-purple/20 flex items-center justify-center mb-3">
              <Shield className="text-accent-purple" size={32} />
            </div>
            <p className="text-sm font-medium text-white">Your Device</p>
            <p className="text-xs text-foreground-muted">100% Local Storage</p>
          </div>
        </div>

        {/* Crossed cloud */}
        <div className="absolute top-4 right-4 w-12 h-12 rounded-full bg-red-500/10 flex items-center justify-center">
          <CloudOff className="text-red-400" size={20} />
        </div>
      </div>

      {/* Privacy features list */}
      <div className="space-y-3">
        <div className="flex items-center gap-3 p-3 rounded-xl bg-background/50">
          <div className="w-8 h-8 rounded-lg bg-accent-green/20 flex items-center justify-center flex-shrink-0">
            <Lock size={16} className="text-accent-green" />
          </div>
          <div className="flex-1">
            <p className="text-sm text-white">End-to-end encryption</p>
          </div>
          <CheckCircle size={16} className="text-accent-green" />
        </div>

        <div className="flex items-center gap-3 p-3 rounded-xl bg-background/50">
          <div className="w-8 h-8 rounded-lg bg-accent-green/20 flex items-center justify-center flex-shrink-0">
            <Key size={16} className="text-accent-green" />
          </div>
          <div className="flex-1">
            <p className="text-sm text-white">Your own API keys</p>
          </div>
          <CheckCircle size={16} className="text-accent-green" />
        </div>

        <div className="flex items-center gap-3 p-3 rounded-xl bg-background/50">
          <div className="w-8 h-8 rounded-lg bg-accent-green/20 flex items-center justify-center flex-shrink-0">
            <CloudOff size={16} className="text-accent-green" />
          </div>
          <div className="flex-1">
            <p className="text-sm text-white">No cloud storage</p>
          </div>
          <CheckCircle size={16} className="text-accent-green" />
        </div>
      </div>
    </div>
  )
}

export function PrivacyFeatures() {
  return (
    <FeatureSection
      label="Privacy & Security"
      labelColor="purple"
      headline="Your Data, Your Control"
      description="We believe your conversations are none of our business. All recordings and transcriptions stay on your device. You provide your own API keys for AI services—we never see, store, or have access to your data."
      visual={<PrivacyDemo />}
      reversed
      ctaText="Read our Privacy Policy"
      ctaHref="/privacy"
    />
  )
}
