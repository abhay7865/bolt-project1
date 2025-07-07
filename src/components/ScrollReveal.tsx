import React, { ReactNode } from 'react';
import { useInView } from 'react-intersection-observer';

interface ScrollRevealProps {
  children: ReactNode;
  direction?: 'up' | 'down' | 'left' | 'right';
  delay?: number;
  className?: string;
}

const ScrollReveal: React.FC<ScrollRevealProps> = ({ 
  children, 
  direction = 'up', 
  delay = 0,
  className = ''
}) => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const getTransform = () => {
    if (inView) return 'translate3d(0, 0, 0) rotateX(0) rotateY(0) scale(1)';
    
    switch (direction) {
      case 'up':
        return 'translate3d(0, 50px, -50px) rotateX(-15deg) scale(0.9)';
      case 'down':
        return 'translate3d(0, -50px, -50px) rotateX(15deg) scale(0.9)';
      case 'left':
        return 'translate3d(-50px, 0, -50px) rotateY(15deg) scale(0.9)';
      case 'right':
        return 'translate3d(50px, 0, -50px) rotateY(-15deg) scale(0.9)';
      default:
        return 'translate3d(0, 50px, -50px) rotateX(-15deg) scale(0.9)';
    }
  };

  return (
    <div
      ref={ref}
      className={`scroll-reveal ${className}`}
      style={{
        opacity: inView ? 1 : 0,
        transform: getTransform(),
        transition: `all 0.8s cubic-bezier(0.23, 1, 0.320, 1) ${delay}s`,
        transformStyle: 'preserve-3d',
      }}
    >
      {children}
    </div>
  );
};

export default ScrollReveal;