import React from 'react';

export interface IconProps extends React.SVGAttributes<SVGElement> {
  size?: number | string;
  className?: string;
  variant?: 'outline' | 'gloss' | 'aero';
  glow?: boolean;
  color?: string;
}

// Helper to determine dimensions
const getDims = (size: number | string) => ({
  width: size,
  height: size,
});

/* ==========================================================================
   NATURE & ECO AERO ICONS
   ========================================================================== */

/**
 * IconFish - Classic Frutiger Aero Swimming Goldfish
 */
export const IconFish: React.FC<IconProps> = ({
  size = 24,
  className = '',
  variant = 'aero',
  ...props
}) => (
  <svg
    {...getDims(size)}
    viewBox="0 0 24 24"
    fill="none"
    className={`fj-icon fj-icon-fish ${className}`}
    {...props}
  >
    <defs>
      <linearGradient id="fj-fish-body" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#fed7aa" />
        <stop offset="30%" stopColor="#f97316" />
        <stop offset="80%" stopColor="#ea580c" />
        <stop offset="100%" stopColor="#c2410c" />
      </linearGradient>
      <linearGradient id="fj-fish-fin" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#fdba74" stopOpacity="0.9" />
        <stop offset="100%" stopColor="#ea580c" stopOpacity="0.5" />
      </linearGradient>
    </defs>
    {variant === 'outline' ? (
      <path
        d="M18 12c-3.5 4-8.5 5-13 3 2.5-3 2.5-7 0-10 4.5-2 9.5-1 13 3l4-3v8l-4-2z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    ) : (
      <>
        {/* Tail fin */}
        <path
          d="M17 12l5-4.5c.3-.3.8-.1.8.3v8.4c0 .4-.5.6-.8.3L17 12z"
          fill="url(#fj-fish-fin)"
          stroke="#ea580c"
          strokeWidth="0.75"
        />
        {/* Dorsal fin */}
        <path d="M8.5 7.5c2-2.5 5-2.5 7 0-2.5.5-4.5.5-7 0z" fill="url(#fj-fish-fin)" />
        {/* Main Body */}
        <path
          d="M18 12c-3.2 3.8-7.8 4.8-12.5 3 2.2-2.8 2.2-6.8 0-9.6 4.7-1.8 9.3-.8 12.5 3.6.5.6.5 2.4 0 3z"
          fill="url(#fj-fish-body)"
          stroke="#ea580c"
          strokeWidth="0.75"
        />
        {/* Gloss Specular Highlight */}
        <ellipse
          cx="10"
          cy="9.5"
          rx="4.5"
          ry="1.8"
          fill="#ffffff"
          opacity="0.5"
          transform="rotate(-5 10 9.5)"
        />
        {/* Eye */}
        <circle cx="7.5" cy="11" r="1.5" fill="#ffffff" />
        <circle cx="7.2" cy="11" r="0.8" fill="#0f172a" />
        <circle cx="7" cy="10.7" r="0.3" fill="#ffffff" />
        {/* Water bubble */}
        <circle cx="3" cy="7" r="1.2" fill="#38bdf8" opacity="0.7" />
        <circle cx="3.3" cy="6.7" r="0.4" fill="#ffffff" opacity="0.9" />
      </>
    )}
  </svg>
);

/**
 * IconBubble - Translucent Spherical 3D Glass Aqua Bubble
 */
export const IconBubble: React.FC<IconProps> = ({
  size = 24,
  className = '',
  variant = 'aero',
  ...props
}) => (
  <svg
    {...getDims(size)}
    viewBox="0 0 24 24"
    fill="none"
    className={`fj-icon fj-icon-bubble ${className}`}
    {...props}
  >
    <defs>
      <radialGradient id="fj-bubble-bg" cx="35%" cy="30%" r="70%">
        <stop offset="0%" stopColor="#ffffff" stopOpacity="0.8" />
        <stop offset="35%" stopColor="#bae6fd" stopOpacity="0.4" />
        <stop offset="70%" stopColor="#38bdf8" stopOpacity="0.6" />
        <stop offset="100%" stopColor="#0284c7" stopOpacity="0.85" />
      </radialGradient>
      <linearGradient id="fj-bubble-rim" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#ffffff" stopOpacity="0.9" />
        <stop offset="50%" stopColor="#38bdf8" stopOpacity="0.5" />
        <stop offset="100%" stopColor="#0369a1" stopOpacity="0.8" />
      </linearGradient>
    </defs>
    {variant === 'outline' ? (
      <>
        <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2" />
        <path d="M9 8a4 4 0 0 1 4-1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </>
    ) : (
      <>
        {/* Outer Shadow Ring */}
        <circle cx="12" cy="12" r="9.2" fill="none" stroke="url(#fj-bubble-rim)" strokeWidth="1" />
        {/* Main Body Sphere */}
        <circle cx="12" cy="12" r="9" fill="url(#fj-bubble-bg)" />
        {/* Top Specular Crescent */}
        <path
          d="M7 9C8 6.5 11 5.5 14.5 6c-2.5-.5-5.5.5-6.8 2.5-.4.6-.7 1.2-.7.5z"
          fill="#ffffff"
          opacity="0.9"
        />
        <ellipse
          cx="9"
          cy="8"
          rx="2.5"
          ry="1.2"
          fill="#ffffff"
          opacity="0.85"
          transform="rotate(-30 9 8)"
        />
        {/* Bottom Caustic Reflection */}
        <ellipse
          cx="14"
          cy="16.5"
          rx="3.5"
          ry="1"
          fill="#7dd3fc"
          opacity="0.6"
          transform="rotate(-15 14 16.5)"
        />
        {/* Tiny Companion Bubble */}
        <circle
          cx="19"
          cy="5.5"
          r="2"
          fill="url(#fj-bubble-bg)"
          stroke="#7dd3fc"
          strokeWidth="0.5"
        />
        <circle cx="18.5" cy="5" r="0.6" fill="#ffffff" opacity="0.9" />
      </>
    )}
  </svg>
);

/**
 * IconWater - Glossy Water Droplet
 */
export const IconWater: React.FC<IconProps> = ({
  size = 20,
  className = '',
  variant = 'aero',
  ...props
}) => (
  <svg
    {...getDims(size)}
    viewBox="0 0 24 24"
    fill="none"
    className={`fj-icon fj-icon-water ${className}`}
    {...props}
  >
    <defs>
      <linearGradient id="fj-water-grad" x1="20%" y1="0%" x2="80%" y2="100%">
        <stop offset="0%" stopColor="#7dd3fc" />
        <stop offset="40%" stopColor="#0ea5e9" />
        <stop offset="100%" stopColor="#0369a1" />
      </linearGradient>
    </defs>
    {variant === 'outline' ? (
      <path
        d="M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-6-2-2.1-4-5-4-9-1 4-2 6.9-4 9-2 2.1-3 4-3 6a7 7 0 0 0 7 7z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    ) : (
      <>
        <path
          d="M12 2.5C12 2.5 5 11 5 15.5a7 7 0 0 0 14 0c0-4.5-7-13-7-13z"
          fill="url(#fj-water-grad)"
          stroke="#0284c7"
          strokeWidth="0.75"
        />
        {/* Specular highlight */}
        <path
          d="M12 5.5c-1 2.2-3.5 6-3.5 9.5 0 1.2.4 2.2 1 3-.5-.8-.8-1.8-.8-2.8 0-3 2.5-6.7 3.3-9.7z"
          fill="#ffffff"
          opacity="0.65"
        />
        <circle cx="14" cy="16.5" r="1.5" fill="#bae6fd" opacity="0.6" />
      </>
    )}
  </svg>
);

export const IconDrop = IconWater;
export const IconDroplet = IconWater;

/**
 * IconLeaf - Glossy Organic Nature Leaf
 */
export const IconLeaf: React.FC<IconProps> = ({
  size = 20,
  className = '',
  variant = 'aero',
  ...props
}) => (
  <svg
    {...getDims(size)}
    viewBox="0 0 24 24"
    fill="none"
    className={`fj-icon fj-icon-leaf ${className}`}
    {...props}
  >
    <defs>
      <linearGradient id="fj-leaf-grad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#86efac" />
        <stop offset="40%" stopColor="#22c55e" />
        <stop offset="100%" stopColor="#15803d" />
      </linearGradient>
    </defs>
    {variant === 'outline' ? (
      <>
        <path
          d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"
          stroke="currentColor"
          strokeWidth="2"
        />
      </>
    ) : (
      <>
        <path
          d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"
          fill="url(#fj-leaf-grad)"
          stroke="#16a34a"
          strokeWidth="0.75"
        />
        {/* Vein */}
        <path
          d="M4 20c1-2.5 3-4.8 6-5.8 3-1 6-1.7 8-7.2"
          stroke="#bbf7d0"
          strokeWidth="1.2"
          strokeLinecap="round"
          opacity="0.75"
        />
        {/* Specular dome gloss */}
        <path
          d="M12 7c3-1 5-.8 6.5-3.2-.2 1.8-.7 3.6-2.5 4.8C14.5 9.5 13 8 12 7z"
          fill="#ffffff"
          opacity="0.55"
        />
      </>
    )}
  </svg>
);

/**
 * IconSprout / IconPlant - Organic Green Sprout
 */
