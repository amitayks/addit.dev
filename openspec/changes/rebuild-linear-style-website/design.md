# Design Document: Linear-Style Website Rebuild

## Context

Addit is an AI-powered call recording and transcription app. The current website is functional but lacks the visual sophistication needed to:
1. Attract investor attention
2. Establish premium product positioning
3. Build trust with privacy-conscious users
4. Compete with polished competitors

Linear.app represents the gold standard for SaaS marketing websites with its dark aesthetic, 3D visualizations, and smooth animations.

## Goals

1. **Premium Visual Identity** - Dark, sophisticated design that signals quality
2. **Clear Value Proposition** - Instantly communicate what Addit does
3. **Trust Building** - Privacy-first messaging, professional presentation
4. **Performance** - Fast load times, smooth animations (Lighthouse 90+)
5. **Conversion** - Clear CTAs driving app downloads

## Non-Goals

1. Not building a full SaaS dashboard (just marketing site)
2. Not implementing user authentication
3. Not building a blog or content management system
4. Not adding e-commerce or payment processing

## Design System

### Color Palette

```css
/* Backgrounds */
--bg-primary: #0a0a0a;      /* Near black */
--bg-secondary: #111111;    /* Card backgrounds */
--bg-tertiary: #1a1a1a;     /* Elevated surfaces */

/* Text */
--text-primary: #ffffff;     /* Headlines */
--text-secondary: #9ca3af;   /* Body text */
--text-muted: #6b7280;       /* Subtle text */

/* Accents (for section labels) */
--accent-blue: #3B82F6;      /* AI features */
--accent-green: #10B981;     /* Planning/success */
--accent-yellow: #F59E0B;    /* Tasks/attention */
--accent-purple: #8B5CF6;    /* Integrations */

/* Borders */
--border-subtle: rgba(255, 255, 255, 0.1);
--border-visible: rgba(255, 255, 255, 0.2);
```

### Typography Scale

```css
/* Headlines */
--text-hero: 64px / 1.1 / 700;       /* Hero headline */
--text-section: 48px / 1.2 / 700;    /* Section headlines */
--text-card: 24px / 1.3 / 600;       /* Card titles */

/* Body */
--text-large: 20px / 1.6 / 400;      /* Hero subtitle */
--text-body: 16px / 1.6 / 400;       /* Regular body */
--text-small: 14px / 1.5 / 500;      /* Labels, captions */
```

### Spacing System

```css
/* Section spacing */
--section-padding-y: 120px;  /* Desktop */
--section-padding-y-mobile: 80px;

/* Container */
--container-max: 1200px;
--container-padding: 24px;

/* Component spacing */
--space-xs: 4px;
--space-sm: 8px;
--space-md: 16px;
--space-lg: 24px;
--space-xl: 32px;
--space-2xl: 48px;
--space-3xl: 64px;
```

### Component Patterns

#### Section Label
```
[Colored Dot] Category Name >
```
- Small colored circle (8px) with category color
- Text in gray-400, 14px, medium weight
- Optional arrow for clickable links

#### Feature Section Layout
```
[Label]
[Large Headline]
[Description paragraph]
[CTA Button (optional)]
[Visual/Demo]
```

#### Feature Card
```
┌─────────────────────────┐
│                         │
│    [Illustration]       │
│                         │
├─────────────────────────┤
│ [Title]            [+]  │
└─────────────────────────┘
```

### 3D Effects

#### Product Screenshot Perspective
```css
.product-screenshot {
  transform: perspective(1000px) rotateX(5deg) rotateY(-5deg);
  box-shadow:
    0 25px 50px -12px rgba(0, 0, 0, 0.5),
    0 0 0 1px rgba(255, 255, 255, 0.1);
}
```

#### Glassmorphism Card
```css
.glass-card {
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 16px;
}
```

## Page Structure

### Homepage Sections (in order)

1. **Hero**
   - Large headline with gradient text
   - Subtitle explaining value prop
   - Two CTAs (Download App, Learn More)
   - Floating app mockups with 3D perspective

2. **Social Proof**
   - "Trusted by developers" or similar
   - Logo strip (or developer counts/stats if no logos)

3. **Made for Modern Users** (3-card grid)
   - AI-Powered Recording
   - Privacy First
   - Smart Extraction

4. **AI Features Section** (blue accent)
   - AI transcription showcase
   - Smart extraction demo

5. **Recording Features Section** (green accent)
   - Call recording visualization
   - Voice memo demo

6. **Privacy Section** (purple accent)
   - Local storage emphasis
   - User-controlled API keys

7. **How It Works** (3-step flow)
   - Record → Transcribe → Extract

8. **Final CTA**
   - "Start Recording Smarter"
   - Download buttons (App Store, Google Play)

9. **Footer**
   - Multi-column links
   - Legal links
   - Social links

## Animation Strategy

### Scroll Animations
- Fade-in-up for sections as they enter viewport
- Staggered animations for card grids
- Parallax on background elements

### Micro-interactions
- Button hover: subtle scale + glow
- Card hover: lift + border glow
- Link hover: color transition

### Performance Budget
- No animation on mobile (respect reduced motion)
- Use CSS transforms only (GPU accelerated)
- Intersection Observer for scroll triggers

## Decisions

### Decision: Use Framer Motion
**What**: Use Framer Motion for animations instead of CSS-only
**Why**:
- Better control over scroll-triggered animations
- Easier to implement complex sequences
- Built-in support for reduced motion
- Well-maintained, good DX

**Alternatives considered**:
- CSS-only: More performant but harder to maintain
- GSAP: More powerful but larger bundle
- React Spring: Good but less intuitive API

### Decision: Keep TailwindCSS
**What**: Continue using Tailwind instead of switching to CSS-in-JS
**Why**:
- Already configured in project
- Fast development with utility classes
- Easy to maintain design tokens
- Good performance with purging

### Decision: No 3D Library Initially
**What**: Use CSS 3D transforms instead of Three.js/R3F
**Why**:
- Simpler to implement
- Better performance
- Sufficient for marketing site needs
- Can add Three.js later if needed

## Risks / Trade-offs

### Risk: Large scope may delay launch
**Mitigation**: Worker files allow parallel execution, prioritize hero + key sections first

### Risk: Animation performance on low-end devices
**Mitigation**: Respect prefers-reduced-motion, test on throttled CPU

### Risk: App mockups not available
**Mitigation**: Create placeholder designs, iterate with real screenshots later

## Migration Plan

1. Create new components in parallel (don't modify existing)
2. Build design system foundation first
3. Implement sections incrementally
4. Test each section in isolation
5. Replace Home.tsx with new implementation
6. Update Features.tsx to match
7. Test thoroughly before merging

## Rollback Plan

- All changes in feature branch
- Current site preserved in main
- Can revert with single merge commit

## Open Questions

1. **App mockups**: Do we have actual app screenshots to use?
2. **Customer logos**: Any partnerships or notable users to showcase?
3. **Download links**: Are App Store/Play Store links ready?
4. **Analytics**: Should we add analytics tracking to new site?
