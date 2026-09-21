import React, { useEffect, useRef, useCallback } from 'react';
import { cn } from '../../utils/cn';

export interface WaterRippleProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Whether the interactive click ripples and bubbles are active */
  enabled?: boolean;
  /** Color palette for the water ripples */
  colorScheme?: 'sky' | 'emerald' | 'gloss';
  /** Whether to spawn micro specular bubbles at click position */
  showBubbles?: boolean;
  /** Whether to spawn gentle ambient background bubbles periodically */
  ambientBubbles?: boolean;
  /** Target element to attach listener to (defaults to window) */
  targetRef?: React.RefObject<HTMLElement | null>;
  /** Whether the canvas is fixed to full viewport or relative to parent */
  isFixed?: boolean;
}

interface Ripple {
  x: number;
  y: number;
  radius: number;
  maxRadius: number;
  opacity: number;
  speed: number;
  lineWidth: number;
}

interface Bubble {
  x: number;
  y: number;
  radius: number;
  vx: number;
  vy: number;
  opacity: number;
  wobbleSpeed: number;
  wobbleAmp: number;
  birth: number;
  lifetime: number;
}

export const WaterRipple: React.FC<WaterRippleProps> = ({
  enabled = true,
  colorScheme = 'sky',
  showBubbles = true,
  ambientBubbles = false,
  targetRef,
  isFixed = true,
  className,
  ...props
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const ripplesRef = useRef<Ripple[]>([]);
  const bubblesRef = useRef<Bubble[]>([]);
  const animFrameRef = useRef<number | null>(null);
  const lastAmbientSpawnRef = useRef<number>(0);

  const getColor = useCallback(() => {
    switch (colorScheme) {
      case 'emerald':
        return {
          rippleMain: 'rgba(34, 197, 94, ',
          rippleGlow: 'rgba(74, 222, 128, ',
          bubbleFill: 'rgba(220, 252, 231, 0.4)',
          bubbleStroke: 'rgba(74, 222, 128, 0.6)',
        };
      case 'gloss':
        return {
          rippleMain: 'rgba(255, 255, 255, ',
          rippleGlow: 'rgba(224, 242, 254, ',
          bubbleFill: 'rgba(255, 255, 255, 0.5)',
          bubbleStroke: 'rgba(255, 255, 255, 0.8)',
        };
      case 'sky':
      default:
        return {
          rippleMain: 'rgba(14, 165, 233, ',
          rippleGlow: 'rgba(56, 189, 248, ',
          bubbleFill: 'rgba(224, 242, 254, 0.45)',
          bubbleStroke: 'rgba(56, 189, 248, 0.7)',
        };
    }
  }, [colorScheme]);

  const addRipple = useCallback(
    (clientX: number, clientY: number) => {
      if (!enabled) return;

      const canvas = canvasRef.current;
      if (!canvas) return;

      const rect = canvas.getBoundingClientRect();
      const x = clientX - rect.left;
      const y = clientY - rect.top;

      // Spawn primary ripple and outer echo
      ripplesRef.current.push(
        {
          x,
          y,
          radius: 2,
          maxRadius: Math.min(rect.width, rect.height) * 0.22 + 40,
          opacity: 0.8,
          speed: 3.2,
          lineWidth: 3,
        },
        {
          x,
          y,
          radius: 1,
          maxRadius: Math.min(rect.width, rect.height) * 0.16 + 25,
          opacity: 0.6,
          speed: 2.2,
          lineWidth: 2,
        }
      );

      // Spawn 2 to 4 tactile micro bubbles
      if (showBubbles) {
        const count = Math.floor(2 + Math.random() * 3);
        for (let i = 0; i < count; i++) {
          bubblesRef.current.push({
            x: x + (Math.random() - 0.5) * 16,
            y: y + (Math.random() - 0.5) * 16,
            radius: Math.random() * 6 + 3,
            vx: (Math.random() - 0.5) * 1.5,
            vy: -(Math.random() * 2 + 1.2),
            opacity: 0.85,
            wobbleSpeed: Math.random() * 0.08 + 0.04,
            wobbleAmp: Math.random() * 1.5 + 0.5,
            birth: Date.now(),
            lifetime: 1200 + Math.random() * 800,
          });
        }
      }
    },
    [enabled, showBubbles]
  );

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let dpr = window.devicePixelRatio || 1;

    const handleResize = () => {
      dpr = window.devicePixelRatio || 1;
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      ctx.scale(dpr, dpr);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    const colors = getColor();

    const render = () => {
      ctx.clearRect(0, 0, canvas.width / dpr, canvas.height / dpr);

      const now = Date.now();

      // Ambient bubbles
      if (ambientBubbles && enabled && now - lastAmbientSpawnRef.current > 1800) {
        lastAmbientSpawnRef.current = now;
        const rect = canvas.getBoundingClientRect();
        bubblesRef.current.push({
          x: Math.random() * rect.width,
          y: rect.height + 10,
          radius: Math.random() * 8 + 4,
          vx: (Math.random() - 0.5) * 0.6,
          vy: -(Math.random() * 1.2 + 0.6),
          opacity: 0.6,
          wobbleSpeed: 0.04,
          wobbleAmp: 1.2,
          birth: now,
          lifetime: 6000,
        });
      }

      // Update & render ripples
      for (let i = ripplesRef.current.length - 1; i >= 0; i--) {
        const r = ripplesRef.current[i];
        r.radius += r.speed;
        r.opacity *= 0.945;

        if (r.radius >= r.maxRadius || r.opacity <= 0.02) {
          ripplesRef.current.splice(i, 1);
          continue;
        }

        // Draw outer glow wave
        ctx.beginPath();
        ctx.arc(r.x, r.y, r.radius, 0, Math.PI * 2);
        ctx.strokeStyle = `${colors.rippleGlow}${r.opacity * 0.7})`;
        ctx.lineWidth = r.lineWidth + 2;
        ctx.stroke();

        // Draw inner sharp wave
        ctx.beginPath();
        ctx.arc(r.x, r.y, r.radius * 0.95, 0, Math.PI * 2);
        ctx.strokeStyle = `${colors.rippleMain}${r.opacity})`;
        ctx.lineWidth = r.lineWidth;
        ctx.stroke();
      }

      // Update & render bubbles
      for (let i = bubblesRef.current.length - 1; i >= 0; i--) {
        const b = bubblesRef.current[i];
        const age = now - b.birth;

        if (age >= b.lifetime || b.opacity <= 0.01) {
          bubblesRef.current.splice(i, 1);
          continue;
        }

        b.y += b.vy;
        b.x += b.vx + Math.sin(age * b.wobbleSpeed) * (b.wobbleAmp * 0.5);
        b.opacity = Math.max(0, 1 - age / b.lifetime) * 0.85;

        // Draw bubble body
        ctx.beginPath();
        ctx.arc(b.x, b.y, b.radius, 0, Math.PI * 2);
        ctx.fillStyle = colors.bubbleFill;
        ctx.fill();
        ctx.strokeStyle = colors.bubbleStroke;
        ctx.lineWidth = 1;
        ctx.stroke();

        // Draw top-left specular glossy reflection dot
        ctx.beginPath();
        ctx.arc(b.x - b.radius * 0.35, b.y - b.radius * 0.35, b.radius * 0.28, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${b.opacity * 0.95})`;
        ctx.fill();
      }

      animFrameRef.current = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      if (animFrameRef.current) {
        cancelAnimationFrame(animFrameRef.current);
      }
    };
  }, [getColor, ambientBubbles, enabled]);

  useEffect(() => {
    if (!enabled) return;

    const handlePointerDown = (e: PointerEvent) => {
      addRipple(e.clientX, e.clientY);
    };

    const target = targetRef?.current || window;
    target.addEventListener('pointerdown', handlePointerDown as EventListener, { passive: true });

    return () => {
      target.removeEventListener('pointerdown', handlePointerDown as EventListener);
    };
  }, [enabled, addRipple, targetRef]);

  return (
    <div
      className={cn('fj-water-ripple', !isFixed && 'fj-water-ripple--relative', className)}
      aria-hidden="true"
      {...props}
    >
      <canvas ref={canvasRef} className="fj-water-ripple__canvas" />
    </div>
  );
};

WaterRipple.displayName = 'WaterRipple';
