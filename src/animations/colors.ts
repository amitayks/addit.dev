/**
 * Addit App Color Palette - Dark Theme
 *
 * Matches the dark theme of the addit-web site.
 * Colors derived from CSS variables in index.css.
 */

export const colors = {
  // Core Brand Colors
  primary: '#F59E0B', // Amber/Gold - warmth, intelligence (--accent-yellow)
  accent: '#3B82F6', // Blue - trust, clarity (--accent-blue)

  // Paper & Ink (Dark Mode - matches site theme)
  paper: '#111111', // Dark background (--background-secondary)
  paperDark: '#0a0a0a', // Darkest background (--background)
  ink: '#ffffff', // Primary text (--foreground)
  inkLight: '#ffffff', // Same for dark mode

  // Graphite Scale (Dark Mode)
  graphite: '#9ca3af', // Secondary text (--foreground-secondary)
  graphiteLight: '#1a1a1a', // Subtle backgrounds (--background-tertiary)
  graphiteDark: '#6b7280', // Muted text (--foreground-muted)

  // Widget Colors (Pastel tints)
  widgetCalendar: '#3B82F6', // Blue (--accent-blue)
  widgetContact: '#8B5CF6', // Purple (--accent-purple)
  widgetReminder: '#F59E0B', // Amber (--accent-yellow)
  widgetSocial: '#10B981', // Emerald (--accent-green)

  // Status Colors
  success: '#10B981', // Green (--accent-green)
  successLight: 'rgba(16, 185, 129, 0.2)',
  warning: '#F59E0B', // Amber (--accent-yellow)
  warningLight: 'rgba(245, 158, 11, 0.2)',
  error: '#EF4444',
  errorLight: 'rgba(239, 68, 68, 0.2)',

  // Orb Colors
  orbGolden: '#FCD34D',
  orbGoldenLight: '#FEF3C7',
  orbGray: '#9CA3AF',
  orbGrayLight: '#374151',

  // Ticket/Card Background (Dark Mode)
  ticketBackground: '#1a1a1a',
  ticketBorder: 'rgba(255, 255, 255, 0.1)',

  // Recording
  recording: 'rgba(239, 68, 68, 0.2)',
  recordingPulse: '#EF4444',

  // Glassmorphism (Dark Mode)
  glassLight: 'rgba(255, 255, 255, 0.03)',
  glassDark: 'rgba(0, 0, 0, 0.5)',
  glassBorder: 'rgba(255, 255, 255, 0.1)',
};

export const gradients = {
  // Premium gradients
  goldenGlow: ['#FCD34D', '#F59E0B', '#D97706'],
  blueAccent: ['#60A5FA', '#3B82F6', '#2563EB'],
  purpleVibe: ['#A78BFA', '#8B5CF6', '#7C3AED'],
  emeraldFresh: ['#34D399', '#10B981', '#059669'],

  // Background gradients (Dark Mode)
  warmPaper: ['#0a0a0a', '#111111', '#1a1a1a'],
  darkPaper: ['#0a0a0a', '#111111', '#1a1a1a'],

  // Orb gradients
  orbActive: ['#FEF3C7', '#FCD34D', '#F59E0B'],
  orbDormant: ['#374151', '#4B5563', '#6B7280'],
};
