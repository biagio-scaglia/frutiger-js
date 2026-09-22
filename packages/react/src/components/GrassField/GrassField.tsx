import React, { useEffect, useRef, useCallback } from 'react';
import { cn } from '../../utils/cn';

export interface GrassFieldProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Height of the grass field canvas (e.g. 140 or "160px") */
  height?: number | string;
  /** Blade density level */
  density?: 'low' | 'medium' | 'high';
  /** Color scheme preset for the grass */
  colorScheme?: 'lush' | 'sunny' | 'emerald' | 'golden';
  /** Whether to render translucent morning dew drops */
  showDew?: boolean;
  /** Whether to render wildflowers / daisies in the field */
  showFlowers?: boolean;
  /** Whether to show sunny ambient horizon glow */
  showGlow?: boolean;
  /** Whether blades bend away from the mouse pointer */
  interactive?: boolean;
  /** Wind strength and speed */
  windSpeed?: 'calm' | 'breeze' | 'windy';
}

interface Blade {
  x: number;
  height: number;
  width: number;
  layer: number; // 0 = back, 1 = mid, 2 = front
  baseLean: number;
  currentLean: number;
  targetLean: number;
  windPhase: number;
  hasDew: boolean;
  dewPos: number; // fraction of height (0.4 to 0.85)
  dewSize: number;
  hasFlower: boolean;
  flowerType: 'daisy' | 'clover';
  flowerSize: number;
}

