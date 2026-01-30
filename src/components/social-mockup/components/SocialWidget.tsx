import { colors, interpolate, spring } from '@/animations';

interface SocialWidgetProps {
  fps: number;
  entranceFrame: number;
  isClicked: boolean;
  clickFrame: number;
}

/**
 * Social widget in chat with X branding and draft post.
 * Dark theme to match the app design.
 */
export const SocialWidget: React.FC<SocialWidgetProps> = ({
  fps,
  entranceFrame,
  isClicked,
  clickFrame,
}) => {
  const entrance = spring({ frame: entranceFrame, fps, config: { damping: 12, stiffness: 100 } });

  const clickProgress = isClicked
    ? spring({ frame: clickFrame, fps, config: { damping: 12, stiffness: 200 } })
    : 0;

  const actualScale = isClicked ? interpolate(clickProgress, [0, 0.3, 1], [1, 0.96, 1]) : 1;

  const buttonMorphProgress = isClicked
    ? spring({ frame: clickFrame, fps, config: { damping: 18, stiffness: 80 } })
    : 0;

  // X/Twitter black to green morph
  const btnBgR = interpolate(buttonMorphProgress, [0, 0.6], [0, 52], { extrapolateRight: 'clamp' });
  const btnBgG = interpolate(buttonMorphProgress, [0, 0.6], [0, 199], { extrapolateRight: 'clamp' });
  const btnBgB = interpolate(buttonMorphProgress, [0, 0.6], [0, 89], { extrapolateRight: 'clamp' });

  const xIconOpacity = interpolate(buttonMorphProgress, [0, 0.4], [1, 0], { extrapolateRight: 'clamp' });
  const checkIconOpacity = interpolate(buttonMorphProgress, [0.3, 0.7], [0, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });
  const checkIconScale = interpolate(buttonMorphProgress, [0.3, 0.8], [0.5, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });

  const openTextOpacity = interpolate(buttonMorphProgress, [0, 0.5], [1, 0], { extrapolateRight: 'clamp' });
  const openedTextOpacity = interpolate(buttonMorphProgress, [0.4, 0.8], [0, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });

  return (
    <div
      style={{
        alignSelf: 'flex-start',
        width: '100%',
        opacity: entrance,
        transform: `translateY(${interpolate(entrance, [0, 1], [30, 0])}px) scale(${actualScale})`,
      }}
    >
      <div
        style={{
          background: colors.graphiteLight,
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
              background: '#000',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            {/* X Logo */}
            <svg width="18" height="18" viewBox="0 0 24 24" fill="white">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
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
              Draft Post
            </div>
            <div
              style={{
                fontSize: 14,
                fontWeight: 600,
                color: colors.ink,
                fontFamily: 'SF Pro Display, system-ui, sans-serif',
              }}
            >
              Ready to Post on X
            </div>
          </div>
        </div>

        {/* Draft Content */}
        <div
          style={{
            background: 'rgba(0, 0, 0, 0.3)',
            borderRadius: 10,
            padding: 12,
            marginBottom: 12,
          }}
        >
          <p
            style={{
              margin: 0,
              fontSize: 13,
              color: colors.ink,
              fontFamily: 'SF Pro Text, system-ui, sans-serif',
              lineHeight: 1.45,
            }}
          >
            Excited to announce our new AI assistant! Voice commands, smart scheduling, and seamless
            integrations.
          </p>
          <div style={{ marginTop: 8, display: 'flex', gap: 6, flexWrap: 'wrap' }}>
            <span
              style={{ fontSize: 12, color: '#1d9bf0', fontFamily: 'SF Pro Text, system-ui, sans-serif' }}
            >
              #AI
            </span>
            <span
              style={{ fontSize: 12, color: '#1d9bf0', fontFamily: 'SF Pro Text, system-ui, sans-serif' }}
            >
              #ProductLaunch
            </span>
            <span
              style={{ fontSize: 12, color: '#1d9bf0', fontFamily: 'SF Pro Text, system-ui, sans-serif' }}
            >
              #Tech
            </span>
          </div>
        </div>

        {/* Action Button */}
        <div
          style={{
            background: `rgb(${btnBgR}, ${btnBgG}, ${btnBgB})`,
            borderRadius: 10,
            padding: '10px 14px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          <div style={{ width: 16, height: 16, position: 'relative', marginRight: 6 }}>
            {/* X icon */}
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="white"
              style={{ position: 'absolute', opacity: xIconOpacity }}
            >
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
            {/* Checkmark */}
            <svg
              width="16"
              height="16"
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

          <div
            style={{
              position: 'relative',
              height: 18,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <span
              style={{
                fontSize: 13,
                fontWeight: 600,
                color: 'white',
                fontFamily: 'SF Pro Text, system-ui, sans-serif',
                whiteSpace: 'nowrap',
                opacity: openTextOpacity,
              }}
            >
              Open in X
            </span>
            <span
              style={{
                position: 'absolute',
                fontSize: 13,
                fontWeight: 600,
                color: 'white',
                fontFamily: 'SF Pro Text, system-ui, sans-serif',
                whiteSpace: 'nowrap',
                opacity: openedTextOpacity,
              }}
            >
              Opening...
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
