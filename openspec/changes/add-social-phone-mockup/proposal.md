# Add Social Flow Phone Mockup

## Summary
Port the SocialFlowDemo.tsx from addit-demos to a pure React animated phone mockup for the Features page (second feature - AI-Powered Transcription). This demonstrates voice-to-tweet functionality.

## Motivation
The Features page currently uses static FeaturePhoneMockup components. Replacing the second feature's mockup with an animated version showing the social posting flow will better demonstrate Addit's capabilities.

## Technical Approach

### Animation System
- Reuse the existing animation utilities from `@/animations` (useAnimationFrame, interpolate, spring)
- Reuse PhoneFrame from `@/components/phone-mockup`
- All animations frame-based at 30fps, no CSS transitions or framer-motion
- Condensed timeline: ~20 seconds (600 frames) for website use

### Components to Create
Located in `src/components/social-mockup/`:

1. **SocialContent.tsx** - Main timeline orchestration
2. **components/ListeningOrb.tsx** - Breathing orb with recording state
3. **components/ComposerBar.tsx** - Message input with recording morph
4. **components/VoiceMessageBubble.tsx** - User's voice message
5. **components/TypingIndicator.tsx** - AI typing dots
6. **components/AiTextResponse.tsx** - AI response with typewriter
7. **components/SocialWidget.tsx** - Draft tweet widget
8. **components/XAppView.tsx** - Twitter/X app with compose and feed
9. **components/SuccessToast.tsx** - Post sent confirmation

### Condensed Timeline (600 frames = ~20 seconds)
- 0-50: Empty state with orb
- 50-150: Recording flow
- 150-180: Voice message sent
- 180-260: AI typing + response
- 260-340: Social widget appears
- 340-380: Widget clicked
- 380-480: X app with draft + publish
- 480-560: Feed view with engagement
- 560-600: Transition back to start

## Changes Required

### New Files
- `src/components/social-mockup/index.tsx`
- `src/components/social-mockup/SocialContent.tsx`
- `src/components/social-mockup/components/*.tsx` (9 components)

### Modified Files
- `src/pages/Features.tsx` - Use SocialMockup for second feature

## Dependencies
- Existing animation utilities (`@/animations`)
- Existing PhoneFrame component
- Existing AdditLogo component
