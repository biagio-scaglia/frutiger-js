# Frutiger.js - Component Documentation & API Reference

Welcome to the comprehensive component guide for **Frutiger.js**. Every component is engineered with pure CSS cascade layers (`@layer fj.*`), strict TypeScript types, fluid responsiveness, and full WCAG 2.1 AA accessibility compliance.

---

## 1. Custom Overflow & ScrollArea (`ScrollArea`)

The `ScrollArea` component provides cross-browser skeuomorphic Frutiger Aero scrollbars with translucent aqua thumbs, subtle inset groove tracks, momentum scrolling, and dynamic top/bottom gradient shadow masks.

### Usage

```tsx
import { ScrollArea } from '@frutiger-js/react';

export function MyFeed() {
  return (
    <ScrollArea maxHeight="300px" showOverflowShadows>
      <div className="content">
        <p>Long scrollable feed item 1...</p>
        <p>Long scrollable feed item 2...</p>
      </div>
    </ScrollArea>
  );
}
```

### Props

| Prop                  | Type               | Default     | Description                                    |
| :-------------------- | :----------------- | :---------- | :--------------------------------------------- |
| `maxHeight`           | `string \| number` | `'300px'`   | Maximum height before scrolling begins         |
| `maxWidth`            | `string \| number` | `undefined` | Maximum width for horizontal scroll            |
| `showOverflowShadows` | `boolean`          | `true`      | Enables dynamic top/bottom gradient fade masks |
| `className`           | `string`           | `undefined` | Optional CSS classes                           |

### Pure CSS Utility

You can also apply custom Aero scrollbars directly to any element using the CSS class:

```html
<div class="fj-scroll-area fj-scrollbar-aero" style="max-height: 200px;">
  <!-- content -->
</div>
```

---

## 2. File Upload & Dropzone (`Dropzone`)

A tactile Frutiger Aero dropzone for uploading files, featuring glossy sky border highlights, drag-over micro-animations, and full keyboard/screen-reader support.

### Usage

```tsx
import { Dropzone } from '@frutiger-js/react';

export function MediaUploader() {
  return (
    <Dropzone
      title="Drag & drop wallpapers or click to browse"
      subtitle="Supports PNG, JPG, WebP, and SVG up to 50MB"
      accept="image/*"
      onFilesSelected={files => console.log(files)}
    />
  );
}
```

### Props

| Prop              | Type                        | Default                                | Description                                       |
| :---------------- | :-------------------------- | :------------------------------------- | :------------------------------------------------ |
| `title`           | `ReactNode`                 | `'Drop files here or click to browse'` | Main call-to-action title                         |
| `subtitle`        | `ReactNode`                 | `'Supports PNG, JPG...'`               | Helper file type instructions                     |
| `icon`            | `ReactNode`                 | `<IconCloud size={24} />`              | Custom top icon                                   |
| `accept`          | `string`                    | `undefined`                            | Native file accept filter                         |
| `multiple`        | `boolean`                   | `false`                                | Allow multiple file selections                    |
| `disabled`        | `boolean`                   | `false`                                | Disables upload interactions                      |
| `onFilesSelected` | `(files: FileList) => void` | `undefined`                            | Callback fired when files are selected or dropped |

---

## 3. Skeleton Shimmer Loader (`Skeleton`)

Provides an iridescent, glass-refracting loading placeholder with smooth horizontal shimmer animations.

### Usage

```tsx
import { Skeleton } from '@frutiger-js/react';

export function LoadingCard() {
  return (
    <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
      <Skeleton variant="circle" width="48px" height="48px" />
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
        <Skeleton height="16px" width="70%" />
        <Skeleton height="12px" width="40%" />
      </div>
    </div>
  );
}
```

### Props

| Prop      | Type                           | Default     | Description                  |
| :-------- | :----------------------------- | :---------- | :--------------------------- |
| `variant` | `'rect' \| 'circle' \| 'pill'` | `'rect'`    | Shape of the shimmer element |
| `width`   | `string \| number`             | `undefined` | Width of the placeholder     |
| `height`  | `string \| number`             | `undefined` | Height of the placeholder    |

---

## 4. Range Slider (`Slider`)

Tactile skeuomorphic slider with spherical glossy thumb, inner track groove, and live formatted value readout.

### Usage

```tsx
import { useState } from 'react';
import { Slider } from '@frutiger-js/react';

export function VolumeControl() {
  const [volume, setVolume] = useState(75);

  return (
    <Slider
      label="Master Audio Output"
      value={volume}
      min={0}
      max={100}
      onChange={e => setVolume(Number(e.target.value))}
      valueFormat={v => `${v}%`}
    />
  );
}
```

### Props

| Prop          | Type                      | Default             | Description                       |
| :------------ | :------------------------ | :------------------ | :-------------------------------- |
| `label`       | `ReactNode`               | `undefined`         | Accessible label above the slider |
| `showValue`   | `boolean`                 | `true`              | Toggles the numeric value badge   |
| `valueFormat` | `(val: number) => string` | `(v) => \`\${v}%\`` | Custom formatter function         |
| `min`         | `number`                  | `0`                 | Minimum range value               |
| `max`         | `number`                  | `100`               | Maximum range value               |
| `step`        | `number`                  | `1`                 | Step granularity                  |
| `disabled`    | `boolean`                 | `false`             | Disables user interaction         |

---

## 5. Etched Divider (`Divider`)

Glass-etched horizontal or vertical rule with translucent specular highlights and optional center label.

### Usage

```tsx
import { Divider } from '@frutiger-js/react';

// Horizontal with label
<Divider label="OR" />

// Simple horizontal
<Divider />

// Vertical
<Divider orientation="vertical" />
```

---

## 6. Responsive Navigation Bar (`Navbar` & `NavLink`)

Sticky frosted-glass navigation bar with 1024px mobile drawer breakpoint, escape key dismissal, and seamless active state indicators.

### Usage

```tsx
import { Navbar, NavLink, Avatar, Button } from '@frutiger-js/react';

export function Navigation() {
  return (
    <Navbar
      brand={
        <span>
          Frutiger<strong>.js</strong>
        </span>
      }
      actions={
        <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
          <Avatar name="Biagio Scaglia" size="sm" />
          <Button variant="primary" size="sm">
            GitHub
          </Button>
        </div>
      }
    >
      <NavLink href="#overview" isActive>
        Overview
      </NavLink>
      <NavLink href="#components">Components</NavLink>
      <NavLink href="#tokens">Tokens</NavLink>
    </Navbar>
  );
}
```

---

## Accessibility Best Practices

- All interactive controls feature **44px minimum hit targets** on touch devices via `@media (pointer: coarse)`.
- Custom focus rings with high-visibility cyan halo (`0 0 0 3px rgba(56, 189, 248, 0.5)`).
- Full `prefers-reduced-motion: reduce` support for shimmer loaders and animations.
- WCAG 2.1 AA compliant contrast across all daylight Frutiger Aero surfaces.
