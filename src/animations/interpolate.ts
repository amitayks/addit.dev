/**
 * Animation utilities for frame-based animations.
 * Ports Remotion's interpolate and spring functions to pure React.
 */

export interface InterpolateOptions {
  extrapolateLeft?: 'clamp' | 'extend';
  extrapolateRight?: 'clamp' | 'extend';
}

/**
 * Maps a value from an input range to an output range using linear interpolation.
 *
 * @param value - The input value to map
 * @param inputRange - Array of input values [min, max] or more points
 * @param outputRange - Array of output values corresponding to input points
 * @param options - Extrapolation options
 * @returns The interpolated output value
 */
export function interpolate(
  value: number,
  inputRange: number[],
  outputRange: number[],
  options: InterpolateOptions = {}
): number {
  const { extrapolateLeft = 'extend', extrapolateRight = 'extend' } = options;

  if (inputRange.length !== outputRange.length) {
    throw new Error('Input and output ranges must have the same length');
  }

  if (inputRange.length < 2) {
    throw new Error('Ranges must have at least 2 values');
  }

  // Find the segment where value falls
  let segmentIndex = 0;
  for (let i = 1; i < inputRange.length; i++) {
    if (value < inputRange[i]) {
      segmentIndex = i - 1;
      break;
    }
    segmentIndex = i - 1;
  }

  // Handle extrapolation
  if (value <= inputRange[0]) {
    if (extrapolateLeft === 'clamp') {
      return outputRange[0];
    }
    segmentIndex = 0;
  }

  if (value >= inputRange[inputRange.length - 1]) {
    if (extrapolateRight === 'clamp') {
      return outputRange[outputRange.length - 1];
    }
    segmentIndex = inputRange.length - 2;
  }

  // Linear interpolation within segment
  const inputStart = inputRange[segmentIndex];
  const inputEnd = inputRange[segmentIndex + 1];
  const outputStart = outputRange[segmentIndex];
  const outputEnd = outputRange[segmentIndex + 1];

  const progress = (value - inputStart) / (inputEnd - inputStart);
  return outputStart + progress * (outputEnd - outputStart);
}

export interface SpringConfig {
  damping?: number;
  stiffness?: number;
  mass?: number;
}

/**
 * Simulates spring physics animation, returning a value from 0 to ~1.
 * Uses a damped harmonic oscillator model.
 *
 * @param params - Spring parameters
 * @param params.frame - Current frame number (relative to animation start)
 * @param params.fps - Frames per second
 * @param params.config - Spring configuration (damping, stiffness, mass)
 * @returns Progress value (typically 0 to 1, may overshoot with low damping)
 */
export function spring(params: {
  frame: number;
  fps: number;
  config?: SpringConfig;
}): number {
  const { frame, fps, config = {} } = params;
  const { damping = 14, stiffness = 100, mass = 1 } = config;

  if (frame < 0) {
    return 0;
  }

  // Convert frame to time in seconds
  const t = frame / fps;

  // Calculate angular frequency and damping ratio
  const omega0 = Math.sqrt(stiffness / mass);
  const zeta = damping / (2 * Math.sqrt(stiffness * mass));

  let position: number;

  if (zeta < 1) {
    // Underdamped - oscillates before settling
    const omegaD = omega0 * Math.sqrt(1 - zeta * zeta);
    position =
      1 -
      Math.exp(-zeta * omega0 * t) *
        (Math.cos(omegaD * t) + (zeta * omega0 / omegaD) * Math.sin(omegaD * t));
  } else if (zeta === 1) {
    // Critically damped - fastest without oscillation
    position = 1 - Math.exp(-omega0 * t) * (1 + omega0 * t);
  } else {
    // Overdamped - slow settling without oscillation
    const s1 = -omega0 * (zeta - Math.sqrt(zeta * zeta - 1));
    const s2 = -omega0 * (zeta + Math.sqrt(zeta * zeta - 1));
    const c1 = s2 / (s2 - s1);
    const c2 = -s1 / (s2 - s1);
    position = 1 - c1 * Math.exp(s1 * t) - c2 * Math.exp(s2 * t);
  }

  // Clamp to prevent numerical issues at very small values
  if (Math.abs(1 - position) < 0.0001) {
    return 1;
  }

  return Math.max(0, position);
}
