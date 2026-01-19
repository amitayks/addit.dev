# Tasks: Add SEO-Friendly Routing for Google Play Compliance

## 1. Router Migration

- [ ] 1.1 Change HashRouter to BrowserRouter in App.tsx
- [ ] 1.2 Update any internal links that use hash-based paths

## 2. GitHub Pages SPA Configuration

- [ ] 2.1 Create `public/404.html` with redirect script for SPA routing
- [ ] 2.2 Verify vite.config.ts has correct base path for GitHub Pages
- [ ] 2.3 Test local build with `npm run build && npm run preview`

## 3. Deployment & Verification

- [ ] 3.1 Deploy to GitHub Pages
- [ ] 3.2 Verify `https://addit.dev/privacy` loads correctly (not 404)
- [ ] 3.3 Verify `https://addit.dev/terms` loads correctly
- [ ] 3.4 Update Google Play Console Privacy Policy URL from `/#/privacy` to `/privacy`
- [ ] 3.5 Verify Google Play SSL validation passes

## 4. Legacy URL Handling (Optional)

- [ ] 4.1 Add redirect from `/#/privacy` to `/privacy` for backwards compatibility
- [ ] 4.2 Add redirect from `/#/terms` to `/terms` for backwards compatibility
