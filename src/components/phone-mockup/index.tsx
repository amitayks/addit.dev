import { useAnimationFrame } from '@/animations';
import { PhoneFrame } from './PhoneFrame';
import { AppContent } from './AppContent';

const FPS = 30;
const TOTAL_FRAMES = 590; // ~19.7 seconds per loop

/**
 * Animated phone mockup component that displays a looping demonstration
 * of the Addit app functionality.
 *
 * Features:
 * - Endless loop animation (~20 seconds per cycle)
 * - Frame-based animations using spring physics
 * - No CSS transitions or @keyframes - all driven by frame counter
 *
 * Timeline (590 frames at 30fps):
 * Frame 0-90:    Empty state with orb (idle)
 * Frame 90-210:  Recording (orb listening, waveform active)
 * Frame 210-240: Voice message sent
 * Frame 240-350: AI typing + text response
 * Frame 350-450: Calendar widget appears
 * Frame 450-510: Widget clicked, calendar opens
 * Frame 510+:    Calendar app view with success toast
 */
export function PhoneMockup() {
  const frame = useAnimationFrame(FPS, TOTAL_FRAMES);

  return (
    <div
      style={{
        width: 390,
        height: 844,
      }}
    >
      <PhoneFrame>
        <AppContent frame={frame} fps={FPS} />
      </PhoneFrame>
    </div>
  );
}

export { PhoneFrame } from './PhoneFrame';
export { AppContent } from './AppContent';
