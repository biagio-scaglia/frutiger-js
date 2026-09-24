import React, { useEffect, useRef, useState } from 'react';
import { cn } from '../../utils/cn';

export type AeroCursorMode =
  'droplet' | 'crystal' | 'nature' | 'classic' | 'bubble' | 'cyber' | 'default';

export interface AeroCursorProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Selected Aero cursor mode preset */
  mode?: AeroCursorMode;
  /** Whether the custom cursor is enabled */
  enabled?: boolean;
  /** Trailing effect style */
  trail?: 'ring' | 'none';
  /** Cursor scale size */
  size?: 'sm' | 'md' | 'lg';
  /** Whether to hide the native operating system mouse arrow */
  hideNativeCursor?: boolean;
}

export const AeroCursor: React.FC<AeroCursorProps> = ({
  mode = 'droplet',
  enabled = true,
  trail = 'ring',
  size = 'md',
  hideNativeCursor = true,
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

  // Manage native cursor visibility
  useEffect(() => {
    if (typeof document === 'undefined') return;

    if (isDesktop && enabled && mode !== 'default' && hideNativeCursor) {
      document.documentElement.classList.add('fj-custom-cursor-active');
      document.body.classList.add('fj-custom-cursor-active');
    } else {
      document.documentElement.classList.remove('fj-custom-cursor-active');
      document.body.classList.remove('fj-custom-cursor-active');
    }

    return () => {
      document.documentElement.classList.remove('fj-custom-cursor-active');
      document.body.classList.remove('fj-custom-cursor-active');
    };
  }, [isDesktop, enabled, mode, hideNativeCursor]);

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

      if (ring && trail !== 'none') {
        // Smooth trailing interpolation
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
  }, [isDesktop, enabled, mode, isVisible, trail]);

  if (!isDesktop || !enabled || mode === 'default') {
    return null;
  }

  return (
    <div
      ref={rootRef}
      className={cn(
        'fj-cursor-root',
        size !== 'md' && `fj-cursor-root--${size}`,
        !isVisible && 'fj-cursor-root--hidden',
        isHovering && 'fj-cursor-root--hovering',
        isActive && 'fj-cursor-root--active',
        className
      )}
      aria-hidden="true"
      {...props}
    >
      {trail !== 'none' && (
        <div ref={ringRef} className={cn('fj-cursor-ring', `fj-cursor-ring--${mode}`)} />
      )}
      <div className={cn('fj-cursor-pointer', `fj-cursor-pointer--${mode}`)}>
        {/* 1. Droplet: 3D Glossy Liquid Water Orb */}
        {mode === 'droplet' && (
          <svg
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            className="fj-cursor-svg fj-cursor-svg--droplet"
          >
            <defs>
              <radialGradient id="fj-cursor-droplet-glow" cx="35%" cy="30%" r="65%">
                <stop offset="0%" stopColor="#ffffff" />
                <stop offset="30%" stopColor="#7dd3fc" />
                <stop offset="70%" stopColor="#0284c7" />
                <stop offset="100%" stopColor="#0369a1" />
              </radialGradient>
            </defs>
            <path
              d="M12 2.5C12 2.5 5.5 10.5 5.5 15.5A6.5 6.5 0 0 0 18.5 15.5C18.5 10.5 12 2.5 12 2.5Z"
              fill="url(#fj-cursor-droplet-glow)"
              stroke="#ffffff"
              strokeWidth="1.2"
            />
            <ellipse
              cx="9.5"
              cy="13"
              rx="2"
              ry="3"
              transform="rotate(-25 9.5 13)"
              fill="rgba(255,255,255,0.75)"
            />
            <circle cx="14" cy="16.5" r="1" fill="rgba(255,255,255,0.7)" />
          </svg>
        )}

        {/* 2. Crystal: Specular Faceted Glass Star */}
        {mode === 'crystal' && (
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            className="fj-cursor-svg fj-cursor-svg--crystal"
          >
            <defs>
              <radialGradient id="fj-cursor-crystal-grad" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#ffffff" />
                <stop offset="35%" stopColor="#d8b4fe" />
                <stop offset="75%" stopColor="#9333ea" />
                <stop offset="100%" stopColor="#6b21a8" />
              </radialGradient>
            </defs>
            <path
              d="M12 1L14.5 9.5L23 12L14.5 14.5L12 23L9.5 14.5L1 12L9.5 9.5Z"
              fill="url(#fj-cursor-crystal-grad)"
              stroke="#ffffff"
              strokeWidth="1.2"
            />
            <path
              d="M12 4L13.5 10.5L20 12L13.5 13.5L12 20L10.5 13.5L4 12L10.5 10.5Z"
              fill="rgba(255,255,255,0.5)"
            />
            <circle cx="12" cy="12" r="2.2" fill="#ffffff" />
          </svg>
        )}

        {/* 3. Nature: Bio-Aero Chlorophyll Sprout */}
        {mode === 'nature' && (
          <svg
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            className="fj-cursor-svg fj-cursor-svg--nature"
          >
            <defs>
              <radialGradient id="fj-cursor-nature-grad" cx="35%" cy="30%" r="65%">
                <stop offset="0%" stopColor="#ffffff" />
                <stop offset="35%" stopColor="#86efac" />
                <stop offset="70%" stopColor="#22c55e" />
                <stop offset="100%" stopColor="#15803d" />
              </radialGradient>
            </defs>
            <path
              d="M20 3C15 3 4.5 7.5 4.5 18.5C7.5 18.5 18 17 21 8C21.5 6.5 21 4 20 3Z"
              fill="url(#fj-cursor-nature-grad)"
              stroke="#ffffff"
              strokeWidth="1.2"
            />
            <path
              d="M6.5 16.5C10.5 13.5 14 10.5 18.5 6"
              stroke="rgba(255,255,255,0.85)"
              strokeWidth="1.2"
              strokeLinecap="round"
            />
            <ellipse
              cx="14"
              cy="8"
              rx="1.8"
              ry="3.5"
              transform="rotate(-35 14 8)"
              fill="rgba(255,255,255,0.65)"
            />
          </svg>
        )}

        {/* 4. Classic: Windows Vista / 7 Aero Glass Arrow */}
        {mode === 'classic' && (
          <svg
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            className="fj-cursor-svg fj-cursor-svg--classic"
          >
            <defs>
              <linearGradient id="fj-cursor-arrow-body" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#ffffff" stopOpacity="0.95" />
                <stop offset="45%" stopColor="#bae6fd" stopOpacity="0.9" />
                <stop offset="100%" stopColor="#0284c7" stopOpacity="0.95" />
              </linearGradient>
            </defs>
            <path
              d="M2 2L2 19L6.8 15.2L10.5 22L13.2 20.6L9.6 14L16.2 14Z"
              fill="url(#fj-cursor-arrow-body)"
              stroke="#ffffff"
              strokeWidth="1.2"
              strokeLinejoin="round"
            />
            <path
              d="M3.5 3.5L3.5 16.2L6.5 13.8L9.8 19.5L11 18.8L7.8 13.2L13 13.2Z"
              fill="rgba(255,255,255,0.55)"
            />
          </svg>
        )}

        {/* 5. Bubble: Iridescent Multi-Chromatic Soap Bubble */}
        {mode === 'bubble' && (
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            className="fj-cursor-svg fj-cursor-svg--bubble"
          >
            <defs>
              <radialGradient id="fj-cursor-bubble-grad" cx="35%" cy="30%" r="65%">
                <stop offset="0%" stopColor="#ffffff" stopOpacity="0.8" />
                <stop offset="30%" stopColor="#fbcfe8" stopOpacity="0.4" />
                <stop offset="60%" stopColor="#bae6fd" stopOpacity="0.3" />
                <stop offset="85%" stopColor="#c7d2fe" stopOpacity="0.5" />
                <stop offset="100%" stopColor="#38bdf8" stopOpacity="0.75" />
              </radialGradient>
            </defs>
            <circle
              cx="12"
              cy="12"
              r="10"
              fill="url(#fj-cursor-bubble-grad)"
              stroke="rgba(255, 255, 255, 0.9)"
              strokeWidth="1.2"
            />
            {/* Top-left specular highlight */}
            <ellipse
              cx="8.5"
              cy="8"
              rx="3"
              ry="1.5"
              transform="rotate(-30 8.5 8)"
              fill="rgba(255, 255, 255, 0.9)"
            />
            {/* Bottom-right rim bounce */}
            <ellipse
              cx="15.5"
              cy="16"
              rx="2"
              ry="1"
              transform="rotate(-30 15.5 16)"
              fill="rgba(255, 255, 255, 0.6)"
            />
          </svg>
        )}

        {/* 6. Cyber: Glowing Aurora Plasma Arrow */}
        {mode === 'cyber' && (
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            className="fj-cursor-svg fj-cursor-svg--cyber"
          >
            <defs>
              <linearGradient id="fj-cursor-cyber-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#ffffff" />
                <stop offset="30%" stopColor="#22d3ee" />
                <stop offset="70%" stopColor="#3b82f6" />
                <stop offset="100%" stopColor="#8b5cf6" />
              </linearGradient>
            </defs>
            <path
              d="M2 2L2 20L7.5 15.5L11.5 23L14.5 21.5L10.5 14L18 14Z"
              fill="url(#fj-cursor-cyber-grad)"
              stroke="#ffffff"
              strokeWidth="1.4"
              strokeLinejoin="round"
            />
            <path
              d="M4 4.5L4 16.5L7.5 13.5L10.5 19L12 18.2L9 13L14 13Z"
              fill="rgba(255, 255, 255, 0.65)"
            />
            <circle cx="2" cy="2" r="2" fill="#22d3ee" />
          </svg>
        )}
      </div>
    </div>
  );
};

AeroCursor.displayName = 'AeroCursor';