export const GrassField: React.FC<GrassFieldProps> = ({
  height = 140,
  density = 'medium',
  colorScheme = 'lush',
  showDew = true,
  showFlowers = true,
  showGlow = true,
  interactive = true,
  windSpeed = 'breeze',
  className,
  style,
  ...props
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const bladesRef = useRef<Blade[]>([]);
  const mouseRef = useRef<{ x: number; y: number; active: boolean }>({
    x: -1000,
    y: -1000,
    active: false,
  });
  const animFrameRef = useRef<number | null>(null);

  const getColors = useCallback(() => {
    switch (colorScheme) {
      case 'sunny':
        return {
          back: ['#15803d', '#4ade80'],
          mid: ['#16a34a', '#86efac'],
          front: ['#22c55e', '#bef264'],
          highlight: 'rgba(254, 240, 138, 0.4)',
        };
      case 'emerald':
        return {
          back: ['#065f46', '#059669'],
          mid: ['#047857', '#10b981'],
          front: ['#059669', '#34d399'],
          highlight: 'rgba(167, 243, 208, 0.35)',
        };
      case 'golden':
        return {
          back: ['#854d0e', '#ca8a04'],
          mid: ['#a16207', '#eab308'],
          front: ['#ca8a04', '#fde047'],
          highlight: 'rgba(254, 240, 138, 0.5)',
        };
      case 'lush':
      default:
        return {
          back: ['#14532d', '#15803d'],
          mid: ['#166534', '#22c55e'],
          front: ['#15803d', '#4ade80'],
          highlight: 'rgba(255, 255, 255, 0.35)',
        };
    }
  }, [colorScheme]);

  // Generate grass blades
  const initBlades = useCallback(
    (width: number, canvasHeight: number) => {
      const blades: Blade[] = [];
      const densityMultiplier = density === 'low' ? 0.4 : density === 'high' ? 0.95 : 0.65;
      const bladeCount = Math.floor(width * densityMultiplier);

      for (let i = 0; i < bladeCount; i++) {
        const x = Math.random() * width;
        const layer = Math.random() < 0.35 ? 0 : Math.random() < 0.7 ? 1 : 2;
        const baseHeight =
          layer === 0
            ? canvasHeight * (0.6 + Math.random() * 0.25)
            : layer === 1
              ? canvasHeight * (0.75 + Math.random() * 0.2)
              : canvasHeight * (0.85 + Math.random() * 0.15);

        const widthBlade = layer === 0 ? 3.5 : layer === 1 ? 4.5 : 5.5;
        const baseLean = (Math.random() - 0.5) * 16;
        const hasDew = showDew && Math.random() < 0.22;
        const hasFlower = showFlowers && Math.random() < 0.035;

        blades.push({
          x,
          height: baseHeight,
          width: widthBlade,
          layer,
          baseLean,
          currentLean: baseLean,
          targetLean: baseLean,
          windPhase: Math.random() * Math.PI * 2,
          hasDew,
          dewPos: 0.4 + Math.random() * 0.45,
          dewSize: Math.random() * 2.5 + 2,
          hasFlower,
          flowerType: Math.random() < 0.65 ? 'daisy' : 'clover',
          flowerSize: Math.random() * 3 + 4.5,
        });
      }

      // Sort by layer for proper depth rendering
      blades.sort((a, b) => a.layer - b.layer);
      bladesRef.current = blades;
    },
    [density, showDew, showFlowers]
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
      initBlades(rect.width, rect.height);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    const colors = getColors();
    const windSpeedFactor = windSpeed === 'calm' ? 0.001 : windSpeed === 'windy' ? 0.0045 : 0.0025;
    const windStrength = windSpeed === 'calm' ? 8 : windSpeed === 'windy' ? 26 : 16;

    const startTime = performance.now();

    const render = (time: number) => {
      const rect = canvas.getBoundingClientRect();
      const width = rect.width;
      const cHeight = rect.height;

      ctx.clearRect(0, 0, width, cHeight);

      const elapsed = time - startTime;
      const mouse = mouseRef.current;

      const blades = bladesRef.current;
      for (let i = 0; i < blades.length; i++) {
        const b = blades[i];

        // Natural sinusoidal wind wave
        const wind =
          Math.sin(elapsed * windSpeedFactor + b.x * 0.006 + b.windPhase) *
          windStrength *
          (b.layer === 0 ? 0.6 : b.layer === 1 ? 0.85 : 1.1);

        // Mouse deflection interaction
        let mouseDeflection = 0;
        if (interactive && mouse.active) {
          const dx = b.x - mouse.x;
          const dy = cHeight - mouse.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          const maxDist = 90;

          if (dist < maxDist) {
            const force = (1 - dist / maxDist) * 38;
            mouseDeflection = dx > 0 ? force : -force;
          }
        }

        b.targetLean = b.baseLean + wind + mouseDeflection;
        b.currentLean += (b.targetLean - b.currentLean) * 0.14;

        // Render blade
        const tipX = b.x + b.currentLean;
        const tipY = cHeight - b.height;
        const ctrlX = b.x + b.currentLean * 0.45;
        const ctrlY = cHeight - b.height * 0.55;

        // Color gradient per layer
        const colorStops = b.layer === 0 ? colors.back : b.layer === 1 ? colors.mid : colors.front;
        const grad = ctx.createLinearGradient(b.x, cHeight, tipX, tipY);
        grad.addColorStop(0, colorStops[0]);
        grad.addColorStop(1, colorStops[1]);

        ctx.beginPath();
        ctx.moveTo(b.x - b.width * 0.5, cHeight);
        ctx.quadraticCurveTo(ctrlX - b.width * 0.25, ctrlY, tipX, tipY);
        ctx.quadraticCurveTo(ctrlX + b.width * 0.25, ctrlY, b.x + b.width * 0.5, cHeight);
        ctx.closePath();

        ctx.fillStyle = grad;
        ctx.fill();

        // Top specular ridge highlight on front layer
        if (b.layer === 2) {
          ctx.beginPath();
          ctx.moveTo(ctrlX, ctrlY);
          ctx.lineTo(tipX, tipY);
          ctx.strokeStyle = colors.highlight;
          ctx.lineWidth = 1;
          ctx.stroke();
        }

        // Render Dew Drop
        if (b.hasDew) {
          const dewT = b.dewPos;
          const dewX =
            (1 - dewT) * (1 - dewT) * b.x + 2 * (1 - dewT) * dewT * ctrlX + dewT * dewT * tipX;
          const dewY =
            (1 - dewT) * (1 - dewT) * cHeight + 2 * (1 - dewT) * dewT * ctrlY + dewT * dewT * tipY;

          // Water drop body
          ctx.beginPath();
          ctx.arc(dewX, dewY, b.dewSize, 0, Math.PI * 2);
          ctx.fillStyle = 'rgba(255, 255, 255, 0.85)';
          ctx.fill();
          ctx.strokeStyle = 'rgba(56, 189, 248, 0.7)';
          ctx.lineWidth = 0.75;
          ctx.stroke();

          // Specular gleam
          ctx.beginPath();
          ctx.arc(
            dewX - b.dewSize * 0.35,
            dewY - b.dewSize * 0.35,
            b.dewSize * 0.3,
            0,
            Math.PI * 2
          );
          ctx.fillStyle = '#ffffff';
          ctx.fill();
        }

        // Render Wildflower (Daisy / Clover)
        if (b.hasFlower) {
          const flowerX = tipX;
          const flowerY = tipY + 2;

          if (b.flowerType === 'daisy') {
            // White petals
            ctx.fillStyle = '#ffffff';
            for (let p = 0; p < 6; p++) {
              const angle = (p * Math.PI) / 3;
              const px = flowerX + Math.cos(angle) * b.flowerSize;
              const py = flowerY + Math.sin(angle) * b.flowerSize;
              ctx.beginPath();
              ctx.arc(px, py, b.flowerSize * 0.45, 0, Math.PI * 2);
              ctx.fill();
            }
            // Yellow center
            ctx.beginPath();
            ctx.arc(flowerX, flowerY, b.flowerSize * 0.45, 0, Math.PI * 2);
            ctx.fillStyle = '#facc15';
            ctx.fill();
          } else {
            // Clover
            ctx.fillStyle = '#4ade80';
            for (let p = 0; p < 3; p++) {
              const angle = (p * 2 * Math.PI) / 3;
              const px = flowerX + Math.cos(angle) * (b.flowerSize * 0.7);
              const py = flowerY + Math.sin(angle) * (b.flowerSize * 0.7);
              ctx.beginPath();
              ctx.arc(px, py, b.flowerSize * 0.4, 0, Math.PI * 2);
              ctx.fill();
            }
          }
        }
      }

      animFrameRef.current = requestAnimationFrame(render);
    };

    animFrameRef.current = requestAnimationFrame(render);

    return () => {
      window.removeEventListener('resize', handleResize);
      if (animFrameRef.current) {
        cancelAnimationFrame(animFrameRef.current);
      }
    };
  }, [getColors, initBlades, interactive, windSpeed]);

  // Pointer event handlers for interactive mouse deflection
  const handlePointerMove = (e: React.PointerEvent<HTMLCanvasElement>) => {
    if (!interactive) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const rect = canvas.getBoundingClientRect();
    mouseRef.current = {
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
      active: true,
    };
  };

  const handlePointerLeave = () => {
    mouseRef.current.active = false;
  };

  const formattedHeight = typeof height === 'number' ? `${height}px` : height;

  return (
    <div
      className={cn('fj-grass-field', !interactive && 'fj-grass-field--non-interactive', className)}
      style={{ height: formattedHeight, ...style }}
      {...props}
    >
      {showGlow && <div className="fj-grass-field__glow" aria-hidden="true" />}
      <canvas
        ref={canvasRef}
        className="fj-grass-field__canvas"
        onPointerMove={handlePointerMove}
        onPointerLeave={handlePointerLeave}
        aria-hidden="true"
      />
      <div className="fj-grass-field__ground" aria-hidden="true" />
    </div>
  );
};

GrassField.displayName = 'GrassField';
