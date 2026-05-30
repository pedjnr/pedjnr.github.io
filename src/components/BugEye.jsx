import { useEffect, useRef } from 'react';

const FOLLOW_DISTANCE = 150;

export default function BugEye({ variant = 'floating' }) {
  const eyeRef = useRef(null);
  const pupilRef = useRef(null);
  const maxEyeOffsetX = variant === 'brand' ? 5 : 8;
  const maxEyeOffsetY = variant === 'brand' ? 4 : 6;

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

    if (prefersReducedMotion.matches) {
      return undefined;
    }

    let animationFrame = 0;
    let pointer = { x: window.innerWidth / 2, y: window.innerHeight / 2 };

    const updatePupil = () => {
      animationFrame = 0;

      if (!eyeRef.current || !pupilRef.current) {
        return;
      }

      const bounds = eyeRef.current.getBoundingClientRect();
      const centerX = bounds.left + bounds.width / 2;
      const centerY = bounds.top + bounds.height / 2;
      const deltaX = pointer.x - centerX;
      const deltaY = pointer.y - centerY;
      const distance = Math.min(Math.hypot(deltaX, deltaY) / FOLLOW_DISTANCE, 1);
      const angle = Math.atan2(deltaY, deltaX);
      const offsetX = Math.cos(angle) * maxEyeOffsetX * distance;
      const offsetY = Math.sin(angle) * maxEyeOffsetY * distance;

      pupilRef.current.style.transform = `translate3d(${offsetX}px, ${offsetY}px, 0)`;
    };

    const handlePointerMove = (event) => {
      pointer = { x: event.clientX, y: event.clientY };

      if (!animationFrame) {
        animationFrame = window.requestAnimationFrame(updatePupil);
      }
    };

    window.addEventListener('pointermove', handlePointerMove, { passive: true });

    return () => {
      window.removeEventListener('pointermove', handlePointerMove);

      if (animationFrame) {
        window.cancelAnimationFrame(animationFrame);
      }
    };
  }, [maxEyeOffsetX, maxEyeOffsetY]);

  return (
    <div className={`bug-eye bug-eye--${variant}`} role="img" aria-label="De olho nos detalhes" tabIndex={0}>
      <span className="bug-eye__label">De olho nos detalhes</span>
      <span className="bug-eye__eye" ref={eyeRef} aria-hidden="true">
        <span className="bug-eye__pupil" ref={pupilRef}>
          <span className="bug-eye__shine" />
        </span>
      </span>
    </div>
  );
}
