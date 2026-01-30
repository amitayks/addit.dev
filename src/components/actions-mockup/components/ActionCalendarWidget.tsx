import { colors, interpolate, spring } from '@/animations';

interface ActionCalendarWidgetProps {
  entranceFrame: number;
  fps: number;
}

/**
 * Calendar action widget with blue theme.
 * Displays calendar icon, event title, date/time, and action button.
 */
export const ActionCalendarWidget: React.FC<ActionCalendarWidgetProps> = ({ entranceFrame, fps }) => {
  const entrance = spring({ frame: entranceFrame, fps, config: { damping: 12, stiffness: 100 } });

  return (
    <div
      style={{
        width: '100%',
        opacity: entrance,
        transform: `translateY(${interpolate(entrance, [0, 1], [20, 0])}px)`,
      }}
    >
      <div
        style={{
          background: colors.ticketBackground,
          borderRadius: 16,
          padding: 14,
          boxShadow: '0 4px 20px rgba(0,0,0,0.2)',
          border: `1px solid ${colors.glassBorder}`,
        }}
      >
        {/* Widget Header */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 10 }}>
          <div
            style={{
              width: 36,
              height: 36,
              borderRadius: 10,
              background: colors.widgetCalendar,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            {/* Calendar Icon */}
            <svg width="18" height="18" viewBox="0 0 24 24" fill="white">
              <rect
                x="3"
                y="4"
                width="18"
                height="18"
                rx="2"
                stroke="white"
                strokeWidth="2"
                fill="none"
              />
              <line x1="16" y1="2" x2="16" y2="6" stroke="white" strokeWidth="2" />
              <line x1="8" y1="2" x2="8" y2="6" stroke="white" strokeWidth="2" />
              <line x1="3" y1="10" x2="21" y2="10" stroke="white" strokeWidth="2" />
            </svg>
          </div>
          <div>
            <div
              style={{
                fontSize: 10,
                color: colors.graphite,
                fontWeight: 500,
                fontFamily: 'SF Pro Text, system-ui, sans-serif',
                textTransform: 'uppercase',
                letterSpacing: 0.5,
              }}
            >
              Calendar Event
            </div>
            <div
              style={{
                fontSize: 14,
                fontWeight: 600,
                color: colors.ink,
                fontFamily: 'SF Pro Display, system-ui, sans-serif',
              }}
            >
              Follow-up Meeting
            </div>
          </div>
        </div>

        {/* Widget Details */}
        <div
          style={{
            background: 'rgba(0, 0, 0, 0.3)',
            borderRadius: 10,
            padding: 10,
            marginBottom: 10,
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke={colors.graphite}
              strokeWidth="2"
            >
              <circle cx="12" cy="12" r="10" />
              <polyline points="12,6 12,12 16,14" />
            </svg>
            <span
              style={{
                fontSize: 13,
                color: colors.ink,
                fontFamily: 'SF Pro Text, system-ui, sans-serif',
              }}
            >
              Tomorrow, 10:00 AM
            </span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginTop: 6 }}>
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke={colors.graphite}
              strokeWidth="2"
            >
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
              <circle cx="12" cy="10" r="3" />
            </svg>
            <span
              style={{
                fontSize: 13,
                color: colors.graphite,
                fontFamily: 'SF Pro Text, system-ui, sans-serif',
              }}
            >
              Google Meet
            </span>
          </div>
        </div>

        {/* Action Button */}
        <div
          style={{
            background: colors.widgetCalendar,
            borderRadius: 10,
            padding: '10px 14px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 6,
          }}
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
            <line x1="12" y1="5" x2="12" y2="19" />
            <line x1="5" y1="12" x2="19" y2="12" />
          </svg>
          <span
            style={{
              fontSize: 13,
              fontWeight: 600,
              color: 'white',
              fontFamily: 'SF Pro Text, system-ui, sans-serif',
            }}
          >
            Add to Calendar
          </span>
        </div>
      </div>
    </div>
  );
};
