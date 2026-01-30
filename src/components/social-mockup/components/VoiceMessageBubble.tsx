import { colors, interpolate, spring } from '@/animations';

interface VoiceMessageBubbleProps {
  frame: number;
  fps: number;
}

/**
 * User's voice message bubble.
 */
export const VoiceMessageBubble: React.FC<VoiceMessageBubbleProps> = ({ frame, fps }) => {
  const entrance = spring({ frame, fps, config: { damping: 14, stiffness: 120 } });

  return (
    <div
      style={{
        alignSelf: 'flex-end',
        maxWidth: '88%',
        background: colors.accent,
        borderRadius: 20,
        borderBottomRightRadius: 6,
        padding: '14px 18px',
        opacity: entrance,
        transform: `translateY(${interpolate(entrance, [0, 1], [20, 0])}px) scale(${interpolate(entrance, [0, 1], [0.9, 1])})`,
      }}
    >
      <p
        style={{
          margin: 0,
          fontSize: 14,
          color: 'white',
          fontFamily: 'SF Pro Text, system-ui, sans-serif',
          lineHeight: 1.5,
          fontWeight: 500,
        }}
      >
        "Draft a tweet about our new AI assistant launch"
      </p>
    </div>
  );
};
