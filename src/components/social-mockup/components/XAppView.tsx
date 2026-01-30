import { interpolate, spring } from '@/animations';
import { AdditLogo } from '@/components/ui/AdditLogo';

// X (Twitter) Dark Theme Colors
const xColors = {
  background: '#000000',
  borderColor: '#2f3336',
  primaryText: '#e7e9ea',
  secondaryText: '#71767b',
  blue: '#1d9bf0',
  pink: '#f91880',
  green: '#00ba7c',
};

interface XAppViewProps {
  frame: number;
  fps: number;
}

/**
 * X (Twitter) app view with compose and feed views.
 * Resized to fit small phone mockup.
 */
export const XAppView: React.FC<XAppViewProps> = ({ frame, fps }) => {
  const entrance = spring({ frame, fps, config: { damping: 14, stiffness: 100 } });
  const slideIn = interpolate(entrance, [0, 1], [100, 0]);

  // Timeline:
  // 0-60: Draft view (2s)
  // 60: Publish button clicked
  // 60-90: Transition to feed (1s)
  // 90+: Feed view with engagement increasing

  const isPublished = frame >= 60;
  const publishFrame = isPublished ? frame - 60 : 0;

  // Show feed after transition
  const showFeed = frame >= 90;
  const feedFrame = showFeed ? frame - 90 : 0;

  // Transition from compose to feed
  const transitionProgress = isPublished
    ? spring({ frame: publishFrame, fps, config: { damping: 15, stiffness: 80 } })
    : 0;

  const composeOpacity = interpolate(transitionProgress, [0, 0.5], [1, 0], { extrapolateRight: 'clamp' });
  const feedOpacity = interpolate(transitionProgress, [0.4, 1], [0, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });

  // Button morph
  const publishProgress = isPublished
    ? spring({ frame: publishFrame, fps, config: { damping: 12, stiffness: 150 } })
    : 0;

  const publishBtnBgR = interpolate(publishProgress, [0, 0.5], [29, 52], { extrapolateRight: 'clamp' });
  const publishBtnBgG = interpolate(publishProgress, [0, 0.5], [155, 199], { extrapolateRight: 'clamp' });
  const publishBtnBgB = interpolate(publishProgress, [0, 0.5], [240, 89], { extrapolateRight: 'clamp' });

  const postTextOpacity = interpolate(publishProgress, [0, 0.3], [1, 0], { extrapolateRight: 'clamp' });
  const postedTextOpacity = interpolate(publishProgress, [0.2, 0.5], [0, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });

  return (
    <div
      style={{
        position: 'absolute',
        inset: 0,
        background: xColors.background,
        transform: `translateX(${slideIn}%)`,
        overflow: 'hidden',
      }}
    >
      {/* Status bar space */}
      <div style={{ height: 48 }} />

      {/* Compose View - fades out */}
      <div
        style={{
          opacity: composeOpacity,
          position: showFeed ? 'absolute' : 'relative',
          width: '100%',
        }}
      >
        {/* X Header - Compose */}
        <div
          style={{
            padding: '10px 12px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            borderBottom: `1px solid ${xColors.borderColor}`,
          }}
        >
          <div
            style={{
              width: 28,
              height: 28,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </div>
          <span
            style={{
              fontSize: 15,
              fontWeight: 600,
              color: '#fff',
              fontFamily: 'SF Pro Display, system-ui, sans-serif',
            }}
          >
            Draft
          </span>
          <div
            style={{
              background: `rgb(${publishBtnBgR}, ${publishBtnBgG}, ${publishBtnBgB})`,
              borderRadius: 16,
              padding: '6px 14px',
              position: 'relative',
              minWidth: 60,
              display: 'flex',
              justifyContent: 'center',
            }}
          >
            <span
              style={{
                fontSize: 13,
                fontWeight: 700,
                color: 'white',
                fontFamily: 'SF Pro Text, system-ui, sans-serif',
                opacity: postTextOpacity,
              }}
            >
              Post
            </span>
            <span
              style={{
                position: 'absolute',
                fontSize: 13,
                fontWeight: 700,
                color: 'white',
                fontFamily: 'SF Pro Text, system-ui, sans-serif',
                opacity: postedTextOpacity,
              }}
            >
              Posted!
            </span>
          </div>
        </div>

        {/* Compose Area */}
        <div style={{ padding: 12 }}>
          <div style={{ display: 'flex', gap: 10 }}>
            {/* Addit Logo as avatar */}
            <div
              style={{
                width: 36,
                height: 36,
                borderRadius: 18,
                background: '#1a1a1a',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
              }}
            >
              <AdditLogo size={24} className="text-white" />
            </div>
            <div style={{ flex: 1 }}>
              <p
                style={{
                  margin: 0,
                  fontSize: 14,
                  color: xColors.primaryText,
                  fontFamily: 'SF Pro Text, system-ui, sans-serif',
                  lineHeight: 1.45,
                }}
              >
                Excited to announce our new AI assistant! Voice commands, smart scheduling, and
                seamless integrations.
              </p>
              <div style={{ marginTop: 8, display: 'flex', gap: 6, flexWrap: 'wrap' }}>
                <span
                  style={{
                    fontSize: 13,
                    color: xColors.blue,
                    fontFamily: 'SF Pro Text, system-ui, sans-serif',
                  }}
                >
                  #AI
                </span>
                <span
                  style={{
                    fontSize: 13,
                    color: xColors.blue,
                    fontFamily: 'SF Pro Text, system-ui, sans-serif',
                  }}
                >
                  #ProductLaunch
                </span>
                <span
                  style={{
                    fontSize: 13,
                    color: xColors.blue,
                    fontFamily: 'SF Pro Text, system-ui, sans-serif',
                  }}
                >
                  #Tech
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Feed View - fades in */}
      {showFeed && (
        <div
          style={{
            opacity: feedOpacity,
            position: 'absolute',
            top: 48,
            left: 0,
            right: 0,
            bottom: 0,
          }}
        >
          <XFeedView frame={feedFrame} fps={fps} />
        </div>
      )}

      {/* Success Toast */}
      {isPublished && publishFrame < 90 && <SuccessToastX frame={publishFrame} fps={fps} />}
    </div>
  );
};

// ==================== X FEED VIEW ====================
const XFeedView: React.FC<{ frame: number; fps: number }> = ({ frame, fps }) => {
  // User's tweet entrance animation
  const userTweetEntrance = spring({ frame, fps, config: { damping: 14, stiffness: 100 } });
  const userTweetY = interpolate(userTweetEntrance, [0, 1], [-40, 0]);
  const userTweetOpacity = interpolate(userTweetEntrance, [0, 1], [0, 1]);

  // Engagement starts after tweet settles (frame 30) and runs for 1 second (30 frames)
  const engagementFrame = frame > 30 ? frame - 30 : 0;

  // Rapidly increasing counts over 1 second (30 frames) - starts at 0
  const likesCount = Math.floor(
    interpolate(engagementFrame, [0, 30], [0, 2847], {
      extrapolateLeft: 'clamp',
      extrapolateRight: 'clamp',
    })
  );
  const retweetsCount = Math.floor(
    interpolate(engagementFrame, [0, 30], [0, 634], {
      extrapolateLeft: 'clamp',
      extrapolateRight: 'clamp',
    })
  );
  const repliesCount = Math.floor(
    interpolate(engagementFrame, [0, 30], [0, 156], {
      extrapolateLeft: 'clamp',
      extrapolateRight: 'clamp',
    })
  );
  const viewsCount = Math.floor(
    interpolate(engagementFrame, [0, 30], [0, 48700], {
      extrapolateLeft: 'clamp',
      extrapolateRight: 'clamp',
    })
  );

  const formatNumber = (n: number) => {
    if (n >= 1000) return `${(n / 1000).toFixed(1)}K`;
    return n.toString();
  };

  return (
    <div
      style={{
        height: '100%',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      {/* X Header - matches real app */}
      <div
        style={{
          padding: '6px 12px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        {/* Profile pic - Addit Logo */}
        <div
          style={{
            width: 28,
            height: 28,
            borderRadius: 14,
            background: '#1a1a1a',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <AdditLogo size={18} className="text-white" />
        </div>

        {/* X Logo */}
        <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>

        {/* Settings gear */}
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke={xColors.primaryText}
          strokeWidth="1.5"
        >
          <circle cx="12" cy="12" r="3" />
          <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
        </svg>
      </div>

      {/* Tab bar */}
      <div
        style={{
          display: 'flex',
          borderBottom: `1px solid ${xColors.borderColor}`,
        }}
      >
        <div
          style={{
            flex: 1,
            padding: '10px 0',
            textAlign: 'center',
            position: 'relative',
          }}
        >
          <span
            style={{
              fontSize: 13,
              fontWeight: 700,
              color: xColors.primaryText,
              fontFamily: 'SF Pro Text, system-ui, sans-serif',
            }}
          >
            For you
          </span>
          <div
            style={{
              position: 'absolute',
              bottom: 0,
              left: '50%',
              transform: 'translateX(-50%)',
              width: 48,
              height: 3,
              borderRadius: 1.5,
              background: xColors.blue,
            }}
          />
        </div>
        <div
          style={{
            flex: 1,
            padding: '10px 0',
            textAlign: 'center',
          }}
        >
          <span
            style={{
              fontSize: 13,
              fontWeight: 500,
              color: xColors.secondaryText,
              fontFamily: 'SF Pro Text, system-ui, sans-serif',
            }}
          >
            Following
          </span>
        </div>
      </div>

      {/* Feed Content */}
      <div style={{ flex: 1, overflow: 'hidden' }}>
        {/* User's new tweet - NOW AT TOP with animated entrance */}
        <div
          style={{
            transform: `translateY(${userTweetY}px)`,
            opacity: userTweetOpacity,
            background: 'rgba(29, 155, 240, 0.05)',
          }}
        >
          <div
            style={{
              padding: '10px 12px',
              borderBottom: `1px solid ${xColors.borderColor}`,
            }}
          >
            <div style={{ display: 'flex', gap: 10 }}>
              {/* Avatar - Addit Logo */}
              <div
                style={{
                  width: 32,
                  height: 32,
                  borderRadius: 16,
                  background: '#1a1a1a',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                }}
              >
                <AdditLogo size={20} className="text-white" />
              </div>

              <div style={{ flex: 1, minWidth: 0 }}>
                {/* Header row */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                  }}
                >
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 3,
                      flexWrap: 'wrap',
                    }}
                  >
                    <span
                      style={{
                        fontSize: 13,
                        fontWeight: 700,
                        color: xColors.primaryText,
                        fontFamily: 'SF Pro Text, system-ui, sans-serif',
                      }}
                    >
                      Addit
                    </span>
                    {/* Verified badge */}
                    <svg width="14" height="14" viewBox="0 0 22 22" fill={xColors.blue}>
                      <path d="M20.396 11c-.018-.646-.215-1.275-.57-1.816-.354-.54-.852-.972-1.438-1.246.223-.607.27-1.264.14-1.897-.131-.634-.437-1.218-.882-1.687-.47-.445-1.053-.75-1.687-.882-.633-.13-1.29-.083-1.897.14-.273-.587-.704-1.086-1.245-1.44S11.647 1.62 11 1.604c-.646.017-1.273.213-1.813.568s-.969.854-1.24 1.44c-.608-.223-1.267-.272-1.902-.14-.635.13-1.22.436-1.69.882-.445.47-.749 1.055-.878 1.688-.13.633-.08 1.29.144 1.896-.587.274-1.087.705-1.443 1.245-.356.54-.555 1.17-.574 1.817.02.647.218 1.276.574 1.817.356.54.856.972 1.443 1.245-.224.606-.274 1.263-.144 1.896.13.634.433 1.218.877 1.688.47.443 1.054.747 1.687.878.633.132 1.29.084 1.897-.136.274.586.705 1.084 1.246 1.439.54.354 1.17.551 1.816.569.647-.016 1.276-.213 1.817-.567s.972-.854 1.245-1.44c.604.239 1.266.296 1.903.164.636-.132 1.22-.447 1.68-.907.46-.46.776-1.044.908-1.681s.075-1.299-.165-1.903c.586-.274 1.084-.705 1.439-1.246.354-.54.551-1.17.569-1.816zM9.662 14.85l-3.429-3.428 1.293-1.302 2.072 2.072 4.4-4.794 1.347 1.246z" />
                    </svg>
                    <span
                      style={{
                        fontSize: 13,
                        color: xColors.secondaryText,
                        fontFamily: 'SF Pro Text, system-ui, sans-serif',
                      }}
                    >
                      @addit_app · now
                    </span>
                  </div>
                  {/* Three dot menu */}
                  <svg width="14" height="14" viewBox="0 0 24 24" fill={xColors.secondaryText}>
                    <circle cx="5" cy="12" r="2" />
                    <circle cx="12" cy="12" r="2" />
                    <circle cx="19" cy="12" r="2" />
                  </svg>
                </div>

                {/* Tweet content */}
                <p
                  style={{
                    margin: '3px 0 0 0',
                    fontSize: 13,
                    color: xColors.primaryText,
                    fontFamily: 'SF Pro Text, system-ui, sans-serif',
                    lineHeight: 1.4,
                  }}
                >
                  Excited to announce our new AI assistant! Voice commands, smart scheduling, and
                  seamless integrations.
                </p>

                {/* Hashtags */}
                <div style={{ marginTop: 3 }}>
                  <span
                    style={{
                      fontSize: 13,
                      color: xColors.blue,
                      fontFamily: 'SF Pro Text, system-ui, sans-serif',
                    }}
                  >
                    #AI #ProductLaunch #Tech
                  </span>
                </div>

                {/* Engagement row */}
                <div
                  style={{
                    marginTop: 8,
                    display: 'flex',
                    justifyContent: 'space-between',
                    maxWidth: 240,
                  }}
                >
                  {/* Reply */}
                  <div style={{ display: 'flex', alignItems: 'center', gap: 3 }}>
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke={xColors.secondaryText}
                      strokeWidth="1.5"
                    >
                      <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
                    </svg>
                    <span
                      style={{
                        fontSize: 11,
                        color: xColors.secondaryText,
                        fontFamily: 'SF Pro Text, system-ui, sans-serif',
                      }}
                    >
                      {repliesCount || ''}
                    </span>
                  </div>

                  {/* Retweet */}
                  <div style={{ display: 'flex', alignItems: 'center', gap: 3 }}>
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke={retweetsCount > 0 ? xColors.green : xColors.secondaryText}
                      strokeWidth="1.5"
                    >
                      <path d="M17 1l4 4-4 4" />
                      <path d="M3 11V9a4 4 0 0 1 4-4h14" />
                      <path d="M7 23l-4-4 4-4" />
                      <path d="M21 13v2a4 4 0 0 1-4 4H3" />
                    </svg>
                    <span
                      style={{
                        fontSize: 11,
                        color: retweetsCount > 0 ? xColors.green : xColors.secondaryText,
                        fontFamily: 'SF Pro Text, system-ui, sans-serif',
                      }}
                    >
                      {retweetsCount || ''}
                    </span>
                  </div>

                  {/* Like */}
                  <div style={{ display: 'flex', alignItems: 'center', gap: 3 }}>
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill={likesCount > 0 ? xColors.pink : 'none'}
                      stroke={likesCount > 0 ? xColors.pink : xColors.secondaryText}
                      strokeWidth="1.5"
                    >
                      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                    </svg>
                    <span
                      style={{
                        fontSize: 11,
                        color: likesCount > 0 ? xColors.pink : xColors.secondaryText,
                        fontFamily: 'SF Pro Text, system-ui, sans-serif',
                      }}
                    >
                      {formatNumber(likesCount) || ''}
                    </span>
                  </div>

                  {/* Views */}
                  <div style={{ display: 'flex', alignItems: 'center', gap: 3 }}>
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke={xColors.secondaryText}
                      strokeWidth="1.5"
                    >
                      <path d="M3 3v18h18" />
                      <path d="M18 9l-5 5-4-4-3 3" />
                    </svg>
                    <span
                      style={{
                        fontSize: 11,
                        color: xColors.secondaryText,
                        fontFamily: 'SF Pro Text, system-ui, sans-serif',
                      }}
                    >
                      {formatNumber(viewsCount) || ''}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Other tweet (context) - NOW BELOW */}
        <FeedTweet
          avatar="M"
          avatarBg="#1DA1F2"
          name="Mike Chen"
          handle="@mikechen"
          time="47m"
          content="Just iterate, refine the prompt, add detail, make small edits. Very few things work in one-shot."
          likes={101}
          retweets={3}
          replies={2}
          views={2400}
          isVerified={false}
        />
      </div>

      {/* Bottom Navigation Bar */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-around',
          alignItems: 'center',
          padding: '10px 0',
          borderTop: `1px solid ${xColors.borderColor}`,
          background: xColors.background,
        }}
      >
        {/* Home - active */}
        <svg width="22" height="22" viewBox="0 0 24 24" fill={xColors.primaryText}>
          <path d="M21.591 7.146L12.52 1.157c-.316-.21-.724-.21-1.04 0l-9.071 5.99c-.26.173-.409.456-.409.757v13.183c0 .502.418.913.929.913h6.638c.511 0 .929-.41.929-.913v-7.075h3.008v7.075c0 .502.418.913.929.913h6.638c.511 0 .929-.41.929-.913V7.904c0-.301-.158-.584-.418-.758z" />
        </svg>

        {/* Search */}
        <svg
          width="22"
          height="22"
          viewBox="0 0 24 24"
          fill="none"
          stroke={xColors.secondaryText}
          strokeWidth="2"
        >
          <circle cx="11" cy="11" r="8" />
          <line x1="21" y1="21" x2="16.65" y2="16.65" />
        </svg>

        {/* Grok / Spaces */}
        <svg
          width="22"
          height="22"
          viewBox="0 0 24 24"
          fill="none"
          stroke={xColors.secondaryText}
          strokeWidth="2"
        >
          <path d="M12 2L2 7l10 5 10-5-10-5z" />
          <path d="M2 17l10 5 10-5" />
          <path d="M2 12l10 5 10-5" />
        </svg>

        {/* Messages */}
        <svg
          width="22"
          height="22"
          viewBox="0 0 24 24"
          fill="none"
          stroke={xColors.secondaryText}
          strokeWidth="2"
        >
          <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
        </svg>

        {/* Notifications */}
        <svg
          width="22"
          height="22"
          viewBox="0 0 24 24"
          fill="none"
          stroke={xColors.secondaryText}
          strokeWidth="2"
        >
          <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
          <path d="M13.73 21a2 2 0 0 1-3.46 0" />
        </svg>
      </div>

      {/* Floating Action Button */}
      <div
        style={{
          position: 'absolute',
          bottom: 70,
          right: 16,
          width: 48,
          height: 48,
          borderRadius: 24,
          background: xColors.blue,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 4px 12px rgba(29, 155, 240, 0.4)',
        }}
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
          <line x1="12" y1="5" x2="12" y2="19" strokeWidth="2.5" stroke="white" />
          <line x1="5" y1="12" x2="19" y2="12" strokeWidth="2.5" stroke="white" />
        </svg>
      </div>
    </div>
  );
};

// ==================== FEED TWEET ====================
const FeedTweet: React.FC<{
  avatar: string;
  avatarBg: string;
  name: string;
  handle: string;
  time: string;
  content: string;
  likes: number;
  retweets: number;
  replies: number;
  views: number;
  isVerified?: boolean;
}> = ({ avatar, avatarBg, name, handle, time, content, likes, retweets, replies, views, isVerified = false }) => {
  const formatNumber = (n: number) => {
    if (n >= 1000) return `${(n / 1000).toFixed(1)}K`;
    return n.toString();
  };

  return (
    <div
      style={{
        padding: '10px 12px',
        borderBottom: `1px solid ${xColors.borderColor}`,
      }}
    >
      <div style={{ display: 'flex', gap: 10 }}>
        <div
          style={{
            width: 32,
            height: 32,
            borderRadius: 16,
            background: avatarBg,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexShrink: 0,
          }}
        >
          <span style={{ fontSize: 14, fontWeight: 600, color: 'white' }}>{avatar}</span>
        </div>
        <div style={{ flex: 1, minWidth: 0 }}>
          {/* Header row */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 3,
                flexWrap: 'wrap',
              }}
            >
              <span
                style={{
                  fontSize: 13,
                  fontWeight: 700,
                  color: xColors.primaryText,
                  fontFamily: 'SF Pro Text, system-ui, sans-serif',
                }}
              >
                {name}
              </span>
              {isVerified && (
                <svg width="14" height="14" viewBox="0 0 22 22" fill={xColors.blue}>
                  <path d="M20.396 11c-.018-.646-.215-1.275-.57-1.816-.354-.54-.852-.972-1.438-1.246.223-.607.27-1.264.14-1.897-.131-.634-.437-1.218-.882-1.687-.47-.445-1.053-.75-1.687-.882-.633-.13-1.29-.083-1.897.14-.273-.587-.704-1.086-1.245-1.44S11.647 1.62 11 1.604c-.646.017-1.273.213-1.813.568s-.969.854-1.24 1.44c-.608-.223-1.267-.272-1.902-.14-.635.13-1.22.436-1.69.882-.445.47-.749 1.055-.878 1.688-.13.633-.08 1.29.144 1.896-.587.274-1.087.705-1.443 1.245-.356.54-.555 1.17-.574 1.817.02.647.218 1.276.574 1.817.356.54.856.972 1.443 1.245-.224.606-.274 1.263-.144 1.896.13.634.433 1.218.877 1.688.47.443 1.054.747 1.687.878.633.132 1.29.084 1.897-.136.274.586.705 1.084 1.246 1.439.54.354 1.17.551 1.816.569.647-.016 1.276-.213 1.817-.567s.972-.854 1.245-1.44c.604.239 1.266.296 1.903.164.636-.132 1.22-.447 1.68-.907.46-.46.776-1.044.908-1.681s.075-1.299-.165-1.903c.586-.274 1.084-.705 1.439-1.246.354-.54.551-1.17.569-1.816zM9.662 14.85l-3.429-3.428 1.293-1.302 2.072 2.072 4.4-4.794 1.347 1.246z" />
                </svg>
              )}
              <span
                style={{
                  fontSize: 13,
                  color: xColors.secondaryText,
                  fontFamily: 'SF Pro Text, system-ui, sans-serif',
                }}
              >
                {handle} · {time}
              </span>
            </div>
            {/* Three dot menu */}
            <svg width="14" height="14" viewBox="0 0 24 24" fill={xColors.secondaryText}>
              <circle cx="5" cy="12" r="2" />
              <circle cx="12" cy="12" r="2" />
              <circle cx="19" cy="12" r="2" />
            </svg>
          </div>

          {/* Tweet content */}
          <p
            style={{
              margin: '3px 0 0 0',
              fontSize: 13,
              color: xColors.primaryText,
              fontFamily: 'SF Pro Text, system-ui, sans-serif',
              lineHeight: 1.4,
            }}
          >
            {content}
          </p>

          {/* Engagement row */}
          <div
            style={{
              marginTop: 8,
              display: 'flex',
              justifyContent: 'space-between',
              maxWidth: 240,
            }}
          >
            {/* Reply */}
            <div style={{ display: 'flex', alignItems: 'center', gap: 3 }}>
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke={xColors.secondaryText}
                strokeWidth="1.5"
              >
                <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
              </svg>
              <span
                style={{
                  fontSize: 11,
                  color: xColors.secondaryText,
                  fontFamily: 'SF Pro Text, system-ui, sans-serif',
                }}
              >
                {replies}
              </span>
            </div>

            {/* Retweet */}
            <div style={{ display: 'flex', alignItems: 'center', gap: 3 }}>
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke={xColors.secondaryText}
                strokeWidth="1.5"
              >
                <path d="M17 1l4 4-4 4" />
                <path d="M3 11V9a4 4 0 0 1 4-4h14" />
                <path d="M7 23l-4-4 4-4" />
                <path d="M21 13v2a4 4 0 0 1-4 4H3" />
              </svg>
              <span
                style={{
                  fontSize: 11,
                  color: xColors.secondaryText,
                  fontFamily: 'SF Pro Text, system-ui, sans-serif',
                }}
              >
                {retweets}
              </span>
            </div>

            {/* Like */}
            <div style={{ display: 'flex', alignItems: 'center', gap: 3 }}>
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke={xColors.secondaryText}
                strokeWidth="1.5"
              >
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
              </svg>
              <span
                style={{
                  fontSize: 11,
                  color: xColors.secondaryText,
                  fontFamily: 'SF Pro Text, system-ui, sans-serif',
                }}
              >
                {likes}
              </span>
            </div>

            {/* Views */}
            <div style={{ display: 'flex', alignItems: 'center', gap: 3 }}>
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke={xColors.secondaryText}
                strokeWidth="1.5"
              >
                <path d="M3 3v18h18" />
                <path d="M18 9l-5 5-4-4-3 3" />
              </svg>
              <span
                style={{
                  fontSize: 11,
                  color: xColors.secondaryText,
                  fontFamily: 'SF Pro Text, system-ui, sans-serif',
                }}
              >
                {formatNumber(views)}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// ==================== SUCCESS TOAST X ====================
const SuccessToastX: React.FC<{ frame: number; fps: number }> = ({ frame, fps }) => {
  const toastFrame = frame - 10;
  const isVisible = frame >= 10;

  if (!isVisible) return null;

  const riseProgress = spring({ frame: toastFrame, fps, config: { damping: 14, stiffness: 120 } });
  const expandProgress =
    toastFrame >= 10
      ? spring({ frame: toastFrame - 10, fps, config: { damping: 18, stiffness: 80 } })
      : 0;

  const bottomPosition = interpolate(riseProgress, [0, 1], [-60, 90]);
  const toastWidth = interpolate(expandProgress, [0, 1], [40, 120], { extrapolateRight: 'clamp' });
  const horizontalPadding = interpolate(expandProgress, [0, 1], [0, 10], { extrapolateRight: 'clamp' });
  const checkmarkScale = interpolate(riseProgress, [0, 0.5, 1], [0.5, 1.1, 1]);
  const checkmarkOpacity = interpolate(riseProgress, [0, 0.3], [0, 1], { extrapolateRight: 'clamp' });
  const textOpacity = interpolate(expandProgress, [0.3, 0.8], [0, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });

  return (
    <div
      style={{
        position: 'absolute',
        bottom: bottomPosition,
        left: '50%',
        transform: 'translateX(-50%)',
        width: toastWidth,
        height: 38,
        background: xColors.green,
        borderRadius: 19,
        paddingLeft: horizontalPadding,
        paddingRight: horizontalPadding,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: interpolate(expandProgress, [0, 0.5], [0, 5], { extrapolateRight: 'clamp' }),
        boxShadow: '0 4px 20px rgba(0, 186, 124, 0.4)',
        overflow: 'hidden',
      }}
    >
      <svg
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="white"
        strokeWidth="3"
        style={{
          opacity: checkmarkOpacity,
          transform: `scale(${checkmarkScale})`,
          flexShrink: 0,
        }}
      >
        <polyline points="20,6 9,17 4,12" />
      </svg>
      <span
        style={{
          fontSize: 13,
          fontWeight: 600,
          color: 'white',
          fontFamily: 'SF Pro Text, system-ui, sans-serif',
          whiteSpace: 'nowrap',
          opacity: textOpacity,
        }}
      >
        Post Sent!
      </span>
    </div>
  );
};
