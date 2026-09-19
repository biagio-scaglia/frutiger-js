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

## 7. Aero Window Frame (`WindowFrame`)

Authentic Windows Vista / 7 Aero glass desktop window frame with specular jewel controls (minimize, maximize, close), translucent titlebar, and header/footer containers.

### Usage

```tsx
import { WindowFrame, Badge } from '@frutiger-js/react';

export function ExplorerDemo() {
  return (
    <WindowFrame
      title="Windows Aero Explorer — C:\Media\FrutigerArchive"
      variant="aero"
      isActive={true}
      onClose={() => console.log('Close')}
      onMinimize={() => console.log('Minimize')}
      onMaximize={() => console.log('Maximize')}
      headerActions={<Badge variant="nature">Ready</Badge>}
      footer={<span>8 items • 124 MB Aero Cache</span>}
    >
      <div style={{ padding: '1rem' }}>
        <p>Aero Explorer window content...</p>
      </div>
    </WindowFrame>
  );
}
```

### Props

| Prop            | Type                                         | Default         | Description                                    |
| :-------------- | :------------------------------------------- | :-------------- | :--------------------------------------------- |
| `title`         | `ReactNode`                                  | `'Aero Window'` | Window title text or node                      |
| `icon`          | `ReactNode`                                  | `undefined`     | Icon displayed on the left side of titlebar    |
| `variant`       | `'aero' \| 'glass' \| 'glossy' \| 'frosted'` | `'aero'`        | Visual glass theme                             |
| `isActive`      | `boolean`                                    | `true`          | Active / inactive titlebar state               |
| `headerActions` | `ReactNode`                                  | `undefined`     | Extra actions or badges in the header          |
| `onClose`       | `() => void`                                 | `undefined`     | Close button click handler                     |
| `onMinimize`    | `() => void`                                 | `undefined`     | Minimize button click handler                  |
| `onMaximize`    | `() => void`                                 | `undefined`     | Maximize button click handler                  |
| `footer`        | `ReactNode`                                  | `undefined`     | Status bar content at the bottom of the window |

---

## 8. Media Gallery & Grid (`GalleryGrid` & `GalleryItem`)

