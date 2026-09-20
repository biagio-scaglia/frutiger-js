# Frutiger.js 💧✨

> **Frutiger Aero, rebuilt for the modern web.**  
> _Bring the blue sky back to the web._

A modern React component library and pure CSS design system inspired by **Frutiger Aero**, Web 2.0 interfaces, glossy textures, organic curves, nature-inspired visuals, and the optimistic digital aesthetics of the late 2000s.

---

## 📖 Overview

**Frutiger.js** is **not** another flat SaaS theme or Tailwind wrapper. It is a comprehensive visual language and design system engineered from the ground up to bring tactile skeuomorphic depth, specular dome highlights, crystalline acrylics, and daylight optimism to the modern web.

```
┌────────────────────────────────────────────────────────────────────────┐
│                        FRUTIGER.JS ARCHITECTURE                        │
├────────────────────────────────────────────────────────────────────────┤
│  Layer 1: Primitive Tokens  (Raw color scales: Sky, Ocean, Meadow)    │
│  Layer 2: Semantic Tokens   (--fj-color-primary, --fj-surface-glass)   │
│  Layer 3: Component Tokens  (--fj-btn-bg, --fj-window-header-gradient) │
├────────────────────────────────────────────────────────────────────────┤
│  Layer 4: Aero Primitives   (<AeroSurface>, <Glass>, <Gloss>, <Bevel>) │
├────────────────────────────────────────────────────────────────────────┤
│  Layer 5: Core UI Suite     (<Button>, <Card>, <Input>, <WindowFrame>) │
├────────────────────────────────────────────────────────────────────────┤
│  Layer 6: OS Experience     (Taskbar, StartMenu, WindowManager)        │
└────────────────────────────────────────────────────────────────────────┘
```

The system is split into two primary packages:

- **`@frutiger.js/core`**: Pure CSS framework built with CSS Cascade Layers (`@layer fj.*`) and CSS Custom Properties. Framework-agnostic (works with React, Vue, Svelte, or Vanilla HTML).
- **`@frutiger.js/react`**: Accessible, typed React components with zero runtime CSS-in-JS dependencies.

---

## ✨ Features

- 💎 **Aero Visual Primitives**: Composable surfaces (`<AeroSurface>`, `<Glass>`, `<Gloss>`, `<Bevel>`, `<Glow>`, `<Reflection>`).
- 🪟 **Windows Vista / 7 Desktop Suite**: Authentic Vista Aero Glass & Windows 7 Crystalline Acrylic window frames with full taskbar docking and live system tray.
- 🎨 **Multi-Theme Engine**: 6 daylight & skeuomorphic theme presets (`aero`, `ocean`, `meadow`, `sunset`, `vista`, `windows7`).
- 🧬 **CSS Cascade Layers**: Strict specificity isolation via `@layer fj.reset, fj.tokens, fj.base, fj.utilities, fj.components, fj.themes`.
- ♿ **Accessible by Design**: WCAG 2.2 AA compliant focus rings, ARIA semantics, full keyboard navigation, and reduced-motion fallbacks.
- 📦 **Modern ESM & TypeScript**: Strict typing, tree-shakeable exports, and `.d.ts` declarations.

---

## 🚀 Installation

```bash
npm install @frutiger.js/core @frutiger.js/react
```

---

## 🔮 Aero Visual Primitives

Frutiger.js provides foundational building blocks to turn any UI element into an authentic Frutiger Aero surface:

```tsx
import { AeroSurface, Glass, Gloss, Bevel, Glow, Reflection } from '@frutiger.js/react';

// Composable Crystal Surface with Ambient Glow & Bevel
<AeroSurface variant="crystal" hasBevel="deep" glow="aqua" isInteractive>
  <h3>Tactile Aqua Orb</h3>
</AeroSurface>

// Specular Glass Card with Ground Reflection
<Reflection>
  <Glass specular blur="lg">
    <p>Luminous 2000s Web 2.0 Card</p>
  </Glass>
</Reflection>
```

---

## 🧱 Component Suite (45+ Components & Primitives)

