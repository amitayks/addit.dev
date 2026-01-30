# UI Components Specification

## ADDED Requirements

### Requirement: Transcription Flow Phone Mockup
The system SHALL provide an animated phone mockup component that displays a looping demonstration of the transcription workflow.

#### Scenario: Phone mockup renders on features page
- **WHEN** user visits the features page
- **THEN** an animated transcription flow mockup appears for the first feature
- **AND** the animation loops continuously without user interaction

#### Scenario: Animation follows condensed frame-based timing
- **WHEN** the phone mockup renders
- **THEN** all animations are driven by a frame counter at 30fps
- **AND** the total loop duration is approximately 25 seconds (750 frames)

#### Scenario: Animation phases complete in sequence
- **WHEN** the animation loop runs
- **THEN** the following phases occur in order:
  - Incoming call screen (frames 0-20)
  - Call in progress with speaking ripples (frames 20-200)
  - Call ended transition (frames 200-230)
  - Chat interface with call log (frames 230-280)
  - Transcribing notification + transcript appears (frames 280-380)
  - Analyzing notification + facts appear (frames 380-480)
  - Contact widget appears (frames 480-560)
  - Widget success state (frames 560-640)
  - Transition back to start (frames 640-750)

### Requirement: Call Screen States
The system SHALL display a phone call screen with multiple animated states.

#### Scenario: Incoming call state
- **WHEN** animation is in incoming phase
- **THEN** caller name and number are displayed
- **AND** answer/decline buttons pulse with animation
- **AND** avatar has pulsing glow effect

#### Scenario: Call in progress state
- **WHEN** call is answered
- **THEN** answer/decline buttons fade out
- **AND** in-call controls fade in (keypad, mute, speaker, more)
- **AND** call timer counts up
- **AND** speaking ripples animate around avatar
- **AND** recording indicator is visible

#### Scenario: Call ended state
- **WHEN** call ends
- **THEN** "Call Ended" text fades in (red color)
- **AND** entire call screen fades out

### Requirement: Chat Interface with Processing
The system SHALL display a chat interface showing transcription processing.

#### Scenario: Call log appears
- **WHEN** chat interface loads
- **THEN** call log pill slides in with caller info
- **AND** call duration is displayed

#### Scenario: Processing notifications
- **WHEN** transcribing/analyzing phases occur
- **THEN** notification slides in from top
- **AND** shows shimmer loading effect
- **AND** displays spinning progress indicator
- **AND** notification slides out when phase ends

#### Scenario: Transcript and facts appear
- **WHEN** processing completes
- **THEN** transcript message fades in with typewriter effect
- **AND** facts message fades in with key info found
