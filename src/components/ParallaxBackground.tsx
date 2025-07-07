import React from 'react';
import { useMousePosition } from '../hooks/useMousePosition';
import { useScrollPosition } from '../hooks/useScrollPosition';

const ParallaxBackground: React.FC = () => {
  const { x: mouseX, y: mouseY } = useMousePosition();
  const { scrollY } = useScrollPosition();

  // Calculate parallax offsets based on mouse and scroll
  const mouseParallaxX = (mouseX - window.innerWidth / 2) * 0.01;
  const mouseParallaxY = (mouseY - window.innerHeight / 2) * 0.01;
  const scrollParallax = scrollY * 0.5;

  return (
    <div className="parallax-background">
      {/* Enhanced Grid Pattern with Mouse Parallax */}
      <div 
        className="grid-pattern"
        style={{
          transform: `translate3d(${mouseParallaxX}px, ${mouseParallaxY + scrollParallax * 0.2}px, 0) perspective(1000px) rotateX(45deg)`
        }}
      ></div>
      
      {/* Circuit Pattern with Scroll Parallax */}
      <div 
        className="circuit-pattern"
        style={{
          transform: `translate3d(${-mouseParallaxX * 0.5}px, ${-mouseParallaxY * 0.5 + scrollParallax * 0.3}px, 0) perspective(800px) rotateY(10deg)`
        }}
      ></div>
      
      {/* Holographic Lines with Combined Parallax */}
      <div 
        className="holo-lines"
        style={{
          transform: `translate3d(${mouseParallaxX * 0.3}px, ${mouseParallaxY * 0.3 + scrollParallax * 0.1}px, 0) perspective(1200px) rotateZ(2deg)`
        }}
      ></div>
      
      {/* Floating Tech Elements with Mouse Tracking */}
      <div 
        className="floating-tech tech-cube mouse-responsive" 
        style={{ 
          left: '10%', 
          animationDelay: '0s',
          transform: `translate3d(${mouseParallaxX * 2}px, ${mouseParallaxY * 2 + scrollParallax * 0.4}px, 0)`
        }}
      ></div>
      <div 
        className="floating-tech tech-pyramid mouse-responsive" 
        style={{ 
          left: '20%', 
          animationDelay: '3s',
          transform: `translate3d(${-mouseParallaxX * 1.5}px, ${-mouseParallaxY * 1.5 + scrollParallax * 0.6}px, 0)`
        }}
      ></div>
      <div 
        className="floating-tech tech-sphere mouse-responsive" 
        style={{ 
          left: '30%', 
          animationDelay: '6s',
          transform: `translate3d(${mouseParallaxX * 3}px, ${mouseParallaxY * 3 + scrollParallax * 0.3}px, 0)`
        }}
      ></div>
      <div 
        className="floating-tech tech-ring mouse-responsive" 
        style={{ 
          left: '40%', 
          animationDelay: '9s',
          transform: `translate3d(${-mouseParallaxX * 2.5}px, ${-mouseParallaxY * 2.5 + scrollParallax * 0.5}px, 0)`
        }}
      ></div>
      <div 
        className="floating-tech tech-cube mouse-responsive" 
        style={{ 
          left: '50%', 
          animationDelay: '12s',
          transform: `translate3d(${mouseParallaxX * 1.8}px, ${mouseParallaxY * 1.8 + scrollParallax * 0.7}px, 0)`
        }}
      ></div>
      <div 
        className="floating-tech tech-pyramid mouse-responsive" 
        style={{ 
          left: '60%', 
          animationDelay: '15s',
          transform: `translate3d(${-mouseParallaxX * 2.2}px, ${-mouseParallaxY * 2.2 + scrollParallax * 0.4}px, 0)`
        }}
      ></div>
      <div 
        className="floating-tech tech-sphere mouse-responsive" 
        style={{ 
          left: '70%', 
          animationDelay: '18s',
          transform: `translate3d(${mouseParallaxX * 2.8}px, ${mouseParallaxY * 2.8 + scrollParallax * 0.6}px, 0)`
        }}
      ></div>
      <div 
        className="floating-tech tech-ring mouse-responsive" 
        style={{ 
          left: '80%', 
          animationDelay: '21s',
          transform: `translate3d(${-mouseParallaxX * 3.2}px, ${-mouseParallaxY * 3.2 + scrollParallax * 0.3}px, 0)`
        }}
      ></div>
      
      {/* Data Streams with Scroll-based Movement */}
      <div 
        className="data-stream" 
        style={{ 
          left: '15%', 
          animationDelay: '0s',
          transform: `translateY(${scrollParallax * 0.8}px)`
        }}
      ></div>
      <div 
        className="data-stream" 
        style={{ 
          left: '35%', 
          animationDelay: '2s',
          transform: `translateY(${scrollParallax * 0.6}px)`
        }}
      ></div>
      <div 
        className="data-stream" 
        style={{ 
          left: '55%', 
          animationDelay: '4s',
          transform: `translateY(${scrollParallax * 0.9}px)`
        }}
      ></div>
      <div 
        className="data-stream" 
        style={{ 
          left: '75%', 
          animationDelay: '6s',
          transform: `translateY(${scrollParallax * 0.7}px)`
        }}
      ></div>
      
      {/* Enhanced Particles with Mouse Interaction */}
      {Array.from({ length: 20 }).map((_, i) => (
        <div
          key={i}
          className="particle mouse-interactive"
          style={{
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 15}s`,
            animationDuration: `${15 + Math.random() * 10}s`,
            transform: `translate3d(${mouseParallaxX * (i % 3 + 1)}px, ${mouseParallaxY * (i % 3 + 1) + scrollParallax * 0.2}px, 0)`
          }}
        ></div>
      ))}
    </div>
  );
};

export default ParallaxBackground;