import React from 'react';
import { colors, interpolate, spring } from '@/animations';
import { SuccessToast } from './SuccessToast';

interface CalendarAppViewProps {
  frame: number;
  fps: number;
}

/**
 * Full calendar app view with slide-in animation.
 */
export const CalendarAppView: React.FC<CalendarAppViewProps> = ({
  frame,
  fps,
}) => {
  const entrance = spring({
    frame,
    fps,
    config: { damping: 14, stiffness: 100 },
  });

  const slideIn = interpolate(entrance, [0, 1], [100, 0]);

  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        background: colors.paper,
        transform: `translateX(${slideIn}%)`,
      }}
    >
      {/* Status bar space */}
      <div style={{ height: 54 }} />

      {/* Calendar Header */}
      <div
        style={{
          padding: '12px 20px',
          display: 'flex',
          alignItems: 'center',
          gap: 12,
          borderBottom: `1px solid ${colors.ticketBorder}`,
        }}
      >
        <div
          style={{
            width: 36,
            height: 36,
            borderRadius: 18,
            background: colors.graphiteLight,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke={colors.ink}
            strokeWidth="2"
          >
            <polyline points="15,18 9,12 15,6" />
          </svg>
        </div>
        <span
          style={{
            fontSize: 18,
            fontWeight: 600,
            color: colors.ink,
            fontFamily: 'SF Pro Display, system-ui',
          }}
        >
          Calendar
        </span>
      </div>

      {/* Month Header */}
      <div
        style={{
          padding: '16px 20px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <span
          style={{
            fontSize: 22,
            fontWeight: 700,
            color: colors.ink,
            fontFamily: 'SF Pro Display, system-ui',
          }}
        >
          January 2025
        </span>
        <div style={{ display: 'flex', gap: 8 }}>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke={colors.graphite}
            strokeWidth="2"
          >
            <polyline points="15,18 9,12 15,6" />
          </svg>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke={colors.graphite}
            strokeWidth="2"
          >
            <polyline points="9,18 15,12 9,6" />
          </svg>
        </div>
      </div>

      {/* Week Days */}
      <div
        style={{
          display: 'flex',
          padding: '0 12px',
          marginBottom: 8,
        }}
      >
        {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((day, i) => (
          <div
            key={i}
            style={{
              flex: 1,
              textAlign: 'center',
              fontSize: 13,
              fontWeight: 600,
              color: colors.graphiteDark,
              fontFamily: 'SF Pro Text, system-ui',
            }}
          >
            {day}
          </div>
        ))}
      </div>

      {/* Calendar Grid */}
      <div style={{ padding: '0 12px' }}>
        {/* Week with tomorrow highlighted */}
        <div style={{ display: 'flex', marginBottom: 8 }}>
          {[19, 20, 21, 22, 23, 24, 25].map((day, i) => {
            const isTomorrow = day === 25;
            const isToday = day === 24;
            const hasEvent = isTomorrow;

            return (
              <div
                key={i}
                style={{
                  flex: 1,
                  aspectRatio: '1',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: 12,
                  background: isTomorrow ? colors.widgetCalendar : 'transparent',
                  position: 'relative',
                }}
              >
                <span
                  style={{
                    fontSize: 17,
                    fontWeight: isToday || isTomorrow ? 600 : 400,
                    color: isTomorrow
                      ? 'white'
                      : isToday
                        ? colors.widgetCalendar
                        : colors.ink,
                    fontFamily: 'SF Pro Text, system-ui',
                  }}
                >
                  {day}
                </span>
                {hasEvent && (
                  <div
                    style={{
                      position: 'absolute',
                      bottom: 6,
                      width: 6,
                      height: 6,
                      borderRadius: 3,
                      background: 'white',
                    }}
                  />
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Event Card */}
      <div style={{ padding: '20px' }}>
        <div
          style={{
            background: `linear-gradient(135deg, ${colors.widgetCalendar} 0%, ${colors.primary} 100%)`,
            borderRadius: 16,
            padding: 18,
            boxShadow: '0 8px 24px rgba(59, 130, 246, 0.3)',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'flex-start', gap: 14 }}>
            <div
              style={{
                width: 48,
                height: 48,
                borderRadius: 12,
                background: 'rgba(255,255,255,0.2)',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <span
                style={{
                  fontSize: 11,
                  fontWeight: 600,
                  color: 'rgba(255,255,255,0.8)',
                  fontFamily: 'SF Pro Text, system-ui',
                }}
              >
                SAT
              </span>
              <span
                style={{
                  fontSize: 20,
                  fontWeight: 700,
                  color: 'white',
                  fontFamily: 'SF Pro Display, system-ui',
                }}
              >
                25
              </span>
            </div>
            <div style={{ flex: 1 }}>
              <div
                style={{
                  fontSize: 18,
                  fontWeight: 600,
                  color: 'white',
                  fontFamily: 'SF Pro Display, system-ui',
                  marginBottom: 4,
                }}
              >
                Design Team Review
              </div>
              <div
                style={{
                  fontSize: 14,
                  color: 'rgba(255,255,255,0.8)',
                  fontFamily: 'SF Pro Text, system-ui',
                  marginBottom: 2,
                }}
              >
                2:00 PM - 3:00 PM
              </div>
              <div
                style={{
                  fontSize: 14,
                  color: 'rgba(255,255,255,0.7)',
                  fontFamily: 'SF Pro Text, system-ui',
                }}
              >
                Conference Room B
              </div>
            </div>
          </div>

          {/* Attendees */}
          <div
            style={{
              marginTop: 14,
              display: 'flex',
              alignItems: 'center',
              gap: 8,
            }}
          >
            <div style={{ display: 'flex' }}>
              {['#FF6B6B', '#4ECDC4', '#45B7D1'].map((color, i) => (
                <div
                  key={i}
                  style={{
                    width: 28,
                    height: 28,
                    borderRadius: 14,
                    background: color,
                    border: '2px solid rgba(255,255,255,0.3)',
                    marginLeft: i > 0 ? -8 : 0,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <span
                    style={{ fontSize: 12, fontWeight: 600, color: 'white' }}
                  >
                    {['S', 'M', 'A'][i]}
                  </span>
                </div>
              ))}
            </div>
            <span
              style={{
                fontSize: 13,
                color: 'rgba(255,255,255,0.8)',
                fontFamily: 'SF Pro Text, system-ui',
              }}
            >
              +2 more
            </span>
          </div>
        </div>
      </div>

      {/* Success Toast - ball that expands */}
      <SuccessToast frame={frame} fps={fps} />
    </div>
  );
};
