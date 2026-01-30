import { useAnimationFrame } from '@/animations';
import { PhoneFrame } from '@/components/phone-mockup/PhoneFrame';
import { ActionsContent, TOTAL_FRAMES } from './ActionsContent';

const FPS = 30;

/**
 * Animated phone mockup component that displays a looping demonstration
 * of the Addit Actions feature - showing call logs with action widgets.
 *
 * Features:
 * - Endless loop animation (~15 seconds per cycle)
 * - Frame-based animations using spring physics
 * - No CSS transitions or @keyframes - all driven by frame counter
 *
 * Timeline (450 frames at 30fps):
 * Frame 0-30:    Initial empty state
 * Frame 30-120:  Call log 1 + Reminder widget
 * Frame 120-210: Call log 2 + Contact widget
 * Frame 210-300: Call log 3 + Calendar widget
 * Frame 300-380: Hold to display all content
 * Frame 380-400: Scroll up (content off screen)
 * Frame 400-430: 1 second empty pause
 * Frame 430-450: Cross-fade transition to initial state
 */
export function ActionsMockup() {
  const frame = useAnimationFrame(FPS, TOTAL_FRAMES);

  return (
    <div
      style={{
        width: 320,
        height: 692,
      }}
    >
      <PhoneFrame>
        <ActionsContent frame={frame} fps={FPS} />
      </PhoneFrame>
    </div>
  );
}

export { ActionsContent, TOTAL_FRAMES } from './ActionsContent';
