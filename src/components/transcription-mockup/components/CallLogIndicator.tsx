import { interpolate, spring } from '@/animations';
import { colors } from '@/animations/colors';

interface CallLogIndicatorProps {
  frame: number;
  fps: number;
}

/**
 * Call log pill showing caller info and duration.
 */
export const CallLogIndicator: React.FC<CallLogIndicatorProps> = ({ frame, fps }) => {
  const pillEntrance = spring({ frame, fps, config: { damping: 14, stiffness: 150 } });
  const lineEntrance = spring({
    frame: Math.max(0, frame - 5),
    fps,
    config: { damping: 14, stiffness: 150 },
  });

  const pillScale = interpolate(pillEntrance, [0, 1], [0.8, 1]);
  const pillTranslateY = interpolate(pillEntrance, [0, 1], [-20, 0]);
  const pillOpacity = pillEntrance;
  const lineScaleX = Math.max(0, lineEntrance);

  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '6px 12px',
        width: '100%',
      }}
    >
      <div
        style={{
          flex: 1,
          height: 1,
          background: 'rgba(255, 255, 255, 0.1)',
          transform: `scaleX(${lineScaleX})`,
          transformOrigin: 'right center',
        }}
      />
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          background: colors.ticketBackground,
          borderRadius: 50,
          padding: '8px 10px 8px 14px',
          border: `1px solid ${colors.ticketBorder}`,
          transform: `translateY(${pillTranslateY}px) scale(${pillScale})`,
          opacity: pillOpacity,
          gap: 10,
        }}
      >
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke={colors.graphite}
          strokeWidth="2"
        >
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
          <polyline points="16 2 16 8 22 8" />
          <line x1="22" y1="2" x2="16" y2="8" />
        </svg>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <span
            style={{
              fontSize: 13,
              fontWeight: 500,
              color: colors.ink,
              fontFamily: 'SF Pro Text, system-ui',
            }}
          >
            Sarah Johnson
          </span>
          <span
            style={{
              fontSize: 10,
              color: colors.graphite,
              fontFamily: 'SF Pro Text, system-ui',
            }}
          >
            5:50 - Just now
          </span>
        </div>
        <div
          style={{
            width: 28,
            height: 28,
            borderRadius: 14,
            background: colors.accent,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginLeft: 2,
          }}
        >
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5">
            <polygon points="5,3 19,12 5,21" fill="white" stroke="none" />
          </svg>
        </div>
      </div>
      <div
        style={{
          flex: 1,
          height: 1,
          background: 'rgba(255, 255, 255, 0.1)',
          transform: `scaleX(${lineScaleX})`,
          transformOrigin: 'left center',
        }}
      />
    </div>
  );
};
