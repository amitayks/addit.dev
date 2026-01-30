import { colors, interpolate, spring } from '@/animations';

interface ComposerBarProps {
  frame: number;
  fps: number;
  isRecording: boolean;
}

/**
 * Message composer bar with recording morph animation.
 */
export const ComposerBar: React.FC<ComposerBarProps> = ({ frame, fps, isRecording }) => {
  const recordingFrame = isRecording ? frame - 60 : 0;
  const recordingSeconds = Math.floor(recordingFrame / fps);
  const recordingDisplay = `0:${String(Math.min(recordingSeconds, 4)).padStart(2, '0')}`;

  const morphProgress = isRecording
    ? spring({ frame: recordingFrame, fps, config: { damping: 18, stiffness: 80 } })
    : 0;

  // Waveform bars
  const waveformBars = Array.from({ length: 20 }).map((_, i) => {
    const noise = Math.sin(recordingFrame * 0.15 + i * 0.4);
    const barEntrance = isRecording
      ? spring({ frame: recordingFrame - i * 0.3, fps, config: { damping: 15, stiffness: 100 } })
      : 0;
    return 3 + Math.abs(noise) * 14 * barEntrance;
  });

  const plusOpacity = interpolate(morphProgress, [0, 0.4], [1, 0], { extrapolateRight: 'clamp' });
  const plusWidth = interpolate(morphProgress, [0.3, 0.7], [36, 0], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });
  const messageOpacity = interpolate(morphProgress, [0, 0.5], [1, 0], { extrapolateRight: 'clamp' });
  const recordingOpacity = interpolate(morphProgress, [0.3, 0.7], [0, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });

  const micBgR = interpolate(morphProgress, [0, 0.6], [60, 239], { extrapolateRight: 'clamp' });
  const micBgG = interpolate(morphProgress, [0, 0.6], [60, 68], { extrapolateRight: 'clamp' });
  const micBgB = interpolate(morphProgress, [0, 0.6], [60, 68], { extrapolateRight: 'clamp' });

  const micIconOpacity = interpolate(morphProgress, [0, 0.5], [1, 0], { extrapolateRight: 'clamp' });
  const stopIconOpacity = interpolate(morphProgress, [0.4, 0.8], [0, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });

  const micButtonScale = isRecording
    ? interpolate(
        spring({ frame: recordingFrame, fps, config: { damping: 12, stiffness: 200 } }),
        [0, 0.3, 1],
        [1, 1.1, 1]
      )
    : 1;

  // ===== CONTAINER MORPH =====
  // Background color interpolation (dark to reddish tint)
  const containerBgR = interpolate(morphProgress, [0, 1], [26, 40], { extrapolateRight: 'clamp' });
  const containerBgG = interpolate(morphProgress, [0, 1], [26, 20], { extrapolateRight: 'clamp' });
  const containerBgB = interpolate(morphProgress, [0, 1], [26, 20], { extrapolateRight: 'clamp' });
  const containerBgA = interpolate(morphProgress, [0, 1], [0.9, 0.95], { extrapolateRight: 'clamp' });

  // Border color interpolation (white to red)
  const borderR = interpolate(morphProgress, [0, 0.8], [255, 239], { extrapolateRight: 'clamp' });
  const borderG = interpolate(morphProgress, [0, 0.8], [255, 68], { extrapolateRight: 'clamp' });
  const borderB = interpolate(morphProgress, [0, 0.8], [255, 68], { extrapolateRight: 'clamp' });
  const borderA = interpolate(morphProgress, [0, 0.8], [0.1, 0.3], { extrapolateRight: 'clamp' });

  // Content margin animation
  const contentMarginLeft = interpolate(morphProgress, [0.3, 0.7], [6, 0], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });

  return (
    <div style={{ paddingBottom: 32, paddingLeft: 12, paddingRight: 12 }}>
      <div
        style={{
          height: 48,
          borderRadius: 24,
          background: `rgba(${containerBgR}, ${containerBgG}, ${containerBgB}, ${containerBgA})`,
          backdropFilter: 'blur(20px)',
          display: 'flex',
          alignItems: 'center',
          padding: 6,
          boxShadow: '0 4px 20px rgba(0, 0, 0, 0.15)',
          border: `1px solid rgba(${borderR}, ${borderG}, ${borderB}, ${borderA})`,
          overflow: 'hidden',
        }}
      >
        {/* Plus button */}
        <div
          style={{
            width: plusWidth,
            height: 36,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            opacity: plusOpacity,
            overflow: 'hidden',
            flexShrink: 0,
          }}
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke={colors.graphite}
            strokeWidth="2"
          >
            <line x1="12" y1="5" x2="12" y2="19" />
            <line x1="5" y1="12" x2="19" y2="12" />
          </svg>
        </div>

        {/* Message / Waveform */}
        <div
          style={{
            flex: 1,
            display: 'flex',
            alignItems: 'center',
            position: 'relative',
            height: 36,
            marginLeft: contentMarginLeft,
          }}
        >
          <span
            style={{
              position: 'absolute',
              left: 0,
              fontSize: 15,
              color: colors.graphite,
              fontFamily: 'SF Pro Text, system-ui, sans-serif',
              opacity: messageOpacity,
              whiteSpace: 'nowrap',
            }}
          >
            Message
          </span>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 6,
              opacity: recordingOpacity,
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: 2, height: 20 }}>
              {waveformBars.map((height, i) => (
                <div
                  key={i}
                  style={{
                    width: 2,
                    height: Math.max(3, height),
                    borderRadius: 1,
                    background: colors.error,
                    opacity: 0.85,
                  }}
                />
              ))}
            </div>
            <span
              style={{
                fontSize: 13,
                fontWeight: 600,
                color: colors.error,
                fontFamily: 'SF Pro Text, system-ui, sans-serif',
              }}
            >
              {recordingDisplay}
            </span>
          </div>
        </div>

        {/* Mic / Stop button */}
        <div
          style={{
            width: 36,
            height: 36,
            borderRadius: 18,
            background: `rgb(${micBgR}, ${micBgG}, ${micBgB})`,
            transform: `scale(${micButtonScale})`,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative',
            flexShrink: 0,
          }}
        >
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke={colors.graphite}
            strokeWidth="2"
            style={{ position: 'absolute', opacity: micIconOpacity }}
          >
            <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z" />
            <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
            <line x1="12" y1="19" x2="12" y2="23" />
          </svg>
          <svg
            width="14"
            height="14"
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
