import React from 'react';
import { colors, interpolate, spring } from '@/animations';

interface AiTextResponseProps {
  frame: number;
  fps: number;
}

/**
 * AI text response with typewriter effect.
 */
export const AiTextResponse: React.FC<AiTextResponseProps> = ({
  frame,
  fps,
}) => {
  const entrance = spring({
    frame,
    fps,
    config: { damping: 16, stiffness: 140 },
  });

  const text =
    "I'll schedule that meeting for you. Creating a calendar event for tomorrow at 2:00 PM with the design team to review app mockups.";

  // Typewriter effect
  const charsToShow = Math.min(Math.floor(frame * 2), text.length);
  const displayText = text.substring(0, charsToShow);

  return (
    <div
      style={{
        alignSelf: 'flex-start',
        maxWidth: '90%',
        background: colors.graphiteLight,
        borderRadius: 24,
        borderBottomLeftRadius: 8,
        padding: '18px 22px',
        opacity: entrance,
        transform: `translateY(${interpolate(entrance, [0, 1], [10, 0])}px)`,
      }}
    >
      <p
        style={{
          margin: 0,
          fontSize: 21,
          color: colors.ink,
          fontFamily: 'SF Pro Text, system-ui, sans-serif',
          lineHeight: 1.5,
          fontWeight: 400,
        }}
      >
        {displayText}
        {charsToShow < text.length && (
          <span style={{ opacity: Math.sin(frame * 0.3) > 0 ? 1 : 0 }}>|</span>
        )}
      </p>
    </div>
  );
};
