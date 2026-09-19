# @frutiger-js/core

Pure CSS design system inspired by Frutiger Aero, Web 2.0 aesthetics, glossy textures, organic curves, nature-inspired visuals, and the optimistic digital era of the late 2000s.

## Features

- 💧 **Pure CSS Architecture**: Works with any framework (React, Vue, Svelte, or Vanilla HTML/JS).
- 🧬 **CSS Cascade Layers**: Structured with `@layer fj.*` (`fj.reset`, `fj.tokens`, `fj.utilities`, `fj.components`, `fj.themes`).
- 🎨 **Rich Design Tokens**: Naturalistic palettes (Sky, Ocean, Grass, Leaf, Water, Sun, Berry, Neutrals).
- ✨ **Authentic Gloss & Glass**: Specular dome highlights, frosted acrylic backdrops, organic rim lighting, and depth shadows.
- ♿ **Accessibility**: Reduced motion compliance, high-contrast focus rings, and WCAG AA contrast.

## Installation

```bash
npm install @frutiger-js/core
```

## Quick Start

Import the master stylesheet in your application entry:

```javascript
import '@frutiger-js/core/styles.css';
```

Or selectively import specific modules:

```javascript
import '@frutiger-js/core/reset';
import '@frutiger-js/core/tokens';
import '@frutiger-js/core/components';
import '@frutiger-js/core/utilities';
```

## Usage Example

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
    <button class="fj-button fj-button--aero fj-button--md">Explore</button>
  </div>
</div>
```

## License

MIT © Biagio Scaglia
