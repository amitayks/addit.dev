import { interpolate, spring } from '@/animations';
import { colors } from '@/animations/colors';

interface ContactWidgetProps {
  frame: number;
  fps: number;
  isClicked: boolean;
  isSaved: boolean;
}

/**
 * Save contact widget with click and success states.
 */
export const ContactWidget: React.FC<ContactWidgetProps> = ({
  frame,
  fps,
  isClicked,
  isSaved,
}) => {
  const entrance = spring({ frame, fps, config: { damping: 14, stiffness: 100 } });

  // Click animation (brief pulse) - triggered at specific frame offset
  const clickLocalFrame = 60; // When click happens relative to widget appearance
  const clickProgress =
    isClicked && frame >= clickLocalFrame
      ? spring({ frame: frame - clickLocalFrame, fps, config: { damping: 12, stiffness: 200 } })
      : 0;
  const buttonScale = isClicked
    ? interpolate(clickProgress, [0, 0.15, 0.3], [1, 0.95, 1], { extrapolateRight: 'clamp' })
    : 1;

  // Saved state animation
  const savedLocalFrame = 100; // When saved happens relative to widget appearance
  const savedProgress =
    isSaved && frame >= savedLocalFrame
      ? spring({ frame: frame - savedLocalFrame, fps, config: { damping: 14, stiffness: 120 } })
      : 0;

  // Button color: purple (save) → green (saved/add again)
  const btnBgR = interpolate(savedProgress, [0, 1], [139, 34], { extrapolateRight: 'clamp' });
  const btnBgG = interpolate(savedProgress, [0, 1], [92, 197], { extrapolateRight: 'clamp' });
  const btnBgB = interpolate(savedProgress, [0, 1], [246, 94], { extrapolateRight: 'clamp' });

  // Text crossfade
  const saveTextOpacity = interpolate(savedProgress, [0, 0.4], [1, 0], { extrapolateRight: 'clamp' });
  const addAgainOpacity = interpolate(savedProgress, [0.3, 0.7], [0, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });

  return (
    <div
      style={{
        alignSelf: 'flex-start',
        width: '92%',
        opacity: entrance,
        transform: `translateY(${interpolate(entrance, [0, 1], [30, 0])}px)`,
      }}
    >
      <div
        style={{
          background: colors.ticketBackground,
          borderRadius: 16,
          padding: 14,
          boxShadow: '0 4px 20px rgba(0,0,0,0.15)',
          border: `1px solid ${colors.widgetContact}30`,
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 10 }}>
          <div
            style={{
              width: 40,
              height: 40,
              borderRadius: 10,
              background: `${colors.widgetContact}20`,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <span style={{ fontSize: 16, fontWeight: 700, color: colors.widgetContact }}>MC</span>
          </div>
          <div>
            <div
              style={{
                fontSize: 10,
                color: colors.graphite,
                fontWeight: 500,
                fontFamily: 'SF Pro Text, system-ui',
              }}
            >
              NEW CONTACT
            </div>
            <div
              style={{
                fontSize: 15,
                fontWeight: 600,
                color: colors.ink,
                fontFamily: 'SF Pro Display, system-ui',
              }}
            >
              Michael Chen
            </div>
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 6, marginBottom: 12 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
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
                fontFamily: 'SF Pro Text, system-ui',
              }}
            >
              +1 (555) 234-8901
            </span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
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
                color: colors.ink,
                fontFamily: 'SF Pro Text, system-ui',
              }}
            >
              michael@startuplabs.co
            </span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke={colors.graphite}
              strokeWidth="2"
            >
              <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
              <polyline points="9,22 9,12 15,12 15,22" />
            </svg>
            <span
              style={{
                fontSize: 13,
                color: colors.ink,
                fontFamily: 'SF Pro Text, system-ui',
              }}
            >
              Startup Labs (CTO)
            </span>
          </div>
        </div>

        <div
          style={{
            background: `rgb(${btnBgR}, ${btnBgG}, ${btnBgB})`,
            borderRadius: 10,
            padding: '10px 14px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative',
            transform: `scale(${buttonScale})`,
          }}
        >
          {/* Save Contact icon + text */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              opacity: saveTextOpacity,
            }}
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="white"
              strokeWidth="2"
              style={{ marginRight: 6 }}
            >
              <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
              <circle cx="8.5" cy="7" r="4" />
              <line x1="20" y1="8" x2="20" y2="14" />
              <line x1="23" y1="11" x2="17" y2="11" />
            </svg>
            <span
              style={{
                fontSize: 13,
                fontWeight: 600,
                color: 'white',
                fontFamily: 'SF Pro Text, system-ui',
              }}
            >
              Save Contact
            </span>
          </div>
          {/* Add again icon + text */}
          <div
            style={{
              position: 'absolute',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              opacity: addAgainOpacity,
            }}
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="white"
              strokeWidth="2.5"
              style={{ marginRight: 6 }}
            >
              <polyline points="20,6 9,17 4,12" />
            </svg>
            <span
              style={{
                fontSize: 13,
                fontWeight: 600,
                color: 'white',
                fontFamily: 'SF Pro Text, system-ui',
              }}
            >
              Add again
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
