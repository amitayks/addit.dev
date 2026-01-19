# Change: Add SEO-Friendly Routing for Google Play Compliance

## Why
Google Play Store's SSL certificate validation fails for hash-based URLs (`/#/privacy`). The current HashRouter implementation prevents Google's bot from validating the Privacy Policy page, blocking app submission. We need to switch to BrowserRouter with proper GitHub Pages configuration.

## What Changes
- **BREAKING**: Change from `HashRouter` to `BrowserRouter` in App.tsx
- Add 404.html redirect script for GitHub Pages SPA support
- Update vite.config.ts base path if needed
- URLs will change from `addit.dev/#/privacy` to `addit.dev/privacy`

## Impact
- Affected code: `src/App.tsx` - router change
- Affected code: `public/404.html` - new file for GitHub Pages SPA redirect
- Affected code: `vite.config.ts` - base path configuration
- **BREAKING**: All hash-based URLs will stop working (but will redirect)
- Required for Google Play Store compliance - SSL validation fix
