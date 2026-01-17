# Change: Rebuild Addit Website to Linear.app Quality Standard

## Why
The current Addit website is a basic marketing page that doesn't convey the premium, sophisticated nature of our AI-powered product. To attract investors and establish credibility, we need a website that matches the visual polish and UX excellence of industry leaders like Linear.app. A world-class website will demonstrate that Addit is a serious product worthy of investment and user trust.

## What Changes

### Visual Design Overhaul
- **BREAKING**: Complete redesign of all pages to match Linear-style dark premium aesthetic
- New color system with near-black backgrounds and strategic accent colors
- 3D perspective product visualizations with glassmorphism effects
- Section-based scrolling with color-coded feature categories
- Custom illustrations and animations for each feature

### New Component Library
- Reusable design system components (buttons, cards, sections)
- Animated hero section with floating app mockups
- Feature showcase sections with embedded product UI demos
- Social proof section with customer/partner logos
- Multi-column footer with organized navigation

### Animation System
- Scroll-triggered animations using Framer Motion
- 3D CSS transforms for product screenshots
- Smooth transitions between sections
- Micro-interactions on buttons and cards

### Performance Optimization
- Lazy loading for images and heavy components
- Code splitting for faster initial load
- Optimized asset delivery
- Lighthouse score target: 90+

## Impact

### Affected Specs
- `specs/website/` (new capability)

### Affected Code
- `src/pages/Home.tsx` - Complete rewrite
- `src/pages/Features.tsx` - Complete rewrite
- `src/components/` - New component library
- `src/index.css` - New design system tokens
- `tailwind.config.js` - Extended color palette
- `package.json` - New dependencies (framer-motion)

### Dependencies to Add
- `framer-motion` - Animation library
- Potentially `@react-three/fiber` for advanced 3D effects (optional)

### Risk Assessment
- **High impact**: This is a complete visual overhaul
- **Reversible**: Git history preserves current design
- **Timeline**: Estimated 5-7 worker task files for parallel execution
