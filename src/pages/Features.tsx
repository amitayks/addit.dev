import { Link } from 'react-router-dom'
import {
  Mic,
  FileText,
  Calendar,
  Users,
  Search,
  Shield,
  Sparkles,
  Bell,
  HardDrive,
  Key,
  Globe,
  ArrowRight,
} from 'lucide-react'
import { TranscriptionMockup } from '../components/transcription-mockup'
import { SocialMockup } from '../components/social-mockup'
import { ActionsMockup } from '../components/actions-mockup'

const mainFeatures = [
  {
    icon: Mic,
    title: 'High-Quality Recording',
    description:
      'Record phone calls and voice memos in crystal-clear quality. Background recording continues even when you switch apps.',
    highlights: [
      'Call recording with caller ID',
      'Voice memo recording',
      'Background recording support',
      'Automatic file organization',
    ],
    mockupVariant: 'recording' as const,
  },
  {
    icon: FileText,
    title: 'AI-Powered Transcription',
    description:
      'Convert speech to text automatically using industry-leading AI services. Choose between Deepgram and Gladia for transcription.',
    highlights: [
      'Accurate speech-to-text',
      'Multiple language support',
      'Speaker identification',
      'Searchable transcripts',
    ],
    mockupVariant: 'transcription' as const,
  },
  {
    icon: Sparkles,
    title: 'Intelligent Extraction',
    description:
      'AI analyzes your transcriptions and automatically extracts actionable items like calendar events, reminders, and contact information.',
    highlights: [
      'Calendar event detection',
      'Reminder extraction',
      'Contact mention identification',
      'Action item highlighting',
    ],
    mockupVariant: 'extraction' as const,
  },
]

const additionalFeatures = [
  {
    icon: Calendar,
    title: 'Calendar Integration',
    description:
      'Create calendar events directly from extracted dates and meetings. One tap to add to your calendar.',
  },
  {
    icon: Users,
    title: 'Contact Recognition',
    description:
      'Identifies people mentioned in conversations and links them to your contacts for easy reference.',
  },
  {
    icon: Bell,
    title: 'Smart Reminders',
    description:
      'AI detects when you mention things you need to remember and helps you create reminders.',
  },
  {
    icon: Search,
    title: 'Universal Search',
    description:
      'Search across all your recordings and transcriptions. Find any conversation instantly.',
  },
  {
    icon: HardDrive,
    title: 'Local Storage',
    description:
      'All data stays on your device. No cloud storage, no servers, complete control.',
  },
  {
    icon: Key,
    title: 'Your API Keys',
    description:
      'Use your own API keys for transcription and AI services. You control your accounts and costs.',
  },
]

const privacyFeatures = [
  {
    icon: Shield,
    title: 'Device-Only Storage',
    description: 'All recordings, transcriptions, and data remain on your device.',
  },
  {
    icon: Key,
    title: 'Encrypted Keys',
    description: 'API keys stored securely in iOS Keychain or Android Keystore.',
  },
  {
    icon: Globe,
    title: 'Direct API Calls',
    description: 'Your data goes directly to transcription services, not through us.',
  },
]

export default function Features() {
  return (
    <div className="py-12">
      {/* Header */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 mb-20">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Powerful Features for{' '}
            <span className="gradient-text">Smart Recording</span>
          </h1>
          <p className="text-lg text-gray-400">
            Addit combines high-quality recording with AI-powered transcription and
            intelligent extraction to help you capture and act on every important detail.
          </p>
        </div>
      </section>

      {/* Main Features */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 mb-20">
        <div className="space-y-12">
          {mainFeatures.map((feature, index) => (
            <div
              key={feature.title}
              className={`flex flex-col ${
                index % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'
              } items-center gap-8 md:gap-12`}
            >
              <div className="flex-1">
                <div className="w-16 h-16 rounded-2xl bg-primary/20 flex items-center justify-center mb-6">
                  <feature.icon className="text-primary" size={32} />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                  {feature.title}
                </h2>
                <p className="text-gray-400 mb-6">{feature.description}</p>
                <ul className="space-y-3">
                  {feature.highlights.map((highlight) => (
                    <li key={highlight} className="flex items-center gap-3 text-gray-300">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex-1 w-full flex items-center justify-center">
                {index === 0 ? (
                  <TranscriptionMockup />
                ) : index === 1 ? (
                  <SocialMockup />
                ) : (
                  <ActionsMockup />
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Additional Features Grid */}
      <section className="py-20 bg-gradient-to-b from-transparent via-primary/5 to-transparent">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              More Capabilities
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Every feature designed to help you capture, organize, and act on your
              conversations.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {additionalFeatures.map((feature) => (
              <div
                key={feature.title}
                className="glass rounded-xl p-6 hover:bg-white/10 transition-smooth"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center mb-4">
                  <feature.icon className="text-primary" size={24} />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-400 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Privacy Section */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-20">
        <div className="glass rounded-2xl p-8 md:p-12">
          <div className="text-center mb-12">
            <div className="w-16 h-16 rounded-2xl bg-success/20 flex items-center justify-center mx-auto mb-6">
              <Shield className="text-success" size={32} />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Privacy by Design
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              We built Addit with privacy as a core principle. Your data is yours and
              stays with you.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {privacyFeatures.map((feature) => (
              <div key={feature.title} className="text-center">
                <div className="w-12 h-12 rounded-lg bg-success/10 flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="text-success" size={24} />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-400 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link
              to="/privacy"
              className="inline-flex items-center gap-2 text-primary hover:underline"
            >
              Read our Privacy Policy
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Supported Services */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 pb-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Powered By Leading AI
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Choose from top-tier transcription and AI services. Use your own API keys
            for complete control.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          <div className="glass rounded-xl p-6">
            <h3 className="text-lg font-semibold text-white mb-4">Transcription</h3>
            <ul className="space-y-3 text-gray-400">
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-primary" />
                Deepgram
              </li>
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-primary" />
                Gladia
              </li>
            </ul>
          </div>
          <div className="glass rounded-xl p-6">
            <h3 className="text-lg font-semibold text-white mb-4">AI Extraction</h3>
            <ul className="space-y-3 text-gray-400">
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-primary" />
                OpenAI (GPT)
              </li>
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-primary" />
                Google Gemini
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  )
}
