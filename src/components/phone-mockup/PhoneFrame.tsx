import React from 'react';
import { colors } from '@/animations';

interface PhoneFrameProps {
  children: React.ReactNode;
}

/**
 * Phone frame component with Dynamic Island and side buttons.
 * Matches the LargePhoneFrame from FullFlowDemo.tsx.
 */
export const PhoneFrame: React.FC<PhoneFrameProps> = ({ children }) => {
  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        background: '#1a1a1a',
        borderRadius: 55,
        padding: 12,
        boxShadow: '0 50px 100px rgba(0,0,0,0.5), 0 20px 40px rgba(0,0,0,0.4)',
        position: 'relative',
      }}
    >
      {/* Screen */}
      <div
        style={{
          width: '100%',
          height: '100%',
          borderRadius: 44,
          overflow: 'hidden',
          position: 'relative',
          background: colors.paper,
        }}
      >
        {/* Dynamic Island */}
        <div
          style={{
            position: 'absolute',
            top: 12,
            left: '50%',
            transform: 'translateX(-50%)',
            width: 120,
            height: 34,
            background: '#000',
            borderRadius: 20,
            zIndex: 100,
          }}
        />
        {children}
      </div>

      {/* Side button (right) */}
      <div
        style={{
          position: 'absolute',
          right: -3,
          top: '25%',
          width: 4,
          height: 80,
          background: '#2a2a2a',
          borderRadius: 2,
        }}
      />

      {/* Volume buttons (left) */}
      <div
        style={{
          position: 'absolute',
          left: -3,
          top: '20%',
          width: 4,
          height: 35,
          background: '#2a2a2a',
          borderRadius: 2,
        }}
      />
      <div
        style={{
          position: 'absolute',
          left: -3,
          top: '32%',
          width: 4,
          height: 60,
          background: '#2a2a2a',
          borderRadius: 2,
        }}
      />
    </div>
  );
};
