import { Hero } from '../components/sections/Hero'
import { AIFeatures } from '../components/sections/AIFeatures'
import { PrivacyFeatures } from '../components/sections/PrivacyFeatures'
import { HowItWorks } from '../components/sections/HowItWorks'
import { DownloadSection } from '../components/sections/DownloadSection'

export default function Home() {
  return (
    <div>
      {/* Hero Section - First impression */}
      <Hero />

      {/* AI Features - Deep dive into AI capabilities */}
      <AIFeatures />

      {/* Privacy Features - Trust and security */}
      <PrivacyFeatures />

      {/* How It Works - Simple process explanation */}
      <HowItWorks />

      {/* Download Section - Get the app */}
      <DownloadSection />
    </div>
  )
}
