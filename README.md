# Frutiger.js 💧✨

> **Frutiger Aero, rebuilt for the modern web.**  
> _Bring the blue sky back to the web._

A modern React component library and pure CSS design system inspired by **Frutiger Aero**, Web 2.0 interfaces, glossy textures, organic curves, nature-inspired visuals, and the optimistic digital aesthetics of the late 2000s.

---

## 📖 Overview

**Frutiger.js** is **not** another Tailwind skin, Bootstrap clone, or flat SaaS theme. It is an authentic, production-ready design system engineered from the ground up to bring skeuomorphic depth, specular dome highlights, crystalline glass acrylics, and natural gradients to modern React applications.

```
Design Tokens  ──>  CSS Foundation  ──>  CSS Components  ──>  React Components  ──>  Applications
```

The system is split into two primary packages:

- **`@frutiger-js/core`**: Pure CSS framework with CSS Cascade Layers (`@layer fj.*`) and CSS Custom Properties. Use it with React, Vue, Svelte, or Vanilla HTML.
- **`@frutiger-js/react`**: Accessible, typed React components with zero runtime CSS-in-JS dependencies.

---

## ✨ Features

- 💎 **Authentic Frutiger Aero Gloss**: Specular dome buttons, acrylic glass backdrops (`backdrop-filter`), tactile bevels, and organic shadows.
- 🧬 **CSS Cascade Layers**: Organized via `@layer fj.reset, fj.tokens, fj.base, fj.utilities, fj.components, fj.themes`.
- 🎨 **Comprehensive Token System**: Sky, Ocean, Grass, Leaf, Water, Sun, Berry, and Neutral color scales.
- ♿ **WCAG 2.2 AA Accessibility**: Full keyboard navigation, focus visible rings, ARIA semantics, and `@media (prefers-reduced-motion: reduce)` support.
- 📦 **Modern ESM & TypeScript**: Strict typing, tree-shakeable exports, and `.d.ts` declarations.

---

## 🚀 Installation

Install the packages via npm:

```bash
npm install @frutiger-js/core @frutiger-js/react
```

Or using pnpm / yarn:

```bash
pnpm add @frutiger-js/core @frutiger-js/react
# or
yarn add @frutiger-js/core @frutiger-js/react
```

---

## ⚡ Quick Start

### 1. Import Global Styles

Import the core CSS bundle at the root of your application (e.g., `main.tsx` or `App.tsx`):

```tsx
import '@frutiger-js/core/styles.css';
```

### 2. Use React Components

```tsx
import React from 'react';
import '@frutiger-js/core/styles.css';
import {
  Button,
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
  Badge,
  Input,
} from '@frutiger-js/react';

export function App() {
  return (
    <div className="fj-bg-aero" style={{ minHeight: '100vh', padding: '2rem' }}>
      <Card variant="glass" style={{ maxWidth: 480, margin: '0 auto' }}>
        <CardHeader>
          <CardTitle>Welcome to the Future</CardTitle>
          <Badge variant="nature">Online</Badge>
        </CardHeader>
        <CardContent>
          <p style={{ marginBottom: '1rem' }}>
            Experience the optimistic aesthetic of the late 2000s Web 2.0.
          </p>
          <Input placeholder="Enter username..." label="Search" />
        </CardContent>
        <CardFooter>
          <Button variant="aero">Explore System</Button>
        </CardFooter>
      </Card>
    </div>
  );
}
```

---

## 🧱 Components Included in v0.1.0

