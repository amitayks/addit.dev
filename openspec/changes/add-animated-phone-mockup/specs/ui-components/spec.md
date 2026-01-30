# UI Components Specification

## ADDED Requirements

### Requirement: Animated Phone Mockup
The system SHALL provide an animated phone mockup component that displays a looping demonstration of the Addit app functionality.

#### Scenario: Phone mockup renders on home page
- **WHEN** user visits the home page
- **THEN** an animated phone mockup appears in the Hero section
- **AND** the animation loops continuously without user interaction

#### Scenario: Animation follows frame-based timing
- **WHEN** the phone mockup renders
- **THEN** all animations are driven by a frame counter at 30fps
- **AND** the total loop duration is approximately 20 seconds (590 frames)

#### Scenario: Animation phases complete in sequence
- **WHEN** the animation loop runs
- **THEN** the following phases occur in order:
  - Empty state with listening orb (frames 0-90)
  - Recording state with waveform (frames 90-210)
  - Voice message sent (frames 210-240)
  - AI typing and response (frames 240-350)
  - Calendar widget appears (frames 350-450)
  - Widget clicked, calendar opens (frames 450-510)
  - Calendar app view with success toast (frames 510+)

### Requirement: Animation Technique Consistency
The system SHALL use a consistent animation technique across all animated elements, based on spring physics and linear interpolation.

#### Scenario: Spring-based animations
- **WHEN** an element animates
- **THEN** animation progress is calculated using a spring physics function
- **AND** properties are derived using interpolation from 0-1 progress

#### Scenario: Crossfade transitions
- **WHEN** content swaps (text or icon changes)
- **THEN** original content fades out during first half of transition
- **AND** new content fades in during second half with overlap
- **AND** both elements are layered using absolute positioning

#### Scenario: No CSS animations
- **WHEN** any animation runs
- **THEN** CSS `transition` property is NOT used
- **AND** CSS `@keyframes` animations are NOT used
- **AND** framer-motion library is NOT used for the phone mockup

### Requirement: Animation Utilities
The system SHALL provide reusable animation utility functions for frame-based animations.

#### Scenario: Frame counter hook
- **WHEN** useAnimationFrame hook is used
- **THEN** it returns current frame number
- **AND** frame increments at specified fps rate
- **AND** frame resets to 0 after reaching total frames (looping)

#### Scenario: Interpolate function
- **WHEN** interpolate function is called
- **THEN** it maps input value from input range to output range
- **AND** supports extrapolation clamping options

#### Scenario: Spring function
- **WHEN** spring function is called
- **THEN** it returns a 0-1 progress value with spring physics
- **AND** supports configurable damping and stiffness
