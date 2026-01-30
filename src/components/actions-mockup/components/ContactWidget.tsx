import { colors, interpolate, spring } from '@/animations';

interface ContactWidgetProps {
  entranceFrame: number;
  fps: number;
}

/**
 * Contact action widget with purple theme.
 * Displays contact icon, name, phone number, and action button.
 */
export const ContactWidget: React.FC<ContactWidgetProps> = ({ entranceFrame, fps }) => {
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
              background: colors.widgetContact,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            {/* User Plus Icon */}
            <svg width="18" height="18" viewBox="0 0 24 24" fill="white">
              <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
              <circle cx="8.5" cy="7" r="4" />
              <line x1="20" y1="8" x2="20" y2="14" />
              <line x1="23" y1="11" x2="17" y2="11" />
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
              New Contact
            </div>
            <div
              style={{
                fontSize: 14,
                fontWeight: 600,
                color: colors.ink,
                fontFamily: 'SF Pro Display, system-ui, sans-serif',
              }}
            >
              Alex from Acme Inc.
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
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>
            <span
              style={{
                fontSize: 13,
                color: colors.ink,
                fontFamily: 'SF Pro Text, system-ui, sans-serif',
              }}
            >
              (415) 555-0123
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
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
              <polyline points="22,6 12,13 2,6" />
            </svg>
            <span
              style={{
                fontSize: 13,
                color: colors.graphite,
                fontFamily: 'SF Pro Text, system-ui, sans-serif',
              }}
            >
              alex@acme.com
            </span>
          </div>
        </div>

        {/* Action Button */}
        <div
          style={{
            background: colors.widgetContact,
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
            Add to Contacts
          </span>
        </div>
      </div>
    </div>
  );
};
