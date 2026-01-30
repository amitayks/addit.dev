import { colors } from '@/animations/colors';

/**
 * Message composer bar at bottom of chat interface.
 */
export const ComposerBar: React.FC = () => {
  return (
    <div style={{ paddingBottom: 36, paddingLeft: 12, paddingRight: 12 }}>
      <div
        style={{
          height: 48,
          borderRadius: 24,
          background: 'rgba(26, 26, 26, 0.9)',
          backdropFilter: 'blur(20px)',
          display: 'flex',
          alignItems: 'center',
          padding: 6,
          boxShadow: '0 4px 20px rgba(0, 0, 0, 0.15)',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          overflow: 'hidden',
        }}
      >
        <div
          style={{
            width: 36,
            height: 36,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexShrink: 0,
          }}
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke={colors.graphite}
            strokeWidth="2"
          >
            <line x1="12" y1="5" x2="12" y2="19" />
            <line x1="5" y1="12" x2="19" y2="12" />
          </svg>
        </div>
        <div style={{ flex: 1, display: 'flex', alignItems: 'center', height: 36, marginLeft: 6 }}>
          <span
            style={{
              fontSize: 15,
              color: colors.graphite,
              fontFamily: 'SF Pro Text, system-ui, sans-serif',
            }}
          >
            Message
          </span>
        </div>
        <div
          style={{
            width: 36,
            height: 36,
            borderRadius: 18,
            background: 'rgba(60, 60, 60, 0.8)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexShrink: 0,
          }}
        >
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke={colors.graphite}
            strokeWidth="2"
          >
            <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z" />
            <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
            <line x1="12" y1="19" x2="12" y2="23" />
          </svg>
        </div>
      </div>
    </div>
  );
};
