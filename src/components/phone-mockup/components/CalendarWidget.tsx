import React from 'react';
import { colors, interpolate, spring } from '@/animations';

interface CalendarWidgetProps {
  frame: number;
  fps: number;
  isClicked: boolean;
}

/**
 * Calendar widget card with action button that morphs on click.
 */
export const CalendarWidget: React.FC<CalendarWidgetProps> = ({
  frame,
  fps,
  isClicked,
}) => {
  const entrance = spring({
    frame,
    fps,
    config: { damping: 12, stiffness: 100 },
  });

  // Click happens at frame 100 (relative to widget), sync the animation
  const clickFrame = isClicked ? frame - 100 : 0;

  // Click scale animation - starts exactly when clicked
  const clickProgress = isClicked
    ? spring({
        frame: clickFrame,
        fps,
        config: { damping: 12, stiffness: 200 },
      })
    : 0;

  const actualScale = isClicked
    ? interpolate(clickProgress, [0, 0.3, 1], [1, 0.96, 1])
    : 1;

  // ===== BUTTON MORPH ANIMATIONS =====
  // Smooth morph progress for button state change
  const buttonMorphProgress = isClicked
    ? spring({
        frame: clickFrame,
        fps,
        config: { damping: 18, stiffness: 80 },
      })
    : 0;

  // Background color interpolation (purple to green)
  const btnBgR = interpolate(buttonMorphProgress, [0, 0.6], [79, 52], {
    extrapolateRight: 'clamp',
  });
  const btnBgG = interpolate(buttonMorphProgress, [0, 0.6], [70, 199], {
    extrapolateRight: 'clamp',
  });
  const btnBgB = interpolate(buttonMorphProgress, [0, 0.6], [229, 89], {
    extrapolateRight: 'clamp',
  });

  // Plus icon fades out, checkmark fades in
  const plusIconOpacity = interpolate(buttonMorphProgress, [0, 0.4], [1, 0], {
    extrapolateRight: 'clamp',
  });
  const checkIconOpacity = interpolate(buttonMorphProgress, [0.3, 0.7], [0, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });
  const checkIconScale = interpolate(buttonMorphProgress, [0.3, 0.8], [0.5, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });

  // Text crossfade
  const addTextOpacity = interpolate(buttonMorphProgress, [0, 0.5], [1, 0], {
    extrapolateRight: 'clamp',
  });
  const addedTextOpacity = interpolate(buttonMorphProgress, [0.4, 0.8], [0, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });

  return (
    <div
      style={{
        alignSelf: 'flex-start',
        width: '90%',
        opacity: entrance,
        transform: `translateY(${interpolate(entrance, [0, 1], [30, 0])}px) scale(${actualScale})`,
      }}
    >
      <div
        style={{
          background: colors.ticketBackground,
          borderRadius: 20,
          padding: 16,
          boxShadow: '0 4px 20px rgba(0,0,0,0.3)',
          border: `1px solid ${colors.ticketBorder}`,
        }}
      >
        {/* Widget Header */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 12,
            marginBottom: 12,
          }}
        >
          <div
            style={{
              width: 44,
              height: 44,
              borderRadius: 12,
              background: colors.widgetCalendar,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
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
                fontSize: 12,
                color: colors.graphite,
                fontWeight: 500,
                fontFamily: 'SF Pro Text, system-ui',
              }}
            >
              CALENDAR EVENT
            </div>
            <div
              style={{
                fontSize: 17,
                fontWeight: 600,
                color: colors.ink,
                fontFamily: 'SF Pro Display, system-ui',
              }}
            >
              Design Team Review
            </div>
          </div>
        </div>

        {/* Widget Details */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 8,
            marginBottom: 14,
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <svg
              width="16"
              height="16"
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
                fontSize: 15,
                color: colors.ink,
                fontFamily: 'SF Pro Text, system-ui',
              }}
            >
              Tomorrow, 2:00 PM
            </span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke={colors.graphite}
              strokeWidth="2"
            >
              <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
              <circle cx="9" cy="7" r="4" />
              <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
            </svg>
            <span
              style={{
                fontSize: 15,
                color: colors.ink,
                fontFamily: 'SF Pro Text, system-ui',
              }}
            >
              Design Team
            </span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <svg
              width="16"
              height="16"
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
                fontSize: 15,
                color: colors.ink,
                fontFamily: 'SF Pro Text, system-ui',
              }}
            >
              Conference Room B
            </span>
          </div>
        </div>

        {/* Action Button - smooth morph */}
        <div
          style={{
            background: `rgb(${btnBgR}, ${btnBgG}, ${btnBgB})`,
            borderRadius: 12,
            padding: '12px 16px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          {/* Icon container with crossfade */}
          <div
            style={{
              width: 18,
              height: 18,
              position: 'relative',
              marginRight: 8,
            }}
          >
            {/* Plus icon - fades out */}
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="white"
              strokeWidth="2"
              style={{
                position: 'absolute',
                opacity: plusIconOpacity,
              }}
            >
              <line x1="12" y1="5" x2="12" y2="19" />
              <line x1="5" y1="12" x2="19" y2="12" />
            </svg>

            {/* Checkmark icon - fades in with scale */}
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="white"
              strokeWidth="3"
              style={{
                position: 'absolute',
                opacity: checkIconOpacity,
                transform: `scale(${checkIconScale})`,
              }}
            >
              <polyline points="20,6 9,17 4,12" />
            </svg>
          </div>

          {/* Text container with crossfade - centered */}
          <div
            style={{
              position: 'relative',
              height: 20,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            {/* "Add to Calendar" - fades out */}
            <span
              style={{
                fontSize: 15,
                fontWeight: 600,
                color: 'white',
                fontFamily: 'SF Pro Text, system-ui',
                whiteSpace: 'nowrap',
                opacity: addTextOpacity,
              }}
            >
              Add to Calendar
            </span>

            {/* "Added to Calendar" - fades in (positioned over) */}
            <span
              style={{
                position: 'absolute',
                fontSize: 15,
                fontWeight: 600,
                color: 'white',
                fontFamily: 'SF Pro Text, system-ui',
                whiteSpace: 'nowrap',
                opacity: addedTextOpacity,
              }}
            >
              Added to Calendar
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
