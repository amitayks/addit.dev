# CEO Continuity Document - Addit Website Rebuild

## Mission Statement
Build a world-class marketing website for Addit that matches the polish and sophistication of Linear.app, demonstrating to investors that our AI-powered call recording app is a serious, premium product.

## Project Status

### Current Phase: READY FOR IMPLEMENTATION
- [x] Linear.app deep analysis completed
- [x] Current codebase assessment done
- [x] OpenSpec proposal created and validated
- [x] Worker files scaffolded (7 workers ready)
- [x] project.md updated with full context
- [ ] Implementation started

### OpenSpec Change
**ID**: `rebuild-linear-style-website`
**Status**: Valid and ready for implementation
**Location**: `openspec/changes/rebuild-linear-style-website/`

## Linear.app Design Analysis Summary

### Core Design Principles
1. **Dark, premium aesthetic** - Near-black background (#0a0a0a), white text
2. **Section-based storytelling** - Each scroll reveals a new feature story
3. **3D product visualizations** - Screenshots with perspective/depth
4. **Glassmorphism** - Frosted glass cards with subtle borders
5. **Color-coded categories** - Dots (blue=AI, green=planning, yellow=tasks, purple=integrations)
6. **Social proof early** - Customer logos after hero (OpenAI, Vercel, Coinbase)
7. **Interactive demos** - Product UI embedded in marketing pages

### Key Components to Build
1. **Hero Section** - Bold headline, gradient text, floating app mockups
2. **Customer Logos** - Trust-building social proof strip
3. **Feature Sections** - Colored label + headline + description + visual
4. **Feature Cards** - 3-column grid with custom illustrations
5. **Product Showcases** - 3D tilted app screenshots
6. **Data Visualizations** - Animated charts/graphs
7. **Footer** - Multi-column links, clean layout

### Typography System
- Headlines: 48-64px, bold, white
- Subheadlines: 24-32px, semibold, white
- Body: 16-18px, regular, gray-400
- Labels: 14px, medium, with colored dot indicator
- Font: Inter (already in use)

### Color System
```
Background: #0a0a0a (near black)
Surface: #111111 (cards)
Border: rgba(255,255,255,0.1)
Text Primary: #ffffff
Text Secondary: #9ca3af
Accent Blue: #3B82F6 (AI features)
Accent Green: #10B981 (planning)
Accent Yellow: #F59E0B (tasks)
Accent Purple: #8B5CF6 (integrations)
```

## Addit Product Context

### What Addit Does
- AI-powered call recording and voice memos
- Automatic transcription using leading AI services
- AI extraction of calendar events, reminders, contacts
- Privacy-first: all data stored locally, user provides own API keys
- Smart search across recordings

### Key Selling Points to Highlight
1. **AI-Powered Intelligence** - Automatic transcription + extraction
2. **Privacy First** - No data on our servers, user controls keys
3. **Seamless Integration** - Calendar events, contacts, reminders
4. **Crystal Clear Recording** - High-quality audio capture
5. **Smart Search** - Find anything instantly

## Worker Strategy

### Worker Files to Create
Each worker handles a specific domain of the rebuild:

1. **WORKER-DESIGN-SYSTEM.md** - Foundation (colors, typography, spacing, components)
2. **WORKER-HERO.md** - Hero section with app mockups
3. **WORKER-FEATURES.md** - Feature sections and cards
4. **WORKER-SOCIAL-PROOF.md** - Customer logos, testimonials
5. **WORKER-ANIMATIONS.md** - Scroll animations, transitions, 3D effects
6. **WORKER-MOBILE.md** - Responsive design, touch interactions
7. **WORKER-PERFORMANCE.md** - Optimization, lazy loading, bundle size

### Execution Order
1. Design System (foundation)
2. Hero (first impression)
3. Features (core content)
4. Social Proof (trust)
5. Animations (polish)
6. Mobile (reach)
7. Performance (speed)

## Technical Stack

### Current (Keep)
- React 18 + TypeScript
- Vite (fast builds)
- TailwindCSS (utility-first)
- React Router
- Lucide Icons
- Inter Font

### To Add
- Framer Motion (animations)
- Intersection Observer (scroll triggers)
- Image optimization pipeline
- Custom 3D CSS transforms

## Success Metrics
- Lighthouse Performance: 90+
- First Contentful Paint: <1.5s
- Time to Interactive: <3s
- Mobile responsive: All breakpoints
- Visual polish: Linear.app quality standard

## Next Steps: Implementation Order

Execute workers in this priority order:

### Phase 1: Foundation (Must complete first)
1. **WORKER-DESIGN-SYSTEM.md** - Colors, typography, base components
   - Install framer-motion
   - Update tailwind.config.js
   - Create UI components (Button, Card, SectionLabel, etc.)

### Phase 2: Core Sections
2. **WORKER-HERO.md** - Hero section with animations
3. **WORKER-FEATURES.md** - Feature cards and sections
4. **WORKER-SOCIAL-PROOF.md** - Trust indicators

### Phase 3: Polish
5. **WORKER-ANIMATIONS.md** - Scroll animations, transitions
6. **WORKER-MOBILE.md** - Responsive design
7. **WORKER-PERFORMANCE.md** - Optimization, Lighthouse 90+

## Commands for Next Session

After auto-compact, run these to resume:
1. Read this file: `CEO.md`
2. Read `openspec/changes/rebuild-linear-style-website/tasks.md`
3. Start with `openspec/workers/WORKER-DESIGN-SYSTEM.md`
4. Mark tasks complete as you go

## Notes
- Keep the existing privacy-first messaging - it's our differentiator
- App mockups needed - consider creating Figma designs or using actual app screenshots
- Customer logos - we may not have big names yet, consider "Trusted by developers" or similar
- Focus on the AI angle - that's what's hot right now

---
*Last updated: Session start - Linear analysis complete*
