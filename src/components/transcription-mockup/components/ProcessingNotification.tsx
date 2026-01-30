import { interpolate, spring } from '@/animations';
import { colors } from '@/animations/colors';

interface ProcessingNotificationProps {
  frame: number;
  fps: number;
  phase: 'transcribing' | 'analyzing';
}

/**
 * Foreground notification showing processing status with shimmer effect.
 */
export const ProcessingNotification: React.FC<ProcessingNotificationProps> = ({
  frame,
  fps,
  phase,
}) => {
  const entrance = spring({ frame, fps, config: { damping: 14, stiffness: 100 } });

  // Exit animation (at the end of each phase)
  const exitStart = phase === 'transcribing' ? 70 : 70;
  const isExiting = frame >= exitStart;
  const exitProgress = isExiting
    ? spring({ frame: frame - exitStart, fps, config: { damping: 14, stiffness: 150 } })
    : 0;

  const translateY =
    interpolate(entrance, [0, 1], [-80, 0]) + interpolate(exitProgress, [0, 1], [0, -80]);
  const opacity =
    interpolate(entrance, [0, 1], [0, 1]) * interpolate(exitProgress, [0, 1], [1, 0]);

  const phaseText = phase === 'transcribing' ? 'Transcribing audio...' : 'Analyzing content...';

  // Shimmer effect
  const shimmerProgress = (frame % 45) / 45;

  return (
    <div
      style={{
        position: 'absolute',
        top: 54,
        left: 12,
        right: 12,
        background: 'rgba(26, 26, 26, 0.95)',
        borderRadius: 14,
        padding: 12,
        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.3)',
        transform: `translateY(${translateY}px)`,
        opacity,
        zIndex: 200,
        overflow: 'hidden',
        border: '1px solid rgba(255, 255, 255, 0.1)',
      }}
    >
      {/* Shimmer overlay */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: `linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.08) 50%, transparent 100%)`,
          transform: `translateX(${interpolate(shimmerProgress, [0, 1], [-100, 200])}%)`,
          pointerEvents: 'none',
        }}
      />

      <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
        {/* App Icon */}
        <div
          style={{
            width: 36,
            height: 36,
            borderRadius: 9,
            background: `linear-gradient(135deg, ${colors.orbGolden} 0%, #F59E0B 100%)`,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexShrink: 0,
          }}
        >
          {phase === 'transcribing' ? (
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
              <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z" />
              <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
              <line x1="12" y1="19" x2="12" y2="23" />
              <line x1="8" y1="23" x2="16" y2="23" />
            </svg>
          ) : (
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
              <path d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 1 1 7.072 0l-.548.547A3.374 3.374 0 0 0 14 18.469V19a2 2 0 1 1-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
            </svg>
          )}
        </div>

        <div style={{ flex: 1, minWidth: 0 }}>
          <span
            style={{
              fontSize: 13,
              fontWeight: 600,
              color: colors.ink,
              fontFamily: 'SF Pro Display, system-ui, sans-serif',
              display: 'block',
            }}
          >
            Addit - Processing
          </span>
          <span
            style={{
              fontSize: 11,
              fontWeight: 400,
              color: colors.graphite,
              fontFamily: 'SF Pro Display, system-ui, sans-serif',
            }}
          >
            {phaseText}
          </span>
        </div>

        {/* Spinner */}
        <div style={{ width: 20, height: 20, flexShrink: 0 }}>
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            style={{ transform: `rotate(${frame * 6}deg)` }}
          >
            <circle cx="12" cy="12" r="10" stroke="rgba(255, 255, 255, 0.2)" strokeWidth="3" fill="none" />
            <circle
              cx="12"
              cy="12"
              r="10"
              stroke={colors.orbGolden}
              strokeWidth="3"
              fill="none"
              strokeDasharray="63"
              strokeDashoffset="45"
              strokeLinecap="round"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};
