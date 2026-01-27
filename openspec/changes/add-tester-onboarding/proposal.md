# Change: Add Tester Onboarding Flow

## Why
The app is currently in closed testing via Google Play. Users clicking download buttons need clear instructions on how to join the testing program, otherwise they hit a dead end at the store listing.

## What Changes
- Download buttons (header + hero) scroll to download section instead of opening external links
- Download section displays closed testing instructions with Google Group link
- Header behavior changes from sticky to scroll-hide (hides on scroll down, shows on scroll up)
- Add favicon using the app icon from assets

## Impact
- Affected code: `Header.tsx`, `Hero.tsx`, `DownloadSection.tsx`, `Button.tsx`, `index.html`
- No breaking changes
- Better UX for potential testers
