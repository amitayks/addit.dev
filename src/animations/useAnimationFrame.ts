import { useState, useEffect, useRef } from 'react';

/**
 * Custom hook that provides a looping frame counter for animations.
 * The frame counter increments at the specified fps and resets to 0
 * after reaching totalFrames.
 *
 * @param fps - Frames per second (default: 30)
 * @param totalFrames - Total frames before loop resets (default: 590)
 * @returns Current frame number (0 to totalFrames-1)
 */
export function useAnimationFrame(fps: number = 30, totalFrames: number = 590): number {
  const [frame, setFrame] = useState(0);
  const lastTimeRef = useRef<number>(0);
  const frameRef = useRef<number>(0);
  const rafRef = useRef<number>(0);

  useEffect(() => {
    const frameDuration = 1000 / fps;

    const animate = (currentTime: number) => {
      if (!lastTimeRef.current) {
        lastTimeRef.current = currentTime;
      }

      const elapsed = currentTime - lastTimeRef.current;

      if (elapsed >= frameDuration) {
        // Calculate how many frames have passed
        const framesToAdd = Math.floor(elapsed / frameDuration);
        frameRef.current = (frameRef.current + framesToAdd) % totalFrames;
        lastTimeRef.current = currentTime - (elapsed % frameDuration);
        setFrame(frameRef.current);
      }

      rafRef.current = requestAnimationFrame(animate);
    };

    rafRef.current = requestAnimationFrame(animate);

    return () => {
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, [fps, totalFrames]);

  return frame;
}