| Category | Components |
| :--- | :--- |
| **Aero Primitives** | `AeroSurface`, `Glass`, `Gloss`, `Bevel`, `Glow`, `Reflection` |
| **Buttons & Actions** | `Button` (aero, primary, secondary, success, danger, glass, ghost), `IconButton` (circle, rounded), `Dropdown`, `DropdownItem`, `DropdownSelect` |
| **Surfaces & Cards** | `Card`, `CardHeader`, `CardTitle`, `CardDescription`, `CardContent`, `CardFooter`, `ScrollArea` (aero scrollbars with dynamic fade masks) |
| **Forms & Fields** | `Field`, `Label`, `HelperText`, `ErrorMessage`, `Input`, `Textarea`, `Select`, `Checkbox`, `Radio`, `Switch`, `Slider`, `SegmentedControl`, `Dropzone` |
| **Feedback & Notices** | `Toast`, `ToastProvider`, `useToast`, `Badge`, `Alert`, `Tooltip`, `Progress` (linear & circular), `Spinner`, `Skeleton` |
| **Navigation & Overlays** | `Navbar`, `NavLink`, `Sidebar`, `SidebarItem`, `Breadcrumb`, `Tabs`, `Pagination`, `Accordion`, `Modal`, `Drawer` |
| **Data & Structure** | `Table` (with responsive mobile card-stacking), `Container`, `Stack`, `Grid`, `Avatar`, `AvatarGroup`, `Divider`, `EmptyState`, `StatCard`, `FaqList`, `FaqItem` |
| **Desktop OS & Media** | `WindowFrame`, `Taskbar`, `TaskbarStart` (3D Start Orb), `TaskbarItem`, `TaskbarTray`, `StartMenu`, `GalleryGrid`, `GalleryItem` |
| **Aero Icons (45+)** | `IconFish`, `IconBubble`, `IconWater`, `IconLeaf`, `IconSprout`, `IconSun`, `IconCloud`, `IconGlobe`, `IconRainbow`, `IconFlame`, `IconAeroOrb`, `IconDisc`, `IconMonitor`, `IconCamera`, `IconSpeaker`, `IconBattery`, `IconWifi`, `IconShield`, `IconLock`, `IconUnlock`, `IconCompass`, `IconSettings`, `IconFolder`, `IconTrash`, `IconMusic`, `IconPlay`, `IconPause`, `IconUser`, `IconUsers`, `IconMail`, `IconHeart`, `IconStar`, `IconSparkles`, `IconSearch`, `IconCheck`, `IconClose`, `IconMenu`, `IconInfo`, `IconAlertTriangle`, `IconChevronDown`, `IconChevronUp`, `IconChevronLeft`, `IconChevronRight`, `IconDownload`, `IconUpload`, `IconRefresh`, `IconEye`, `IconClock`, `IconCalendar`, `IconLayers`, `IconZap`, `AeroIconBadge` |

---

## 🛠️ Development & Testing

```bash
# Run interactive showcase
npm run dev

# Run full Vitest suite (30 test suites, 79+ unit tests)
npm test

# Run TypeScript typecheck
npm run typecheck

# Build all packages & showcase
npm run build
```

---

## 🗺️ Versioning & Releases

Frutiger.js releases are governed by semantic versioning with automated testing, linting, and package packaging verification:

```bash
# Automated release bump & publish
npm run release
```

---

---

## 👨‍💻 Creator & Lead Developer

**Frutiger.js** is designed, architected, and maintained with 💚 by **Biagio Scaglia** — Full Stack Software Engineer & UX/UI Designer.

- 🌐 **Portfolio & Cyberspace**: [biagiocyberspace.it](https://biagiocyberspace.it/)
- 🐙 **GitHub**: [@biagio-scaglia](https://github.com/biagio-scaglia)
- 💼 **LinkedIn**: [Biagio Scaglia](https://linkedin.com/in/biagio-scaglia)

---

## 📄 License

MIT © [Biagio Scaglia](https://github.com/biagio-scaglia) • [biagiocyberspace.it](https://biagiocyberspace.it)
