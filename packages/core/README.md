# @frutiger.js/core 💧✨

> **Pure CSS design system inspired by Frutiger Aero and Web 2.0 aesthetics.**  
> _Part of the [Frutiger.js](https://biagio-scaglia.github.io/frutiger-js/) ecosystem._

[![npm version](https://img.shields.io/npm/v/@frutiger.js/core.svg?style=flat-square&color=0ea5e9)](https://www.npmjs.com/package/@frutiger.js/core)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg?style=flat-square)](https://github.com/biagio-scaglia/frutiger-js/blob/master/LICENSE)

---

## 📖 Overview

`@frutiger.js/core` is a framework-agnostic CSS framework engineered with **CSS Cascade Layers (`@layer fj.*`)** and **CSS Custom Properties**. It brings back the optimistic, tactile aesthetics of the late 2000s—translucent acrylic glass (`backdrop-filter`), specular dome highlights, water droplet spheres, and organic nature gradients—without any JavaScript runtime overhead.

- 🌐 **Documentation & Live Playground**: [biagio-scaglia.github.io/frutiger-js](https://biagio-scaglia.github.io/frutiger-js/)
- 💻 **GitHub Repository**: [biagio-scaglia/frutiger-js](https://github.com/biagio-scaglia/frutiger-js)
- 🐛 **Issue Tracker**: [Report an issue](https://github.com/biagio-scaglia/frutiger-js/issues)

---

## ✨ Features

- 💧 **Framework Agnostic**: Works seamlessly with React, Vue, Svelte, Solid, Astro, or plain HTML.
- 🧬 **CSS Cascade Layers**: Structured cleanly in `@layer fj.reset, fj.tokens, fj.base, fj.utilities, fj.components, fj.themes`.
- 🎨 **Naturalistic Design Tokens**: Sky, Ocean, Grass, Leaf, Water, Sun, Berry, and Neutral color systems.
- 💎 **Authentic Gloss & Glass**: Hardware-accelerated gradients, multi-layer box shadows, and specular rim reflections.
- ♿ **Accessible**: WCAG 2.1 AA compliant color contrast, tactile focus rings, and `@media (prefers-reduced-motion)` safety.

---

## 🚀 Installation

```bash
npm install @frutiger.js/core
```

Or using pnpm / yarn:

```bash
pnpm add @frutiger.js/core
# or
yarn add @frutiger.js/core
```

---

## ⚡ Usage

### Complete Stylesheet

Import the master stylesheet at your entry point:

```javascript
import '@frutiger.js/core/styles.css';
```

### Modular Imports

Or selectively import specific modules:

```javascript
import '@frutiger.js/core/reset';
import '@frutiger.js/core/tokens';
import '@frutiger.js/core/components';
import '@frutiger.js/core/utilities';
```

### HTML Component Example

```html
<div class="fj-card fj-card--glass">
  <div class="fj-card__header">
    <h3 class="fj-card__title">Aero Interface</h3>
    <span class="fj-badge fj-badge--primary">Online</span>
  </div>
  <div class="fj-card__content">
    <p>Rebuilt with modern CSS Cascade Layers and Custom Properties.</p>
  </div>
  <div class="fj-card__footer">
    <button class="fj-btn fj-btn--aero fj-btn--md">Explore</button>
  </div>
</div>
```

---

## 📦 React Components

Looking for React components? Check out [`@frutiger-js/react`](https://www.npmjs.com/package/@frutiger-js/react) for fully typed, accessible React 18/19 components built on top of `@frutiger-js/core`.

---

## 📄 License

MIT © [Biagio Scaglia](https://github.com/biagio-scaglia)
