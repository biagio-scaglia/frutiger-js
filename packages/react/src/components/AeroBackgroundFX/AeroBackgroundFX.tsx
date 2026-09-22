import React, { useEffect, useRef, useCallback } from 'react';
import { cn } from '../../utils/cn';

export type AeroBackgroundFXMode = 'bubbles' | 'aurora' | 'leaves' | 'clouds' | 'none';

export interface AeroBackgroundFXProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Active ambient effect preset */
  mode?: AeroBackgroundFXMode;
  /** Color palette for the effects */
  colorScheme?: 'sky' | 'emerald' | 'gloss' | 'sunset';
  /** Target element to attach listener to (defaults to window) */
  targetRef?: React.RefObject<HTMLElement | null>;
  /** Whether canvas is fixed to full viewport or relative to parent */
  isFixed?: boolean;
}

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  opacity: number;
  rotation: number;
  vRot: number;
  scale: number;
  wobbleSpeed: number;
  wobbleAmp: number;
  type: 'bubble' | 'sparkle' | 'leaf' | 'cloud' | 'ripple';
  color?: string;
  birth: number;
  lifetime: number;
  maxRadius?: number;
  speed?: number;
  lineWidth?: number;
}

export const AeroBackgroundFX: React.FC<AeroBackgroundFXProps> = ({
  mode = 'bubbles',
  colorScheme = 'sky',
  targetRef,
  isFixed = true,
  className,
  ...props
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const particlesRef = useRef<Particle[]>([]);
  const animFrameRef = useRef<number | null>(null);
  const lastAmbientSpawnRef = useRef<number>(0);

  const addInteractiveBurst = useCallback(
    (clientX: number, clientY: number) => {
      if (mode === 'none') return;
      const canvas = canvasRef.current;
      if (!canvas) return;

      const rect = canvas.getBoundingClientRect();
      const x = clientX - rect.left;
      const y = clientY - rect.top;
      const now = Date.now();

      if (mode === 'bubbles') {
        // Primary water ripple
        particlesRef.current.push({
          x,
          y,
          vx: 0,
          vy: 0,
          radius: 2,
          maxRadius: Math.min(rect.width, rect.height) * 0.22 + 40,
          opacity: 0.8,
          rotation: 0,
          vRot: 0,
          scale: 1,
          wobbleSpeed: 0,
          wobbleAmp: 0,
          type: 'ripple',
          speed: 3.2,
          lineWidth: 3,
          birth: now,
          lifetime: 1500,
        });

        // 3-5 tactical bubbles
        const count = Math.floor(3 + Math.random() * 3);
        for (let i = 0; i < count; i++) {
          particlesRef.current.push({
            x: x + (Math.random() - 0.5) * 18,
            y: y + (Math.random() - 0.5) * 18,
            radius: Math.random() * 6 + 3,
            vx: (Math.random() - 0.5) * 1.6,
            vy: -(Math.random() * 2.2 + 1.2),
            opacity: 0.85,
            rotation: 0,
            vRot: 0,
            scale: 1,
            wobbleSpeed: Math.random() * 0.08 + 0.04,
            wobbleAmp: Math.random() * 1.5 + 0.5,
            type: 'bubble',
            birth: now,
            lifetime: 1400 + Math.random() * 800,
          });
        }
      } else if (mode === 'aurora') {
        // Sunbeam / Sparkle star burst
        const count = 7;
        for (let i = 0; i < count; i++) {
          const angle = (i * Math.PI * 2) / count + Math.random() * 0.5;
          const spd = Math.random() * 2.5 + 1.5;
          particlesRef.current.push({
            x,
            y,
            vx: Math.cos(angle) * spd,
            vy: Math.sin(angle) * spd,
            radius: Math.random() * 5 + 4,
            opacity: 0.95,
            rotation: Math.random() * Math.PI,
            vRot: (Math.random() - 0.5) * 0.15,
            scale: 1,
            wobbleSpeed: 0.05,
            wobbleAmp: 1,
            type: 'sparkle',
            birth: now,
            lifetime: 1000 + Math.random() * 600,
          });
        }
      } else if (mode === 'leaves') {
        // Botanical flutter burst
        const count = 4;
        for (let i = 0; i < count; i++) {
          particlesRef.current.push({
            x: x + (Math.random() - 0.5) * 20,
            y: y + (Math.random() - 0.5) * 20,
            vx: (Math.random() - 0.5) * 2.4,
            vy: Math.random() * 1.8 + 0.8,
            radius: Math.random() * 5 + 6,
            opacity: 0.9,
            rotation: Math.random() * Math.PI * 2,
            vRot: (Math.random() - 0.5) * 0.08,
            scale: 1,
            wobbleSpeed: Math.random() * 0.05 + 0.02,
            wobbleAmp: Math.random() * 2 + 1,
            type: 'leaf',
            birth: now,
            lifetime: 3000 + Math.random() * 1500,
          });
        }
      } else if (mode === 'clouds') {
        // Expanding cloud puff
        particlesRef.current.push({
          x,
          y,
          vx: Math.random() * 0.4 + 0.2,
          vy: -0.1,
          radius: Math.random() * 18 + 24,
          opacity: 0.65,
          rotation: 0,
          vRot: 0.002,
          scale: 0.5,
          wobbleSpeed: 0.01,
          wobbleAmp: 0.5,
          type: 'cloud',
          birth: now,
          lifetime: 5000,
        });
      }
    },
    [mode]
  );

  useEffect(() => {
    if (mode === 'none') {
      particlesRef.current = [];
      return;
    }

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

    const render = () => {
      const rect = canvas.getBoundingClientRect();
      const width = rect.width;
      const height = rect.height;

      ctx.clearRect(0, 0, width, height);
      const now = Date.now();

      // Ambient generator
      if (
        now - lastAmbientSpawnRef.current >
        (mode === 'clouds' ? 3200 : mode === 'leaves' ? 1200 : 1500)
      ) {
        lastAmbientSpawnRef.current = now;

        if (mode === 'bubbles') {
          particlesRef.current.push({
            x: Math.random() * width,
            y: height + 10,
            radius: Math.random() * 8 + 4,
            vx: (Math.random() - 0.5) * 0.6,
            vy: -(Math.random() * 1.2 + 0.6),
            opacity: 0.6,
            rotation: 0,
            vRot: 0,
            scale: 1,
            wobbleSpeed: 0.04,
            wobbleAmp: 1.2,
            type: 'bubble',
            birth: now,
            lifetime: 6000,
          });
        } else if (mode === 'aurora') {
          // Floating shimmer sparkles
          particlesRef.current.push({
            x: Math.random() * width,
            y: Math.random() * height * 0.7,
            radius: Math.random() * 4 + 3,
            vx: (Math.random() - 0.5) * 0.3,
            vy: -(Math.random() * 0.4 + 0.2),
            opacity: 0.8,
            rotation: Math.random() * Math.PI,
            vRot: 0.03,
            scale: 1,
            wobbleSpeed: 0.06,
            wobbleAmp: 0.8,
            type: 'sparkle',
            birth: now,
            lifetime: 2800,
          });
        } else if (mode === 'leaves') {
          // Drifting leaves from top
          particlesRef.current.push({
            x: Math.random() * width,
            y: -15,
            radius: Math.random() * 6 + 6,
            vx: Math.random() * 0.8 + 0.4,
            vy: Math.random() * 0.9 + 0.7,
            opacity: 0.8,
            rotation: Math.random() * Math.PI * 2,
            vRot: (Math.random() - 0.5) * 0.05,
            scale: 1,
            wobbleSpeed: Math.random() * 0.04 + 0.02,
            wobbleAmp: Math.random() * 2 + 1,
            type: 'leaf',
            birth: now,
            lifetime: 7500,
          });
        } else if (mode === 'clouds') {
          // Drifting cumulus cloud
          particlesRef.current.push({
            x: -60,
            y: Math.random() * (height * 0.45) + 20,
            radius: Math.random() * 24 + 30,
            vx: Math.random() * 0.35 + 0.25,
            vy: 0,
            opacity: 0.45,
            rotation: 0,
            vRot: 0,
            scale: 0.8,
            wobbleSpeed: 0.005,
            wobbleAmp: 0.2,
            type: 'cloud',
            birth: now,
            lifetime: 16000,
          });
        }
      }

      // Draw subtle aurora sunbeams if in aurora mode
      if (mode === 'aurora') {
        const time = now * 0.0006;
        ctx.save();
        const beamGrad = ctx.createRadialGradient(
          width * 0.85,
          0,
          10,
          width * 0.85,
          0,
          width * 0.9
        );
        beamGrad.addColorStop(0, 'rgba(254, 240, 138, 0.15)');
        beamGrad.addColorStop(0.4, 'rgba(56, 189, 248, 0.08)');
        beamGrad.addColorStop(1, 'transparent');
        ctx.fillStyle = beamGrad;
        ctx.fillRect(0, 0, width, height);

        // Rotating soft ray
        ctx.beginPath();
        ctx.moveTo(width * 0.85, 0);
        ctx.lineTo(width * 0.85 + Math.sin(time) * 120 - 150, height);
        ctx.lineTo(width * 0.85 + Math.sin(time) * 120 + 150, height);
        ctx.closePath();
        ctx.fillStyle = 'rgba(255, 255, 255, 0.035)';
        ctx.fill();
        ctx.restore();
      }

      // Update & render particles
      for (let i = particlesRef.current.length - 1; i >= 0; i--) {
        const p = particlesRef.current[i];
        const age = now - p.birth;

        if (age >= p.lifetime || p.opacity <= 0.01) {
          particlesRef.current.splice(i, 1);
          continue;
        }

        if (p.type === 'ripple') {
          p.radius += p.speed || 3;
          p.opacity *= 0.945;

          if (p.radius >= (p.maxRadius || 120) || p.opacity <= 0.02) {
            particlesRef.current.splice(i, 1);
            continue;
          }

          ctx.beginPath();
          ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
          ctx.strokeStyle = `rgba(56, 189, 248, ${p.opacity * 0.75})`;
          ctx.lineWidth = (p.lineWidth || 2) + 2;
          ctx.stroke();

          ctx.beginPath();
          ctx.arc(p.x, p.y, p.radius * 0.95, 0, Math.PI * 2);
          ctx.strokeStyle = `rgba(14, 165, 233, ${p.opacity})`;
          ctx.lineWidth = p.lineWidth || 2;
          ctx.stroke();
          continue;
        }

        p.x += p.vx + Math.sin(age * p.wobbleSpeed) * (p.wobbleAmp * 0.5);
        p.y += p.vy;
        p.rotation += p.vRot;

        const currentOpacity = Math.max(0, 1 - age / p.lifetime) * p.opacity;

        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate(p.rotation);

        if (p.type === 'bubble') {
          // Bubble Body
          ctx.beginPath();
          ctx.arc(0, 0, p.radius, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(224, 242, 254, ${currentOpacity * 0.45})`;
          ctx.fill();
          ctx.strokeStyle = `rgba(56, 189, 248, ${currentOpacity * 0.75})`;
          ctx.lineWidth = 1;
          ctx.stroke();

          // Specular Glint
          ctx.beginPath();
          ctx.arc(-p.radius * 0.35, -p.radius * 0.35, p.radius * 0.28, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(255, 255, 255, ${currentOpacity * 0.9})`;
          ctx.fill();
        } else if (p.type === 'sparkle') {
          // 4-point Diamond Star Sparkle
          const r = p.radius;
          ctx.beginPath();
          ctx.moveTo(0, -r);
          ctx.quadraticCurveTo(0, 0, r, 0);
          ctx.quadraticCurveTo(0, 0, 0, r);
          ctx.quadraticCurveTo(0, 0, -r, 0);
          ctx.quadraticCurveTo(0, 0, 0, -r);
          ctx.closePath();
          ctx.fillStyle = `rgba(255, 255, 255, ${currentOpacity * 0.95})`;
          ctx.fill();
          ctx.shadowColor = '#38bdf8';
          ctx.shadowBlur = 8;
        } else if (p.type === 'leaf') {
          // Frutiger Organic Leaf
          const r = p.radius;
          ctx.beginPath();
          ctx.moveTo(0, -r);
          ctx.quadraticCurveTo(r * 0.8, -r * 0.3, r * 0.6, r * 0.7);
          ctx.quadraticCurveTo(0, r, -r * 0.6, r * 0.7);
          ctx.quadraticCurveTo(-r * 0.8, -r * 0.3, 0, -r);
          ctx.closePath();

          const leafGrad = ctx.createLinearGradient(0, -r, 0, r);
          leafGrad.addColorStop(0, `rgba(134, 239, 172, ${currentOpacity * 0.85})`);
          leafGrad.addColorStop(1, `rgba(34, 197, 94, ${currentOpacity * 0.75})`);
          ctx.fillStyle = leafGrad;
          ctx.fill();
          ctx.strokeStyle = `rgba(255, 255, 255, ${currentOpacity * 0.6})`;
          ctx.lineWidth = 0.8;
          ctx.stroke();
        } else if (p.type === 'cloud') {
          // Soft Cumulus Cloud cluster
          const r = p.radius;
          ctx.fillStyle = `rgba(255, 255, 255, ${currentOpacity * 0.55})`;
          ctx.beginPath();
          ctx.arc(0, 0, r * 0.6, 0, Math.PI * 2);
          ctx.arc(r * 0.45, -r * 0.1, r * 0.45, 0, Math.PI * 2);
          ctx.arc(-r * 0.45, -r * 0.1, r * 0.45, 0, Math.PI * 2);
          ctx.arc(r * 0.25, r * 0.2, r * 0.4, 0, Math.PI * 2);
          ctx.arc(-r * 0.25, r * 0.2, r * 0.4, 0, Math.PI * 2);
          ctx.fill();
        }

        ctx.restore();
      }

      animFrameRef.current = requestAnimationFrame(render);
    };

    const handleVisibilityChange = () => {
      if (document.hidden) {
        if (animFrameRef.current) {
          cancelAnimationFrame(animFrameRef.current);
          animFrameRef.current = null;
        }
      } else if (!animFrameRef.current) {
        animFrameRef.current = requestAnimationFrame(render);
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);
    animFrameRef.current = requestAnimationFrame(render);

    return () => {
      window.removeEventListener('resize', handleResize);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      if (animFrameRef.current) {
        cancelAnimationFrame(animFrameRef.current);
      }
    };
  }, [mode, colorScheme]);

  useEffect(() => {
    if (mode === 'none') return;

    const handlePointerDown = (e: PointerEvent) => {
      addInteractiveBurst(e.clientX, e.clientY);
    };

    const target = targetRef?.current || window;
    target.addEventListener('pointerdown', handlePointerDown as EventListener, { passive: true });

    return () => {
      target.removeEventListener('pointerdown', handlePointerDown as EventListener);
    };
  }, [mode, addInteractiveBurst, targetRef]);

  if (mode === 'none') {
    return null;
  }

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

AeroBackgroundFX.displayName = 'AeroBackgroundFX';
