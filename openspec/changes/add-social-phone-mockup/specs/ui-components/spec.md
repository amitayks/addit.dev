# UI Components Specification

## ADDED Requirements

### Requirement: Social Flow Phone Mockup
The system SHALL provide an animated phone mockup component that displays a looping demonstration of the social posting (voice-to-tweet) workflow.

#### Scenario: Phone mockup renders on features page
- **WHEN** user visits the features page
- **THEN** an animated social flow mockup appears for the second feature (AI-Powered Transcription)
- **AND** the animation loops continuously without user interaction

#### Scenario: Animation follows condensed frame-based timing
- **WHEN** the phone mockup renders
- **THEN** all animations are driven by a frame counter at 30fps
- **AND** the total loop duration is approximately 20 seconds (600 frames)

#### Scenario: Animation phases complete in sequence
- **WHEN** the animation loop runs
- **THEN** the following phases occur in order:
  - Empty state with listening orb (frames 0-50)
  - Recording with waveform (frames 50-150)
  - Voice message sent (frames 150-180)
  - AI typing + response (frames 180-260)
  - Social widget appears (frames 260-340)
  - Widget clicked, X opens (frames 340-380)
  - X app with compose view + publish (frames 380-480)
  - Feed view with engagement counters (frames 480-560)
  - Transition back to start (frames 560-600)

### Requirement: Listening Orb States
The system SHALL display a listening orb with multiple animated states.

#### Scenario: Idle state
- **WHEN** animation is in idle phase
- **THEN** orb has gentle breathing animation
- **AND** glow pulse effect
- **AND** "Ready to Listen" text shown

#### Scenario: Recording state
- **WHEN** recording is active
- **THEN** composer bar morphs to show waveform
- **AND** recording timer counts up
- **AND** mic button becomes stop button

### Requirement: Social Widget
The system SHALL display a draft tweet widget after AI response.

#### Scenario: Widget appears
- **WHEN** AI response is complete
- **THEN** social widget slides in with draft tweet
- **AND** shows X/Twitter branding
- **AND** has "Open in X" button

#### Scenario: Widget clicked
- **WHEN** widget button is clicked
- **THEN** button morphs to "Opening..." state
- **AND** X app view slides in from right

### Requirement: X App View
The system SHALL display a Twitter/X app interface.

#### Scenario: Compose view
- **WHEN** X app opens
- **THEN** draft tweet is shown
- **AND** "Post" button is visible

#### Scenario: Post published
- **WHEN** post button is clicked
- **THEN** button morphs to "Posted!" state
- **AND** success toast appears
- **AND** feed view fades in

#### Scenario: Feed view with engagement
- **WHEN** feed view is visible
- **THEN** user's tweet appears in feed
- **AND** engagement counters (likes, retweets, views) increase rapidly
