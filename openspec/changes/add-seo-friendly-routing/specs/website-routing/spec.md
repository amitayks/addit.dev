## MODIFIED Requirements

### Requirement: Website Routing
The website SHALL use browser-history-based routing (BrowserRouter) instead of hash-based routing for SEO-friendly URLs and Google Play Store compliance.

#### Scenario: Privacy Policy accessible via clean URL
- **WHEN** user navigates to `https://addit.dev/privacy`
- **THEN** the Privacy Policy page is displayed
- **AND** the URL remains `/privacy` (no hash)

#### Scenario: Terms of Service accessible via clean URL
- **WHEN** user navigates to `https://addit.dev/terms`
- **THEN** the Terms of Service page is displayed
- **AND** the URL remains `/terms` (no hash)

#### Scenario: Direct page access on GitHub Pages
- **WHEN** user directly navigates to any route (e.g., `/privacy`, `/terms`, `/features`)
- **THEN** the 404.html redirect script handles the SPA routing
- **AND** the correct page content is displayed

## ADDED Requirements

### Requirement: GitHub Pages SPA Redirect
The website SHALL include a 404.html file that redirects all routes to index.html for single-page application support on GitHub Pages.

#### Scenario: Direct URL access without 404
- **WHEN** user directly accesses `/privacy` URL
- **AND** GitHub Pages returns 404.html
- **THEN** the redirect script rewrites the URL
- **AND** index.html loads with correct route

### Requirement: SSL Certificate Validation
The Privacy Policy and Terms of Service pages SHALL be accessible via HTTPS with valid SSL certificates that pass Google Play Store's automated validation.

#### Scenario: Google Play SSL validation
- **WHEN** Google Play Store validates `https://addit.dev/privacy`
- **THEN** the SSL certificate validation passes
- **AND** the page content is accessible to Google's bot
