import { colors, interpolate, spring } from '@/animations';

interface ListeningOrbProps {
  frame: number;
  fps: number;
  isRecording: boolean;
  exitFrame: number;
  isExiting: boolean;
}

/**
 * Listening orb with breathing animation and exit state.
 * Matches the TranscriptionMockup orb styling.
 */
export const ListeningOrb: React.FC<ListeningOrbProps> = ({
  frame,
  isRecording,
  exitFrame,
  fps,
  isExiting,
}) => {
  const breathe = Math.sin(frame * 0.08) * 0.15 + 1;
  const glowPulse = Math.sin(frame * 0.06) * 0.3 + 0.7;

  const exitProgress = isExiting
    ? spring({ frame: exitFrame, fps, config: { damping: 20, stiffness: 100 } })
    : 0;

  const exitOpacity = interpolate(exitProgress, [0, 1], [1, 0]);
  const exitScale = interpolate(exitProgress, [0, 1], [1, 0.8]);
  const subTextOpacity = isRecording ? 0 : 1;

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 16,
        opacity: exitOpacity,
        transform: `scale(${exitScale})`,
      }}
    >
      {/* Glow */}
      <div
        style={{
          position: 'absolute',
          width: 120,
          height: 120,
          borderRadius: '50%',
          background: `radial-gradient(circle, ${colors.orbGolden}50 0%, transparent 70%)`,
          opacity: glowPulse,
          filter: 'blur(20px)',
        }}
      />
      {/* Orb */}
      <div
        style={{
          width: 64,
          height: 64,
          borderRadius: '50%',
          background: `linear-gradient(135deg, ${colors.orbGolden} 0%, ${colors.primary} 50%, ${colors.error} 100%)`,
          transform: `scale(${breathe})`,
          boxShadow: `0 8px 32px ${colors.orbGolden}60`,
        }}
      />
      <span
        style={{
          fontSize: 15,
          fontWeight: 500,
          color: colors.ink,
          fontFamily: 'SF Pro Display, system-ui, sans-serif',
        }}
      >
        Ready to Listen.
      </span>
      <span
        style={{
          fontSize: 12,
          color: colors.graphite,
          fontFamily: 'SF Pro Text, system-ui, sans-serif',
          opacity: subTextOpacity,
        }}
      >
        Tap the mic to start
      </span>
    </div>
  );
};
