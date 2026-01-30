# UI Components Specification

## ADDED Requirements

### Requirement: Actions Flow Phone Mockup
The system SHALL provide an animated phone mockup component that displays a looping demonstration of the Addit Actions feature - showing call logs with associated action widgets.

#### Scenario: Phone mockup renders on features page
- **WHEN** user visits the features page
- **THEN** an animated phone mockup appears showing the Actions workflow
- **AND** the animation loops continuously without user interaction

#### Scenario: Animation follows condensed frame-based timing
- **WHEN** the phone mockup renders
- **THEN** all animations are driven by a frame counter at 30fps
- **AND** the total loop duration is approximately 22 seconds (660 frames)

#### Scenario: Animation phases complete in sequence
- **WHEN** the animation loop runs
- **THEN** the following phases occur in order:
  - Initial empty state (frames 0-30)
  - Call log 1 entrance + Reminder widget (frames 30-120)
  - Call log 2 entrance + Contact widget (frames 120-210)
  - Call log 3 entrance + Calendar widget (frames 210-300)
  - Hold to display all content (frames 300-400)
  - Scroll up animation with fade out (frames 400-500)
  - Empty state (frames 500-560)
  - Cross-fade transition to initial state (frames 560-660)

### Requirement: Call Log Items
The system SHALL display call log entries with contact information and call details.

#### Scenario: Call log item appears
- **WHEN** a call log phase begins
- **THEN** a call log item animates in from the left
- **AND** displays contact avatar, name, call type icon, timestamp, and duration
- **AND** uses spring physics for entrance animation

#### Scenario: Call log types
- **WHEN** a call log item renders
- **THEN** it displays the appropriate icon for call type (incoming, outgoing, missed)
- **AND** uses appropriate color coding (red for missed calls)

### Requirement: Action Widgets
The system SHALL display action widgets below their associated call logs.

#### Scenario: Reminder widget appears
- **WHEN** the reminder action phase begins
- **THEN** an amber-themed widget animates in below call log 1
- **AND** displays reminder icon, title, due time, and action button
- **AND** uses `colors.widgetReminder` (#F59E0B) for accent

#### Scenario: Contact widget appears
- **WHEN** the contact action phase begins
- **THEN** a purple-themed widget animates in below call log 2
- **AND** displays contact icon, name, phone number, and action button
- **AND** uses `colors.widgetContact` (#8B5CF6) for accent

#### Scenario: Calendar widget appears
- **WHEN** the calendar action phase begins
- **THEN** a blue-themed widget animates in below call log 3
- **AND** displays calendar icon, event title, date/time, and action button
- **AND** uses `colors.widgetCalendar` (#3B82F6) for accent

### Requirement: Scroll Animation
The system SHALL scroll content up and fade out before looping.

#### Scenario: Content scrolls up
- **WHEN** the scroll phase begins (frame 400)
- **THEN** all content translates upward using spring physics
- **AND** content opacity fades to 0 during scroll
- **AND** the scroll creates a natural exit for the content

#### Scenario: Cross-fade transition
- **WHEN** the transition phase begins (frame 560)
- **THEN** empty state fades in using spring physics
- **AND** creates seamless loop back to initial state
- **AND** uses absolute positioning for layered cross-fade
