# Worker: Mobile & Responsive Design

## Priority: 6 (After core sections)
## Estimated Complexity: Medium
## Dependencies: All section workers

## Objective
Ensure the entire website is fully responsive and provides an excellent experience on all device sizes, from 320px mobile to 1920px+ desktop.

## Breakpoint Strategy

Using Tailwind's default breakpoints:
```
sm: 640px   - Large phones, small tablets
md: 768px   - Tablets
lg: 1024px  - Small laptops, large tablets
xl: 1280px  - Desktops
2xl: 1536px - Large desktops
```

## Mobile-First Approach

Write base styles for mobile, then add complexity for larger screens:
```css
/* Mobile first */
.section { padding: 60px 16px; }

/* Tablet and up */
@screen md { .section { padding: 80px 24px; } }

/* Desktop and up */
@screen lg { .section { padding: 120px 24px; } }
```

## Component Responsive Specifications

### Header
**Mobile (< 768px):**
- Logo left, hamburger menu right
- Menu opens as full-screen overlay or slide-in
- Navigation links stacked vertically
- CTAs at bottom of menu

**Desktop (768px+):**
- Logo left, links center, CTAs right
- All navigation visible
- No hamburger menu

### Hero Section
**Mobile (< 768px):**
- Text centered
- Headline: text-3xl to text-4xl
- Single CTA button (stacked if two)
- App mockup below text, smaller
- Reduced or no 3D effect on mockup

**Tablet (768px - 1023px):**
- Text centered
- Headline: text-4xl to text-5xl
- CTAs side by side
- App mockup below, medium size

**Desktop (1024px+):**
- Text left-aligned
- Headline: text-5xl to text-6xl
- CTAs side by side
- App mockups floating right with full 3D effect

### Feature Cards Grid
**Mobile (< 640px):**
- Single column, full width cards
- Cards stacked vertically

**Tablet (640px - 1023px):**
- 2-column grid

**Desktop (1024px+):**
- 3-column grid

### Feature Sections (Two-column)
**Mobile (< 768px):**
- Single column
- Text always first, visual below
- Visual scaled to fit

**Tablet (768px - 1023px):**
- Single column or narrow two-column
- Consider stacking

**Desktop (1024px+):**
- Two-column layout
- Alternating text/visual sides

### Footer
**Mobile (< 640px):**
- Single column
- Logo and tagline
- Link categories stacked
- Social links at bottom

**Tablet (640px - 1023px):**
- 2-column grid for links
- Logo spans full width

**Desktop (1024px+):**
- Multi-column layout (5 columns)
- Logo on far left

## Touch Interactions

### Touch Targets
Minimum touch target size: 44x44px
```css
.button, .link, .nav-item {
  min-height: 44px;
  min-width: 44px;
}
```

### Tap States
Use active states instead of hover on touch:
```css
@media (hover: none) {
  .button:active {
    transform: scale(0.98);
  }
}
```

### Swipe Gestures (Optional)
For carousels or slideshows, implement swipe:
```typescript
import { useSwipeable } from 'react-swipeable';
```

## Mobile Menu Implementation

### src/components/layout/MobileMenu.tsx

```typescript
interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, x: '100%' }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: '100%' }}
          className="fixed inset-0 z-50 bg-background"
        >
          {/* Close button */}
          {/* Navigation links */}
          {/* CTAs */}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
```

### Hamburger Icon Animation
```typescript
<motion.div animate={isOpen ? 'open' : 'closed'}>
  <motion.span variants={topLineVariants} />
  <motion.span variants={middleLineVariants} />
  <motion.span variants={bottomLineVariants} />
</motion.div>
```

## Images & Media

### Responsive Images
Use srcset for different resolutions:
```html
<img
  src="/hero-mobile.webp"
  srcSet="/hero-mobile.webp 640w, /hero-tablet.webp 1024w, /hero-desktop.webp 1920w"
  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 80vw, 1200px"
  alt="App mockup"
/>
```

### Video (if any)
- Don't autoplay on mobile (data concerns)
- Provide poster image
- Consider replacing with static image on mobile

## Typography Scaling

```css
/* Mobile */
.hero-headline { font-size: 2rem; }      /* 32px */
.section-headline { font-size: 1.5rem; } /* 24px */

/* Tablet */
@screen md {
  .hero-headline { font-size: 3rem; }    /* 48px */
  .section-headline { font-size: 2rem; } /* 32px */
}

/* Desktop */
@screen lg {
  .hero-headline { font-size: 4rem; }    /* 64px */
  .section-headline { font-size: 3rem; } /* 48px */
}
```

## Testing Checklist

### Devices to Test
- [ ] iPhone SE (320px) - Smallest common size
- [ ] iPhone 12/13/14 (390px)
- [ ] iPhone Pro Max (428px)
- [ ] iPad (768px)
- [ ] iPad Pro (1024px)
- [ ] Laptop (1366px)
- [ ] Desktop (1920px)

### Functionality Tests
- [ ] All touch targets are 44px+
- [ ] No horizontal scroll on any page
- [ ] Mobile menu opens/closes correctly
- [ ] All links and buttons work on touch
- [ ] Forms are usable on mobile
- [ ] Images load at appropriate sizes

### Performance Tests
- [ ] Test on throttled network (Slow 3G)
- [ ] Test with CPU throttling
- [ ] Check FCP and LCP on mobile
- [ ] Verify no layout shift on mobile

### Browser Tests
- [ ] iOS Safari
- [ ] Android Chrome
- [ ] Samsung Internet

## Common Issues to Watch

1. **Viewport units on iOS**
   - `100vh` doesn't account for Safari UI
   - Use `100dvh` or JS-based solution

2. **Fixed positioning on iOS**
   - Can cause issues with keyboard
   - Test with on-screen keyboard

3. **Tap delay on older iOS**
   - Should be fixed in modern browsers
   - Ensure `touch-action: manipulation` if needed

4. **Landscape mode**
   - Test all pages in landscape
   - Ensure content doesn't break

## Implementation Priority

1. Mobile menu (essential for navigation)
2. Hero section responsiveness
3. Feature sections responsiveness
4. Footer responsiveness
5. Fine-tuning and polish