export const IconSprout: React.FC<IconProps> = ({
  size = 20,
  className = '',
  variant = 'aero',
  ...props
}) => (
  <svg
    {...getDims(size)}
    viewBox="0 0 24 24"
    fill="none"
    className={`fj-icon fj-icon-sprout ${className}`}
    {...props}
  >
    <defs>
      <linearGradient id="fj-sprout-green" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#4ade80" />
        <stop offset="100%" stopColor="#15803d" />
      </linearGradient>
    </defs>
    {variant === 'outline' ? (
      <>
        <path d="M7 20h10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <path d="M12 20v-8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <path d="M12 12c-3 0-6-2-6-6 4 0 6 2 6 6z" stroke="currentColor" strokeWidth="2" />
        <path d="M12 10c3 0 6-2 6-6-4 0-6 2-6 6z" stroke="currentColor" strokeWidth="2" />
      </>
    ) : (
      <>
        <path d="M5 21h14" stroke="#86efac" strokeWidth="2" strokeLinecap="round" />
        <path d="M12 21v-9" stroke="#16a34a" strokeWidth="2" strokeLinecap="round" />
        {/* Left leaf */}
        <path
          d="M12 13c-3.5 0-7-2.5-7-7 4.5 0 7 2.5 7 7z"
          fill="url(#fj-sprout-green)"
          stroke="#15803d"
          strokeWidth="0.5"
        />
        <path d="M7 8c1.5 0 3 .8 4 2.5" stroke="#bbf7d0" strokeWidth="0.8" opacity="0.8" />
        {/* Right leaf */}
        <path
          d="M12 11c3.5 0 7-2.5 7-7-4.5 0-7 2.5-7 7z"
          fill="url(#fj-sprout-green)"
          stroke="#15803d"
          strokeWidth="0.5"
        />
        <path d="M17 6c-1.5 0-3 .8-4 2.5" stroke="#bbf7d0" strokeWidth="0.8" opacity="0.8" />
      </>
    )}
  </svg>
);

export const IconPlant = IconSprout;

/**
 * IconSun - Glowing Amber Sun with Radiant Beams
 */
export const IconSun: React.FC<IconProps> = ({
  size = 20,
  className = '',
  variant = 'aero',
  ...props
}) => (
  <svg
    {...getDims(size)}
    viewBox="0 0 24 24"
    fill="none"
    className={`fj-icon fj-icon-sun ${className}`}
    {...props}
  >
    <defs>
      <radialGradient id="fj-sun-core" cx="40%" cy="35%" r="65%">
        <stop offset="0%" stopColor="#fef08a" />
        <stop offset="50%" stopColor="#f59e0b" />
        <stop offset="100%" stopColor="#d97706" />
      </radialGradient>
      <linearGradient id="fj-sun-beam" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#fde047" />
        <stop offset="100%" stopColor="#f59e0b" />
      </linearGradient>
    </defs>
    {variant === 'outline' ? (
      <>
        <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="2" />
        <path
          d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </>
    ) : (
      <>
        {/* Rays */}
        <g stroke="url(#fj-sun-beam)" strokeWidth="2" strokeLinecap="round">
          <path d="M12 2v2.5M12 19.5v2.5M4.93 4.93l1.77 1.77M17.3 17.3l1.77 1.77M2 12h2.5M19.5 12h2.5M6.7 17.3l-1.77 1.77M19.07 4.93l-1.77 1.77" />
        </g>
        {/* Core sphere */}
        <circle cx="12" cy="12" r="5" fill="url(#fj-sun-core)" stroke="#b45309" strokeWidth="0.5" />
        {/* Gloss highlight */}
        <ellipse
          cx="10.5"
          cy="9.8"
          rx="2.2"
          ry="1.1"
          fill="#ffffff"
          opacity="0.65"
          transform="rotate(-20 10.5 9.8)"
        />
      </>
    )}
  </svg>
);

/**
 * IconCloud - Glossy Puffy Sky Cloud
 */
export const IconCloud: React.FC<IconProps> = ({
  size = 20,
  className = '',
  variant = 'aero',
  ...props
}) => (
  <svg
    {...getDims(size)}
    viewBox="0 0 24 24"
    fill="none"
    className={`fj-icon fj-icon-cloud ${className}`}
    {...props}
  >
    <defs>
      <linearGradient id="fj-cloud-grad" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#ffffff" />
        <stop offset="55%" stopColor="#e0f2fe" />
        <stop offset="100%" stopColor="#7dd3fc" />
      </linearGradient>
    </defs>
    {variant === 'outline' ? (
      <path
        d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    ) : (
      <>
        <path
          d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"
          fill="url(#fj-cloud-grad)"
          stroke="#38bdf8"
          strokeWidth="0.75"
        />
        {/* Dome shine */}
        <ellipse cx="11" cy="9.5" rx="3.5" ry="1.5" fill="#ffffff" opacity="0.8" />
        <ellipse cx="17" cy="13" rx="2" ry="1" fill="#ffffff" opacity="0.7" />
      </>
    )}
  </svg>
);

/**
 * IconGlobe - Aqua Glass Translucent Earth Sphere
 */
export const IconGlobe: React.FC<IconProps> = ({
  size = 20,
  className = '',
  variant = 'aero',
  ...props
}) => (
  <svg
    {...getDims(size)}
    viewBox="0 0 24 24"
    fill="none"
    className={`fj-icon fj-icon-globe ${className}`}
    {...props}
  >
    <defs>
      <radialGradient id="fj-globe-ocean" cx="40%" cy="35%" r="65%">
        <stop offset="0%" stopColor="#bae6fd" />
        <stop offset="45%" stopColor="#0284c7" />
        <stop offset="100%" stopColor="#082f49" />
      </radialGradient>
    </defs>
    {variant === 'outline' ? (
      <>
        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
        <line x1="2" y1="12" x2="22" y2="12" stroke="currentColor" strokeWidth="2" />
        <path
          d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"
          stroke="currentColor"
          strokeWidth="2"
        />
      </>
    ) : (
      <>
        <circle
          cx="12"
          cy="12"
          r="9.5"
          fill="url(#fj-globe-ocean)"
          stroke="#0369a1"
          strokeWidth="0.75"
        />
        {/* Meridians and parallels in translucent aqua green */}
        <ellipse
          cx="12"
          cy="12"
          rx="5"
          ry="9.2"
          fill="none"
          stroke="#6ee7b7"
          strokeWidth="0.8"
          opacity="0.7"
        />
        <line x1="2.8" y1="12" x2="21.2" y2="12" stroke="#6ee7b7" strokeWidth="0.8" opacity="0.7" />
        <ellipse
          cx="12"
          cy="7.5"
          rx="7.5"
          ry="2.2"
          fill="none"
          stroke="#6ee7b7"
          strokeWidth="0.7"
          opacity="0.5"
        />
        <ellipse
          cx="12"
          cy="16.5"
          rx="7.5"
          ry="2.2"
          fill="none"
          stroke="#6ee7b7"
          strokeWidth="0.7"
          opacity="0.5"
        />
        {/* Specular gloss top */}
        <ellipse
          cx="9.5"
          cy="6.5"
          rx="4.5"
          ry="2"
          fill="#ffffff"
          opacity="0.55"
          transform="rotate(-20 9.5 6.5)"
        />
      </>
    )}
  </svg>
);

/**
 * IconRainbow - Vibrant Pastel Aero Spectral Arc
 */
export const IconRainbow: React.FC<IconProps> = ({
  size = 20,
  className = '',
  variant = 'aero',
  ...props
}) => (
  <svg
    {...getDims(size)}
    viewBox="0 0 24 24"
    fill="none"
    className={`fj-icon fj-icon-rainbow ${className}`}
    {...props}
  >
    {variant === 'outline' ? (
      <>
        <path
          d="M22 17a10 10 0 0 0-20 0"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M18 17a6 6 0 0 0-12 0"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M14 17a2 2 0 0 0-4 0"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </>
    ) : (
      <>
        {/* Red/Orange Arc */}
        <path
          d="M22 18a10 10 0 0 0-20 0"
          stroke="#f87171"
          strokeWidth="2.2"
          strokeLinecap="round"
        />
        {/* Yellow/Green Arc */}
        <path d="M19 18a7 7 0 0 0-14 0" stroke="#facc15" strokeWidth="2.2" strokeLinecap="round" />
        {/* Emerald/Cyan Arc */}
        <path d="M16 18a4 4 0 0 0-8 0" stroke="#4ade80" strokeWidth="2" strokeLinecap="round" />
        {/* Blue Arc */}
        <path
          d="M13.5 18a1.5 1.5 0 0 0-3 0"
          stroke="#38bdf8"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
        {/* Little cloud puffs at roots */}
        <circle cx="3" cy="18" r="2.2" fill="#f0f9ff" stroke="#bae6fd" strokeWidth="0.5" />
        <circle cx="21" cy="18" r="2.2" fill="#f0f9ff" stroke="#bae6fd" strokeWidth="0.5" />
      </>
    )}
  </svg>
);

/**
 * IconFlame - Glossy Fire / Flame
 */
export const IconFlame: React.FC<IconProps> = ({
  size = 20,
  className = '',
  variant = 'aero',
  ...props
}) => (
  <svg
    {...getDims(size)}
    viewBox="0 0 24 24"
    fill="none"
    className={`fj-icon fj-icon-flame ${className}`}
    {...props}
  >
    <defs>
      <linearGradient id="fj-flame-outer" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#f87171" />
        <stop offset="50%" stopColor="#ea580c" />
        <stop offset="100%" stopColor="#b91c1c" />
      </linearGradient>
      <linearGradient id="fj-flame-inner" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#fef08a" />
        <stop offset="100%" stopColor="#f59e0b" />
      </linearGradient>
    </defs>
    {variant === 'outline' ? (
      <path
        d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 3z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    ) : (
      <>
        {/* Outer Flame */}
        <path
          d="M12 2c1 3.5 4.5 6 6 9.5 1.5 3.5.5 7.5-2.5 9.5s-7 1-9-1.5c-1.8-2.3-1.8-5.5.5-8.5.5 1.5 2 2.5 3 2 1.5-.7 1.5-2.5 1-4-.5-1.5-.5-4.5 1-7z"
          fill="url(#fj-flame-outer)"
          stroke="#b91c1c"
          strokeWidth="0.5"
        />
        {/* Inner Flame Core */}
        <path
          d="M12 11c1 2 2.5 3 2 5s-2 3-3.5 3-2.5-1.5-2-3c.5-1.5 2-2.5 3.5-5z"
          fill="url(#fj-flame-inner)"
        />
        {/* Specular Glint */}
        <ellipse
          cx="9"
          cy="14"
          rx="1.5"
          ry="3"
          fill="#ffffff"
          opacity="0.4"
          transform="rotate(-20 9 14)"
        />
      </>
    )}
  </svg>
);

