# Worker: Design System Foundation

## Priority: 1 (Must complete first)
## Estimated Complexity: Medium
## Dependencies: None

## Objective
Establish the foundational design system that all other components will use. This includes colors, typography, spacing, and base utility classes.

## Context
You are building the design foundation for a Linear.app-style premium dark website for Addit, an AI-powered call recording app.

## Files to Modify

### 1. tailwind.config.js
Update the color palette with these exact values:
```javascript
colors: {
  background: {
    DEFAULT: '#0a0a0a',
    secondary: '#111111',
    tertiary: '#1a1a1a',
  },
  foreground: {
    DEFAULT: '#ffffff',
    secondary: '#9ca3af',
    muted: '#6b7280',
  },
  accent: {
    blue: '#3B82F6',
    green: '#10B981',
    yellow: '#F59E0B',
    purple: '#8B5CF6',
  },
  border: {
    DEFAULT: 'rgba(255, 255, 255, 0.1)',
    visible: 'rgba(255, 255, 255, 0.2)',
  },
  // Keep existing primary colors
}
```

Add animation utilities:
```javascript
animation: {
  'fade-in': 'fadeIn 0.5s ease-out',
  'fade-in-up': 'fadeInUp 0.6s ease-out',
  'float': 'float 6s ease-in-out infinite',
},
keyframes: {
  fadeIn: {
    '0%': { opacity: '0' },
    '100%': { opacity: '1' },
  },
  fadeInUp: {
    '0%': { opacity: '0', transform: 'translateY(20px)' },
    '100%': { opacity: '1', transform: 'translateY(0)' },
  },
  float: {
    '0%, 100%': { transform: 'translateY(0px)' },
    '50%': { transform: 'translateY(-20px)' },
  },
}
```

### 2. src/index.css
Replace with updated CSS variables and utilities:
- Update `:root` variables to match new palette
- Add `.glass` utility with proper blur and border
- Add `.glass-hover` for hover state
- Add `.gradient-text` with Addit brand colors
- Add `.section-label` for colored dot + text pattern
- Add `.perspective-container` for 3D effects
- Add responsive section padding utilities

### 3. package.json
Add framer-motion:
```bash
npm install framer-motion
```

## Files to Create

### src/components/ui/Button.tsx
Create a reusable button component with variants:
- `primary`: White background, dark text
- `secondary`: Dark background with border, white text
- `ghost`: Transparent with hover effect

Props: `variant`, `size`, `children`, `className`, `href`, `onClick`

### src/components/ui/SectionLabel.tsx
Create the colored dot + label component:
- Accept `color` prop: 'blue' | 'green' | 'yellow' | 'purple'
- Accept `children` for label text
- Optional arrow icon for links

### src/components/ui/Container.tsx
Max-width container with responsive padding:
- max-w-6xl (1152px)
- px-4 on mobile, px-6 on larger screens
- Centered with mx-auto

### src/components/ui/GradientText.tsx
Animated gradient text component:
- Blue gradient matching Addit brand
- Optional animation prop

### src/components/ui/Card.tsx
Glassmorphism card with hover effects:
- Glass background by default
- Lift and glow on hover
- Accept `children` and `className`

## Acceptance Criteria
- [ ] All colors render correctly in dark mode
- [ ] Glass effects have proper blur and transparency
- [ ] Button variants all work correctly
- [ ] SectionLabel displays colored dot properly
- [ ] Container constrains content at max-width
- [ ] Gradient text animates smoothly
- [ ] Cards lift on hover

## Testing Commands
```bash
npm run dev
# Verify at http://localhost:5173
# Check that background is near-black
# Test button hover states
# Verify glass effect blur works
```

## Notes
- Use HSL for colors where possible for easier manipulation
- Ensure all transitions are GPU-accelerated (transform, opacity)
- Test on Chrome, Firefox, Safari
