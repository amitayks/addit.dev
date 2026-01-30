import { useAnimationFrame } from '@/animations';
import { PhoneFrame } from '@/components/phone-mockup/PhoneFrame';
import { TranscriptionContent } from './TranscriptionContent';

const FPS = 30;
const TOTAL_FRAMES = 750; // ~25 seconds

/**
 * Transcription Flow Phone Mockup
 *
 * Animated phone mockup demonstrating the transcription workflow:
 * - Phone call incoming and answering
 * - Call in progress with speaking ripples
 * - Call ends, chat interface appears
 * - Transcribing notification + transcript
 * - Analyzing notification + facts
 * - Contact widget appears
 * - Success toast
 * - Loop restart
 */
export const TranscriptionMockup: React.FC = () => {
  const frame = useAnimationFrame(FPS, TOTAL_FRAMES);

  return (
    <div
      style={{
        width: 320,
        height: 692,
      }}
    >
      <PhoneFrame>
        <TranscriptionContent frame={frame} fps={FPS} />
      </PhoneFrame>
    </div>
  );
};

export default TranscriptionMockup;
