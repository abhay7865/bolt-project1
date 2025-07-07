import React from 'react';

interface AnimatedIconProps {
  src: string;
  trigger?: 'hover' | 'click' | 'loop' | 'loop-on-hover' | 'morph' | 'morph-two-way';
  colors?: {
    primary?: string;
    secondary?: string;
  };
  size?: number;
  className?: string;
  delay?: number;
}

const AnimatedIcon: React.FC<AnimatedIconProps> = ({
  src,
  trigger = 'hover',
  colors = { primary: '#089cf1', secondary: '#0ea5e9' },
  size = 64,
  className = '',
  delay = 0
}) => {
  return (
    <div 
      className={`animated-icon-container ${className}`}
      style={{ animationDelay: `${delay}s` }}
    >
      <lord-icon
        src={src}
        trigger={trigger}
        colors={`primary:${colors.primary},secondary:${colors.secondary}`}
        style={{ width: `${size}px`, height: `${size}px` }}
      />
    </div>
  );
};

export default AnimatedIcon;