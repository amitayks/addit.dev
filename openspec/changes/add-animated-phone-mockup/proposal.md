# Change: Add Animated Phone Mockup to Home Page

## Why
The current static phone mockup in the Hero section doesn't effectively showcase the app's functionality. An animated, looping phone mockup ported from the Remotion demo will better demonstrate the Addit app experience to visitors.

## What Changes
- Replace static `AppMockup` component with animated `PhoneMockup` component
- Create pure React animation utilities (`useAnimationFrame`, `interpolate`, `spring`)
- Port all phone-internal UI components from `FullFlowDemo.tsx`
- Implement endless loop animation (~20 seconds per cycle)
- **BREAKING**: Remove dependency on framer-motion for phone mockup animations

## Impact
- Affected specs: `ui-components` (new capability)
- Affected code:
  - `src/components/sections/Hero.tsx` - swap mockup component
  - `src/components/sections/AppMockup.tsx` - to be replaced
  - New files in `src/animations/` and `src/components/phone-mockup/`