/* ==========================================================================
   HARDWARE, MEDIA & SKEUOMORPHIC TECH
   ========================================================================== */

/**
 * IconAeroOrb - The Quintessential 3D Glossy Vista Orb
 */
export const IconAeroOrb: React.FC<IconProps> = ({
  size = 24,
  className = '',
  variant = 'aero',
  ...props
}) => (
  <svg
    {...getDims(size)}
    viewBox="0 0 24 24"
    fill="none"
    className={`fj-icon fj-icon-aero-orb ${className}`}
    {...props}
  >
    <defs>
      <radialGradient id="fj-orb-sphere" cx="40%" cy="30%" r="70%">
        <stop offset="0%" stopColor="#e0f2fe" />
        <stop offset="25%" stopColor="#38bdf8" />
        <stop offset="70%" stopColor="#0284c7" />
        <stop offset="100%" stopColor="#082f49" />
      </radialGradient>
      <linearGradient id="fj-orb-chrome" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#ffffff" />
        <stop offset="50%" stopColor="#94a3b8" />
        <stop offset="100%" stopColor="#475569" />
      </linearGradient>
    </defs>
    {variant === 'outline' ? (
      <>
        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
        <circle cx="12" cy="12" r="7" stroke="currentColor" strokeWidth="1.5" />
      </>
    ) : (
      <>
        {/* Outer Chrome Rim */}
        <circle
          cx="12"
          cy="12"
          r="10"
          fill="url(#fj-orb-chrome)"
          stroke="#334155"
          strokeWidth="0.5"
        />
        <circle cx="12" cy="12" r="9" fill="#0f172a" />
        {/* Inner Aqua Sphere */}
        <circle cx="12" cy="12" r="8" fill="url(#fj-orb-sphere)" />
        {/* Top Specular Crescent Dome */}
        <path
          d="M6 10C7.2 6.5 10 5 14 5.5c-3-.5-6 .8-7.2 3.5-.4.8-.8 1-0.8 1z"
          fill="#ffffff"
          opacity="0.9"
        />
        <ellipse cx="12" cy="7.5" rx="4.5" ry="2" fill="#ffffff" opacity="0.75" />
        {/* Bottom Caustic Reflection */}
        <ellipse cx="12" cy="16.5" rx="4" ry="1.2" fill="#7dd3fc" opacity="0.6" />
      </>
    )}
  </svg>
);

/**
 * IconDisc / IconCd - Skeuomorphic Holographic CD/DVD
 */
export const IconDisc: React.FC<IconProps> = ({
  size = 20,
  className = '',
  variant = 'aero',
  ...props
}) => (
  <svg
    {...getDims(size)}
    viewBox="0 0 24 24"
    fill="none"
    className={`fj-icon fj-icon-disc ${className}`}
    {...props}
  >
    <defs>
      <linearGradient id="fj-cd-sheen" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#fbcfe8" />
        <stop offset="25%" stopColor="#bae6fd" />
        <stop offset="50%" stopColor="#bbf7d0" />
        <stop offset="75%" stopColor="#fef08a" />
        <stop offset="100%" stopColor="#fed7aa" />
      </linearGradient>
    </defs>
    {variant === 'outline' ? (
      <>
        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
        <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2" />
      </>
    ) : (
      <>
        {/* Base CD Platter */}
        <circle
          cx="12"
          cy="12"
          r="9.5"
          fill="url(#fj-cd-sheen)"
          stroke="#cbd5e1"
          strokeWidth="0.75"
        />
        {/* Concentric Sheen Rings */}
        <circle
          cx="12"
          cy="12"
          r="7.5"
          fill="none"
          stroke="#ffffff"
          strokeWidth="0.6"
          opacity="0.6"
        />
        <circle
          cx="12"
          cy="12"
          r="5.5"
          fill="none"
          stroke="#ffffff"
          strokeWidth="0.4"
          opacity="0.4"
        />
        {/* Holographic Refraction Wedges */}
        <path d="M12 12L7 3.5A10 10 0 0 1 17 3.5L12 12z" fill="#ffffff" opacity="0.35" />
        <path d="M12 12L17 20.5A10 10 0 0 1 7 20.5L12 12z" fill="#ffffff" opacity="0.35" />
        {/* Clear Inner Spindle */}
        <circle cx="12" cy="12" r="3.2" fill="#f8fafc" stroke="#94a3b8" strokeWidth="0.75" />
        <circle cx="12" cy="12" r="1.5" fill="#0f172a" />
      </>
    )}
  </svg>
);

export const IconCd = IconDisc;

/**
 * IconMonitor - Glossy LCD/CRT Desktop Screen
 */
export const IconMonitor: React.FC<IconProps> = ({
  size = 20,
  className = '',
  variant = 'aero',
  ...props
}) => (
  <svg
    {...getDims(size)}
    viewBox="0 0 24 24"
    fill="none"
    className={`fj-icon fj-icon-monitor ${className}`}
    {...props}
  >
    <defs>
      <linearGradient id="fj-screen-grad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#0284c7" />
        <stop offset="50%" stopColor="#38bdf8" />
        <stop offset="100%" stopColor="#4ade80" />
      </linearGradient>
    </defs>
    {variant === 'outline' ? (
      <>
        <rect x="2" y="3" width="20" height="14" rx="2" stroke="currentColor" strokeWidth="2" />
        <line
          x1="8"
          y1="21"
          x2="16"
          y2="21"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <line x1="12" y1="17" x2="12" y2="21" stroke="currentColor" strokeWidth="2" />
      </>
    ) : (
      <>
        {/* Bezel */}
        <rect
          x="2"
          y="3"
          width="20"
          height="13"
          rx="2"
          fill="#334155"
          stroke="#64748b"
          strokeWidth="0.75"
        />
        {/* Screen with Vista Aurora */}
        <rect x="3.5" y="4.5" width="17" height="10" rx="1" fill="url(#fj-screen-grad)" />
        {/* Glass reflection */}
        <polygon points="3.5,4.5 20.5,4.5 12,14.5 3.5,14.5" fill="#ffffff" opacity="0.3" />
        {/* Stand */}
        <path d="M10 16h4v3h-4z" fill="#64748b" />
        <ellipse
          cx="12"
          cy="20"
          rx="5"
          ry="1.5"
          fill="#94a3b8"
          stroke="#64748b"
          strokeWidth="0.5"
        />
      </>
    )}
  </svg>
);

export const IconDisplay = IconMonitor;

/**
 * IconCamera - Skeuomorphic Camera with Glass Lens
 */
export const IconCamera: React.FC<IconProps> = ({
  size = 20,
  className = '',
  variant = 'aero',
  ...props
}) => (
  <svg
    {...getDims(size)}
    viewBox="0 0 24 24"
    fill="none"
    className={`fj-icon fj-icon-camera ${className}`}
    {...props}
  >
    <defs>
      <radialGradient id="fj-lens-grad" cx="35%" cy="35%" r="65%">
        <stop offset="0%" stopColor="#38bdf8" />
        <stop offset="40%" stopColor="#0284c7" />
        <stop offset="85%" stopColor="#0f172a" />
      </radialGradient>
      <linearGradient id="fj-camera-body" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#e2e8f0" />
        <stop offset="50%" stopColor="#cbd5e1" />
        <stop offset="100%" stopColor="#94a3b8" />
      </linearGradient>
    </defs>
    {variant === 'outline' ? (
      <>
        <path
          d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="12" cy="13" r="4" stroke="currentColor" strokeWidth="2" />
      </>
    ) : (
      <>
        {/* Camera Body */}
        <path
          d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h3.5l1.5-2.5h6L16.5 6H20a2 2 0 0 1 2 2v11z"
          fill="url(#fj-camera-body)"
          stroke="#64748b"
          strokeWidth="0.75"
        />
        {/* Red Flash/LED */}
        <circle cx="19" cy="9" r="1" fill="#ef4444" />
        {/* Outer Lens Rim */}
        <circle cx="12" cy="13.5" r="5" fill="#1e293b" stroke="#cbd5e1" strokeWidth="0.75" />
        {/* Lens Glass */}
        <circle cx="12" cy="13.5" r="4" fill="url(#fj-lens-grad)" />
        {/* Lens Specular Reflection */}
        <ellipse
          cx="10.5"
          cy="12"
          rx="1.5"
          ry="0.8"
          fill="#ffffff"
          opacity="0.8"
          transform="rotate(-30 10.5 12)"
        />
      </>
    )}
  </svg>
);

/**
 * IconSpeaker / IconVolume - Tactile Speaker Cone
 */
