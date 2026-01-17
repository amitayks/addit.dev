# Worker: Performance Optimization

## Priority: 7 (Final polish)
## Estimated Complexity: Medium
## Dependencies: All other workers complete

## Objective
Achieve Lighthouse performance score of 90+ with fast load times and smooth runtime performance.

## Target Metrics

| Metric | Target | Current |
|--------|--------|---------|
| Lighthouse Performance | 90+ | TBD |
| First Contentful Paint | < 1.5s | TBD |
| Largest Contentful Paint | < 2.5s | TBD |
| Time to Interactive | < 3.0s | TBD |
| Cumulative Layout Shift | < 0.1 | TBD |
| Total Blocking Time | < 200ms | TBD |

## Optimization Areas

### 1. Image Optimization

#### Use Modern Formats
Convert all images to WebP with JPEG fallback:
```html
<picture>
  <source srcset="image.webp" type="image/webp" />
  <img src="image.jpg" alt="Description" />
</picture>
```

#### Lazy Loading
```typescript
<img loading="lazy" src="..." alt="..." />
```

Or with Intersection Observer for more control:
```typescript
function LazyImage({ src, alt }: { src: string; alt: string }) {
  const [isLoaded, setIsLoaded] = useState(false);
  const ref = useRef<HTMLImageElement>(null);
  const isInView = useInView(ref, { once: true, margin: '100px' });

  return (
    <img
      ref={ref}
      src={isInView ? src : undefined}
      data-src={src}
      alt={alt}
      onLoad={() => setIsLoaded(true)}
      className={isLoaded ? 'opacity-100' : 'opacity-0'}
    />
  );
}
```

#### Responsive Images
```html
<img
  srcset="small.webp 480w, medium.webp 800w, large.webp 1200w"
  sizes="(max-width: 600px) 480px, (max-width: 1000px) 800px, 1200px"
  src="medium.webp"
  alt="..."
/>
```

#### Image Dimensions
Always specify width and height to prevent layout shift:
```html
<img width="800" height="600" src="..." alt="..." />
```

### 2. Code Splitting

#### Route-Based Splitting (Already in React Router)
```typescript
import { lazy, Suspense } from 'react';

const Features = lazy(() => import('./pages/Features'));

// In router
<Route path="/features" element={
  <Suspense fallback={<div>Loading...</div>}>
    <Features />
  </Suspense>
} />
```

#### Component-Based Splitting
For heavy components like animation libraries:
```typescript
const HeavyAnimatedComponent = lazy(() =>
  import('./components/HeavyAnimatedComponent')
);
```

### 3. Bundle Optimization

#### Analyze Bundle
```bash
npm install -D rollup-plugin-visualizer
```

Add to vite.config.ts:
```typescript
import { visualizer } from 'rollup-plugin-visualizer';

export default defineConfig({
  plugins: [
    react(),
    visualizer({ open: true })
  ]
});
```

#### Tree Shaking
Import only what you need:
```typescript
// Bad
import * as Icons from 'lucide-react';

// Good
import { Mic, FileText, Calendar } from 'lucide-react';
```

#### Chunk Splitting
```typescript
// vite.config.ts
build: {
  rollupOptions: {
    output: {
      manualChunks: {
        'framer-motion': ['framer-motion'],
        'react-vendor': ['react', 'react-dom', 'react-router-dom'],
      }
    }
  }
}
```

### 4. Font Optimization

#### Preload Critical Fonts
```html
<link rel="preload" href="/fonts/Inter-Regular.woff2" as="font" type="font/woff2" crossorigin />
```

#### Font Display Swap
```css
@font-face {
  font-family: 'Inter';
  font-display: swap;
  src: url('/fonts/Inter-Regular.woff2') format('woff2');
}
```

#### Subset Fonts
Only include characters you need (reduces file size significantly).

### 5. CSS Optimization

#### Purge Unused CSS
Tailwind already does this, but verify:
```javascript
// tailwind.config.js
content: [
  './index.html',
  './src/**/*.{js,ts,jsx,tsx}',
]
```

#### Critical CSS
Consider inlining above-the-fold CSS:
```bash
npm install -D critical
```

### 6. Animation Performance

#### Use Transform and Opacity Only
```css
/* Good */
.animated { transform: translateY(20px); opacity: 0; }

/* Bad - causes layout */
.animated { top: 20px; height: 0; }
```

#### Use will-change Sparingly
```css
.animated-element {
  will-change: transform, opacity;
}
```

#### Reduce Animation on Scroll
Debounce/throttle scroll handlers:
```typescript
import { throttle } from 'lodash-es';

const handleScroll = throttle(() => {
  // Animation logic
}, 16); // ~60fps
```

### 7. Third-Party Scripts

#### Defer Non-Critical Scripts
```html
<script defer src="analytics.js"></script>
```

#### Lazy Load Third-Party
```typescript
// Load analytics after page is interactive
useEffect(() => {
  const timer = setTimeout(() => {
    // Load analytics
  }, 3000);
  return () => clearTimeout(timer);
}, []);
```

### 8. Caching Strategy

#### Vite Asset Hashing
Vite automatically hashes assets for cache busting.

#### Service Worker (Optional)
For offline support and faster repeat visits.

### 9. Server Optimization

#### Compression
Ensure Gzip/Brotli compression is enabled on the server.

#### HTTP/2
Use HTTP/2 for parallel asset loading.

#### CDN
Deploy static assets to a CDN for faster global delivery.

## Implementation Checklist

### Images
- [ ] Convert images to WebP
- [ ] Add lazy loading to below-fold images
- [ ] Implement responsive images with srcset
- [ ] Add width/height to prevent CLS

### JavaScript
- [ ] Implement route-based code splitting
- [ ] Lazy load heavy components
- [ ] Analyze and optimize bundle
- [ ] Remove unused dependencies

### CSS
- [ ] Verify Tailwind purging works
- [ ] Consider critical CSS inlining
- [ ] Minimize render-blocking CSS

### Fonts
- [ ] Preload critical fonts
- [ ] Use font-display: swap
- [ ] Consider font subsetting

### Animations
- [ ] Audit all animations for performance
- [ ] Use transform/opacity only
- [ ] Add will-change where needed
- [ ] Throttle scroll handlers

### Testing
- [ ] Run Lighthouse audit
- [ ] Test on throttled network
- [ ] Test on throttled CPU
- [ ] Test on real mobile devices

## Lighthouse Audit Process

1. Build production version:
   ```bash
   npm run build
   npm run preview
   ```

2. Open Chrome DevTools > Lighthouse

3. Run audit for:
   - Performance
   - Accessibility
   - Best Practices
   - SEO

4. Address issues in order of impact

5. Re-run until 90+ score achieved

## Common Lighthouse Issues & Fixes

| Issue | Fix |
|-------|-----|
| Render-blocking resources | Defer non-critical CSS/JS |
| Large images | Compress, resize, use WebP |
| Unused JavaScript | Code splitting, tree shaking |
| Long main-thread tasks | Break up long functions |
| Layout shift | Add dimensions to images/embeds |
| Missing alt text | Add descriptive alt attributes |

## Monitoring

After launch, consider:
- Core Web Vitals monitoring in Google Search Console
- Real User Monitoring (RUM) with tools like Vercel Analytics
- Regular Lighthouse audits in CI/CD
