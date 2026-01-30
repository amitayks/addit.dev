import { interpolate } from '@/animations';

interface SpeakingRipplesProps {
  frame: number;
}

/**
 * Voice activity indicator - rippling circles around avatar during call.
 */
export const SpeakingRipples: React.FC<SpeakingRipplesProps> = ({ frame }) => {
  const rippleCount = 3;
  const cycleDuration = 60;

  return (
    <>
      {[...Array(rippleCount)].map((_, index) => {
        const offset = (index * cycleDuration) / rippleCount;
        const rippleFrame = (frame + offset) % cycleDuration;
        const progress = rippleFrame / cycleDuration;

        const scale = 1 + progress * 0.8;
        const opacity = interpolate(progress, [0, 0.3, 1], [0, 0.4, 0], {
          extrapolateRight: 'clamp',
        });

        return (
          <div
            key={index}
            style={{
              position: 'absolute',
              width: 120,
              height: 120,
              borderRadius: '50%',
              border: '2px solid rgba(102, 126, 234, 0.6)',
              transform: `scale(${scale})`,
              opacity,
              pointerEvents: 'none',
            }}
          />
        );
      })}
    </>
  );
};
