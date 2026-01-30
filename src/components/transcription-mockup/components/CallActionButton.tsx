interface CallActionButtonProps {
  icon: 'keypad' | 'mute' | 'speaker' | 'more';
  label: string;
  active?: boolean;
}

const iconSvgs = {
  keypad: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
      <circle cx="5" cy="5" r="2" />
      <circle cx="12" cy="5" r="2" />
      <circle cx="19" cy="5" r="2" />
      <circle cx="5" cy="12" r="2" />
      <circle cx="12" cy="12" r="2" />
      <circle cx="19" cy="12" r="2" />
      <circle cx="5" cy="19" r="2" />
      <circle cx="12" cy="19" r="2" />
      <circle cx="19" cy="19" r="2" />
    </svg>
  ),
  mute: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
      <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z" />
      <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
      <line x1="12" y1="19" x2="12" y2="23" />
      <line x1="8" y1="23" x2="16" y2="23" />
    </svg>
  ),
  speaker: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
      <polygon points="11,5 6,9 2,9 2,15 6,15 11,19" fill="white" />
      <path d="M15.54 8.46a5 5 0 0 1 0 7.07" />
      <path d="M19.07 4.93a10 10 0 0 1 0 14.14" />
    </svg>
  ),
  more: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
      <circle cx="12" cy="5" r="2" />
      <circle cx="12" cy="12" r="2" />
      <circle cx="12" cy="19" r="2" />
    </svg>
  ),
};

/**
 * In-call action button (keypad, mute, speaker, more).
 */
export const CallActionButton: React.FC<CallActionButtonProps> = ({
  icon,
  label,
  active = false,
}) => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 8,
      }}
    >
      <div
        style={{
          width: 56,
          height: 56,
          borderRadius: 16,
          background: active ? 'rgba(255, 255, 255, 0.2)' : 'rgba(60, 60, 60, 0.8)',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        {iconSvgs[icon]}
      </div>
      <span
        style={{
          fontSize: 11,
          fontWeight: 400,
          color: 'rgba(255, 255, 255, 0.8)',
          fontFamily: 'SF Pro Text, system-ui, sans-serif',
        }}
      >
        {label}
      </span>
    </div>
  );
};
