import React from 'react';
import { colors, interpolate, spring } from '@/animations';

interface SuccessToastProps {
  frame: number;
  fps: number;
}

/**
 * Success toast that rises from bottom and expands from ball to pill.
 */
export const SuccessToast: React.FC<SuccessToastProps> = ({ frame, fps }) => {
  // Toast appears after frame 30
  const toastFrame = frame - 30;
  const isVisible = frame >= 30;

  if (!isVisible) return null;

  // Phase 1: Ball rises from bottom (0-15 frames)
  const riseProgress = spring({
    frame: toastFrame,
    fps,
    config: { damping: 14, stiffness: 120 },
  });

  // Phase 2: Ball expands to pill (starts at frame 10)
  const expandProgress =
    toastFrame >= 10
      ? spring({
          frame: toastFrame - 10,
          fps,
          config: { damping: 18, stiffness: 80 },
        })
      : 0;

  // Rise animation - from bottom of screen to final position
  const bottomPosition = interpolate(riseProgress, [0, 1], [-60, 100]);

  // Size animations - starts as 44px ball, expands to pill
  const toastWidth = interpolate(expandProgress, [0, 1], [44, 180], {
    extrapolateRight: 'clamp',
  });
  const toastHeight = 44;

  // Padding expands as width grows
  const horizontalPadding = interpolate(expandProgress, [0, 1], [0, 16], {
    extrapolateRight: 'clamp',
  });

  // Checkmark is always visible, scales with rise
  const checkmarkScale = interpolate(riseProgress, [0, 0.5, 1], [0.5, 1.1, 1]);
  const checkmarkOpacity = interpolate(riseProgress, [0, 0.3], [0, 1], {
    extrapolateRight: 'clamp',
  });

  // Text fades in as toast expands
  const textOpacity = interpolate(expandProgress, [0.3, 0.8], [0, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });
  const textWidth = interpolate(expandProgress, [0, 1], [0, 120], {
    extrapolateRight: 'clamp',
  });

  // Shadow grows with expansion
  const shadowSpread = interpolate(expandProgress, [0, 1], [10, 20]);
  const shadowOpacity = interpolate(riseProgress, [0, 1], [0.2, 0.4]);

  return (
    <div
      style={{
        position: 'absolute',
        bottom: bottomPosition,
        left: '50%',
        transform: 'translateX(-50%)',
        width: toastWidth,
        height: toastHeight,
        background: colors.success,
        borderRadius: toastHeight / 2,
        paddingLeft: horizontalPadding,
        paddingRight: horizontalPadding,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: interpolate(expandProgress, [0, 0.5], [0, 8], {
          extrapolateRight: 'clamp',
        }),
        boxShadow: `0 4px ${shadowSpread}px rgba(52, 199, 89, ${shadowOpacity})`,
        overflow: 'hidden',
      }}
    >
      {/* Checkmark - always centered in ball, stays left as text appears */}
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="white"
        strokeWidth="3"
        style={{
          opacity: checkmarkOpacity,
          transform: `scale(${checkmarkScale})`,
          flexShrink: 0,
        }}
      >
        <polyline points="20,6 9,17 4,12" />
      </svg>

      {/* Text - fades in and expands */}
      <div
        style={{
          width: textWidth,
          overflow: 'hidden',
          opacity: textOpacity,
        }}
      >
        <span
          style={{
            fontSize: 15,
            fontWeight: 600,
            color: 'white',
            fontFamily: 'SF Pro Text, system-ui',
            whiteSpace: 'nowrap',
          }}
        >
          Event Created!
        </span>
      </div>
    </div>
  );
};
