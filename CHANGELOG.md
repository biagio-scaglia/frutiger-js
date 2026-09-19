# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [0.1.0] - 2026-09-19

### Added

- Initial release of **Frutiger.js** design system and component ecosystem.
- `@frutiger-js/core`: Pure CSS design system with CSS Cascade Layers (`@layer fj.*`).
  - Comprehensive design tokens: Sky, Ocean, Grass, Leaf, Water, Cloud, Sun, Berry, Neutrals, Semantics.
  - Frutiger Aero Gloss & Glass system: Specular highlights, inner glows, organic shadows, frosted reflections.
  - Background atmospheric system: Sky, Ocean, Water, Grass, Sunset, Aero gradients with organic depth.
  - Keyframe animations with `@media (prefers-reduced-motion: reduce)` accessibility support (`fj-float`, `fj-bubble`, `fj-shimmer`, `fj-pulse`, `fj-wave`).
  - Theming engine: Default Light Aero and Dark `aero-night` modes.
- `@frutiger-js/react`: Accessible, fully-typed React component library.
  - Core components: `Button`, `Card`, `Input`, `Textarea`, `Select`, `Checkbox`, `Radio`, `Switch`.
  - Feedback & Display: `Badge`, `Alert`, `Tooltip`, `Progress`, `Spinner`, `Avatar`, `Breadcrumb`.
  - Navigation & Overlay: `Navbar`, `Sidebar`, `Modal`, `Dialog`, `Dropdown`, `Tabs`, `Accordion`.
  - Layout primitives: `Container`, `Stack`, `Grid`.
  - Minimalist Frutiger Aero SVG icons collection.
- Interactive showcase and documentation playground with living Aero widgets (Weather, Media Player, System Monitor, Theme Switcher).
- Full test suite powered by Vitest and React Testing Library.
- GitHub Actions CI workflow for linting, typechecking, testing, and building.