export const IconSpeaker: React.FC<IconProps> = ({
  size = 20,
  className = '',
  variant = 'aero',
  ...props
}) => (
  <svg
    {...getDims(size)}
    viewBox="0 0 24 24"
    fill="none"
    className={`fj-icon fj-icon-speaker ${className}`}
    {...props}
  >
    <defs>
      <linearGradient id="fj-speaker-grad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#38bdf8" />
        <stop offset="100%" stopColor="#0369a1" />
      </linearGradient>
    </defs>
    {variant === 'outline' ? (
      <>
        <polygon
          points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M15.54 8.46a5 5 0 0 1 0 7.07"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M19.07 4.93a10 10 0 0 1 0 14.14"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </>
    ) : (
      <>
        <polygon
          points="11 4 6 8.5 2 8.5 2 15.5 6 15.5 11 20 11 4"
          fill="url(#fj-speaker-grad)"
          stroke="#0284c7"
          strokeWidth="0.75"
        />
        {/* Gloss highlight on speaker cone */}
        <polygon points="10 5 6 8.5 3 8.5 6 11 10 6" fill="#ffffff" opacity="0.4" />
        {/* Sound waves */}
        <path d="M15 9a4.5 4.5 0 0 1 0 6" stroke="#38bdf8" strokeWidth="2" strokeLinecap="round" />
        <path
          d="M18.5 6a8.5 8.5 0 0 1 0 12"
          stroke="#0ea5e9"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </>
    )}
  </svg>
);

export const IconVolume = IconSpeaker;

/**
 * IconBattery - Glossy Green Charged Energy Cell
 */
export const IconBattery: React.FC<IconProps> = ({
  size = 20,
  className = '',
  variant = 'aero',
  ...props
}) => (
  <svg
    {...getDims(size)}
    viewBox="0 0 24 24"
    fill="none"
    className={`fj-icon fj-icon-battery ${className}`}
    {...props}
  >
    <defs>
      <linearGradient id="fj-battery-charge" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#86efac" />
        <stop offset="50%" stopColor="#22c55e" />
        <stop offset="100%" stopColor="#15803d" />
      </linearGradient>
    </defs>
    {variant === 'outline' ? (
      <>
        <rect x="1" y="6" width="18" height="12" rx="2" stroke="currentColor" strokeWidth="2" />
        <line
          x1="23"
          y1="11"
          x2="23"
          y2="13"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </>
    ) : (
      <>
        <rect
          x="1.5"
          y="6"
          width="17"
          height="12"
          rx="2.5"
          fill="#1e293b"
          stroke="#64748b"
          strokeWidth="0.75"
        />
        <path d="M20.5 10v4" stroke="#64748b" strokeWidth="2" strokeLinecap="round" />
        {/* Charge Bars */}
        <rect x="3.5" y="8" width="3.5" height="8" rx="1" fill="url(#fj-battery-charge)" />
        <rect x="8" y="8" width="3.5" height="8" rx="1" fill="url(#fj-battery-charge)" />
        <rect x="12.5" y="8" width="3.5" height="8" rx="1" fill="url(#fj-battery-charge)" />
        {/* Glass reflection */}
        <path d="M2.5 7h15v3.5l-15 3z" fill="#ffffff" opacity="0.25" />
      </>
    )}
  </svg>
);

/**
 * IconWifi - Concentric Aqua Broadcast Waves
 */
export const IconWifi: React.FC<IconProps> = ({
  size = 20,
  className = '',
  variant = 'aero',
  ...props
}) => (
  <svg
    {...getDims(size)}
    viewBox="0 0 24 24"
    fill="none"
    className={`fj-icon fj-icon-wifi ${className}`}
    {...props}
  >
    {variant === 'outline' ? (
      <>
        <path
          d="M5 12.55a11 11 0 0 1 14.08 0"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M1.42 9a16 16 0 0 1 21.16 0"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M8.53 16.11a6 6 0 0 1 6.95 0"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <line
          x1="12"
          y1="20"
          x2="12.01"
          y2="20"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
      </>
    ) : (
      <>
        <path
          d="M1.5 8.5a16 16 0 0 1 21 0"
          stroke="#0ea5e9"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
        <path d="M5 12a11 11 0 0 1 14 0" stroke="#38bdf8" strokeWidth="2.5" strokeLinecap="round" />
        <path
          d="M8.5 15.5a6 6 0 0 1 7 0"
          stroke="#7dd3fc"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
        <circle cx="12" cy="19.5" r="1.5" fill="#38bdf8" stroke="#0284c7" strokeWidth="0.5" />
      </>
    )}
  </svg>
);

/**
 * IconShield - Tactile Security Shield with Chrome Bevel
 */
export const IconShield: React.FC<IconProps> = ({
  size = 20,
  className = '',
  variant = 'aero',
  ...props
}) => (
  <svg
    {...getDims(size)}
    viewBox="0 0 24 24"
    fill="none"
    className={`fj-icon fj-icon-shield ${className}`}
    {...props}
  >
    <defs>
      <linearGradient id="fj-shield-grad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#38bdf8" />
        <stop offset="50%" stopColor="#0284c7" />
        <stop offset="100%" stopColor="#0369a1" />
      </linearGradient>
    </defs>
    {variant === 'outline' ? (
      <path
        d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    ) : (
      <>
        <path
          d="M12 21.5s7.5-3.8 7.5-9.5V5.5L12 2.5 4.5 5.5V12c0 5.7 7.5 9.5 7.5 9.5z"
          fill="url(#fj-shield-grad)"
          stroke="#0369a1"
          strokeWidth="0.75"
        />
        {/* Specular split reflection */}
        <path d="M12 3.2L5.5 5.8V12c0 4.8 5.5 8.2 6.5 8.9V3.2z" fill="#ffffff" opacity="0.35" />
        <path
          d="M9 11.5l2 2 4-4"
          stroke="#ffffff"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </>
    )}
  </svg>
);

/**
 * IconLock - Glossy Padlock
 */
export const IconLock: React.FC<IconProps> = ({
  size = 20,
  className = '',
  variant = 'aero',
  ...props
}) => (
  <svg
    {...getDims(size)}
    viewBox="0 0 24 24"
    fill="none"
    className={`fj-icon fj-icon-lock ${className}`}
    {...props}
  >
    <defs>
      <linearGradient id="fj-lock-body" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#fef08a" />
        <stop offset="50%" stopColor="#f59e0b" />
        <stop offset="100%" stopColor="#b45309" />
      </linearGradient>
    </defs>
    {variant === 'outline' ? (
      <>
        <rect x="3" y="11" width="18" height="11" rx="2" stroke="currentColor" strokeWidth="2" />
        <path d="M7 11V7a5 5 0 0 1 10 0v4" stroke="currentColor" strokeWidth="2" />
      </>
    ) : (
      <>
        {/* Shackle */}
        <path
          d="M7 11V7a5 5 0 0 1 10 0v4"
          stroke="#94a3b8"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
        {/* Body */}
        <rect
          x="3.5"
          y="10.5"
          width="17"
          height="11"
          rx="2.5"
          fill="url(#fj-lock-body)"
          stroke="#d97706"
          strokeWidth="0.75"
        />
        {/* Keyhole */}
        <circle cx="12" cy="15" r="1.5" fill="#451a03" />
        <path d="M12 15.5v2.5" stroke="#451a03" strokeWidth="1.2" strokeLinecap="round" />
        {/* Gloss */}
        <ellipse cx="12" cy="12.5" rx="5" ry="1.2" fill="#ffffff" opacity="0.6" />
      </>
    )}
  </svg>
);

/**
 * IconUnlock - Unlocked Padlock
 */
export const IconUnlock: React.FC<IconProps> = ({
  size = 20,
  className = '',
  variant = 'aero',
  ...props
}) => (
  <svg
    {...getDims(size)}
    viewBox="0 0 24 24"
    fill="none"
    className={`fj-icon fj-icon-unlock ${className}`}
    {...props}
  >
    <defs>
      <linearGradient id="fj-unlock-body" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#fef08a" />
        <stop offset="50%" stopColor="#f59e0b" />
        <stop offset="100%" stopColor="#b45309" />
      </linearGradient>
    </defs>
    {variant === 'outline' ? (
      <>
        <rect x="3" y="11" width="18" height="11" rx="2" stroke="currentColor" strokeWidth="2" />
        <path
          d="M7 11V7a5 5 0 0 1 9.9-1"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </>
    ) : (
      <>
        <path
          d="M7 11V7a5 5 0 0 1 9.5-2"
          stroke="#94a3b8"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
        <rect
          x="3.5"
          y="10.5"
          width="17"
          height="11"
          rx="2.5"
          fill="url(#fj-unlock-body)"
          stroke="#d97706"
          strokeWidth="0.75"
        />
        <circle cx="12" cy="15" r="1.5" fill="#451a03" />
        <path d="M12 15.5v2.5" stroke="#451a03" strokeWidth="1.2" strokeLinecap="round" />
        <ellipse cx="12" cy="12.5" rx="5" ry="1.2" fill="#ffffff" opacity="0.6" />
      </>
    )}
  </svg>
);

/**
 * IconCompass - Glossy Marine Compass
 */
export const IconCompass: React.FC<IconProps> = ({
  size = 20,
  className = '',
  variant = 'aero',
  ...props
}) => (
  <svg
    {...getDims(size)}
    viewBox="0 0 24 24"
    fill="none"
    className={`fj-icon fj-icon-compass ${className}`}
    {...props}
  >
    <defs>
      <radialGradient id="fj-compass-dial" cx="40%" cy="40%" r="60%">
        <stop offset="0%" stopColor="#f8fafc" />
        <stop offset="80%" stopColor="#cbd5e1" />
        <stop offset="100%" stopColor="#94a3b8" />
      </radialGradient>
    </defs>
    {variant === 'outline' ? (
      <>
        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
        <polygon
          points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinejoin="round"
        />
      </>
    ) : (
      <>
        <circle
          cx="12"
          cy="12"
          r="9.5"
          fill="url(#fj-compass-dial)"
          stroke="#475569"
          strokeWidth="0.75"
        />
        {/* Needle North (Red) & South (Blue) */}
        <polygon points="16 8 12.5 12 15.5 15.5 12 12.5" fill="#ef4444" />
        <polygon points="8 16 11.5 12 8.5 8.5 12 11.5" fill="#0284c7" />
        <circle cx="12" cy="12" r="1.5" fill="#ffffff" stroke="#475569" strokeWidth="0.5" />
        {/* Glass Dome */}
        <ellipse cx="12" cy="7.5" rx="5.5" ry="2" fill="#ffffff" opacity="0.6" />
      </>
    )}
  </svg>
);

