# Project Context: Addit Website

## Purpose
Addit is an AI-powered call recording and transcription mobile app. This website serves as the marketing landing page to:
1. Explain the product's value proposition
2. Build trust with privacy-conscious users
3. Drive app downloads (App Store, Google Play)
4. Establish premium brand positioning

## Product Overview

### What Addit Does
- **Call Recording**: Record phone calls with a single tap
- **Voice Memos**: Capture voice notes and ideas
- **AI Transcription**: Automatic speech-to-text using user-provided AI API keys
- **Smart Extraction**: AI extracts calendar events, reminders, and contact mentions
- **Smart Search**: Search across all recordings and transcriptions

### Key Differentiators
- **Privacy First**: All data stored locally on device - we never see your data
- **User-Controlled AI**: Users provide their own API keys (OpenAI, etc.)
- **No Cloud Required**: Works without internet (except for transcription)

## Tech Stack

### Frontend
- React 18 with TypeScript
- Vite for build tooling
- TailwindCSS for styling
- React Router for navigation
- Lucide React for icons
- Framer Motion for animations (to be added)

### Deployment
- GitHub Pages via GitHub Actions
- Domain: addit.dev (via CNAME)

### Design System
- Dark mode by default
- Inter font family
- Blue primary accent (#3B82F6)
- Glassmorphism effects
- Mobile-first responsive design

## Project Conventions

### Code Style
- Functional components with hooks
- TypeScript for type safety
- Component files use PascalCase: `HeroSection.tsx`
- Utility files use camelCase: `animations.ts`
- CSS utilities via Tailwind classes
- Minimal inline styles

### File Structure
```
src/
├── components/
│   ├── layout/      # Header, Footer, Layout
│   ├── sections/    # Page sections (Hero, Features, etc.)
│   ├── ui/          # Reusable UI components
│   └── demos/       # Product demo visualizations
├── pages/           # Route pages
├── hooks/           # Custom React hooks
├── lib/             # Utility functions
└── styles/          # Additional CSS
```

### Component Structure
```typescript
// Component template
import { motion } from 'framer-motion';

interface ComponentProps {
  // Props with types
}

export function Component({ prop1, prop2 }: ComponentProps) {
  // Hooks at top
  // Logic in middle
  // Return JSX
}
```

### Architecture Patterns
- Composition over inheritance
- Props for configuration
- Colocation of related code
- Lazy loading for heavy components

### Testing Strategy
- Visual testing in browser
- Lighthouse audits for performance
- Cross-browser testing (Chrome, Firefox, Safari)
- Mobile device testing

### Git Workflow
- Main branch is production
- Feature branches for new work
- Descriptive commit messages
- PR for significant changes

## Domain Context

### Target Audience
- Professionals who take many calls
- Journalists and interviewers
- Researchers and students
- Anyone who needs to remember conversations

### Competitive Landscape
- Otter.ai - cloud-based, subscription
- Rev - professional transcription
- Apple Voice Memos - basic, no AI

### Our Advantage
- Privacy-first local storage
- No subscription (use your own API keys)
- AI extraction of actionable items

## Important Constraints

### Technical
- Must work on GitHub Pages (static site)
- No server-side rendering
- Use HashRouter for client-side routing

### Performance
- Lighthouse score 90+
- FCP < 1.5s
- Mobile-optimized

### Accessibility
- WCAG 2.1 AA compliance
- Keyboard navigable
- Screen reader friendly
- Respect reduced motion

### Legal
- Privacy Policy page required
- Terms of Service page required
- No tracking without consent

## External Dependencies

### NPM Packages
- react, react-dom, react-router-dom
- tailwindcss, postcss, autoprefixer
- lucide-react (icons)
- framer-motion (animations) - to be added
- vite (build)

### External Services
- GitHub Pages (hosting)
- GitHub Actions (CI/CD)

### Future Integrations
- App Store links
- Google Play links
- Analytics (with consent)

## Current Status

### Active Change
- `rebuild-linear-style-website`: Complete visual overhaul to Linear.app quality

### Workers
Located in `openspec/workers/`:
1. WORKER-DESIGN-SYSTEM.md - Foundation (Priority 1)
2. WORKER-HERO.md - Hero section (Priority 2)
3. WORKER-FEATURES.md - Feature sections (Priority 3)
4. WORKER-SOCIAL-PROOF.md - Trust indicators (Priority 4)
5. WORKER-ANIMATIONS.md - Motion design (Priority 5)
6. WORKER-MOBILE.md - Responsive design (Priority 6)
7. WORKER-PERFORMANCE.md - Optimization (Priority 7)

## Quick Commands

```bash
# Development
npm run dev

# Build
npm run build

# Preview build
npm run preview

# Deploy (automatic via GitHub Actions on push to main)
git push origin main
```
