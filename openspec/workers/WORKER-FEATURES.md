# Worker: Feature Sections

## Priority: 3 (After Hero)
## Estimated Complexity: High
## Dependencies: WORKER-DESIGN-SYSTEM, WORKER-HERO

## Objective
Build multiple feature showcase sections that explain Addit's capabilities using the Linear-style pattern: colored label → large headline → description → visual demo.

## Feature Sections to Build

### 1. Feature Cards Grid (3-column)
**Location:** After Social Proof section
**Purpose:** Quick overview of main capabilities

Cards:
1. **AI Transcription** (blue accent)
   - Icon: Document/text icon
   - Title: "AI Transcription"
   - Description: "Automatic speech-to-text powered by leading AI services."

2. **Privacy First** (purple accent)
   - Icon: Shield icon
   - Title: "Privacy First"
   - Description: "All data stored locally. Your keys, your data."

3. **Smart Extraction** (green accent)
   - Icon: Sparkles/magic icon
   - Title: "Smart Extraction"
   - Description: "AI extracts calendar events, contacts, and reminders."

### 2. AI Features Section
**Colored Label:** Blue dot + "Artificial Intelligence"
**Headline:** "AI-Powered Transcription"
**Description:** "Transform your conversations into searchable text instantly. Choose from multiple AI providers using your own API keys."

**Visual Demo:**
- Show waveform converting to text
- Animated typing effect showing transcript appearing
- Highlight extracted entities (dates, names)

### 3. Recording Features Section
**Colored Label:** Green dot + "Recording"
**Headline:** "Crystal Clear Capture"
**Description:** "Record phone calls and voice memos with a single tap. High-quality audio ensures accurate transcription."

**Visual Demo:**
- Recording interface mockup
- Waveform visualization
- Timer display

### 4. Privacy Features Section
**Colored Label:** Purple dot + "Privacy & Security"
**Headline:** "Your Data, Your Control"
**Description:** "We never see your recordings or transcriptions. All data stays on your device, and you provide your own API keys for AI services."

**Visual Demo:**
- Device icon with lock
- "Local Storage Only" badge
- API key configuration mockup

## Files to Create

### src/components/sections/FeatureCards.tsx
```typescript
interface FeatureCard {
  icon: LucideIcon;
  title: string;
  description: string;
  accentColor: 'blue' | 'green' | 'purple';
}
```

- Grid layout: 3 columns on desktop, 1 on mobile
- Staggered entrance animation
- Hover: lift + border glow
- Glass card styling

### src/components/sections/FeatureSection.tsx
Reusable component for feature showcase:
```typescript
interface FeatureSectionProps {
  label: string;
  labelColor: 'blue' | 'green' | 'purple' | 'yellow';
  headline: string;
  description: string;
  visual: ReactNode;
  reversed?: boolean; // Flip text/visual order
}
```

### src/components/sections/AIFeatures.tsx
Specific implementation with:
- Transcription demo visual
- Two-column layout on desktop
- Text on left, visual on right

### src/components/sections/RecordingFeatures.tsx
Specific implementation with:
- Recording interface visual
- Reversed layout (visual left, text right)

### src/components/sections/PrivacySection.tsx
Specific implementation with:
- Privacy/security visual
- Normal layout (text left, visual right)

## Visual Demo Components

### src/components/demos/TranscriptionDemo.tsx
Animated demo showing:
1. Audio waveform (CSS animation)
2. Text appearing letter by letter
3. Highlighted entities (dates, names)

```typescript
// Example transcript with entities
const transcript = [
  { text: "Let's meet ", type: "normal" },
  { text: "tomorrow at 3pm", type: "date" },
  { text: " with ", type: "normal" },
  { text: "John", type: "contact" },
];
```

### src/components/demos/RecordingDemo.tsx
Static/animated mockup showing:
- Recording button (pulsing animation)
- Timer counting up
- Waveform bars animating

### src/components/demos/PrivacyDemo.tsx
Visual showing:
- Device silhouette
- Lock icon
- "100% Local" badge
- Crossed-out cloud icon

## Animation Strategy

### Scroll Trigger
Use Intersection Observer or Framer Motion's `useInView`:
```typescript
const ref = useRef(null);
const isInView = useInView(ref, { once: true, margin: "-100px" });
```

### Staggered Children
```typescript
const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 }
  }
};
```

## Responsive Behavior

### Desktop (1024px+)
- Two-column layout for feature sections
- 3-column grid for feature cards
- Full visual demos

### Tablet (768px - 1023px)
- Stacked layout (visual below text)
- 2-column grid for feature cards

### Mobile (< 768px)
- Single column everything
- Simplified visual demos
- Reduced animation complexity

## Acceptance Criteria
- [ ] Feature cards grid renders with 3 cards
- [ ] Cards have correct icons and colors
- [ ] Cards animate on hover (lift effect)
- [ ] AI Features section renders with demo
- [ ] Recording Features section renders with demo
- [ ] Privacy section renders with demo
- [ ] All sections animate on scroll
- [ ] Sections respect reversed prop
- [ ] All sections are responsive
- [ ] Animations respect reduced-motion

## Testing
```bash
npm run dev
# Scroll through all feature sections
# Test hover effects on cards
# Verify scroll animations trigger once
# Test on mobile viewport
```
