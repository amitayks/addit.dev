# Worker: Hero Section

## Priority: 2 (After Design System)
## Estimated Complexity: High
## Dependencies: WORKER-DESIGN-SYSTEM

## Objective
Build an impactful hero section that immediately communicates Addit's value proposition with animated text, gradient effects, and floating app mockups.

## Context
The hero is the first thing visitors see. It needs to:
1. Instantly communicate what Addit does (AI call recording)
2. Look premium and sophisticated
3. Drive downloads with clear CTAs

## Reference (Linear.app hero)
- Large bold headline with "purpose-built" messaging
- Subtle gray subtitle explaining the product
- Two CTAs: primary (white) and secondary (dark with border)
- Product mockups floating with 3D perspective below

## Files to Create

### src/components/sections/Hero.tsx

#### Content Structure:
```
Badge: "AI-Powered Recording & Transcription"
Headline: "Never Miss a Detail From Your Conversations"
  - "Conversations" should be gradient text
Subtitle: "Record calls and voice memos, get instant transcriptions, and let AI automatically extract calendar events, reminders, and contacts."
CTAs: "Download App" (primary) + "Learn More" (secondary)
Visual: Floating app mockups with 3D perspective
```

#### Animation Sequence:
1. Badge fades in (0ms delay)
2. Headline fades in from bottom (200ms delay)
3. Subtitle fades in from bottom (400ms delay)
4. CTAs fade in from bottom (600ms delay)
5. App mockups float continuously

#### Implementation Details:

**Framer Motion Variants:**
```typescript
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};
```

**3D Mockup Effect:**
```css
.hero-mockup {
  transform: perspective(1000px) rotateX(5deg) rotateY(-10deg);
  transition: transform 0.5s ease;
}
.hero-mockup:hover {
  transform: perspective(1000px) rotateX(2deg) rotateY(-5deg);
}
```

**Background Effects:**
- Subtle radial gradient from primary color (very low opacity)
- Optional: animated gradient blob in background

### src/components/sections/HeroMockup.tsx
Separate component for the floating app mockups:
- Accept image src as prop
- Apply 3D perspective transform
- Add floating animation
- Include glass-style shadow

## Responsive Behavior

### Desktop (1024px+)
- Text left-aligned, mockups right
- Large headline (text-5xl to text-6xl)
- Mockups at full size with perspective

### Tablet (768px - 1023px)
- Text centered
- Mockups below text, scaled down
- Reduced perspective effect

### Mobile (< 768px)
- Text centered
- Single mockup, smaller
- Stacked CTAs
- Reduced animations

## App Mockup Strategy
Since we may not have actual app screenshots yet:
1. Create placeholder mockup showing a dark app interface
2. Use CSS to create a fake "phone frame"
3. Show mock UI elements (recording indicator, waveform, transcript text)

### Placeholder Mockup Design:
```
┌─────────────────────┐
│  ●  Addit          │
├─────────────────────┤
│                     │
│    🎙 Recording    │
│    ════════════    │
│    0:42            │
│                     │
│ ─────────────────  │
│ "Hey, let's meet   │
│ tomorrow at 3pm"   │
│ ─────────────────  │
│                     │
│ 📅 Calendar Event  │
│ Tomorrow, 3:00 PM  │
│                     │
└─────────────────────┘
```

## Acceptance Criteria
- [ ] Hero renders with all text content
- [ ] Gradient text effect works on "Conversations"
- [ ] Animations play on page load
- [ ] Animations respect reduced-motion preference
- [ ] CTAs are clickable and styled correctly
- [ ] App mockups have 3D perspective effect
- [ ] Floating animation is smooth (60fps)
- [ ] Hero is fully responsive
- [ ] Background gradient/effects render

## Testing
```bash
npm run dev
# Check animation timing
# Test hover effects on mockups
# Verify responsive breakpoints
# Test with prefers-reduced-motion
```

## Performance Notes
- Use `will-change: transform` on animated elements
- Lazy load mockup images if they're heavy
- Keep animations to transform and opacity only
