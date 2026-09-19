# @frutiger-js/react

Modern, accessible, and fully-typed React component library inspired by Frutiger Aero and Web 2.0 aesthetics.

## Features

- 💎 **Authentic Frutiger Aero Aesthetics**: Translucent acrylic glass, glossy dome buttons, specular reflections, and nature gradients.
- ⚡ **Zero Heavy Runtime**: Layered on top of native CSS Cascade Layers (`@frutiger-js/core`).
- 🦾 **TypeScript First**: Strict typed props extending native HTML elements with IDE autocomplete.
- ♿ **Accessible**: WCAG 2.2 AA compliant, keyboard navigability, focus visible, screen-reader semantics, and reduced motion safety.
- 📦 **Tree Shakeable**: Standard ESM build with generated TypeScript definitions (`.d.ts`).

## Installation

```bash
npm install @frutiger-js/core @frutiger-js/react
```

## Quick Start

```tsx
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
    <Card variant="glass">
      <CardHeader>
        <CardTitle>Welcome to Frutiger.js</CardTitle>
        <Badge variant="nature">Online</Badge>
      </CardHeader>
      <CardContent>
        <Input placeholder="Search system..." label="Query" />
      </CardContent>
      <CardFooter>
        <Button variant="aero">Launch Application</Button>
      </CardFooter>
    </Card>
  );
}
```

## License

MIT © Biagio Scaglia
