import React from 'react';
import { colors, interpolate, spring } from '@/animations';

interface VoiceMessageBubbleProps {
  frame: number;
  fps: number;
}

/**
 * User voice message bubble with entrance animation.
 */
export const VoiceMessageBubble: React.FC<VoiceMessageBubbleProps> = ({
  frame,
  fps,
}) => {
  const entrance = spring({
    frame,
    fps,
    config: { damping: 14, stiffness: 120 },
  });

  return (
    <div
      style={{
        alignSelf: 'flex-end',
        maxWidth: '90%',
        background: colors.accent,
        borderRadius: 24,
        borderBottomRightRadius: 8,
        padding: '18px 22px',
        opacity: entrance,
        transform: `translateY(${interpolate(entrance, [0, 1], [20, 0])}px) scale(${interpolate(entrance, [0, 1], [0.9, 1])})`,
      }}
    >
      <p
        style={{
          margin: 0,
          fontSize: 22,
          color: 'white',
          fontFamily: 'SF Pro Text, system-ui, sans-serif',
          lineHeight: 1.5,
          fontWeight: 500,
        }}
      >
        "Schedule a meeting with the design team for tomorrow at 2pm"
      </p>
    </div>
  );
};