/**
 * IconSettings / IconGear - 3D Chrome Mechanical Gear
 */
export const IconSettings: React.FC<IconProps> = ({
  size = 20,
  className = '',
  variant = 'aero',
  ...props
}) => (
  <svg
    {...getDims(size)}
    viewBox="0 0 24 24"
    fill="none"
    className={`fj-icon fj-icon-settings ${className}`}
    {...props}
  >
    <defs>
      <linearGradient id="fj-gear-metal" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#e2e8f0" />
        <stop offset="50%" stopColor="#94a3b8" />
        <stop offset="100%" stopColor="#475569" />
      </linearGradient>
    </defs>
    {variant === 'outline' ? (
      <>
        <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2" />
        <path
          d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"
          stroke="currentColor"
          strokeWidth="2"
        />
      </>
    ) : (
      <>
        <path
          d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"
          fill="url(#fj-gear-metal)"
          stroke="#334155"
          strokeWidth="0.75"
        />
        <circle cx="12" cy="12" r="3.2" fill="#0f172a" stroke="#cbd5e1" strokeWidth="0.5" />
        <ellipse cx="12" cy="10" rx="1.5" ry="0.6" fill="#ffffff" opacity="0.6" />
      </>
    )}
  </svg>
);

export const IconGear = IconSettings;

/**
 * IconFolder - Glossy Aqua/Amber Folder
 */
export const IconFolder: React.FC<IconProps> = ({
  size = 20,
  className = '',
  variant = 'aero',
  ...props
}) => (
  <svg
    {...getDims(size)}
    viewBox="0 0 24 24"
    fill="none"
    className={`fj-icon fj-icon-folder ${className}`}
    {...props}
  >
    <defs>
      <linearGradient id="fj-folder-front" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#7dd3fc" />
        <stop offset="60%" stopColor="#0ea5e9" />
        <stop offset="100%" stopColor="#0284c7" />
      </linearGradient>
      <linearGradient id="fj-folder-back" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#0369a1" />
        <stop offset="100%" stopColor="#075985" />
      </linearGradient>
    </defs>
    {variant === 'outline' ? (
      <path
        d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    ) : (
      <>
        {/* Back folder tab */}
        <path
          d="M21 17a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h4.5l2 2H19a2 2 0 0 1 2 2v9z"
          fill="url(#fj-folder-back)"
        />
        {/* Front flap */}
        <path
          d="M2 10a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V10z"
          fill="url(#fj-folder-front)"
          stroke="#0284c7"
          strokeWidth="0.75"
        />
        {/* Gloss highlight */}
        <path d="M2.5 10.5h19v3.5l-19 2z" fill="#ffffff" opacity="0.35" />
      </>
    )}
  </svg>
);

/**
 * IconTrash - Translucent Glass Waste/Recycle Bin
 */
export const IconTrash: React.FC<IconProps> = ({
  size = 20,
  className = '',
  variant = 'aero',
  ...props
}) => (
  <svg
    {...getDims(size)}
    viewBox="0 0 24 24"
    fill="none"
    className={`fj-icon fj-icon-trash ${className}`}
    {...props}
  >
    <defs>
      <linearGradient id="fj-trash-glass" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#bae6fd" stopOpacity="0.8" />
        <stop offset="100%" stopColor="#0284c7" stopOpacity="0.85" />
      </linearGradient>
    </defs>
    {variant === 'outline' ? (
      <>
        <polyline
          points="3 6 5 6 21 6"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </>
    ) : (
      <>
        {/* Lid */}
        <rect
          x="2.5"
          y="5"
          width="19"
          height="2"
          rx="1"
          fill="#64748b"
          stroke="#334155"
          strokeWidth="0.5"
        />
        <path
          d="M9 5V3.5a1.5 1.5 0 0 1 1.5-1.5h3A1.5 1.5 0 0 1 15 3.5V5"
          stroke="#64748b"
          strokeWidth="1.5"
        />
        {/* Glass Bin Body */}
        <path
          d="M5.5 7l1.2 13.2c.1.9.9 1.6 1.8 1.6h7c.9 0 1.7-.7 1.8-1.6L18.5 7H5.5z"
          fill="url(#fj-trash-glass)"
          stroke="#0369a1"
          strokeWidth="0.75"
        />
        {/* Glass ribs */}
        <line
          x1="9.5"
          y1="9"
          x2="10"
          y2="19"
          stroke="#ffffff"
          strokeWidth="1"
          strokeLinecap="round"
          opacity="0.6"
        />
        <line
          x1="14.5"
          y1="9"
          x2="14"
          y2="19"
          stroke="#ffffff"
          strokeWidth="1"
          strokeLinecap="round"
          opacity="0.6"
        />
      </>
    )}
  </svg>
);

/* ==========================================================================
   MEDIA & PLAYBACK
   ========================================================================== */

/**
 * IconMusic - Double Eighth Notes with Gloss
 */
export const IconMusic: React.FC<IconProps> = ({
  size = 20,
  className = '',
  variant = 'aero',
  ...props
}) => (
  <svg
    {...getDims(size)}
    viewBox="0 0 24 24"
    fill="none"
    className={`fj-icon fj-icon-music ${className}`}
    {...props}
  >
    <defs>
      <linearGradient id="fj-music-grad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#38bdf8" />
        <stop offset="100%" stopColor="#0284c7" />
      </linearGradient>
    </defs>
    {variant === 'outline' ? (
      <>
        <path
          d="M9 18V5l12-2v13"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="6" cy="18" r="3" stroke="currentColor" strokeWidth="2" />
        <circle cx="18" cy="16" r="3" stroke="currentColor" strokeWidth="2" />
      </>
    ) : (
      <>
        <path
          d="M9 18V4l12-2v14"
          stroke="url(#fj-music-grad)"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle
          cx="6"
          cy="18"
          r="3.2"
          fill="url(#fj-music-grad)"
          stroke="#0284c7"
          strokeWidth="0.5"
        />
        <circle
          cx="18"
          cy="16"
          r="3.2"
          fill="url(#fj-music-grad)"
          stroke="#0284c7"
          strokeWidth="0.5"
        />
        <ellipse
          cx="5"
          cy="17.2"
          rx="1.5"
          ry="0.8"
          fill="#ffffff"
          opacity="0.6"
          transform="rotate(-30 5 17.2)"
        />
        <ellipse
          cx="17"
          cy="15.2"
          rx="1.5"
          ry="0.8"
          fill="#ffffff"
          opacity="0.6"
          transform="rotate(-30 17 15.2)"
        />
      </>
    )}
  </svg>
);

/**
 * IconPlay - Glossy Emerald/Cyan Play Wedge
 */
export const IconPlay: React.FC<IconProps> = ({
  size = 20,
  className = '',
  variant = 'aero',
  ...props
}) => (
  <svg
    {...getDims(size)}
    viewBox="0 0 24 24"
    fill="none"
    className={`fj-icon fj-icon-play ${className}`}
    {...props}
  >
    <defs>
      <linearGradient id="fj-play-grad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#86efac" />
        <stop offset="50%" stopColor="#22c55e" />
        <stop offset="100%" stopColor="#15803d" />
      </linearGradient>
    </defs>
    {variant === 'outline' ? (
      <polygon
        points="5 3 19 12 5 21 5 3"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
    ) : (
      <>
        <polygon
          points="6 4 19 12 6 20 6 4"
          fill="url(#fj-play-grad)"
          stroke="#15803d"
          strokeWidth="0.75"
        />
        {/* Specular split */}
        <polygon points="6 4 19 12 12 12 6 8" fill="#ffffff" opacity="0.4" />
      </>
    )}
  </svg>
);

/**
 * IconPause - Glossy Pause Bars
 */
export const IconPause: React.FC<IconProps> = ({
  size = 20,
  className = '',
  variant = 'aero',
  ...props
}) => (
  <svg
    {...getDims(size)}
    viewBox="0 0 24 24"
    fill="none"
    className={`fj-icon fj-icon-pause ${className}`}
    {...props}
  >
    <defs>
      <linearGradient id="fj-pause-grad" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#7dd3fc" />
        <stop offset="100%" stopColor="#0284c7" />
      </linearGradient>
    </defs>
    {variant === 'outline' ? (
      <>
        <rect x="6" y="4" width="4" height="16" stroke="currentColor" strokeWidth="2" />
        <rect x="14" y="4" width="4" height="16" stroke="currentColor" strokeWidth="2" />
      </>
    ) : (
      <>
        <rect
          x="6"
          y="4"
          width="4"
          height="16"
          rx="1.5"
          fill="url(#fj-pause-grad)"
          stroke="#0369a1"
          strokeWidth="0.5"
        />
        <rect
          x="14"
          y="4"
          width="4"
          height="16"
          rx="1.5"
          fill="url(#fj-pause-grad)"
          stroke="#0369a1"
          strokeWidth="0.5"
        />
        <ellipse cx="8" cy="7" rx="1.2" ry="2" fill="#ffffff" opacity="0.6" />
        <ellipse cx="16" cy="7" rx="1.2" ry="2" fill="#ffffff" opacity="0.6" />
      </>
    )}
  </svg>
);

