import React from 'react';
import { colors, interpolate, spring } from '@/animations';

interface ComposerBarProps {
  frame: number;
  fps: number;
  isRecording: boolean;
}

/**
 * Composer bar at the bottom of the app with recording state morph.
 */
export const ComposerBar: React.FC<ComposerBarProps> = ({
  frame,
  fps,
  isRecording,
}) => {
  const recordingFrame = isRecording ? frame - 90 : 0;
  const recordingSeconds = Math.floor(recordingFrame / fps);
  const recordingDisplay = `0:${String(Math.min(recordingSeconds, 4)).padStart(2, '0')}`;

  // Smooth morph transition for recording state
  const morphProgress = isRecording
    ? spring({
        frame: recordingFrame,
        fps,
        config: { damping: 18, stiffness: 80 },
      })
    : 0;

  // Waveform animation with smooth entrance
  const waveformBars = Array.from({ length: 24 }).map((_, i) => {
    const noise = Math.sin(recordingFrame * 0.15 + i * 0.4);
    const baseHeight = 4;
    const maxHeight = 18;
    const barEntrance = isRecording
      ? spring({
          frame: recordingFrame - i * 0.3,
          fps,
          config: { damping: 15, stiffness: 100 },
        })
      : 0;
    const height = baseHeight + Math.abs(noise) * maxHeight * barEntrance;
    return height;
  });

  // ===== CROSSFADE OPACITIES =====
  // Plus button: fade out first, then shrink width
  const plusOpacity = interpolate(morphProgress, [0, 0.4], [1, 0], {
    extrapolateRight: 'clamp',
  });
  const plusWidth = interpolate(morphProgress, [0.3, 0.7], [40, 0], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });

  // Message text fades out
  const messageOpacity = interpolate(morphProgress, [0, 0.5], [1, 0], {
    extrapolateRight: 'clamp',
  });

  // Waveform + timer fade in
  const recordingOpacity = interpolate(morphProgress, [0.3, 0.7], [0, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });

  // ===== MIC BUTTON MORPH =====
  // Background color interpolation (dark grey to red)
  const micBgR = interpolate(morphProgress, [0, 0.6], [55, 255], {
    extrapolateRight: 'clamp',
  });
  const micBgG = interpolate(morphProgress, [0, 0.6], [55, 59], {
    extrapolateRight: 'clamp',
  });
  const micBgB = interpolate(morphProgress, [0, 0.6], [55, 48], {
    extrapolateRight: 'clamp',
  });

  // Mic icon fades out, stop icon fades in
  const micIconOpacity = interpolate(morphProgress, [0, 0.5], [1, 0], {
    extrapolateRight: 'clamp',
  });
  const stopIconOpacity = interpolate(morphProgress, [0.4, 0.8], [0, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });

  // Scale pulse on click
  const micButtonScale = isRecording
    ? interpolate(
        spring({
          frame: recordingFrame,
          fps,
          config: { damping: 12, stiffness: 200 },
        }),
        [0, 0.3, 1],
        [1, 1.1, 1]
      )
    : 1;

  // ===== CONTAINER MORPH =====
  // Background tint interpolation (dark theme)
  const containerBgR = interpolate(morphProgress, [0, 1], [26, 40]);
  const containerBgG = interpolate(morphProgress, [0, 1], [26, 20]);
  const containerBgB = interpolate(morphProgress, [0, 1], [26, 20]);
  const containerBgA = interpolate(morphProgress, [0, 1], [0.9, 0.95]);

  // Border color interpolation (dark theme)
  const borderR = interpolate(morphProgress, [0, 0.8], [255, 255], {
    extrapolateRight: 'clamp',
  });
  const borderG = interpolate(morphProgress, [0, 0.8], [255, 59], {
    extrapolateRight: 'clamp',
  });
  const borderB = interpolate(morphProgress, [0, 0.8], [255, 48], {
    extrapolateRight: 'clamp',
  });
  const borderA = interpolate(morphProgress, [0, 0.8], [0.1, 0.3], {
    extrapolateRight: 'clamp',
  });

  return (
    <div
      style={{
        paddingBottom: 40,
        paddingLeft: 16,
        paddingRight: 16,
      }}
    >
      <div
        style={{
          height: 56,
          borderRadius: 28,
          background: `rgba(${containerBgR}, ${containerBgG}, ${containerBgB}, ${containerBgA})`,
          backdropFilter: 'blur(20px)',
          display: 'flex',
          alignItems: 'center',
          padding: 8,
          boxShadow: '0 4px 20px rgba(0, 0, 0, 0.3)',
          border: `1px solid rgba(${borderR}, ${borderG}, ${borderB}, ${borderA})`,
          overflow: 'hidden',
        }}
      >
        {/* Plus Button - shrinks width as it fades */}
        <div
          style={{
            width: plusWidth,
            height: 40,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            opacity: plusOpacity,
            overflow: 'hidden',
            flexShrink: 0,
          }}
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke={colors.graphite}
            strokeWidth="2"
            style={{ flexShrink: 0 }}
          >
            <line x1="12" y1="5" x2="12" y2="19" />
            <line x1="5" y1="12" x2="19" y2="12" />
          </svg>
        </div>

        {/* Content - crossfade between message and waveform */}
        <div
          style={{
            flex: 1,
            display: 'flex',
            alignItems: 'center',
            position: 'relative',
            height: 40,
            marginLeft: interpolate(morphProgress, [0.3, 0.7], [8, 0], {
              extrapolateLeft: 'clamp',
              extrapolateRight: 'clamp',
            }),
          }}
        >
          {/* Message text (fades out) */}
          <span
            style={{
              position: 'absolute',
              left: 8,
              fontSize: 17,
              color: colors.graphite,
              fontFamily: 'SF Pro Text, system-ui, sans-serif',
              opacity: messageOpacity,
              whiteSpace: 'nowrap',
            }}
          >
            Message
          </span>

          {/* Waveform + Timer (fades in) */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 8,
              opacity: recordingOpacity,
            }}
          >
            {/* Waveform bars */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 2,
                height: 24,
              }}
            >
              {waveformBars.map((height, i) => (
                <div
                  key={i}
                  style={{
                    width: 3,
                    height: Math.max(4, height),
                    borderRadius: 1.5,
                    background: colors.error,
                    opacity: 0.85,
                  }}
                />
              ))}
            </div>

            {/* Timer */}
            <span
              style={{
                fontSize: 15,
                fontWeight: 600,
                color: colors.error,
                fontFamily: 'SF Pro Text, system-ui, sans-serif',
              }}
            >
              {recordingDisplay}
            </span>
          </div>
        </div>

        {/* Mic/Stop Button - smooth morph */}
        <div
          style={{
            width: 40,
            height: 40,
            borderRadius: 20,
            background: `rgb(${micBgR}, ${micBgG}, ${micBgB})`,
            transform: `scale(${micButtonScale})`,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative',
            flexShrink: 0,
          }}
        >
          {/* Mic icon - fades out */}
          <svg
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            stroke={colors.ink}
            strokeWidth="2"
            style={{
              position: 'absolute',
              opacity: micIconOpacity,
            }}
          >
            <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z" />
            <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
            <line x1="12" y1="19" x2="12" y2="23" />
          </svg>

          {/* Stop icon - fades in */}
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="white"
            style={{
              position: 'absolute',
              opacity: stopIconOpacity,
              transform: `scale(${interpolate(stopIconOpacity, [0, 1], [0.8, 1])})`,
            }}
          >
            <rect x="4" y="4" width="16" height="16" rx="2" />
          </svg>
        </div>
      </div>
    </div>
  );
};
