# Responsive Design System Architecture in Frutiger.js

Frutiger.js is engineered with a **fluid-first, content-driven, and progressively enhanced** responsive philosophy. Every component maintains structural integrity, legible typography, touch ergonomics, and the optimistic Frutiger Aero aesthetic across screen sizes from **320px** up to **3840px (4K)**.

---

## 1. Core Principles

1. **Fluid-First, Not Breakpoint-Dependent**:  
   Layouts adapt smoothly using CSS Grid `auto-fit`, Flexbox `wrap`, and `clamp()` calculations before any media query is evaluated.
2. **Container Queries (`@container`)**:  
   Components such as `Card` evaluate their available parent space rather than the full browser viewport, ensuring modularity in sidebars, modals, and grid columns.
3. **Safe Area Insets**:  
   Fixed, sticky, and full-screen elements (like `Navbar`, `Modal`, drawers) respect notch and gesture zones via `env(safe-area-inset-*)`.
4. **Touch Target Accessibility**:  
   Interactive elements provide a minimum `44px` hit target on touch devices via `@media (pointer: coarse)` and `touch-action: manipulation`.
5. **Mobile Zoom Protection**:  
   Form controls on mobile viewports enforce `font-size: 16px` to prevent unwanted automatic zooming on iOS Safari without restrictive viewport hacks.

---

## 2. Global Breakpoint Tokens

Defined in `@frutiger-js/core/tokens`:

| Token                 | Value    | Purpose                                                      |
| --------------------- | -------- | ------------------------------------------------------------ |
| `--fj-breakpoint-xs`  | `320px`  | Ultra-compact smartphones (iPhone SE 1st gen, small Android) |
| `--fj-breakpoint-sm`  | `640px`  | Large phones & phablets                                      |
| `--fj-breakpoint-md`  | `768px`  | Tablets & hybrid handheld devices                            |
| `--fj-breakpoint-lg`  | `1024px` | Laptops & tablet landscape                                   |
| `--fj-breakpoint-xl`  | `1280px` | Standard desktop displays                                    |
| `--fj-breakpoint-2xl` | `1536px` | Widescreen & 4K workstations                                 |

---

## 3. Fluid Spacing & Typography Tokens

```css
:root {
  /* Fluid Container Inset */
  --fj-fluid-container-padding: clamp(1rem, 4vw, 2.5rem);

  /* Fluid Spacing Scale */
  --fj-fluid-space-xs: clamp(0.25rem, 1vw, 0.5rem);
  --fj-fluid-space-sm: clamp(0.5rem, 1.5vw, 0.75rem);
  --fj-fluid-space-md: clamp(1rem, 2.5vw, 1.5rem);
  --fj-fluid-space-lg: clamp(1.5rem, 4vw, 2.5rem);
  --fj-fluid-space-xl: clamp(2rem, 6vw, 4rem);

  /* Fluid Typography */
  --fj-font-size-fluid-h1: clamp(1.875rem, 4vw + 1rem, 3.75rem);
  --fj-font-size-fluid-h2: clamp(1.5rem, 2.8vw + 0.6rem, 2.5rem);
  --fj-font-size-fluid-h3: clamp(1.2rem, 1.8vw + 0.5rem, 1.875rem);
  --fj-font-size-fluid-body: clamp(0.925rem, 0.4vw + 0.8rem, 1.125rem);

  /* Optimal line-length */
  --fj-max-text-width: 65ch;
}
```

---

## 4. Container Query Architecture

The `Card` component declares `container-type: inline-size`. When placed inside a narrow layout (e.g. sidebar or mobile grid column `< 360px`), header and footer actions automatically stack into clean vertical layouts without requiring manual media query overrides:

```css
.fj-card {
  container-type: inline-size;
  min-width: 0;
}

@container (max-width: 360px) {
  .fj-card__header {
    flex-direction: column;
    align-items: flex-start;
  }
  .fj-card__footer {
    flex-direction: column;
    align-items: stretch;
  }
  .fj-card__footer > * {
    width: 100%;
  }
}
```

---

## 5. Mobile Navigation Pattern

The `Navbar` component automatically transitions into an accessible mobile drawer below `768px`:

- **Hamburger Trigger**: Toggles `aria-expanded` and `aria-controls`.
- **Keyboard Dismissal**: Pressing <kbd>Escape</kbd> closes the open menu.
- **Backdrop Blur & Safe Areas**: Uses `env(safe-area-inset-top)` for full-bleed immersion on notched screens.

```tsx
<Navbar brand={<BrandLogo />} actions={<Button variant="primary">Login</Button>}>
  <NavLink href="#home">Home</NavLink>
  <NavLink href="#docs">Documentation</NavLink>
</Navbar>
```

---

## 6. Viewport Testing Matrix

| Component |        320px        |       375px       |     768px      |     1024px     |     1440px     |    3840px (4K)     |
| --------- | :-----------------: | :---------------: | :------------: | :------------: | :------------: | :----------------: |
| `Navbar`  |      Hamburger      |     Hamburger     |    Full Nav    |    Full Nav    |    Full Nav    | Max-width centered |
| `Button`  |     Full / Auto     |    Full / Auto    |   Intrinsic    |   Intrinsic    |   Intrinsic    |     Intrinsic      |
| `Card`    | Stacks (@container) |    Responsive     |   Grid card    |   Grid card    |   Grid card    | Constrained width  |
| `Modal`   |   `100dvh - 2rem`   |  `100dvh - 2rem`  | Centered 540px | Centered 540px | Centered 540px |   Centered 540px   |
| `Tabs`    |  Horizontal scroll  | Horizontal scroll |   Fluid list   |   Fluid list   |   Fluid list   |     Fluid list     |
| `Input`   |   16px (no zoom)    |  16px (no zoom)   |  14px system   |  14px system   |  14px system   |    14px system     |
| `Grid`    |      1 Column       |     1 Column      |   2 Columns    |   3 Columns    |   4 Columns    |   Max-width grid   |
