import { interpolate, spring } from '@/animations';
import { colors } from '@/animations/colors';
import { CallScreen } from './components/CallScreen';
import { AppHeader } from './components/AppHeader';
import { ComposerBar } from './components/ComposerBar';
import { CallLogIndicator } from './components/CallLogIndicator';
import { TranscriptMessage } from './components/TranscriptMessage';
import { FactsMessage } from './components/FactsMessage';
import { ContactWidget } from './components/ContactWidget';
import { ProcessingNotification } from './components/ProcessingNotification';
import { ContactFormModal } from './components/ContactFormModal';
import { SuccessToast } from './components/SuccessToast';

interface TranscriptionContentProps {
  frame: number;
  fps: number;
}

/**
 * CONDENSED TIMELINE (750 frames = ~25 seconds at 30fps):
 *
 * 0-20:     Incoming call (ringing, pulsing answer button)
 * 20-200:   Call in progress (answered, speaking ripples, recording indicator)
 * 200-230:  Call ended (fade out)
 * 230-280:  Chat interface appears, call log slides in
 * 280-380:  Transcribing notification + transcript appears
 * 380-480:  Analyzing notification + facts appear
 * 480-560:  Contact widget appears + scroll
 * 560-640:  Widget clicked, success state
 * 640-750:  Transition back to start (crossfade to call screen)
 */
export const TranscriptionContent: React.FC<TranscriptionContentProps> = ({ frame, fps }) => {
  // Phase flags
  // Chat starts sliding in 1 second (30 frames) before call ends at frame 200
  const chatSlideStartFrame = 170;
  const showCallScreen = frame < 200; // Call screen visible until exit animation
  const showChatInterface = frame >= chatSlideStartFrame && frame < 640;
  const showCallLog = frame >= 220;
  const showTranscribingNotification = frame >= 250 && frame < 350;
  const showTranscript = frame >= 290;
  const showAnalyzingNotification = frame >= 350 && frame < 450;
  const showFacts = frame >= 390;
  const showWidget = frame >= 450;
  const widgetClicked = frame >= 510;
  // Modal opens after widget clicked, closes after saved
  const showModal = frame >= 530 && frame < 610;
  const modalSaved = frame >= 570;
  const widgetSaved = frame >= 570;
  const showSuccessToast = frame >= 600;

  // Chat interface slide-in animation (like calendar in phone-mockup)
  const chatEntranceProgress = showChatInterface
    ? spring({
        frame: frame - chatSlideStartFrame,
        fps,
        config: { damping: 14, stiffness: 100 },
      })
    : 0;

  const chatSlideIn = interpolate(chatEntranceProgress, [0, 1], [100, 0], {
    extrapolateRight: 'clamp',
  });

  // Transition phase (frames 640-750): slide out chat, fade in call screen
  const isTransitioning = frame >= 640;
  const transitionProgress = isTransitioning
    ? spring({
        frame: frame - 640,
        fps,
        config: { damping: 20, stiffness: 60 },
      })
    : 0;

  // Chat interface slides out to the right during transition
  const chatSlideOut = interpolate(transitionProgress, [0, 1], [0, 100], {
    extrapolateRight: 'clamp',
  });

  // Combined slide position (entrance + exit)
  const chatSlideX = isTransitioning ? chatSlideOut : chatSlideIn;

  // Initial call screen fade in during transition (for the loop restart)
  const restartCallOpacity = interpolate(transitionProgress, [0.3, 0.8], [0, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });

  // Scroll animation: starts after widget appears
  const scrollStartFrame = 470;
  const scrollProgress =
    frame >= scrollStartFrame
      ? spring({
          frame: frame - scrollStartFrame,
          fps,
          config: { damping: 20, stiffness: 60 },
        })
      : 0;

  const scrollY = interpolate(scrollProgress, [0, 1], [0, -140], {
    extrapolateRight: 'clamp',
  });

  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        background: colors.paper,
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Call Screen (visible during call and restart transition) */}
      {(showCallScreen || isTransitioning) && (
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            opacity: showCallScreen ? 1 : restartCallOpacity,
            zIndex: showCallScreen ? 1 : 2,
          }}
        >
          <CallScreen
            frame={isTransitioning && !showCallScreen ? frame - 640 : frame}
            fps={fps}
          />
        </div>
      )}

      {/* Chat Interface - slides in from right */}
      {showChatInterface && (
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            display: 'flex',
            flexDirection: 'column',
            transform: `translateX(${chatSlideX}%)`,
            zIndex: 2,
            background: colors.paper,
          }}
        >
          <div style={{ height: 48 }} />
          <AppHeader />

          <div
            style={{
              flex: 1,
              padding: '12px 0',
              display: 'flex',
              flexDirection: 'column',
              overflowY: 'hidden',
              position: 'relative',
            }}
          >
            {/* Scrollable content container */}
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: 10,
                transform: `translateY(${scrollY}px)`,
              }}
            >
              {showCallLog && <CallLogIndicator frame={frame - 220} fps={fps} />}

              {showTranscript && (
                <div style={{ paddingLeft: 12, paddingRight: 12 }}>
                  <TranscriptMessage frame={frame - 290} fps={fps} />
                </div>
              )}

              {showFacts && (
                <div style={{ paddingLeft: 12, paddingRight: 12 }}>
                  <FactsMessage frame={frame - 390} fps={fps} />
                </div>
              )}

              {showWidget && (
                <div style={{ paddingLeft: 12, paddingRight: 12 }}>
                  <ContactWidget
                    frame={frame - 450}
                    fps={fps}
                    isClicked={widgetClicked}
                    isSaved={widgetSaved}
                  />
                </div>
              )}
            </div>
          </div>

          <ComposerBar />
        </div>
      )}

      {/* Processing Notifications */}
      {showTranscribingNotification && (
        <ProcessingNotification frame={frame - 250} fps={fps} phase="transcribing" />
      )}

      {showAnalyzingNotification && (
        <ProcessingNotification frame={frame - 350} fps={fps} phase="analyzing" />
      )}

      {/* Contact Form Modal */}
      {showModal && (
        <ContactFormModal
          frame={frame - 530}
          fps={fps}
          isSaved={modalSaved}
          isClosing={modalSaved}
        />
      )}

      {/* Success Toast */}
      {showSuccessToast && frame < 640 && <SuccessToast frame={frame - 600} fps={fps} />}
    </div>
  );
};
