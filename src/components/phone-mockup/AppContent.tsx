import React from 'react';
import { colors, interpolate, spring } from '@/animations';
import {
  AppHeader,
  ListeningOrb,
  ComposerBar,
  VoiceMessageBubble,
  TypingIndicator,
  AiTextResponse,
  CalendarWidget,
  CalendarAppView,
} from './components';

interface AppContentProps {
  frame: number;
  fps: number;
}

/**
 * Main app content that orchestrates all sub-components based on timeline.
 *
 * Timeline phases (at 30fps):
 * 0-90: Empty state with orb (idle) - 3s
 * 90-210: Recording (orb still visible, listening) - 4s
 * 210-240: Voice message sent (orb fades out, message fades in)
 * 240-350: AI typing + response (faster)
 * 350-450: Widget appears
 * 450-510: Widget clicked, calendar opens (faster)
 * 510-540: Calendar app view
 * 540-590: Transition back to start (cross-fade)
 */
export const AppContent: React.FC<AppContentProps> = ({ frame, fps }) => {
  // Transition phase: cross-fade from calendar back to orb (frames 540-590)
  const TRANSITION_START = 540;
  const isTransitioning = frame >= TRANSITION_START;

  // Calculate transition progress using spring for smooth easing
  const transitionProgress = isTransitioning
    ? spring({
        frame: frame - TRANSITION_START,
        fps,
        config: { damping: 20, stiffness: 60 },
      })
    : 0;

  // Opacity for calendar view (fades out during transition)
  const calendarOpacity = interpolate(transitionProgress, [0, 1], [1, 0], {
    extrapolateRight: 'clamp',
  });

  // Opacity for initial state (fades in during transition)
  const initialStateOpacity = interpolate(transitionProgress, [0, 1], [0, 1], {
    extrapolateRight: 'clamp',
  });

  // Determine current phase
  const phase =
    frame < 90
      ? 'empty'
      : frame < 210
        ? 'recording'
        : frame < 240
          ? 'messageSent'
          : frame < 350
            ? 'aiTyping'
            : frame < 450
              ? 'widgetAppears'
              : frame < 510
                ? 'widgetClicked'
                : 'calendarApp';

  const isRecording = phase === 'recording';
  const showOrb = frame < 210; // Orb visible during empty and recording
  const showVoiceMessage = frame >= 210 && !isTransitioning;
  const showAiTyping = phase === 'aiTyping' && frame < 280;
  const showAiResponse = frame >= 280 && !isTransitioning;
  const showWidget = frame >= 350 && !isTransitioning;
  const widgetClicked = frame >= 450;
  const showCalendarApp = frame >= 480;

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
        {/* Calendar app layer - fading out */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            opacity: calendarOpacity,
            background: colors.paper,
          }}
        >
          <CalendarAppView frame={frame - 480} fps={fps} />
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
          <div style={{ height: 54 }} />

          {/* Header */}
          <AppHeader />

          {/* Chat Content with Orb */}
          <div
            style={{
              flex: 1,
              padding: '16px',
              display: 'flex',
              flexDirection: 'column',
              gap: 16,
              overflowY: 'hidden',
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
        background: colors.paper,
        position: 'relative',
      }}
    >
      {!showCalendarApp ? (
        <>
          {/* Status bar space */}
          <div style={{ height: 54 }} />

          {/* Header */}
          <AppHeader />

          {/* Chat Content */}
          <div
            style={{
              flex: 1,
              padding: '16px',
              display: 'flex',
              flexDirection: 'column',
              gap: 16,
              overflowY: 'hidden',
            }}
          >
            {/* Listening Orb - visible during empty and recording */}
            {showOrb && (
              <ListeningOrb
                frame={frame}
                fps={fps}
                isRecording={isRecording}
                exitFrame={frame >= 200 ? frame - 200 : 0}
                isExiting={frame >= 200}
              />
            )}

            {/* Voice Message Bubble */}
            {showVoiceMessage && (
              <VoiceMessageBubble frame={frame - 210} fps={fps} />
            )}

            {/* AI Typing Indicator */}
            {showAiTyping && <TypingIndicator frame={frame - 240} fps={fps} />}

            {/* AI Text Response */}
            {showAiResponse && <AiTextResponse frame={frame - 280} fps={fps} />}

            {/* Calendar Widget */}
            {showWidget && (
              <CalendarWidget
                frame={frame - 350}
                fps={fps}
                isClicked={widgetClicked}
              />
            )}
          </div>

          {/* Composer Bar - Always visible */}
          <ComposerBar frame={frame} fps={fps} isRecording={isRecording} />
        </>
      ) : (
        <CalendarAppView frame={frame - 480} fps={fps} />
      )}
    </div>
  );
};
