## ADDED Requirements

### Requirement: Closed Testing Instructions
The download section SHALL display clear instructions for joining the closed testing program.

#### Scenario: User sees testing instructions
- **WHEN** user views the download section
- **THEN** they see a callout explaining the app is in closed testing
- **AND** they see instructions to join the Google Group
- **AND** they see instructions to click "become a tester" link in the first message

### Requirement: Smooth Scroll to Download
Download buttons in the header and hero section SHALL scroll smoothly to the download section.

#### Scenario: User clicks download in header
- **WHEN** user clicks the download button in the header
- **THEN** the page scrolls smoothly to the download section

#### Scenario: User clicks download in hero
- **WHEN** user clicks the download button in the hero section
- **THEN** the page scrolls smoothly to the download section

### Requirement: Scroll-Linked Header
The header SHALL hide when scrolling down and show when scrolling up.

#### Scenario: User scrolls down
- **WHEN** user scrolls down the page
- **THEN** the header slides out of view in sync with the scroll

#### Scenario: User scrolls up
- **WHEN** user scrolls up the page
- **THEN** the header slides back into view

### Requirement: App Favicon
The website SHALL display the Addit app icon as the browser tab favicon.

#### Scenario: User opens website
- **WHEN** user opens the website in a browser
- **THEN** the browser tab displays the Addit app icon
