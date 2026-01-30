import { colors, spring } from '@/animations';

interface TypingIndicatorProps {
  frame: number;
  fps: number;
}

/**
 * AI typing indicator with bouncing dots.
 */
export const TypingIndicator: React.FC<TypingIndicatorProps> = ({ frame, fps }) => {
  const entrance = spring({ frame, fps, config: { damping: 200 } });

  return (
    <div
      style={{
        alignSelf: 'flex-start',
        display: 'flex',
        alignItems: 'center',
        gap: 6,
        padding: '8px 14px',
        background: colors.graphiteLight,
        borderRadius: 16,
        opacity: entrance,
      }}
    >
      {[0, 1, 2].map((i) => (
        <div
          key={i}
          style={{
            width: 8,
            height: 8,
            borderRadius: 4,
            background: colors.graphite,
            opacity: 0.4 + Math.sin(frame * 0.2 + i * 1.2) * 0.3 + 0.3,
            transform: `translateY(${Math.sin(frame * 0.2 + i * 1.2) * 3}px)`,
          }}
        />
      ))}
    </div>
  );
};
