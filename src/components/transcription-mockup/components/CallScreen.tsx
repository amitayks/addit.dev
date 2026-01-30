import { interpolate, spring } from '@/animations';
import { CallActionButton } from './CallActionButton';
import { SpeakingRipples } from './SpeakingRipples';

interface CallScreenProps {
  frame: number;
  fps: number;
}

/**
 * Phone call screen with incoming/in-progress/ended states.
 * Condensed timeline for website (200 frames call duration).
 */
export const CallScreen: React.FC<CallScreenProps> = ({ frame, fps }) => {
  // Answer transition (frame 15)
  const answerMorphProgress =
    frame >= 15
      ? spring({
          frame: frame - 15,
          fps,
          config: { damping: 18, stiffness: 80 },
        })
      : 0;

  // Exit animation (call ends at frame 200)
  const exitProgress =
    frame >= 200
      ? spring({
          frame: frame - 200,
          fps,
          config: { damping: 20, stiffness: 100 },
        })
      : 0;

  const exitOpacity = interpolate(exitProgress, [0, 1], [1, 0]);
  const exitScale = interpolate(exitProgress, [0, 1], [1, 0.95]);

  // Breathing animation for avatar
  const breathe = Math.sin(frame * 0.08) * 0.03 + 1;

  // Glow pulse for ringing state
  const glowPulse = Math.sin(frame * 0.1) * 0.3 + 0.7;

  // Recording indicator pulse
  const recordPulse = Math.sin(frame * 0.15) * 0.5 + 0.5;

  // Call duration timer (starts after answer)
  const callStartFrame = 25;
  const callSeconds = frame >= callStartFrame ? Math.floor((frame - callStartFrame) / 30) : 0;
  const callMinutes = Math.floor(callSeconds / 60);
  const callSecondsDisplay = callSeconds % 60;
  const callDuration = `${callMinutes.toString().padStart(2, '0')}:${callSecondsDisplay.toString().padStart(2, '0')}`;

  // ===== CROSSFADE OPACITIES =====
  const callingTextOpacity = interpolate(answerMorphProgress, [0, 0.4], [1, 0], {
    extrapolateRight: 'clamp',
  });

  const timerOpacity = interpolate(answerMorphProgress, [0.3, 0.7], [0, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });

  const answerButtonsOpacity = interpolate(answerMorphProgress, [0, 0.5], [1, 0], {
    extrapolateRight: 'clamp',
  });

  const actionButtonsOpacity = interpolate(answerMorphProgress, [0.3, 0.7], [0, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });

  const recordingOpacity =
    interpolate(answerMorphProgress, [0.6, 1], [0, 1], {
      extrapolateLeft: 'clamp',
      extrapolateRight: 'clamp',
    }) *
    interpolate(exitProgress, [0, 0.3], [1, 0], {
      extrapolateLeft: 'clamp',
      extrapolateRight: 'clamp',
    });

  const avatarGlowOpacity = interpolate(answerMorphProgress, [0, 0.5], [glowPulse, 0.3], {
    extrapolateRight: 'clamp',
  });

  const answerButtonScale = 1 + Math.sin(frame * 0.12) * 0.06 * (1 - answerMorphProgress);

  const callEndedOpacity = interpolate(exitProgress, [0, 0.3], [0, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });

  const showRipples = answerMorphProgress > 0.5 && exitProgress < 0.3;

  return (
    <div
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: '#1F1F1F',
        opacity: exitOpacity,
        transform: `scale(${exitScale})`,
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      {/* Top Section - Status & Contact Info */}
      <div
        style={{
          paddingTop: 70,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        {/* Call Status - Crossfade */}
        <div style={{ position: 'relative', height: 24, marginBottom: 12 }}>
          <span
            style={{
              position: 'absolute',
              left: '50%',
              transform: 'translateX(-50%)',
              fontSize: 14,
              fontWeight: 400,
              color: 'rgba(255, 255, 255, 0.7)',
              fontFamily: 'SF Pro Text, system-ui, sans-serif',
              opacity: callingTextOpacity * (1 - callEndedOpacity),
              whiteSpace: 'nowrap',
            }}
          >
            Calling...
          </span>
          <span
            style={{
              position: 'absolute',
              left: '50%',
              transform: 'translateX(-50%)',
              fontSize: 14,
              fontWeight: 400,
              color: 'rgba(255, 255, 255, 0.7)',
              fontFamily: 'SF Pro Text, system-ui, sans-serif',
              opacity: timerOpacity * (1 - callEndedOpacity),
              whiteSpace: 'nowrap',
            }}
          >
            {callDuration}
          </span>
          <span
            style={{
              position: 'absolute',
              left: '50%',
              transform: 'translateX(-50%)',
              fontSize: 14,
              fontWeight: 400,
              color: '#EF6B6B',
              fontFamily: 'SF Pro Text, system-ui, sans-serif',
              opacity: callEndedOpacity,
              whiteSpace: 'nowrap',
            }}
          >
            Call Ended
          </span>
        </div>

        {/* Contact Name */}
        <span
          style={{
            fontSize: 28,
            fontWeight: 400,
            color: 'white',
            fontFamily: 'SF Pro Display, system-ui, sans-serif',
            marginBottom: 6,
          }}
        >
          Sarah Johnson
        </span>

        {/* Phone Number */}
        <span
          style={{
            fontSize: 13,
            fontWeight: 400,
            color: 'rgba(255, 255, 255, 0.6)',
            fontFamily: 'SF Pro Text, system-ui, sans-serif',
          }}
        >
          Mobile +1 555-234-8901
        </span>
      </div>

      {/* Center Section - Avatar */}
      <div
        style={{
          flex: 1,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          position: 'relative',
        }}
      >
        {/* Avatar Glow */}
        <div
          style={{
            position: 'absolute',
            width: 150,
            height: 150,
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(102, 126, 234, 0.4) 0%, transparent 70%)',
            opacity: avatarGlowOpacity,
            filter: 'blur(20px)',
          }}
        />

        {/* Speaking Ripples */}
        {showRipples && <SpeakingRipples frame={frame} />}

        {/* Avatar */}
        <div
          style={{
            width: 120,
            height: 120,
            borderRadius: 60,
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            transform: `scale(${breathe})`,
            boxShadow: '0 8px 40px rgba(102, 126, 234, 0.3)',
            zIndex: 1,
          }}
        >
          <span
            style={{
              fontSize: 42,
              fontWeight: 500,
              color: 'white',
              fontFamily: 'SF Pro Display, system-ui, sans-serif',
            }}
          >
            SJ
          </span>
        </div>
      </div>

      {/* Recording Indicator */}
      <div
        style={{
          position: 'absolute',
          top: 180,
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          alignItems: 'center',
          gap: 8,
          padding: '6px 14px',
          background: 'rgba(239, 68, 68, 0.15)',
          borderRadius: 16,
          opacity: recordingOpacity,
        }}
      >
        <div
          style={{
            width: 6,
            height: 6,
            borderRadius: 3,
            background: '#EF4444',
            opacity: 0.5 + recordPulse * 0.5,
          }}
        />
        <span
          style={{
            fontSize: 12,
            fontWeight: 500,
            color: '#EF4444',
            fontFamily: 'SF Pro Text, system-ui, sans-serif',
          }}
        >
          Recording
        </span>
      </div>

      {/* Bottom Section - Controls */}
      <div style={{ position: 'relative', height: 180, paddingBottom: 30 }}>
        {/* Answer/Decline Buttons */}
        <div
          style={{
            position: 'absolute',
            left: 0,
            right: 0,
            bottom: 30,
            display: 'flex',
            justifyContent: 'center',
            gap: 60,
            opacity: answerButtonsOpacity,
            transform: `scale(${interpolate(answerMorphProgress, [0, 0.5], [1, 0.9], { extrapolateRight: 'clamp' })})`,
          }}
        >
          {/* Decline */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6 }}>
            <div
              style={{
                width: 52,
                height: 52,
                borderRadius: 26,
                background: '#EA4335',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="white">
                <path d="M12 9c-1.6 0-3.15.25-4.6.72v3.1c0 .39-.23.74-.56.9-.98.49-1.87 1.12-2.66 1.85-.18.18-.43.28-.7.28-.28 0-.53-.11-.71-.29L.29 13.08c-.18-.17-.29-.42-.29-.7 0-.28.11-.53.29-.71C3.34 8.78 7.46 7 12 7s8.66 1.78 11.71 4.67c.18.18.29.43.29.71 0 .28-.11.53-.29.71l-2.48 2.48c-.18.18-.43.29-.71.29-.27 0-.52-.11-.7-.28-.79-.74-1.68-1.36-2.66-1.85-.33-.16-.56-.5-.56-.9v-3.1C15.15 9.25 13.6 9 12 9z" />
              </svg>
            </div>
            <span style={{ fontSize: 11, color: 'rgba(255,255,255,0.7)', fontFamily: 'SF Pro Text, system-ui' }}>
              Decline
            </span>
          </div>

          {/* Answer */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6 }}>
            <div
              style={{
                width: 52,
                height: 52,
                borderRadius: 26,
                background: '#34A853',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                transform: `scale(${answerButtonScale})`,
              }}
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="white">
                <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
              </svg>
            </div>
            <span style={{ fontSize: 11, color: 'rgba(255,255,255,0.7)', fontFamily: 'SF Pro Text, system-ui' }}>
              Answer
            </span>
          </div>
        </div>

        {/* In-Call Controls */}
        <div
          style={{
            position: 'absolute',
            left: 0,
            right: 0,
            bottom: 30,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 20,
            opacity: actionButtonsOpacity,
            transform: `scale(${interpolate(answerMorphProgress, [0.3, 0.8], [0.9, 1], { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' })})`,
          }}
        >
          {/* Action Buttons Row */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: 12 }}>
            <CallActionButton icon="keypad" label="Keypad" />
            <CallActionButton icon="mute" label="Mute" />
            <CallActionButton icon="speaker" label="Speaker" />
            <CallActionButton icon="more" label="More" />
          </div>

          {/* End Call Button */}
          <div
            style={{
              width: 56,
              height: 56,
              borderRadius: 28,
              background: '#EA4335',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
              <path d="M12 9c-1.6 0-3.15.25-4.6.72v3.1c0 .39-.23.74-.56.9-.98.49-1.87 1.12-2.66 1.85-.18.18-.43.28-.7.28-.28 0-.53-.11-.71-.29L.29 13.08c-.18-.17-.29-.42-.29-.7 0-.28.11-.53.29-.71C3.34 8.78 7.46 7 12 7s8.66 1.78 11.71 4.67c.18.18.29.43.29.71 0 .28-.11.53-.29.71l-2.48 2.48c-.18.18-.43.29-.71.29-.27 0-.52-.11-.7-.28-.79-.74-1.68-1.36-2.66-1.85-.33-.16-.56-.5-.56-.9v-3.1C15.15 9.25 13.6 9 12 9z" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};
