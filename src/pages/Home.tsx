import { Link } from 'react-router-dom'
import {
  Mic,
  FileText,
  Calendar,
  Users,
  Search,
  Shield,
  Sparkles,
  Clock,
  ArrowRight,
  Download,
} from 'lucide-react'

const features = [
  {
    icon: Mic,
    title: 'Call Recording',
    description: 'Record phone calls and voice memos with a single tap.',
  },
  {
    icon: FileText,
    title: 'AI Transcription',
    description: 'Automatic speech-to-text powered by leading AI services.',
  },
  {
    icon: Calendar,
    title: 'Calendar Events',
    description: 'AI extracts dates and creates calendar events automatically.',
  },
  {
    icon: Users,
    title: 'Contact Detection',
    description: 'Identifies mentions of people and links to your contacts.',
  },
  {
    icon: Search,
    title: 'Smart Search',
    description: 'Search across all recordings and transcriptions instantly.',
  },
  {
    icon: Shield,
    title: 'Privacy First',
    description: 'All data stored locally on your device. Your keys, your data.',
  },
]

const steps = [
  {
    number: '01',
    title: 'Record',
    description: 'Tap to record calls or voice memos with crystal-clear quality.',
    icon: Mic,
  },
  {
    number: '02',
    title: 'Transcribe',
    description: 'AI automatically converts speech to searchable text.',
    icon: FileText,
  },
  {
    number: '03',
    title: 'Extract',
    description: 'Smart AI pulls out calendar events, reminders, and contacts.',
    icon: Sparkles,
  },
]

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 md:py-32">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-transparent" />
        <div className="max-w-6xl mx-auto px-4 sm:px-6 relative">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-gray-300 mb-6">
              <Sparkles size={16} className="text-primary" />
              AI-Powered Recording & Transcription
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Never Miss a Detail From Your{' '}
              <span className="gradient-text">Conversations</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Record calls and voice memos, get instant transcriptions, and let AI
              automatically extract calendar events, reminders, and contacts.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="#"
                className="flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-lg font-medium hover:bg-primary-600 transition-smooth"
              >
                <Download size={20} />
                Download App
              </a>
              <Link
                to="/features"
                className="flex items-center gap-2 px-6 py-3 glass rounded-lg font-medium text-white hover:bg-white/10 transition-smooth"
              >
                Learn More
                <ArrowRight size={20} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 md:py-32">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Everything You Need
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Addit combines powerful recording with intelligent AI to turn your
              conversations into actionable insights.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="glass rounded-xl p-6 hover:bg-white/10 transition-smooth group"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center mb-4 group-hover:bg-primary/30 transition-smooth">
                  <feature.icon className="text-primary" size={24} />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 md:py-32 bg-gradient-to-b from-transparent via-primary/5 to-transparent">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              How It Works
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Three simple steps to transform your conversations into organized,
              actionable information.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <div key={step.number} className="relative">
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-1/4 left-full w-full h-px bg-gradient-to-r from-primary/50 to-transparent z-0" />
                )}
                <div className="glass rounded-xl p-8 text-center relative z-10">
                  <div className="text-5xl font-bold text-primary/30 mb-4">
                    {step.number}
                  </div>
                  <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
                    <step.icon className="text-primary" size={32} />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {step.title}
                  </h3>
                  <p className="text-gray-400">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Privacy Highlight */}
      <section className="py-20 md:py-32">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="glass rounded-2xl p-8 md:p-12 flex flex-col md:flex-row items-center gap-8">
            <div className="w-20 h-20 rounded-2xl bg-success/20 flex items-center justify-center flex-shrink-0">
              <Shield className="text-success" size={40} />
            </div>
            <div className="text-center md:text-left flex-1">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
                Your Privacy, Protected
              </h2>
              <p className="text-gray-400 mb-4">
                All recordings and data stay on your device. You provide your own API
                keys for transcription services. We never see your data, and we never
                store it on our servers.
              </p>
              <Link
                to="/privacy"
                className="inline-flex items-center gap-2 text-primary hover:underline"
              >
                Read our Privacy Policy
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center">
            <Clock className="mx-auto text-primary mb-6" size={48} />
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-gray-400 max-w-xl mx-auto mb-8">
              Download Addit today and start turning your conversations into
              actionable insights.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="#"
                className="flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-lg font-medium hover:bg-primary-600 transition-smooth"
              >
                <Download size={20} />
                App Store
              </a>
              <a
                href="#"
                className="flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-lg font-medium hover:bg-primary-600 transition-smooth"
              >
                <Download size={20} />
                Google Play
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
