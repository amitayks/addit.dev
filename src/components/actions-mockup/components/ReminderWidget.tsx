import { colors, interpolate, spring } from '@/animations';

interface ReminderWidgetProps {
  entranceFrame: number;
  fps: number;
}

/**
 * Reminder action widget with amber theme.
 * Displays reminder icon, title, due time, and action button.
 */
export const ReminderWidget: React.FC<ReminderWidgetProps> = ({ entranceFrame, fps }) => {
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
              background: colors.widgetReminder,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            {/* Bell Icon */}
            <svg width="18" height="18" viewBox="0 0 24 24" fill="white">
              <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
              <path d="M13.73 21a2 2 0 0 1-3.46 0" />
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
              Reminder
            </div>
            <div
              style={{
                fontSize: 14,
                fontWeight: 600,
                color: colors.ink,
                fontFamily: 'SF Pro Display, system-ui, sans-serif',
              }}
            >
              Call back Sarah Chen
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
              Today, 3:00 PM
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
              <line x1="4" y1="9" x2="20" y2="9" />
              <line x1="4" y1="15" x2="20" y2="15" />
              <line x1="10" y1="3" x2="8" y2="21" />
              <line x1="16" y1="3" x2="14" y2="21" />
            </svg>
            <span
              style={{
                fontSize: 13,
                color: colors.graphite,
                fontFamily: 'SF Pro Text, system-ui, sans-serif',
              }}
            >
              Discuss project timeline
            </span>
          </div>
        </div>

        {/* Action Button */}
        <div
          style={{
            background: colors.widgetReminder,
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
            Set Reminder
          </span>
        </div>
      </div>
    </div>
  );
};