/* ==========================================================================
   COMMUNICATION, USER & INTERACTIVE ICONS
   ========================================================================== */

/**
 * IconUser - Glossy Avatar Silhouette
 */
export const IconUser: React.FC<IconProps> = ({
  size = 20,
  className = '',
  variant = 'aero',
  ...props
}) => (
  <svg
    {...getDims(size)}
    viewBox="0 0 24 24"
    fill="none"
    className={`fj-icon fj-icon-user ${className}`}
    {...props}
  >
    <defs>
      <linearGradient id="fj-user-grad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#38bdf8" />
        <stop offset="100%" stopColor="#0369a1" />
      </linearGradient>
    </defs>
    {variant === 'outline' ? (
      <>
        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" stroke="currentColor" strokeWidth="2" />
        <circle cx="12" cy="7" r="4" stroke="currentColor" strokeWidth="2" />
      </>
    ) : (
      <>
        {/* Head */}
        <circle cx="12" cy="7" r="4" fill="url(#fj-user-grad)" stroke="#0284c7" strokeWidth="0.5" />
        <ellipse cx="10.5" cy="5.5" rx="1.8" ry="0.9" fill="#ffffff" opacity="0.65" />
        {/* Shoulders */}
        <path
          d="M4 21v-1.5c0-3 2.5-5.5 6-5.5h4c3.5 0 6 2.5 6 5.5V21H4z"
          fill="url(#fj-user-grad)"
          stroke="#0284c7"
          strokeWidth="0.5"
        />
        <path
          d="M6 19.5c1-2.5 3-4 6-4s5 1.5 6 4"
          stroke="#ffffff"
          strokeWidth="0.8"
          opacity="0.4"
        />
      </>
    )}
  </svg>
);

/**
 * IconUsers - Multi-Avatar Group
 */
export const IconUsers: React.FC<IconProps> = ({
  size = 20,
  className = '',
  variant = 'aero',
  ...props
}) => (
  <svg
    {...getDims(size)}
    viewBox="0 0 24 24"
    fill="none"
    className={`fj-icon fj-icon-users ${className}`}
    {...props}
  >
    {variant === 'outline' ? (
      <>
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" stroke="currentColor" strokeWidth="2" />
        <circle cx="9" cy="7" r="4" stroke="currentColor" strokeWidth="2" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" stroke="currentColor" strokeWidth="2" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" stroke="currentColor" strokeWidth="2" />
      </>
    ) : (
      <>
        {/* Background User */}
        <circle cx="16.5" cy="7" r="3.2" fill="#7dd3fc" />
        <path d="M15 14c2.5 0 4.5 1.8 4.5 4.5V21h-4v-2.5c0-1.2-.5-2.2-1.5-2.8z" fill="#7dd3fc" />
        {/* Foreground User */}
        <circle cx="8.5" cy="7" r="3.5" fill="#0284c7" />
        <ellipse cx="7.2" cy="5.8" rx="1.5" ry="0.8" fill="#ffffff" opacity="0.6" />
        <path d="M2 21v-1.5c0-2.8 2.2-5 5-5h3c2.8 0 5 2.2 5 5V21H2z" fill="#0284c7" />
      </>
    )}
  </svg>
);

/**
 * IconMail - Glossy Postal Envelope
 */
export const IconMail: React.FC<IconProps> = ({
  size = 20,
  className = '',
  variant = 'aero',
  ...props
}) => (
  <svg
    {...getDims(size)}
    viewBox="0 0 24 24"
    fill="none"
    className={`fj-icon fj-icon-mail ${className}`}
    {...props}
  >
    <defs>
      <linearGradient id="fj-mail-grad" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#ffffff" />
        <stop offset="100%" stopColor="#e2e8f0" />
      </linearGradient>
    </defs>
    {variant === 'outline' ? (
      <>
        <path
          d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"
          stroke="currentColor"
          strokeWidth="2"
        />
        <polyline points="22,6 12,13 2,6" stroke="currentColor" strokeWidth="2" />
      </>
    ) : (
      <>
        <rect
          x="2.5"
          y="4.5"
          width="19"
          height="15"
          rx="2"
          fill="url(#fj-mail-grad)"
          stroke="#94a3b8"
          strokeWidth="0.75"
        />
        {/* Envelope fold with blue aero crease */}
        <path d="M3 5l9 7.5L21 5" stroke="#0284c7" strokeWidth="1.5" fill="none" />
        {/* Specular gloss */}
        <path d="M3 5.5l9 7 9-7H3z" fill="#38bdf8" opacity="0.15" />
      </>
    )}
  </svg>
);

/**
 * IconHeart - Glossy Ruby 3D Heart
 */
export const IconHeart: React.FC<IconProps> = ({
  size = 20,
  className = '',
  variant = 'aero',
  ...props
}) => (
  <svg
    {...getDims(size)}
    viewBox="0 0 24 24"
    fill="none"
    className={`fj-icon fj-icon-heart ${className}`}
    {...props}
  >
    <defs>
      <radialGradient id="fj-heart-ruby" cx="35%" cy="30%" r="70%">
        <stop offset="0%" stopColor="#fda4af" />
        <stop offset="35%" stopColor="#f43f5e" />
        <stop offset="80%" stopColor="#be123c" />
        <stop offset="100%" stopColor="#881337" />
      </radialGradient>
    </defs>
    {variant === 'outline' ? (
      <path
        d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    ) : (
      <>
        <path
          d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"
          fill="url(#fj-heart-ruby)"
          stroke="#be123c"
          strokeWidth="0.75"
        />
        {/* Specular gloss crest */}
        <ellipse
          cx="8"
          cy="7.5"
          rx="3"
          ry="1.5"
          fill="#ffffff"
          opacity="0.65"
          transform="rotate(-30 8 7.5)"
        />
      </>
    )}
  </svg>
);

/**
 * IconStar - Glossy 3D Gold Star
 */
export const IconStar: React.FC<IconProps> = ({
  size = 20,
  className = '',
  variant = 'aero',
  ...props
}) => (
  <svg
    {...getDims(size)}
    viewBox="0 0 24 24"
    fill="none"
    className={`fj-icon fj-icon-star ${className}`}
    {...props}
  >
    <defs>
      <linearGradient id="fj-star-gold" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#fef08a" />
        <stop offset="50%" stopColor="#facc15" />
        <stop offset="100%" stopColor="#d97706" />
      </linearGradient>
    </defs>
    {variant === 'outline' ? (
      <polygon
        points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    ) : (
      <>
        <polygon
          points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"
          fill="url(#fj-star-gold)"
          stroke="#b45309"
          strokeWidth="0.75"
        />
        {/* Facet bevel */}
        <polygon points="12 2 15.09 8.26 12 17.77 12 2" fill="#ffffff" opacity="0.35" />
      </>
    )}
  </svg>
);

/**
 * IconSparkles - Multi-Point Starburst Sparkles
 */
export const IconSparkles: React.FC<IconProps> = ({
  size = 20,
  className = '',
  variant = 'aero',
  ...props
}) => (
  <svg
    {...getDims(size)}
    viewBox="0 0 24 24"
    fill="none"
    className={`fj-icon fj-icon-sparkles ${className}`}
    {...props}
  >
    <defs>
      <linearGradient id="fj-sparkle-grad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#ffffff" />
        <stop offset="40%" stopColor="#7dd3fc" />
        <stop offset="100%" stopColor="#0284c7" />
      </linearGradient>
    </defs>
    {variant === 'outline' ? (
      <path
        d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    ) : (
      <>
        <path
          d="m12 2-2 6a2 2 0 0 1-1.3 1.3L2 12l6.7 2.7a2 2 0 0 1 1.3 1.3l2 6 2-6a2 2 0 0 1 1.3-1.3l6.7-2.7-6.7-2.7a2 2 0 0 1-1.3-1.3L12 2z"
          fill="url(#fj-sparkle-grad)"
          stroke="#38bdf8"
          strokeWidth="0.5"
        />
        {/* Core glint */}
        <circle cx="12" cy="12" r="1.5" fill="#ffffff" />
        {/* Tiny starlet */}
        <circle cx="19" cy="5" r="1" fill="#7dd3fc" />
      </>
    )}
  </svg>
);

/**
 * IconSearch - Magnifying Glass with Glass Lens
 */
export const IconSearch: React.FC<IconProps> = ({
  size = 20,
  className = '',
  variant = 'aero',
  ...props
}) => (
  <svg
    {...getDims(size)}
    viewBox="0 0 24 24"
    fill="none"
    className={`fj-icon fj-icon-search ${className}`}
    {...props}
  >
    <defs>
      <radialGradient id="fj-search-glass" cx="35%" cy="35%" r="65%">
        <stop offset="0%" stopColor="#ffffff" stopOpacity="0.8" />
        <stop offset="60%" stopColor="#bae6fd" stopOpacity="0.4" />
        <stop offset="100%" stopColor="#0284c7" stopOpacity="0.7" />
      </radialGradient>
    </defs>
    {variant === 'outline' ? (
      <>
        <circle cx="11" cy="11" r="8" stroke="currentColor" strokeWidth="2" />
        <line
          x1="21"
          y1="21"
          x2="16.65"
          y2="16.65"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </>
    ) : (
      <>
        <circle
          cx="10.5"
          cy="10.5"
          r="7.5"
          fill="url(#fj-search-glass)"
          stroke="#0284c7"
          strokeWidth="1.5"
        />
        <ellipse
          cx="8.5"
          cy="7.5"
          rx="2.5"
          ry="1"
          fill="#ffffff"
          opacity="0.8"
          transform="rotate(-30 8.5 7.5)"
        />
        <line
          x1="21"
          y1="21"
          x2="15.8"
          y2="15.8"
          stroke="#475569"
          strokeWidth="3"
          strokeLinecap="round"
        />
        <line
          x1="21"
          y1="21"
          x2="16.5"
          y2="16.5"
          stroke="#94a3b8"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </>
    )}
  </svg>
);

