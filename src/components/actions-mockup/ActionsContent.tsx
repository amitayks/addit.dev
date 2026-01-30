import { colors, interpolate, spring } from '@/animations';
import { AppHeader } from '@/components/phone-mockup/components';
import {
  CallLogIndicator,
  ReminderWidget,
  ContactWidget,
  ActionCalendarWidget,
  ComposerBar,
} from './components';

/**
 * Timeline (at 30fps, ~15 seconds = 450 frames):
 *
 * 0-30: Initial empty state
 * 30-60: Call log 1 entrance
 * 60-120: Reminder widget entrance + display
 * 120-150: Call log 2 entrance
 * 150-210: Contact widget entrance + display
 * 210-240: Call log 3 entrance
 * 240-300: Calendar widget entrance + display
 * 300-380: Hold to display all content
 * 380-400: Scroll up animation (content off screen by ~frame 400)
 * 400-430: 1 second empty pause
 * 430-450: Quick cross-fade transition
 */

const TOTAL_FRAMES = 450;

interface ActionsContentProps {
  frame: number;
  fps: number;
}

export const ActionsContent: React.FC<ActionsContentProps> = ({ frame, fps }) => {
  // Timeline triggers
  const callLog1Start = 30;
  const reminder1Start = 60;
  const callLog2Start = 120;
  const contact2Start = 150;
  const callLog3Start = 210;
  const calendar3Start = 240;
  const scrollStart = 380;
  const scrollEnd = 430; // Content visually off screen by ~400, but keep animating
  const emptyStateStart = 400; // Start empty state when content is off screen
  const transitionStart = 430; // 1 second after content off screen

  // Visibility states
  const showCallLog1 = frame >= callLog1Start && frame < scrollEnd;
  const showReminder = frame >= reminder1Start && frame < scrollEnd;
  const showCallLog2 = frame >= callLog2Start && frame < scrollEnd;
  const showContact = frame >= contact2Start && frame < scrollEnd;
  const showCallLog3 = frame >= callLog3Start && frame < scrollEnd;
  const showCalendar = frame >= calendar3Start && frame < scrollEnd;

  // Item heights (approximate)
  const CALL_LOG_HEIGHT = 60;
  const WIDGET_HEIGHT = 180;
  const GAP = 10;
  const VISIBLE_AREA_HEIGHT = 420; // Available space for content

  // Calculate feed offset - content starts below visible area and scrolls up as items appear
  const calculateFeedOffset = () => {
    let totalHeight = 0;

    // Calculate total content height based on visible items
    if (frame >= callLog1Start) {
      const itemProgress = spring({
        frame: Math.max(0, frame - callLog1Start),
        fps,
        config: { damping: 20, stiffness: 80 },
      });
      totalHeight += CALL_LOG_HEIGHT * itemProgress;
    }

    if (frame >= reminder1Start) {
      const itemProgress = spring({
        frame: Math.max(0, frame - reminder1Start),
        fps,
        config: { damping: 20, stiffness: 80 },
      });
      totalHeight += (WIDGET_HEIGHT + GAP) * itemProgress;
    }

    if (frame >= callLog2Start) {
      const itemProgress = spring({
        frame: Math.max(0, frame - callLog2Start),
        fps,
        config: { damping: 20, stiffness: 80 },
      });
      totalHeight += (CALL_LOG_HEIGHT + GAP) * itemProgress;
    }

    if (frame >= contact2Start) {
      const itemProgress = spring({
        frame: Math.max(0, frame - contact2Start),
        fps,
        config: { damping: 20, stiffness: 80 },
      });
      totalHeight += (WIDGET_HEIGHT + GAP) * itemProgress;
    }

    if (frame >= callLog3Start) {
      const itemProgress = spring({
        frame: Math.max(0, frame - callLog3Start),
        fps,
        config: { damping: 20, stiffness: 80 },
      });
      totalHeight += (CALL_LOG_HEIGHT + GAP) * itemProgress;
    }

    if (frame >= calendar3Start) {
      const itemProgress = spring({
        frame: Math.max(0, frame - calendar3Start),
        fps,
        config: { damping: 20, stiffness: 80 },
      });
      totalHeight += (WIDGET_HEIGHT + GAP) * itemProgress;
    }

    // After calendar appears, add small scroll for padding between content and composer bar
    // Start right after calendar entrance begins (calendar3Start = 240)
    const postCalendarScroll = calendar3Start + 15; // Small delay to sync with calendar entrance
    if (frame >= postCalendarScroll) {
      const extraScrollProgress = spring({
        frame: Math.max(0, frame - postCalendarScroll),
        fps,
        config: { damping: 20, stiffness: 80 },
      });
      // Small padding scroll
      totalHeight += 20 * extraScrollProgress;
    }

    // Start content below visible area, scroll up as content grows
    // Positive offset = content pushed down (starts below visible area)
    // Negative offset = content scrolled up (when it exceeds visible area)
    // This keeps the bottom edge of content aligned with the bottom of visible area
    const offset = VISIBLE_AREA_HEIGHT - totalHeight;
    return offset;
  };

  // Calculate feedOffset at the moment scrolling starts (to continue from there)
  // Includes extra 20px padding scroll after calendar
  const feedOffsetAtScrollStart = VISIBLE_AREA_HEIGHT - (
    CALL_LOG_HEIGHT +
    (WIDGET_HEIGHT + GAP) +
    (CALL_LOG_HEIGHT + GAP) +
    (WIDGET_HEIGHT + GAP) +
    (CALL_LOG_HEIGHT + GAP) +
    (WIDGET_HEIGHT + GAP) +
    20 // Padding scroll after calendar
  );

  const feedOffset = frame < scrollStart ? calculateFeedOffset() : feedOffsetAtScrollStart;

  // Scroll animation - scrolls content completely off screen
  // Using higher stiffness for faster scroll so content exits quickly
  const isScrolling = frame >= scrollStart;
  const scrollProgress = isScrolling
    ? spring({
        frame: frame - scrollStart,
        fps,
        config: { damping: 20, stiffness: 100 },
      })
    : 0;

  // Content offset during scroll - needs to move up enough to scroll all content off screen
  // Total content height ~750px, need to scroll up by that amount plus some buffer
  const scrollOffset = interpolate(scrollProgress, [0, 1], [0, -850], {
    extrapolateRight: 'clamp',
  });

  // Transition phase: cross-fade from empty to initial state (frames 560-660)
  const isTransitioning = frame >= transitionStart;
  const transitionProgress = isTransitioning
    ? spring({
        frame: frame - transitionStart,
        fps,
        config: { damping: 20, stiffness: 60 },
      })
    : 0;

  // During transition, cross-fade to fresh initial state
  const transitionOutOpacity = interpolate(transitionProgress, [0, 1], [1, 0], {
    extrapolateRight: 'clamp',
  });
  const transitionInOpacity = interpolate(transitionProgress, [0, 1], [0, 1], {
    extrapolateRight: 'clamp',
  });

  // Empty state (frames 500-560)
  const isEmptyState = frame >= emptyStateStart && frame < transitionStart;

  // Call log data
  const callLogs = [
    {
      callerName: 'Sarah Chen',
      duration: '5:32',
      timestamp: 'Just now',
    },
    {
      callerName: 'Alex Thompson',
      duration: '2:15',
      timestamp: '10 min ago',
    },
    {
      callerName: 'Team Meeting',
      duration: '15:42',
      timestamp: '1 hr ago',
    },
  ];

  // During transition, show both layers
  if (isTransitioning) {
    return (
      <div
        style={{
          width: '100%',
          height: '100%',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Empty state layer - fading out */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            opacity: transitionOutOpacity,
            display: 'flex',
            flexDirection: 'column',
            background: colors.paper,
          }}
        >
          <div style={{ height: 48 }} />
          <AppHeader />
          <div style={{ flex: 1 }} />
          <ComposerBar />
        </div>

        {/* Initial state layer - fading in */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            opacity: transitionInOpacity,
            display: 'flex',
            flexDirection: 'column',
            background: colors.paper,
          }}
        >
          <div style={{ height: 48 }} />
          <AppHeader />
          <div style={{ flex: 1 }} />
          <ComposerBar />
        </div>
      </div>
    );
  }

  // Empty state
  if (isEmptyState) {
    return (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          background: colors.paper,
        }}
      >
        <div style={{ height: 48 }} />
        <AppHeader />
        <div style={{ flex: 1 }} />
        <ComposerBar />
      </div>
    );
  }

  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        background: colors.paper,
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Status bar space */}
      <div style={{ height: 48 }} />

      <AppHeader />

      {/* Scrollable Content Area - clips overflow */}
      <div
        style={{
          flex: 1,
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Inner scrolling container - positioned from top, slides up as content grows */}
        <div
          style={{
            position: 'absolute',
            top: 12,
            left: 12,
            right: 12,
            display: 'flex',
            flexDirection: 'column',
            gap: 10,
            transform: `translateY(${feedOffset + scrollOffset}px)`,
          }}
        >
        {/* Call Log 1 + Reminder */}
        {showCallLog1 && (
          <CallLogIndicator
            frame={frame - callLog1Start}
            fps={fps}
            callerName={callLogs[0].callerName}
            duration={callLogs[0].duration}
            timestamp={callLogs[0].timestamp}
          />
        )}
        {showReminder && <ReminderWidget entranceFrame={frame - reminder1Start} fps={fps} />}

        {/* Call Log 2 + Contact */}
        {showCallLog2 && (
          <CallLogIndicator
            frame={frame - callLog2Start}
            fps={fps}
            callerName={callLogs[1].callerName}
            duration={callLogs[1].duration}
            timestamp={callLogs[1].timestamp}
          />
        )}
        {showContact && <ContactWidget entranceFrame={frame - contact2Start} fps={fps} />}

        {/* Call Log 3 + Calendar */}
        {showCallLog3 && (
          <CallLogIndicator
            frame={frame - callLog3Start}
            fps={fps}
            callerName={callLogs[2].callerName}
            duration={callLogs[2].duration}
            timestamp={callLogs[2].timestamp}
          />
        )}
        {showCalendar && <ActionCalendarWidget entranceFrame={frame - calendar3Start} fps={fps} />}
        </div>
      </div>

      {/* Composer Bar */}
      <ComposerBar />
    </div>
  );
};

export { TOTAL_FRAMES };
