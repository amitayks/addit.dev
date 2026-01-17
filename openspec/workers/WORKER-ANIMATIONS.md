# Worker: Animations & Transitions

## Priority: 5 (Polish phase)
## Estimated Complexity: Medium
## Dependencies: All other section workers

## Objective
Implement smooth, performant animations throughout the site using Framer Motion. Ensure animations are tasteful, enhance UX, and respect accessibility preferences.

## Animation Principles

1. **Subtle over flashy** - Animations should enhance, not distract
2. **Performant** - Use transform and opacity only (GPU accelerated)
3. **Accessible** - Respect prefers-reduced-motion
4. **Purposeful** - Every animation should have a reason

## Animation Types to Implement

### 1. Scroll-Triggered Reveals

#### Fade In Up (Most common)
```typescript
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' }
  }
};
```

#### Fade In (Simple)
```typescript
const fadeIn = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.5 }
  }
};
```

#### Scale In
```typescript
const scaleIn = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5 }
  }
};
```

### 2. Staggered Children
```typescript
const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};
```

### 3. Hover Effects

#### Lift Effect (Cards)
```typescript
whileHover={{ y: -8, transition: { duration: 0.3 } }}
```

#### Scale Effect (Buttons)
```typescript
whileHover={{ scale: 1.02 }}
whileTap={{ scale: 0.98 }}
```

#### Glow Effect (CSS)
```css
.card:hover {
  box-shadow: 0 0 30px rgba(59, 130, 246, 0.1);
}
```

### 4. Floating Animation (Hero mockups)
```typescript
const floatAnimation = {
  y: [0, -20, 0],
  transition: {
    duration: 6,
    repeat: Infinity,
    ease: 'easeInOut'
  }
};
```

## Files to Create/Modify

### src/lib/animations.ts
Export reusable animation variants:
```typescript
export const fadeInUp = { ... };
export const fadeIn = { ... };
export const scaleIn = { ... };
export const staggerContainer = { ... };
export const floatAnimation = { ... };
```

### src/hooks/useReducedMotion.ts
Custom hook to check reduced motion preference:
```typescript
import { useEffect, useState } from 'react';

export function useReducedMotion() {
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReducedMotion(mediaQuery.matches);

    const handler = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
    mediaQuery.addEventListener('change', handler);
    return () => mediaQuery.removeEventListener('change', handler);
  }, []);

  return reducedMotion;
}
```

### src/components/ui/AnimatedSection.tsx
Wrapper component for scroll-triggered animations:
```typescript
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { useReducedMotion } from '@/hooks/useReducedMotion';

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

export function AnimatedSection({ children, className, delay = 0 }: AnimatedSectionProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const reducedMotion = useReducedMotion();

  if (reducedMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.6, delay, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  );
}
```

### src/components/ui/AnimatedText.tsx
For headline/text reveal animations:
```typescript
export function AnimatedText({ children, delay = 0 }) {
  // Split text and animate each word/character
}
```

## Implementation Checklist

### Hero Section
- [ ] Badge fade in
- [ ] Headline fade in up (staggered words optional)
- [ ] Subtitle fade in up
- [ ] CTAs fade in up
- [ ] Mockups floating animation

### Social Proof Section
- [ ] Headline fade in
- [ ] Stats/logos staggered fade in
- [ ] Optional: count-up animation for stats

### Feature Cards
- [ ] Container fade in
- [ ] Cards staggered fade in
- [ ] Card hover lift effect

### Feature Sections
- [ ] Label fade in
- [ ] Headline fade in up
- [ ] Description fade in up
- [ ] Visual slide in from side

### How It Works
- [ ] Steps staggered reveal
- [ ] Connecting lines draw animation (optional)

### CTA Section
- [ ] Headline fade in
- [ ] Buttons fade in up

### Header
- [ ] Background opacity on scroll
- [ ] Logo and links subtle appear

## Performance Guidelines

1. **Use `will-change` sparingly**
   ```css
   .animated-element { will-change: transform, opacity; }
   ```

2. **Avoid layout animations**
   - Don't animate width, height, top, left
   - Use transform: translate() instead

3. **Use `once: true` for scroll triggers**
   - Prevents re-animation on scroll up

4. **Throttle scroll handlers**
   - If using custom scroll logic, throttle to 60fps

5. **Test on low-end devices**
   - Disable animations if performance suffers

## Accessibility

### Reduced Motion
Always wrap animations:
```typescript
const variants = useReducedMotion() ? {} : fadeInUp;
```

### Focus States
Ensure animated elements have visible focus:
```css
.button:focus-visible {
  outline: 2px solid var(--accent-blue);
  outline-offset: 2px;
}
```

## Testing Checklist
- [ ] All scroll animations trigger correctly
- [ ] Animations don't replay on scroll up
- [ ] Hover effects work smoothly
- [ ] No jank or stuttering
- [ ] Works with prefers-reduced-motion enabled
- [ ] Performance is good on mobile devices
- [ ] No cumulative layout shift (CLS)