/**
 * IconCheck - Confirmation Checkmark
 */
export const IconCheck: React.FC<IconProps> = ({
  size = 20,
  className = '',
  variant = 'aero',
  ...props
}) => (
  <svg
    {...getDims(size)}
    viewBox="0 0 24 24"
    fill="none"
    className={`fj-icon fj-icon-check ${className}`}
    {...props}
  >
    {variant === 'outline' ? (
      <polyline
        points="20 6 9 17 4 12"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    ) : (
      <>
        <polyline
          points="20 6 9 17 4 12"
          stroke="#22c55e"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <polyline
          points="20 6 9 17 4 12"
          stroke="#bbf7d0"
          strokeWidth="1.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </>
    )}
  </svg>
);

/**
 * IconClose - Cancellation X
 */
export const IconClose: React.FC<IconProps> = ({
  size = 20,
  className = '',
  variant = 'aero',
  ...props
}) => (
  <svg
    {...getDims(size)}
    viewBox="0 0 24 24"
    fill="none"
    className={`fj-icon fj-icon-close ${className}`}
    {...props}
  >
    {variant === 'outline' ? (
      <>
        <line
          x1="18"
          y1="6"
          x2="6"
          y2="18"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
        <line
          x1="6"
          y1="6"
          x2="18"
          y2="18"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
      </>
    ) : (
      <>
        <line
          x1="18"
          y1="6"
          x2="6"
          y2="18"
          stroke="#ef4444"
          strokeWidth="3"
          strokeLinecap="round"
        />
        <line
          x1="6"
          y1="6"
          x2="18"
          y2="18"
          stroke="#ef4444"
          strokeWidth="3"
          strokeLinecap="round"
        />
        <line
          x1="18"
          y1="6"
          x2="6"
          y2="18"
          stroke="#fca5a5"
          strokeWidth="1.2"
          strokeLinecap="round"
        />
      </>
    )}
  </svg>
);

/**
 * IconMenu - Hamburger Menu
 */
export const IconMenu: React.FC<IconProps> = ({
  size = 20,
  className = '',
  variant = 'aero',
  ...props
}) => (
  <svg
    {...getDims(size)}
    viewBox="0 0 24 24"
    fill="none"
    className={`fj-icon fj-icon-menu ${className}`}
    {...props}
  >
    {variant === 'outline' ? (
      <>
        <line
          x1="3"
          y1="12"
          x2="21"
          y2="12"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <line
          x1="3"
          y1="6"
          x2="21"
          y2="6"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <line
          x1="3"
          y1="18"
          x2="21"
          y2="18"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </>
    ) : (
      <>
        <rect x="3" y="5" width="18" height="3" rx="1.5" fill="#38bdf8" />
        <rect x="3" y="11" width="18" height="3" rx="1.5" fill="#0ea5e9" />
        <rect x="3" y="17" width="18" height="3" rx="1.5" fill="#0284c7" />
        <ellipse cx="9" cy="6" rx="4" ry="0.6" fill="#ffffff" opacity="0.6" />
      </>
    )}
  </svg>
);

/**
 * IconInfo - Circular Info Badge
 */
export const IconInfo: React.FC<IconProps> = ({
  size = 20,
  className = '',
  variant = 'aero',
  ...props
}) => (
  <svg
    {...getDims(size)}
    viewBox="0 0 24 24"
    fill="none"
    className={`fj-icon fj-icon-info ${className}`}
    {...props}
  >
    <defs>
      <linearGradient id="fj-info-grad" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#38bdf8" />
        <stop offset="100%" stopColor="#0284c7" />
      </linearGradient>
    </defs>
    {variant === 'outline' ? (
      <>
        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
        <line x1="12" y1="16" x2="12" y2="12" stroke="currentColor" strokeWidth="2" />
        <circle cx="12" cy="8" r="1" fill="currentColor" />
      </>
    ) : (
      <>
        <circle
          cx="12"
          cy="12"
          r="9.5"
          fill="url(#fj-info-grad)"
          stroke="#0369a1"
          strokeWidth="0.75"
        />
        <ellipse cx="12" cy="6.5" rx="5" ry="2" fill="#ffffff" opacity="0.5" />
        <line
          x1="12"
          y1="16"
          x2="12"
          y2="11.5"
          stroke="#ffffff"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <circle cx="12" cy="8" r="1.2" fill="#ffffff" />
      </>
    )}
  </svg>
);

/**
 * IconAlertTriangle - Warning Triangle
 */
export const IconAlertTriangle: React.FC<IconProps> = ({
  size = 20,
  className = '',
  variant = 'aero',
  ...props
}) => (
  <svg
    {...getDims(size)}
    viewBox="0 0 24 24"
    fill="none"
    className={`fj-icon fj-icon-alert ${className}`}
    {...props}
  >
    <defs>
      <linearGradient id="fj-alert-grad" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#fef08a" />
        <stop offset="50%" stopColor="#f59e0b" />
        <stop offset="100%" stopColor="#d97706" />
      </linearGradient>
    </defs>
    {variant === 'outline' ? (
      <>
        <path
          d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <line
          x1="12"
          y1="9"
          x2="12"
          y2="13"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <circle cx="12" cy="17" r="1" fill="currentColor" />
      </>
    ) : (
      <>
        <path
          d="M12 3l9 16H3L12 3z"
          fill="url(#fj-alert-grad)"
          stroke="#b45309"
          strokeWidth="0.75"
          strokeLinejoin="round"
        />
        <line
          x1="12"
          y1="9"
          x2="12"
          y2="14"
          stroke="#451a03"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <circle cx="12" cy="16.5" r="1" fill="#451a03" />
        <polygon points="12 4.5 17 14 12 14" fill="#ffffff" opacity="0.3" />
      </>
    )}
  </svg>
);

/* ==========================================================================
   NAVIGATION & CHEVRONS
   ========================================================================== */

export const IconChevronDown: React.FC<IconProps> = ({ size = 20, className = '', ...props }) => (
  <svg
    {...getDims(size)}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={`fj-icon ${className}`}
    {...props}
  >
    <polyline points="6 9 12 15 18 9" />
  </svg>
);

export const IconChevronUp: React.FC<IconProps> = ({ size = 20, className = '', ...props }) => (
  <svg
    {...getDims(size)}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={`fj-icon ${className}`}
    {...props}
  >
    <polyline points="18 15 12 9 6 15" />
  </svg>
);

export const IconChevronLeft: React.FC<IconProps> = ({ size = 20, className = '', ...props }) => (
  <svg
    {...getDims(size)}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={`fj-icon ${className}`}
    {...props}
  >
    <polyline points="15 18 9 12 15 6" />
  </svg>
);

export const IconChevronRight: React.FC<IconProps> = ({ size = 20, className = '', ...props }) => (
  <svg
    {...getDims(size)}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={`fj-icon ${className}`}
    {...props}
  >
    <polyline points="9 18 15 12 9 6" />
  </svg>
);

/**
 * IconDownload - Glossy Transfer Arrow Down
 */
export const IconDownload: React.FC<IconProps> = ({
  size = 20,
  className = '',
  variant = 'aero',
  ...props
}) => (
  <svg
    {...getDims(size)}
    viewBox="0 0 24 24"
    fill="none"
    className={`fj-icon fj-icon-download ${className}`}
    {...props}
  >
    {variant === 'outline' ? (
      <>
        <path
          d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <polyline
          points="7 10 12 15 17 10"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <line
          x1="12"
          y1="15"
          x2="12"
          y2="3"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </>
    ) : (
      <>
        <path
          d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2"
          stroke="#0284c7"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M12 3v11m0 0l-4-4m4 4l4-4"
          stroke="#0ea5e9"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </>
    )}
  </svg>
);

/**
 * IconUpload - Glossy Transfer Arrow Up
 */
export const IconUpload: React.FC<IconProps> = ({
  size = 20,
  className = '',
  variant = 'aero',
  ...props
}) => (
  <svg
    {...getDims(size)}
    viewBox="0 0 24 24"
    fill="none"
    className={`fj-icon fj-icon-upload ${className}`}
    {...props}
  >
    {variant === 'outline' ? (
      <>
        <path
          d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <polyline
          points="17 8 12 3 7 8"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <line
          x1="12"
          y1="3"
          x2="12"
          y2="15"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </>
    ) : (
      <>
        <path
          d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2"
          stroke="#0284c7"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M12 15V4m0 0l-4 4m4-4l4 4"
          stroke="#0ea5e9"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </>
    )}
  </svg>
);

/**
 * IconRefresh - Circular Aerodynamic Sync Arrows
 */
