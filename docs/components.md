# Frutiger.js - Component Documentation & API Reference

Welcome to the comprehensive component guide for **Frutiger.js**. Every component is engineered with pure CSS cascade layers (`@layer fj.*`), strict TypeScript types, fluid responsiveness, and full WCAG 2.2 AA accessibility compliance.

---

## Table of Contents

1. [Aero Visual Primitives (`AeroSurface`, `Glass`, `Gloss`, `Bevel`, `Glow`, `Reflection`)](#1-aero-visual-primitives)
2. [Buttons & IconButtons (`Button`, `IconButton`)](#2-buttons--iconbuttons)
3. [Forms & Fields (`Field`, `Label`, `Input`, `Textarea`, `Select`, `Checkbox`, `Radio`, `Switch`, `Slider`, `SegmentedControl`)](#3-forms--fields)
4. [Feedback & Overlays (`Toast`, `ToastProvider`, `useToast`, `Alert`, `Modal`, `Drawer`, `Tooltip`)](#4-feedback--overlays)
5. [Data & Navigation (`Navbar`, `Tabs`, `Breadcrumb`, `Pagination`, `Accordion`, `Table`, `Avatar`, `AvatarGroup`, `EmptyState`, `StatCard`, `ScrollArea`, `Dropzone`)](#5-data--navigation)
6. [Desktop & Media Experience (`WindowFrame`, `Taskbar`, `GalleryGrid`, `GalleryItem`)](#6-desktop--media-experience)

---

## 1. Aero Visual Primitives

Low-level composable layers that impart authentic skeuomorphic gloss and acrylic depth to any container.

```tsx
import { AeroSurface, Glass, Gloss, Bevel, Glow, Reflection } from '@frutiger.js/react';

export function CrystalCard() {
  return (
    <Reflection>
      <AeroSurface variant="crystal" hasBevel="deep" glow="aqua" isInteractive>
        <Gloss opacity={0.65} />
        <h3>Luminous Aqua Surface</h3>
      </AeroSurface>
    </Reflection>
  );
}
```

---

## 2. Buttons & IconButtons

### `Button`

Tactile glossy buttons with dome highlights, active indentation, and loading state spinner.

```tsx
import { Button, IconSparkles } from '@frutiger.js/react';

<Button variant="primary" size="md" leftIcon={<IconSparkles size={16} />}>
  Explore Frutiger Aero
</Button>;
```

| Prop                     | Type                                                                                | Default     | Description                              |
| :----------------------- | :---------------------------------------------------------------------------------- | :---------- | :--------------------------------------- |
| `variant`                | `'primary' \| 'secondary' \| 'success' \| 'danger' \| 'ghost' \| 'glass' \| 'aero'` | `'primary'` | Visual style preset                      |
| `size`                   | `'sm' \| 'md' \| 'lg'`                                                              | `'md'`      | Button dimensions (min 44px on touch)    |
| `isLoading`              | `boolean`                                                                           | `false`     | Displays accessible loading spinner      |
| `isFullWidth`            | `boolean`                                                                           | `false`     | Stretches button to 100% container width |
| `leftIcon` / `rightIcon` | `React.ReactNode`                                                                   | `undefined` | Optional icon adornments                 |

### `IconButton`

Dedicated circular or rounded icon button with strict `aria-label` enforcement for accessibility.

```tsx
import { IconButton, IconWater } from '@frutiger.js/react';

<IconButton
  aria-label="Synchronize Hydrosphere"
  icon={<IconWater size={18} />}
  variant="aero"
  shape="circle"
/>;
```

---

## 3. Forms & Fields

### `Field`, `Label`, `HelperText`, `ErrorMessage`

Accessible form structure wrapping inputs with automatic error announcement and required indicators.

```tsx
import { Field, Label, Input, HelperText, ErrorMessage } from '@frutiger.js/react';

<Field>
  <Label isRequired htmlFor="email">
    User Email
  </Label>
  <Input id="email" type="email" placeholder="user@web2007.net" />
  <HelperText>We will never share your email address.</HelperText>
</Field>;
```

### `SegmentedControl`

Glossy toggle pill switcher for switching view modes or binary options.

```tsx
import { SegmentedControl, IconSparkles, IconLeaf } from '@frutiger.js/react';

<SegmentedControl
  value={mode}
  onChange={setMode}
  options={[
    { value: 'glass', label: 'Aero Glass', icon: <IconSparkles size={14} /> },
    { value: 'nature', label: 'Biosphere', icon: <IconLeaf size={14} /> },
  ]}
/>;
```

---

## 4. Feedback & Overlays

### `Toast` & `useToast`

Floating acrylic notification pills with specular rim reflections and auto-dismiss timer.

```tsx
import { useToast, Button, IconWater } from '@frutiger.js/react';

export function Notifier() {
  const { toast } = useToast();

  return (
    <Button
      onClick={() =>
        toast({
          title: 'Hydrosphere Online',
          description: 'Atmospheric water caustics calibrated.',
          variant: 'success',
          icon: <IconWater size={18} />,
        })
      }
    >
      Trigger Toast
    </Button>
  );
}
```

### `Drawer`

Slide-out glass sheet from left, right, or bottom with backdrop blur, focus trap, and Escape key handling.

```tsx
import { Drawer, Button } from '@frutiger.js/react';

<Drawer isOpen={isOpen} onClose={() => setIsOpen(false)} title="Settings Vault" placement="right">
  <p>Slide-over drawer content with acrylic frosted backing.</p>
</Drawer>;
```

---

## 5. Data & Navigation

### `Pagination`

Accessible page navigator with active glass highlight, previous/next triggers, and keyboard navigation.

```tsx
import { Pagination } from '@frutiger.js/react';

<Pagination currentPage={currentPage} totalPages={10} onPageChange={setCurrentPage} />;
```

### `AvatarGroup`

Overlapping glossy avatars with customizable maximum count and `+N` excess counter.

```tsx
import { AvatarGroup, Avatar } from '@frutiger.js/react';

<AvatarGroup max={3} size="md">
  <Avatar name="Alice" />
  <Avatar name="Bob" />
  <Avatar name="Charlie" />
  <Avatar name="David" />
</AvatarGroup>;
```

### `EmptyState`

Dimensional empty data placeholder with luminous halo icon and interactive action buttons.

```tsx
import { EmptyState, Button, IconWater } from '@frutiger.js/react';

<EmptyState
  icon={<IconWater size={36} />}
  title="No Hydrosphere Data"
  description="Your water telemetry storage is empty."
  actions={<Button variant="primary">Sync Sensors</Button>}
/>;
```

---

## 6. Desktop & Media Experience

### `WindowFrame`

Authentic Windows Vista / 7 acrylic glass desktop application window with minimize, maximize, and close controls.

```tsx
import { WindowFrame, Badge } from '@frutiger.js/react';

<WindowFrame
  title="Aqua Media Player"
  onClose={() => console.log('Closed')}
  actions={<Badge variant="nature">Running</Badge>}
>
  <p>Inside the window frame.</p>
</WindowFrame>;
```

### `Taskbar`, `TaskbarStart`, `TaskbarItem`, `TaskbarTray`, `StartMenu`

Authentic glass taskbar with Start Orb, running application tabs, live system clock, and start menu popup.
