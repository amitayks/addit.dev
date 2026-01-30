import React from 'react';
import { colors, spring } from '@/animations';

interface TypingIndicatorProps {
  frame: number;
  fps: number;
}

/**
 * Three bouncing dots typing indicator.
 */
export const TypingIndicator: React.FC<TypingIndicatorProps> = ({
  frame,
  fps,
}) => {
  const entrance = spring({
    frame,
    fps,
    config: { damping: 200 },
  });

  return (
    <div
      style={{
        alignSelf: 'flex-start',
        display: 'flex',
        alignItems: 'center',
        gap: 10,
        padding: '10px 16px',
        background: colors.graphiteLight,
        borderRadius: 18,
        opacity: entrance,
      }}
    >
      {[0, 1, 2].map((i) => (
        <div
          key={i}
          style={{
            width: 10,
            height: 10,
            borderRadius: 5,
            background: colors.graphite,
            opacity: 0.4 + Math.sin(frame * 0.2 + i * 1.2) * 0.3 + 0.3,
            transform: `translateY(${Math.sin(frame * 0.2 + i * 1.2) * 4}px)`,
          }}
        />
      ))}
    </div>
  );
};
