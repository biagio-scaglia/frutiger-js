# @frutiger-js/react 💧✨

> **Modern React component library inspired by Frutiger Aero and Web 2.0 aesthetics.**  
> _Part of the [Frutiger.js](https://biagio-scaglia.github.io/frutiger-js/) design system ecosystem._

[![npm version](https://img.shields.io/npm/v/@frutiger-js/react.svg?style=flat-square&color=0ea5e9)](https://www.npmjs.com/package/@frutiger-js/react)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg?style=flat-square)](https://github.com/biagio-scaglia/frutiger-js/blob/master/LICENSE)

---

## 📖 Overview

`@frutiger-js/react` delivers accessible, strictly typed, and tree-shakeable React components inspired by Frutiger Aero, Windows Vista / 7 Glass, and early Web 2.0 optimistic design. Built with zero CSS-in-JS runtime overhead directly upon [`@frutiger-js/core`](https://www.npmjs.com/package/@frutiger-js/core).

- 🌐 **Documentation & Live Playground**: [biagio-scaglia.github.io/frutiger-js](https://biagio-scaglia.github.io/frutiger-js/)
- 💻 **GitHub Repository**: [biagio-scaglia/frutiger-js](https://github.com/biagio-scaglia/frutiger-js)
- 🐛 **Issue Tracker**: [Report an issue](https://github.com/biagio-scaglia/frutiger-js/issues)

---

## ✨ Features

- 💎 **Authentic Frutiger Aero Aesthetics**: Translucent acrylic glass, glossy dome buttons, specular reflections, and nature gradients.
- ⚡ **Zero Runtime Overhead**: Styled via native hardware-accelerated CSS Cascade Layers (`@frutiger-js/core`).
- 🦾 **TypeScript First**: Strict typed props extending native HTML elements with full IDE autocomplete.
- ♿ **Accessible**: WCAG 2.1 AA compliant, full keyboard navigation, visible focus rings, ARIA roles, and reduced-motion safety.
- 📱 **Fluid-First Responsive**: Continuum scaling from 320px smartphones up to 4K ultrawide displays.
- 📦 **Modern ESM & Tree Shakeable**: Ready for Next.js App Router, Vite, Remix, and Astro. Compatible with React 18 and React 19.

---

## 🚀 Installation

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

Import `@frutiger-js/core/styles.css` once in your root file (e.g. `main.tsx` or `layout.tsx`):

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
          <CardTitle>Welcome to Frutiger.js</CardTitle>
          <Badge variant="nature">Online</Badge>
        </CardHeader>
        <CardContent>
          <p style={{ marginBottom: '1rem', color: 'var(--fj-color-text)' }}>
            Experience the optimistic, glossy aesthetic of the late 2000s Web 2.0.
          </p>
          <Input placeholder="Enter username..." />
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

## 🧱 Included Components

- **Buttons & Actions**: `Button` (7 glossy variants), `Dropdown`, `DropdownItem`
- **Surfaces & Containers**: `Card`, `WindowFrame` (Vista/7 glass desktop window), `ScrollArea` (skeuomorphic scrollbar)
- **Archive & Media**: `GalleryGrid`, `GalleryItem`, `StatCard` (metrics & trends)
- **Forms & Inputs**: `Input`, `Textarea`, `Select`, `Checkbox`, `Radio`, `Switch`, `Slider`, `Dropzone`
- **Feedback & Loaders**: `Badge`, `Alert`, `Tooltip`, `Progress`, `Spinner`, `Skeleton` (iridescent shimmer)
- **Navigation & Accordion**: `Navbar`, `NavLink`, `Sidebar`, `Breadcrumb`, `Modal`, `Tabs`, `Accordion`, `FaqList`, `FaqItem`
- **Layout**: `Container`, `Stack`, `Grid`, `Avatar`, `Divider`
- **Aero Vector Icons**: `IconSun`, `IconWater`, `IconLeaf`, `IconCloud`, `IconMusic`, `IconSparkles`, etc.

---

## 📄 License

MIT © [Biagio Scaglia](https://github.com/biagio-scaglia)
