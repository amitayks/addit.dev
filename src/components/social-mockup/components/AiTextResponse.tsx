import { colors, interpolate, spring } from '@/animations';

interface AiTextResponseProps {
  frame: number;
  fps: number;
}

/**
 * AI text response with typewriter effect.
 */
export const AiTextResponse: React.FC<AiTextResponseProps> = ({ frame, fps }) => {
  const entrance = spring({ frame, fps, config: { damping: 16, stiffness: 140 } });
  const text = "I'll draft that tweet for you. Here's a compelling post about your AI assistant launch:";
  const charsToShow = Math.min(Math.floor(frame * 2), text.length);

  return (
    <div
      style={{
        alignSelf: 'flex-start',
        maxWidth: '88%',
        background: colors.graphiteLight,
        borderRadius: 20,
        borderBottomLeftRadius: 6,
        padding: '14px 18px',
        opacity: entrance,
        transform: `translateY(${interpolate(entrance, [0, 1], [10, 0])}px)`,
      }}
    >
      <p
        style={{
          margin: 0,
          fontSize: 14,
          color: colors.ink,
          fontFamily: 'SF Pro Text, system-ui, sans-serif',
          lineHeight: 1.5,
          fontWeight: 400,
        }}
      >
        {text.substring(0, charsToShow)}
        {charsToShow < text.length && (
          <span style={{ opacity: Math.sin(frame * 0.3) > 0 ? 1 : 0 }}>|</span>
        )}
      </p>
    </div>
  );
};
