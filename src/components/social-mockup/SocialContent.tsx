import { colors, interpolate, spring } from '@/animations';
import {
  AppHeader,
  ListeningOrb,
  ComposerBar,
  VoiceMessageBubble,
  TypingIndicator,
  AiTextResponse,
  SocialWidget,
  XAppView,
} from './components';

/**
 * Timeline matching original SocialFlowDemo (~21s at 30fps = 630 frames):
 *
 * 0-60: Empty state with orb
 * 60-180: Recording flow
 * 180-210: Voice message sent
 * 210-250: AI typing
 * 250-320: AI text response
 * 320-420: Social widget appears
 * 420-450: Widget click + morph
 * 450+: X app with draft → publish → feed
 */

const TOTAL_FRAMES = 630;

interface SocialContentProps {
  frame: number;
  fps: number;
}

export const SocialContent: React.FC<SocialContentProps> = ({ frame, fps }) => {
  // Timeline triggers (matching original)
  const recordingStart = 60;
  const recordingEnd = 180;
  const voiceMessageStart = 180;
  const typingStart = 210;
  const typingEnd = 250;
  const aiResponseStart = 250;
  const socialWidgetStart = 320;
  const widgetClickStart = 420;
  const xAppStart = 450;

  // Transition phase: cross-fade from X app back to orb (frames 580-630)
  const TRANSITION_START = 580;
  const isTransitioning = frame >= TRANSITION_START;

  // Calculate transition progress using spring for smooth easing
  const transitionProgress = isTransitioning
    ? spring({
        frame: frame - TRANSITION_START,
        fps,
        config: { damping: 20, stiffness: 60 },
      })
    : 0;

  // Opacity for X app view (fades out during transition)
  const xAppOpacity = interpolate(transitionProgress, [0, 1], [1, 0], {
    extrapolateRight: 'clamp',
  });

  // Opacity for initial state (fades in during transition)
  const initialStateOpacity = interpolate(transitionProgress, [0, 1], [0, 1], {
    extrapolateRight: 'clamp',
  });

  // State calculations
  const isRecording = frame >= recordingStart && frame < recordingEnd;
  const showOrb = frame < voiceMessageStart;
  const isOrbExiting = frame >= voiceMessageStart - 10; // Start exit 10 frames before voice message
  const showVoiceMessage = frame >= voiceMessageStart && !isTransitioning;
  const showTyping = frame >= typingStart && frame < typingEnd;
  const showAiResponse = frame >= aiResponseStart && !isTransitioning;
  const showWidget = frame >= socialWidgetStart && !isTransitioning;
  const widgetClicked = frame >= widgetClickStart;
  const showXApp = frame >= xAppStart;

  // Orb exit animation
  const orbExitProgress = isOrbExiting
    ? spring({ frame: frame - (voiceMessageStart - 10), fps, config: { damping: 20, stiffness: 100 } })
    : 0;
  const orbOpacity = interpolate(orbExitProgress, [0, 1], [1, 0]);

  // During transition, we show both layers with cross-fade
  if (isTransitioning) {
    return (
      <div
        style={{
          width: '100%',
          height: '100%',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* X app layer - fading out */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            opacity: xAppOpacity,
            background: '#000',
          }}
        >
          <XAppView frame={frame - xAppStart} fps={fps} />
        </div>

        {/* Initial orb state layer - fading in */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            opacity: initialStateOpacity,
            display: 'flex',
            flexDirection: 'column',
            background: colors.paper,
          }}
        >
          {/* Status bar space */}
          <div style={{ height: 48 }} />

          <AppHeader />

          {/* Chat Content with Orb */}
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
            <div
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <ListeningOrb
                frame={0}
                fps={fps}
                isRecording={false}
                exitFrame={0}
                isExiting={false}
              />
            </div>
          </div>

          {/* Composer Bar */}
          <ComposerBar frame={0} fps={fps} isRecording={false} />
        </div>
      </div>
    );
  }

  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        background: showXApp ? '#000' : colors.paper,
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {!showXApp ? (
        <>
          {/* Status bar space - matches TranscriptionContent */}
          <div style={{ height: 48 }} />

          <AppHeader />

          {/* Main Content Area - matches TranscriptionContent structure */}
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
            {/* Listening Orb State - centered in container */}
            {showOrb && (
              <div
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  opacity: orbOpacity,
                }}
              >
                <ListeningOrb
                  frame={frame}
                  fps={fps}
                  isRecording={isRecording}
                  exitFrame={frame - (voiceMessageStart - 10)}
                  isExiting={isOrbExiting}
                />
              </div>
            )}

            {/* Chat messages container */}
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: 10,
              }}
            >
              {/* Voice Message */}
              {showVoiceMessage && (
                <div style={{ paddingLeft: 12, paddingRight: 12, display: 'flex', justifyContent: 'flex-end' }}>
                  <VoiceMessageBubble frame={frame - voiceMessageStart} fps={fps} />
                </div>
              )}

              {/* AI Typing Indicator */}
              {showTyping && (
                <div style={{ paddingLeft: 12, paddingRight: 12 }}>
                  <TypingIndicator frame={frame - typingStart} fps={fps} />
                </div>
              )}

              {/* AI Text Response */}
              {showAiResponse && (
                <div style={{ paddingLeft: 12, paddingRight: 12 }}>
                  <AiTextResponse frame={frame - aiResponseStart} fps={fps} />
                </div>
              )}

              {/* Social Widget */}
              {showWidget && (
                <div style={{ paddingLeft: 12, paddingRight: 12 }}>
                  <SocialWidget
                    fps={fps}
                    entranceFrame={frame - socialWidgetStart}
                    isClicked={widgetClicked}
                    clickFrame={frame - widgetClickStart}
                  />
                </div>
              )}
            </div>
          </div>

          {/* Composer Bar */}
          <ComposerBar frame={frame} fps={fps} isRecording={isRecording} />
        </>
      ) : (
        <XAppView frame={frame - xAppStart} fps={fps} />
      )}
    </div>
  );
};

export { TOTAL_FRAMES };