export const IconRefresh: React.FC<IconProps> = ({
  size = 20,
  className = '',
  variant = 'aero',
  ...props
}) => (
  <svg
    {...getDims(size)}
    viewBox="0 0 24 24"
    fill="none"
    className={`fj-icon fj-icon-refresh ${className}`}
    {...props}
  >
    <path
      d="M21.5 2v6h-6M2.5 22v-6h6M2 11.5a10 10 0 0 1 18.8-4.3L21.5 8M22 12.5a10 10 0 0 1-18.8 4.2L2.5 16"
      stroke={variant === 'outline' ? 'currentColor' : '#0284c7'}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

/**
 * IconEye - Reflective Eye
 */
export const IconEye: React.FC<IconProps> = ({
  size = 20,
  className = '',
  variant = 'aero',
  ...props
}) => (
  <svg
    {...getDims(size)}
    viewBox="0 0 24 24"
    fill="none"
    className={`fj-icon fj-icon-eye ${className}`}
    {...props}
  >
    {variant === 'outline' ? (
      <>
        <path
          d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"
          stroke="currentColor"
          strokeWidth="2"
        />
        <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2" />
      </>
    ) : (
      <>
        <path
          d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"
          fill="#f0f9ff"
          stroke="#0284c7"
          strokeWidth="1.2"
        />
        <circle cx="12" cy="12" r="3.5" fill="#0284c7" />
        <circle cx="12" cy="12" r="1.8" fill="#0f172a" />
        <circle cx="11" cy="11" r="0.8" fill="#ffffff" />
      </>
    )}
  </svg>
);

/**
 * IconClock - Glossy Analog Clock
 */
export const IconClock: React.FC<IconProps> = ({
  size = 20,
  className = '',
  variant = 'aero',
  ...props
}) => (
  <svg
    {...getDims(size)}
    viewBox="0 0 24 24"
    fill="none"
    className={`fj-icon fj-icon-clock ${className}`}
    {...props}
  >
    <defs>
      <radialGradient id="fj-clock-dial" cx="35%" cy="30%" r="70%">
        <stop offset="0%" stopColor="#ffffff" />
        <stop offset="70%" stopColor="#e0f2fe" />
        <stop offset="100%" stopColor="#bae6fd" />
      </radialGradient>
    </defs>
    {variant === 'outline' ? (
      <>
        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
        <polyline
          points="12 6 12 12 16 14"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </>
    ) : (
      <>
        <circle
          cx="12"
          cy="12"
          r="9.5"
          fill="url(#fj-clock-dial)"
          stroke="#0284c7"
          strokeWidth="0.75"
        />
        <polyline
          points="12 6.5 12 12 15.5 14"
          stroke="#0f172a"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
        <circle cx="12" cy="12" r="1" fill="#0284c7" />
        <ellipse cx="12" cy="6.5" rx="5" ry="1.8" fill="#ffffff" opacity="0.6" />
      </>
    )}
  </svg>
);

/**
 * IconCalendar - Glossy Flip Desk Calendar
 */
export const IconCalendar: React.FC<IconProps> = ({
  size = 20,
  className = '',
  variant = 'aero',
  ...props
}) => (
  <svg
    {...getDims(size)}
    viewBox="0 0 24 24"
    fill="none"
    className={`fj-icon fj-icon-calendar ${className}`}
    {...props}
  >
    <defs>
      <linearGradient id="fj-cal-header" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#f87171" />
        <stop offset="100%" stopColor="#dc2626" />
      </linearGradient>
    </defs>
    {variant === 'outline' ? (
      <>
        <rect x="3" y="4" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="2" />
        <line
          x1="16"
          y1="2"
          x2="16"
          y2="6"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <line
          x1="8"
          y1="2"
          x2="8"
          y2="6"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <line x1="3" y1="10" x2="21" y2="10" stroke="currentColor" strokeWidth="2" />
      </>
    ) : (
      <>
        {/* Calendar Body */}
        <rect
          x="3"
          y="4"
          width="18"
          height="17"
          rx="2"
          fill="#ffffff"
          stroke="#cbd5e1"
          strokeWidth="0.75"
        />
        {/* Red Gloss Header */}
        <path d="M3 6a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v3H3V6z" fill="url(#fj-cal-header)" />
        {/* Binders */}
        <rect x="7" y="2" width="2" height="4" rx="1" fill="#94a3b8" />
        <rect x="15" y="2" width="2" height="4" rx="1" fill="#94a3b8" />
        {/* Day Grid dots */}
        <circle cx="7" cy="13" r="1" fill="#0284c7" />
        <circle cx="12" cy="13" r="1" fill="#0284c7" />
        <circle cx="17" cy="13" r="1" fill="#0284c7" />
        <circle cx="7" cy="17" r="1" fill="#0284c7" />
        <circle cx="12" cy="17" r="1" fill="#0284c7" />
        <circle cx="17" cy="17" r="1" fill="#0284c7" />
      </>
    )}
  </svg>
);

/**
 * IconLayers - Translucent Aero Glass Plates
 */
export const IconLayers: React.FC<IconProps> = ({
  size = 20,
  className = '',
  variant = 'aero',
  ...props
}) => (
  <svg
    {...getDims(size)}
    viewBox="0 0 24 24"
    fill="none"
    className={`fj-icon fj-icon-layers ${className}`}
    {...props}
  >
    {variant === 'outline' ? (
      <>
        <polygon
          points="12 2 2 7 12 12 22 7 12 2"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinejoin="round"
        />
        <polyline
          points="2 17 12 22 22 17"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <polyline
          points="2 12 12 17 22 12"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </>
    ) : (
      <>
        <polygon
          points="12 3 21 7.5 12 12 3 7.5"
          fill="#38bdf8"
          stroke="#0284c7"
          strokeWidth="0.75"
          opacity="0.9"
        />
        <polygon points="12 3 21 7.5 12 12" fill="#ffffff" opacity="0.3" />
        <polyline
          points="3 12 12 16.5 21 12"
          stroke="#0284c7"
          strokeWidth="1.8"
          strokeLinejoin="round"
        />
        <polyline
          points="3 16.5 12 21 21 16.5"
          stroke="#0369a1"
          strokeWidth="1.8"
          strokeLinejoin="round"
        />
      </>
    )}
  </svg>
);

/**
 * IconZap - High Voltage Electric Lightning Bolt
 */
export const IconZap: React.FC<IconProps> = ({
  size = 20,
  className = '',
  variant = 'aero',
  ...props
}) => (
  <svg
    {...getDims(size)}
    viewBox="0 0 24 24"
    fill="none"
    className={`fj-icon fj-icon-zap ${className}`}
    {...props}
  >
    <defs>
      <linearGradient id="fj-zap-grad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#fef08a" />
        <stop offset="50%" stopColor="#facc15" />
        <stop offset="100%" stopColor="#eab308" />
      </linearGradient>
    </defs>
    {variant === 'outline' ? (
      <polygon
        points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
    ) : (
      <>
        <polygon
          points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"
          fill="url(#fj-zap-grad)"
          stroke="#ca8a04"
          strokeWidth="0.75"
          strokeLinejoin="round"
        />
        <polygon points="13 2 3 14 12 14 13 2" fill="#ffffff" opacity="0.4" />
      </>
    )}
  </svg>
);

/**
 * IconBadgeWrapper / AeroIconBadge - Wrap any icon in a glossy 3D Aero Glass/Gel circular disc
 */
export interface AeroIconBadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: number | 'sm' | 'md' | 'lg' | 'xl';
  variant?: 'aero' | 'glass' | 'nature' | 'water' | 'sun' | 'berry';
  glow?: boolean;
  children: React.ReactNode;
}

export const AeroIconBadge: React.FC<AeroIconBadgeProps> = ({
  size = 'md',
  variant = 'aero',
  glow = false,
  className = '',
  children,
  style,
  ...props
}) => {
  const sizeMap: Record<string, number> = {
    sm: 32,
    md: 44,
    lg: 56,
    xl: 72,
  };

  const pixelSize = typeof size === 'number' ? size : sizeMap[size] || 44;

  const bgStyles: Record<string, string> = {
    aero: 'linear-gradient(135deg, rgba(56, 189, 248, 0.9) 0%, rgba(2, 132, 199, 0.95) 100%)',
    glass: 'linear-gradient(135deg, rgba(255, 255, 255, 0.4) 0%, rgba(255, 255, 255, 0.1) 100%)',
    nature: 'linear-gradient(135deg, rgba(74, 222, 128, 0.9) 0%, rgba(22, 163, 74, 0.95) 100%)',
    water: 'linear-gradient(135deg, rgba(125, 211, 252, 0.9) 0%, rgba(14, 165, 233, 0.95) 100%)',
    sun: 'linear-gradient(135deg, rgba(253, 224, 71, 0.9) 0%, rgba(234, 179, 8, 0.95) 100%)',
    berry: 'linear-gradient(135deg, rgba(244, 114, 182, 0.9) 0%, rgba(219, 39, 119, 0.95) 100%)',
  };

  return (
    <div
      className={`fj-aero-icon-badge ${glow ? 'fj-aero-icon-badge--glow' : ''} ${className}`}
      style={{
        width: pixelSize,
        height: pixelSize,
        borderRadius: '50%',
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        background: bgStyles[variant] || bgStyles.aero,
        boxShadow: glow
          ? '0 0 16px rgba(56, 189, 248, 0.6), inset 0 1px 1px rgba(255, 255, 255, 0.8), 0 4px 8px rgba(0, 0, 0, 0.15)'
          : 'inset 0 1px 1px rgba(255, 255, 255, 0.8), inset 0 -2px 4px rgba(0, 0, 0, 0.2), 0 3px 6px rgba(0, 0, 0, 0.15)',
        border: '1px solid rgba(255, 255, 255, 0.6)',
        backdropFilter: 'blur(8px)',
        overflow: 'hidden',
        ...style,
      }}
      {...props}
    >
      {/* Specular gloss top cap */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: '15%',
          right: '15%',
          height: '45%',
          background:
            'linear-gradient(180deg, rgba(255, 255, 255, 0.7) 0%, rgba(255, 255, 255, 0) 100%)',
          borderRadius: '50% 50% 100% 100% / 0 0 60% 60%',
          pointerEvents: 'none',
        }}
      />
      <div
        style={{
          position: 'relative',
          zIndex: 1,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {children}
      </div>
    </div>
  );
};
