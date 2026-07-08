import { useEffect, useRef, useState } from 'react';

interface UseParallaxOptions {
  speed?: number;
  disabled?: boolean;
}

export const useParallax = (options: UseParallaxOptions = {}) => {
  const { speed = 0.5, disabled = false } = options;
  const ref = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    // Disable on mobile/tablet and for users who prefer reduced motion
    const isMobile = window.matchMedia('(max-width: 1023px)').matches;
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (disabled || isMobile || prefersReducedMotion) return;

    let rafId: number;
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        rafId = requestAnimationFrame(() => {
          if (ref.current) {
            const rect = ref.current.getBoundingClientRect();
            const scrolled = window.pageYOffset;
            const elementTop = rect.top + scrolled;
            const elementHeight = rect.height;
            const windowHeight = window.innerHeight;

            if (rect.top < windowHeight && rect.bottom > 0) {
              const scrollProgress =
                (scrolled + windowHeight - elementTop) / (windowHeight + elementHeight);
              const parallaxOffset = (scrollProgress - 0.5) * 100 * speed;
              setOffset(parallaxOffset);
            }
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, [speed, disabled]);

  return { ref, offset };
};
