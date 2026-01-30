import React from 'react';
import { colors, interpolate, spring } from '@/animations';

interface ListeningOrbProps {
  frame: number;
  fps: number;
  isRecording: boolean;
  exitFrame: number;
  isExiting: boolean;
}

/**
 * Listening orb with breathing animation and glow effect.
 */
export const ListeningOrb: React.FC<ListeningOrbProps> = ({
  frame,
  fps,
  isRecording,
  exitFrame,
  isExiting,
}) => {
  // Continuous breathing animation - same speed throughout
  const breathe = Math.sin(frame * 0.08) * 0.15 + 1;

  // Glow pulse - continuous
  const glowPulse = Math.sin(frame * 0.06) * 0.3 + 0.7;

  // Exit animation - fade out and scale down
  const exitProgress = isExiting
    ? spring({
        frame: exitFrame,
        fps,
        config: { damping: 20, stiffness: 100 },
      })
    : 0;

  const exitOpacity = interpolate(exitProgress, [0, 1], [1, 0]);
  const exitScale = interpolate(exitProgress, [0, 1], [1, 0.8]);

  // Orb size stays the same
  const orbSize = 80;

  // Status text - keep consistent
  const statusText = 'Ready to Listen.';

  // Smooth fade for sub text when recording starts
  const subTextOpacity = isRecording ? 0 : 1;

  return (
    <div
      style={{
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 20,
        opacity: exitOpacity,
        transform: `scale(${exitScale})`,
      }}
    >
      {/* Orb Glow */}
      <div
        style={{
          position: 'absolute',
          width: 150,
          height: 150,
          borderRadius: '50%',
          background: `radial-gradient(circle, ${colors.orbGolden}50 0%, transparent 70%)`,
          opacity: glowPulse,
          filter: 'blur(20px)',
        }}
      />

      {/* Orb */}
      <div
        style={{
          width: orbSize,
          height: orbSize,
          borderRadius: '50%',
          background: `linear-gradient(135deg, ${colors.orbGolden} 0%, ${colors.primary} 50%, ${colors.error} 100%)`,
          transform: `scale(${breathe})`,
          boxShadow: `0 10px 40px ${colors.orbGolden}60`,
        }}
      />

      <span
        style={{
          fontSize: 18,
          fontWeight: 500,
          color: colors.ink,
          fontFamily: 'SF Pro Display, system-ui, sans-serif',
        }}
      >
        {statusText}
      </span>
      <span
        style={{
          fontSize: 14,
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
