import React, { useEffect, useRef, useState } from 'react';
import { cn } from '../../utils/cn';

export type AeroCursorMode = 'droplet' | 'crystal' | 'nature' | 'classic' | 'default';

export interface AeroCursorProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Selected Aero cursor mode */
  mode?: AeroCursorMode;
  /** Whether the custom cursor is enabled */
  enabled?: boolean;
}

export const AeroCursor: React.FC<AeroCursorProps> = ({
  mode = 'droplet',
  enabled = true,
  className,
  ...props
}) => {
  const [isDesktop, setIsDesktop] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [isActive, setIsActive] = useState(false);

  const rootRef = useRef<HTMLDivElement | null>(null);
  const ringRef = useRef<HTMLDivElement | null>(null);
  const posRef = useRef({ x: -100, y: -100 });
  const ringPosRef = useRef({ x: -100, y: -100 });
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    // Check if the current device is a desktop with a fine pointer (mouse/trackpad)
    if (typeof window === 'undefined') return;
    const media = window.matchMedia('(hover: hover) and (pointer: fine)');
    setIsDesktop(media.matches);

    const handleMediaChange = (e: MediaQueryListEvent) => {
      setIsDesktop(e.matches);
    };

    media.addEventListener('change', handleMediaChange);
    return () => media.removeEventListener('change', handleMediaChange);
  }, []);

  useEffect(() => {
    if (!isDesktop || !enabled || mode === 'default') return;

    const handleMouseMove = (e: MouseEvent) => {
      posRef.current = { x: e.clientX, y: e.clientY };
      if (!isVisible) setIsVisible(true);

      // Check if hovering over interactive elements
      const target = e.target as HTMLElement | null;
      if (target) {
        const isInteractive = Boolean(
          target.closest(
            'a, button, input, textarea, select, [role="button"], [role="tab"], [tabindex], .fj-button, .fj-tab, .fj-checkbox, .fj-switch, .fj-dropdown__trigger'
          )
        );
        setIsHovering(isInteractive);
      }
    };

    const handleMouseDown = () => setIsActive(true);
    const handleMouseUp = () => setIsActive(false);
    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('mousedown', handleMouseDown, { passive: true });
    window.addEventListener('mouseup', handleMouseUp, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    // Smooth animation loop for spring trailing ring
    const loop = () => {
      const root = rootRef.current;
      const ring = ringRef.current;

      if (root) {
        root.style.transform = `translate3d(${posRef.current.x}px, ${posRef.current.y}px, 0)`;
      }

      if (ring) {
        // Linear interpolation for smooth trailing ring
        ringPosRef.current.x += (posRef.current.x - ringPosRef.current.x) * 0.22;
        ringPosRef.current.y += (posRef.current.y - ringPosRef.current.y) * 0.22;
        const dx = ringPosRef.current.x - posRef.current.x;
        const dy = ringPosRef.current.y - posRef.current.y;
        ring.style.transform = `translate3d(${dx}px, ${dy}px, 0)`;
      }

      rafRef.current = requestAnimationFrame(loop);
    };

    rafRef.current = requestAnimationFrame(loop);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [isDesktop, enabled, mode, isVisible]);

  if (!isDesktop || !enabled || mode === 'default') {
    return null;
  }

  return (
    <div
      ref={rootRef}
      className={cn(
        'fj-cursor-root',
        !isVisible && 'fj-cursor-root--hidden',
        isHovering && 'fj-cursor-root--hovering',
        isActive && 'fj-cursor-root--active',
        className
      )}
      aria-hidden="true"
      {...props}
    >
      <div ref={ringRef} className={cn('fj-cursor-ring', `fj-cursor-ring--${mode}`)} />
      <div className={cn('fj-cursor-pointer', `fj-cursor-pointer--${mode}`)} />
    </div>
  );
};

AeroCursor.displayName = 'AeroCursor';
