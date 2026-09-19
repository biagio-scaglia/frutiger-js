# Changelog

All notable changes to the **Frutiger.js** design system and libraries will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

---

## [0.1.0] - 2026-09-19

### Added

- **`@frutiger-js/core`**:
  - CSS Cascade Layer architecture (`@layer fj.reset, fj.tokens, fj.base, fj.utilities, fj.components, fj.themes`).
  - Comprehensive Design Token system with HSL scales: `Sky`, `Ocean`, `Grass`, `Leaf`, `Water`, `Sun`, `Berry`, and `Neutrals`.
  - Core component stylesheets: `button`, `card`, `input`, `textarea`, `select`, `checkbox`, `radio`, `switch`, `badge`, `alert`, `tooltip`, `modal`, `tabs`, `accordion`, `progress`, `spinner`, `avatar`, `breadcrumb`, `navbar`, `sidebar`, `slider`, `divider`, `scroll-area`, `dropzone`, `skeleton`, `window-frame`, `gallery`, `stat-card`, `faq`.
  - Specular glass reflections, acrylic blurs, and naturalistic gradients.
- **`@frutiger-js/react`**:
  - Full suite of accessible, typed React 18/19 components.
  - Strict TypeScript definitions with `.d.ts` declaration bundling via `vite-plugin-dts`.
  - Tactile skeuomorphic components: `WindowFrame` (Vista / 7 Aero glass window), `GalleryGrid` & `GalleryItem` (media archive), `StatCard` (metrics & trends), `FaqList` & `FaqItem` (`<details>` / `<summary>`), `ScrollArea`, `Dropzone`, `Skeleton`.
  - Complete Aero vector icon suite: `IconSun`, `IconWater`, `IconLeaf`, `IconCloud`, `IconMusic`, `IconPlay`, `IconPause`, `IconCheck`, `IconClose`, `IconChevronDown`, `IconSearch`, `IconInfo`, `IconAlertTriangle`, `IconSparkles`, `IconMenu`.
  - 16 test suites (33 tests) passing with Vitest and React Testing Library.
- **`@frutiger-js/playground`**:
  - Interactive Web 2.0 demonstration application with component matrix, viewport simulation lab, Vista window explorer, archive media gallery, and live token inspector.
- **Documentation & Open Source**:
  - [`docs/components.md`](docs/components.md): Comprehensive API reference and props tables.
  - [`docs/responsive.md`](docs/responsive.md): Fluid-first continuum architecture guidelines.
  - `CONTRIBUTING.md`, `CODE_OF_CONDUCT.md`, `SECURITY.md`, `LICENSE`.