| Category                 | Components                                                                                                                                                                                                    |
| ------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Buttons & Actions**    | `Button` (primary, secondary, success, danger, ghost, glass, aero), `Dropdown`, `DropdownItem`                                                                                                                |
| **Surfaces & Cards**     | `Card`, `CardHeader`, `CardTitle`, `CardDescription`, `CardContent`, `CardFooter` (default, glass, gloss, floating, nature), `ScrollArea`                                                                     |
| **Windows & Archive**    | `WindowFrame` (Vista & 7 Glass window), `GalleryGrid`, `GalleryItem` (media vault), `StatCard` (glossy metrics & trends)                                                                                      |
| **Form Controls**        | `Input`, `Textarea`, `Select`, `Checkbox`, `Radio`, `Switch`, `Slider`, `Dropzone`                                                                                                                            |
| **Feedback & Loading**   | `Badge`, `Alert`, `Tooltip`, `Progress`, `Spinner`, `Skeleton` (rect, circle, pill shimmer)                                                                                                                   |
| **Navigation & Overlay** | `Navbar`, `NavLink`, `Sidebar`, `SidebarItem`, `Breadcrumb`, `Modal`, `Dialog`, `Tabs`, `Accordion`, `FaqList`, `FaqItem`                                                                                     |
| **Layout & Primitives**  | `Container`, `Stack`, `Grid`, `Avatar`, `Divider`                                                                                                                                                             |
| **Aero Icons (45+)**     | `IconFish`, `IconBubble`, `IconWater`, `IconLeaf`, `IconSprout`, `IconSun`, `IconCloud`, `IconGlobe`, `IconRainbow`, `IconFlame`, `IconAeroOrb`, `IconDisc`, `IconMonitor`, `IconCamera`, `IconSpeaker`, `IconBattery`, `IconWifi`, `IconShield`, `IconLock`, `IconUnlock`, `IconCompass`, `IconSettings`, `IconFolder`, `IconTrash`, `IconMusic`, `IconPlay`, `IconPause`, `IconUser`, `IconUsers`, `IconMail`, `IconHeart`, `IconStar`, `IconSparkles`, `IconSearch`, `IconCheck`, `IconClose`, `IconMenu`, `IconInfo`, `IconAlertTriangle`, `IconChevronDown`, `IconChevronUp`, `IconChevronLeft`, `IconChevronRight`, `IconDownload`, `IconUpload`, `IconRefresh`, `IconEye`, `IconClock`, `IconCalendar`, `IconLayers`, `IconZap`, `AeroIconBadge` |

---

## 🎨 Design Tokens

All visual tokens are defined as CSS Custom Properties:

```css
:root {
  /* Sky Scale */
  --fj-color-sky-50: #f0f9ff;
  --fj-color-sky-500: #0ea5e9;
  --fj-color-sky-900: #0c4a6e;

  /* Nature Greens */
  --fj-color-grass-500: #22c55e;
  --fj-color-leaf-500: #10b981;

  /* Gloss & Specular */
  --fj-shadow-gloss:
    inset 0 1px 0 rgba(255, 255, 255, 0.9), inset 0 -1px 0 rgba(0, 0, 0, 0.1),
    0 2px 6px rgba(3, 105, 161, 0.15);

  /* Radii */
  --fj-radius-md: 10px;
  --fj-radius-xl: 18px;
  --fj-radius-pill: 9999px;
}
```

---

## 🎨 CSS Customization

Frutiger.js design tokens are fully customizable using CSS variables:

```css
:root {
  --fj-color-primary: #0284c7;
  --fj-radius-md: 12px;
  --fj-font-family-sans: 'Segoe UI', system-ui, sans-serif;
}
```

---

## 🛠️ Development & Contributing

### Local Setup

```bash
git clone https://github.com/biagio-scaglia/frutiger-js.git
cd frutiger-js
npm install
```

### Available Scripts

- `npm run dev`: Launch the interactive Frutiger Aero playground on `localhost:3000`.
- `npm run build`: Build all workspace packages (`@frutiger-js/core`, `@frutiger-js/react`, `playground`).
- `npm run test`: Run the Vitest + React Testing Library test suite.
- `npm run lint`: Run ESLint across TypeScript and React source files.
- `npm run typecheck`: Check TypeScript strict types.
- `npm run format`: Format code with Prettier.

---

## 🗺️ Roadmap

- [x] `@frutiger-js/core` CSS cascade layer architecture & design tokens.
- [x] `@frutiger-js/react` initial component suite & accessibility layer.
- [x] Interactive showcase & Aero Dashboard playground.
- [x] `@frutiger-js/icons`: Expanded skeuomorphic SVG icon pack (45+ icons + `AeroIconBadge`).
- [ ] Sound effects audio package (`@frutiger-js/sound`) for authentic tactile clicks and water chimes.
- [ ] Storybook documentation portal.

---

## 📄 License

MIT © [Biagio Scaglia](https://github.com/biagio-scaglia)
