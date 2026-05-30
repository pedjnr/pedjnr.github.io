import { useEffect } from 'react';

export default function useRevealOnScroll() {
  useEffect(() => {
    const revealItems = Array.from(document.querySelectorAll('[data-reveal]'));

    if (revealItems.length === 0) {
      return undefined;
    }

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (reducedMotion || !('IntersectionObserver' in window)) {
      revealItems.forEach((item) => item.classList.add('is-visible'));
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        rootMargin: '0px 0px -12% 0px',
        threshold: 0.16
      }
    );

    revealItems.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  }, []);
}