Inspired by the [Frutiger Aero Archive](https://frutigeraeroarchive.org), these components provide fluid responsive media grids with tactile hover elevations, specular light badges, and keyboard-accessible preview triggers.

### Usage

```tsx
import { GalleryGrid, GalleryItem, Button } from '@frutiger-js/react';

export function ArchiveGallery() {
  return (
    <GalleryGrid cols={3} minWidth="260px" gap="1.5rem">
      <GalleryItem
        title="Windows Vista Aurora Bliss"
        category="2006 • 3840 × 2160"
        description="High-resolution organic glass ribbons and fluid aurora bokeh."
        badge="Vista"
        imageUrl="/assets/aurora.png"
        footer={
          <Button size="sm" variant="glass">
            Inspect 🔍
          </Button>
        }
        onClick={() => console.log('Open Lightbox')}
      />
    </GalleryGrid>
  );
}
```

### `GalleryGrid` Props

| Prop       | Type     | Default     | Description                    |
| :--------- | :------- | :---------- | :----------------------------- |
| `cols`     | `number` | `3`         | Target number of columns       |
| `minWidth` | `string` | `'260px'`   | Fluid column minimum width     |
| `gap`      | `string` | `'1.5rem'`  | Grid item spacing              |
| `columns`  | `string` | `undefined` | Custom `grid-template-columns` |

### `GalleryItem` Props

| Prop           | Type         | Default     | Description                                   |
| :------------- | :----------- | :---------- | :-------------------------------------------- |
| `title`        | `ReactNode`  | Required    | Item title                                    |
| `category`     | `string`     | `undefined` | Sub-header or metadata string                 |
| `description`  | `ReactNode`  | `undefined` | Item synopsis text                            |
| `imageUrl`     | `string`     | `undefined` | Media image URL                               |
| `imageNode`    | `ReactNode`  | `undefined` | Custom media element or 3D gradient container |
| `badge`        | `ReactNode`  | `undefined` | Tag badge in the upper right of preview media |
| `fallbackIcon` | `ReactNode`  | `'🖼️'`      | Fallback icon when no image is loaded         |
| `footer`       | `ReactNode`  | `undefined` | Card footer actions or author metadata        |
| `onSelect`     | `() => void` | `undefined` | Trigger callback on click or Enter/Space keys |

---

## 9. Metric & Stat Card (`StatCard`)

Glossy metric indicator cards featuring vibrant 3D crystal icon wrappers, fluid typography values, and color-coded trend indicators.

### Usage

```tsx
import { StatCard } from '@frutiger-js/react';

export function MetricsOverview() {
  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
        gap: '1rem',
      }}
    >
      <StatCard
        title="Archive Media Assets"
        value="2,480"
        subtitle="High-res wallpapers & renders"
        icon="🖼️"
        variant="aero"
        trend={{ value: '+14.2%', isPositive: true }}
      />
      <StatCard
        title="Lossless Audio & FX"
        value="1,120"
        subtitle="44.1kHz FLAC & WAV cues"
        icon="🎵"
        variant="grass"
        trend={{ value: '+4.1%', isPositive: true }}
      />
    </div>
  );
}
```

### Props

| Prop              | Type                                                 | Default     | Description                                 |
| :---------------- | :--------------------------------------------------- | :---------- | :------------------------------------------ |
| `value`           | `ReactNode`                                          | Required    | Large metric value text (e.g. "2,480")      |
| `title` / `label` | `ReactNode`                                          | `undefined` | Metric label or title                       |
| `subtitle`        | `ReactNode`                                          | `undefined` | Subtitle explanation text                   |
| `icon`            | `ReactNode`                                          | `undefined` | Icon or emoji in the glossy circle wrapper  |
| `variant`         | `'default' \| 'aero' \| 'sky' \| 'grass' \| 'glass'` | `'default'` | Glass gradient background variant           |
| `trend`           | `string \| { value: string; isPositive?: boolean }`  | `undefined` | Delta value readout (e.g. "+14.2%")         |
| `trendDirection`  | `'up' \| 'down'`                                     | `'up'`      | Arrow direction when string trend is passed |

---

## 10. Skeuomorphic FAQ & Accordion (`FaqList` & `FaqItem`)

A semantic, accessible accordion system based on HTML `<details>` and `<summary>` elements, styled with glossy aqua borders, chevron rotation, and smooth content transitions.

### Usage

```tsx
import { FaqList, FaqItem, Badge } from '@frutiger-js/react';

export function Knowledgebase() {
  return (
    <FaqList>
      <FaqItem
        question="What is Frutiger Aero?"
        badge={<Badge variant="nature">Philosophy</Badge>}
        defaultOpen
      >
        <p>Frutiger Aero is a design aesthetic that dominated technology from 2004 to 2013...</p>
      </FaqItem>
      <FaqItem
        question="Is Frutiger.js fully responsive?"
        badge={<Badge variant="nature">Architecture</Badge>}
      >
        <p>Yes, all components are engineered on a Fluid-First container query model...</p>
      </FaqItem>
    </FaqList>
  );
}
```

### `FaqItem` Props

| Prop          | Type        | Default     | Description                               |
| :------------ | :---------- | :---------- | :---------------------------------------- |
| `question`    | `ReactNode` | Required    | Accordion trigger question                |
| `badge`       | `ReactNode` | `undefined` | Category badge beside the question        |
| `icon`        | `ReactNode` | `undefined` | Optional question icon                    |
| `defaultOpen` | `boolean`   | `false`     | Initial open state for native `<details>` |

---

## Accessibility Best Practices

- All interactive controls feature **44px minimum hit targets** on touch devices via `@media (pointer: coarse)`.
- Custom focus rings with high-visibility cyan halo (`0 0 0 3px rgba(56, 189, 248, 0.5)`).
- Full `prefers-reduced-motion: reduce` support for shimmer loaders and animations.
- WCAG 2.1 AA compliant contrast across all daylight Frutiger Aero surfaces.
