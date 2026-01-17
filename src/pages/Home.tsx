import { Hero } from '../components/sections/Hero'
import { SocialProof } from '../components/sections/SocialProof'
import { FeatureCards } from '../components/sections/FeatureCards'
import { AIFeatures } from '../components/sections/AIFeatures'
import { PrivacyFeatures } from '../components/sections/PrivacyFeatures'
import { HowItWorks } from '../components/sections/HowItWorks'
import { FinalCTA } from '../components/sections/FinalCTA'

export default function Home() {
  return (
    <div>
      {/* Hero Section - First impression */}
      <Hero />

      {/* Social Proof - Build trust */}
      <SocialProof />

      {/* Feature Cards - Quick overview */}
      <FeatureCards />

      {/* AI Features - Deep dive into AI capabilities */}
      <AIFeatures />

      {/* Privacy Features - Trust and security */}
      <PrivacyFeatures />

      {/* How It Works - Simple process explanation */}
      <HowItWorks />

      {/* Final CTA - Drive conversions */}
      <FinalCTA />
    </div>
  )
}
