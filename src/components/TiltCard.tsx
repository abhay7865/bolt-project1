import React, { ReactNode } from 'react';
import Tilt from 'react-parallax-tilt';

interface TiltCardProps {
  children: ReactNode;
  className?: string;
  tiltMaxAngleX?: number;
  tiltMaxAngleY?: number;
  perspective?: number;
  scale?: number;
  transitionSpeed?: number;
  gyroscope?: boolean;
}

const TiltCard: React.FC<TiltCardProps> = ({
  children,
  className = '',
  tiltMaxAngleX = 15,
  tiltMaxAngleY = 15,
  perspective = 1000,
  scale = 1.05,
  transitionSpeed = 1000,
  gyroscope = true,
}) => {
  return (
    <Tilt
      className={className}
      tiltMaxAngleX={tiltMaxAngleX}
      tiltMaxAngleY={tiltMaxAngleY}
      perspective={perspective}
      scale={scale}
      transitionSpeed={transitionSpeed}
      gyroscope={gyroscope}
      glareEnable={true}
      glareMaxOpacity={0.1}
      glareColor="#089cf1"
      glarePosition="all"
      glareBorderRadius="20px"
    >
      {children}
    </Tilt>
  );
};

export default TiltCard;