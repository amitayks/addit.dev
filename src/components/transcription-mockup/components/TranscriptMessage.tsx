import { interpolate, spring } from '@/animations';
import { colors } from '@/animations/colors';

interface TranscriptMessageProps {
  frame: number;
  fps: number;
}

/**
 * Transcript bubble with typewriter effect.
 */
export const TranscriptMessage: React.FC<TranscriptMessageProps> = ({ frame, fps }) => {
  const entrance = spring({ frame, fps, config: { damping: 14, stiffness: 100 } });
  const text = `"Hey! So Michael Chen from Startup Labs called. He's the CTO there. His number is 555-234-8901 and email is michael@startuplabs.co. Said to reach out about the partnership."`;
  const visibleChars = Math.floor(
    interpolate(frame, [0, 70], [0, text.length], { extrapolateRight: 'clamp' })
  );

  return (
    <div
      style={{
        alignSelf: 'flex-start',
        maxWidth: '92%',
        background: colors.ticketBackground,
        borderRadius: 16,
        borderBottomLeftRadius: 4,
        padding: 14,
        opacity: entrance,
        transform: `translateY(${interpolate(entrance, [0, 1], [10, 0])}px)`,
        border: `1px solid ${colors.ticketBorder}`,
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 8 }}>
        <svg
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          stroke={colors.graphite}
          strokeWidth="2"
        >
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
          <polyline points="14,2 14,8 20,8" />
          <line x1="16" y1="13" x2="8" y2="13" />
          <line x1="16" y1="17" x2="8" y2="17" />
          <polyline points="10,9 9,9 8,9" />
        </svg>
        <span
          style={{
            fontSize: 11,
            fontWeight: 600,
            color: colors.graphite,
            fontFamily: 'SF Pro Text, system-ui',
          }}
        >
          Transcript
        </span>
      </div>
      <p
        style={{
          margin: 0,
          fontSize: 13,
          color: colors.ink,
          fontFamily: 'SF Pro Text, system-ui',
          lineHeight: 1.5,
        }}
      >
        {text.substring(0, visibleChars)}
        {visibleChars < text.length && <span style={{ opacity: 0.5 }}>|</span>}
      </p>
    </div>
  );
};
