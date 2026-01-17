# Worker: Social Proof Section

## Priority: 4 (Can run parallel with Features)
## Estimated Complexity: Low
## Dependencies: WORKER-DESIGN-SYSTEM

## Objective
Build a trust-building social proof section that establishes credibility. Since Addit may not have major customer logos yet, we'll design a flexible component that can show stats, testimonials, or placeholder content.

## Options for Social Proof

### Option A: Stats-Based (Recommended if no logos)
```
"Trusted by developers and professionals"

[Recording icon]    [Transcription icon]    [Event icon]
   10,000+              50,000+              25,000+
  Recordings          Transcriptions      Events Extracted
```

### Option B: Logo Grid (If we have partners)
```
"Powering productivity for teams everywhere"

[Logo 1]  [Logo 2]  [Logo 3]  [Logo 4]
```

### Option C: Testimonials
```
"What users are saying"

[Avatar] "Addit changed how I handle calls..." - Name, Title
```

## Files to Create

### src/components/sections/SocialProof.tsx

Main component that can render different variants:

```typescript
interface SocialProofProps {
  variant: 'stats' | 'logos' | 'testimonials';
}
```

### Stats Implementation
```typescript
const stats = [
  { icon: Mic, value: '10,000+', label: 'Recordings' },
  { icon: FileText, value: '50,000+', label: 'Transcriptions' },
  { icon: Calendar, value: '25,000+', label: 'Events Extracted' },
];
```

### Logos Implementation
```typescript
const logos = [
  { name: 'Company 1', src: '/logos/company1.svg' },
  // ...
];
```

### Design Specifications

**Stats Variant:**
- Centered headline in text-gray-400
- 3-column grid for stats
- Each stat has:
  - Icon (24px, text-gray-500)
  - Value (text-3xl, font-bold, white)
  - Label (text-sm, text-gray-400)
- Subtle dividers between stats (optional)

**Logos Variant:**
- Grayscale logos (filter: grayscale(100%))
- Opacity 60% by default, 100% on hover
- 4-6 logos in a row
- Responsive: wrap to 2 rows on mobile

**Animations:**
- Fade in on scroll
- Stats: count-up animation (optional enhancement)
- Logos: subtle fade-in stagger

## Layout

```
┌──────────────────────────────────────────────┐
│                                              │
│      "Trusted by developers worldwide"       │
│                                              │
│   ┌─────────┐ ┌─────────┐ ┌─────────┐       │
│   │  🎙️     │ │  📄     │ │  📅     │       │
│   │ 10,000+ │ │ 50,000+ │ │ 25,000+ │       │
│   │Recordings│ │Transcripts│ │ Events │       │
│   └─────────┘ └─────────┘ └─────────┘       │
│                                              │
└──────────────────────────────────────────────┘
```

## Acceptance Criteria
- [ ] Social proof section renders correctly
- [ ] Stats display with icons, values, and labels
- [ ] Section animates on scroll
- [ ] Layout is centered and balanced
- [ ] Responsive on all screen sizes
- [ ] Optional: Count-up animation for stats

## Implementation Notes

### Count-Up Animation (Optional Enhancement)
```typescript
import { useInView } from 'framer-motion';
import { useEffect, useState } from 'react';

function AnimatedCounter({ target }: { target: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      // Animate from 0 to target
      const duration = 2000;
      const steps = 60;
      const increment = target / steps;
      let current = 0;

      const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
          setCount(target);
          clearInterval(timer);
        } else {
          setCount(Math.floor(current));
        }
      }, duration / steps);

      return () => clearInterval(timer);
    }
  }, [isInView, target]);

  return <span ref={ref}>{count.toLocaleString()}+</span>;
}
```

## Testing
```bash
npm run dev
# Verify stats display correctly
# Check scroll animation triggers
# Test responsive layout
# Optional: verify count-up animation
```
