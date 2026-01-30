import { interpolate, spring } from '@/animations';

interface FactsMessageProps {
  frame: number;
  fps: number;
}

/**
 * AI findings bubble with key info extracted.
 */
export const FactsMessage: React.FC<FactsMessageProps> = ({ frame, fps }) => {
  const entrance = spring({ frame, fps, config: { damping: 14, stiffness: 100 } });

  return (
    <div
      style={{
        alignSelf: 'flex-start',
        maxWidth: '92%',
        background: 'rgba(245, 158, 11, 0.12)',
        borderRadius: 16,
        borderBottomLeftRadius: 4,
        padding: 14,
        border: '1px solid rgba(245, 158, 11, 0.3)',
        opacity: entrance,
        transform: `translateY(${interpolate(entrance, [0, 1], [10, 0])}px)`,
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 8 }}>
        <svg width="14" height="14" viewBox="0 0 24 24" fill="#D97706" stroke="none">
          <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
        </svg>
        <span
          style={{
            fontSize: 11,
            fontWeight: 600,
            color: '#D97706',
            fontFamily: 'SF Pro Text, system-ui',
          }}
        >
          Key Info Found
        </span>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
        <span
          style={{
            fontSize: 12,
            fontWeight: 500,
            color: 'rgba(255, 255, 255, 0.9)',
            fontFamily: 'SF Pro Text, system-ui',
          }}
        >
          • New contact: Michael Chen (CTO)
        </span>
        <span
          style={{
            fontSize: 12,
            fontWeight: 500,
            color: 'rgba(255, 255, 255, 0.9)',
            fontFamily: 'SF Pro Text, system-ui',
          }}
        >
          • Company: Startup Labs
        </span>
        <span
          style={{
            fontSize: 12,
            fontWeight: 500,
            color: 'rgba(255, 255, 255, 0.9)',
            fontFamily: 'SF Pro Text, system-ui',
          }}
        >
          • Topic: Partnership discussion
        </span>
      </div>
    </div>
  );
};
