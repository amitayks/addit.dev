import { useAnimationFrame } from '@/animations';
import { PhoneFrame } from '@/components/phone-mockup/PhoneFrame';
import { SocialContent, TOTAL_FRAMES } from './SocialContent';

const FPS = 30;

/**
 * Animated phone mockup component that displays a looping demonstration
 * of the Addit app social media workflow.
 *
 * Features:
 * - Endless loop animation (~21 seconds per cycle)
 * - Frame-based animations using spring physics
 * - No CSS transitions or @keyframes - all driven by frame counter
 *
 * Timeline (630 frames at 30fps):
 * Frame 0-60:    Empty state with orb (idle)
 * Frame 60-180:  Recording (orb listening, waveform active)
 * Frame 180-210: Voice message sent
 * Frame 210-250: AI typing indicator
 * Frame 250-320: AI text response with draft
 * Frame 320-420: Social widget appears
 * Frame 420-450: Widget clicked, X app opens
 * Frame 450+:    X app view with compose, publish, feed
 */
export function SocialMockup() {
  const frame = useAnimationFrame(FPS, TOTAL_FRAMES);

  return (
    <div
      style={{
        width: 320,
        height: 692,
      }}
    >
      <PhoneFrame>
        <SocialContent frame={frame} fps={FPS} />
      </PhoneFrame>
    </div>
  );
}

export { SocialContent, TOTAL_FRAMES } from './SocialContent';
