import { interpolate, spring } from '@/animations';

interface ContactFormModalProps {
  frame: number;
  fps: number;
  isSaved: boolean;
  isClosing: boolean;
}

/**
 * Google-style contact form modal with slide-up animation.
 */
export const ContactFormModal: React.FC<ContactFormModalProps> = ({
  frame,
  fps,
  isSaved,
  isClosing,
}) => {
  const openProgress = spring({ frame, fps, config: { damping: 18, stiffness: 100 } });

  // Modal closes after save
  const closeProgress = isClosing
    ? spring({ frame: frame - 40, fps, config: { damping: 18, stiffness: 200 } })
    : 0;

  const translateY =
    interpolate(openProgress, [0, 1], [500, 0]) +
    interpolate(closeProgress, [0, 1], [0, 500]);

  const backdropOpacity =
    interpolate(openProgress, [0, 1], [0, 0.6]) *
    interpolate(closeProgress, [0, 1], [1, 0]);

  // Save button animation
  const saveProgress = isSaved
    ? spring({ frame: frame - 40, fps, config: { damping: 12, stiffness: 150 } })
    : 0;

  const saveBtnBgR = interpolate(saveProgress, [0, 0.5], [138, 34], { extrapolateRight: 'clamp' });
  const saveBtnBgG = interpolate(saveProgress, [0, 0.5], [180, 197], { extrapolateRight: 'clamp' });
  const saveBtnBgB = interpolate(saveProgress, [0, 0.5], [248, 94], { extrapolateRight: 'clamp' });

  const darkBg = '#2D2D2D';
  const darkBorder = '#5F5F5F';
  const darkText = '#E8EAED';
  const darkTextSecondary = '#9AA0A6';

  return (
    <>
      {/* Backdrop */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: '#000',
          opacity: backdropOpacity,
          zIndex: 100,
        }}
      />

      {/* Modal */}
      <div
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          background: darkBg,
          borderTopLeftRadius: 24,
          borderTopRightRadius: 24,
          paddingBottom: 20,
          transform: `translateY(${translateY}px)`,
          boxShadow: '0 -10px 40px rgba(0,0,0,0.3)',
          zIndex: 101,
        }}
      >
        {/* Handle */}
        <div
          style={{
            width: 28,
            height: 4,
            background: darkBorder,
            borderRadius: 2,
            margin: '10px auto 14px',
          }}
        />

        {/* Header */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '0 16px 16px',
          }}
        >
          <span
            style={{
              fontSize: 18,
              fontWeight: 400,
              color: darkText,
              fontFamily: 'SF Pro Display, system-ui',
            }}
          >
            Add to contacts
          </span>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke={darkTextSecondary}
              strokeWidth="2"
            >
              <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26" />
            </svg>
            <div
              style={{
                background: `rgb(${saveBtnBgR}, ${saveBtnBgG}, ${saveBtnBgB})`,
                borderRadius: 16,
                padding: '6px 16px',
                display: 'flex',
                alignItems: 'center',
                gap: 5,
              }}
            >
              {isSaved && (
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#1a1a1a"
                  strokeWidth="3"
                >
                  <polyline points="20,6 9,17 4,12" />
                </svg>
              )}
              <span
                style={{
                  fontSize: 12,
                  fontWeight: 500,
                  color: '#1a1a1a',
                  fontFamily: 'SF Pro Text, system-ui',
                }}
              >
                {isSaved ? 'Saved' : 'Save'}
              </span>
            </div>
          </div>
        </div>

        {/* Form Fields */}
        <div
          style={{
            padding: '0 16px',
            display: 'flex',
            flexDirection: 'column',
            gap: 12,
          }}
        >
          <FormField
            label="First name"
            value="Michael"
            darkBg={darkBg}
            darkBorder={darkBorder}
            darkText={darkText}
            darkTextSecondary={darkTextSecondary}
          />
          <FormField
            label="Last name"
            value="Chen"
            darkBg={darkBg}
            darkBorder={darkBorder}
            darkText={darkText}
            darkTextSecondary={darkTextSecondary}
          />
          <PhoneField
            value="+1 555 234 8901"
            darkBg={darkBg}
            darkBorder={darkBorder}
            darkText={darkText}
            darkTextSecondary={darkTextSecondary}
          />
        </div>

        {/* Saving to */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 6,
            padding: '16px',
          }}
        >
          <span
            style={{
              fontSize: 10,
              color: darkTextSecondary,
              fontFamily: 'SF Pro Text, system-ui',
            }}
          >
            Saving to Device & Google
          </span>
          <div
            style={{
              width: 16,
              height: 16,
              borderRadius: 8,
              background: 'linear-gradient(135deg, #4285F4, #34A853, #FBBC05, #EA4335)',
            }}
          />
        </div>

        {/* Bottom Buttons */}
        <div style={{ display: 'flex', gap: 10, padding: '0 16px' }}>
          <div
            style={{
              flex: 1,
              padding: '10px',
              borderRadius: 20,
              border: `1px solid ${darkBorder}`,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <span
              style={{
                fontSize: 11,
                fontWeight: 500,
                color: '#8AB4F8',
                fontFamily: 'SF Pro Text, system-ui',
              }}
            >
              More details
            </span>
          </div>
          <div
            style={{
              flex: 1,
              padding: '10px',
              borderRadius: 20,
              border: `1px solid ${darkBorder}`,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <span
              style={{
                fontSize: 11,
                fontWeight: 500,
                color: '#8AB4F8',
                fontFamily: 'SF Pro Text, system-ui',
              }}
            >
              Add to existing
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

// Form field component
const FormField: React.FC<{
  label: string;
  value: string;
  darkBg: string;
  darkBorder: string;
  darkText: string;
  darkTextSecondary: string;
}> = ({ label, value, darkBg, darkBorder, darkText, darkTextSecondary }) => {
  return (
    <div
      style={{
        position: 'relative',
        border: `1px solid ${darkBorder}`,
        borderRadius: 4,
        padding: '16px 12px 10px',
      }}
    >
      <span
        style={{
          position: 'absolute',
          top: -7,
          left: 10,
          fontSize: 10,
          color: darkTextSecondary,
          fontFamily: 'SF Pro Text, system-ui',
          background: darkBg,
          padding: '0 3px',
        }}
      >
        {label}
      </span>
      <span
        style={{
          fontSize: 14,
          color: darkText,
          fontFamily: 'SF Pro Text, system-ui',
        }}
      >
        {value}
      </span>
    </div>
  );
};

// Phone field with flag
const PhoneField: React.FC<{
  value: string;
  darkBg: string;
  darkBorder: string;
  darkText: string;
  darkTextSecondary: string;
}> = ({ value, darkBg, darkBorder, darkText, darkTextSecondary }) => {
  return (
    <div
      style={{
        position: 'relative',
        border: `1px solid ${darkBorder}`,
        borderRadius: 4,
        padding: '16px 12px 10px',
      }}
    >
      <span
        style={{
          position: 'absolute',
          top: -7,
          left: 10,
          fontSize: 10,
          color: darkTextSecondary,
          fontFamily: 'SF Pro Text, system-ui',
          background: darkBg,
          padding: '0 3px',
        }}
      >
        Phone (Mobile)
      </span>
      <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
        {/* US Flag simplified */}
        <div
          style={{
            width: 20,
            height: 13,
            borderRadius: 2,
            background: 'linear-gradient(180deg, #B22234 0%, #B22234 23%, white 23%, white 38%, #B22234 38%, #B22234 54%, white 54%, white 69%, #B22234 69%, #B22234 85%, white 85%)',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          <div
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: 8,
              height: 7,
              background: '#3C3B6E',
            }}
          />
        </div>
        <svg
          width="10"
          height="10"
          viewBox="0 0 24 24"
          fill="none"
          stroke={darkTextSecondary}
          strokeWidth="2"
        >
          <polyline points="6,9 12,15 18,9" />
        </svg>
        <span
          style={{
            fontSize: 14,
            color: darkText,
            fontFamily: 'SF Pro Text, system-ui',
            marginLeft: 2,
          }}
        >
          {value}
        </span>
      </div>
    </div>
  );
};
