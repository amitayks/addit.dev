# Change: Add Transcription Flow Phone Mockup to Features Page

## Why
The current static `FeaturePhoneMockup` on the Features page doesn't effectively showcase the transcription workflow. An animated phone mockup ported from `TranscriptionFlowDemo.tsx` will better demonstrate the call recording, transcription, and contact extraction flow.

## What Changes
- Create new `TranscriptionMockup` component with pure React animations
- Port key components from `TranscriptionFlowDemo.tsx`: CallScreen, ChatInterface, ProcessingNotification, ContactWidget
- Implement condensed timeline (~25 seconds per cycle instead of 57 seconds)
- Replace first `FeaturePhoneMockup` (recording variant) with animated `TranscriptionMockup`
- **BREAKING**: Remove dependency on framer-motion for this mockup

## Impact
- Affected specs: `ui-components` (new capability)
- Affected code:
  - `src/pages/Features.tsx` - swap first mockup
  - New files in `src/components/transcription-mockup/`
