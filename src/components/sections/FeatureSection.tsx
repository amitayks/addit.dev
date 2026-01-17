import { ReactNode, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Container } from '../ui/Container'
import { SectionLabel } from '../ui/SectionLabel'
import { Button } from '../ui/Button'
import { slideInLeft, slideInRight, staggerContainer } from '../../lib/animations'
import { ArrowRight } from 'lucide-react'

interface FeatureSectionProps {
  label: string
  labelColor: 'blue' | 'green' | 'yellow' | 'purple'
  headline: string
  description: string
  visual: ReactNode
  reversed?: boolean
  ctaText?: string
  ctaHref?: string
}

export function FeatureSection({
  label,
  labelColor,
  headline,
  description,
  visual,
  reversed = false,
  ctaText,
  ctaHref,
}: FeatureSectionProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section className="section-padding overflow-hidden">
      <Container>
        <motion.div
          ref={ref}
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className={`grid lg:grid-cols-2 gap-12 lg:gap-16 items-center ${
            reversed ? 'lg:flex-row-reverse' : ''
          }`}
        >
          {/* Text content */}
          <motion.div
            variants={reversed ? slideInRight : slideInLeft}
            className={reversed ? 'lg:order-2' : ''}
          >
            <SectionLabel color={labelColor}>{label}</SectionLabel>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mt-4 mb-6">
              {headline}
            </h2>
            <p className="text-foreground-secondary text-lg mb-6">
              {description}
            </p>
            {ctaText && ctaHref && (
              <Button href={ctaHref} variant="secondary">
                {ctaText}
                <ArrowRight size={16} />
              </Button>
            )}
          </motion.div>

          {/* Visual */}
          <motion.div
            variants={reversed ? slideInLeft : slideInRight}
            className={reversed ? 'lg:order-1' : ''}
          >
            {visual}
          </motion.div>
        </motion.div>
      </Container>
    </section>
  )
}
