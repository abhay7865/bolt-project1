import { useState, useEffect } from 'react';

interface ScrollPosition {
  scrollY: number;
  scrollDirection: 'up' | 'down';
}

export const useScrollPosition = (): ScrollPosition => {
  const [scrollPosition, setScrollPosition] = useState<ScrollPosition>({
    scrollY: 0,
    scrollDirection: 'down'
  });

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const updateScrollPosition = () => {
      const currentScrollY = window.scrollY;
      setScrollPosition({
        scrollY: currentScrollY,
        scrollDirection: currentScrollY > lastScrollY ? 'down' : 'up'
      });
      lastScrollY = currentScrollY;
    };

    window.addEventListener('scroll', updateScrollPosition, { passive: true });

    return () => {
      window.removeEventListener('scroll', updateScrollPosition);
    };
  }, []);

  return scrollPosition;
};