# Change: Add Actions Phone Mockup to Features Page

## Why
The Features page needs an animated phone mockup showcasing the "Actions" feature - demonstrating how Addit automatically suggests actions (Reminder, Contact, Calendar) based on call logs. This completes the third phone mockup for the Features page.

## What Changes
- Create new `ActionsMockup` component with pure React animations
- Port widget pattern from existing mockups for Reminder, Contact, and Calendar widgets
- Implement call log entries that appear sequentially with associated action widgets
- Add scroll-up animation to loop the content
- Implement cross-fade transition at loop end for seamless restart

## Impact
- Affected specs: `ui-components` (new capability)
- Affected code:
  - New files in `src/components/actions-mockup/`
  - Reuses `PhoneFrame` from `phone-mockup`
  - Reuses `AppHeader` pattern from existing mockups
