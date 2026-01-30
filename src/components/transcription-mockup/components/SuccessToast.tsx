import { interpolate, spring } from '@/animations';

interface SuccessToastProps {
  frame: number;
  fps: number;
}

/**
 * Contact saved success toast with expand animation.
 */
export const SuccessToast: React.FC<SuccessToastProps> = ({ frame, fps }) => {
  const riseProgress = spring({ frame, fps, config: { damping: 14, stiffness: 120 } });
  const expandProgress =
    frame >= 10
      ? spring({ frame: frame - 10, fps, config: { damping: 18, stiffness: 80 } })
      : 0;

  const bottomPosition = interpolate(riseProgress, [0, 1], [-50, 90]);
  const toastWidth = interpolate(expandProgress, [0, 1], [40, 150], { extrapolateRight: 'clamp' });
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
        height: 40,
        background: '#22c55e',
        borderRadius: 20,
        paddingLeft: interpolate(expandProgress, [0, 1], [0, 10]),
        paddingRight: interpolate(expandProgress, [0, 1], [0, 10]),
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: interpolate(expandProgress, [0, 0.5], [0, 5], { extrapolateRight: 'clamp' }),
        boxShadow: '0 4px 20px rgba(34, 197, 94, 0.4)',
        overflow: 'hidden',
      }}
    >
      <svg
        width="18"
        height="18"
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
          fontFamily: 'SF Pro Text, system-ui',
          whiteSpace: 'nowrap',
          opacity: textOpacity,
        }}
      >
        Contact Saved!
      </span>
    </div>
  );
};
